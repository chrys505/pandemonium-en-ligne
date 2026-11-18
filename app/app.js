// ===== Pandémonium des mots : le fonctionnement de l'appli (prototype) =====
// Tout est gardé sur l'appareil (localStorage). Pas de compte, pas de serveur, pas de paiement.

// ---------- Mémoire de l'appli ----------
const CLE = "pandemonium-des-mots";

function etatDeDepart() {
  return { xp: 0, serie: 0, dernierJour: "", sessions: {}, boites: {}, favoris: [], collection: [], bonusRevision: "", soiree: { jour: "", n: 0 }, gels: 0, coffre: "", relance: { jour: "", n: 0 } };
}

function charger() {
  try {
    const brut = localStorage.getItem(CLE);
    return brut ? Object.assign(etatDeDepart(), JSON.parse(brut)) : etatDeDepart();
  } catch (e) {
    return etatDeDepart();
  }
}

function sauver() {
  try { localStorage.setItem(CLE, JSON.stringify(etat)); } catch (e) { /* mémoire indisponible : tant pis */ }
}

let etat = charger();

// ---------- Les dates ----------
function cleJour(d) {
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

const maintenant = new Date();
const aujourdhui = cleJour(maintenant);
const hier = cleJour(new Date(maintenant.getFullYear(), maintenant.getMonth(), maintenant.getDate() - 1));
const avantHier = cleJour(new Date(maintenant.getFullYear(), maintenant.getMonth(), maintenant.getDate() - 2));
const numeroJour = Math.floor(Date.UTC(maintenant.getFullYear(), maintenant.getMonth(), maintenant.getDate()) / 86400000);

function dansNJours(n) {
  return cleJour(new Date(maintenant.getFullYear(), maintenant.getMonth(), maintenant.getDate() + n));
}

// ---------- Petits outils ----------
// Si un élément manque (par exemple une vieille page gardée en mémoire avec un programme plus récent),
// on renvoie un élément « fantôme » invisible au lieu de rien : l'appli continue au lieu de s'arrêter net.
function $(id) {
  return document.getElementById(id) || document.createElement("div");
}

function echapper(texte) {
  return String(texte || "").replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

function melanger(liste) {
  const copie = liste.slice();
  for (let i = copie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = copie[i]; copie[i] = copie[j]; copie[j] = t;
  }
  return copie;
}

function attendre(ms) { return new Promise(function (fini) { setTimeout(fini, ms); }); }

function echelle(mot) { return Math.min(1, 10 / Math.max(1, mot.length)).toFixed(2); }

function parler(texte, langue) {
  if (!("speechSynthesis" in window) || !texte) return;
  window.speechSynthesis.cancel();
  const phrase = new SpeechSynthesisUtterance(texte);
  phrase.lang = langue;
  // Cherche une voix avec le bon accent (ex. fr-CA) ; sinon, la voix française habituelle
  const voix = window.speechSynthesis.getVoices().find(function (v) {
    return v.lang.replace("_", "-").toLowerCase() === langue.toLowerCase();
  });
  if (voix) phrase.voice = voix;
  phrase.rate = 0.9;
  window.speechSynthesis.speak(phrase);
}

// ---------- Le contenu : celui du site + la collection de l'utilisateur ----------
function tousLesMots() {
  const perso = etat.collection.filter(function (e) { return e.type === "mot" || e.type === "invention"; }).map(function (e) {
    return { mot: e.titre, definition: e.texte, anglais: "", espagnol: "", perso: true,
      invention: e.type === "invention", exemplePerso: e.type === "invention" ? e.auteur : "" };
  });
  return mots.concat(perso);
}

function toutesLesCitations() {
  const base = (typeof citationsPlus !== "undefined" ? citationsPlus : []).map(function (c) { return { texte: c[0], auteur: c[1] }; });
  const perso = etat.collection.filter(function (e) { return e.type === "citation"; }).map(function (e) { return { texte: e.texte, auteur: e.auteur }; });
  return base.concat(perso);
}

function toutesLesPensees() {
  const classiques = typeof philosophies !== "undefined" ? philosophies : [];
  const base = classiques.concat((typeof philosophiesPlus !== "undefined" ? philosophiesPlus : []).map(function (p) { return { texte: p[0], auteur: p[1] }; }));
  const perso = etat.collection.filter(function (e) { return e.type === "pensee"; }).map(function (e) { return { texte: e.texte, auteur: e.auteur }; });
  return base.concat(perso);
}

const expressionsDispo = (typeof expressionsPlus !== "undefined" ? expressionsPlus : []).map(function (e) {
  return { texte: e[0], sens: e[1] };
});

// Les contenus partagés avec le site (contenus.js)
const repliquesDispo = typeof repliques !== "undefined" ? repliques : [];
const francophonesDispo = typeof francophones !== "undefined" ? francophones : [];
const poemesDispo = typeof poemes !== "undefined" ? poemes : [];
const sciencesDispo = typeof sciences !== "undefined" ? sciences : [];
const philosophesDispo = typeof philosophes !== "undefined" ? philosophes : [];
const metaphoresDispo = typeof metaphores !== "undefined" ? metaphores : [];
const conceptsDispo = typeof concepts !== "undefined" ? concepts : [];
const nomsPropresDispo = typeof nomsPropres !== "undefined" ? nomsPropres : [];
const sonoresDispo = (typeof sonores !== "undefined" ? sonores : []).map(function (s) {
  return { genre: s[0], texte: s[1], info: s[2] };
});
// « Pour sourire » (galéjades, contrepèteries, mots qui claquent) et « Ça sonne bien » (vers, prose, emphases)
const GENRES_DROLES = ["Galéjade", "Contrepèterie", "Mots qui claquent", "Glissement de sons", "Calembour"];

// Les phrases de départ du jeu « Glissements de sons » (mode Soirée)
const DEPARTS_GLISSEMENT = [
  "la grotte de Lascaux", "le loup de la plaine", "le bar de la gare", "le roi de Rome", "la pêche du lundi",
  "la gloire de mon père", "le chat de la voisine", "la tarte de ma tante", "le pont de Paris", "la plume du poète",
  "le vin de Bordeaux", "la reine des neiges", "le sabre du pirate", "la lune de miel", "le bal des vampires"
];
const droleDispo = sonoresDispo.filter(function (s) { return GENRES_DROLES.indexOf(s.genre) !== -1; });
const beauDispo = sonoresDispo.filter(function (s) { return GENRES_DROLES.indexOf(s.genre) === -1; });

function auJour(liste, decalage) {
  return liste.length ? liste[(numeroJour + (decalage || 0)) % liste.length] : null;
}

// Le mot du jour, avec jusqu'à 3 relances par jour (« je le connais déjà, un autre »)
const RELANCES_MAX = 3;

function relancesUtilisees() {
  return etat.relance && etat.relance.jour === aujourdhui ? etat.relance.n : 0;
}

// Le mot du jour vient des mots utiles ; les mots rares arrivent en bonus
function estRare(m) {
  return !m.perso && typeof niveauDuMot === "function" && niveauDuMot(m.mot) === "rare";
}

function estArgot(m) {
  return !m.perso && typeof niveauDuMot === "function" && niveauDuMot(m.mot) === "argot";
}

function estAntan(m) {
  return !m.perso && typeof niveauDuMot === "function" && niveauDuMot(m.mot) === "antan";
}

function motsUtiles() {
  // Le mot du jour n'est jamais un mot trop courant (ni rare, ni argot, ni d'antan : ceux-là ont leur carte bonus)
  const utiles = tousLesMots().filter(function (m) {
    return m.perso || (typeof niveauDuMot === "function" ? niveauDuMot(m.mot) === "utile" : true);
  });
  return utiles.length ? utiles : tousLesMots();
}

function motsRaresDispo() {
  return tousLesMots().filter(estRare);
}

function motDuJour() { return auJour(motsUtiles(), relancesUtilisees() * 41); }

function motRareDuJour() { return auJour(motsRaresDispo(), 7); }

// Le bonus tourne sur trois jours : un mot rare, un juron ou une insulte d'antan, un mot d'argot
function bonusDuJour() {
  const argot = tousLesMots().filter(estArgot);
  const antan = tousLesMots().filter(estAntan);
  if (argot.length && numeroJour % 3 === 2) return { type: "argot", donnee: auJour(argot, 11) };
  if (antan.length && numeroJour % 3 === 1) return { type: "antan", donnee: auJour(antan, 5) };
  return { type: "rare", donnee: motRareDuJour() };
}

// ---------- Compteurs (série et points) ----------
// La série tient si on a joué aujourd'hui ou hier ; un gel la protège si on a raté un seul jour
function serieActuelle() {
  if (etat.dernierJour === aujourdhui || etat.dernierJour === hier) return etat.serie;
  if (etat.dernierJour === avantHier && etat.gels > 0) return etat.serie;
  return 0;
}

function majCompteurs() {
  $("serie").textContent = serieActuelle();
  $("xp").textContent = etat.xp;
  $("gels").textContent = etat.gels || 0;
}

// ---------- Donner envie de revenir : la semaine, demain, le compte à rebours ----------
const JOURS = ["L", "M", "M", "J", "V", "S", "D"];

function majSemaine() {
  const conteneur = $("semaine");
  conteneur.innerHTML = "";
  const lundi = new Date(maintenant.getFullYear(), maintenant.getMonth(), maintenant.getDate() - ((maintenant.getDay() + 6) % 7));
  for (let i = 0; i < 7; i++) {
    const d = new Date(lundi.getFullYear(), lundi.getMonth(), lundi.getDate() + i);
    const cle = cleJour(d);
    const el = document.createElement("div");
    el.className = "jour" + (etat.sessions[cle] ? " fait" : "") + (cle === aujourdhui ? " aujourdhui" : "");
    el.innerHTML = "<i>" + (etat.sessions[cle] ? "🔥" : "") + "</i>" + JOURS[i];
    conteneur.appendChild(el);
  }
}

// Le programme du jour : une ligne par carte (sauf le mot, déjà en grand), touchable
function resumeCarte(c) {
  const d = c.donnee;
  switch (c.type) {
    case "expression": return ["💬", "L'expression", d.texte];
    case "francophone": return ["🌍", "Francophonie · " + d.pays, d.texte];
    case "metaphore": return ["🎨", "Au sens figuré", d.mot + " : " + d.figure];
    case "concept": return ["🧠", "Le concept · " + d.famille, d.nom];
    case "nompropre": return ["🏛️", "Le nom propre", d.nom + " : " + d.qui];
    case "citation": return ["✒️", "La citation", "« " + d.texte + " »"];
    case "replique": return ["🎭", "Théâtre · réciter", d.piece];
    case "pensee": return ["💭", "La pensée", "« " + d.texte + " »"];
    case "poeme": return ["🪶", "Le petit poème", d.auteur];
    case "philosophe": return ["🦉", "Le philosophe", d.auteur + " · " + d.notion];
    case "sonore": return GENRES_DROLES.indexOf(d.genre) !== -1 ? ["😄", "Pour sourire · " + d.genre, d.texte.replace(/\n/g, " ")] : ["🎶", "Ça sonne bien · " + d.genre, d.info];
    case "science": return d.domaine === "Paradoxe" ? ["🌀", "Le paradoxe", d.titre || "Un paradoxe à méditer"] : ["🔭", "Science · " + d.domaine, d.texte];
    case "peintre": return ["🖼️", "Le peintre du jour", d.peintre + " · " + d.oeuvre];
    case "rare": return ["💎", "Le mot rare · bonus", "Un mot de " + d.mot.length + " lettres, pour les curieux"];
    case "argot": return ["🎤", "Le mot de la rue · bonus", "De l'argot, la langue du rap"];
    case "antan": return ["⚔️", "Juron ou insulte d'antan · bonus", "Pour pester avec panache"];
    default: return null;
  }
}

function majProgramme() {
  const liste = cartesDuJour();
  const conteneur = $("programme");
  conteneur.innerHTML = "";
  liste.forEach(function (c, i) {
    if (c.type === "mot") return;
    const r = resumeCarte(c);
    if (!r) return;
    const ligne = document.createElement("button");
    ligne.type = "button";
    ligne.className = "ligne-programme";
    ligne.innerHTML = '<span class="icone-programme">' + r[0] + "</span>" +
      '<span class="texte-programme"><b>' + echapper(r[1]) + "</b><span>" + echapper(r[2] || "") + "</span></span>" +
      '<span class="fleche">›</span>';
    ligne.addEventListener("click", function () {
      cartes = cartesDuJour();
      position = Math.min(i, cartes.length - 1);
      montrer("session");
      afficherCarte();
    });
    conteneur.appendChild(ligne);
  });
}

function majTeaser() {
  const tous = motsUtiles();
  const demain = tous.length ? tous[(numeroJour + 1) % tous.length] : null;
  const tableauDemain = tableauxDispo.length ? tableauxDispo[(numeroJour + 1) % tableauxDispo.length] : null;
  if (!demain) { $("teaser").hidden = true; return; }
  $("teaser").innerHTML = "🔮 <b>Demain</b> : un mot de " + demain.mot.length + " lettres qui commence par « " +
    echapper(demain.mot.charAt(0)) + " »" + (tableauDemain ? ", sous un tableau " + deOuD(tableauDemain.peintre) + "<b>" + echapper(tableauDemain.peintre) + "</b>" : "") + "…";
}

// « de » devient « d' » devant une voyelle ou un h muet (d'Eugène, de Monet)
function deOuD(nom) {
  return /^[aeiouyhàâäéèêëîïôöùûü]/i.test(nom) ? "d'" : "de ";
}

function majCompteARebours() {
  if (!etat.sessions[aujourdhui]) return;
  const minuit = new Date(maintenant.getFullYear(), maintenant.getMonth(), maintenant.getDate() + 1);
  const reste = Math.max(0, minuit - new Date());
  const h = Math.floor(reste / 3600000);
  const m = Math.floor((reste % 3600000) / 60000);
  $("compte-rebours").textContent = "⏳ Prochaine session dans " + h + " h " + String(m).padStart(2, "0") + " min";
}

setInterval(majCompteARebours, 30000);

// Une pluie de braises pour fêter un palier
function feterAvecDesBraises() {
  for (let i = 0; i < 28; i++) {
    const b = document.createElement("span");
    b.className = "braise";
    b.style.left = Math.random() * 100 + "vw";
    b.style.setProperty("--dx", (Math.random() * 120 - 60) + "px");
    b.style.animationDelay = (Math.random() * 0.8) + "s";
    document.body.appendChild(b);
    setTimeout(function () { b.remove(); }, 3600);
  }
}

// ---------- Navigation entre les onglets ----------
function allerA(nom) {
  ["aujourdhui", "reviser", "collection", "soiree", "profil"].forEach(function (n) {
    $("ecran-" + n).hidden = (n !== nom);
  });
  document.querySelectorAll(".nav").forEach(function (b) {
    b.classList.toggle("actif", b.dataset.ecran === nom);
  });
  if (nom === "aujourdhui") majAccueil();
  if (nom === "reviser") majReviser();
  if (nom === "collection") majCollection();
  if (nom === "profil") { majProfil(); majGalerie(); }
  if (nom === "soiree" && !$("carte-soiree").innerHTML) nouveauSujet(false);
  window.scrollTo(0, 0);
}

document.querySelectorAll(".nav").forEach(function (b) {
  b.addEventListener("click", function () { allerA(b.dataset.ecran); });
});

// Dans l'onglet « Aujourd'hui », une seule partie est visible à la fois
function montrer(partie) {
  ["accueil-session", "session", "quiz", "resultat"].forEach(function (p) { $(p).hidden = (p !== partie); });
  window.scrollTo(0, 0);
}

// ---------- Le soleil du jour : heures de lever et de coucher (calcul astronomique, pour Paris) ----------
// Pas besoin de demander la position : la France entière est à une demi-heure près.
function heuresDuSoleil(date) {
  const lat = 48.85, lon = 2.35, rad = Math.PI / 180;
  const n = Math.floor((date - new Date(date.getFullYear(), 0, 1)) / 864e5) + 1;
  const g = 2 * Math.PI / 365 * (n - 1);
  // Équation du temps (minutes) et déclinaison du Soleil (radians)
  const eqt = 229.18 * (0.000075 + 0.001868 * Math.cos(g) - 0.032077 * Math.sin(g) - 0.014615 * Math.cos(2 * g) - 0.040849 * Math.sin(2 * g));
  const decl = 0.006918 - 0.399912 * Math.cos(g) + 0.070257 * Math.sin(g) - 0.006758 * Math.cos(2 * g) +
    0.000907 * Math.sin(2 * g) - 0.002697 * Math.cos(3 * g) + 0.00148 * Math.sin(3 * g);
  const angle = Math.acos(Math.cos(90.833 * rad) / (Math.cos(lat * rad) * Math.cos(decl)) - Math.tan(lat * rad) * Math.tan(decl)) / rad;
  const decalage = -date.getTimezoneOffset(); // minutes d'écart avec l'heure universelle (été / hiver compris)
  return {
    lever: 720 - 4 * (lon + angle) - eqt + decalage,   // en minutes depuis minuit
    coucher: 720 - 4 * (lon - angle) - eqt + decalage
  };
}

function enHeure(minutes) {
  const m = Math.round(minutes);
  return Math.floor(m / 60) + " h " + String(m % 60).padStart(2, "0");
}

// La salutation suit le soleil : aurore, matinée, après-midi, crépuscule, soirée, nuit
function salutation(d) {
  const s = heuresDuSoleil(d);
  const t = d.getHours() * 60 + d.getMinutes();
  // [version claire, version sombre]
  const m = etat.maudit ? 1 : 0;
  if (t >= s.lever - 30 && t < s.lever + 30) return ["Belle aurore.", "Sale aurore."][m];
  if (t >= s.lever + 30 && t < 12 * 60) return ["Le jour point, belle matinée.", "Le jour point, sale matinée."][m];
  if (t >= 12 * 60 && t < s.coucher - 30) return ["Bel après-midi.", "Sale journée."][m];
  if (t >= s.coucher - 30 && t < s.coucher + 30) return ["Beau crépuscule.", "Sale crépuscule."][m];
  if (t >= s.coucher + 30 && t < 23 * 60) return ["Belle soirée.", "Sale soirée."][m];
  return ["Belle nuit.", "Sale nuit."][m];
}

// ---------- La version sombre : « Deux minutes par jour pour maudire le monde » ----------
function auJourDans(liste, decalage) {
  return liste[(numeroJour + (decalage || 0)) % liste.length];
}

function motParNom(nom) {
  return tousLesMots().find(function (m) { return m.mot === nom; });
}

// Le grimoire : l'insulte du jour en grand, puis la rumeur, le tyran, l'humour noir et l'insulte de la rue
function rendreMaudit(auHasardTout) {
  if (typeof insultesAntan === "undefined") return;
  const prendre = function (liste, decalage) { return auHasardTout ? auHasard(liste) : auJourDans(liste, decalage); };
  const antan = motParNom(prendre(insultesAntan, 0)) || { mot: "Maraud", definition: "Coquin, vaurien." };
  const rue = motParNom(prendre(insultesArgot, 3)) || { mot: "Tocard", definition: "Nul, minable." };
  const r = prendre(rumeurs, 1), d = prendre(dictateurs, 2), h = prendre(humourNoir, 5);
  $("etiquette-hero").textContent = "⚔️ L'insulte du jour";
  $("apercu-mot").textContent = antan.mot;
  $("apercu-mot").style.setProperty("--echelle", echelle(antan.mot));
  $("apercu-def").textContent = antan.definition;
  $("grimoire").innerHTML =
    '<h2 class="titre-2">Le grimoire du jour</h2>' +
    '<article class="carte carte-grimoire"><p class="etiquette">🕵️ La rumeur</p>' +
      '<p class="grimoire-titre">' + echapper(r[0]) + "</p>" +
      '<p class="texte-doux">' + echapper(r[1]) + "</p>" +
      '<button class="bouton petit-bouton reveler" type="button" data-fin-mot="' + echapper(r[2]) + '">🔦 Le fin mot</button></article>' +
    '<article class="carte carte-grimoire"><p class="etiquette">☠️ Le tyran</p>' +
      '<p class="grimoire-titre">' + echapper(d[0]) + "</p>" +
      '<p class="texte-doux">' + echapper(d[1]) + "</p>" +
      '<p class="grimoire-revers"><b>Le revers</b> · ' + echapper(d[2]) + "</p></article>" +
    '<article class="carte carte-grimoire"><p class="etiquette">💀 Humour noir</p>' +
      '<p class="citation-grande">' + echapper(h) + "</p></article>" +
    '<article class="carte carte-grimoire"><p class="etiquette">🎤 L\'insulte de la rue</p>' +
      '<p class="grimoire-titre">' + echapper(rue.mot) + "</p>" +
      '<p class="texte-doux">' + echapper(rue.definition) + "</p></article>" +
    '<button class="bouton principal large" id="encore-maudit" type="button">🔥 Encore une horreur</button>' +
    '<p class="petit">Touche ☀️ en haut pour revenir à la lumière.</p>';
}

$("grimoire").addEventListener("click", function (e) {
  const fin = e.target.closest("[data-fin-mot]");
  if (fin) { fin.outerHTML = '<p class="grimoire-revers"><b>Le fin mot</b> · ' + echapper(fin.dataset.finMot) + "</p>"; return; }
  if (e.target.closest("#encore-maudit")) { rendreMaudit(true); $("grimoire").scrollIntoView({ behavior: "smooth" }); }
});

function appliquerVersion() {
  document.body.classList.toggle("maudit", !!etat.maudit);
  $("devise-verbe").textContent = etat.maudit ? "maudire" : "mieux dire";
  $("bascule-version").textContent = etat.maudit ? "☀️" : "😈";
  $("bascule-version").setAttribute("aria-label", etat.maudit ? "Revenir à la version claire" : "Passer à la version Pandémonium");
  $("titre-soiree").textContent = etat.maudit ? "L'antre" : "Le salon";
  $("nom-pyramide").textContent = etat.maudit ? "La pyramide maudite" : "La pyramide";
  $("sous-titre-soiree").textContent = etat.maudit
    ? "Éteins la lumière, pose le téléphone au milieu, et que les malédictions commencent."
    : "Pose le téléphone au milieu, lis à voix haute, et que la partie commence.";
  $("carte-soiree").innerHTML = ""; // le prochain sujet sera tiré dans la bonne version
  majBoutonQuintessence();
  appliquerFond();
}

// Le bouton 😈 / ☀️ en haut : on passe d'un monde à l'autre (depuis n'importe quel onglet, on revient à l'accueil)
$("bascule-version").addEventListener("click", function () {
  etat.maudit = !etat.maudit;
  sauver();
  // Un éclair de braise au passage d'un monde à l'autre
  document.body.classList.remove("bascule");
  void document.body.offsetWidth;
  document.body.classList.add("bascule");
  appliquerVersion();
  allerA("aujourdhui");
  sonBascule();
});

// La salutation change en direct, même quand l'appli reste ouverte (et dès qu'on y revient)
function majSalutation() {
  const el = $("salut");
  const nouvelle = salutation(new Date());
  if (el && el.textContent !== nouvelle) el.textContent = nouvelle;
}
setInterval(majSalutation, 60000);
document.addEventListener("visibilitychange", function () { if (!document.hidden) majSalutation(); });

// ---------- Accueil ----------
function majAccueil() {
  $("date").textContent = maintenant.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
  const instant = new Date();
  const soleil = heuresDuSoleil(instant);
  $("salut").textContent = salutation(instant);
  $("date").textContent += " · ☀︎ " + enHeure(soleil.lever) + " – " + enHeure(soleil.coucher);
  const m = motDuJour();
  $("apercu-mot").textContent = m.mot;
  $("apercu-mot").style.setProperty("--echelle", echelle(m.mot));
  $("apercu-def").textContent = m.definition;
  const fait = !!etat.sessions[aujourdhui];
  $("deja-fait").hidden = !fait;
  $("commencer").textContent = fait ? "🍯 Reboire l'élixir" : "🍯 Boire l'élixir du jour";
  // La fiole du jour : presque vide tant que l'élixir n'est pas bu, pleine ensuite
  $("fiole-hero").classList.toggle("pleine", fait);
  $("fiole-hero-liquide").style.setProperty("--apres", fait ? "100%" : "18%");
  document.querySelector(".detail-hero").hidden = fait;
  majSemaine();
  majProgramme();
  majTeaser();
  majCompteARebours();
  majRappelRevision();
  majBoutonQuintessence();
  if (etat.maudit) rendreMaudit(false);
  else $("etiquette-hero").textContent = "Le mot du jour";
  montrer("accueil-session");
}

// ---------- Faire revenir les mots : c'est en les revoyant qu'on les retient ----------
function motsARevoir() {
  return tousLesMots().filter(function (m) {
    const b = etat.boites[m.mot];
    return b && b.prochain <= aujourdhui;
  });
}

// Les mots déjà rencontrés (dans le quiz ou mis en favori)
function motsDejaVus() {
  return tousLesMots().filter(function (m) { return !!etat.boites[m.mot]; });
}

// Un mot à faire revenir : un mot à revoir en priorité, sinon un mot déjà vu, sinon n'importe lequel
function motQuiRevient(liste) {
  const dus = motsARevoir().filter(function (m) { return !liste || liste.indexOf(m) !== -1; });
  if (dus.length) return auHasard(dus);
  const vus = motsDejaVus().filter(function (m) { return !liste || liste.indexOf(m) !== -1; });
  if (vus.length && Math.random() < 0.6) return auHasard(vus);
  return null;
}

// Un mot mis en favori entre dans les révisions : il reviendra dès demain
function entrerEnRevision(nom) {
  if (!etat.boites[nom]) etat.boites[nom] = { boite: 0, prochain: dansNJours(1) };
}

function majRappelRevision() {
  const n = motsARevoir().length;
  const bouton = $("rappel-revision");
  bouton.hidden = n === 0;
  if (n) bouton.innerHTML = "🧠 <b>" + n + " mot" + (n > 1 ? "s" : "") + " à revoir aujourd'hui</b><span>C'est en les revoyant qu'on les retient · 1 minute</span>";
}

$("rappel-revision").addEventListener("click", function () { lancerQuiz(true); });

// ---------- Les sujets de conversation (tête-à-tête) ----------
const questionsDispo = typeof questionsConversation !== "undefined" ? questionsConversation : [];

function anecdoteAConter() {
  const anecdotes = sciencesDispo.filter(function (s) { return s.domaine !== "Paradoxe"; });
  const choix = [];
  if (anecdotes.length) choix.push({ icone: "🔭", titre: "Une anecdote à raconter", texte: auHasard(anecdotes).texte });
  if (nomsPropresDispo.length) {
    const n = auHasard(nomsPropresDispo);
    choix.push({ icone: "🏛️", titre: "Une histoire à raconter : " + n.nom, texte: n.anecdote });
  }
  return auHasard(choix);
}

function questionAPoser() {
  const paradoxes = sciencesDispo.filter(function (s) { return s.domaine === "Paradoxe"; });
  if (paradoxes.length && Math.random() < 0.3) {
    const p = auHasard(paradoxes);
    return { icone: "🌀", titre: "Un paradoxe à soumettre : " + (p.titre || ""), texte: p.texte + " Qu'en penses-tu ?" };
  }
  return { icone: "❓", titre: "Une question qui fait parler", texte: auHasard(questionsDispo) };
}

function motAPlacer() {
  const m = motQuiRevient(motsUtiles()) || motDuJour();
  return { icone: "✒️", titre: "Un mot à placer : " + m.mot, texte: m.definition + ((exemples[m.mot] || [])[0] ? " Par exemple : « " + exemples[m.mot][0][1] + " »" : "") };
}

function blocSujet(s) {
  return '<div class="sujet-conversation"><p class="etiquette-petite">' + s.icone + " " + echapper(s.titre) + "</p>" +
    '<p class="texte-doux">' + echapper(s.texte) + "</p></div>";
}

function montrerPanne() {
  const sujet = Math.random() < 0.5 ? questionAPoser() : anecdoteAConter();
  $("conversation-contenu").innerHTML = '<p class="etiquette">💬 Panne de conversation</p>' + blocSujet(sujet) +
    '<button class="bouton principal large" id="autre-sujet-conv" type="button">Un autre sujet</button>';
  $("autre-sujet-conv").addEventListener("click", montrerPanne);
  $("fenetre-conversation").hidden = false;
}

function montrerRendezVous() {
  $("conversation-contenu").innerHTML = '<p class="etiquette">🗓️ Avant ton rendez-vous</p>' +
    '<p class="petit gauche">Lis ces trois sujets en chemin : tu arriveras avec de quoi surprendre.</p>' +
    blocSujet(anecdoteAConter()) + blocSujet(questionAPoser()) + blocSujet(motAPlacer()) +
    '<button class="bouton principal large" id="autres-sujets-rdv" type="button">D\'autres sujets</button>';
  $("autres-sujets-rdv").addEventListener("click", montrerRendezVous);
  $("fenetre-conversation").hidden = false;
}

$("ouvrir-panne").addEventListener("click", montrerPanne);
$("ouvrir-rdv").addEventListener("click", montrerRendezVous);
$("fermer-conversation").addEventListener("click", function () { $("fenetre-conversation").hidden = true; });
$("fenetre-conversation").addEventListener("click", function (e) { if (e.target === $("fenetre-conversation")) $("fenetre-conversation").hidden = true; });

// ---------- Le bruit du breuvage : glouglous, bulles et tintements, fabriqués par l'appli (aucun fichier son) ----------
const breuvage = { ctx: null, bruit: null, dernier: 0 };

function audio() {
  if (etat.son === false) return null;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return null;
  try {
    if (!breuvage.ctx) breuvage.ctx = new AC();
    if (breuvage.ctx.state === "suspended") breuvage.ctx.resume();
  } catch (e) { return null; }
  // On retient l'instant : le petit tintement des boutons ne doit pas couvrir un son plus important
  breuvage.dernier = performance.now();
  return breuvage.ctx;
}

function bruitBlanc(ctx) {
  if (breuvage.bruit) return breuvage.bruit;
  const tampon = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.3), ctx.sampleRate);
  const d = tampon.getChannelData(0);
  for (let k = 0; k < d.length; k++) d[k] = Math.random() * 2 - 1;
  return (breuvage.bruit = tampon);
}

// Une note qui s'éteint doucement
function note(ctx, t, type, f1, f2, duree, volume) {
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(f1, t);
  if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + duree * 0.8);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(volume, t + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, t + duree);
  o.connect(g); g.connect(ctx.destination);
  o.start(t); o.stop(t + duree + 0.02);
}

// Un « gloup » : la gorgée qui descend (une note qui plonge, et un souffle liquide)
function gloup(ctx, t, grave) {
  const k = grave ? 0.6 : 1;
  note(ctx, t, "sine", 520 * k, 150 * k, 0.16, 0.32);
  const s = ctx.createBufferSource(), filtre = ctx.createBiquadFilter(), g = ctx.createGain();
  s.buffer = bruitBlanc(ctx);
  filtre.type = "bandpass"; filtre.frequency.setValueAtTime(900 * k, t); filtre.frequency.exponentialRampToValueAtTime(300 * k, t + 0.12); filtre.Q.value = 4;
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.18, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.13);
  s.connect(filtre); filtre.connect(g); g.connect(ctx.destination);
  s.start(t); s.stop(t + 0.15);
}

// Une bulle qui remonte et éclate
function bulle(ctx, t, f) { note(ctx, t, "sine", f, f * 2.4, 0.06, 0.09); }

function sonGorgee() {
  const ctx = audio(); if (!ctx) return;
  const t = ctx.currentTime + 0.01, grave = !!etat.maudit;
  gloup(ctx, t, grave);
  bulle(ctx, t + 0.12, grave ? 500 : 900);
  bulle(ctx, t + 0.19, grave ? 650 : 1250);
}

// Boire l'élixir : trois glouglous, une gerbe de bulles, puis la note divine (ou maléfique)
function sonBoire(avecGloire) {
  const ctx = audio(); if (!ctx) return;
  const t = ctx.currentTime + 0.02, grave = !!etat.maudit;
  [0, 0.21, 0.42].forEach(function (d, k) { gloup(ctx, t + d, grave); bulle(ctx, t + d + 0.1, (grave ? 450 : 800) + k * 120); });
  for (let k = 0; k < 7; k++) bulle(ctx, t + 0.62 + k * 0.045 + Math.random() * 0.03, (grave ? 600 : 1000) + Math.random() * 900);
  if (!avecGloire) return;
  const fin = t + 0.95;
  if (grave) {
    // Un accord grinçant et grave, comme un rire de sorcière au fond du chaudron
    [110, 130.8, 155.6].forEach(function (f) { note(ctx, fin, "sawtooth", f, f * 0.97, 1.4, 0.05); });
    note(ctx, fin + 0.05, "sine", 55, 50, 1.4, 0.18);
  } else {
    // Un carillon céleste
    [1046.5, 1318.5, 1568, 2093].forEach(function (f, k) { note(ctx, fin + k * 0.07, "triangle", f, 0, 1.2, 0.07); });
  }
}

// Le tintement de la fiole qu'on débouche
function sonFiole() {
  const ctx = audio(); if (!ctx) return;
  const t = ctx.currentTime + 0.01;
  if (etat.maudit) { note(ctx, t, "sine", 880, 0, 0.7, 0.12); note(ctx, t, "sine", 932, 0, 0.7, 0.1); }
  else { note(ctx, t, "sine", 2093, 0, 0.7, 0.12); note(ctx, t + 0.04, "sine", 2637, 0, 0.6, 0.08); }
}

// Un souffle filtré : clapotis, froissement, grondement (le bruit qui glisse d'une fréquence à l'autre)
function souffle(ctx, t, type, f1, f2, duree, volume, q) {
  const s = ctx.createBufferSource(), filtre = ctx.createBiquadFilter(), g = ctx.createGain();
  s.buffer = bruitBlanc(ctx);
  s.loop = true;
  filtre.type = type; filtre.Q.value = q || 1;
  filtre.frequency.setValueAtTime(f1, t);
  filtre.frequency.exponentialRampToValueAtTime(f2, t + duree * 0.9);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(volume, t + duree * 0.25);
  g.gain.exponentialRampToValueAtTime(0.0001, t + duree);
  s.connect(filtre); filtre.connect(g); g.connect(ctx.destination);
  s.start(t); s.stop(t + duree + 0.02);
}

// Le petit tintement de verre de chaque bouton (une goutte sourde dans la version sombre)
function sonClic() {
  const ctx = audio(); if (!ctx) return;
  const t = ctx.currentTime + 0.005;
  if (etat.maudit) { note(ctx, t, "sine", 330, 180, 0.12, 0.08); bulle(ctx, t + 0.04, 420); }
  else { note(ctx, t, "sine", 1760, 0, 0.14, 0.045); note(ctx, t + 0.01, "sine", 2637, 0, 0.08, 0.025); }
}

// Changer d'onglet : le liquide qui clapote dans la fiole
function sonOnglet() {
  const ctx = audio(); if (!ctx) return;
  const t = ctx.currentTime + 0.005, k = etat.maudit ? 0.6 : 1;
  souffle(ctx, t, "bandpass", 350 * k, 1100 * k, 0.22, 0.07, 3);
  bulle(ctx, t + 0.1, (etat.maudit ? 450 : 850));
}

// Fermer une fenêtre : on rebouche la fiole
function sonBouchon() {
  const ctx = audio(); if (!ctx) return;
  const t = ctx.currentTime + 0.005, k = etat.maudit ? 0.7 : 1;
  note(ctx, t, "sine", 420 * k, 90 * k, 0.08, 0.22);
  souffle(ctx, t, "highpass", 3000, 1500, 0.05, 0.06, 0.7);
}

// Une bonne réponse : les bulles montent et tintent (un arpège d'or, ou un bouillon sombre)
function sonJuste(retard) {
  const ctx = audio(); if (!ctx) return;
  const t = ctx.currentTime + 0.01 + (retard || 0);
  if (etat.maudit) {
    [392, 466.2, 587.3].forEach(function (f, k) { note(ctx, t + k * 0.07, "triangle", f, 0, 0.35, 0.07); bulle(ctx, t + k * 0.07 + 0.03, 380 + k * 90); });
    note(ctx, t, "sawtooth", 98, 96, 0.5, 0.025);
  } else {
    [784, 987.8, 1174.7, 1568].forEach(function (f, k) { note(ctx, t + k * 0.06, "triangle", f, 0, 0.32, 0.06); bulle(ctx, t + k * 0.06 + 0.02, 900 + k * 220); });
  }
}

// Une erreur : la gorgée passe mal (un glouglou grave qui retombe)
function sonFaux(retard) {
  const ctx = audio(); if (!ctx) return;
  const t = ctx.currentTime + 0.01 + (retard || 0);
  gloup(ctx, t, true);
  if (etat.maudit) note(ctx, t + 0.08, "sawtooth", 98, 65, 0.45, 0.05);
  else note(ctx, t + 0.08, "triangle", 233, 155, 0.4, 0.09);
}

// Des pièces d'or qui tombent dans la fiole (le coffre, les gains)
function sonPieces(nombre) {
  const ctx = audio(); if (!ctx) return;
  const t = ctx.currentTime + 0.01, n = nombre || 5, base = etat.maudit ? 1400 : 2400;
  for (let k = 0; k < n; k++) {
    const f = base + Math.random() * 1200, d = t + k * 0.075 + Math.random() * 0.03;
    note(ctx, d, "triangle", f, 0, 0.18, 0.05);
    note(ctx, d + 0.005, "sine", f * 1.5, 0, 0.1, 0.025);
  }
}

// Retourner une carte : un froissement de parchemin
function sonRetourne() {
  const ctx = audio(); if (!ctx) return;
  const t = ctx.currentTime + 0.005;
  souffle(ctx, t, "bandpass", 2600, 700, 0.13, 0.08, 1.2);
}

// Passer d'un monde à l'autre : la lumière divine, ou le chaudron qui gronde
function sonBascule() {
  const ctx = audio(); if (!ctx) return;
  const t = ctx.currentTime + 0.01;
  if (etat.maudit) {
    note(ctx, t, "sawtooth", 82, 41, 1.3, 0.07);
    note(ctx, t + 0.05, "sine", 55, 40, 1.4, 0.2);
    souffle(ctx, t, "lowpass", 600, 150, 1.1, 0.12, 1);
    for (let k = 0; k < 5; k++) bulle(ctx, t + 0.3 + k * 0.12 + Math.random() * 0.05, 250 + Math.random() * 250);
  } else {
    [523.3, 659.3, 784, 1046.5, 1318.5, 1568].forEach(function (f, k) { note(ctx, t + k * 0.055, "triangle", f, 0, 0.9, 0.055); });
    souffle(ctx, t, "highpass", 4000, 9000, 0.9, 0.025, 0.7);
  }
}

// Chaque bouton qui n'a pas déjà son propre son reçoit un tintement (onglets : clapotis ; « fermer » : bouchon ; « ouvrir » : fiole)
document.addEventListener("click", function (e) {
  if (performance.now() - breuvage.dernier < 150) return;
  const el = e.target.closest("button, a, [role='button']");
  if (!el || el.disabled) return;
  if (el.classList.contains("nav")) sonOnglet();
  else if (/^fermer/.test(el.id)) sonBouchon();
  else if (/^ouvrir/.test(el.id)) sonFiole();
  else sonClic();
});

function majBoutonSon() {
  $("bascule-son").textContent = etat.son === false ? "🔇 Son coupé" : "🔊 Son activé";
}
$("bascule-son").addEventListener("click", function () {
  etat.son = etat.son === false;
  sauver();
  majBoutonSon();
  sonGorgee();
});
majBoutonSon();

// ---------- La quintessence : six gouttes d'esprit, distillées une à une, sous une pluie d'étincelles ----------
const quint = { gouttes: [], i: -1, tirade: "", avant: 0 };

// La fiole : elle se remplit d'or (ou de sang) à chaque goutte
function fiole(niveau, pleine) {
  const html = '<div class="q-fiole' + (pleine ? " q-fiole-pleine" : "") + '" aria-hidden="true">' +
    '<div class="q-col"></div><div class="q-panse"><div class="q-liquide" style="--avant:' + quint.avant + "%;--apres:" + niveau + '%"><i></i><i></i><i></i></div></div></div>';
  quint.avant = niveau;
  return html;
}

function exempleDe(m) {
  const e = (typeof exemples !== "undefined" && exemples[m.mot]) || (typeof exemplesPlus !== "undefined" && exemplesPlus[m.mot]);
  return e && e[0] ? e[0][1] : "";
}

// Les six gouttes du jour (les mêmes toute la journée) ; « auHasardTout » : une nouvelle distillation
function distiller(auHasardTout) {
  const prendre = function (liste, decalage) { return auHasardTout ? auHasard(liste) : auJourDans(liste, decalage); };
  if (etat.maudit && typeof insultesAntan !== "undefined") {
    const insulte = motParNom(prendre(insultesAntan, 4)) || { mot: "Faquin", definition: "Homme sans valeur, impertinent." };
    const r = prendre(rumeurs, 6), n = prendre(quintNoires, 0), h = prendre(humourNoir, 9);
    const aPlacer = motParNom(prendre(insultesAntan, 8)) || insulte;
    const sortieSombre = prendre(quintSortiesSombres, 3);
    quint.tirade = tiradeDuSoir({ sombre: true, anecdote: n, mot: insulte.mot, definition: insulte.definition, humour: h, sortie: sortieSombre });
    return [
      { etiquette: "⚔️ L'insulte", titre: insulte.mot, texte: insulte.definition },
      { etiquette: "🕵️ La rumeur", titre: r[0], texte: r[1], chute: r[2], nomChute: "🔦 Le fin mot" },
      { etiquette: "☠️ L'anecdote noire", titre: n[0], texte: n[1], chute: n[2] },
      { etiquette: "💀 L'humour noir", citation: h },
      { etiquette: "🎯 Le défi maudit", texte: prendre(quintDefisSombres, 1).replace("{mot}", aPlacer.mot) },
      { etiquette: "🚪 La sortie maudite", citation: sortieSombre }
    ];
  }
  const rare = auHasardTout ? auHasard(motsRaresDispo()) : motRareDuJour();
  const a = prendre(quintAnecdotes, 0);
  const r = prendre(repliquesDispo, 5);
  const signees = toutesLesCitations().filter(function (c) { return c.auteur && c.auteur.indexOf("confirmer") === -1; });
  const c = prendre(signees, 11);
  const aPlacer = auHasardTout ? auHasard(motsUtiles()) : motDuJour();
  const sortie = prendre(quintSorties, 3);
  quint.tirade = tiradeDuSoir({ anecdote: a, mot: rare.mot, definition: rare.definition, replique: r.texte, auteur: r.piece, sortie: sortie });
  return [
    { etiquette: "💎 Le mot", titre: rare.mot, texte: rare.definition, exemple: exempleDe(rare) },
    { etiquette: "🧪 L'anecdote", titre: a[0], texte: a[1], chute: a[2] },
    { etiquette: "🎭 La réplique", citation: r.texte, auteur: r.piece, conseil: "À dire avec le ton, au moment où personne ne l'attend." },
    { etiquette: "🪶 La citation", citation: c.texte, auteur: c.auteur },
    { etiquette: "🎯 Le défi du soir", texte: prendre(quintDefis, 2).replace("{mot}", aPlacer.mot), exemple: aPlacer.mot + " : " + aPlacer.definition },
    { etiquette: "🚪 La sortie de scène", citation: sortie, conseil: "La dernière phrase avant de partir. C'est elle dont on se souviendra." }
  ];
}

// Du soir à partir de 16 h, et jusqu'au petit matin (la nuit, c'est encore le soir)
function soirOuJour() { const h = new Date().getHours(); return h >= 16 || h < 5 ? "du soir" : "du jour"; }

function majBoutonQuintessence() {
  $("ouvrir-quintessence").hidden = typeof quintAnecdotes === "undefined";
  $("qb-titre").textContent = etat.maudit ? "La quintessence maudite" : "La quintessence " + soirOuJour();
  $("qb-sous").textContent = etat.maudit ? "Six gouttes de venin, distillées pour toi" : "Six gouttes d'esprit pour briller " + (soirOuJour() === "du soir" ? "ce soir" : "aujourd'hui");
}

function rendreIntro() {
  const titre = "Quintessence";
  const lettres = titre.split("").map(function (l, k) { return '<span style="animation-delay:' + (0.25 + k * 0.07).toFixed(2) + 's">' + l + "</span>"; }).join("");
  $("q-scene").innerHTML =
    '<div class="q-intro">' +
      '<div class="q-alambic" aria-hidden="true"><span>⚗️</span><i></i><i></i><i></i></div>' +
      '<p class="q-sur-titre">' + echapper(maintenant.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })) + "</p>" +
      '<h2 class="q-titre" aria-label="' + titre + '">' + lettres + "</h2>" +
      '<p class="q-devise">' + (etat.maudit
        ? "Le poison le plus pur, distillé goutte à goutte : de quoi faire frémir la tablée."
        : "La « cinquième essence » des alchimistes : ce qui reste quand on a tout distillé. Six gouttes, et tu brilleras de mille feux.") + "</p>" +
      '<button class="bouton principal large q-distiller" id="q-commencer" type="button">' + (etat.maudit ? "🩸 Distiller le venin" : "✨ Distiller") + "</button>" +
    "</div>";
}

function rendreGoutte() {
  const g = quint.gouttes[quint.i];
  const points = quint.gouttes.map(function (_, k) { return '<i class="' + (k < quint.i ? "faite" : k === quint.i ? "en-cours" : "") + '"></i>'; }).join("");
  let corps = "";
  if (g.titre) corps += '<p class="q-goutte-titre">' + echapper(g.titre) + "</p>";
  if (g.texte) corps += '<p class="q-goutte-texte">' + echapper(g.texte) + "</p>";
  if (g.citation) corps += '<blockquote class="q-goutte-citation">« ' + echapper(g.citation) + " »</blockquote>";
  if (g.auteur) corps += '<p class="q-goutte-auteur">— ' + echapper(g.auteur) + "</p>";
  if (g.exemple) corps += '<p class="q-goutte-exemple">' + echapper(g.exemple) + "</p>";
  if (g.chute) corps += '<button class="bouton petit-bouton q-chute" id="q-chute" type="button">' + (g.nomChute || "✨ La chute") + "</button>";
  if (g.conseil) corps += '<p class="q-goutte-conseil">' + echapper(g.conseil) + "</p>";
  const derniere = quint.i === quint.gouttes.length - 1;
  $("q-scene").innerHTML =
    fiole(Math.round((quint.i + 1) / quint.gouttes.length * 100), false) +
    '<div class="q-gouttes" aria-label="Goutte ' + (quint.i + 1) + " sur " + quint.gouttes.length + '">' + points + "</div>" +
    '<article class="q-goutte" id="q-goutte">' +
      '<p class="q-goutte-numero">Goutte ' + (quint.i + 1) + " · " + echapper(g.etiquette) + "</p>" + corps +
    "</article>" +
    '<div class="rangee q-rangee">' +
      (quint.i > 0 ? '<button class="bouton" id="q-precedente" type="button">◀</button>' : "") +
      '<button class="bouton principal" id="q-suivante" type="button">' + (derniere ? (etat.maudit ? "🩸 Le breuvage ultime" : "🍯 L'élixir ultime") : "Goutte suivante") + "</button>" +
    "</div>";
}

function rendreFinale() {
  let gain = "";
  if (etat.bonusQuintessence !== aujourdhui) {
    etat.bonusQuintessence = aujourdhui;
    etat.xp += 5;
    sauver();
    majCompteurs();
    gain = '<p class="gain">+5 ✦</p>';
  }
  $("q-scene").innerHTML =
    '<div class="q-intro q-finale">' +
      fiole(100, true) +
      '<p class="q-sur-titre">' + (etat.maudit ? "Le breuvage est prêt" : "L'élixir est prêt") + "</p>" +
      '<h2 class="q-titre q-titre-fini q-or">' + (etat.maudit ? "Le breuvage ultime" : "L'élixir ultime") + "</h2>" +
      '<p class="q-devise">' + (etat.maudit
        ? "Les six gouttes de venin, réunies en une seule tirade. Déclame-la ce soir : c'est toi qu'on craindra à table."
        : "Les six gouttes, réunies en une seule tirade. Déclame-la ce soir : c'est toi qu'on écoutera.") + "</p>" +
      '<article class="q-elixir"><p class="q-goutte-numero">' + (etat.maudit ? "🩸 La tirade maudite" : "🍯 La tirade du soir") + "</p>" +
        '<p class="q-tirade">' + echapper(quint.tirade) + "</p>" +
        '<button class="bouton petit-bouton" id="q-ecouter" type="button">🔊 L\'écouter</button></article>' +
      '<h3 class="q-va">' + (etat.maudit ? "Va, et sème le trouble." : "Va, et brille.") + "</h3>" + gain +
      '<button class="bouton principal large" id="q-partager" type="button">📤 Partager l\'élixir</button>' +
      '<button class="bouton large" id="q-encore" type="button">⚗️ Une autre distillation</button>' +
      '<button class="bouton large" id="q-revoir" type="button">Revoir les gouttes</button>' +
      '<p class="petit" id="q-statut"></p>' +
    "</div>";
  $("quintessence").scrollTop = 0;
  gerbe(innerWidth / 2, innerHeight * 0.18, 140);
  setTimeout(function () { gerbe(innerWidth * 0.25, innerHeight * 0.3, 70); }, 350);
  setTimeout(function () { gerbe(innerWidth * 0.75, innerHeight * 0.28, 70); }, 650);
  pluieDOr(2800);
  sonBoire(true);
}

// La pluie d'or : des paillettes qui tombent du ciel pendant quelques secondes
function pluieDOr(duree) {
  const fin = Date.now() + (MOUVEMENT_REDUIT ? 600 : duree);
  (function verser() {
    if (!feux.ctx || $("quintessence").hidden || Date.now() > fin) return;
    for (let k = 0; k < 4; k++) {
      feux.parts.push({ x: Math.random() * feux.l, y: -10, vx: (Math.random() - 0.5) * 0.8, vy: 1.5 + Math.random() * 2.5, vie: 1,
        usure: 0.006 + Math.random() * 0.006, taille: 0.8 + Math.random() * 1.8, gravite: 0.02, oscille: Math.random() * 6, couleur: couleurFeu() });
    }
    setTimeout(verser, 40);
  })();
}

function texteAPartager() {
  const lignes = [(etat.maudit ? "🩸 La quintessence maudite" : "⚗️ La quintessence " + soirOuJour()) + " · Pandémonium des mots", ""];
  quint.gouttes.forEach(function (g) {
    lignes.push(g.etiquette + " : " + (g.titre ? g.titre + ". " : "") + (g.texte || "") + (g.citation ? "« " + g.citation + " »" + (g.auteur ? " (" + g.auteur + ")" : "") : ""));
  });
  lignes.push("", (etat.maudit ? "🩸 Le breuvage ultime : " : "🍯 L'élixir ultime : ") + quint.tirade);
  return lignes.join("\n");
}

function partagerQuintessence() {
  const texte = texteAPartager();
  const adresse = location.href.split("#")[0];
  if (navigator.share) {
    navigator.share({ title: "La quintessence", text: texte, url: adresse }).catch(function () {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(texte + "\n" + adresse).then(function () { $("q-statut").textContent = "✅ Copiée : il ne reste qu'à la coller."; },
      function () { $("q-statut").textContent = "Copie impossible sur cet appareil."; });
  }
}

function allerGoutte(n) {
  quint.i = n;
  rendreGoutte();
  const carte = $("q-goutte").getBoundingClientRect();
  gerbe(carte.left + carte.width / 2, carte.top + 30, 45);
  sonGorgee();
}

function ouvrirQuintessence() {
  quint.gouttes = distiller(false);
  quint.i = -1;
  quint.avant = 0;
  $("quintessence").classList.toggle("q-maudite", !!etat.maudit);
  $("quintessence").hidden = false;
  document.body.classList.add("q-ouverte");
  rendreIntro();
  lancerFeux();
  sonFiole();
}

function fermerQuintessence() {
  $("quintessence").hidden = true;
  document.body.classList.remove("q-ouverte");
  if ("speechSynthesis" in window) speechSynthesis.cancel();
  arreterFeux();
}

$("ouvrir-quintessence").addEventListener("click", ouvrirQuintessence);
$("fermer-quintessence").addEventListener("click", fermerQuintessence);
document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !$("quintessence").hidden) fermerQuintessence(); });

$("q-scene").addEventListener("click", function (e) {
  const cible = e.target.closest("button");
  if (!cible) return;
  if (cible.id === "q-commencer") allerGoutte(0);
  else if (cible.id === "q-suivante") { if (quint.i < quint.gouttes.length - 1) allerGoutte(quint.i + 1); else rendreFinale(); }
  else if (cible.id === "q-precedente") allerGoutte(quint.i - 1);
  else if (cible.id === "q-chute") {
    const g = quint.gouttes[quint.i];
    cible.outerHTML = '<p class="q-goutte-chute">' + echapper(g.chute) + "</p>";
    const r = $("q-goutte").getBoundingClientRect();
    gerbe(r.left + r.width / 2, r.bottom - 40, 60);
  }
  else if (cible.id === "q-partager") partagerQuintessence();
  else if (cible.id === "q-ecouter") parler(quint.tirade, "fr-FR");
  else if (cible.id === "q-encore") { quint.gouttes = distiller(true); quint.avant = 0; allerGoutte(0); }
  else if (cible.id === "q-revoir") { quint.avant = 0; allerGoutte(0); }
});

// Les feux : des braises dorées qui montent sans cesse, et des gerbes d'étincelles à chaque goutte
const feux = { ctx: null, parts: [], anim: 0, l: 0, h: 0 };
const MOUVEMENT_REDUIT = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

function couleurFeu() {
  const palette = etat.maudit ? ["255,59,47", "255,120,90", "200,10,20", "255,190,170"] : ["255,224,102", "255,184,0", "255,140,30", "255,246,220"];
  return palette[Math.floor(Math.random() * palette.length)];
}

function tailleFeux() {
  const toile = $("feux");
  const r = Math.min(2, window.devicePixelRatio || 1);
  feux.l = innerWidth; feux.h = innerHeight;
  toile.width = feux.l * r; toile.height = feux.h * r;
  toile.style.width = feux.l + "px"; toile.style.height = feux.h + "px";
  feux.ctx = toile.getContext && toile.getContext("2d");
  if (feux.ctx) feux.ctx.setTransform(r, 0, 0, r, 0, 0);
}

function gerbe(x, y, n) {
  if (!feux.ctx) return;
  const nombre = MOUVEMENT_REDUIT ? Math.round(n / 4) : n;
  for (let k = 0; k < nombre; k++) {
    const angle = Math.random() * Math.PI * 2, vitesse = 1.5 + Math.random() * 5;
    feux.parts.push({ x: x, y: y, vx: Math.cos(angle) * vitesse, vy: Math.sin(angle) * vitesse - 1.5, vie: 1,
      usure: 0.012 + Math.random() * 0.018, taille: 1 + Math.random() * 2.4, gravite: 0.06, couleur: couleurFeu() });
  }
}

function braise() {
  feux.parts.push({ x: Math.random() * feux.l, y: feux.h + 10, vx: (Math.random() - 0.5) * 0.4, vy: -(0.4 + Math.random() * 1.3), vie: 1,
    usure: 0.003 + Math.random() * 0.004, taille: 0.6 + Math.random() * 1.8, gravite: 0, oscille: Math.random() * 6, couleur: couleurFeu() });
}

function boucleFeux() {
  const c = feux.ctx;
  if (!c) return;
  c.clearRect(0, 0, feux.l, feux.h);
  if (feux.parts.length < (MOUVEMENT_REDUIT ? 20 : 110) && Math.random() < 0.7) braise();
  c.globalCompositeOperation = "lighter";
  feux.parts = feux.parts.filter(function (p) {
    p.vy += p.gravite; p.vx *= 0.985;
    if (p.oscille !== undefined) { p.oscille += 0.03; p.x += Math.sin(p.oscille) * 0.3; }
    p.x += p.vx; p.y += p.vy; p.vie -= p.usure;
    if (p.vie <= 0) return false;
    const rayon = p.taille * (2.5 + p.vie * 2.5);
    const lueur = c.createRadialGradient(p.x, p.y, 0, p.x, p.y, rayon);
    lueur.addColorStop(0, "rgba(" + p.couleur + "," + (0.9 * p.vie).toFixed(3) + ")");
    lueur.addColorStop(1, "rgba(" + p.couleur + ",0)");
    c.fillStyle = lueur;
    c.beginPath(); c.arc(p.x, p.y, rayon, 0, Math.PI * 2); c.fill();
    return true;
  });
  c.globalCompositeOperation = "source-over";
  feux.anim = requestAnimationFrame(boucleFeux);
}

function lancerFeux() {
  tailleFeux();
  cancelAnimationFrame(feux.anim);
  feux.parts = [];
  for (let k = 0; k < 40; k++) { braise(); feux.parts[feux.parts.length - 1].y = Math.random() * feux.h; }
  boucleFeux();
}

function arreterFeux() { cancelAnimationFrame(feux.anim); feux.parts = []; }
window.addEventListener("resize", function () { if (!$("quintessence").hidden) tailleFeux(); });

// ---------- La session : 4 cartes ----------
let cartes = [];
let position = 0;

// La session : on apprend, on se cultive, on sourit, on s'émerveille.
// 1. Apprendre : le mot du jour
// 2. Parler : une expression (française ou francophone)
// 3. Se cultiver : une citation ou une réplique de théâtre
// 4. Réfléchir ou rêver : une pensée, un poème, ou des vers qui sonnent bien
// 5. Sourire : une galéjade, une contrepèterie ou des mots qui claquent (tous les jours)
// 6. S'émerveiller : le peintre du jour (si Internet)
function cartesDuJour() {
  const pair = numeroJour % 2 === 0;
  let quatrieme;
  if (pair && numeroJour % 4 === 0) quatrieme = { type: "pensee", donnee: auJour(toutesLesPensees(), 11) };
  else if (pair) quatrieme = { type: "philosophe", donnee: auJour(philosophesDispo, 29) };
  else if (numeroJour % 4 === 1) quatrieme = { type: "poeme", donnee: auJour(poemesDispo, 13) };
  else quatrieme = { type: "sonore", donnee: auJour(beauDispo, 19) };
  return [
    { type: "mot", donnee: motDuJour() },
    // 2. Parler : une expression, une expression francophone ou un mot au sens figuré (tour à tour)
    [{ type: "expression", donnee: auJour(expressionsDispo, 3) },
     { type: "francophone", donnee: auJour(francophonesDispo, 5) },
     { type: "metaphore", donnee: auJour(metaphoresDispo, 31) }][numeroJour % 3],
    pair ? { type: "citation", donnee: auJour(toutesLesCitations(), 7) } : { type: "replique", donnee: auJour(repliquesDispo, 9) },
    quatrieme,
    { type: "sonore", donnee: auJour(droleDispo, 17) },
    // Un jour sur deux : une anecdote scientifique ou un paradoxe, ou bien un concept (biais, loi, effet)
    // Sur trois jours : un concept, une anecdote scientifique ou un paradoxe, un nom propre (mythologie, littérature, histoire)
    numeroJour % 3 === 0 ? { type: "concept", donnee: auJour(conceptsDispo, 37) }
      : (numeroJour % 3 === 1 || !nomsPropresDispo.length ? { type: "science", donnee: auJour(sciencesDispo, 23) }
        : { type: "nompropre", donnee: auJour(nomsPropresDispo, 29) }),
    bonusDuJour(),
    { type: "peintre", donnee: peintreDuJour }
  ].filter(function (c) { return c.donnee; });
}

// ---------- Le peintre du jour (Wikidata, il faut Internet) ----------
let peintreDuJour = null;

// Quand le peintre arrive, on l'ajoute à la session si elle est déjà commencée
function recevoirPeintre(p) {
  peintreDuJour = p;
  if (!$("accueil-session").hidden) majProgramme();
  if (cartes.length && !cartes.some(function (c) { return c.type === "peintre"; })) {
    cartes.push({ type: "peintre", donnee: p });
    if (!$("session").hidden) afficherCarte();
  }
}

function chercherPeintre() {
  // Déjà trouvé aujourd'hui ? On le reprend tout de suite (la recherche peut être lente)
  const cle = "pandemonium-peintre-" + aujourdhui;
  try {
    const garde = localStorage.getItem(cle);
    if (garde) { recevoirPeintre(JSON.parse(garde)); return; }
  } catch (e) { /* pas de mémoire : on cherche */ }

  const mois = maintenant.getMonth() + 1;
  const jour = maintenant.getDate();
  const requete =
    "SELECT ?peintreLabel ?naissance ?oeuvreLabel ?image ?sl WHERE {" +
    " ?peintre wdt:P106 wd:Q1028181 ;" +
    " p:P569/psv:P569 [ wikibase:timeValue ?naissance ; wikibase:timePrecision 11 ] ;" +
    " wikibase:sitelinks ?sl ." +
    " FILTER(MONTH(?naissance) = " + mois + " && DAY(?naissance) = " + jour + ")" +
    " FILTER(?sl > 20)" +
    " ?oeuvre wdt:P170 ?peintre ; wdt:P31 wd:Q3305213 ; wdt:P18 ?image ; wikibase:sitelinks ?osl ." +
    " SERVICE wikibase:label { bd:serviceParam wikibase:language \"fr,en\". }" +
    "} ORDER BY DESC(?sl) DESC(?osl) LIMIT 5";
  fetch("https://query.wikidata.org/sparql?format=json&query=" + encodeURIComponent(requete), {
    headers: { "Accept": "application/sparql-results+json" }
  })
    .then(function (r) { return r.json(); })
    .then(function (d) {
      const lisible = function (v) { return v && !/^Q\d+$/.test(v.value); };
      const l = d.results.bindings.find(function (b) { return lisible(b.oeuvreLabel) && lisible(b.peintreLabel); });
      if (!l) return;
      const p = {
        oeuvre: l.oeuvreLabel.value,
        peintre: l.peintreLabel.value,
        annee: l.naissance.value.slice(0, 4).replace(/^0+/, ""),
        image: l.image.value.replace("http://", "https://") + "?width=800"
      };
      try { localStorage.setItem(cle, JSON.stringify(p)); } catch (e) { /* tant pis */ }
      recevoirPeintre(p);
    })
    .catch(function () { /* pas d'Internet : la carte du peintre ne s'affiche pas */ });
}

// L'image du mot (illustrations.js), si elle existe ; elle disparaît sans bruit hors ligne.
function imageDuMot(mot) {
  if (typeof illustrations === "undefined" || !illustrations[mot]) return "";
  const ill = illustrations[mot];
  const libre = ill[0].indexOf("../") === 0 ? "" : " · domaine public, Wikimedia Commons";
  return '<figure class="illustration"><img src="' + echapper(adresseIllustration(ill[0])) + '" alt="' + echapper(ill[1]) +
    '" loading="lazy" onerror="this.parentNode.remove()"><figcaption>' + echapper(ill[1]) + libre + "</figcaption></figure>";
}

// Où l'on croise le mot (pop culture, grandes œuvres)
function vuDansLeMot(mot) {
  if (typeof vuDans === "undefined" || !vuDans[mot]) return "";
  return '<p class="vu-dans"><span class="sens">🎬 Vu dans</span>' + echapper(vuDans[mot]) + "</p>";
}

function rendreCarte(c) {
  const d = c.donnee;
  if (c.type === "rare" || c.type === "argot" || c.type === "antan") {
    const liste = (typeof exemples !== "undefined" && exemples[d.mot]) || [];
    const argot = c.type === "argot";
    const titres = { rare: "💎 Le mot rare du jour · bonus", argot: "🎤 Le mot de la rue · argot", antan: "⚔️ Juron ou insulte d'antan" };
    const notes = { rare: "Un mot pour briller… ou pour les curieux.", argot: "Pas du français soutenu, mais une vraie richesse de la langue.", antan: "Pour pester avec panache, sans vexer personne… ou presque." };
    return '<p class="etiquette">' + titres[c.type] + "</p>" + imageDuMot(d.mot) +
      '<p class="mot-feu" style="--echelle:' + echelle(d.mot) + '">' + echapper(d.mot) + "</p>" +
      '<div class="trait"></div>' +
      '<p class="texte-doux">' + echapper(d.definition) + "</p>" + vuDansLeMot(d.mot) +
      (d.anglais ? '<p class="langues"><b>EN</b> · ' + echapper(d.anglais) + "<br><b>ES</b> · " + echapper(d.espagnol) + "</p>" : "") +
      (liste.length ? '<div class="exemples"><p class="etiquette-petite">En situation</p>' + liste.map(function (e) {
        return '<p class="exemple"><span class="sens">' + echapper(e[0]) + "</span>" + echapper(e[1]) + "</p>";
      }).join("") + "</div>" : "") +
      '<p class="auteur">' + notes[c.type] + "</p>" +
      '<div class="actions-carte"><button class="bouton petit-bouton" data-action="ecouter" type="button">🔊 Écouter</button></div>';
  }
  if (c.type === "mot") {
    const favori = etat.favoris.indexOf(d.mot) !== -1;
    const langues = d.anglais ? '<p class="langues"><b>EN</b> · ' + echapper(d.anglais) + "<br><b>ES</b> · " + echapper(d.espagnol) + "</p>" : "";
    // Les phrases d'exemple, rangées par sens (exemples.js)
    const liste = ((typeof exemples !== "undefined" && exemples[d.mot]) || []).slice();
    if (d.exemplePerso) liste.unshift(["Ton invention 🎨", d.exemplePerso]);
    const phrases = liste.length ? '<div class="exemples"><p class="etiquette-petite">En situation</p>' +
      liste.map(function (e) {
        return '<p class="exemple"><span class="sens">' + echapper(e[0]) + "</span>" + echapper(e[1]) + "</p>";
      }).join("") + "</div>" : "";
    return '<p class="etiquette">Le mot du jour' + (d.invention ? " · ton invention" : (d.perso ? " · de ta collection" : " · ⭐ utile au quotidien")) + "</p>" + imageDuMot(d.mot) +
      '<p class="mot-feu" style="--echelle:' + echelle(d.mot) + '">' + echapper(d.mot) + "</p>" +
      '<div class="trait"></div>' +
      '<p class="texte-doux">' + echapper(d.definition) + "</p>" + vuDansLeMot(d.mot) + langues + phrases +
      '<div class="actions-carte">' +
      '<button class="bouton petit-bouton" data-action="ecouter" type="button">🔊 Écouter</button>' +
      '<button class="bouton petit-bouton" data-action="favori" type="button">' + (favori ? "♥ Favori" : "♡ Favori") + "</button>" +
      (position === 0 && relancesUtilisees() < RELANCES_MAX
        ? '<button class="bouton petit-bouton" data-action="relancer" type="button">🔄 Je le connais (' + (RELANCES_MAX - relancesUtilisees()) + ")</button>"
        : "") + "</div>";
  }
  if (c.type === "expression") {
    return '<p class="etiquette">L\'expression</p>' +
      '<p class="mot-feu" style="--echelle:' + echelle(d.texte) + '">' + echapper(d.texte) + "</p>" +
      '<div class="trait"></div><p class="texte-doux">' + echapper(d.sens) + "</p>";
  }
  if (c.type === "francophone") {
    return '<p class="etiquette">L\'expression francophone · ' + echapper(d.pays) + "</p>" +
      '<p class="mot-feu" style="--echelle:' + echelle(d.texte) + '">' + echapper(d.texte) + "</p>" +
      '<div class="trait"></div><p class="texte-doux">' + echapper(d.sens) + "</p>" +
      '<div class="actions-carte"><button class="bouton petit-bouton" data-action="ecouter" type="button">🔊 Écouter avec l\'accent</button></div>';
  }
  if (c.type === "replique") {
    return '<p class="etiquette">🎭 La réplique de théâtre</p>' +
      '<p class="citation-grande">« ' + echapper(d.texte) + " »</p>" +
      '<p class="auteur">— ' + echapper(d.piece) + "</p>" +
      '<div class="actions-carte"><button class="bouton petit-bouton" data-action="ecouter" type="button">🔊 Écouter</button>' +
      '<button class="bouton petit-bouton" data-action="reciter" type="button">🎤 Réciter de mémoire</button></div>' +
      '<p class="zone-recit" id="zone-recit"></p>';
  }
  if (c.type === "poeme") {
    return '<p class="etiquette">🪶 Le petit poème</p>' +
      '<p class="citation-grande">' + echapper(d.texte) + "</p>" +
      '<p class="auteur">— ' + echapper(d.auteur) + "</p>" +
      '<div class="actions-carte"><button class="bouton petit-bouton" data-action="ecouter" type="button">🔊 Écouter</button></div>';
  }
  if (c.type === "sonore") {
    const drole = GENRES_DROLES.indexOf(d.genre) !== -1;
    return '<p class="etiquette">' + (drole ? "😄 Pour sourire · " : "🎶 Ça sonne bien · ") + echapper(d.genre) + "</p>" +
      '<p class="citation-grande">' + echapper(d.texte) + "</p>" +
      (d.info ? '<p class="auteur">— ' + echapper(d.info) + "</p>" : "") +
      '<div class="actions-carte"><button class="bouton petit-bouton" data-action="ecouter" type="button">🔊 Écouter</button></div>';
  }
  if (c.type === "nompropre") {
    const image = d.image
      ? '<figure class="illustration"><img src="' + echapper(adresseIllustration(d.image)) + '" alt="' + echapper(d.credit || d.nom) +
        '" loading="lazy" onerror="this.parentNode.remove()"><figcaption>' + echapper(d.credit || "") + " · domaine public, Wikimedia Commons</figcaption></figure>"
      : "";
    return '<p class="etiquette">🏛️ Le nom propre · ' + echapper(d.qui) + "</p>" + image +
      '<p class="mot-feu" style="--echelle:' + echelle(d.nom) + '">' + echapper(d.nom) + "</p>" +
      '<div class="trait"></div>' +
      '<p class="texte-doux grand">' + echapper(d.anecdote) + "</p>" +
      '<div class="actions-carte"><button class="bouton petit-bouton" data-action="ecouter" type="button">🔊 Écouter</button></div>';
  }
  if (c.type === "concept") {
    return '<p class="etiquette">🧠 Le concept du jour · ' + echapper(d.famille) + "</p>" +
      '<p class="mot-feu" style="--echelle:' + echelle(d.nom) + '">' + echapper(d.nom) + "</p>" +
      '<div class="trait"></div>' +
      '<p class="texte-doux grand">' + echapper(d.explication) + "</p>" +
      '<p class="exemple"><span class="sens">Exemple</span>' + echapper(d.exemple) + "</p>" +
      '<div class="actions-carte"><button class="bouton petit-bouton" data-action="ecouter" type="button">🔊 Écouter</button></div>';
  }
  if (c.type === "metaphore") {
    return '<p class="etiquette">🎨 Au sens figuré</p>' +
      '<p class="mot-feu" style="--echelle:' + echelle(d.mot) + '">' + echapper(d.mot) + "</p>" +
      '<div class="trait"></div>' +
      '<p class="exemple"><span class="sens">Sens propre</span>' + echapper(d.propre) + "</p>" +
      '<p class="exemple"><span class="sens">Sens figuré</span>' + echapper(d.figure) + "</p>" +
      '<p class="citation-grande petite-citation">« ' + echapper(d.exemple) + " »</p>" +
      (d.note ? '<p class="auteur">⚠️ ' + echapper(d.note) + "</p>" : "") +
      '<div class="actions-carte"><button class="bouton petit-bouton" data-action="ecouter" type="button">🔊 Écouter</button></div>';
  }
  if (c.type === "philosophe") {
    return '<p class="etiquette">🦉 Le philosophe · ' + echapper(d.auteur) + "</p>" +
      '<p class="mot-feu" style="--echelle:' + echelle(d.notion) + '">' + echapper(d.notion) + "</p>" +
      '<div class="trait"></div>' +
      '<p class="texte-doux grand">' + echapper(d.idee) + "</p>" +
      (d.citation ? '<p class="citation-grande petite-citation">« ' + echapper(d.citation) + " »</p>" : "") +
      '<div class="actions-carte"><button class="bouton petit-bouton" data-action="ecouter" type="button">🔊 Écouter</button></div>';
  }
  if (c.type === "science") {
    const paradoxe = d.domaine === "Paradoxe";
    return '<p class="etiquette">' + (paradoxe ? "🌀 Le paradoxe" : "🔭 L'anecdote scientifique · " + echapper(d.domaine)) + "</p>" +
      (d.titre ? '<p class="mot-feu" style="--echelle:' + echelle(d.titre) + '">' + echapper(d.titre) + '</p><div class="trait"></div>' : "") +
      '<p class="texte-doux grand">' + echapper(d.texte) + "</p>" +
      '<div class="actions-carte"><button class="bouton petit-bouton" data-action="ecouter" type="button">🔊 Écouter</button></div>';
  }
  if (c.type === "peintre") {
    return '<p class="etiquette">🖼️ Le peintre né un jour comme aujourd\'hui</p>' +
      '<img class="oeuvre" src="' + echapper(d.image) + '" alt="' + echapper(d.oeuvre) + '">' +
      '<p class="texte-doux"><b>' + echapper(d.oeuvre) + "</b></p>" +
      '<p class="auteur">— ' + echapper(d.peintre) + ", né le " + maintenant.getDate() + "/" + (maintenant.getMonth() + 1) + "/" + echapper(d.annee) + "</p>";
  }
  const titre = c.type === "citation" ? "La citation" : "La pensée";
  return '<p class="etiquette">' + titre + "</p>" +
    '<p class="citation-grande">« ' + echapper(d.texte) + " »</p>" +
    (d.auteur ? '<p class="auteur">— ' + echapper(d.auteur) + "</p>" : "");
}

function dessinerProgression(conteneur, total, fait) {
  conteneur.innerHTML = "";
  for (let i = 0; i < total; i++) {
    const trait = document.createElement("i");
    if (i <= fait) trait.className = "fait";
    conteneur.appendChild(trait);
  }
}

function afficherCarte() {
  const carte = $("carte");
  carte.innerHTML = rendreCarte(cartes[position]);
  carte.style.animation = "none";
  void carte.offsetWidth;
  carte.style.animation = "";
  dessinerProgression($("progression"), cartes.length, position);
  $("precedent").disabled = position === 0;
  $("suivant").textContent = position === cartes.length - 1 ? "Au quiz →" : "Gorgée suivante";
}

function carteSuivante() {
  if (position < cartes.length - 1) { position++; afficherCarte(); sonGorgee(); }
  else lancerQuiz(false);
}

function cartePrecedente() {
  if (position > 0) { position--; afficherCarte(); }
}

$("commencer").addEventListener("click", function () {
  cartes = cartesDuJour();
  position = 0;
  montrer("session");
  afficherCarte();
  sonBoire(false);
});

$("suivant").addEventListener("click", carteSuivante);
$("precedent").addEventListener("click", cartePrecedente);

// Boutons dans la carte (écouter, favori)
$("carte").addEventListener("click", function (e) {
  const bouton = e.target.closest("[data-action]");
  if (!bouton) return;
  const c = cartes[position];
  const m = c.donnee;
  if (bouton.dataset.action === "ecouter") {
    if (c.type === "mot" || c.type === "rare" || c.type === "argot" || c.type === "antan") parler(m.mot + ". " + m.definition, "fr-FR");
    else if (c.type === "francophone") parler(m.texte + ". " + m.sens, m.langue);
    else if (c.type === "concept") parler(m.nom + ". " + m.explication + " Par exemple : " + m.exemple, "fr-FR");
    else if (c.type === "nompropre") parler(m.nom + ". " + m.qui + ". " + m.anecdote, "fr-FR");
    else if (c.type === "metaphore") parler(m.mot + ". Au sens figuré : " + m.figure + " " + m.exemple, "fr-FR");
    else if (c.type === "philosophe") parler(m.auteur + ". " + m.notion + ". " + m.idee, "fr-FR");
    else parler(m.texte, "fr-FR");
  }
  if (bouton.dataset.action === "relancer" && relancesUtilisees() < RELANCES_MAX) {
    etat.relance = { jour: aujourdhui, n: relancesUtilisees() + 1 };
    sauver();
    cartes[0] = { type: "mot", donnee: motDuJour() };
    afficherCarte();
    return;
  }
  if (bouton.dataset.action === "reciter") reciter(m.texte);
  if (bouton.dataset.action === "recit-oui") finirRecit(true, null);
  if (bouton.dataset.action === "recit-non") finirRecit(false, null);
  if (bouton.dataset.action === "favori") {
    const i = etat.favoris.indexOf(m.mot);
    if (i === -1) { etat.favoris.push(m.mot); entrerEnRevision(m.mot); } else etat.favoris.splice(i, 1);
    sauver();
    afficherCarte();
  }
});

// ---------- Réciter une réplique de mémoire (le téléphone écoute) ----------
function mots_(texte) {
  return texte.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter(Boolean);
}

// Part des mots de la réplique retrouvés dans ce qui a été dit (de 0 à 1)
function ressemblance(reference, dit) {
  const attendus = mots_(reference);
  const reste = mots_(dit);
  if (!attendus.length) return 0;
  let trouves = 0;
  attendus.forEach(function (m) {
    const i = reste.indexOf(m);
    if (i !== -1) { trouves++; reste.splice(i, 1); }
  });
  return trouves / attendus.length;
}

function reciter(texte) {
  const zone = $("zone-recit");
  const citation = document.querySelector("#carte .citation-grande");
  citation.classList.add("cachee");
  const Ecoute = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Ecoute) {
    zone.innerHTML = "Récite-la à voix haute, de mémoire, puis vérifie : " +
      '<button class="bouton petit-bouton" data-action="recit-oui" type="button">✓ Réussi</button> ' +
      '<button class="bouton petit-bouton" data-action="recit-non" type="button">Pas encore</button>';
    return;
  }
  const ecoute = new Ecoute();
  ecoute.lang = "fr-FR";
  ecoute.interimResults = false;
  ecoute.maxAlternatives = 1;
  zone.textContent = "🎤 Je t'écoute… récite la réplique.";
  ecoute.onresult = function (e) {
    const dit = e.results[0][0].transcript;
    finirRecit(ressemblance(texte, dit) >= 0.7, { score: Math.round(ressemblance(texte, dit) * 100), dit: dit });
  };
  ecoute.onerror = function () {
    citation.classList.remove("cachee");
    zone.textContent = "Je n'ai rien entendu. Autorise le micro, puis réessaie.";
  };
  ecoute.start();
}

function finirRecit(reussi, detail) {
  const zone = $("zone-recit");
  document.querySelector("#carte .citation-grande").classList.remove("cachee");
  let message = detail ? detail.score + " % de la réplique retrouvée. " : "";
  if (reussi) {
    // Bonus une fois par jour
    if (etat.bonusRecit !== aujourdhui) {
      etat.bonusRecit = aujourdhui;
      etat.xp += 15;
      sauver();
      majCompteurs();
      message += "🎭 Bravo, digne de la Comédie-Française ! +15 ✦";
    } else {
      message += "🎭 Bravo ! (le bonus est déjà gagné aujourd'hui)";
    }
  } else {
    message += "Presque ! Relis-la et retente ta chance." + (detail ? " Tu as dit : « " + detail.dit + " »" : "");
  }
  zone.textContent = message;
}

// Glisser du doigt pour passer d'une carte à l'autre
let departX = null;
$("carte").addEventListener("touchstart", function (e) { departX = e.touches[0].clientX; }, { passive: true });
$("carte").addEventListener("touchend", function (e) {
  if (departX === null) return;
  const ecart = e.changedTouches[0].clientX - departX;
  if (ecart < -50) carteSuivante();
  if (ecart > 50) cartePrecedente();
  departX = null;
});

// ---------- Le quiz, avec répétition espacée ----------
let questions = [];
let numeroQuestion = 0;
let bonnes = 0;
let enRevision = false;
let xpAuDebut = 0;

function motsPourQuiz(nombre, avecMotDuJour) {
  const tous = tousLesMots();
  const choisis = [];
  if (avecMotDuJour) choisis.push(motDuJour());
  const aRevoir = tous.filter(function (m) {
    const b = etat.boites[m.mot];
    return b && b.prochain <= aujourdhui;
  });
  melanger(aRevoir).forEach(function (m) {
    if (choisis.length < nombre && choisis.indexOf(m) === -1) choisis.push(m);
  });
  while (choisis.length < nombre && choisis.length < tous.length) {
    const m = tous[Math.floor(Math.random() * tous.length)];
    if (choisis.indexOf(m) === -1) choisis.push(m);
  }
  return choisis;
}

function mauvaisesReponses(bonne, nombre) {
  const autres = melanger(tousLesMots().filter(function (m) { return m.mot !== bonne.mot; }));
  return autres.slice(0, nombre);
}

function lancerQuiz(revision) {
  enRevision = revision;
  numeroQuestion = 0;
  bonnes = 0;
  xpAuDebut = etat.xp;
  // Le quiz grandit avec les mots à revoir : 3 questions au minimum, jusqu'à 5 (révision : 6 au minimum, jusqu'à 8)
  const dus = motsARevoir().length;
  const nombre = revision ? Math.max(6, Math.min(8, dus)) : Math.max(3, Math.min(5, 1 + dus));
  questions = motsPourQuiz(nombre, !revision).map(function (m) {
    return { bonne: m, options: melanger([m].concat(mauvaisesReponses(m, 3))) };
  });
  montrer("quiz");
  poserQuestion();
}

function poserQuestion() {
  const q = questions[numeroQuestion];
  dessinerProgression($("progression-quiz"), questions.length, numeroQuestion);
  $("question").textContent = q.bonne.definition;
  const choix = $("choix");
  choix.innerHTML = "";
  q.options.forEach(function (option) {
    const bouton = document.createElement("button");
    bouton.type = "button";
    bouton.textContent = option.mot;
    bouton.addEventListener("click", function () { repondre(bouton, option, q); });
    choix.appendChild(bouton);
  });
}

function noterReponse(m, juste) {
  const b = etat.boites[m.mot] || { boite: 0, prochain: aujourdhui };
  if (juste) {
    b.boite = Math.min(b.boite + 1, 5);
    bonnes++;
    etat.xp += 10;
  } else {
    b.boite = 1;
  }
  // Plus un mot est su, plus il revient tard : 1, 2, 4, 8 puis 16 jours
  const delais = [1, 1, 2, 4, 8, 16];
  b.prochain = dansNJours(delais[b.boite]);
  etat.boites[m.mot] = b;
  sauver();
  majCompteurs();
}

async function repondre(bouton, option, q) {
  const juste = option === q.bonne;
  document.querySelectorAll("#choix button").forEach(function (b) {
    b.disabled = true;
    if (b.textContent === q.bonne.mot) b.classList.add("bon");
  });
  if (!juste) bouton.classList.add("faux");
  if (juste) sonJuste(); else sonFaux();
  noterReponse(q.bonne, juste);
  await attendre(juste ? 700 : 1400);
  numeroQuestion++;
  if (numeroQuestion < questions.length) poserQuestion();
  else finirQuiz();
}

const PALIERS = {
  3: "🔥 3 jours d'affilée ! L'habitude est en train de naître.",
  7: "🔥 Une semaine entière ! Tu gagnes un ❄️ gel de série.",
  14: "🔥 Deux semaines ! Ton vocabulaire commence à se voir.",
  30: "👑 Un mois de culture quotidienne. Respect.",
  50: "👑 50 jours. Tu deviens une référence.",
  100: "👑 100 jours ! Légende du Pandémonium."
};
let premiereSessionDuJour = false;
let messageGel = "";

function finirQuiz() {
  premiereSessionDuJour = false;
  messageGel = "";
  if (!enRevision && !etat.sessions[aujourdhui]) {
    premiereSessionDuJour = true;
    etat.sessions[aujourdhui] = true;
    etat.xp += 20;
    if (etat.dernierJour === hier) {
      etat.serie += 1;
    } else if (etat.dernierJour === avantHier && etat.gels > 0) {
      // Un jour raté, mais un gel protège la série
      etat.gels -= 1;
      etat.serie += 1;
      messageGel = "❄️ Un gel a protégé ta série d'hier. ";
    } else if (etat.dernierJour !== aujourdhui) {
      etat.serie = 1;
    }
    etat.dernierJour = aujourdhui;
    // Un gel offert tous les 7 jours (2 au maximum)
    if (etat.serie % 7 === 0) etat.gels = Math.min((etat.gels || 0) + 1, 2);
  }
  sauver();
  majCompteurs();

  const parfait = bonnes === questions.length;
  $("resultat-emoji").textContent = parfait ? "🍯" : (bonnes > 0 ? "✨" : "🌱");
  $("resultat-titre").textContent = parfait ? "Bu d'un trait !" : (bonnes > 0 ? "Bien joué !" : "Ça viendra !");
  sonBoire(true);
  $("resultat-texte").textContent = bonnes + " bonne" + (bonnes > 1 ? "s" : "") + " réponse" + (bonnes > 1 ? "s" : "") + " sur " + questions.length + "." +
    (enRevision ? " Les mots ratés reviendront demain." : " Série : " + serieActuelle() + " jour" + (serieActuelle() > 1 ? "s" : "") + " d'affilée.");
  $("resultat-gain").textContent = messageGel + "+" + (etat.xp - xpAuDebut) + " ✦";

  // Palier de série : on fête avec des braises
  const palier = premiereSessionDuJour ? PALIERS[etat.serie] : null;
  $("palier").hidden = !palier;
  if (palier) $("palier").textContent = palier;

  // Le coffre du jour : une fois par jour, après la première session
  $("coffre").hidden = !(premiereSessionDuJour && etat.coffre !== aujourdhui);
  $("coffre-resultat").hidden = true;

  montrer("resultat");
  if (palier) feterAvecDesBraises();
}

$("coffre").addEventListener("click", function () {
  if (etat.coffre === aujourdhui) return;
  // Une petite surprise : souvent +10, parfois +25, rarement le jackpot
  const tirage = Math.random();
  let gain = 10;
  let texte = "✨ +10 ✦ : petite étincelle du jour.";
  if (tirage > 0.95) { gain = 100; texte = "👑 JACKPOT DU LETTRÉ : +100 ✦ !"; }
  else if (tirage > 0.7) { gain = 25; texte = "🔥 Belle trouvaille : +25 ✦ !"; }
  etat.coffre = aujourdhui;
  etat.xp += gain;
  sauver();
  majCompteurs();
  $("coffre").hidden = true;
  $("coffre-resultat").textContent = texte;
  $("coffre-resultat").hidden = false;
  sonPieces(gain === 100 ? 16 : (gain === 25 ? 9 : 5));
  if (gain === 100) feterAvecDesBraises();
});

$("retour-accueil").addEventListener("click", majAccueil);

// ---------- Partager le mot du jour en image (format story) ----------
function couperLignes(g, texte, largeur) {
  const morceaux = texte.split(" ");
  const lignes = [];
  let ligne = "";
  morceaux.forEach(function (m) {
    const essai = ligne ? ligne + " " + m : m;
    if (g.measureText(essai).width > largeur && ligne) { lignes.push(ligne); ligne = m; }
    else ligne = essai;
  });
  if (ligne) lignes.push(ligne);
  return lignes;
}

async function partager() {
  const m = motDuJour();
  const toile = document.createElement("canvas");
  toile.width = 1080;
  toile.height = 1920;
  const g = toile.getContext("2d");

  g.fillStyle = "#0a0a0a";
  g.fillRect(0, 0, 1080, 1920);
  const lueur = g.createRadialGradient(540, 1950, 50, 540, 1950, 1150);
  lueur.addColorStop(0, "rgba(255, 106, 0, 0.55)");
  lueur.addColorStop(0.5, "rgba(220, 30, 10, 0.18)");
  lueur.addColorStop(1, "rgba(0, 0, 0, 0)");
  g.fillStyle = lueur;
  g.fillRect(0, 0, 1080, 1920);

  const feu = g.createLinearGradient(100, 0, 980, 0);
  feu.addColorStop(0, "#ffe066");
  feu.addColorStop(0.4, "#ffb800");
  feu.addColorStop(0.75, "#ff6a00");
  feu.addColorStop(1, "#ff2e1f");

  g.textAlign = "center";
  g.fillStyle = "#ffb800";
  g.font = "600 34px sans-serif";
  g.fillText("LE MOT DU JOUR", 540, 640);

  let taille = 150;
  g.font = "800 " + taille + "px sans-serif";
  while (g.measureText(m.mot).width > 940 && taille > 60) {
    taille -= 6;
    g.font = "800 " + taille + "px sans-serif";
  }
  g.fillStyle = feu;
  g.fillText(m.mot, 540, 860);
  g.fillRect(340, 920, 400, 4);

  g.fillStyle = "#f6ecd9";
  g.font = "italic 52px Georgia, serif";
  couperLignes(g, m.definition, 880).forEach(function (ligne, i) {
    g.fillText(ligne, 540, 1050 + i * 72);
  });

  g.fillStyle = "#bdb3a2";
  g.font = "600 38px sans-serif";
  g.fillText("Pandémonium des mots", 540, 1780);

  const image = await new Promise(function (fini) { toile.toBlob(fini, "image/png"); });
  const fichier = new File([image], "mot-du-jour.png", { type: "image/png" });
  if (navigator.canShare && navigator.canShare({ files: [fichier] })) {
    try { await navigator.share({ files: [fichier], title: "Le mot du jour" }); } catch (e) { /* partage annulé */ }
    return;
  }
  // Sinon (ordinateur) : on télécharge l'image
  const lien = document.createElement("a");
  lien.href = URL.createObjectURL(image);
  lien.download = "mot-du-jour.png";
  lien.click();
}

$("partager").addEventListener("click", partager);

// ---------- Onglet Réviser ----------
function majReviser() {
  const tous = tousLesMots();
  const aRevoir = tous.filter(function (m) {
    const b = etat.boites[m.mot];
    return b && b.prochain <= aujourdhui;
  }).length;
  const boites = Object.keys(etat.boites).map(function (k) { return etat.boites[k]; });
  const ancres = boites.filter(function (b) { return b.boite >= 3; }).length;
  $("a-revoir").textContent = aRevoir;
  $("mots-appris").textContent = ancres + " mot" + (ancres > 1 ? "s" : "") + " bien ancré" + (ancres > 1 ? "s" : "") + " · " + boites.length + " déjà vu" + (boites.length > 1 ? "s" : "");

  const liste = $("liste-favoris");
  liste.innerHTML = "";
  if (!etat.favoris.length) {
    liste.innerHTML = '<p class="vide">Touche ♡ sur un mot pour le garder ici.</p>';
    return;
  }
  etat.favoris.forEach(function (nom) {
    const m = tous.find(function (x) { return x.mot === nom; });
    if (!m) return;
    const el = document.createElement("div");
    el.className = "element";
    el.innerHTML = "<b>" + echapper(m.mot) + "</b><span>" + echapper(m.definition) + "</span>";
    liste.appendChild(el);
  });
}

$("lancer-revision").addEventListener("click", function () {
  // Revoir les mots « dus » est toujours gratuit : c'est le cœur de l'appli.
  // Seule la révision bonus (quand rien n'est à revoir) est limitée à une par jour.
  if (!motsARevoir().length) {
    if (etat.bonusRevision === aujourdhui) { ouvrirPremium(); return; }
    etat.bonusRevision = aujourdhui;
    sauver();
  }
  allerA("aujourdhui");
  lancerQuiz(true);
});

// ---------- Onglet Collection ----------
const LIMITE_GRATUITE = 10;

function majFormulaire() {
  const type = document.querySelector('input[name="type"]:checked').value;
  const titre = $("champ-titre");
  const texte = $("champ-texte");
  const auteur = $("champ-auteur");
  const avecTitre = type === "mot" || type === "invention";
  titre.hidden = !avecTitre;
  titre.required = avecTitre;
  auteur.hidden = type === "mot";
  titre.placeholder = type === "invention" ? "Ton mot inventé (ex. : hydraulique)" : "Le mot (ex. : Pantois)";
  texte.placeholder = type === "mot" ? "Sa définition" : (type === "invention" ? "Ce qu'il veut dire (ex. : qui fait pleurer)" : (type === "citation" ? "La citation" : "Ta pensée"));
  auteur.placeholder = type === "invention" ? "Une phrase d'exemple (facultatif)" : (type === "citation" ? "Auteur (facultatif)" : "Signature (facultatif)");
}

document.querySelectorAll('input[name="type"]').forEach(function (r) {
  r.addEventListener("change", majFormulaire);
});

$("formulaire").addEventListener("submit", function (e) {
  e.preventDefault();
  if (etat.collection.length >= LIMITE_GRATUITE) { ouvrirPremium(); return; }
  const type = document.querySelector('input[name="type"]:checked').value;
  const element = {
    type: type,
    titre: $("champ-titre").value.trim(),
    texte: $("champ-texte").value.trim(),
    auteur: $("champ-auteur").value.trim(),
    date: aujourdhui
  };
  if (!element.texte || ((type === "mot" || type === "invention") && !element.titre)) return;
  etat.collection.unshift(element);
  etat.xp += 5;
  sauver();
  majCompteurs();
  $("formulaire").reset();
  majFormulaire();
  majCollection();
});

function majCollection() {
  $("limite-collection").textContent = etat.collection.length + " / " + LIMITE_GRATUITE + " ajouts gratuits · illimité avec Premium";
  const liste = $("liste-collection");
  liste.innerHTML = "";
  if (!etat.collection.length) {
    liste.innerHTML = '<p class="vide">Ta collection est vide. Ajoute ton premier mot !</p>';
    return;
  }
  const noms = { mot: "Mot", citation: "Citation", pensee: "Pensée", invention: "Invention 🎨", punchline: "Punchline 🎤" };
  etat.collection.forEach(function (el, i) {
    const bloc = document.createElement("div");
    bloc.className = "element";
    bloc.innerHTML = "<b>" + noms[el.type] + (el.type === "mot" || el.type === "invention" || el.type === "punchline" ? " · " + echapper(el.titre) : "") + "</b>" +
      "<span>" + echapper(el.texte) + "</span>" +
      (el.auteur ? "<small>— " + echapper(el.auteur) + "</small>" : "") +
      '<small><button class="bouton petit-bouton" data-supprimer="' + i + '" type="button">Retirer</button></small>';
    liste.appendChild(bloc);
  });
}

$("liste-collection").addEventListener("click", function (e) {
  const bouton = e.target.closest("[data-supprimer]");
  if (!bouton) return;
  etat.collection.splice(Number(bouton.dataset.supprimer), 1);
  sauver();
  majCollection();
});

// ---------- L'atelier poétique ----------
const imagesDispo = typeof imagesPoetiques !== "undefined" ? imagesPoetiques : [];

function jouerCompleter() {
  if (!imagesDispo.length) return;
  const img = auHasard(imagesDispo);
  const zone = $("zone-atelier");
  zone.innerHTML = '<p class="etiquette-petite">Quel mot crée l\'image ?</p>' +
    '<p class="phrase-trou">' + echapper(img.avant) + ' <span class="trou">…</span>' + echapper(img.apres) + "</p>" +
    '<div class="choix" id="choix-atelier"></div><div id="suite-atelier"></div>';
  melanger(img.choix).forEach(function (mot) {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = mot;
    b.addEventListener("click", function () {
      const juste = mot === img.mot;
      zone.querySelectorAll("#choix-atelier button").forEach(function (x) {
        x.disabled = true;
        if (x.textContent === img.mot) x.classList.add("bon");
      });
      if (!juste) b.classList.add("faux");
      if (juste) sonJuste(); else sonFaux();
      zone.querySelector(".trou").textContent = img.mot;
      if (juste) { etat.xp += 5; sauver(); majCompteurs(); }
      $("suite-atelier").innerHTML =
        '<p class="consigne">' + (juste ? "✨ Bien vu ! +5 ✦" : "Presque ! C'était « " + echapper(img.mot) + " ».") + "</p>" +
        '<p class="texte-doux">' + echapper(img.explication) + "</p>" +
        '<p class="auteur">— ' + echapper(img.auteur) + "</p>" +
        '<button class="bouton principal large" type="button" id="encore-completer">Une autre image</button>';
      $("encore-completer").addEventListener("click", jouerCompleter);
    });
    zone.querySelector("#choix-atelier").appendChild(b);
  });
}

function jouerCreer() {
  const sentiment = auHasard(typeof sentimentsPoetiques !== "undefined" ? sentimentsPoetiques : ["la joie"]);
  const v = auHasard(typeof versesPoetiques !== "undefined" ? versesPoetiques : [{ verbe: "briller", objets: "étoiles, soleil" }]);
  const zone = $("zone-atelier");
  zone.innerHTML = '<p class="consigne">Écris une phrase où <b>' + echapper(sentiment) + "</b> va <b>" + echapper(v.verbe) + "</b>.</p>" +
    '<p class="petit gauche">💡 Idées d\'images qui vont avec « ' + echapper(v.verbe) + " » : " + echapper(v.objets) + ".<br>Exemple de Balzac : des pensées qui « piquent comme autant de dards ».</p>" +
    '<textarea class="champ" id="ma-phrase" rows="3" maxlength="300" placeholder="Ta phrase poétique…"></textarea>' +
    '<button class="bouton principal large" type="button" id="garder-phrase">Garder dans ma collection</button>' +
    '<button class="bouton large" type="button" id="autre-sujet">Un autre sujet</button>' +
    '<p class="consigne" id="phrase-gardee"></p>';
  $("autre-sujet").addEventListener("click", jouerCreer);
  $("garder-phrase").addEventListener("click", function () {
    const texte = $("ma-phrase").value.trim();
    if (!texte) { $("phrase-gardee").textContent = "Écris d'abord ta phrase 🙂"; return; }
    if (etat.collection.length >= LIMITE_GRATUITE) { ouvrirPremium(); return; }
    etat.collection.unshift({ type: "pensee", titre: "", texte: texte, auteur: "Mon image poétique", date: aujourdhui });
    etat.xp += 10;
    sauver();
    majCompteurs();
    majCollection();
    $("phrase-gardee").textContent = "✨ Gardée dans ta collection ! +10 ✦ Elle reviendra dans tes sessions.";
    $("ma-phrase").value = "";
  });
}

$("jeu-completer").addEventListener("click", jouerCompleter);
$("jeu-creer").addEventListener("click", jouerCreer);

// ---------- L'atelier rimes : tes mots, ce qui rime, et c'est toi qui écris la punchline ----------
const ASTUCES_RIMES = [
  "Pars d'une image ou d'une émotion, pas du dictionnaire.",
  "Joue sur un double sens : un mot qui veut dire deux choses fait toujours mouche.",
  "Oppose deux mondes : un mot de la rue face à un mot soutenu.",
  "Garde la chute pour la fin : le mot le plus fort en dernier.",
  "Lis-la à voix haute : si tu bloques en la disant, change un mot.",
  "Une rime, c'est bien ; une rime et un sens qui bascule, c'est une punchline."
];

function tirerMotsRimes() {
  const tous = tousLesMots().filter(function (m) { return !m.perso; });
  const soutenu = tous.filter(function (m) { return categorieDe(m) === "utile" && m.mot.indexOf(" ") === -1; });
  const piquant = tous.filter(function (m) { var c = categorieDe(m); return c === "argot" || c === "antan"; });
  const revient = motQuiRevient(soutenu);
  const choix = [(revient || auHasard(soutenu)).mot];
  if (piquant.length) choix.push(auHasard(piquant).mot);
  $("rimes-mots").value = choix.join(", ");
  chercherRimes();
}

function chercherRimes() {
  const mots = $("rimes-mots").value.split(",").map(function (x) { return x.trim(); }).filter(Boolean).slice(0, 3);
  const zone = $("zone-rimes");
  if (!mots.length) { zone.innerHTML = '<p class="consigne">Écris un ou deux mots, ou tire-les au sort 🎲</p>'; return; }
  const tous = tousLesMots();
  let html = "";
  mots.forEach(function (mot) {
    const trouve = tous.find(function (m) { return sansAccents(m.mot) === sansAccents(mot); });
    // Quelques mots de l'appli (riches) puis quelques mots courants (faciles)
    const toutes = rimesPour(mot, tous);
    const riches = melanger(toutes.filter(function (r) { return !r.courant; })).slice(0, 5);
    const faciles = melanger(toutes.filter(function (r) { return r.courant; })).slice(0, 10 - riches.length);
    const rimes = riches.concat(faciles);
    html += '<div class="bloc-rime"><p class="etiquette-petite">' + echapper(mot) + (trouve ? " · " + echapper(trouve.definition) : "") + "</p>" +
      (rimes.length
        ? '<p class="petit gauche">Rime avec (touche pour l\'ajouter) :</p><div class="rimes">' + rimes.map(function (r) {
            return '<button class="puce" type="button" data-rime="' + echapper(r.mot) + '" title="' + echapper(r.definition) + '">' + echapper(r.mot) + "</button>";
          }).join("") + "</div>"
        : '<p class="petit gauche">Pas de rime dans la liste pour ce mot : à toi d\'en trouver une, c\'est encore mieux.</p>') +
      "</div>";
  });
  const defi = mots.length > 1
    ? "Place « " + mots[0] + " » et « " + mots[1] + " » en deux lignes, et finis sur une rime."
    : "Écris deux lignes qui finissent par une rime avec « " + mots[0] + " ».";
  html += '<p class="consigne">🎯 ' + echapper(defi) + "</p>" +
    '<p class="petit gauche">💡 ' + echapper(auHasard(ASTUCES_RIMES)) + "<br>Exemple : « Déclencher un rire, c'est ça qui m'anime ; déclencher une rime, ça, c'est simplement de la frime. »</p>" +
    '<textarea class="champ" id="ma-punchline" rows="3" maxlength="300" placeholder="Ta punchline…"></textarea>' +
    '<button class="bouton principal large" type="button" id="garder-punchline">Garder dans ma collection</button>' +
    '<p class="consigne" id="punchline-gardee"></p>';
  zone.innerHTML = html;
  $("garder-punchline").addEventListener("click", function () {
    const texte = $("ma-punchline").value.trim();
    if (!texte) { $("punchline-gardee").textContent = "Écris d'abord ta punchline 🙂"; return; }
    if (etat.collection.length >= LIMITE_GRATUITE) { ouvrirPremium(); return; }
    etat.collection.unshift({ type: "punchline", titre: mots.join(", "), texte: texte, auteur: "", date: aujourdhui });
    etat.xp += 10;
    sauver();
    majCompteurs();
    majCollection();
    $("punchline-gardee").textContent = "🎤 Gardée dans ta collection ! +10 ✦";
    $("ma-punchline").value = "";
  });
}

$("rimes-tirer").addEventListener("click", tirerMotsRimes);
$("rimes-chercher").addEventListener("click", chercherRimes);
$("rimes-mots").addEventListener("keydown", function (e) { if (e.key === "Enter") chercherRimes(); });
// Toucher une rime l'ajoute à la fin de la punchline
$("zone-rimes").addEventListener("click", function (e) {
  const b = e.target.closest("[data-rime]");
  if (!b) return;
  const champ = $("ma-punchline");
  champ.value = (champ.value ? champ.value.replace(/\s*$/, " ") : "") + b.dataset.rime.toLowerCase();
  champ.focus();
});

// ---------- Onglet Soirée : des sujets pour lancer la conversation ----------
const LIMITE_SOIREE = 15;
let genreSoiree = "tout";

// Des traits de caractère tirés du vocabulaire, pour « Qui de nous… »
const TRAITS = ["Hâbleur", "Ronchon", "Tatillon", "Versatile", "Pédant", "Chafouin", "Narquois", "Allègre",
  "Débonnaire", "Magnanime", "Ingénu", "Gastrolâtre", "Frivole", "Goguenard", "Prolixe"];

const SUJETS_GALEJADE = ["ta dernière soirée", "tes vacances d'été", "ton voisin du dessus", "ton premier job",
  "le jour où tu as croisé une célébrité", "ton animal de compagnie", "ta dernière partie de jeu vidéo",
  "la plus grosse tempête que tu aies vue", "ton record personnel", "ton arrière-grand-père"];

function auHasard(liste) { return liste[Math.floor(Math.random() * liste.length)]; }

// « Invente ton mot » : une situation à nommer, et une piste d'où tirer l'image
const SITUATIONS_A_NOMMER = [
  "un film qui fait pleurer", "un ami toujours en retard", "un discours interminable", "une soirée ratée",
  "quelqu'un qui parle trop fort", "un plat beaucoup trop épicé", "un lundi matin", "un amour impossible",
  "un collègue qui se plaint sans arrêt", "une chanson qu'on a en tête toute la journée", "un message laissé en « vu »",
  "quelqu'un qui se vante", "une dispute pour rien", "un fou rire incontrôlable", "une personne toujours de bonne humeur"
];
const PISTES = [
  "un mot de la plomberie", "un mot de la météo", "un mot de la cuisine", "un mot de la médecine",
  "un mot de l'informatique", "un nom d'écrivain ou de peintre", "un mot du sport", "un mot de la géologie",
  "un mot de l'astronomie", "un mot de la mécanique", "un lieu célèbre", "un objet du quotidien"
];

// ---------- Les jeux en version sombre : insultes, rumeurs, malédictions, humour noir ----------
function insultesDisponibles() {
  if (typeof insultesAntan === "undefined") return [];
  return insultesAntan.concat(insultesArgot).map(motParNom).filter(Boolean);
}

function sujetSombre(genre) {
  if (typeof rumeurs === "undefined") return null;
  const insultes = insultesDisponibles();
  if (!insultes.length) return null;
  if (genre === "devine") {
    const m = auHasard(insultes);
    return { etiquette: "😈 Devine l'insulte", texte: m.definition, indice: "Le premier qui trouve l'insulte gagne le tour.", reponse: m.mot };
  }
  if (genre === "defi") {
    const m = auHasard(insultes);
    return { etiquette: "😈 Défi perfide", texte: "Glisse « " + m.mot + " » dans la conversation… sans que personne ne se vexe.",
      indice: m.mot + " : " + m.definition };
  }
  if (genre === "qui") {
    const m = auHasard(insultes);
    return { etiquette: "😈 Qui de nous…", texte: "Qui, ici, mérite le plus le titre de « " + m.mot + " » ?",
      indice: m.mot + " : " + m.definition + " · À trois, tout le monde pointe du doigt 👉" };
  }
  if (genre === "debat" || genre === "paradoxe") {
    const r = auHasard(rumeurs);
    return { etiquette: "🕵️ Vrai ou complot ?", texte: r[0] + " : " + r[1],
      indice: "Chacun défend sa thèse avec aplomb pendant 30 secondes, puis on révèle le fin mot.",
      revele: "Le fin mot : " + r[2], boutonRevele: "🔦 Le fin mot" };
  }
  if (genre === "galejade") {
    return { etiquette: "😈 La malédiction",
      texte: "Lance la malédiction la plus noire et la plus élégante contre : " + auHasard(["les lundis matin", "ton réveil", "les chaussettes dépareillées",
        "le Wi-Fi qui saute", "les gens qui parlent au cinéma", "les moustiques", "les réunions qui auraient pu être un mail", "le dernier yaourt mangé par un autre"]) + ".",
      indice: "Style imprécation : « Que ton café soit froid pour l'éternité ! » Les autres votent pour la plus terrible." };
  }
  if (genre === "invente") {
    return { etiquette: "😈 Invente ton insulte d'antan",
      texte: "Invente une insulte à l'ancienne pour : " + auHasard(["celui qui ne rend jamais l'argent prêté", "celle qui spoile la fin des séries",
        "celui qui met les pieds sur la table", "celui qui répond « ok » à un long message", "celle qui arrive toujours en retard", "celui qui mâche la bouche ouverte"]) + ".",
      indice: "Pour t'inspirer : faquin, pignouf, gougnafier, bélître… Le groupe vote, et le gagnant l'ajoute à sa collection !" };
  }
  if (genre === "conversation") {
    const avecBlague = Math.random() < 0.4;
    return { etiquette: "😈 Tête-à-tête", texte: avecBlague ? auHasard(humourNoir) : auHasard(questionsSombres),
      indice: avecBlague ? "Raconte-la avec le plus grand sérieux, puis guette son sourire." : "Réponds le premier : ça met l'autre à l'aise." };
  }
  if (genre === "famille") return defiFamille(insultes);
  return null; // les autres jeux (théâtre, articule, glissements) gèrent eux-mêmes leur version sombre
}

function sujet(genre) {
  if (etat.maudit) {
    const s = sujetSombre(genre);
    if (s) return s;
  }
  const tous = tousLesMots();
  if (genre === "paradoxe") {
    const paradoxes = sciencesDispo.filter(function (s) { return s.domaine === "Paradoxe"; });
    if (paradoxes.length) {
      const p = auHasard(paradoxes);
      return { etiquette: "Paradoxe · qui a la solution ?", texte: (p.titre ? p.titre + " : " : "") + p.texte,
        indice: "Chacun propose son explication en 30 secondes, puis on vote pour la meilleure." };
    }
    genre = "debat";
  }
  if (genre === "debat") {
    // Une fois sur trois, un paradoxe à résoudre ensemble
    const paradoxes = sciencesDispo.filter(function (s) { return s.domaine === "Paradoxe"; });
    if (paradoxes.length && Math.random() < 0.33) {
      const p = auHasard(paradoxes);
      return { etiquette: "Paradoxe · qui a la solution ?", texte: (p.titre ? p.titre + " : " : "") + p.texte,
        indice: "Chacun propose son explication, puis on vote pour la meilleure." };
    }
    // Une fois sur trois, l'idée d'un philosophe à discuter
    if (philosophesDispo.length && Math.random() < 0.33) {
      const ph = auHasard(philosophesDispo);
      return { etiquette: "Débat · " + ph.auteur + ", " + ph.notion, texte: ph.idee,
        indice: "D'accord ou pas d'accord ? Chacun donne un exemple tiré de sa vie." };
    }
    const d = auHasard(toutesLesPensees().concat(toutesLesCitations()));
    return { etiquette: "Débat · pour ou contre ?", texte: "« " + d.texte + " »",
      indice: "Chacun donne son avis en 30 secondes, puis on vote." };
  }
  if (genre === "defi") {
    // De préférence un mot déjà vu : le placer en conversation, c'est la meilleure façon de le retenir
    const m = motQuiRevient(motsUtiles()) || auHasard(tous);
    return { etiquette: "Défi discret", texte: "Place le mot « " + m.mot + " » dans la conversation sans que personne ne le remarque.",
      indice: m.mot + " : " + m.definition };
  }
  if (genre === "qui") {
    const dispo = TRAITS.map(function (t) { return tous.find(function (m) { return m.mot === t; }); }).filter(Boolean);
    const m = auHasard(dispo);
    return { etiquette: "Qui de nous…", texte: "Qui, ici, est le plus " + m.mot.toLowerCase() + " ?",
      indice: m.mot + " : " + m.definition + " · À trois, tout le monde pointe du doigt 👉" };
  }
  if (genre === "devine") {
    const m = auHasard(tous);
    return { etiquette: "Devine le mot", texte: m.definition, indice: "Le premier qui trouve gagne le tour.", reponse: m.mot };
  }
  if (genre === "conversation") {
    const s = Math.random() < 0.5 ? questionAPoser() : anecdoteAConter();
    return { etiquette: "Tête-à-tête · " + s.titre, texte: s.texte,
      indice: "Lance le sujet, puis écoute vraiment : la meilleure conversation, c'est celle où l'autre parle aussi." };
  }
  if (genre === "glissement") {
    return { etiquette: "Glissements de sons",
      texte: "On part de « " + auHasard(DEPARTS_GLISSEMENT) + " ». À tour de rôle, change un seul son pour inventer une nouvelle phrase.",
      indice: "Exemple : la grotte de Lascaux → la croque de McDo → les crocs de Sarko. Celui qui sèche ou qui répète a perdu ; la phrase la plus drôle gagne le tour." };
  }
  if (genre === "invente") {
    return { etiquette: "Atelier · invente ton mot",
      texte: "Trouve une façon imagée de dire : « " + auHasard(SITUATIONS_A_NOMMER) + " ». Pars d'" + auHasard(PISTES) + ".",
      indice: "Exemples : un livre qui fait pleurer → un livre « hydraulique » ; « lire un Zola » pour lire un livre de Zola (métonymie). Chacun propose, le groupe vote, et le gagnant l'ajoute à sa collection !" };
  }
  if (genre === "famille") return defiFamille(tous);
  if (genre === "theatre") return defiTheatre(tous);
  if (genre === "diction") return defiDiction();
  if (genre === "malle") return defiMalle();
  return { etiquette: "Galéjade", texte: "Raconte l'histoire la plus énorme possible sur : " + auHasard(SUJETS_GALEJADE) + ".",
    indice: "Les autres votent : crédible, ou galéjade ?" };
}

// ---------- En famille : des défis pour rire entre parents et enfants, frères et sœurs ----------
const IMITATIONS_QUI = ["ton père", "ta mère", "ton frère ou ta sœur", "ton fils ou ta fille", "toi à 15 ans",
  "ta grand-mère", "ton grand-père", "un prof que vous avez tous les deux connu"];
const IMITATIONS_QUOI = [
  "qui découvre que quelqu'un a fini le dernier yaourt", "qui cherche ses clés en étant déjà en retard",
  "qui raconte ses vacances au téléphone", "qui essaie de comprendre un mot d'argot", "qui se réveille un lundi matin",
  "qui gagne au loto", "qui rate une marche devant tout le monde", "qui goûte un plat beaucoup trop salé",
  "qui donne un conseil que personne n'a demandé", "qui fait une photo de groupe", "qui se dispute avec le GPS",
  "qui annonce une nouvelle très importante… sur le repas de ce soir"];
const QUESTIONS_FAMILLE = [
  "Quel mot ou quelle expression l'autre dit le plus souvent ?",
  "Quel juron l'autre lâche quand il se cogne le petit orteil ?",
  "Quel est le plat préféré de l'autre ?",
  "Quelle chanson l'autre chante faux sous la douche ?",
  "Quelle est la plus grosse bêtise que l'autre ait faite enfant ?",
  "Quel métier l'autre rêvait de faire petit ?",
  "Qu'est-ce qui met l'autre de mauvaise humeur en deux secondes ?",
  "Quel film l'autre pourrait revoir dix fois ?",
  "Quelle est la phrase que l'autre répète quand il veut avoir raison ?",
  "Quel super-pouvoir l'autre choisirait ?",
  "Quel objet l'autre perd tout le temps ?",
  "De quoi l'autre a le plus peur ?",
  "Quel est le surnom le plus gênant qu'on ait donné à l'autre ?",
  "Quel serait le prénom de l'autre s'il était né au XVIIᵉ siècle ?",
  "Si l'autre était un mot du dictionnaire, lequel serait-il ?"];

// Articule ! Des virelangues (phrases difficiles à prononcer) : les classiques, et quelques-uns tissés avec les mots de l'appli
const VIRELANGUES = [
  "Les chaussettes de l'archiduchesse sont-elles sèches ? Archi-sèches !",
  "Un chasseur sachant chasser doit savoir chasser sans son chien.",
  "Si six scies scient six cyprès, six cent six scies scient six cent six cyprès.",
  "Je veux et j'exige d'exquises excuses.",
  "Trois tortues trottaient sur un trottoir très étroit.",
  "Ton thé t'a-t-il ôté ta toux ?",
  "Didon dîna, dit-on, du dos d'un dodu dindon.",
  "Combien sont ces six saucissons-ci ? Ces six saucissons-ci sont six sous.",
  "Le cricri de la crique crie son cri cru et critique.",
  "Fruits frais, fruits frits, fruits cuits, fruits crus.",
  "Un généreux déjeuner régénérerait des généraux dégénérés.",
  "Natacha n'attacha pas son chat Pacha qui s'échappa.",
  "Le ver vert va vers le verre vert.",
  "Suis-je bien chez ce cher Serge ?",
  "Seize chaises sèchent sous seize cerisiers.",
  "Pruneau cuit, pruneau cru, pruneau cuit, pruneau cru.",
  "Le faquin fat fanfaronne face au faune facétieux.",
  "Sept sycophantes susurrent sans cesse des sottises.",
  "La chimère chamarrée charme le chaland chafouin.",
  "Le thaumaturge tâtonne tôt dans les tourbillons troubles.",
  "Le hâbleur habile hèle l'hydre hilare."];

// La malle aux mots : comme « Dans ma valise il y a… », mais le début de phrase est tiré de l'univers de l'appli
function defiMalle() {
  const sombre = etat.maudit;
  const lieux = sombre
    ? ["le cercueil", "la crypte", "le grimoire", "le cachot", "la besace", "le chaudron"]
    : ["la malle", "le grenier", "le cabinet de curiosités", "la besace", "l'alcôve", "le vestibule", "la cassette", "la bibliothèque secrète"];
  const proprietaires = sombre
    ? ["du malotru", "du pendard", "de Caligula", "du croque-mort", "de la sorcière", "du gougnafier", "de Méphistophélès"]
    : ["d'Harpagon", "de Gargantua", "du thaumaturge", "de l'amphitryon", "de la grisette", "de Méphistophélès", "du vieux cuistre",
       "de l'entomologiste", "du marmiton", "de Don Quichotte"];
  const debut = "Dans " + auHasard(lieux) + " " + auHasard(proprietaires) + ", il y a…";
  const reserve = sombre && insultesDisponibles().length ? insultesDisponibles() : motsUtiles();
  const idees = reserve.slice().sort(function () { return Math.random() - 0.5; }).slice(0, 4)
    .map(function (m) { return m.mot.toLowerCase(); });
  return { etiquette: sombre ? "😈 La malle maudite" : "🧳 La malle aux mots",
    texte: "« " + debut + " »",
    indice: "Chacun répète toute la liste dans l'ordre, puis ajoute un élément. Un oubli, une erreur : éliminé ! Bonus si ton élément est un mot de l'appli. Des idées : " + idees.join(", ") + "." };
}

function defiDiction() {
  const phrase = auHasard(etat.maudit && typeof virelanguesSombres !== "undefined" ? virelanguesSombres : VIRELANGUES);
  return { etiquette: "🗣️ Articule !",
    texte: "« " + phrase + " »",
    indice: "Dis-la trois fois de suite, vite et le plus distinctement possible. Une syllabe avalée, et c'est au suivant ! Ou laisse le téléphone juger.",
    diction: phrase };
}

// Le téléphone écoute et note la netteté : la part des mots qu'il a bien reconnus
function jugerDiction(bouton) {
  const phrase = bouton.dataset.diction;
  const Ecoute = window.SpeechRecognition || window.webkitSpeechRecognition;
  const zone = document.createElement("p");
  zone.className = "soiree-revele";
  bouton.replaceWith(zone);
  if (!Ecoute) {
    zone.textContent = "Ton téléphone ne sait pas écouter ici : ce sont les autres qui jugent !";
    return;
  }
  const ecoute = new Ecoute();
  ecoute.lang = "fr-FR";
  ecoute.interimResults = false;
  ecoute.maxAlternatives = 1;
  zone.textContent = "🎤 J'écoute… articule bien, une seule fois.";
  ecoute.onresult = function (e) {
    const dit = e.results[0][0].transcript;
    const score = Math.round(ressemblance(phrase, dit) * 100);
    const verdict = score >= 90 ? "🏆 Diction impeccable, digne de la Comédie-Française !" :
      score >= 70 ? "👏 Très net, quelques syllabes ont glissé." :
      score >= 40 ? "😅 On t'a à moitié compris… Encore !" : "🥴 Bouillie de mots ! Respire et recommence.";
    zone.textContent = score + " % des mots bien entendus. " + verdict + " (J'ai compris : « " + dit + " »)";
  };
  ecoute.onerror = function () { zone.textContent = "Je n'ai rien entendu. Autorise le micro, puis réessaie."; };
  ecoute.start();
}

function definitionsCourtes(m) { return m.definition.split(/[.;]/)[0]; }

function motsInterdits(m) {
  const vus = new Set();
  return m.definition.split(/[^A-Za-zÀ-ÖØ-öø-ÿœŒæÆ]+/).filter(function (w) {
    const n = w.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
    if (w.length < 5 || MOTS_VIDES.has(n) || vus.has(n)) return false;
    vus.add(n);
    return true;
  }).sort(function (a, b) { return b.length - a.length; }).slice(0, 2);
}

function defiFamille(tous) {
  const sorte = auHasard(["choc", "choc", "menteur", "interdit", "imite", "connait", "diction", "diction"]);
  if (sorte === "diction") return defiDiction();
  if (sorte === "choc") {
    // Choc des générations : l'argot pour les anciens, les mots d'antan pour les jeunes
    const versLesAnciens = Math.random() < 0.5;
    const liste = tous.filter(versLesAnciens ? estArgot : estAntan);
    if (liste.length) {
      const m = auHasard(liste);
      return { etiquette: "⚔️ Choc des générations",
        texte: (versLesAnciens ? "Les anciens doivent deviner un mot des jeunes : " : "Les jeunes doivent deviner un mot d'antan : ") + "que veut dire « " + m.mot + " » ?",
        indice: "Dix secondes pour répondre. Une bonne réponse : un point. Une réponse à côté mais drôle : un demi-point.",
        revele: m.mot + " : " + m.definition };
    }
  }
  if (sorte === "menteur") {
    const rares = tous.filter(function (m) { return !m.perso && typeof niveauDuMot === "function" && niveauDuMot(m.mot) === "rare"; });
    const vrai = auHasard(rares.length ? rares : tous);
    const faux = [];
    while (faux.length < 2) {
      const f = auHasard(tous);
      if (f !== vrai && faux.indexOf(f) === -1) faux.push(f);
    }
    const choix = [vrai].concat(faux).sort(function () { return Math.random() - 0.5; });
    const lettres = ["A", "B", "C"];
    return { etiquette: "🤥 Le menteur",
      texte: "« " + vrai.mot + " », ça veut dire… " + choix.map(function (c, i) { return lettres[i] + ") " + definitionsCourtes(c); }).join("  ·  "),
      indice: "Un joueur lit les trois définitions avec le même aplomb. Chaque camp choisit sa lettre, puis on révèle.",
      revele: "La vraie : " + lettres[choix.indexOf(vrai)] + ". " + vrai.mot + " : " + vrai.definition };
  }
  if (sorte === "interdit") {
    const liste = motsUtiles().filter(function (m) { return motsInterdits(m).length === 2; });
    const m = auHasard(liste.length ? liste : tous);
    const interdits = motsInterdits(m);
    return { etiquette: "🎯 Le mot interdit · un seul joueur regarde",
      texte: "Fais deviner « " + m.mot + " » à ton camp en 30 secondes" + (interdits.length ? ", sans dire « " + interdits.join(" » ni « ") + " »." : "."),
      indice: "Interdit aussi : le mot lui-même et les gestes. Trouvé à temps : un point.",
      revele: m.mot + " : " + m.definition };
  }
  if (sorte === "imite") {
    return { etiquette: "🎭 Imite-moi",
      texte: "Imite " + auHasard(IMITATIONS_QUI) + " " + auHasard(IMITATIONS_QUOI) + ".",
      indice: "L'autre camp note l'imitation sur 10. Au-dessus de 7 : un point." };
  }
  return { etiquette: "🕵️ Qui me connaît le mieux ?", texte: auHasard(QUESTIONS_FAMILLE),
    indice: "Chacun écrit sa réponse sur l'autre en secret, puis on compare. L'autre confirme… ou dément. Bonne réponse : un point." };
}

// ---------- Théâtre : une même phrase, dite sur plusieurs tons (comme la tendance des réseaux) ----------
const PHRASES_THEATRE = [
  "Je suis amoureux.", "Il reste du gâteau.", "Tu as changé.", "C'est l'heure.", "Il pleut.",
  "J'ai retrouvé mes clés.", "Tu viens ce soir ?", "On a gagné.", "Le chat est sur la table.",
  "Je t'avais dit de ne pas ouvrir cette porte.", "Qui a mangé la dernière part ?", "Je pars demain.",
  "Tu as vu l'heure ?", "Rends-moi mon pull.", "C'est la dernière fois.", "Il y a quelqu'un ?",
  "J'ai un secret.", "Le dîner est servi.", "Je ne dirai rien.", "Tu es en retard."];
// Les tons : beaucoup sont des mots de l'appli, et leur définition s'affiche pour les apprendre en jouant
const TONS_THEATRE = ["furieux", "romantique", "ironique", "mélancolique", "goguenard", "narquois", "pédant",
  "exalté", "outré", "blasé", "obséquieux", "hautain", "terrifié", "chafouin", "ronchon", "débonnaire",
  "grandiloquent", "hâbleur", "ingénu", "désabusé", "sibyllin", "fébrile", "tatillon", "allègre", "langoureux"];
const PERSONNAGES_THEATRE = ["comme un rappeur", "comme une tragédienne de la Comédie-Française", "comme un commentateur sportif",
  "comme un agent secret", "comme un enfant de 5 ans", "comme un présentateur du journal de 20 heures",
  "comme un vieux marquis du XVIIᵉ siècle", "comme un guide de musée", "comme un pirate", "comme un robot"];

function definitionDuTon(ton, tous) {
  const m = tous.find(function (x) { return x.mot.toLowerCase() === ton; });
  return m ? ton + " : " + definitionsCourtes(m) : "";
}

function defiTheatre(tous) {
  // Une fois sur quatre, une réplique classique plutôt qu'une phrase du quotidien
  const courtes = typeof repliques !== "undefined" ? repliques.filter(function (r) { return r.texte.length <= 60; }) : [];
  const sombre = etat.maudit && typeof phrasesSombres !== "undefined";
  const r = !sombre && courtes.length && Math.random() < 0.25 ? auHasard(courtes) : null;
  const phrase = r ? r.texte : auHasard(sombre ? phrasesSombres : PHRASES_THEATRE);
  const source = r ? " (" + r.piece + ")" : "";
  const melange = TONS_THEATRE.slice().sort(function () { return Math.random() - 0.5; });
  const definitions = function (liste) {
    return liste.map(function (t) { return definitionDuTon(t, tous); }).filter(Boolean).join(" · ");
  };
  if (Math.random() < 0.5) {
    // Le défi de la tendance : la même phrase sur trois tons, à la suite
    const tons = melange.slice(0, 2).concat(Math.random() < 0.5 ? [melange[2]] : [auHasard(PERSONNAGES_THEATRE)]);
    const defs = definitions(tons);
    return { etiquette: "🎭 Théâtre · trois tons",
      texte: "Dis « " + phrase + " »" + source + " : " + tons.map(function (t, i) { return (i === 0 ? "" : i === 2 ? ", puis enfin " : ", puis ") + (t.indexOf("comme") === 0 ? t : "sur un ton " + t); }).join("") + ".",
      indice: (defs ? defs + ". " : "") + "Chacun passe à son tour, puis on vote : à trois, élisez du doigt l'ami qui a le mieux réussi 👉 Le plus désigné gagne le tour." };
  }
  // Devine le ton : seul l'acteur connaît le ton secret
  const ton = melange[0];
  const def = definitionDuTon(ton, tous);
  return { etiquette: "🎭 Théâtre · devine le ton",
    texte: "L'acteur dit « " + phrase + " »" + source + " sur un ton secret. Les autres doivent deviner lequel.",
    indice: "Seul l'acteur touche le bouton pour voir son ton, puis le cache. Bien deviné : un point pour chacun des deux.",
    boutonRevele: "🤫 Voir mon ton (acteur seulement)",
    revele: "Ton secret : " + ton + (def ? " (" + def.split(" : ")[1] + ")" : "") };
}

// Le tableau des points, pour savoir qui des anciens ou des jeunes l'emporte
const scoreFamille = { anciens: 0, jeunes: 0 };
function majScoreFamille() {
  $("score-famille").hidden = genreSoiree !== "famille";
  $("points-anciens").textContent = scoreFamille.anciens;
  $("points-jeunes").textContent = scoreFamille.jeunes;
}
$("score-famille").addEventListener("click", function (e) {
  const b = e.target.closest("button");
  if (!b) return;
  if (b.dataset.camp) scoreFamille[b.dataset.camp]++;
  else { scoreFamille.anciens = 0; scoreFamille.jeunes = 0; }
  majScoreFamille();
});

function nouveauSujet(compter) {
  if (etat.soiree.jour !== aujourdhui) etat.soiree = { jour: aujourdhui, n: 0 };
  if (compter) {
    if (etat.soiree.n >= LIMITE_SOIREE) { ouvrirPremium(); return; }
    etat.soiree.n++;
    sauver();
  }
  const genre = genreSoiree === "tout" ? auHasard(["debat", "paradoxe", "defi", "qui", "devine", "galejade", "glissement", "invente", "theatre", "diction", "malle"]) : genreSoiree;
  const s = sujet(genre);
  const carte = $("carte-soiree");
  carte.innerHTML = '<p class="etiquette">' + echapper(s.etiquette) + "</p>" +
    '<p class="soiree-texte">' + echapper(s.texte) + "</p>" +
    '<p class="soiree-indice">' + echapper(s.indice) + "</p>" +
    (s.reponse ? '<button class="bouton petit-bouton reveler" type="button" data-reponse="' + echapper(s.reponse) + '">Révéler la réponse</button>' : "") +
    (s.revele ? '<button class="bouton petit-bouton reveler" type="button" data-revele="' + echapper(s.revele) + '">' + echapper(s.boutonRevele || "Révéler la réponse") + "</button>" : "") +
    (s.diction ? '<button class="bouton petit-bouton reveler" type="button" data-diction="' + echapper(s.diction) + '">🎤 Le téléphone juge</button>' : "");
  majScoreFamille();
  carte.style.animation = "none";
  void carte.offsetWidth;
  carte.style.animation = "";
  $("compteur-soiree").textContent = etat.soiree.n + " / " + LIMITE_SOIREE + " sujets gratuits aujourd'hui · illimité avec Premium";
}

$("sujet-suivant").addEventListener("click", function () { nouveauSujet(true); });

$("carte-soiree").addEventListener("click", function (e) {
  const diction = e.target.closest("[data-diction]");
  if (diction) { jugerDiction(diction); return; }
  const bouton = e.target.closest("[data-reponse]");
  if (bouton) bouton.outerHTML = '<p class="mot-feu" style="--echelle:' + echelle(bouton.dataset.reponse) + '">' + echapper(bouton.dataset.reponse) + "</p>";
  const revele = e.target.closest("[data-revele]");
  if (revele) revele.outerHTML = '<p class="soiree-revele">' + echapper(revele.dataset.revele) + "</p>";
});

document.querySelectorAll("#puces-soiree .puce").forEach(function (p) {
  p.addEventListener("click", function () {
    document.querySelectorAll("#puces-soiree .puce").forEach(function (x) { x.classList.toggle("active", x === p); });
    genreSoiree = p.dataset.genre;
    nouveauSujet(false);
  });
});

// Les quatre salons : entre amis (avec ses jeux), à deux, en famille, théâtre
document.querySelectorAll("#salons .salon").forEach(function (s) {
  s.addEventListener("click", function () {
    document.querySelectorAll("#salons .salon").forEach(function (x) { x.classList.toggle("actif", x === s); });
    const amis = s.dataset.salon === "amis";
    $("puces-soiree").hidden = !amis;
    genreSoiree = amis ? document.querySelector("#puces-soiree .puce.active").dataset.genre : s.dataset.salon;
    nouveauSujet(false);
  });
});

// ---------- Onglet Profil ----------
const NIVEAUX = [
  [0, "Apprenti"],
  [100, "Lecteur"],
  [300, "Érudit"],
  [700, "Lettré"],
  [1500, "Maître des mots"],
  [3000, "Légende du Pandémonium"]
];

function majProfil() {
  let actuel = NIVEAUX[0];
  let suivant = null;
  NIVEAUX.forEach(function (n, i) {
    if (etat.xp >= n[0]) { actuel = n; suivant = NIVEAUX[i + 1] || null; }
  });
  $("niveau").textContent = actuel[1];
  if (suivant) {
    const pourcent = Math.round((etat.xp - actuel[0]) / (suivant[0] - actuel[0]) * 100);
    $("barre-niveau").style.width = pourcent + "%";
    $("niveau-detail").textContent = etat.xp + " ✦ · encore " + (suivant[0] - etat.xp) + " ✦ pour devenir « " + suivant[1] + " »";
  } else {
    $("barre-niveau").style.width = "100%";
    $("niveau-detail").textContent = etat.xp + " ✦ · niveau maximum atteint !";
  }

  const ancres = Object.keys(etat.boites).filter(function (k) { return etat.boites[k].boite >= 3; }).length;
  const badges = [
    ["🔥", "Première session", Object.keys(etat.sessions).length >= 1],
    ["📅", "7 jours d'affilée", serieActuelle() >= 7],
    ["🧠", "20 mots ancrés", ancres >= 20],
    ["✍️", "Premier ajout", etat.collection.length >= 1],
    ["♥", "5 favoris", etat.favoris.length >= 5],
    ["👑", "1 000 points", etat.xp >= 1000],
    ["❄️", "Premier gel gagné", serieActuelle() >= 7 || (etat.gels || 0) > 0],
    ["🏛️", "30 jours de culture", Object.keys(etat.sessions).length >= 30]
  ];
  $("badges").innerHTML = badges.map(function (b) {
    return '<div class="badge' + (b[2] ? " obtenu" : "") + '"><p>' + b[0] + "</p><b>" + b[1] + "</b></div>";
  }).join("");
}

// ---------- Premium (prototype : aucun paiement) ----------
// ---------- Le dictionnaire (onglet Réviser) : chercher un mot, parcourir une catégorie ----------
let categorieDico = "tout";
let motFiche = null;
const DICO_MAX = 30;
const ICONES_CATEGORIES = { utile: "⭐", courant: "📘", rare: "💎", argot: "🎤", antan: "⚔️" };

function sansAccents(texte) {
  return texte.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

function categorieDe(m) {
  if (m.perso) return "utile";
  return typeof niveauDuMot === "function" ? niveauDuMot(m.mot) : "utile";
}

// La catégorie « Concepts » : les -ismes de la philosophie, les sophismes, les biais, les lois…
const ORDRE_FAMILLES = ["Philosophie", "Littérature", "Sophisme", "Biais", "Psychologie", "Loi", "Méthode", "Méthode scientifique", "Science", "Physique", "Astronomie", "Sciences du vivant", "Économie", "Société"];

function majDicoConcepts(q) {
  const zone = $("dico-resultats");
  let liste = conceptsDispo.filter(function (c) {
    return !q || sansAccents(c.nom + " " + c.famille + " " + c.explication).indexOf(q) !== -1;
  });
  liste = liste.slice().sort(function (a, b) {
    const fa = ORDRE_FAMILLES.indexOf(a.famille), fb = ORDRE_FAMILLES.indexOf(b.famille);
    return (fa === -1 ? 99 : fa) - (fb === -1 ? 99 : fb) || a.nom.localeCompare(b.nom, "fr");
  });
  $("dico-compte").textContent = liste.length ? liste.length + " concept" + (liste.length > 1 ? "s" : "") + " · touche une carte pour la retourner" : "Pas encore ce concept dans l'appli.";
  let famille = "", grille = null;
  liste.forEach(function (c) {
    if (c.famille !== famille) {
      famille = c.famille;
      const titre = document.createElement("p");
      titre.className = "etiquette-petite";
      titre.textContent = famille === "Sophisme" ? "Les sophismes (pièges de raisonnement)" : famille;
      zone.appendChild(titre);
      grille = document.createElement("div");
      grille.className = "grille-concepts";
      zone.appendChild(grille);
    }
    // Une carte face cachée : le cerveau au dos, le concept au recto
    const carte = document.createElement("button");
    carte.type = "button";
    // Quand on cherche, les cartes trouvées sont déjà retournées
    carte.className = "carte-concept" + (q || conceptsRetournes.has(c.nom) ? " retournee" : "");
    carte.setAttribute("aria-label", "Concept : " + c.nom);
    carte.innerHTML = '<span class="concept-dos"><i>🧠</i><small>' + echapper(c.famille) + "</small></span>" +
      '<span class="concept-recto"><b>' + echapper(c.nom) + "</b><span>" + echapper((c.explication.match(/^[\s\S]*?[.!?](?=\s|$)/) || [c.explication])[0]) + "</span><em>Lire la fiche ›</em></span>";
    carte.addEventListener("click", function () {
      if (!carte.classList.contains("retournee")) {
        carte.classList.add("retournee");
        conceptsRetournes.add(c.nom);
      } else {
        ouvrirFicheConcept(c);
      }
    });
    grille.appendChild(carte);
  });
}

// Les concepts déjà retournés restent visibles tant que l'appli est ouverte
const conceptsRetournes = new Set();

// ---------- Le jeu des paires : retrouver chaque mot avec sa définition ----------
const NB_PAIRES = 6;
let paires = { retournees: [], trouvees: 0, coups: 0, bloque: false };

function definitionCourte(m) {
  // Le mot ne doit pas apparaître dans sa propre définition : il est remplacé par « … »
  const racine = m.mot.slice(0, Math.min(m.mot.length, 6)).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const d = m.definition.split(/[.;]/)[0].trim().replace(new RegExp(racine + "\\p{L}*", "giu"), "…");
  return d.length > 70 ? d.slice(0, 68).replace(/\s+\S*$/, "") + "…" : d;
}

function nouvellePartiePaires() {
  // D'abord les mots à revoir ou déjà vus (le jeu sert la mémorisation), puis des mots du jour au hasard
  const choisis = [];
  const vus = motsARevoir().concat(motsDejaVus()).filter(function (m) { return !m.perso; });
  // Version sombre : les paires maudites, uniquement des insultes d'antan et d'argot
  const reserve = etat.maudit && insultesDisponibles().length
    ? insultesDisponibles().sort(function () { return Math.random() - 0.5; })
    : vus.sort(function () { return Math.random() - 0.5; })
      .concat(motsUtiles().slice().sort(function () { return Math.random() - 0.5; }));
  $("titre-paires").textContent = etat.maudit ? "😈 Les paires maudites" : "🃏 Le jeu des paires";
  reserve.forEach(function (m) {
    if (choisis.length < NB_PAIRES && choisis.indexOf(m) === -1 && m.definition) choisis.push(m);
  });
  const cartesJeu = [];
  choisis.forEach(function (m, i) {
    cartesJeu.push({ paire: i, texte: m.mot, sorte: "mot", m: m });
    cartesJeu.push({ paire: i, texte: definitionCourte(m), sorte: "def", m: m });
  });
  cartesJeu.sort(function () { return Math.random() - 0.5; });
  paires = { retournees: [], trouvees: 0, coups: 0, bloque: false };
  const plateau = $("plateau-paires");
  plateau.innerHTML = "";
  cartesJeu.forEach(function (c) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "carte-paire " + c.sorte;
    b.innerHTML = '<span class="paire-dos"><i>❦</i></span><span class="paire-recto">' + echapper(c.texte) + "</span>";
    b.addEventListener("click", function () { retournerPaire(b, c); });
    plateau.appendChild(b);
  });
  $("paires-statut").textContent = "Retourne deux cartes : un mot et sa définition.";
}

function retournerPaire(b, c) {
  if (paires.bloque || b.classList.contains("retournee")) return;
  b.classList.add("retournee");
  sonRetourne();
  paires.retournees.push({ b: b, c: c });
  if (paires.retournees.length < 2) return;
  paires.coups++;
  const a = paires.retournees[0], z = paires.retournees[1];
  paires.retournees = [];
  if (a.c.paire === z.c.paire) {
    // Une paire trouvée : le mot entre dans les révisions
    a.b.classList.add("trouvee");
    z.b.classList.add("trouvee");
    paires.trouvees++;
    entrerEnRevision(a.c.m.mot);
    $("paires-statut").textContent = "✨ " + a.c.m.mot + " : " + a.c.m.definition;
    if (paires.trouvees === NB_PAIRES) { finirPaires(); sonBoire(true); }
    else { sauver(); sonJuste(0.15); }
  } else {
    sonFaux(0.35);
    paires.bloque = true;
    setTimeout(function () {
      a.b.classList.remove("retournee");
      z.b.classList.remove("retournee");
      paires.bloque = false;
    }, 1100);
  }
}

function finirPaires() {
  const parfait = paires.coups <= NB_PAIRES + 3;
  let message = (parfait ? "🏆 Mémoire d'éléphant ! " : "🎉 Toutes les paires trouvées ! ") + paires.coups + " coups.";
  // Un bonus par jour
  if (etat.bonusPaires !== aujourdhui) {
    etat.bonusPaires = aujourdhui;
    etat.xp += 10;
    majCompteurs();
    message += " +10 ✦";
  }
  sauver();
  $("paires-statut").textContent = message + " Ces mots reviendront dans tes révisions.";
}

// ---------- La pyramide : 15 cartes face cachée (5 rangées), des défis qui montent en puissance ----------
// En bas, la mise vaut 1 ; au sommet, 5. Version gentille : des points et des gages. Version sombre : des gorgées ou des gages.
let pyramide = { malle: null, malleTours: 0 };

// Les gages gentils (les gages trash sont dans maudit.js)
const GAGES_GENTILS = [
  "Fais un compliment soutenu à chaque joueur, avec un mot différent pour chacun.",
  "Parle comme un marquis du XVIIe siècle jusqu'à ton prochain tour.",
  "Déclame un vers, ou invente-le, avec la grandiloquence d'un tragédien.",
  "Mime ton mot préféré de l'appli : les autres doivent le deviner.",
  "Fais une révérence à chaque joueur en le nommant « Votre Excellence ».",
  "Raconte ta journée façon présentateur du journal de 20 heures.",
  "Invente un proverbe et prononce-le avec gravité, comme une vérité millénaire.",
  "Chante une phrase banale (« passe-moi le sel ») comme un air d'opéra.",
  "Jusqu'à ton prochain tour, interdiction de dire « oui » ou « non ».",
  "Dis l'alphabet à l'envers, de Z jusqu'à P, sans te tromper.",
  "Fais deviner un animal en ne parlant qu'en alexandrins (ou presque).",
  "Raconte un souvenir d'enfance comme si c'était une épopée homérique."
];

const THEMES_GENTILS = ["des marques de voiture", "des écrivains français", "des peintres", "des dieux et déesses de l'Antiquité",
  "des pièces de Molière, Racine ou Corneille", "des mots qui finissent en -isme", "des figures de style", "des fromages français",
  "des rappeurs français", "des philosophes", "des synonymes de « beau »", "des mots d'argot", "des capitales du monde",
  "des héros de la mythologie", "des instruments de musique", "des personnages de Balzac ou de Hugo", "des mots qui commencent par « anti »"];
const THEMES_TRASH = ["des marques de voiture (oui, même en version trash)", "des insultes d'antan", "des jurons", "des façons de mourir dans un film d'horreur",
  "des dictateurs de l'histoire", "des poisons célèbres", "des maladies d'autrefois (peste, scorbut…)", "des noms de démons et de diables",
  "des excuses bidon pour ne pas rendre l'argent", "des méchants de films ou de dessins animés", "des phobies", "des pires cadeaux de Noël",
  "des phrases à ne jamais dire à un premier rendez-vous", "des choses qu'on ne doit jamais trouver dans un frigo", "des théories du complot",
  "des gros mots dans une autre langue"];

function defiPyramide() {
  const sombre = etat.maudit;
  const insultes = insultesDisponibles();
  const mots = sombre && insultes.length ? insultes : motsUtiles();
  const m = auHasard(mots);
  const sortes = ["malle", "malle", "theme", "theme", "definition", "devine", "articule", "ton", "place", "rime"].concat(sombre ? ["complot", "maudire", "designe"] : ["interdit", "compliment"]);
  const sorte = auHasard(sortes);
  if (sorte === "theme") {
    // Le classique « Dis des marques de voiture » : chacun son tour, celui qui sèche ou répète prend la mise
    const theme = auHasard(sombre ? THEMES_TRASH : THEMES_GENTILS);
    return { icone: "🔁", titre: "Le thème", texte: "Chacun son tour, cite " + theme + ".",
      aide: "On commence par celui qui a retourné la carte. Celui qui sèche plus de 5 secondes, ou répète, prend la mise." };
  }
  if (sorte === "malle") {
    // La malle commune : elle grossit de carte en carte pendant toute la partie
    if (!pyramide.malle) {
      pyramide.malle = defiMalle().texte;
      pyramide.malleTours = 1;
      return { icone: "🧳", titre: sombre ? "La malle maudite s'ouvre" : "La malle s'ouvre", texte: pyramide.malle + " Ajoute le premier élément !",
        aide: "Retenez bien : la malle reviendra plus haut dans la pyramide." };
    }
    pyramide.malleTours++;
    return { icone: "🧳", titre: "La malle revient (" + pyramide.malleTours + "e tour)", texte: "Répète tout ce qu'il y a dans la malle depuis le début, dans l'ordre, puis ajoute un élément.",
      aide: "Pour rappel, la phrase de départ : " + pyramide.malle };
  }
  if (sorte === "definition") return { icone: "📖", titre: "Que veut dire…", texte: "« " + m.mot + " » ?", aide: "Donne le sens en 10 secondes.", revele: m.mot + " : " + m.definition };
  if (sorte === "devine") return { icone: "🔎", titre: sombre ? "Devine l'insulte" : "Devine le mot", texte: m.definition, aide: "Trouve le mot en 10 secondes.", revele: m.mot };
  if (sorte === "articule") return { icone: "🗣️", titre: "Articule !", texte: defiDiction().diction, aide: "Trois fois de suite, vite et sans avaler une syllabe." };
  if (sorte === "ton") {
    const t = auHasard(TONS_THEATRE);
    return { icone: "🎭", titre: "Sur un ton " + t, texte: "« " + auHasard(sombre && typeof phrasesSombres !== "undefined" ? phrasesSombres : PHRASES_THEATRE) + " »",
      aide: (definitionDuTon(t, tousLesMots()) || "Joue-la à fond.") + " Le groupe juge : convaincant ou pas ?" };
  }
  if (sorte === "place") return { icone: "💬", titre: "Place le mot", texte: "Fais une phrase avec « " + m.mot + " », là, tout de suite.", aide: m.mot + " : " + m.definition };
  if (sorte === "rime") {
    const rimes = typeof rimesPour === "function" ? rimesPour(m.mot, tousLesMots()).slice(0, 5) : [];
    return { icone: "🎤", titre: "La rime", texte: "Trouve un mot qui rime avec « " + m.mot + " » en 5 secondes.", aide: "Puis le suivant enchaîne avec une autre rime, et ainsi de suite.",
      revele: rimes.length ? "Quelques rimes : " + rimes.join(", ") : "" };
  }
  if (sorte === "interdit") {
    const i = motsInterdits(m);
    return { icone: "🎯", titre: "Le mot interdit", texte: "Fais deviner « " + m.mot + " »" + (i.length ? " sans dire « " + i.join(" » ni « ") + " »" : "") + ".", aide: "30 secondes, sans gestes." };
  }
  if (sorte === "compliment") return { icone: "🌹", titre: "Le compliment soutenu", texte: "Fais un compliment à ton voisin de gauche avec le mot « " + m.mot + " ».", aide: m.mot + " : " + m.definition };
  if (sorte === "complot") {
    const r = auHasard(rumeurs);
    return { icone: "🕵️", titre: "Vrai ou complot ?", texte: r[0] + " : " + r[1], aide: "Défends cette thèse 20 secondes sans rire.", revele: "Le fin mot : " + r[2] };
  }
  if (sorte === "maudire") return { icone: "🔥", titre: "La malédiction", texte: "Maudis ton voisin de droite avec élégance, en utilisant « " + m.mot + " ».", aide: m.mot + " : " + m.definition };
  return { icone: "👉", titre: "Qui de nous…", texte: "… est le plus « " + m.mot + " » ? À trois, tout le monde désigne quelqu'un.", aide: "Le plus désigné prend la mise. " + m.mot + " : " + m.definition };
}

function nouvellePyramide() {
  pyramide = { malle: null, malleTours: 0 };
  const sombre = etat.maudit;
  $("titre-pyramide").textContent = sombre ? "🔺 La pyramide maudite" : "🔺 La pyramide";
  $("regle-pyramide").textContent = sombre
    ? "On retourne les cartes de bas en haut. Défi raté : tu prends la mise, en gorgées ou en gages. Réussi : tu la distribues. (Avec de l'eau, ça marche aussi : bois avec modération.)"
    : "On retourne les cartes de bas en haut. Défi réussi : tu gagnes la mise en points. Raté : tu offres ces points aux autres… ou tu fais un gage.";
  const zone = $("pyramide");
  zone.innerHTML = "";
  // Du sommet (1 carte, mise 5) à la base (5 cartes, mise 1)
  for (let rangee = 1; rangee <= 5; rangee++) {
    const ligne = document.createElement("div");
    ligne.className = "rangee-pyramide";
    const mise = 6 - rangee;
    for (let i = 0; i < rangee; i++) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "carte-pyramide";
      b.dataset.mise = mise;
      b.innerHTML = '<span class="pyr-dos">' + (sombre ? "😈" : "❦") + '</span><span class="pyr-recto"></span>';
      b.addEventListener("click", function () { retournerPyramide(b); });
      ligne.appendChild(b);
    }
    zone.appendChild(ligne);
  }
  $("defi-pyramide").innerHTML = '<p class="petit">Commence par une carte de la rangée du bas.</p>';
}

function retournerPyramide(b) {
  if (b.classList.contains("retournee")) return;
  // On ne monte qu'une fois la rangée du dessous entièrement retournée
  const ligne = b.parentElement;
  const dessous = ligne.nextElementSibling;
  if (dessous && dessous.querySelector(".carte-pyramide:not(.retournee)")) {
    $("defi-pyramide").innerHTML = '<p class="petit">Patience : finis d\'abord la rangée du dessous.</p>';
    return;
  }
  const d = defiPyramide();
  const mise = Number(b.dataset.mise);
  const unite = etat.maudit ? (mise > 1 ? " gorgées ou gages" : " gorgée ou gage") : (mise > 1 ? " points" : " point");
  b.querySelector(".pyr-recto").innerHTML = d.icone + "<small>" + mise + "</small>";
  b.classList.add("retournee");
  sonRetourne();
  $("defi-pyramide").innerHTML =
    '<p class="etiquette">' + d.icone + " " + echapper(d.titre) + ' · mise : ' + mise + unite + "</p>" +
    '<p class="soiree-texte petite-soiree">' + echapper(d.texte) + "</p>" +
    '<p class="soiree-indice">' + echapper(d.aide) + "</p>" +
    '<div class="actions-pyramide">' +
    (d.revele ? '<button class="bouton petit-bouton" type="button" data-revele="' + echapper(d.revele) + '">Révéler la réponse</button>' : "") +
    '<button class="bouton petit-bouton" type="button" data-gage="1">🎲 Tirer un gage</button></div>';
  if (!document.querySelector(".carte-pyramide:not(.retournee)")) {
    $("defi-pyramide").innerHTML += '<p class="coffre-resultat">🏆 Sommet atteint ! Comptez vos ' + (etat.maudit ? "verres… et vos gages." : "points.") + "</p>";
    sonBoire(true);
  }
}

$("defi-pyramide").addEventListener("click", function (e) {
  const r = e.target.closest("[data-revele]");
  if (r) r.outerHTML = '<p class="soiree-revele">' + echapper(r.dataset.revele) + "</p>";
  const g = e.target.closest("[data-gage]");
  if (g) {
    // Un gage tiré au hasard ; on peut en tirer un autre si le premier ne plaît pas
    const liste = etat.maudit && typeof gagesTrash !== "undefined" ? gagesTrash : GAGES_GENTILS;
    const ancien = $("defi-pyramide").querySelector(".gage-tire");
    if (ancien) ancien.remove();
    const p = document.createElement("p");
    p.className = "soiree-revele gage-tire";
    p.textContent = (etat.maudit ? "😈 Gage : " : "🎲 Gage : ") + auHasard(liste);
    $("defi-pyramide").appendChild(p);
    g.textContent = "🎲 Un autre gage";
  }
});
$("ouvrir-pyramide").addEventListener("click", function () { nouvellePyramide(); $("fenetre-pyramide").hidden = false; });
$("rejouer-pyramide").addEventListener("click", nouvellePyramide);
$("fermer-pyramide").addEventListener("click", function () { $("fenetre-pyramide").hidden = true; });
$("fenetre-pyramide").addEventListener("click", function (e) { if (e.target === $("fenetre-pyramide")) $("fenetre-pyramide").hidden = true; });

$("ouvrir-paires").addEventListener("click", function () {
  nouvellePartiePaires();
  $("fenetre-paires").hidden = false;
});
$("rejouer-paires").addEventListener("click", nouvellePartiePaires);
$("fermer-paires").addEventListener("click", function () { $("fenetre-paires").hidden = true; });
$("fenetre-paires").addEventListener("click", function (e) { if (e.target === $("fenetre-paires")) $("fenetre-paires").hidden = true; });

function ouvrirFicheConcept(c) {
  motFiche = { concept: c };
  const div = $("fiche-contenu");
  div.innerHTML = rendreCarte({ type: "concept", donnee: c });
  const etiquette = div.querySelector(".etiquette");
  if (etiquette) etiquette.textContent = "🧠 Concept · " + c.famille;
  $("fiche-mot").hidden = false;
}

// La catégorie « Noms propres » : bien séparée des noms communs
function majDicoNomsPropres(q) {
  const zone = $("dico-resultats");
  const liste = nomsPropresDispo.filter(function (n) {
    return !q || sansAccents(n.nom + " " + n.qui + " " + n.anecdote).indexOf(q) !== -1;
  }).sort(function (a, b) { return a.nom.localeCompare(b.nom, "fr"); });
  $("dico-compte").textContent = liste.length ? liste.length + " nom" + (liste.length > 1 ? "s" : "") + " propre" + (liste.length > 1 ? "s" : "") + " · touche-en un pour son histoire" : "Pas encore ce nom propre dans l'appli.";
  liste.forEach(function (n) {
    const el = document.createElement("div");
    el.className = "element";
    el.innerHTML = "<b>🏛️ " + echapper(n.nom) + "</b><span>" + echapper(n.qui) + "</span>";
    el.addEventListener("click", function () {
      motFiche = { nompropre: n };
      $("fiche-contenu").innerHTML = rendreCarte({ type: "nompropre", donnee: n });
      $("fiche-mot").hidden = false;
    });
    zone.appendChild(el);
  });
}

function majDico() {
  const q = sansAccents($("dico-recherche").value.trim());
  if (categorieDico === "concepts") { $("dico-resultats").innerHTML = ""; majDicoConcepts(q); return; }
  if (categorieDico === "nomspropres") { $("dico-resultats").innerHTML = ""; majDicoNomsPropres(q); return; }
  const liste = tousLesMots().filter(function (m) { return categorieDico === "tout" || categorieDe(m) === categorieDico; });
  const zone = $("dico-resultats");
  zone.innerHTML = "";
  // Sans recherche ni catégorie : on n'affiche rien, pour garder l'onglet léger
  if (!q && categorieDico === "tout") { $("dico-compte").textContent = tousLesMots().length + " mots à explorer."; return; }
  let trouves;
  let modeJuste = false;
  // Une description de plusieurs mots (« maladroit, stressé, gestes… ») : on cherche le mot juste
  if (q && typeof motsJustes === "function" && motsDeTexte(q).length >= 2) {
    modeJuste = true;
    trouves = motsJustes($("dico-recherche").value, liste).slice(0, 8).map(function (x) { return x.mot; });
  } else if (q) {
    const parMot = [], parSens = [];
    liste.forEach(function (m) {
      const nom = sansAccents(m.mot);
      if (nom.indexOf(q) !== -1) parMot.push([nom.indexOf(q) === 0 ? 0 : 1, m]);
      else if (q.length >= 3 && sansAccents(m.definition).indexOf(q) !== -1) parSens.push(m);
    });
    parMot.sort(function (a, b) { return a[0] - b[0] || a[1].mot.localeCompare(b[1].mot, "fr"); });
    trouves = parMot.map(function (x) { return x[1]; }).concat(parSens);
  } else {
    trouves = liste.slice().sort(function (a, b) { return a.mot.localeCompare(b.mot, "fr"); });
  }
  if (modeJuste) {
    $("dico-compte").textContent = trouves.length
      ? "🎯 Les mots les plus justes pour ta description, du plus proche au moins proche :"
      : "🎯 Aucun mot ne correspond encore : essaie d'autres mots (ex. : maladroit, gêné, gestes).";
  } else $("dico-compte").textContent = trouves.length ? trouves.length + " mot" + (trouves.length > 1 ? "s" : "") + (trouves.length > DICO_MAX ? " · les " + DICO_MAX + " premiers" : "") : "Pas encore ce mot dans l'appli.";
  trouves.slice(0, DICO_MAX).forEach(function (m) {
    const el = document.createElement("div");
    el.className = "element";
    el.innerHTML = "<b>" + (ICONES_CATEGORIES[categorieDe(m)] || "") + " " + echapper(m.mot) + "</b><span>" + echapper(m.definition) + "</span>";
    el.addEventListener("click", function () { ouvrirFiche(m); });
    zone.appendChild(el);
  });
}

function ouvrirFiche(m) {
  motFiche = m;
  const cat = categorieDe(m);
  const type = cat === "utile" || cat === "courant" ? "mot" : cat;
  const div = $("fiche-contenu");
  div.innerHTML = rendreCarte({ type: type, donnee: m });
  // Dans la fiche, pas de relance ; on remet le bouton favori pour tous les mots
  const relance = div.querySelector('[data-action="relancer"]');
  if (relance) relance.remove();
  const etiquette = div.querySelector(".etiquette");
  if (etiquette && type === "mot") etiquette.textContent = cat === "courant" ? "📘 Un mot courant" : "⭐ Le mot soutenu";
  if (!div.querySelector('[data-action="favori"]')) {
    const actions = div.querySelector(".actions-carte");
    if (actions) actions.insertAdjacentHTML("beforeend", '<button class="bouton petit-bouton" data-action="favori" type="button"></button>');
  }
  const fav = div.querySelector('[data-action="favori"]');
  if (fav) fav.textContent = etat.favoris.indexOf(m.mot) !== -1 ? "♥ Favori" : "♡ Favori";
  $("fiche-mot").hidden = false;
}

$("dico-recherche").addEventListener("input", majDico);
document.querySelectorAll("#puces-dico .puce").forEach(function (p) {
  p.addEventListener("click", function () {
    document.querySelectorAll("#puces-dico .puce").forEach(function (x) { x.classList.toggle("active", x === p); });
    categorieDico = p.dataset.cat;
    majDico();
  });
});
$("fiche-contenu").addEventListener("click", function (e) {
  const bouton = e.target.closest("[data-action]");
  if (!bouton || !motFiche) return;
  if (motFiche.nompropre) {
    const n = motFiche.nompropre;
    if (bouton.dataset.action === "ecouter") parler(n.nom + ". " + n.qui + ". " + n.anecdote, "fr-FR");
    return;
  }
  if (motFiche.concept) {
    const c = motFiche.concept;
    if (bouton.dataset.action === "ecouter") parler(c.nom + ". " + c.explication + " Par exemple : " + c.exemple, "fr-FR");
    return;
  }
  if (bouton.dataset.action === "ecouter") parler(motFiche.mot + ". " + motFiche.definition, "fr-FR");
  if (bouton.dataset.action === "favori") {
    const i = etat.favoris.indexOf(motFiche.mot);
    if (i === -1) { etat.favoris.push(motFiche.mot); entrerEnRevision(motFiche.mot); } else etat.favoris.splice(i, 1);
    sauver();
    bouton.textContent = i === -1 ? "♥ Favori" : "♡ Favori";
    majReviser();
  }
});
$("fermer-fiche").addEventListener("click", function () { $("fiche-mot").hidden = true; });
$("fiche-mot").addEventListener("click", function (e) { if (e.target === $("fiche-mot")) $("fiche-mot").hidden = true; });
majDico();

function ouvrirPremium() { $("premium").hidden = false; }

$("ouvrir-premium").addEventListener("click", ouvrirPremium);
$("fermer-premium").addEventListener("click", function () { $("premium").hidden = true; });
$("premium").addEventListener("click", function (e) {
  if (e.target === $("premium")) $("premium").hidden = true;
});

// ---------- Les tableaux de fond (un par jour, ou celui choisi dans la Galerie) ----------
const tableauxDispo = typeof tableaux !== "undefined" ? tableaux : [];

function tableauActuel() {
  if (!tableauxDispo.length) return null;
  const choix = etat.tableau;
  if (typeof choix === "number" && tableauxDispo[choix]) return tableauxDispo[choix];
  return tableauxDispo[numeroJour % tableauxDispo.length];
}

function appliquerFond() {
  // La version sombre impose le tableau Pandemonium de John Martin
  if (etat.maudit) {
    document.querySelector(".fond").style.setProperty("--fond-url", 'url("../images/fond.jpg")');
    document.body.classList.remove("romantique");
    return;
  }
  const t = tableauActuel();
  if (!t) return;
  document.querySelector(".fond").style.setProperty("--fond-url", 'url("' + t.image + '")');
  document.body.classList.toggle("romantique", t.style === "romantique");
}

function majGalerie() {
  const galerie = $("galerie");
  const actuel = tableauActuel();
  galerie.innerHTML = "";
  tableauxDispo.forEach(function (t, i) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "vignette" + (t === actuel ? " choisie" : "");
    b.style.backgroundImage = 'url("' + t.image + '")';
    b.innerHTML = "<span>" + echapper(t.titre) + "<br>" + echapper(t.peintre) + "</span>";
    b.addEventListener("click", function () {
      etat.tableau = i;
      sauver();
      appliquerFond();
      majGalerie();
    });
    galerie.appendChild(b);
  });
  if (actuel) {
    $("credit-fond").textContent = "Fond : " + actuel.titre + ", " + actuel.peintre + " (" + actuel.annee + "), domaine public · style " + (actuel.style === "romantique" ? "Romantique" : "Pandémonium");
  }
}

// ---------- Mode hors ligne (seulement quand l'appli est en ligne, en https) ----------
if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
  // Une version plus ancienne tournait déjà ? Quand la nouvelle prend le relais, on recharge une fois l'appli
  const avaitUneVersion = !!navigator.serviceWorker.controller;
  let dejaRecharge = false;
  navigator.serviceWorker.addEventListener("controllerchange", function () {
    if (!avaitUneVersion || dejaRecharge) return;
    dejaRecharge = true;
    location.reload();
  });
  navigator.serviceWorker.register("sw.js", { updateViaCache: "none" })
    .then(function (r) { r.update(); })
    .catch(function () { /* pas grave : l'appli marche quand même */ });
}

// ---------- Démarrage ----------
appliquerVersion();
chercherPeintre();
majFormulaire();
majCompteurs();
allerA("aujourdhui");
