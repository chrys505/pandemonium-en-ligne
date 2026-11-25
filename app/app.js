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
// Le Fil : l'écran principal, un scroll culture plein écran (la page fil.html, glissée dans l'appli)
let themeDuFil = null;
// Appelée par le Fil : chaque gorgée bue rapporte un point
function gorgeeDuFil() { etat.xp += 1; sauver(); $("xp").textContent = etat.xp; }
function ouvrirFil() {
  const cadre = $("fil-cadre");
  const theme = etat.maudit ? "maudit" : "clair";
  if (!cadre.getAttribute("src") || cadre.getAttribute("src") === "about:blank") cadre.setAttribute("src", "fil.html?integre=1");
  else if (themeDuFil !== theme) { sauver(); try { cadre.contentWindow.location.reload(); } catch (e) { cadre.setAttribute("src", "fil.html?integre=1"); } }
  themeDuFil = theme;
}

function allerA(nom) {
  ["fil", "aujourdhui", "reviser", "collection", "soiree", "profil"].forEach(function (n) {
    $("ecran-" + n).hidden = (n !== nom);
  });
  document.body.classList.toggle("sur-le-fil", nom === "fil");
  if (nom === "fil") ouvrirFil();
  document.querySelectorAll(".nav").forEach(function (b) {
    b.classList.toggle("actif", b.dataset.ecran === nom);
  });
  if (nom === "aujourdhui") majAccueil();
  if (nom === "reviser") majReviser();
  if (nom === "collection") majCollection();
  if (nom === "profil") { majProfil(); majGalerie(); verifierTitres(); majGrimoireTitres(); majCollectionsMagie(); }
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
  if (t >= s.lever - 30 && t < s.lever + 30) return ["Douce aube.", "Sale aube."][m];
  if (t >= s.lever + 30 && t < 12 * 60) return ["Le jour point, belle matinée.", "Le jour point, sale matinée."][m];
  if (t >= 12 * 60 && t < s.coucher - 30) return ["Belle après-midi.","Sale journée."][m];
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
  const f = typeof filmsHorreur !== "undefined" ? prendre(filmsHorreur, 7) : null;
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
    (f ? '<article class="carte carte-grimoire"><p class="etiquette">🎬 Le film d\'horreur</p>' +
      '<p class="grimoire-titre">' + echapper(f[0]) + "</p>" +
      '<p class="texte-doux">' + echapper(f[1]) + "</p>" +
      '<button class="bouton petit-bouton reveler" type="button" data-coulisse="' + echapper(f[2]) + '">🕯️ En coulisse</button></article>' : "") +
    (typeof clashs !== "undefined" ? '<article class="carte carte-grimoire"><p class="etiquette">🗡️ Le clash du jour</p>' +
      '<p class="texte-doux">Ta mission : lance-le à quelqu\'un, les yeux dans les yeux, sans sourire.</p>' +
      '<p class="citation-grande" id="clash-texte">' + echapper(prendre(clashs, 4)) + "</p>" +
      '<button class="bouton petit-bouton" type="button" id="autre-clash">🔥 Un autre clash</button></article>' : "") +
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
  const coulisse = e.target.closest("[data-coulisse]");
  if (coulisse) { coulisse.outerHTML = '<p class="grimoire-revers"><b>En coulisse</b> · ' + echapper(coulisse.dataset.coulisse) + "</p>"; return; }
  if (e.target.closest("#autre-clash")) {
    const actuel = $("clash-texte").textContent;
    let nouveau = auHasard(clashs);
    while (clashs.length > 1 && nouveau === actuel) nouveau = auHasard(clashs);
    $("clash-texte").textContent = nouveau;
    return;
  }
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
  verifierTitres();
  majWidgets();
  if (etat.maudit) rendreMaudit(false);
  else $("etiquette-hero").textContent = "Le mot du jour";
  montrer("accueil-session");
}

// ---------- Les widgets de l'accueil : regrouper nos savoirs, y accéder, les développer ----------
function deuxPhrases(texte) {
  const p = String(texte || "").match(/[^.!?]+[.!?]+/g) || [texte];
  return p.slice(0, 2).join("").trim();
}

// Un trésor tiré au hasard dans tout ce que l'appli contient
function tresorAuHasard() {
  const tirages = [
    function () { const m = auHasard(motsRaresDispo()); return { etiquette: "💎 Mot rare", titre: m.mot, texte: m.definition, mot: m.mot }; },
    function () { const c = auHasard(conceptsDispo); return { etiquette: "🧠 Concept · " + c.famille, titre: c.nom, texte: deuxPhrases(c.explication) }; },
    function () { const c = auHasard(toutesLesCitations()); return { etiquette: "📜 Citation", titre: "« " + c.texte + " »", texte: c.auteur || "" }; },
    function () { const e = auHasard(expressionsPlus); return { etiquette: "💬 Expression", titre: e[0], texte: e[1] }; }
  ];
  if (typeof bestiaire !== "undefined") tirages.push(function () { const c = auHasard(bestiaire); return { etiquette: "🐉 Bestiaire · " + c.origine, titre: c.icone + " " + c.nom, texte: c.savais }; });
  if (typeof sortileges !== "undefined") tirages.push(function () { const s = auHasard(sortileges); return { etiquette: "🪄 Sortilège · " + s.langue, titre: s.formule + " : " + s.sens, texte: s.mots.join(", ") + ". " + s.secret }; });
  if (etat.maudit && typeof filmsHorreur !== "undefined") {
    tirages.push(function () { const f = auHasard(filmsHorreur); return { etiquette: "🎬 Film d'horreur", titre: f[0], texte: f[1] }; });
    tirages.push(function () { const r = auHasard(rumeurs); return { etiquette: "🕵️ Rumeur", titre: r[0], texte: r[2] }; });
  }
  return auHasard(tirages)();
}

function reboursMinuit() {
  const minuit = new Date(); minuit.setHours(24, 0, 0, 0);
  const s = Math.max(0, Math.floor((minuit - new Date()) / 1000));
  return Math.floor(s / 3600) + " h " + String(Math.floor(s % 3600 / 60)).padStart(2, "0") + " min " + String(s % 60).padStart(2, "0") + " s";
}

function widgetMystere() {
  const m = etat.mystere && etat.mystere.jour === aujourdhui ? etat.mystere.tresor : null;
  if (!m) {
    return '<article class="widget widget-mystere" id="widget-mystere" role="button" tabindex="0">' +
      '<p class="etiquette">🔮 La fiole mystère</p>' +
      '<div class="mystere-fiole" aria-hidden="true"><span class="mystere-bouchon"></span><span class="mystere-verre"><i></i><i></i><i></i><i></i></span></div>' +
      '<p class="grimoire-titre">Secoue-la : un trésor t\'attend</p>' +
      '<p class="petit">Une seule par jour. Parfois, une goutte légendaire…</p></article>';
  }
  return '<article class="widget widget-mystere ouverte' + (m.legendaire ? " legendaire" : "") + '">' +
    '<p class="etiquette">' + (m.legendaire ? "✨ Goutte légendaire · " : "🔮 ") + echapper(m.etiquette) + "</p>" +
    '<p class="grimoire-titre mystere-titre">' + echapper(m.titre) + "</p>" +
    '<p class="texte-doux">' + echapper(m.texte) + "</p>" +
    (m.mot ? '<button class="bouton petit-bouton" type="button" data-chercher="' + echapper(m.mot) + '">🔎 Voir dans le dictionnaire</button>' : "") +
    '<p class="petit mystere-rebours">⏳ Prochaine fiole dans <b id="mystere-rebours">' + reboursMinuit() + "</b></p></article>";
}

function widgetBibliotheque() {
  const total = tousLesMots().length;
  const bus = Object.keys(etat.boites || {}).length;
  const pc = total ? Math.min(100, Math.round(bus / total * 1000) / 10) : 0;
  const nb = function (n, mot) { return "<span><b>" + n + "</b> " + mot + "</span>"; };
  return '<article class="widget widget-biblio">' +
    '<div class="biblio-haut"><div class="anneau" style="--pc:' + pc + '"><b>' + pc + '%</b><span>bus</span></div>' +
    '<div><p class="etiquette">🏛️ La bibliothèque des savoirs</p>' +
    '<p class="grimoire-titre">' + bus + " mot" + (bus > 1 ? "s" : "") + " bu" + (bus > 1 ? "s" : "") + " sur " + total + "</p>" +
    '<p class="petit gauche">Chaque élixir bu remplit un peu plus la bibliothèque.</p></div></div>' +
    '<div class="biblio-chiffres">' + nb(conceptsDispo.length, "concepts") + nb(toutesLesCitations().length, "citations") +
      nb(typeof expressionsPlus !== "undefined" ? expressionsPlus.length : 0, "expressions") +
      nb(typeof nomsPropres !== "undefined" && nomsPropres.length ? nomsPropres.length : motsRaresDispo().length, typeof nomsPropres !== "undefined" && nomsPropres.length ? "noms propres" : "mots rares") + "</div>" +
    '<form class="biblio-recherche" id="biblio-recherche"><input type="search" id="biblio-champ" placeholder="🔎 Cherche dans tous nos savoirs…" autocomplete="off" aria-label="Chercher dans tous nos savoirs"></form>' +
    "</article>";
}

function widgetFil() {
  return '<article class="widget widget-fil" id="widget-fil" role="button" tabindex="0" aria-live="polite">' +
    '<p class="etiquette">🌀 Le fil des savoirs <span class="fil-point"></span></p><div class="fil-contenu" id="fil-contenu"></div></article>';
}

function majFil() {
  const z = $("fil-contenu");
  if (!z) return;
  const t = tresorAuHasard();
  z.classList.remove("fil-entre");
  void z.offsetWidth;
  z.innerHTML = '<span class="fil-etiquette">' + echapper(t.etiquette) + "</span>" +
    '<p class="fil-titre">' + echapper(t.titre) + "</p>" + '<p class="petit gauche">' + echapper(t.texte) + "</p>";
  z.classList.add("fil-entre");
}

// ---------- Le grimoire des titres : des exploits mesurés, des titres gardés pour toujours ----------
// [id, icône, titre, exploit, rang (1 bronze, 2 argent, 3 or, 4 légendaire), mesure, objectif]
function mesuresTitres() {
  return {
    sessions: Object.keys(etat.sessions || {}).length,
    bus: Object.keys(etat.boites || {}).length,
    serie: Math.max(serieActuelle(), etat.serieRecord || 0),
    fioles: etat.fioles || 0,
    legendaires: etat.legendaires || 0,
    duels: etat.duels || 0,
    garous: etat.garous || 0,
    creatures: Object.keys(etat.bestiaire || {}).length,
    sorts: Object.keys(etat.sorts || {}).length,
    elixirs: (etat.elixirs || []).length,
    tirades: etat.tiradesJouees || 0,
    tourRecord: etat.tourRecord || 0,
    pendus: etat.pendusGagnes || 0,
    galej: etat.galejRecord || 0,
    roman: (etat.roman && etat.roman.lus) || 0,
    alliances: etat.pairesRecord || 0,
    elixirsLegendaires: (etat.elixirs || []).filter(function (x) { return x.rang === 4; }).length,
    collection: (etat.collection || []).length,
    sublimes: etat.sublimes || 0,
    xp: etat.xp || 0
  };
}
const TITRES = [
  ["apprenti", "⚗️", "Apprenti alchimiste", "Boire ton premier élixir", 1, "sessions", 1],
  ["gouteur", "🍷", "Goûteur de mots", "Boire 10 mots", 1, "bus", 10],
  ["lettre", "🕯️", "Lettré de taverne", "Boire 50 mots", 2, "bus", 50],
  ["alexandrie", "🏛️", "Bibliothécaire d'Alexandrie", "Boire 200 mots", 3, "bus", 200],
  ["gardien", "📜", "Gardien du grand grimoire", "Boire 500 mots", 4, "bus", 500],
  ["habitue", "🍯", "Habitué de l'officine", "Boire l'élixir 10 jours", 2, "sessions", 10],
  ["flamme", "🔥", "Flamme vacillante", "3 jours d'affilée", 1, "serie", 3],
  ["feusacre", "☄️", "Feu sacré", "7 jours d'affilée", 2, "serie", 7],
  ["vestale", "🌋", "Vestale éternelle", "30 jours d'affilée", 4, "serie", 30],
  ["fele", "🔮", "Fiole fêlée", "Secouer ta première fiole mystère", 1, "fioles", 1],
  ["chasseur", "🧪", "Chasseur de quintessences", "Secouer 10 fioles mystère", 2, "fioles", 10],
  ["elu", "✨", "Élu des dieux", "Trouver une goutte légendaire", 3, "legendaires", 1],
  ["finelame", "🤺", "Fine lame", "Mener un duel d'insultes jusqu'au bout", 1, "duels", 1],
  ["maraud", "⚔️", "Grand Maraud", "Mener 5 duels d'insultes", 3, "duels", 5],
  ["meneur", "🐺", "Meneur de la nuit", "Lancer une partie de loup-garou", 2, "garous", 1],
  ["dompteur", "🕸️", "Apprenti dompteur", "Capturer 3 créatures du bestiaire", 1, "creatures", 3],
  ["bestiaire", "🐉", "Maître du bestiaire", "Capturer les 15 créatures", 4, "creatures", 15],
  ["sorcier", "🪄", "Apprenti sorcier", "Apprendre 3 sortilèges", 1, "sorts", 3],
  ["mage", "📿", "Mage des racines", "Apprendre 10 sortilèges", 3, "sorts", 10],
  ["distillateur", "⚗️", "Distillateur", "Distiller ton premier élixir dans l'alambic", 1, "elixirs", 1],
  ["alchimiste", "🧪", "Alchimiste du verbe", "Distiller 10 élixirs", 3, "elixirs", 10],
  ["quintessence", "🌟", "Quintessence pure", "Distiller un élixir légendaire", 4, "elixirsLegendaires", 1],
  ["lecteur", "📜", "Lecteur de feuilleton", "Vivre le premier épisode du Roman de l'Alchimiste", 1, "roman", 1],
  ["heros1", "🏛️", "Héros du Livre I", "Terminer le Livre I du Roman de l'Alchimiste", 3, "roman", 10],
  ["heros2", "🗝️", "Gardien des Quatre Mots", "Terminer le Livre II du Roman de l'Alchimiste", 4, "roman", 20],
  ["allie", "🔗", "Faiseur d'alliances", "Relier 15 alliances en une partie", 2, "alliances", 15],
  ["entremetteur", "💍", "Grand entremetteur des mots", "Relier 25 alliances en une partie", 4, "alliances", 25],
  ["grimpeur", "🧗", "Grimpeur de la Tour", "Atteindre l'étage 5 de la Tour", 2, "tourRecord", 5],
  ["pourfendeur", "🗡️", "Pourfendeur de boss", "Atteindre l'étage 10 de la Tour", 3, "tourRecord", 10],
  ["conquerant", "🏰", "Conquérant de la Tour", "Atteindre l'étage 20 de la Tour", 4, "tourRecord", 20],
  ["bourreau", "🪢", "Bourreau des mots", "Sauver 5 condamnés au pendu", 2, "pendus", 5],
  ["limier", "🔍", "Limier des galéjades", "Faire 10 sur 10 à Vrai ou galéjade", 3, "galej", 10],
  ["tragedien", "🎭", "Tragédien du salon", "Te filmer en train de jouer une tirade", 2, "tirades", 1],
  ["comedien", "🏟️", "Sociétaire de la Comédie", "Te filmer dans 10 tirades", 4, "tirades", 10],
  ["plume", "🪶", "Plume galante", "Envoyer ton premier message sublimé", 1, "sublimes", 1],
  ["cyrano", "✒️", "Âme de Cyrano", "Envoyer 25 messages sublimés", 3, "sublimes", 25],
  ["collection", "💎", "Collectionneur d'âmes", "Garder 5 trésors dans ta collection", 2, "collection", 5],
  ["esprit", "✦", "Riche en esprit", "Gagner 500 points", 2, "xp", 500],
  ["maitre", "👑", "Maître des fioles", "Gagner 2 000 points", 3, "xp", 2000]
];
const TITRE_SUPREME = ["archimage", "🌌", "Archimage du Pandémonium", "Débloquer tous les autres titres", 4];
const RANGS = ["", "Bronze", "Argent", "Or", "Légendaire"];

function titresObtenus() { return etat.titres || (etat.titres = {}); }

// Vérifie les exploits ; annonce le premier titre nouvellement gagné (les autres suivront à la fermeture)
const fileTitres = [];
function verifierTitres() {
  const m = mesuresTitres(), obtenus = titresObtenus();
  etat.serieRecord = m.serie;
  TITRES.forEach(function (t) {
    if (!obtenus[t[0]] && m[t[5]] >= t[6]) { obtenus[t[0]] = aujourdhui; fileTitres.push(t); }
  });
  if (!obtenus.archimage && TITRES.every(function (t) { return obtenus[t[0]]; })) { obtenus.archimage = aujourdhui; fileTitres.push(TITRE_SUPREME); }
  sauver();
  if (fileTitres.length && $("fenetre-titre").hidden) annoncerTitre();
}

function annoncerTitre() {
  const t = fileTitres.shift();
  if (!t) return;
  $("titre-sceau").textContent = t[1];
  $("titre-sceau").className = "titre-sceau rang-" + t[4];
  $("titre-nom").textContent = t[2];
  $("titre-exploit").textContent = RANGS[t[4]] + " · " + t[3];
  $("fenetre-titre").hidden = false;
  sonBoire(true);
  feterAvecDesBraises();
}
$("fermer-titre").addEventListener("click", function () {
  $("fenetre-titre").hidden = true;
  if (fileTitres.length) setTimeout(annoncerTitre, 400);
  else { majWidgets(); if (!$("ecran-profil").hidden) majGrimoireTitres(); }
});

function titreActuel() {
  const obtenus = titresObtenus();
  const tous = TITRES.concat([TITRE_SUPREME]).filter(function (t) { return obtenus[t[0]]; });
  tous.sort(function (a, b) { return b[4] - a[4] || (obtenus[b[0]] > obtenus[a[0]] ? 1 : -1); });
  return tous[0] || null;
}

// Le prochain titre à portée : celui qu'il reste le moins de chemin à parcourir
function prochainTitre() {
  const m = mesuresTitres(), obtenus = titresObtenus();
  const restants = TITRES.filter(function (t) { return !obtenus[t[0]]; });
  restants.sort(function (a, b) { return (m[b[5]] / b[6]) - (m[a[5]] / a[6]); });
  const t = restants[0];
  return t ? { t: t, fait: Math.min(m[t[5]], t[6]) } : null;
}

function widgetTitre() {
  const a = titreActuel(), p = prochainTitre();
  const n = Object.keys(titresObtenus()).length;
  return '<article class="widget widget-titre" id="widget-titre" role="button" tabindex="0">' +
    '<p class="etiquette">📖 Ton titre · ' + n + " / " + (TITRES.length + 1) + "</p>" +
    '<div class="wt-ligne"><span class="titre-sceau mini rang-' + (a ? a[4] : 0) + '">' + (a ? a[1] : "🔒") + "</span>" +
    '<p class="wt-nom">' + (a ? echapper(a[2]) : "Aucun titre… pour l'instant") + "</p></div>" +
    (p ? '<p class="petit gauche">Prochain : <b>' + p.t[1] + " " + echapper(p.t[2]) + "</b> · " + echapper(p.t[3]) + "</p>" +
      '<div class="barre wt-barre"><div class="barre-remplie" style="width:' + Math.round(p.fait / p.t[6] * 100) + '%"></div></div>' +
      '<p class="petit">' + p.fait + " / " + p.t[6] + "</p>" : '<p class="petit">Tous les titres sont à toi. Respect.</p>') +
    "</article>";
}

function majGrimoireTitres() {
  const m = mesuresTitres(), obtenus = titresObtenus();
  const tous = TITRES.concat([TITRE_SUPREME]);
  $("grimoire-titres-compte").textContent = Object.keys(obtenus).length + " titre(s) sur " + tous.length + ". Chaque titre gagné est gardé pour toujours.";
  $("grimoire-titres").innerHTML = tous.map(function (t) {
    const ok = !!obtenus[t[0]];
    const fait = t[5] ? Math.min(m[t[5]], t[6]) : Object.keys(obtenus).filter(function (k) { return k !== "archimage"; }).length;
    const but = t[6] || TITRES.length;
    return '<div class="carte-titre' + (ok ? " obtenu" : "") + " rang-" + t[4] + '">' +
      '<span class="titre-sceau rang-' + t[4] + '">' + (ok ? t[1] : "🔒") + "</span>" +
      "<b>" + echapper(t[2]) + "</b><span class=\"ct-rang\">" + RANGS[t[4]] + "</span>" +
      '<p class="petit">' + echapper(t[3]) + "</p>" +
      (ok ? '<p class="petit ct-date">Gagné le ' + new Date(obtenus[t[0]]).toLocaleDateString("fr-FR", { day: "numeric", month: "long" }) + "</p>"
          : '<div class="barre"><div class="barre-remplie" style="width:' + Math.round(fait / but * 100) + '%"></div></div><p class="petit">' + fait + " / " + but + "</p>") +
      "</div>";
  }).join("");
}

$("widgets").addEventListener("click", function (e) { if (e.target.closest("#widget-titre")) allerA("profil"); });

// ---------- La magie : la créature du jour à capturer, le sortilège du jour à lancer ----------
const bestiaireDispo = typeof bestiaire !== "undefined" ? bestiaire : [];
const sortilegesDispo = typeof sortileges !== "undefined" ? sortileges : [];
function creatureDuJour() { return auJourDans(bestiaireDispo, 13); }
function sortDuJour() { return auJourDans(sortilegesDispo, 17); }

function widgetCreature() {
  const c = creatureDuJour();
  if (!c) return "";
  const prise = !!(etat.bestiaire || {})[c.nom];
  const n = Object.keys(etat.bestiaire || {}).length;
  return '<article class="widget widget-creature' + (prise ? " capturee" : "") + " rang-" + c.rang + '" id="widget-creature">' +
    '<p class="etiquette">🐉 La créature du jour · ' + RANGS[c.rang] + "</p>" +
    '<div class="creature-ombre" aria-hidden="true"><span class="titre-sceau rang-' + c.rang + '"><span class="creature-icone">' + c.icone + "</span></span></div>" +
    '<p class="creature-nom">' + echapper(c.nom) + "</p>" +
    '<p class="petit">' + echapper(c.origine) + "</p>" +
    (prise
      ? '<p class="texte-doux gauche">' + echapper(c.legende) + '</p><p class="grimoire-revers gauche"><b>Le savais-tu ?</b> · ' + echapper(c.savais) + "</p>"
      : '<button class="bouton principal" type="button" id="capturer-creature">🕸️ Capturer la créature</button>') +
    '<p class="petit">Ton bestiaire : ' + n + " / " + bestiaireDispo.length + "</p></article>";
}

function widgetSort() {
  const s = sortDuJour();
  if (!s) return "";
  const appris = !!(etat.sorts || {})[s.formule];
  return '<article class="widget widget-sort' + (appris ? " lance" : "") + '" id="widget-sort">' +
    '<p class="etiquette">🪄 Le sortilège du jour · ' + RANGS[s.rang] + "</p>" +
    '<p class="sort-formule">' + echapper(s.formule) + "</p>" +
    '<p class="petit">Du ' + echapper(s.langue) + " : " + echapper(s.sens) + "</p>" +
    (appris
      ? '<div class="sort-mots">' + s.mots.map(function (m, i) { return '<span style="--i:' + i + '">' + echapper(m) + "</span>"; }).join("") + "</div>" +
        '<p class="grimoire-revers gauche"><b>Le secret</b> · ' + echapper(s.secret) + "</p>"
      : '<button class="bouton principal" type="button" id="lancer-sort">🪄 Lancer le sort</button><p class="petit">et révèle les mots qu\'il a engendrés</p>') +
    '<p class="petit">Tes sortilèges : ' + Object.keys(etat.sorts || {}).length + " / " + sortilegesDispo.length + "</p></article>";
}

$("widgets").addEventListener("click", function (e) {
  const bouton = e.target.closest("#capturer-creature, #lancer-sort");
  if (!bouton) return;
  const carte = bouton.closest(".widget");
  const r = carte.getBoundingClientRect();
  carte.classList.add("magie-en-cours");
  bouton.disabled = true;
  sonFiole();
  setTimeout(function () {
    if (bouton.id === "capturer-creature") {
      const c = creatureDuJour();
      etat.bestiaire = etat.bestiaire || {}; etat.bestiaire[c.nom] = aujourdhui;
      etat.xp += 5 * c.rang;
      carte.outerHTML = widgetCreature();
      sonBoire(c.rang >= 3);
      if (c.rang === 4) feterAvecDesBraises();
    } else {
      const s = sortDuJour();
      etat.sorts = etat.sorts || {}; etat.sorts[s.formule] = aujourdhui;
      etat.xp += 5 * s.rang;
      carte.outerHTML = widgetSort();
      sonBoire(s.rang >= 3);
      if (s.rang === 4) feterAvecDesBraises();
    }
    sauver();
    $("xp").textContent = etat.xp;
    etincellesAuToucher(r.left + r.width / 2, r.top + 90, 26);
    setTimeout(verifierTitres, 1400);
  }, 700);
});

function majCollectionsMagie() {
  const b = etat.bestiaire || {}, s = etat.sorts || {};
  $("bestiaire-compte").textContent = Object.keys(b).length + " créature(s) sur " + bestiaireDispo.length + ". Une nouvelle créature passe chaque jour sur l'accueil : capture-la !";
  $("profil-bestiaire").innerHTML = bestiaireDispo.map(function (c) {
    const ok = !!b[c.nom];
    return '<div class="carte-titre' + (ok ? " obtenu" : "") + '"><span class="titre-sceau rang-' + c.rang + '">' + (ok ? c.icone : "❔") + "</span>" +
      "<b>" + (ok ? echapper(c.nom) : "???") + '</b><span class="ct-rang">' + RANGS[c.rang] + "</span>" +
      (ok ? '<p class="petit">' + echapper(c.origine) + "</p>" : "") + "</div>";
  }).join("");
  $("sorts-compte").textContent = Object.keys(s).length + " sortilège(s) sur " + sortilegesDispo.length + ". Un nouveau sort chaque jour sur l'accueil.";
  $("profil-sorts").innerHTML = sortilegesDispo.map(function (x) {
    const ok = !!s[x.formule];
    return '<div class="carte-titre' + (ok ? " obtenu" : "") + '"><span class="sort-formule mini">' + (ok ? echapper(x.formule) : "???") + "</span>" +
      '<span class="ct-rang">' + RANGS[x.rang] + "</span>" +
      (ok ? '<p class="petit">' + echapper(x.sens) + "</p><p class=\"petit\">" + echapper(x.mots.slice(0, 3).join(", ")) + "…</p>" : "") + "</div>";
  }).join("");
}

// ---------- L'alambic : trois mots rares (et un ingrédient d'or) distillés en une phrase ----------
const alambic = { ingredients: [], or: null, phase: "choix" };

function tirerIngredients() {
  const pris = [], liste = motsRaresDispo();
  while (pris.length < 4 && pris.length < liste.length) {
    const m = auHasard(liste);
    if (pris.indexOf(m) === -1) pris.push(m);
  }
  alambic.ingredients = pris.slice(0, 3);
  alambic.or = pris[3] || null;
}

// Le mot est-il dans la phrase ? On compare sans accents, sur la racine (pour accepter les accords et conjugaisons)
function racineDe(mot) {
  const m = sansAccents(mot.toLowerCase()).replace(/^(s'|se |l'|la |le |un |une )/, "").replace(/\(.*\)/, "").trim();
  const premier = m.split(/[\s]+/)[0];
  return premier.length <= 5 ? premier : premier.slice(0, Math.max(5, premier.length - 2));
}
function motPresent(mot, phrase) { return sansAccents(phrase.toLowerCase()).indexOf(racineDe(mot)) !== -1; }

function rangElixir(phrase) {
  const tous = alambic.ingredients.every(function (m) { return motPresent(m.mot, phrase); });
  if (!tous) return 0;
  const longueur = phrase.trim().split(/\s+/).length;
  const or = alambic.or && motPresent(alambic.or.mot, phrase);
  if (or && longueur >= 20) return 4;
  if (or && longueur >= 12) return 3;
  if (longueur >= 12) return 2;
  return 1;
}

function rendreAlambic() {
  const z = $("alambic");
  const elixirs = etat.elixirs || [];
  if (alambic.phase === "choix") {
    z.innerHTML =
      '<p class="petit gauche">Verse ces trois mots rares dans l\'alambic, puis distille-les en une seule phrase de ton cru. Plus elle est riche, plus l\'élixir est rare.</p>' +
      '<div class="ingredients">' + alambic.ingredients.map(function (m, i) {
        return '<div class="ingredient" style="--i:' + i + '"><b>' + echapper(m.mot) + '</b><span>' + echapper(m.definition) + "</span></div>";
      }).join("") +
      (alambic.or ? '<div class="ingredient ingredient-or" style="--i:3"><em>✨ Ingrédient d\'or, facultatif</em><b>' + echapper(alambic.or.mot) + "</b><span>" + echapper(alambic.or.definition) + "</span></div>" : "") +
      "</div>" +
      '<div class="actions-pyramide"><button class="bouton principal" type="button" id="verser-alambic">⚗️ Verser dans l\'alambic</button>' +
      '<button class="bouton" type="button" id="autres-ingredients">🎲 Autres ingrédients</button></div>' +
      '<p class="petit rangs-alambic">🥉 les 3 mots · 🥈 + 12 mots ou plus · 🥇 + l\'ingrédient d\'or · 🌟 + 20 mots ou plus</p>' +
      (elixirs.length ? '<p class="petit">Tes élixirs : ' + elixirs.length + "</p>" : "");
  } else if (alambic.phase === "ecrire") {
    z.innerHTML =
      '<div class="cornue" aria-hidden="true"><span class="cornue-panse"><i></i><i></i><i></i><i></i><i></i></span><span class="cornue-col"></span></div>' +
      '<div class="jauges" id="jauges">' + alambic.ingredients.concat(alambic.or ? [alambic.or] : []).map(function (m, i) {
        return '<span class="jauge' + (i === 3 ? " jauge-or" : "") + '" data-jauge="' + i + '">' + echapper(m.mot) + "</span>";
      }).join("") + "</div>" +
      '<textarea class="champ phrase-alambic" id="phrase-alambic" rows="4" maxlength="400" placeholder="Ta phrase, avec les trois mots…"></textarea>' +
      '<p class="petit" id="rang-alambic">Il manque encore des ingrédients.</p>' +
      '<button class="bouton principal large" type="button" id="distiller" disabled>🔥 Distiller</button>';
    $("phrase-alambic").focus();
  } else if (alambic.phase === "resultat") {
    const e = elixirs[0];
    z.innerHTML =
      '<div class="elixir-resultat rang-' + e.rang + '">' +
      '<span class="titre-sceau rang-' + e.rang + '">' + ["", "🥉", "🥈", "🥇", "🌟"][e.rang] + "</span>" +
      '<p class="ct-rang">' + ["", "Élixir de bronze", "Élixir d'argent", "Élixir d'or", "Élixir légendaire"][e.rang] + "</p>" +
      '<p class="citation-grande">« ' + echapper(e.phrase) + " »</p>" +
      '<p class="petit">Ingrédients : ' + echapper(e.mots.join(" · ")) + "</p></div>" +
      '<div class="actions-pyramide"><button class="bouton principal" type="button" id="partager-elixir">📤 Partager</button>' +
      '<button class="bouton" type="button" id="nouvel-elixir">⚗️ Nouvel élixir</button></div>' +
      '<p class="petit">Gardé dans tes élixirs (' + elixirs.length + ").</p>" +
      (elixirs.length > 1 ? '<div class="mes-elixirs">' + elixirs.slice(1, 6).map(function (x) {
        return '<p class="mon-elixir"><span>' + ["", "🥉", "🥈", "🥇", "🌟"][x.rang] + "</span> " + echapper(x.phrase) + "</p>";
      }).join("") + "</div>" : "");
  }
}

function majJaugesAlambic() {
  const phrase = $("phrase-alambic").value;
  alambic.ingredients.concat(alambic.or ? [alambic.or] : []).forEach(function (m, i) {
    const j = document.querySelector('[data-jauge="' + i + '"]');
    const ok = motPresent(m.mot, phrase);
    if (ok && !j.classList.contains("versee")) {
      const ctx = audio();
      if (ctx) { const t = ctx.currentTime + 0.01; gloup(ctx, t, !!etat.maudit); bulle(ctx, t + 0.1, 700 + i * 180); }
      etincellesAuToucher(j.getBoundingClientRect().left + j.offsetWidth / 2, j.getBoundingClientRect().top + 10, 10);
    }
    j.classList.toggle("versee", ok);
  });
  const r = rangElixir(phrase);
  $("distiller").disabled = r === 0;
  const n = phrase.trim() ? phrase.trim().split(/\s+/).length : 0;
  $("rang-alambic").textContent = r === 0
    ? "Il manque encore des ingrédients. (" + n + " mots)"
    : ["", "🥉 Élixir de bronze", "🥈 Élixir d'argent", "🥇 Élixir d'or", "🌟 Élixir légendaire"][r] + " · " + n + " mots" + (r < 4 ? " · tu peux encore l'enrichir" : " !");
  document.querySelector(".cornue").style.setProperty("--niveau", (alambic.ingredients.concat(alambic.or ? [alambic.or] : []).filter(function (m) { return motPresent(m.mot, phrase); }).length / (alambic.or ? 4 : 3) * 100) + "%");
}

$("alambic").addEventListener("input", function (e) { if (e.target.id === "phrase-alambic") majJaugesAlambic(); });
$("alambic").addEventListener("click", function (e) {
  const id = e.target.closest("button") && e.target.closest("button").id;
  if (id === "autres-ingredients") { tirerIngredients(); rendreAlambic(); }
  else if (id === "verser-alambic") {
    sonFiole();
    document.querySelectorAll(".ingredient").forEach(function (x) { x.classList.add("tombe"); });
    setTimeout(function () { alambic.phase = "ecrire"; rendreAlambic(); sonGorgee(); }, 650);
  }
  else if (id === "distiller") {
    const phrase = $("phrase-alambic").value.trim();
    const r = rangElixir(phrase);
    if (!r) return;
    document.querySelector(".cornue").classList.add("bout");
    $("distiller").disabled = true;
    sonFiole();
    setTimeout(function () {
      etat.elixirs = etat.elixirs || [];
      etat.elixirs.unshift({ phrase: phrase, rang: r, mots: alambic.ingredients.concat(alambic.or && motPresent(alambic.or.mot, phrase) ? [alambic.or] : []).map(function (m) { return m.mot; }), date: aujourdhui });
      etat.elixirs = etat.elixirs.slice(0, 200);
      etat.xp += 5 * r;
      sauver();
      $("xp").textContent = etat.xp;
      alambic.phase = "resultat";
      rendreAlambic();
      sonBoire(r >= 3);
      if (r >= 3) feterAvecDesBraises();
      setTimeout(verifierTitres, 1500);
    }, 1100);
  }
  else if (id === "nouvel-elixir") { tirerIngredients(); alambic.phase = "choix"; rendreAlambic(); }
  else if (id === "partager-elixir") {
    const x = etat.elixirs[0];
    const texte = "« " + x.phrase + " »\n\n⚗️ Distillé dans l'alambic de Pandémonium des mots (" + x.mots.join(", ") + ")\nhttps://chrys505.github.io/pandemonium-en-ligne/app/";
    if (navigator.share) navigator.share({ text: texte }).catch(function () {});
    else if (navigator.clipboard) navigator.clipboard.writeText(texte).then(function () { $("partager-elixir").textContent = "✅ Copié !"; });
  }
});
$("ouvrir-alambic").addEventListener("click", function () { tirerIngredients(); alambic.phase = "choix"; rendreAlambic(); $("fenetre-alambic").hidden = false; });
$("fermer-alambic").addEventListener("click", function () { $("fenetre-alambic").hidden = true; });
$("fenetre-alambic").addEventListener("click", function (e) { if (e.target === $("fenetre-alambic")) $("fenetre-alambic").hidden = true; });

// ---------- Sublimer : ton message, en plus beau (sans IA, avec le recueil de sublimer.js) ----------
const sublime = { ton: "romantique", degre: 2, vous: null, tirage: 0, propositions: [], choisie: 0 };

// {forme tu|forme vous}, {moment}, {objet}, {dobjet}
function remplirTournure(t, ctx) {
  return t.replace(/\{([^{}|]*)\|([^{}]*)\}/g, function (_, tu, vous) { return ctx.vous ? vous : tu; })
    .replace(/\{moment\}/g, ctx.moment).replace(/\{objet\}/g, ctx.objet).replace(/\{dobjet\}/g, ctx.dobjet)
    .replace(/\s+([,.])/g, "$1").replace(/ {2,}/g, " ");
}

function lireMessage(texte) {
  const brut = sansAccents(texte).replace(/’/g, "'");
  const intentions = SUBLIMER_INTENTIONS.filter(function (i) { return i.motif.test(brut); }).map(function (i) { return i.id; });
  // « désolé d'être en retard » : le retard suffit ; « merci, ok » : le merci suffit
  const retirer = function (id) { const i = intentions.indexOf(id); if (i !== -1) intentions.splice(i, 1); };
  if (intentions.indexOf("retard") !== -1) retirer("excuse");
  if (intentions.length > 1) retirer("confirmation");
  const moment = SUBLIMER_MOMENTS.find(function (m) { return m[0].test(brut); });
  const heure = brut.match(/\b(\d{1,2}) ?h ?(\d{2})?\b/);
  const objet = SUBLIMER_OBJETS.find(function (o) { return o[0].test(brut); });
  return {
    intentions: intentions,
    salut: SUBLIMER_SALUT.test(brut),
    auRevoir: SUBLIMER_AU_REVOIR.test(brut),
    moment: moment ? moment[1] : "",
    heure: heure ? "à " + heure[1] + " h" + (heure[2] || "") : "",
    objet: objet,
    vous: /\b(vous|votre|vos)\b/.test(brut)
  };
}

// Ton message, mot à mot, rehaussé selon le degré
function rehausser(texte, degre) {
  let t = texte.trim().replace(/\s+/g, " ").replace(/’/g, "'")
    .replace(/\bt'es\b/gi, "tu es").replace(/\bt'as\b/gi, "tu as").replace(/\bj'suis\b|\bchui\b|\bjsuis\b/gi, "je suis")
    .replace(/\by'a\b|\by a\b/gi, "il y a").replace(/(^|\s)c(?=\s)/gi, "$1c'est").replace(/\bc koi\b/gi, "qu'est-ce que c'est");
  // « super », « trop », « grave » devant un autre mot : ce sont des intensifs (« super cool » → « fort délicieux »)
  const INTENSIFS = ["vraiment", "fort", "prodigieusement"];
  t = t.replace(/([A-Za-zÀ-ÿ]+)(?=(\s+[A-Za-zÀ-ÿ])?)/g, function (mot, _, suite) {
    const s = sansAccents(mot);
    if (suite && (s === "super" || s === "trop" || s === "grave")) return INTENSIFS[degre - 1];
    const remplace = SUBLIMER_MOTS[s];
    return remplace ? remplace[degre - 1] : mot;
  });
  t = t.replace(/\s+([,.!?;:])/g, function (_, p) { return /[!?;:]/.test(p) ? " " + p : p; })
    .replace(/ {2,}/g, " ").replace(/^[\s,.]+/, "").trim();
  if (!t) return "";
  t = t.charAt(0).toUpperCase() + t.slice(1);
  if (!/[.!?…]$/.test(t)) t += ".";
  return t;
}

function composerSublime(texte) {
  const lu = lireMessage(texte);
  const ton = sublime.ton, d = sublime.degre;
  const vous = sublime.vous === null ? (lu.vous || ton === "pro") : sublime.vous;
  const objet = lu.objet || [null].concat(SUBLIMER_OBJET_DEFAUT[ton]);
  const momentTexte = [lu.moment, lu.heure].filter(Boolean).join(" ") || SUBLIMER_MOMENT_DEFAUT[ton];
  const ctx = { vous: vous, moment: momentTexte, objet: objet[1], dobjet: objet[2] };
  const intentions = lu.intentions.length ? lu.intentions : (lu.salut ? ["salut"] : []);
  const rehausse = rehausser(texte, d);
  const props = [];
  for (let n = 0; n < 2; n++) {
    const k = sublime.tirage + n;
    const pick = function (liste, decal) { return liste.length ? remplirTournure(liste[(k + (decal || 0)) % liste.length], ctx) : ""; };
    // En pro, si l'on prend déjà des nouvelles, l'ouverture reste un simple « Bonjour, » (pas deux « J'espère… »)
    const ouvrir = (ton === "pro" && intentions.indexOf("nouvelles") !== -1) ? "Bonjour,"
      : (lu.salut || d >= 2 || ton === "pro") ? pick(SUBLIMER_OUVERTURES[ton][d]) : "";
    const fermer = (lu.auRevoir || d >= 2 || ton === "pro") ? pick(SUBLIMER_FERMETURES[ton][d], 1) : "";
    const corps = intentions.length
      ? intentions.map(function (id, i) { return pick(SUBLIMER_TOURNURES[id][ton][d], i); }).join(" ")
      : rehausse;
    props.push([ouvrir, corps, fermer].filter(Boolean).join("\n\n"));
  }
  if (intentions.length && rehausse) props.push(rehausse);
  // Pas deux propositions identiques
  return { lu: lu, vous: vous, reconnu: intentions.length > 0, propositions: props.filter(function (p, i) { return p && props.indexOf(p) === i; }) };
}

// Les mots de l'appli présents dans la proposition : soulignés, avec leur définition
let indexMotsSublime = null;
function motsDeLAppliDans(texte) {
  if (!indexMotsSublime) {
    indexMotsSublime = {};
    tousLesMots().forEach(function (m) {
      if (!m.mot || /\s/.test(m.mot) || m.mot.length < 5 || categorieDe(m) === "courant") return;
      indexMotsSublime[m.mot.toLowerCase()] = m;
    });
  }
  // Comparaison avec les accents (sinon « faites » deviendrait « faîte ») ; on accepte le pluriel
  const trouves = [];
  (texte.match(/[A-Za-zÀ-ÿ-]+/g) || []).forEach(function (w) {
    const s = w.toLowerCase();
    const m = indexMotsSublime[s] || indexMotsSublime[s.replace(/s$/, "")];
    if (m && trouves.indexOf(m) === -1) trouves.push(m);
  });
  return trouves;
}

function htmlProposition(texte, mots) {
  let html = echapper(texte);
  mots.forEach(function (m) {
    const racine = m.mot.toLowerCase();
    html = html.replace(/[A-Za-zÀ-ÿ-]+/g, function (w) {
      const s = w.toLowerCase();
      return (s === racine || s.replace(/s$/, "") === racine)
        ? '<button type="button" class="mot-sublime" data-mot="' + echapper(m.mot) + '">' + w + "</button>" : w;
    });
  });
  return html.replace(/\n/g, "<br>");
}

function rendreSublimer() {
  const z = $("sublimer");
  const texte = ($("sublime-texte").value || "").trim();
  $("sublime-tons").innerHTML = SUBLIMER_TONS.map(function (t) {
    return '<button type="button" class="ton-sublime' + (t.id === sublime.ton ? " actif" : "") + '" data-ton="' + t.id + '"><i>' + t.icone + "</i><b>" + t.nom + "</b><span>" + t.aide + "</span></button>";
  }).join("");
  $("sublime-degre-nom").textContent = SUBLIMER_DEGRES[sublime.degre];
  const res = $("sublime-resultat");
  if (!texte) { res.innerHTML = '<p class="petit">Écris ton message tel qu\'il te vient, même en SMS (« dispo demain pour un café ? »).</p>'; return; }
  const c = composerSublime(texte);
  sublime.propositions = c.propositions;
  sublime.choisie = Math.min(sublime.choisie, c.propositions.length - 1);
  $("sublime-tu").classList.toggle("actif", !c.vous);
  $("sublime-vous").classList.toggle("actif", c.vous);
  res.innerHTML =
    (c.reconnu ? "" : '<p class="petit">Je n\'ai pas reconnu de tournure précise (invitation, merci, excuse…) : voici ton message rehaussé.</p>') +
    c.propositions.map(function (p, i) {
      const mots = motsDeLAppliDans(p);
      return '<div class="proposition-sublime' + (i === sublime.choisie ? " choisie" : "") + '" data-prop="' + i + '">' +
        '<p class="ct-rang">' + (i === c.propositions.length - 1 && c.reconnu && c.propositions.length > 2 ? "Ton message, rehaussé" : "Proposition " + (i + 1)) + "</p>" +
        '<p class="texte-sublime">' + htmlProposition(p, mots) + "</p>" +
        (mots.length ? '<p class="petit">Mots de l\'appli : ' + mots.map(function (m) { return echapper(m.mot); }).join(", ") + " (touche-les)</p>" : "") +
        "</div>";
    }).join("") +
    '<p class="petit gauche">Touche une proposition pour la choisir, puis retouche-la si tu veux avant de l\'envoyer.</p>' +
    '<textarea class="champ" id="sublime-final" rows="5" maxlength="1200" aria-label="Le message à envoyer">' + echapper(c.propositions[sublime.choisie] || "") + "</textarea>" +
    '<div class="actions-pyramide">' +
    '<button class="bouton principal" type="button" id="sublime-envoyer">📤 Envoyer</button>' +
    '<button class="bouton" type="button" id="sublime-copier">📋 Copier</button>' +
    '<button class="bouton" type="button" id="sublime-autre">🎲 D\'autres tournures</button></div>' +
    '<p class="petit">Relis avant d\'envoyer : c\'est toi qui signes. Et un compliment touche d\'autant plus qu\'il est sincère.</p>';
}

// Le message part : ses beaux mots entrent dans les révisions, et la plume gagne en renommée
function messageSublimeParti() {
  const texte = $("sublime-final").value;
  motsDeLAppliDans(texte).forEach(function (m) { entrerEnRevision(m.mot); });
  etat.sublimes = (etat.sublimes || 0) + 1;
  etat.xp += 3;
  sauver();
  $("xp").textContent = etat.xp;
  sonBoire(false);
  setTimeout(verifierTitres, 1200);
}

$("sublimer").addEventListener("input", function (e) {
  if (e.target.id === "sublime-texte") { sublime.choisie = 0; rendreSublimer(); }
  else if (e.target.id === "sublime-degre") { sublime.degre = Number(e.target.value); sublime.choisie = 0; sonGorgee(); rendreSublimer(); }
});
$("sublimer").addEventListener("click", function (e) {
  const b = e.target.closest("button, .proposition-sublime");
  if (!b) return;
  if (b.classList.contains("mot-sublime")) {
    const m = tousLesMots().find(function (x) { return x.mot === b.dataset.mot; });
    if (m) { ouvrirFiche(m); }
    return;
  }
  if (b.dataset.ton) { sublime.ton = b.dataset.ton; sublime.choisie = 0; sonClic(); rendreSublimer(); return; }
  if (b.classList.contains("proposition-sublime")) { sublime.choisie = Number(b.dataset.prop); rendreSublimer(); return; }
  if (b.id === "sublime-tu" || b.id === "sublime-vous") { sublime.vous = b.id === "sublime-vous"; rendreSublimer(); return; }
  if (b.id === "sublime-autre") { sublime.tirage++; sonFiole(); rendreSublimer(); return; }
  if (b.id === "sublime-copier") {
    const t = $("sublime-final").value;
    if (navigator.clipboard) navigator.clipboard.writeText(t).then(function () { $("sublime-copier").textContent = "✅ Copié !"; messageSublimeParti(); }).catch(function () {});
    return;
  }
  if (b.id === "sublime-envoyer") {
    const t = $("sublime-final").value;
    if (navigator.share) navigator.share({ text: t }).then(messageSublimeParti).catch(function () {});
    else if (navigator.clipboard) navigator.clipboard.writeText(t).then(function () { $("sublime-envoyer").textContent = "✅ Copié, colle-le dans ta messagerie"; messageSublimeParti(); });
  }
});
$("ouvrir-sublimer").addEventListener("click", function () { rendreSublimer(); $("fenetre-sublimer").hidden = false; sonFiole(); });
$("fermer-sublimer").addEventListener("click", function () { $("fenetre-sublimer").hidden = true; });
$("fenetre-sublimer").addEventListener("click", function (e) { if (e.target === $("fenetre-sublimer")) $("fenetre-sublimer").hidden = true; });

// ---------- La tirade du jour : un grand texte du théâtre, à jouer face caméra ----------
const tiradesDispo = typeof tirades !== "undefined" ? tirades : [];
const scene = { t: null, flux: null, enregistreur: null, morceaux: [], fichier: null, url: "", chrono: null, debut: 0 };

function tiradeDuJour() {
  const liste = etat.maudit ? tiradesDispo.filter(function (x) { return x.sombre; }) : tiradesDispo;
  return auJourDans(liste.length ? liste : tiradesDispo, 23);
}

function rendreTirade() {
  const t = scene.t;
  $("tirade").innerHTML =
    '<p class="grimoire-titre">' + echapper(t.personnage) + "</p>" +
    '<p class="petit">' + echapper(t.oeuvre) + " · " + echapper(t.auteur) + "</p>" +
    '<p class="citation-grande tirade-texte">' + echapper(t.texte).replace(/\n/g, "<br>") + "</p>" +
    '<p class="texte-doux gauche"><b>La scène</b> · ' + echapper(t.contexte) + "</p>" +
    '<p class="grimoire-revers gauche"><b>🎬 Comment la jouer</b> · ' + echapper(t.jeu) + "</p>" +
    '<div class="actions-pyramide"><button class="bouton principal" type="button" id="tourner-tirade">🎬 Me filmer</button>' +
    '<button class="bouton" type="button" id="autre-tirade">🎲 Une autre tirade</button></div>' +
    '<p class="petit">La caméra filme ici, sur ton téléphone. Rien n\'est envoyé tant que tu ne partages pas toi-même.</p>';
}

function couperCamera() {
  clearInterval(scene.chrono);
  if (scene.enregistreur && scene.enregistreur.state !== "inactive") { scene.enregistreur.onstop = null; scene.enregistreur.stop(); }
  if (scene.flux) scene.flux.getTracks().forEach(function (p) { p.stop(); });
  scene.flux = null; scene.enregistreur = null;
  $("plateau-video").srcObject = null;
}

function fermerPlateau() {
  couperCamera();
  if (scene.url) { URL.revokeObjectURL(scene.url); scene.url = ""; }
  $("plateau-video").removeAttribute("src");
  $("plateau").hidden = true;
}

function actionsPlateau(html) { $("plateau-actions").innerHTML = html; }

async function ouvrirPlateau() {
  $("plateau").hidden = false;
  $("prompteur").innerHTML = "<b>" + echapper(scene.t.personnage) + "</b><br>" + echapper(scene.t.texte).replace(/\n/g, "<br>");
  $("plateau-decompte").textContent = "";
  $("plateau-chrono").hidden = true;
  const v = $("plateau-video");
  v.muted = true; v.controls = false; v.classList.add("miroir");
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || typeof MediaRecorder === "undefined") {
    actionsPlateau('<p class="petit">Ce navigateur ne permet pas de filmer ici. Garde ce prompteur à l\'écran et filme-toi avec l\'appareil photo d\'un autre téléphone.</p><button class="bouton" type="button" id="plateau-fermer">Fermer</button>');
    return;
  }
  actionsPlateau('<p class="petit">Autorise la caméra et le micro pour te filmer…</p><button class="bouton" type="button" id="plateau-fermer">Annuler</button>');
  try {
    scene.flux = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user", width: { ideal: 1080 }, height: { ideal: 1920 } }, audio: true });
  } catch (err) {
    actionsPlateau('<p class="petit">La caméra n\'a pas pu s\'ouvrir (accès refusé ou indisponible). Tu peux l\'autoriser dans les réglages du navigateur, ou garder ce prompteur et te filmer autrement.</p><button class="bouton" type="button" id="plateau-fermer">Fermer</button>');
    return;
  }
  if ($("plateau").hidden) { couperCamera(); return; }
  v.srcObject = scene.flux;
  actionsPlateau('<button class="bouton-rec" type="button" id="plateau-rec" aria-label="Lancer l\'enregistrement"></button><button class="bouton" type="button" id="plateau-fermer">Fermer</button>');
}

function lancerTournage() {
  let n = 3;
  actionsPlateau("");
  $("plateau-decompte").textContent = n;
  sonClic();
  const tic = setInterval(function () {
    n--;
    if (n > 0) { $("plateau-decompte").textContent = n; sonClic(); return; }
    clearInterval(tic);
    $("plateau-decompte").textContent = "";
    demarrerEnregistrement();
  }, 900);
}

function demarrerEnregistrement() {
  const types = ["video/mp4", "video/webm;codecs=vp9,opus", "video/webm"];
  const type = types.find(function (x) { return MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(x); }) || "";
  try { scene.enregistreur = new MediaRecorder(scene.flux, type ? { mimeType: type } : undefined); }
  catch (err) { actionsPlateau('<p class="petit">L\'enregistrement n\'est pas possible sur ce navigateur.</p><button class="bouton" type="button" id="plateau-fermer">Fermer</button>'); return; }
  scene.morceaux = [];
  scene.enregistreur.ondataavailable = function (e) { if (e.data && e.data.size) scene.morceaux.push(e.data); };
  scene.enregistreur.onstop = finTournage;
  scene.enregistreur.start(250);
  scene.debut = Date.now();
  $("plateau-chrono").hidden = false;
  scene.chrono = setInterval(function () {
    const s = Math.floor((Date.now() - scene.debut) / 1000);
    $("plateau-chrono").textContent = "● " + Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
    $("prompteur").scrollTop = Math.max(0, (Date.now() - scene.debut) / 1000 - 2) * 14;
    if (s >= 180) arreterTournage();
  }, 250);
  // Le prompteur défile doucement pendant la prise
  const p = $("prompteur"); p.scrollTop = 0;
  p.classList.add("defile");
  actionsPlateau('<button class="bouton-rec en-cours" type="button" id="plateau-stop" aria-label="Arrêter l\'enregistrement"></button>');
}

function arreterTournage() {
  clearInterval(scene.chrono);
  if (scene.enregistreur && scene.enregistreur.state !== "inactive") scene.enregistreur.stop();
}

function finTournage() {
  $("prompteur").classList.remove("defile");
  $("plateau-chrono").hidden = true;
  const type = (scene.enregistreur && scene.enregistreur.mimeType) || "video/webm";
  const ext = type.indexOf("mp4") !== -1 ? "mp4" : "webm";
  const blob = new Blob(scene.morceaux, { type: type.split(";")[0] });
  if (scene.flux) scene.flux.getTracks().forEach(function (p) { p.stop(); });
  scene.flux = null;
  scene.fichier = new File([blob], "tirade-" + sansAccents(scene.t.personnage).toLowerCase().replace(/[^a-z]+/g, "-") + "." + ext, { type: blob.type });
  if (scene.url) URL.revokeObjectURL(scene.url);
  scene.url = URL.createObjectURL(blob);
  const v = $("plateau-video");
  v.srcObject = null; v.src = scene.url; v.muted = false; v.controls = true; v.loop = true; v.classList.remove("miroir");
  v.play().catch(function () {});
  etat.tiradesJouees = (etat.tiradesJouees || 0) + 1;
  etat.xp += 15;
  sauver();
  $("xp").textContent = etat.xp;
  sonBoire(true);
  actionsPlateau('<button class="bouton principal" type="button" id="plateau-partager">📤 Partager</button>' +
    '<button class="bouton" type="button" id="plateau-enregistrer">💾 Enregistrer</button>' +
    '<button class="bouton" type="button" id="plateau-refaire">↺ Refaire</button>' +
    '<button class="bouton" type="button" id="plateau-fermer">Fermer</button>');
  setTimeout(verifierTitres, 1500);
}

function legendeTirade() {
  return "🎭 « " + scene.t.texte.split("\n")[0] + " » — " + scene.t.personnage + ", " + scene.t.oeuvre + ", " + scene.t.auteur +
    "\n\nLa tirade du jour, avec Pandémonium des mots ⚗️\n#théâtre #languefrançaise #" + sansAccents(scene.t.auteur).replace(/[^A-Za-z]/g, "");
}

$("plateau-actions").addEventListener("click", function (e) {
  const id = e.target.closest("button") && e.target.closest("button").id;
  if (id === "plateau-fermer") fermerPlateau();
  else if (id === "plateau-rec") lancerTournage();
  else if (id === "plateau-stop") arreterTournage();
  else if (id === "plateau-refaire") { fermerPlateau(); ouvrirPlateau(); }
  else if (id === "plateau-enregistrer") {
    const a = document.createElement("a"); a.href = scene.url; a.download = scene.fichier.name; document.body.appendChild(a); a.click(); a.remove();
  }
  else if (id === "plateau-partager") {
    if (navigator.canShare && navigator.canShare({ files: [scene.fichier] })) {
      navigator.share({ files: [scene.fichier], text: legendeTirade() }).catch(function () {});
    } else {
      const a = document.createElement("a"); a.href = scene.url; a.download = scene.fichier.name; document.body.appendChild(a); a.click(); a.remove();
      if (navigator.clipboard) navigator.clipboard.writeText(legendeTirade()).catch(function () {});
      e.target.textContent = "💾 Vidéo enregistrée, légende copiée";
    }
  }
});

$("tirade").addEventListener("click", function (e) {
  const id = e.target.closest("button") && e.target.closest("button").id;
  if (id === "autre-tirade") { scene.t = auHasard(tiradesDispo.filter(function (x) { return x !== scene.t; })); rendreTirade(); }
  else if (id === "tourner-tirade") { $("fenetre-tirade").hidden = true; ouvrirPlateau(); }
});
$("ouvrir-tirade").addEventListener("click", function () { scene.t = tiradeDuJour(); rendreTirade(); $("fenetre-tirade").hidden = false; });
$("fermer-tirade").addEventListener("click", function () { $("fenetre-tirade").hidden = true; });
$("fenetre-tirade").addEventListener("click", function (e) { if (e.target === $("fenetre-tirade")) $("fenetre-tirade").hidden = true; });

// ---------- 📜 Le Roman de l'Alchimiste : un épisode par jour, débloqué par le mot du jour ----------
const romanDispo = typeof feuilleton !== "undefined" ? feuilleton : null;
function etatRoman() { return etat.roman || (etat.roman = { lus: 0, dernierJour: "", voie: "", repliques: {} }); }
function episodeDispo() {
  const r = etatRoman();
  if (!romanDispo || r.lus >= romanDispo.episodes.length) return null;
  return r.dernierJour === aujourdhui ? null : r.lus;
}

// Les livres du roman (Livre I, Livre II…) se suivent dans une seule liste d'épisodes
function livresRoman() { return romanDispo.livres || [{ titre: romanDispo.livre, debut: 0 }]; }
function numLivre(i) { let k = 0; livresRoman().forEach(function (l, j) { if (i >= l.debut) k = j; }); return k; }
function bornesLivre(k) { const L = livresRoman(); return { debut: L[k].debut, fin: k + 1 < L.length ? L[k + 1].debut : romanDispo.episodes.length }; }
function finDeLivre(i) { return i === bornesLivre(numLivre(i)).fin - 1; }
function nomCourt(k) { return livresRoman()[k].titre.split(" · ")[0]; }

function widgetRoman() {
  if (!romanDispo) return "";
  const r = etatRoman(), n = romanDispo.episodes.length, i = episodeDispo(), L = livresRoman();
  const k = numLivre(Math.min(r.lus, n - 1)), b = bornesLivre(k);
  let corps;
  if (r.lus >= n) corps = '<p class="grimoire-titre">' + echapper(nomCourt(L.length - 1)) + ' terminé</p><p class="petit">Le livre suivant se distille… Relis ton roman en attendant.</p>';
  else if (i !== null) {
    const ep = romanDispo.episodes[i];
    corps = (i === b.debut && k > 0 ? '<p class="grimoire-titre">✨ Nouveau : ' + echapper(L[k].titre) + "</p>" : "") +
      '<p class="roman-w-ep">Épisode ' + (i - b.debut + 1) + " · " + echapper(ep.titre) + "</p>" +
      '<p class="texte-doux gauche roman-w-extrait">' + echapper(ep.texte[0].slice(0, 120)) + "…</p>" +
      '<button class="bouton principal" type="button" data-roman="lire">📖 Lire l\'épisode ' + (i - b.debut + 1) + "</button>";
  } else {
    const prochain = romanDispo.episodes[r.lus];
    corps = '<p class="roman-w-ep">' + (r.lus === b.debut && k > 0 ? echapper(nomCourt(k)) + " · " : "") + "Épisode " + (r.lus - b.debut + 1) + " · " + echapper(prochain.titre) + "</p>" +
      '<p class="petit">⏳ La suite paraît dans <b class="roman-rebours">' + reboursMinuit() + "</b></p>";
  }
  const lusDuLivre = Math.min(Math.max(r.lus - b.debut, 0), b.fin - b.debut);
  return '<article class="widget widget-roman" id="widget-roman">' +
    '<p class="etiquette">📜 Le Roman de l\'Alchimiste · ' + echapper(nomCourt(k)) + " · " + lusDuLivre + " / " + (b.fin - b.debut) + "</p>" + corps +
    (r.lus ? '<button class="bouton petit-bouton" type="button" data-roman="relire">Relire ton roman</button>' : "") + "</article>";
}
setInterval(function () { document.querySelectorAll(".roman-rebours").forEach(function (x) { x.textContent = reboursMinuit(); }); }, 1000);

function paragraphesEpisode(ep, voie) {
  return ep.texte.map(function (p, k) { return '<p class="roman-p" style="--k:' + k + '">' + echapper(p) + "</p>"; }).join("") +
    (ep.voie && voie && ep.voie[voie] ? '<p class="roman-p roman-voie voie-' + voie + '" style="--k:' + ep.texte.length + '">' + echapper(ep.voie[voie]) + "</p>" : "");
}

function lireEpisode(i) {
  const ep = romanDispo.episodes[i], r = etatRoman();
  const m = motDuJour();
  let action;
  if (ep.choix) {
    action = '<p class="roman-invite">Que fais-tu ?</p><div class="roman-choix">' + ep.choix.map(function (c) {
      return '<button class="roman-bouton voie-' + c.voie + '" type="button" data-voie="' + c.voie + '">' + echapper(c.texte) + "</button>";
    }).join("") + "</div>";
  } else {
    action = '<p class="roman-invite">✍️ ' + echapper(ep.replique) + "</p>" +
      '<p class="petit">Pour que l\'histoire continue, ta réplique doit contenir le mot du jour : <b>' + echapper(m.mot) + "</b> (" + echapper(m.definition) + ")</p>" +
      '<textarea class="champ roman-replique" id="roman-replique" rows="3" maxlength="300" placeholder="« … »"></textarea>' +
      '<p class="petit" id="roman-etat">Le mot du jour n\'y est pas encore.</p>' +
      '<button class="bouton principal large" type="button" id="roman-signer" disabled>🪶 Signer ma réplique</button>';
  }
  $("roman").innerHTML =
    '<p class="etiquette">' + echapper(livresRoman()[numLivre(i)].titre) + "</p>" +
    '<p class="roman-titre">Épisode ' + (i - bornesLivre(numLivre(i)).debut + 1) + " · " + echapper(ep.titre) + "</p>" +
    paragraphesEpisode(ep, r.voie) + '<div class="roman-action">' + action + "</div>";
  $("fenetre-roman").querySelector(".fenetre").scrollTop = 0;
}

function finirEpisode(i, contenu) {
  const ep = romanDispo.episodes[i], r = etatRoman();
  if (ep.choix) { r.voie = contenu; r.repliques[i] = "→ " + ep.choix.filter(function (c) { return c.voie === contenu; })[0].texte; }
  else r.repliques[i] = contenu;
  r.lus = i + 1; r.dernierJour = aujourdhui;
  etat.xp += 15; sauver(); $("xp").textContent = etat.xp;
  const fin = finDeLivre(i), k = numLivre(i);
  sonBoire(fin);
  if (fin) feterAvecDesBraises();
  $("roman").querySelector(".roman-action").innerHTML =
    (ep.choix ? '<p class="roman-ta-replique voie-' + contenu + '">' + echapper(r.repliques[i]) + "</p>" : '<p class="roman-ta-replique">« ' + echapper(contenu) + " »</p>") +
    '<p class="roman-suspense">' + echapper(ep.suspense) + "</p>" +
    (!fin
      ? '<p class="petit">À suivre… L\'épisode ' + (i - bornesLivre(k).debut + 2) + ' paraît dans <b class="roman-rebours">' + reboursMinuit() + "</b></p>"
      : i + 1 < romanDispo.episodes.length
        ? '<p class="petit">Merci d\'avoir vécu le ' + echapper(nomCourt(k)) + '. Le ' + echapper(livresRoman()[k + 1].titre) + ' commence dans <b class="roman-rebours">' + reboursMinuit() + "</b>.</p>"
        : '<p class="petit">Merci d\'avoir vécu le ' + echapper(nomCourt(k)) + ". Le livre suivant se distille.</p>") +
    '<button class="bouton large" type="button" data-roman="fermer">Refermer le livre</button>';
  setTimeout(verifierTitres, 1800);
}

function relireRoman() {
  const r = etatRoman();
  $("roman").innerHTML =
    '<p class="etiquette">📖 Ton roman de l\'Alchimiste</p>' +
    romanDispo.episodes.slice(0, r.lus).map(function (ep, i) {
      const k = numLivre(i), b = bornesLivre(k);
      return (i === b.debut ? '<p class="roman-titre">' + echapper(livresRoman()[k].titre) + "</p>" : "") +
        '<details class="roman-relu"><summary>Épisode ' + (i - b.debut + 1) + " · " + echapper(ep.titre) + "</summary>" +
        ep.texte.map(function (p) { return '<p class="roman-p fixe">' + echapper(p) + "</p>"; }).join("") +
        '<p class="roman-ta-replique">' + echapper(r.repliques[i] || "") + "</p>" +
        '<p class="roman-suspense">' + echapper(ep.suspense) + "</p></details>";
    }).join("");
}

$("roman").addEventListener("input", function (e) {
  if (e.target.id !== "roman-replique") return;
  const t = e.target.value.trim(), m = motDuJour();
  const ok = motPresent(m.mot, t), assez = t.split(/\s+/).length >= 4;
  $("roman-signer").disabled = !(ok && assez);
  $("roman-etat").textContent = !ok ? "Le mot du jour n'y est pas encore." : !assez ? "Le mot y est ! Encore quelques mots pour une vraie réplique." : "✅ Parfait : signe ta réplique.";
});
$("roman").addEventListener("click", function (e) {
  const v = e.target.closest("[data-voie]");
  const i = etatRoman().lus;
  if (v) { finirEpisode(i, v.dataset.voie); return; }
  if (e.target.closest("#roman-signer")) { finirEpisode(i, $("roman-replique").value.trim()); return; }
  const b = e.target.closest("[data-roman]");
  if (b && b.dataset.roman === "fermer") { $("fenetre-roman").hidden = true; majWidgets(); }
});
$("widgets").addEventListener("click", function (e) {
  const b = e.target.closest("[data-roman]");
  if (!b) return;
  if (b.dataset.roman === "lire" && episodeDispo() !== null) { lireEpisode(episodeDispo()); $("fenetre-roman").hidden = false; sonFiole(); }
  else if (b.dataset.roman === "relire") { relireRoman(); $("fenetre-roman").hidden = false; }
});
$("fermer-roman").addEventListener("click", function () { $("fenetre-roman").hidden = true; majWidgets(); });
$("fenetre-roman").addEventListener("click", function (e) { if (e.target === $("fenetre-roman")) { $("fenetre-roman").hidden = true; majWidgets(); } });

// ---------- 🗼 La Tour du Pandémonium : un combat de mots, étage par étage ----------
// Un hasard « à graine » : la tour du jour est la même pour tout le monde
function hasardGraine(graine) {
  let a = graine >>> 0;
  return function () { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const tour = { etage: 1, coeurs: 3, combo: 0, pv: 0, pvMax: 0, monstre: null, q: null, vision: 0, sablier: 0, rage: false, duJour: false, rnd: Math.random, minuteur: null, restant: 0, debutQ: 0, fin: false };
function tPioche(liste) { return liste[Math.floor(tour.rnd() * liste.length)]; }
function tMelange(liste) { const l = liste.slice(); for (let i = l.length - 1; i > 0; i--) { const j = Math.floor(tour.rnd() * (i + 1)); const x = l[i]; l[i] = l[j]; l[j] = x; } return l; }

const FIOLES_TOUR = [
  { id: "vie", icone: "❤️", nom: "Élixir de vie", effet: "+1 cœur (5 au plus)" },
  { id: "vision", icone: "👁️", nom: "Fiole de vision", effet: "Fait disparaître une mauvaise réponse (2 fois)" },
  { id: "sablier", icone: "⏳", nom: "Sablier", effet: "+5 secondes sur les 5 prochaines questions" },
  { id: "rage", icone: "⚡", nom: "Philtre de rage", effet: "Coups doublés contre le prochain monstre" }
];

function motsTour() { return tousLesMots().filter(function (m) { return m.definition && m.definition.length < 150; }); }

// Une question de combat : trois réponses, une seule juste
function questionTour() {
  const mots = motsTour();
  const types = ["def", "def", "mot", "mot"];
  if (sortilegesDispo.length) types.push("sort");
  if (bestiaireDispo.length) types.push("bete");
  if (typeof expressionsPlus !== "undefined") types.push("expr");
  const type = tPioche(types);
  const autres = function (liste, juste, cle) {
    const r = [];
    while (r.length < 2) { const x = tPioche(liste); const v = cle ? cle(x) : x; if (v !== juste && r.indexOf(v) === -1) r.push(v); }
    return r;
  };
  if (type === "def") {
    const m = tPioche(mots);
    return { intitule: "Quel mot correspond à cette définition ?", sujet: m.definition, juste: m.mot, choix: tMelange([m.mot].concat(autres(mots, m.mot, function (x) { return x.mot; }))) };
  }
  if (type === "mot") {
    const m = tPioche(mots);
    return { intitule: "Que veut dire ce mot ?", sujet: m.mot, juste: m.definition, choix: tMelange([m.definition].concat(autres(mots, m.definition, function (x) { return x.definition; }))), longs: true };
  }
  if (type === "sort") {
    const s = tPioche(sortilegesDispo);
    const juste = tPioche(s.mots);
    const faux = autres(sortilegesDispo.filter(function (x) { return x !== s; }), juste, function (x) { return tPioche(x.mots); });
    return { intitule: "Quel mot descend du sortilège « " + s.formule + " » (" + s.sens + ") ?", sujet: "🪄 " + s.formule, juste: juste, choix: tMelange([juste].concat(faux)) };
  }
  if (type === "bete") {
    const b = tPioche(bestiaireDispo);
    return { intitule: "D'où vient la légende de cette créature ?", sujet: b.icone + " " + b.nom, juste: b.origine, choix: tMelange([b.origine].concat(autres(bestiaireDispo, b.origine, function (x) { return x.origine; }))) };
  }
  const e = tPioche(expressionsPlus);
  return { intitule: "Que veut dire cette expression ?", sujet: "« " + e[0] + " »", juste: e[1], choix: tMelange([e[1]].concat(autres(expressionsPlus, e[1], function (x) { return x[1]; }))), longs: true };
}

function monstreTour(etage) {
  const boss = etage % 5 === 0;
  const rangVoulu = boss ? (etage >= 15 ? 4 : 3) : (etage >= 12 ? 2 : 1);
  let liste = bestiaireDispo.filter(function (b) { return boss ? b.rang >= rangVoulu : b.rang <= Math.max(2, rangVoulu); });
  if (!liste.length) liste = bestiaireDispo;
  const b = tPioche(liste);
  const pv = boss ? 6 + Math.floor(etage / 3) : 2 + Math.floor(etage / 3);
  return { b: b, boss: boss, pv: pv };
}

function rangTour(etage) { return etage >= 20 ? 4 : etage >= 10 ? 3 : etage >= 5 ? 2 : 1; }

function coeursTour() { let h = ""; for (let i = 0; i < tour.coeurs; i++) h += "❤️"; return h || "🖤"; }

function entreeTour() {
  const jour = etat.tourJour && etat.tourJour.jour === aujourdhui ? etat.tourJour : null;
  $("tour").innerHTML =
    '<p class="etiquette">🗼 La Tour du Pandémonium</p>' +
    '<div class="tour-silhouette" aria-hidden="true">🗼</div>' +
    '<p class="texte-doux">Chaque étage, une créature te barre la route. Réponds juste pour frapper, vite pour frapper fort, enchaîne pour les combos. Trois erreurs… et c\'est la chute.</p>' +
    '<p class="petit">Ton record : <b>étage ' + (etat.tourRecord || 0) + "</b>" + (jour ? " · Tour du jour : étage " + jour.etage : "") + "</p>" +
    '<div class="actions-pyramide"><button class="bouton principal" type="button" data-tour="jour">🗓️ La tour du jour</button>' +
    '<button class="bouton" type="button" data-tour="libre">🎲 Tour libre</button></div>' +
    '<p class="petit">La tour du jour est la même pour tout le monde : compare ton étage avec tes amis !</p>';
}

function lancerTour(duJour) {
  tour.duJour = duJour;
  tour.rnd = duJour ? hasardGraine(Number(aujourdhui.replace(/-/g, "")) * 7 + 13) : Math.random;
  tour.etage = 1; tour.coeurs = 3; tour.combo = 0; tour.vision = 0; tour.sablier = 0; tour.rage = false; tour.fin = false;
  nouveauMonstreTour();
}

function nouveauMonstreTour() {
  const m = monstreTour(tour.etage);
  tour.monstre = m; tour.pv = m.pv; tour.pvMax = m.pv;
  if (m.boss) { const ctx = audio(); if (ctx) { const t = ctx.currentTime + 0.02; note(ctx, t, "sawtooth", 110, 55, 0.6, 0.12); note(ctx, t + 0.25, "sawtooth", 98, 49, 0.7, 0.12); } }
  questionSuivanteTour();
}

function questionSuivanteTour() {
  tour.q = questionTour();
  rendreCombatTour();
  const duree = 10 + (tour.sablier > 0 ? 5 : 0);
  if (tour.sablier > 0) tour.sablier--;
  tour.restant = duree; tour.debutQ = Date.now();
  clearInterval(tour.minuteur);
  tour.minuteur = setInterval(function () {
    const reste = Math.max(0, duree - (Date.now() - tour.debutQ) / 1000);
    const b = $("tour-temps"); if (b) b.style.width = (reste / duree * 100) + "%";
    if (reste <= 0) { clearInterval(tour.minuteur); repondreTour(null); }
  }, 100);
}

function rendreCombatTour() {
  const m = tour.monstre, q = tour.q;
  $("tour").innerHTML =
    '<div class="tour-haut"><span class="tour-etage">Étage ' + tour.etage + (m.boss ? " · BOSS" : "") + '</span><span class="tour-coeurs">' + coeursTour() + "</span></div>" +
    '<div class="tour-monstre' + (m.boss ? " boss" : "") + '" id="tour-monstre"><span class="titre-sceau rang-' + m.b.rang + '">' + m.b.icone + "</span>" +
    '<p class="tour-nom">' + echapper(m.b.nom) + "</p>" +
    '<div class="tour-pv"><div style="width:' + (tour.pv / tour.pvMax * 100) + '%"></div></div>' +
    (tour.combo >= 2 ? '<p class="tour-combo">🔥 Combo ×' + tour.combo + "</p>" : "") + (tour.rage ? '<p class="tour-combo">⚡ Rage</p>' : "") + "</div>" +
    '<div class="tour-temps-fond"><div class="tour-temps" id="tour-temps"></div></div>' +
    '<p class="petit">' + echapper(q.intitule) + "</p>" +
    '<p class="tour-sujet">' + echapper(q.sujet) + "</p>" +
    '<div class="tour-choix' + (q.longs ? " longs" : "") + '">' + q.choix.map(function (c, i) {
      return '<button class="tour-reponse" type="button" data-rep="' + i + '">' + echapper(c) + "</button>";
    }).join("") + "</div>" +
    (tour.vision > 0 ? '<button class="bouton petit-bouton" type="button" data-tour="vision">👁️ Vision (' + tour.vision + ")</button>" : "");
}

function degatFlottant(texte, classe) {
  const m = $("tour-monstre"); if (!m) return;
  const d = document.createElement("span"); d.className = "tour-degat " + (classe || ""); d.textContent = texte;
  m.appendChild(d); setTimeout(function () { d.remove(); }, 900);
}

function repondreTour(i) {
  if (tour.fin || !tour.q) return;
  clearInterval(tour.minuteur);
  const q = tour.q; tour.q = null;
  const boutons = document.querySelectorAll(".tour-reponse");
  boutons.forEach(function (b, k) { b.disabled = true; if (q.choix[k] === q.juste) b.classList.add("juste"); });
  const juste = i !== null && q.choix[i] === q.juste;
  if (juste) {
    tour.combo++;
    const vite = (Date.now() - tour.debutQ) / 1000 < 4;
    let degat = 1 + (vite ? 1 : 0);
    if (tour.combo >= 3) degat *= 2;
    if (tour.rage) degat *= 2;
    tour.pv = Math.max(0, tour.pv - degat);
    sonJuste(0);
    const mon = $("tour-monstre"); if (mon) mon.classList.add("touche");
    degatFlottant("−" + degat + (vite ? " ⚡" : ""));
    const barre = document.querySelector(".tour-pv div"); if (barre) barre.style.width = (tour.pv / tour.pvMax * 100) + "%";
  } else {
    if (i !== null) boutons[i].classList.add("faux");
    tour.combo = 0; tour.coeurs--;
    sonFaux(0);
    $("fenetre-tour").querySelector(".fenetre").classList.add("frappe");
    setTimeout(function () { const f = $("fenetre-tour").querySelector(".fenetre"); if (f) f.classList.remove("frappe"); }, 450);
    degatFlottant(i === null ? "⏳ Trop lent !" : "💔", "rate");
  }
  setTimeout(function () {
    if (tour.coeurs <= 0) return finTour();
    if (tour.pv <= 0) return victoireEtage();
    questionSuivanteTour();
  }, juste ? 650 : 1300);
}

function victoireEtage() {
  const m = tour.monstre;
  tour.rage = false;
  sonBoire(m.boss);
  if (m.boss) feterAvecDesBraises();
  const r = $("tour").getBoundingClientRect(); etincellesAuToucher(r.left + r.width / 2, r.top + 120, m.boss ? 30 : 14);
  const offre = tMelange(FIOLES_TOUR).slice(0, 3);
  $("tour").innerHTML =
    '<p class="etiquette">🗼 Étage ' + tour.etage + " conquis</p>" +
    '<span class="titre-sceau rang-' + m.b.rang + '">' + m.b.icone + "</span>" +
    '<p class="grimoire-titre">' + echapper(m.b.nom) + " est terrassé" + (/^La |^Mélusine/.test(m.b.nom) ? "e" : "") + " !</p>" +
    '<p class="petit gauche"><b>Le savais-tu ?</b> ' + echapper(m.b.savais) + "</p>" +
    '<p class="texte-doux">Choisis une fiole pour la suite :</p>' +
    '<div class="tour-fioles">' + offre.map(function (f) {
      return '<button class="tour-fiole" type="button" data-fiole="' + f.id + '"><i>' + f.icone + "</i><b>" + f.nom + "</b><span>" + f.effet + "</span></button>";
    }).join("") + "</div>";
}

function finTour() {
  tour.fin = true;
  clearInterval(tour.minuteur);
  const atteint = tour.etage;
  const record = atteint > (etat.tourRecord || 0);
  if (record) etat.tourRecord = atteint;
  if (tour.duJour) etat.tourJour = { jour: aujourdhui, etage: Math.max(atteint, etat.tourJour && etat.tourJour.jour === aujourdhui ? etat.tourJour.etage : 0) };
  etat.xp += atteint * 3;
  sauver();
  $("xp").textContent = etat.xp;
  const rang = rangTour(atteint);
  sonBoire(record);
  if (record) feterAvecDesBraises();
  $("tour").innerHTML =
    '<p class="etiquette">🗼 La chute</p>' +
    '<span class="titre-sceau rang-' + rang + '">' + ["", "🥉", "🥈", "🥇", "🌟"][rang] + "</span>" +
    '<p class="titre-nom">Étage ' + atteint + "</p>" +
    '<p class="texte-doux">' + (record ? "🏆 Nouveau record !" : "Ton record : étage " + (etat.tourRecord || 0)) + " · +" + atteint * 3 + " ✦</p>" +
    (tour.duJour ? '<p class="petit">Tour du jour (' + new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long" }) + ")</p>" : "") +
    '<div class="actions-pyramide"><button class="bouton principal" type="button" data-tour="partager">📤 Défier mes amis</button>' +
    '<button class="bouton" type="button" data-tour="' + (tour.duJour ? "jour" : "libre") + '">🔥 Remonter</button>' +
    '<button class="bouton" type="button" data-tour="entree">🗼 Accueil de la tour</button></div>';
  setTimeout(verifierTitres, 1500);
}

$("tour").addEventListener("click", function (e) {
  const r = e.target.closest("[data-rep]");
  if (r) { repondreTour(+r.dataset.rep); return; }
  const f = e.target.closest("[data-fiole]");
  if (f) {
    const id = f.dataset.fiole;
    if (id === "vie") tour.coeurs = Math.min(5, tour.coeurs + 1);
    if (id === "vision") tour.vision += 2;
    if (id === "sablier") tour.sablier += 5;
    if (id === "rage") tour.rage = true;
    sonFiole();
    tour.etage++;
    nouveauMonstreTour();
    return;
  }
  const b = e.target.closest("[data-tour]");
  if (!b) return;
  const a = b.dataset.tour;
  if (a === "jour") lancerTour(true);
  else if (a === "libre") lancerTour(false);
  else if (a === "entree") entreeTour();
  else if (a === "vision" && tour.q && tour.vision > 0) {
    const fausses = []; document.querySelectorAll(".tour-reponse").forEach(function (x, k) { if (tour.q.choix[k] !== tour.q.juste && !x.disabled) fausses.push(x); });
    if (fausses.length > 1) { const x = fausses[Math.floor(Math.random() * fausses.length)]; x.disabled = true; x.classList.add("efface"); tour.vision--; b.textContent = "👁️ Vision (" + tour.vision + ")"; if (!tour.vision) b.remove(); }
  }
  else if (a === "partager") {
    const texte = "🗼 J'ai atteint l'étage " + tour.etage + " de la Tour du Pandémonium" + (tour.duJour ? " (tour du " + new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long" }) + ")" : "") + ". Et toi, jusqu'où montes-tu ?\nhttps://chrys505.github.io/pandemonium-en-ligne/app/";
    if (navigator.share) navigator.share({ text: texte }).catch(function () {});
    else if (navigator.clipboard) navigator.clipboard.writeText(texte).then(function () { b.textContent = "✅ Copié !"; });
  }
});
function fermerTour() { clearInterval(tour.minuteur); tour.fin = true; $("fenetre-tour").hidden = true; majTourSous(); }
function majTourSous() { if (etat.tourRecord) $("tour-sous").textContent = "Ton record : étage " + etat.tourRecord + ". Monte plus haut et terrasse les créatures avec tes mots"; }
majTourSous();
$("ouvrir-tour").addEventListener("click", function () { entreeTour(); $("fenetre-tour").hidden = false; });
$("fermer-tour").addEventListener("click", fermerTour);
$("fenetre-tour").addEventListener("click", function (e) { if (e.target === $("fenetre-tour")) fermerTour(); });

// ---------- 🪢 Le pendu de la potence : un mot rare, lettre par lettre ----------
const pendu = { mot: null, lettres: [], erreurs: 0, indice: false, fini: false };
const ERREURS_MAX = 7;
function lettresDe(mot) { return sansAccents(mot).toUpperCase(); }

function nouveauPendu() {
  const liste = motsRaresDispo().filter(function (m) { return /^[A-Za-zÀ-ÿ]{5,11}$/.test(m.mot); });
  pendu.mot = auHasard(liste.length ? liste : motsRaresDispo());
  pendu.lettres = []; pendu.erreurs = 0; pendu.indice = false; pendu.fini = false;
  rendrePendu();
}

function dessinPendu(n) {
  const traits = [
    '<line x1="10" y1="140" x2="110" y2="140"/>', '<line x1="30" y1="140" x2="30" y2="12"/>', '<line x1="30" y1="12" x2="90" y2="12"/><line x1="30" y1="34" x2="52" y2="12"/>',
    '<line x1="90" y1="12" x2="90" y2="32"/>', '<circle cx="90" cy="44" r="12"/>', '<line x1="90" y1="56" x2="90" y2="96"/><line x1="90" y1="66" x2="74" y2="82"/><line x1="90" y1="66" x2="106" y2="82"/>',
    '<line x1="90" y1="96" x2="76" y2="122"/><line x1="90" y1="96" x2="104" y2="122"/>'
  ];
  return '<svg class="potence" viewBox="0 0 120 150" aria-hidden="true">' + traits.slice(0, n).join("") + "</svg>";
}

function rendrePendu() {
  const cible = lettresDe(pendu.mot.mot);
  const gagne = cible.split("").every(function (l) { return !/[A-Z]/.test(l) || pendu.lettres.indexOf(l) !== -1; });
  const perdu = pendu.erreurs >= ERREURS_MAX;
  const affiche = pendu.mot.mot.split("").map(function (c, i) {
    const l = cible[i];
    return /[A-Z]/.test(l) && pendu.lettres.indexOf(l) === -1 && !perdu ? "<span>_</span>" : "<span" + (perdu && pendu.lettres.indexOf(l) === -1 ? ' class="rate"' : "") + ">" + echapper(c.toUpperCase()) + "</span>";
  }).join("");
  let html = dessinPendu(pendu.erreurs) +
    '<p class="pendu-mot">' + affiche + "</p>" +
    '<p class="petit">' + (ERREURS_MAX - pendu.erreurs) + " erreur(s) avant la corde</p>";
  if (gagne || perdu) {
    if (!pendu.fini) {
      pendu.fini = true;
      if (gagne) { etat.pendusGagnes = (etat.pendusGagnes || 0) + 1; etat.xp += 10; sauver(); $("xp").textContent = etat.xp; sonBoire(true); setTimeout(verifierTitres, 1500); }
      else sonFaux(0);
    }
    html += '<p class="grimoire-titre">' + (gagne ? "🎉 Sauvé de justesse !" : "☠️ Pendu haut et court…") + "</p>" +
      '<p class="texte-doux"><b>' + echapper(pendu.mot.mot) + "</b> : " + echapper(pendu.mot.definition) + "</p>" +
      '<button class="bouton principal large" type="button" id="pendu-encore">🪢 Un autre condamné</button>';
  } else {
    html += (pendu.indice ? '<p class="texte-doux">💡 ' + echapper(pendu.mot.definition) + "</p>" : '<button class="bouton petit-bouton" type="button" id="pendu-indice">💡 Indice (la définition, contre une erreur)</button>') +
      '<div class="clavier">' + "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(function (l) {
        const jouee = pendu.lettres.indexOf(l) !== -1;
        return '<button type="button" data-lettre="' + l + '"' + (jouee ? " disabled" : "") + ' class="' + (jouee ? (cible.indexOf(l) !== -1 ? "bonne" : "mauvaise") : "") + '">' + l + "</button>";
      }).join("") + "</div>";
  }
  $("pendu").innerHTML = html;
}

$("pendu").addEventListener("click", function (e) {
  const l = e.target.closest("[data-lettre]");
  if (l && !pendu.fini) {
    const x = l.dataset.lettre;
    if (pendu.lettres.indexOf(x) === -1) {
      pendu.lettres.push(x);
      if (lettresDe(pendu.mot.mot).indexOf(x) === -1) { pendu.erreurs++; sonFaux(0); } else sonJuste(0);
    }
    rendrePendu(); return;
  }
  if (e.target.closest("#pendu-indice")) { pendu.indice = true; pendu.erreurs++; rendrePendu(); return; }
  if (e.target.closest("#pendu-encore")) nouveauPendu();
});
$("ouvrir-pendu").addEventListener("click", function () { nouveauPendu(); $("fenetre-pendu").hidden = false; });
$("fermer-pendu").addEventListener("click", function () { $("fenetre-pendu").hidden = true; });
$("fenetre-pendu").addEventListener("click", function (e) { if (e.target === $("fenetre-pendu")) $("fenetre-pendu").hidden = true; });

// ---------- 🎭 Vrai ou galéjade ? 10 affirmations, 5 secondes chacune ----------
const galej = { liste: [], i: 0, score: 0, serie: 0, minuteur: null, debut: 0, repondu: false };
function lancerGalejade() {
  const base = (typeof vraiOuGalejade !== "undefined" ? vraiOuGalejade : []).slice();
  for (let i = base.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const x = base[i]; base[i] = base[j]; base[j] = x; }
  galej.liste = base.slice(0, 10); galej.i = 0; galej.score = 0; galej.serie = 0;
  questionGalejade();
}
function questionGalejade() {
  const a = galej.liste[galej.i];
  galej.repondu = false;
  $("galejade").innerHTML =
    '<p class="petit">Affirmation ' + (galej.i + 1) + " / " + galej.liste.length + " · Score " + galej.score + (galej.serie >= 2 ? " · 🔥 ×" + galej.serie : "") + "</p>" +
    '<div class="tour-temps-fond"><div class="tour-temps" id="galej-temps"></div></div>' +
    '<p class="galej-affirmation">' + echapper(a[0]) + "</p>" +
    '<div class="galej-boutons"><button class="galej-vrai" type="button" data-galej="1">✅ Vrai</button><button class="galej-faux" type="button" data-galej="0">🎭 Galéjade</button></div>';
  galej.debut = Date.now();
  clearInterval(galej.minuteur);
  galej.minuteur = setInterval(function () {
    const reste = Math.max(0, 5 - (Date.now() - galej.debut) / 1000);
    const b = $("galej-temps"); if (b) b.style.width = (reste / 5 * 100) + "%";
    if (reste <= 0) { clearInterval(galej.minuteur); repondreGalejade(null); }
  }, 100);
}
function repondreGalejade(choix) {
  if (galej.repondu) return;
  galej.repondu = true;
  clearInterval(galej.minuteur);
  const a = galej.liste[galej.i];
  const juste = choix !== null && (choix === 1) === a[1];
  if (juste) { galej.score++; galej.serie++; sonJuste(0); } else { galej.serie = 0; sonFaux(0); }
  $("galejade").querySelector(".galej-boutons").outerHTML =
    '<p class="grimoire-titre">' + (choix === null ? "⏳ Trop tard !" : juste ? "✅ Bien vu !" : "❌ Raté !") + "</p>" +
    '<p class="grimoire-revers gauche">' + echapper(a[2]) + "</p>" +
    '<button class="bouton principal large" type="button" id="galej-suite">' + (galej.i + 1 < galej.liste.length ? "Suivante →" : "Voir mon score") + "</button>";
}
function finGalejade() {
  const s = galej.score, n = galej.liste.length;
  const rang = s >= 10 ? 4 : s >= 8 ? 3 : s >= 6 ? 2 : 1;
  if (s > (etat.galejRecord || 0)) etat.galejRecord = s;
  etat.xp += s * 2; sauver(); $("xp").textContent = etat.xp;
  sonBoire(rang >= 3); if (rang === 4) feterAvecDesBraises();
  $("galejade").innerHTML =
    '<span class="titre-sceau rang-' + rang + '">' + ["", "🥉", "🥈", "🥇", "🌟"][rang] + "</span>" +
    '<p class="titre-nom">' + s + " / " + n + "</p>" +
    '<p class="texte-doux">' + (rang === 4 ? "Rien ne t'échappe : détecteur de galéjades infaillible !" : rang === 3 ? "Fin limier : on ne te la fait pas." : rang === 2 ? "Pas mal, mais quelques galéjades t'ont roulé." : "Les galéjadeurs se frottent les mains…") + "</p>" +
    '<p class="petit">Ton record : ' + (etat.galejRecord || s) + " / " + n + " · +" + s * 2 + " ✦</p>" +
    '<button class="bouton principal large" type="button" id="galej-rejouer">🎭 Rejouer</button>';
  setTimeout(verifierTitres, 1500);
}
$("galejade").addEventListener("click", function (e) {
  const b = e.target.closest("[data-galej]");
  if (b) { repondreGalejade(+b.dataset.galej); return; }
  if (e.target.closest("#galej-suite")) { galej.i++; if (galej.i < galej.liste.length) questionGalejade(); else finGalejade(); return; }
  if (e.target.closest("#galej-rejouer")) lancerGalejade();
});
function fermerGalejade() { clearInterval(galej.minuteur); galej.repondu = true; $("fenetre-galejade").hidden = true; }
$("ouvrir-galejade").addEventListener("click", function () { lancerGalejade(); $("fenetre-galejade").hidden = false; });
$("fermer-galejade").addEventListener("click", fermerGalejade);
$("fenetre-galejade").addEventListener("click", function (e) { if (e.target === $("fenetre-galejade")) fermerGalejade(); });

function majWidgets() {
  $("widgets").innerHTML = widgetRoman() + widgetMystere() +widgetSort() + widgetCreature() + widgetTitre() + widgetBibliotheque() + widgetOracle() + widgetPhrase() + widgetLivre() + widgetFil();
  majFil();
}

// Le fil défile tout seul ; le compte à rebours de la fiole tourne à la seconde
setInterval(function () { if (!document.hidden && !$("ecran-aujourdhui").hidden) majFil(); }, 8000);
setInterval(function () { const r = $("mystere-rebours"); if (r) r.textContent = reboursMinuit(); }, 1000);

// Les deux portes de l'accueil (tri du 2026-11-25) : les bonus d'un côté, les curiosités de l'autre
// Pousser la porte : deux battants qui s'ouvrent en grinçant sur la fenêtre (2026-11-25)
function pousserPorte(nom) {
  const p = $("porte");
  p.className = "porte porte-" + nom;
  p.hidden = false;
  void p.offsetWidth; // on relance l'animation à chaque fois
  p.classList.add("ouverte");
  sonPorte();
  clearTimeout(pousserPorte.minuteur);
  pousserPorte.minuteur = setTimeout(function () { p.hidden = true; p.classList.remove("ouverte"); }, 2450);
}
$("ouvrir-jeux").addEventListener("click", function () { $("fenetre-jeux").hidden = false; pousserPorte("jeux"); });
$("ouvrir-cabinet").addEventListener("click", function () { majWidgets(); $("fenetre-cabinet").hidden = false; pousserPorte("cabinet"); });
["jeux", "cabinet"].forEach(function (n) {
  $("fermer-" + n).addEventListener("click", function () { $("fenetre-" + n).hidden = true; });
  $("fenetre-" + n).addEventListener("click", function (e) { if (e.target === $("fenetre-" + n)) $("fenetre-" + n).hidden = true; });
});
$("fenetre-jeux").addEventListener("click", function (e) {
  const b = e.target.closest("[data-relais], [data-relais-ecran]");
  if (!b) return;
  $("fenetre-jeux").hidden = true;
  if (b.dataset.relais) $(b.dataset.relais).click(); else allerA(b.dataset.relaisEcran);
});

function chercherDansLeDico(q) {
  $("fenetre-cabinet").hidden = true;
  allerA("reviser");
  $("dico-recherche").value = q;
  majDico();
  setTimeout(function () { $("dico-recherche").scrollIntoView({ behavior: "smooth", block: "start" }); }, 60);
}

$("widgets").addEventListener("click", function (e) {
  const ch = e.target.closest("[data-chercher]");
  if (ch) { chercherDansLeDico(ch.dataset.chercher); return; }
  if (e.target.closest("#widget-fil")) { majFil(); return; }
  const f = e.target.closest("#widget-mystere");
  if (!f || f.classList.contains("secoue")) return;
  f.classList.add("secoue");
  sonFiole();
  setTimeout(function () {
    const t = tresorAuHasard();
    t.legendaire = Math.random() < 0.125;
    etat.mystere = { jour: aujourdhui, tresor: t };
    etat.fioles = (etat.fioles || 0) + 1;
    if (t.legendaire) etat.legendaires = (etat.legendaires || 0) + 1;
    etat.xp += t.legendaire ? 20 : 5;
    sauver();
    $("xp").textContent = etat.xp;
    sonBoire(t.legendaire);
    if (t.legendaire) feterAvecDesBraises();
    $("widgets").querySelector(".widget-mystere").outerHTML = widgetMystere();
    const r = f.getBoundingClientRect();
    etincellesAuToucher(r.left + r.width / 2, r.top + 60, t.legendaire ? 30 : 16);
    setTimeout(verifierTitres, 1500);
  }, 900);
});
$("widgets").addEventListener("keydown", function (e) {
  if ((e.key === "Enter" || e.key === " ") && e.target.closest("[role='button']")) { e.preventDefault(); e.target.click(); }
});
$("widgets").addEventListener("submit", function (e) {
  e.preventDefault();
  const q = $("biblio-champ").value.trim();
  if (q) chercherDansLeDico(q);
});

// ---------- L'image à partager : le mot du jour dans sa fiole, dessiné par l'appli (format publication ou story) ----------
const imagePartage = { format: "post", fichier: null, url: "" };

// Un texte aux lettres espacées, centré
function texteEspace(c, texte, x, y, espace) {
  const lettres = Array.from(texte);
  const largeurs = lettres.map(function (l) { return c.measureText(l).width; });
  const total = largeurs.reduce(function (a, b) { return a + b; }, 0) + espace * (lettres.length - 1);
  let pos = x - total / 2;
  c.textAlign = "left";
  lettres.forEach(function (l, k) { c.fillText(l, pos, y); pos += largeurs[k] + espace; });
  c.textAlign = "center";
}

// Couper un texte en lignes qui tiennent dans la largeur
function envelopper(c, texte, largeur) {
  const mots = texte.split(/\s+/), lignes = [];
  let ligne = "";
  mots.forEach(function (m) {
    const essai = ligne ? ligne + " " + m : m;
    if (c.measureText(essai).width > largeur && ligne) { lignes.push(ligne); ligne = m; }
    else ligne = essai;
  });
  if (ligne) lignes.push(ligne);
  return lignes;
}

function dessinerFioleImage(c, x, y, R, p) {
  const col = R * 0.34, haut = R * 0.85;
  c.save();
  // Le halo
  const halo = c.createRadialGradient(x, y, R * 0.3, x, y, R * 2.6);
  halo.addColorStop(0, p.halo + "0.45)"); halo.addColorStop(1, p.halo + "0)");
  c.fillStyle = halo; c.beginPath(); c.arc(x, y, R * 2.6, 0, Math.PI * 2); c.fill();
  // La forme : le col et la panse
  c.beginPath();
  c.moveTo(x - col / 2, y - R - haut);
  c.lineTo(x - col / 2, y - R * 0.92);
  c.arc(x, y, R, -Math.PI / 2 - Math.asin(col / 2 / R), -Math.PI / 2 + Math.asin(col / 2 / R) + Math.PI * 2, true);
  c.lineTo(x + col / 2, y - R - haut);
  c.closePath();
  c.fillStyle = "rgba(255,255,255,0.04)"; c.fill();
  // Le liquide (60 % de la panse), avec sa lueur
  c.save();
  c.beginPath(); c.arc(x, y, R - 3, 0, Math.PI * 2); c.clip();
  const niveau = y - R * 0.2;
  const liquide = c.createLinearGradient(0, niveau, 0, y + R);
  liquide.addColorStop(0, p.accent2); liquide.addColorStop(1, p.accent);
  c.shadowColor = p.accent; c.shadowBlur = 50;
  c.fillStyle = liquide;
  c.beginPath(); c.moveTo(x - R, niveau);
  c.quadraticCurveTo(x - R / 2, niveau - R * 0.08, x, niveau);
  c.quadraticCurveTo(x + R / 2, niveau + R * 0.08, x + R, niveau);
  c.lineTo(x + R, y + R); c.lineTo(x - R, y + R); c.closePath(); c.fill();
  c.shadowBlur = 0;
  c.fillStyle = "rgba(255,255,255,0.55)";
  [[-0.3, 0.35, 0.07], [0.15, 0.55, 0.05], [0.35, 0.2, 0.04], [-0.05, 0.1, 0.035]].forEach(function (b) {
    c.beginPath(); c.arc(x + b[0] * R, y + b[1] * R, b[2] * R, 0, Math.PI * 2); c.fill();
  });
  c.restore();
  // Le verre : contour et reflet
  c.strokeStyle = p.accent2; c.globalAlpha = 0.85; c.lineWidth = R * 0.035;
  c.stroke();
  c.globalAlpha = 0.3; c.strokeStyle = "#fff"; c.lineWidth = R * 0.05;
  c.beginPath(); c.arc(x, y, R * 0.72, Math.PI * 1.1, Math.PI * 1.4); c.stroke();
  c.globalAlpha = 1;
  // Le bouchon
  c.fillStyle = p.bouchon;
  c.fillRect(x - col * 0.62, y - R - haut - R * 0.22, col * 1.24, R * 0.26);
  c.restore();
}

function dessinerImagePartage(format) {
  const W = 1080, H = format === "story" ? 1920 : 1350, story = format === "story";
  const toile = document.createElement("canvas");
  toile.width = W; toile.height = H;
  const c = toile.getContext("2d");
  const p = etat.maudit
    ? { fond1: "#2e0707", fond2: "#060101", halo: "rgba(229,72,77,", texte: "#f6e3dc", accent: "#c8242c", accent2: "#ff8a7a", doux: "#c09f98", bouchon: "#3a1410" }
    : { fond1: "#2a1c07", fond2: "#070502", halo: "rgba(245,197,66,", texte: "#fbf3e0", accent: "#d9a21b", accent2: "#ffe7a3", doux: "#c4b89e", bouchon: "#5a3a1c" };
  const SERIF = '"Iowan Old Style", "Palatino Linotype", Palatino, "Book Antiqua", Georgia, serif';
  const AFFICHE = 'Didot, "Bodoni 72", "Bodoni MT", "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif';
  const SANS = '-apple-system, "SF Pro Display", "Segoe UI", system-ui, Arial, sans-serif';

  // Le fond : un halo chaud au cœur de la nuit
  c.fillStyle = p.fond2; c.fillRect(0, 0, W, H);
  const fond = c.createRadialGradient(W / 2, H * 0.4, 0, W / 2, H * 0.4, H * 0.75);
  fond.addColorStop(0, p.fond1); fond.addColorStop(1, p.fond2);
  c.fillStyle = fond; c.fillRect(0, 0, W, H);

  // Des paillettes (les mêmes toute la journée)
  let graine = (numeroJour * 7919) % 233280;
  const hasard = function () { graine = (graine * 9301 + 49297) % 233280; return graine / 233280; };
  for (let k = 0; k < 110; k++) {
    c.globalAlpha = 0.15 + hasard() * 0.55;
    c.fillStyle = hasard() > 0.5 ? p.accent2 : p.accent;
    c.beginPath(); c.arc(hasard() * W, hasard() * H, 0.8 + hasard() * 2.6, 0, Math.PI * 2); c.fill();
  }
  c.globalAlpha = 1;

  // Le cadre doré, avec ses losanges aux coins
  c.strokeStyle = p.accent; c.globalAlpha = 0.6; c.lineWidth = 2;
  c.strokeRect(40, 40, W - 80, H - 80);
  c.globalAlpha = 0.25; c.lineWidth = 1;
  c.strokeRect(54, 54, W - 108, H - 108);
  c.globalAlpha = 0.9; c.fillStyle = p.accent2;
  [[40, 40], [W - 40, 40], [40, H - 40], [W - 40, H - 40]].forEach(function (pt) {
    c.beginPath(); c.moveTo(pt[0], pt[1] - 12); c.lineTo(pt[0] + 12, pt[1]); c.lineTo(pt[0], pt[1] + 12); c.lineTo(pt[0] - 12, pt[1]); c.closePath(); c.fill();
  });
  c.globalAlpha = 1;
  c.textAlign = "center"; c.textBaseline = "alphabetic";

  // L'en-tête
  const haut = story ? 250 : 135;
  c.fillStyle = p.accent2; c.font = "600 30px " + SANS;
  texteEspace(c, "PANDÉMONIUM DES MOTS", W / 2, haut, 7);
  c.fillStyle = p.doux; c.font = "italic 30px " + SERIF;
  c.fillText(maintenant.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" }), W / 2, haut + 48);

  // La fiole
  const R = story ? 120 : 82;
  const fy = haut + 48 + R * 1.85 + (story ? 95 : 55);
  dessinerFioleImage(c, W / 2, fy, R, p);

  // L'étiquette et le mot
  let y = fy + R + (story ? 110 : 85);
  c.fillStyle = p.accent; c.font = "600 30px " + SANS;
  texteEspace(c, $("etiquette-hero").textContent.replace(/^\W+\s*/u, "").toUpperCase(), W / 2, y, 6);
  const mot = $("apercu-mot").textContent.trim();
  const largeur = W - 220;
  let taille = story ? 200 : 170, lignesMot;
  do {
    c.font = (etat.maudit ? "italic " : "") + "600 " + taille + "px " + AFFICHE;
    lignesMot = c.measureText(mot).width <= largeur ? [mot] : envelopper(c, mot, largeur);
    taille -= 6;
  } while ((taille > 74 && lignesMot.some(function (l) { return c.measureText(l).width > largeur; })) || (taille > 74 && lignesMot.length > 2));
  taille += 6;
  const lumiere = c.createLinearGradient(0, y, 0, y + taille * lignesMot.length * 1.1);
  lumiere.addColorStop(0, p.accent2); lumiere.addColorStop(1, p.accent);
  c.fillStyle = lumiere; c.shadowColor = p.accent; c.shadowBlur = 45;
  y += 40;
  lignesMot.forEach(function (l) { y += taille * 1.02; c.fillText(l, W / 2, y); });
  c.shadowBlur = 0;

  // Le trait et son losange
  y += story ? 70 : 55;
  c.strokeStyle = p.accent; c.globalAlpha = 0.8; c.lineWidth = 2;
  c.beginPath(); c.moveTo(W / 2 - 150, y); c.lineTo(W / 2 - 18, y); c.moveTo(W / 2 + 18, y); c.lineTo(W / 2 + 150, y); c.stroke();
  c.fillStyle = p.accent2;
  c.beginPath(); c.moveTo(W / 2, y - 9); c.lineTo(W / 2 + 9, y); c.lineTo(W / 2, y + 9); c.lineTo(W / 2 - 9, y); c.closePath(); c.fill();
  c.globalAlpha = 1;

  // La définition
  const tailleDef = story ? 54 : 46;
  c.fillStyle = p.texte; c.font = "italic " + tailleDef + "px " + SERIF;
  const lignesDef = envelopper(c, $("apercu-def").textContent.trim(), W - 240).slice(0, story ? 6 : 4);
  y += story ? 40 : 30;
  lignesDef.forEach(function (l) { y += tailleDef * 1.38; c.fillText(l, W / 2, y); });

  // Le pied de page (au-dessus de la zone cachée par Instagram en story)
  const pied = H - (story ? 300 : 120);
  c.fillStyle = p.accent2; c.font = "italic 36px " + SERIF;
  c.fillText(etat.maudit ? "Une goutte de venin lettré par jour" : "Une gorgée de savoir par jour", W / 2, pied - 52);
  c.fillStyle = p.doux; c.font = "500 26px " + SANS;
  texteEspace(c, "chrys505.github.io/pandemonium-en-ligne", W / 2, pied, 2);

  // Un exemple, s'il reste de la place
  const m = motParNom(mot);
  const ex = m ? exempleDe(m) : "";
  if (ex) {
    const tailleEx = story ? 38 : 32;
    c.font = "italic " + tailleEx + "px " + SERIF;
    const lignesEx = envelopper(c, "« " + ex + " »", W - 280);
    const besoin = lignesEx.length * tailleEx * 1.4 + 50;
    if (y + besoin < pied - 52 - 40) {
      y += 50;
      c.fillStyle = p.doux;
      lignesEx.forEach(function (l) { y += tailleEx * 1.4; c.fillText(l, W / 2, y); });
    }
  }
  return toile;
}

function majImagePartage() {
  const toile = dessinerImagePartage(imagePartage.format);
  imagePartage.url = toile.toDataURL("image/png");
  $("apercu-image").src = imagePartage.url;
  imagePartage.fichier = null;
  // Le fichier est préparé d'avance : le partage doit partir tout de suite après le toucher
  toile.toBlob(function (blob) {
    if (!blob) return;
    const nom = "pandemonium-" + ($("apercu-mot").textContent.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-")) + "-" + imagePartage.format + ".png";
    try { imagePartage.fichier = new File([blob], nom, { type: "image/png" }); } catch (e) { imagePartage.fichier = null; }
  }, "image/png");
  document.querySelectorAll("#formats-image button").forEach(function (b) { b.classList.toggle("actif", b.dataset.format === imagePartage.format); });
}

function enregistrerImagePartage() {
  const a = document.createElement("a");
  a.href = imagePartage.url;
  a.download = imagePartage.fichier ? imagePartage.fichier.name : "pandemonium-mot-du-jour.png";
  document.body.appendChild(a); a.click(); a.remove();
}

$("ouvrir-image").addEventListener("click", function () { $("fenetre-image").hidden = false; majImagePartage(); });
$("fermer-image").addEventListener("click", function () { $("fenetre-image").hidden = true; });
$("fenetre-image").addEventListener("click", function (e) { if (e.target === $("fenetre-image")) $("fenetre-image").hidden = true; });
$("formats-image").addEventListener("click", function (e) {
  const b = e.target.closest("[data-format]");
  if (!b || b.dataset.format === imagePartage.format) return;
  imagePartage.format = b.dataset.format;
  majImagePartage();
});
$("partager-image").addEventListener("click", function () {
  const f = imagePartage.fichier;
  if (f && navigator.canShare && navigator.canShare({ files: [f] })) {
    navigator.share({ files: [f] }).catch(function () {});
  } else {
    enregistrerImagePartage();
  }
});
$("enregistrer-image").addEventListener("click", enregistrerImagePartage);

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

// La porte qui grince.
// Version claire : un vrai bruitage de porte en bois (« Scary wooden door opening », Mixkit, licence gratuite Mixkit Sound Effects).
// Version sombre : la porte de la crypte, fabriquée par l'appli (grincement.js).
const bruitagePorte = { fichier: "../sons/porte-bois.mp3", tampon: null, enCours: null };
function chargerBruitagePorte(ctx) {
  if (bruitagePorte.tampon || bruitagePorte.enCours) return bruitagePorte.enCours;
  bruitagePorte.enCours = fetch(bruitagePorte.fichier)
    .then(function (r) { return r.arrayBuffer(); })
    .then(function (a) { return new Promise(function (ok, ko) { ctx.decodeAudioData(a, ok, ko); }); })
    .then(function (b) { bruitagePorte.tampon = b; return b; })
    .catch(function () { bruitagePorte.enCours = null; return null; });
  return bruitagePorte.enCours;
}
function jouerBruitagePorte(ctx, b) {
  const s = ctx.createBufferSource(), g = ctx.createGain();
  s.buffer = b; g.gain.value = 0.9;
  s.connect(g); g.connect(ctx.destination);
  s.start(ctx.currentTime + 0.02);
}
function sonPorte() {
  const ctx = audio(); if (!ctx) return;
  const t = ctx.currentTime + 0.01;
  if (!etat.maudit) {
    if (bruitagePorte.tampon) { jouerBruitagePorte(ctx, bruitagePorte.tampon); return; }
    const p = chargerBruitagePorte(ctx);
    if (p) p.then(function (b) { if (b) jouerBruitagePorte(ctx, b); });
    return;
  }
  if (typeof grincement !== "function") return;
  note(ctx, t, "square", 180, 90, 0.05, 0.05);
  souffle(ctx, t, "highpass", 2500, 1800, 0.04, 0.05, 0.7);
  grincement(ctx, t + 0.3, etat.porteCrypte || "crypteDouce"); // la crypte adoucie, choisie à l'écoute (2026-11-25)
}
// On prépare le bruitage dès le premier toucher, pour qu'il parte sans attendre
document.addEventListener("pointerdown", function prep() {
  const ctx = audio(); if (ctx && !etat.maudit) chargerBruitagePorte(ctx);
  document.removeEventListener("pointerdown", prep);
}, { once: true });

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
// Des étincelles d'or (ou des braises de sang) jaillissent sous le doigt
const sansMouvement = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function etincellesAuToucher(x, y, nombre) {
  if (sansMouvement || (!x && !y)) return;
  for (let i = 0; i < (nombre || 9); i++) {
    const s = document.createElement("span");
    s.className = "etincelle-doigt";
    const angle = Math.random() * Math.PI * 2, force = 26 + Math.random() * 46;
    s.style.left = x + "px";
    s.style.top = y + "px";
    s.style.setProperty("--dx", Math.cos(angle) * force + "px");
    s.style.setProperty("--dy", Math.sin(angle) * force - 14 + "px");
    s.style.setProperty("--taille", (3 + Math.random() * 4) + "px");
    document.body.appendChild(s);
    setTimeout(function () { s.remove(); }, 750);
  }
}
document.addEventListener("click", function (e) {
  const cible = e.target.closest("button, a, [role='button'], .widget");
  if (!cible) return;
  etincellesAuToucher(e.clientX, e.clientY);
  // Une vibration toute légère (sur les téléphones qui le permettent), sauf si le son est coupé
  if (etat.son !== false && navigator.vibrate) { try { navigator.vibrate(8); } catch (err) { /* tant pis */ } }
}, true);

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

// La fiche « faite main » (fiches.js) : une scène plutôt qu'une définition, puis, selon le mot,
// quand le dégainer, l'autre sens, le piège, d'où il vient, et le jour où il est entré au carnet (carnet.js)
const PARTIES_FICHE = [["aussi", "↪", "Et aussi"], ["degainer", "🎯", "À dégainer"], ["piege", "⚠️", "Le piège"], ["origine", "🌿", "D'où il vient"]];
// Une date du carnet (« 2026-11-25 ») écrite comme dans un journal : « 25 novembre 2026 »
const MOIS_CARNET = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
function dateLisible(cle) {
  const p = String(cle || "").split("-");
  if (p.length !== 3) return "";
  const j = Number(p[2]);
  return (j === 1 ? "1er" : j) + " " + MOIS_CARNET[Number(p[1]) - 1] + " " + p[0];
}

// La fiche d'un mot de ton carnet : ta phrase, là où tu l'as croisé, le jour où tu l'as noté
function fichePerso(mot) {
  const e = (etat.collection || []).filter(function (x) { return x.type === "mot" && x.titre === mot; })[0];
  if (!e || !(e.contexte || e.source)) return "";
  return '<div class="fiche-riche">' +
    (e.contexte ? '<p class="fiche-scene">« ' + echapper(e.contexte) + " »</p>" : "") +
    (e.source ? '<p class="fiche-part"><b>📖 Croisé dans</b> ' + echapper(e.source) + "</p>" : "") +
    '<p class="fiche-carnet">📓 Noté de ta main' + (e.date ? " le " + dateLisible(e.date) : "") + "</p>" +
    "</div>";
}

function ficheDuMot(mot) {
  const f = typeof fiches !== "undefined" && fiches[mot];
  if (!f) return fichePerso(mot);
  const date = typeof carnet !== "undefined" && carnet[mot];
  return '<div class="fiche-riche">' +
    '<p class="fiche-scene">' + echapper(f.scene) + "</p>" +
    PARTIES_FICHE.filter(function (p) { return f[p[0]]; }).map(function (p) {
      return '<p class="fiche-part"><b>' + p[1] + " " + p[2] + "</b> " + echapper(f[p[0]]) + "</p>";
    }).join("") +
    (date ? '<p class="fiche-carnet">📓 Entré au carnet le ' + echapper(date) + "</p>" : "") +
    "</div>";
}

function rendreCarte(c) {
  const d = c.donnee;
  if (c.type === "rare" || c.type === "argot" || c.type === "antan") {
    const liste = ficheDuMot(d.mot) ? [] : ((typeof exemples !== "undefined" && exemples[d.mot]) || []);
    const argot = c.type === "argot";
    const titres = { rare: "💎 Le mot rare du jour · bonus", argot: "🎤 Le mot de la rue · argot", antan: "⚔️ Juron ou insulte d'antan" };
    const notes = { rare: "Un mot pour briller… ou pour les curieux.", argot: "Pas du français soutenu, mais une vraie richesse de la langue.", antan: "Pour pester avec panache, sans vexer personne… ou presque." };
    return '<p class="etiquette">' + titres[c.type] + "</p>" + imageDuMot(d.mot) +
      '<p class="mot-feu" style="--echelle:' + echelle(d.mot) + '">' + echapper(d.mot) + "</p>" +
      '<div class="trait"></div>' +
      '<p class="texte-doux">' + echapper(d.definition) + "</p>" + ficheDuMot(d.mot) + vuDansLeMot(d.mot) +
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
    const liste = ficheDuMot(d.mot) ? [] : ((typeof exemples !== "undefined" && exemples[d.mot]) || []).slice();
    if (d.exemplePerso) liste.unshift(["Ton invention 🎨", d.exemplePerso]);
    const phrases = liste.length ? '<div class="exemples"><p class="etiquette-petite">En situation</p>' +
      liste.map(function (e) {
        return '<p class="exemple"><span class="sens">' + echapper(e[0]) + "</span>" + echapper(e[1]) + "</p>";
      }).join("") + "</div>" : "";
    return '<p class="etiquette">Le mot du jour' + (d.invention ? " · ton invention" : (d.perso ? " · de ta collection" : " · ⭐ utile au quotidien")) + "</p>" + imageDuMot(d.mot) +
      '<p class="mot-feu" style="--echelle:' + echelle(d.mot) + '">' + echapper(d.mot) + "</p>" +
      '<div class="trait"></div>' +
      '<p class="texte-doux">' + echapper(d.definition) + "</p>" + ficheDuMot(d.mot) + vuDansLeMot(d.mot) + langues + phrases +
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
// Les mots du carnet ne comptent pas : seuls les autres ajouts (citations, pensées, inventions, punchlines) sont limités
function ajoutsLimites() { return etat.collection.filter(function (el) { return el.type !== "mot"; }).length; }

function majFormulaire() {
  const type = document.querySelector('input[name="type"]:checked').value;
  const titre = $("champ-titre");
  const texte = $("champ-texte");
  const auteur = $("champ-auteur");
  const avecTitre = type === "mot" || type === "invention";
  titre.hidden = !avecTitre;
  titre.required = avecTitre;
  auteur.hidden = type === "mot";
  $("champ-source").hidden = type !== "mot";
  $("champ-contexte").hidden = type !== "mot";
  titre.placeholder = type === "invention" ? "Ton mot inventé (ex. : hydraulique)" : "Le mot (ex. : Pantois)";
  texte.placeholder = type === "mot" ? "Sa définition" : (type === "invention" ? "Ce qu'il veut dire (ex. : qui fait pleurer)" : (type === "citation" ? "La citation" : "Ta pensée"));
  auteur.placeholder = type === "invention" ? "Une phrase d'exemple (facultatif)" : (type === "citation" ? "Auteur (facultatif)" : "Signature (facultatif)");
}

document.querySelectorAll('input[name="type"]').forEach(function (r) {
  r.addEventListener("change", majFormulaire);
});

$("formulaire").addEventListener("submit", function (e) {
  e.preventDefault();
  const type = document.querySelector('input[name="type"]:checked').value;
  if (type !== "mot" && ajoutsLimites() >= LIMITE_GRATUITE) { ouvrirPremium(); return; }
  const element = {
    type: type,
    titre: $("champ-titre").value.trim(),
    texte: $("champ-texte").value.trim(),
    auteur: $("champ-auteur").value.trim(),
    date: aujourdhui
  };
  if (type === "mot") {
    element.source = $("champ-source").value.trim();
    element.contexte = $("champ-contexte").value.trim();
  }
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
  $("limite-collection").textContent = "📓 Mots du carnet : sans limite · autres ajouts : " + ajoutsLimites() + " / " + LIMITE_GRATUITE + " gratuits";
  const liste = $("liste-collection");
  liste.innerHTML = "";
  if (!etat.collection.length) {
    liste.innerHTML = '<p class="vide">Ta collection est vide. Ajoute ton premier mot !</p>';
    return;
  }
  const noms = { mot: "Mot", citation: "Citation", pensee: "Pensée", invention: "Invention 🎨", punchline: "Punchline 🎤" };
  etat.collection.forEach(function (el, i) {
    const bloc = document.createElement("div");
    bloc.className = "element" + (el.type === "mot" ? " element-carnet" : "");
    bloc.innerHTML = "<b>" + noms[el.type] + (el.type === "mot" || el.type === "invention" || el.type === "punchline" ? " · " + echapper(el.titre) : "") + "</b>" +
      "<span>" + echapper(el.texte) + "</span>" +
      (el.contexte ? '<em class="carnet-contexte">« ' + echapper(el.contexte) + " »</em>" : "") +
      (el.type === "mot" && (el.source || el.date) ? '<small class="carnet-date">📓 ' + (el.date ? dateLisible(el.date) : "") + (el.source ? " · " + echapper(el.source) : "") + "</small>" : "") +
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
    if (ajoutsLimites() >= LIMITE_GRATUITE) { ouvrirPremium(); return; }
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
    if (ajoutsLimites() >= LIMITE_GRATUITE) { ouvrirPremium(); return; }
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

function definitionCourte(m) {
  // Le mot ne doit pas apparaître dans sa propre définition : il est remplacé par « … »
  const racine = m.mot.slice(0, Math.min(m.mot.length, 6)).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const d = m.definition.split(/[.;]/)[0].trim().replace(new RegExp(racine + "\\p{L}*", "giu"), "…");
  return d.length > 70 ? d.slice(0, 68).replace(/\s+\S*$/, "") + "…" : d;
}

// ---------- 🔗 Les alliances : relier un maximum de mots à leur définition en 60 secondes ----------
const LIGNES_ALLIANCE = 5, DUREE_ALLIANCE = 60;
const alliance = { file: [], gauche: [], droite: [], choixG: null, choixD: null, score: 0, paires: 0, combo: 0, erreurs: 0, fin: 0, minuteur: null, fini: true, vus: [] };

function reserveAlliances() {
  // D'abord les mots à revoir ou déjà vus (le jeu sert la mémorisation), puis des mots au hasard
  const melange = function (l) { return l.slice().sort(function () { return Math.random() - 0.5; }); };
  const vus = motsARevoir().concat(motsDejaVus()).filter(function (m) { return !m.perso; });
  // Version sombre : les alliances maudites, des insultes d'antan et d'argot
  const base = etat.maudit && insultesDisponibles().length ? melange(insultesDisponibles())
    : melange(vus).concat(melange(motsUtiles())).concat(melange(motsRaresDispo()));
  const pris = [], defs = {};
  base.forEach(function (m) {
    if (!m.definition || pris.indexOf(m) !== -1) return;
    const d = definitionCourte(m);
    if (defs[d]) return;
    defs[d] = true; pris.push(m);
  });
  return pris;
}

function rangAlliances(n) { return n >= 23 ? 4 : n >= 15 ? 3 : n >= 8 ? 2 : 1; }
function majPairesSous() { if (etat.pairesRecord) $("paires-sous").textContent = "Ton record : " + etat.pairesRecord + " alliances. Relie plus vite !"; }
majPairesSous();

function entreeAlliances() {
  $("titre-paires").textContent = etat.maudit ? "😈 Les alliances maudites" : "🔗 Les alliances";
  $("alliances").innerHTML =
    '<div class="alliance-intro"><p class="alliance-chaine" aria-hidden="true">🔗</p>' +
    '<p class="texte-doux">Touche un mot, puis sa définition. Chaque alliance s\'envole et une autre arrive. Enchaîne les bonnes réponses pour le combo ; une erreur coûte 3 secondes.</p>' +
    '<p class="petit">Ton record : <b>' + (etat.pairesRecord || 0) + "</b> alliances en 60 secondes</p>" +
    '<button class="bouton principal large" type="button" data-alliance="go">⏱️ C\'est parti !</button></div>';
}

function piocherAlliance() { return alliance.file.shift() || null; }

function lancerAlliances() {
  alliance.file = reserveAlliances();
  alliance.gauche = []; alliance.droite = []; alliance.vus = [];
  for (let i = 0; i < LIGNES_ALLIANCE; i++) { const m = piocherAlliance(); if (!m) break; alliance.gauche.push(m); alliance.droite.push(m); }
  alliance.droite.sort(function () { return Math.random() - 0.5; });
  alliance.choixG = null; alliance.choixD = null; alliance.score = 0; alliance.paires = 0; alliance.combo = 0; alliance.erreurs = 0; alliance.fini = false;
  alliance.fin = Date.now() + DUREE_ALLIANCE * 1000;
  rendreAlliances();
  sonBascule();
  clearInterval(alliance.minuteur);
  alliance.minuteur = setInterval(tictacAlliances, 100);
}

function tictacAlliances() {
  const reste = Math.max(0, (alliance.fin - Date.now()) / 1000);
  const b = $("alliance-temps"), t = $("alliance-secondes");
  if (b) { b.style.width = (reste / DUREE_ALLIANCE * 100) + "%"; b.classList.toggle("presse", reste < 10); }
  if (t) t.textContent = Math.ceil(reste) + " s";
  if (reste <= 0) finirAlliances();
}

function carteAlliance(m, cote, i) {
  if (!m) return '<span class="alliance-carte vide"></span>';
  const texte = cote === "g" ? m.mot : definitionCourte(m);
  const choisi = (cote === "g" ? alliance.choixG : alliance.choixD) === i;
  return '<button class="alliance-carte ' + (cote === "g" ? "mot" : "def") + (choisi ? " choisie" : "") + '" type="button" data-cote="' + cote + '" data-i="' + i + '">' + echapper(texte) + "</button>";
}

function rendreAlliances() {
  $("alliances").innerHTML =
    '<div class="alliance-haut"><span>✦ <b id="alliance-score">' + alliance.score + "</b></span>" +
      '<span class="alliance-combo" id="alliance-combo">' + (alliance.combo >= 2 ? "🔥 ×" + Math.min(5, alliance.combo) : "") + "</span>" +
      '<span id="alliance-secondes">' + Math.ceil(Math.max(0, (alliance.fin - Date.now()) / 1000)) + " s</span></div>" +
    '<div class="tour-temps-fond"><div class="tour-temps" id="alliance-temps"></div></div>' +
    '<div class="alliance-grille">' +
      '<div class="alliance-colonne">' + alliance.gauche.map(function (m, i) { return carteAlliance(m, "g", i); }).join("") + "</div>" +
      '<div class="alliance-colonne">' + alliance.droite.map(function (m, i) { return carteAlliance(m, "d", i); }).join("") + "</div>" +
    "</div>";
}

function essayerAlliance() {
  if (alliance.choixG === null || alliance.choixD === null) return;
  const g = alliance.gauche[alliance.choixG], d = alliance.droite[alliance.choixD];
  const bg = document.querySelector('[data-cote="g"][data-i="' + alliance.choixG + '"]');
  const bd = document.querySelector('[data-cote="d"][data-i="' + alliance.choixD + '"]');
  const ig = alliance.choixG, id = alliance.choixD;
  alliance.choixG = null; alliance.choixD = null;
  if (g === d) {
    alliance.combo++; alliance.paires++;
    const gain = Math.min(5, Math.max(1, alliance.combo));
    alliance.score += gain;
    alliance.vus.push(g);
    sonJuste(0);
    bg.classList.add("alliee"); bd.classList.add("alliee");
    const r = bd.getBoundingClientRect(); etincellesAuToucher(r.left + r.width / 2, r.top + r.height / 2, 8 + gain * 2);
    $("alliance-score").textContent = alliance.score;
    $("alliance-combo").textContent = alliance.combo >= 2 ? "🔥 ×" + Math.min(5, alliance.combo) : "";
    // L'alliance s'envole, une nouvelle arrive à sa place
    setTimeout(function () {
      if (alliance.fini) return;
      const nouveau = piocherAlliance();
      alliance.gauche[ig] = nouveau; alliance.droite[id] = nouveau;
      // La nouvelle définition n'arrive jamais en face de son mot : on l'échange avec une autre ligne
      if (nouveau && alliance.droite.length > 1) {
        const lignes = alliance.droite.map(function (_, k) { return k; }).filter(function (k) { return k !== ig && alliance.gauche[k] !== alliance.droite[id]; });
        if (lignes.length) {
          const j = lignes[Math.floor(Math.random() * lignes.length)];
          const x = alliance.droite[j]; alliance.droite[j] = alliance.droite[id]; alliance.droite[id] = x;
        }
      }
      if (!alliance.gauche.some(Boolean)) return finirAlliances();
      rendreAlliances(); tictacAlliances();
      document.querySelectorAll(".alliance-carte").forEach(function (c) {
        if (alliance.gauche[+c.dataset.i] === nouveau && c.dataset.cote === "g" || alliance.droite[+c.dataset.i] === nouveau && c.dataset.cote === "d") c.classList.add("arrive");
      });
    }, 380);
  } else {
    alliance.combo = 0; alliance.erreurs++;
    alliance.fin -= 3000;
    sonFaux(0);
    bg.classList.add("rate"); bd.classList.add("rate");
    $("alliance-combo").textContent = "−3 s";
    setTimeout(function () { if (!alliance.fini) { bg.classList.remove("rate", "choisie"); bd.classList.remove("rate", "choisie"); $("alliance-combo").textContent = ""; } }, 450);
  }
}

function finirAlliances() {
  if (alliance.fini) return;
  alliance.fini = true;
  clearInterval(alliance.minuteur);
  const n = alliance.paires, record = n > (etat.pairesRecord || 0);
  if (record) etat.pairesRecord = n;
  alliance.vus.forEach(function (m) { if (!m.perso) entrerEnRevision(m.mot); });
  etat.xp += alliance.score;
  sauver(); majCompteurs();
  const rang = rangAlliances(n);
  sonBoire(record || rang >= 3);
  if (record && n >= 8) feterAvecDesBraises();
  $("alliances").innerHTML =
    '<div class="alliance-intro"><span class="titre-sceau rang-' + rang + '">' + ["", "🥉", "🥈", "🥇", "🌟"][rang] + "</span>" +
    '<p class="titre-nom">' + n + " alliance" + (n > 1 ? "s" : "") + "</p>" +
    '<p class="texte-doux">' + (record ? "🏆 Nouveau record ! " : "Ton record : " + (etat.pairesRecord || 0) + ". ") + "+" + alliance.score + " ✦ · " + alliance.erreurs + " erreur" + (alliance.erreurs > 1 ? "s" : "") + "</p>" +
    (alliance.vus.length ? '<p class="petit gauche">Tes alliances, qui reviendront dans tes révisions : ' + alliance.vus.map(function (m) { return "<b>" + echapper(m.mot) + "</b>"; }).join(" · ") + "</p>" : "") +
    '<button class="bouton principal large" type="button" data-alliance="go">🔥 Encore !</button></div>';
  setTimeout(verifierTitres, 1500);
}

$("alliances").addEventListener("click", function (e) {
  if (e.target.closest('[data-alliance="go"]')) { lancerAlliances(); return; }
  const c = e.target.closest(".alliance-carte:not(.vide)");
  if (!c || alliance.fini || c.classList.contains("alliee")) return;
  const i = +c.dataset.i;
  if (c.dataset.cote === "g") alliance.choixG = alliance.choixG === i ? null : i;
  else alliance.choixD = alliance.choixD === i ? null : i;
  document.querySelectorAll('.alliance-carte[data-cote="' + c.dataset.cote + '"]').forEach(function (x) { x.classList.toggle("choisie", +x.dataset.i === (c.dataset.cote === "g" ? alliance.choixG : alliance.choixD)); });
  sonClic();
  essayerAlliance();
});

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

// ---------- Le duel d'insultes : chacun choisit sa botte, la déclame, et le public tranche ----------
const duel = { noms: ["", ""], manches: 3, manche: 1, tour: 0, scores: [0, 0], cartes: [], arme: "", premier: 0 };
const titresDuel = ["Grand Maraud de la soirée", "Prince des Faquins", "Maître d'armes de la langue", "Fine lame du verbe", "Cyrano du salon"];

function nomDuel(i) { return duel.noms[i] || (i === 0 ? "Duelliste d'or" : "Duelliste de sang"); }

// Trois armes au choix : une botte de duel, un clash, et une insulte d'antan à justifier
function armesDuel() {
  const a = [];
  if (typeof bottesDuel !== "undefined") a.push({ genre: "🤺 Botte", texte: auHasard(bottesDuel) });
  if (typeof clashs !== "undefined") a.push({ genre: "🗡️ Clash", texte: auHasard(clashs) });
  if (typeof insultesAntan !== "undefined") {
    const w = motParNom(auHasard(insultesAntan)) || { mot: "Maraud", definition: "Coquin, vaurien." };
    a.push({ genre: "📜 Insulte d'antan", texte: "Va, " + w.mot.toLowerCase() + " !", aide: w.definition + " Puis dis-lui pourquoi, en une phrase de ton cru." });
  }
  return a;
}

function rendreDuel(phase) {
  const z = $("duel");
  const qui = (duel.premier + duel.tour) % 2;
  const tableau = '<div class="duel-score"><span>' + echapper(nomDuel(0)) + " <b>" + duel.scores[0] + "</b></span><i>⚔️</i><span><b>" + duel.scores[1] + "</b> " + echapper(nomDuel(1)) + "</span></div>";
  if (phase === "reglage") {
    z.innerHTML =
      '<p class="petit gauche">Deux duellistes face à face, le public autour. À chaque manche, chacun choisit une arme, la déclame avec panache, les yeux dans les yeux. Le public désigne la plus belle touche.</p>' +
      '<label class="duel-champ">⚜️ Premier duelliste<input id="duel-nom-0" maxlength="20" placeholder="Duelliste d\'or" value="' + echapper(duel.noms[0]) + '"></label>' +
      '<label class="duel-champ">🩸 Second duelliste<input id="duel-nom-1" maxlength="20" placeholder="Duelliste de sang" value="' + echapper(duel.noms[1]) + '"></label>' +
      '<div class="garou-nombre"><button class="bouton petit-bouton' + (duel.manches === 3 ? " actif" : "") + '" type="button" data-duel="m3">3 manches</button>' +
      '<button class="bouton petit-bouton' + (duel.manches === 5 ? " actif" : "") + '" type="button" data-duel="m5">5 manches</button></div>' +
      '<button class="bouton principal large" type="button" data-duel="engarde">⚔️ En garde !</button>';
  } else if (phase === "armes") {
    duel.cartes = armesDuel();
    z.innerHTML = tableau +
      '<p class="petit">Manche ' + duel.manche + " sur " + duel.manches + "</p>" +
      '<p class="grimoire-titre">À toi, ' + echapper(nomDuel(qui)) + " : choisis ton arme</p>" +
      duel.cartes.map(function (c, i) {
        return '<button class="duel-arme" type="button" data-arme="' + i + '"><span class="etiquette">' + c.genre + "</span>" + echapper(c.texte) + "</button>";
      }).join("") +
      '<button class="bouton large" type="button" data-duel="improvise">✍️ J\'improvise ma propre botte</button>';
  } else if (phase === "tirade") {
    const c = duel.arme;
    z.innerHTML = tableau +
      '<p class="petit">' + echapper(nomDuel(qui)) + ", lève-toi et déclame :</p>" +
      '<p class="citation-grande duel-tirade">' + (c ? echapper(c.texte) : "Ta propre botte, de ton cru : surprends-nous.") + "</p>" +
      (c && c.aide ? '<p class="texte-doux">' + echapper(c.aide) + "</p>" : "") +
      '<p class="petit">Du panache : le ton, le regard, la pause avant la chute. Pas de rire !</p>' +
      '<button class="bouton principal large" type="button" data-duel="touche">🎯 Touché ! À l\'adversaire</button>';
  } else if (phase === "vote") {
    z.innerHTML = tableau +
      '<p class="grimoire-titre">Le public tranche</p>' +
      '<p class="texte-doux">Qui a porté la plus belle touche dans cette manche ? Levez la main, puis touchez le vainqueur.</p>' +
      '<div class="actions-pyramide"><button class="bouton principal" type="button" data-vote="0">⚜️ ' + echapper(nomDuel(0)) + "</button>" +
      '<button class="bouton principal" type="button" data-vote="1">🩸 ' + echapper(nomDuel(1)) + "</button>" +
      '<button class="bouton" type="button" data-vote="egalite">🤝 Égalité</button></div>';
  } else if (phase === "fin") {
    const egal = duel.scores[0] === duel.scores[1];
    const g = duel.scores[0] > duel.scores[1] ? 0 : 1;
    z.innerHTML = tableau +
      '<div class="garou-role"><span class="garou-icone">' + (egal ? "🤝" : "👑") + "</span>" +
      (egal
        ? '<p class="grimoire-titre">Égalité parfaite</p><p class="texte-doux">Deux lames de même trempe. L\'honneur est sauf… pour cette fois.</p>'
        : '<p class="grimoire-titre">' + echapper(nomDuel(g)) + " l'emporte !</p><p class=\"texte-doux\">Sacré « " + auHasard(titresDuel) + " ». " + echapper(nomDuel(1 - g)) + " rengaine sa langue et boit la coupe de la défaite.</p>") +
      "</div>" +
      '<div class="actions-pyramide"><button class="bouton principal" type="button" data-duel="revanche">🔥 Revanche !</button>' +
      '<button class="bouton" type="button" data-duel="reglage">↺ Nouveaux duellistes</button></div>';
  }
}

function lancerManchesDuel() { duel.manche = 1; duel.tour = 0; duel.scores = [0, 0]; duel.premier = Math.random() < 0.5 ? 0 : 1; rendreDuel("armes"); }

$("duel").addEventListener("click", function (ev) {
  const arme = ev.target.closest("[data-arme]");
  if (arme) { duel.arme = duel.cartes[+arme.dataset.arme]; sonRetourne(); rendreDuel("tirade"); return; }
  const v = ev.target.closest("[data-vote]");
  if (v) {
    if (v.dataset.vote !== "egalite") { duel.scores[+v.dataset.vote]++; sonJuste(0); }
    if (duel.manche >= duel.manches) {
      sonBoire(true); rendreDuel("fin");
      etat.duels = (etat.duels || 0) + 1; sauver(); setTimeout(verifierTitres, 1800);
      return;
    }
    duel.manche++; duel.tour = 0; duel.premier = 1 - duel.premier; rendreDuel("armes");
    return;
  }
  const b = ev.target.closest("[data-duel]");
  if (!b) return;
  const a = b.dataset.duel;
  if (a === "m3" || a === "m5") { duel.noms = [$("duel-nom-0").value.trim(), $("duel-nom-1").value.trim()]; duel.manches = a === "m3" ? 3 : 5; rendreDuel("reglage"); }
  else if (a === "engarde") { duel.noms = [$("duel-nom-0").value.trim(), $("duel-nom-1").value.trim()]; sonBascule(); lancerManchesDuel(); }
  else if (a === "improvise") { duel.arme = null; rendreDuel("tirade"); }
  else if (a === "touche") {
    if (duel.tour === 0) { duel.tour = 1; rendreDuel("armes"); }
    else rendreDuel("vote");
  }
  else if (a === "revanche") lancerManchesDuel();
  else if (a === "reglage") rendreDuel("reglage");
});
$("ouvrir-duel").addEventListener("click", function () { rendreDuel("reglage"); $("fenetre-duel").hidden = false; });
$("fermer-duel").addEventListener("click", function () { $("fenetre-duel").hidden = true; });
$("fenetre-duel").addEventListener("click", function (e) { if (e.target === $("fenetre-duel")) $("fenetre-duel").hidden = true; });

// ---------- Le loup-garou maudit : l'appli distribue les rôles, puis elle mène la partie ----------
const rolesGarou = {
  loup: ["🐺", "Loup-garou", "Chaque nuit, avec les autres loups, tu dévores un villageois. Le jour, tu mens avec aplomb. Tu gagnes quand les loups sont aussi nombreux que les vivants."],
  voyante: ["🔮", "La voyante", "Chaque nuit, tu désignes un joueur et le meneur te montre en silence s'il est loup. Aide le village sans te faire repérer."],
  sorciere: ["🧪", "La sorcière", "Tu as deux fioles : un élixir de vie pour sauver la victime de la nuit, et un poison pour tuer qui tu veux. Chacune ne sert qu'une fois."],
  chasseur: ["🏹", "Le chasseur", "Si tu meurs, de nuit comme de jour, tu tires une dernière flèche : tu emportes quelqu'un avec toi dans la tombe."],
  villageois: ["🕯️", "Villageois", "Tu n'as que ta langue et ta jugeote. Démasque les loups au grand jour, et vote pour les pendre."]
};
const garouCrepuscules = [
  "La lune se lève, ronde et pâle comme un linceul. Les volets claquent, le village s'endort.",
  "Le brouillard monte du cimetière. Quelque part, un chien hurle, puis se tait d'un coup.",
  "Les cloches sonnent minuit, une de trop. Personne n'ose compter.",
  "La forêt respire. Les chandelles s'éteignent une à une, sans un souffle de vent.",
  "Le corbeau s'est posé sur le clocher. Il attend. Il sait.",
  "Ce soir, la lune est rousse. Les anciens disaient que c'est la couleur de la faim."
];
const garouAubes = [
  "Le coq n'a pas chanté ce matin. Il a vu quelque chose.",
  "On a retrouvé des traces de griffes sur la porte de l'église, et la neige est rouge devant le puits.",
  "Une odeur de fer et de terre mouillée flotte sur la place. Le village se réveille… presque en entier.",
  "Le boulanger a trouvé un sabot dans le pétrin. Juste un sabot.",
  "Les corbeaux tournent au-dessus d'une maison. Ils ne tournent jamais pour rien.",
  "La rosée a un goût de sang. Quelqu'un ne descendra pas déjeuner."
];
const garou = { joueurs: 8, roles: [], tour: 0, devoile: false, etape: 0, nuit: 0, minuteur: null };

function compositionGarou(n) {
  const loups = n <= 6 ? 1 : n <= 11 ? 2 : 3;
  const r = [];
  for (let i = 0; i < loups; i++) r.push("loup");
  r.push("voyante");
  if (n >= 6) r.push("sorciere");
  if (n >= 7) r.push("chasseur");
  while (r.length < n) r.push("villageois");
  for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = r[i]; r[i] = r[j]; r[j] = t; }
  return r;
}

function compteGarou(roles) {
  const c = {};
  roles.forEach(function (x) { c[x] = (c[x] || 0) + 1; });
  return Object.keys(rolesGarou).filter(function (k) { return c[k]; })
    .map(function (k) { return rolesGarou[k][0] + " " + rolesGarou[k][1] + (c[k] > 1 ? " × " + c[k] : ""); }).join(" · ");
}

function arreterMinuteurGarou() { if (garou.minuteur) { clearInterval(garou.minuteur); garou.minuteur = null; } }

// Les étapes d'une nuit, puis du jour, lues à voix haute par le meneur
// Le défi des mots : un mot de passe secret pour les loups, un mot public pour brouiller les pistes
function deuxMotsGarou() {
  const liste = motsRaresDispo().filter(function (m) { return m.definition && /^[A-Za-zÀ-ÿ-]{5,13}$/.test(m.mot); });
  const a = auHasard(liste); let b = auHasard(liste);
  while (b === a && liste.length > 1) b = auHasard(liste);
  return { loups: a, village: b };
}
function encartMot(icone, titre, m, classe) {
  return '<div class="garou-mot ' + classe + '"><p class="etiquette">' + icone + " " + titre + '</p><p class="garou-mot-nom">' + echapper(m.mot) + '</p><p class="petit">' + echapper(m.definition) + "</p></div>";
}

function etapesGarou() {
  const a = garou.roles;
  const mots = garou.mots = deuxMotsGarou();
  const e = [
    { titre: "🌕 Nuit " + garou.nuit, texte: auHasard(garouCrepuscules) + " Tout le monde ferme les yeux." }
  ];
  if (a.indexOf("voyante") !== -1) e.push({ titre: "🔮 La voyante", texte: "Voyante, ouvre les yeux. Désigne du doigt celui dont tu veux connaître l'âme. (Meneur : montre-lui en silence, pouce en haut si c'est un loup.) Voyante, referme les yeux." });
  e.push({ titre: "🐺 Les loups", texte: "Loups-garous, ouvrez les yeux. Reconnaissez-vous, et choisissez en silence votre victime de la nuit. (Meneur : retiens-la, puis tourne l'écran vers les loups pour leur montrer le mot de passe.) Demain, au procès, vous devrez le glisser dans vos phrases sans vous faire prendre. Loups, refermez les yeux, et essuyez vos babines.",
    encart: encartMot("🤫", "Mot de passe des loups · secret", mots.loups, "secret") });
  if (a.indexOf("sorciere") !== -1) e.push({ titre: "🧪 La sorcière", texte: "Sorcière, ouvre les yeux. (Meneur : montre-lui la victime.) Veux-tu verser ton élixir de vie pour la sauver ? Veux-tu verser ton poison sur quelqu'un ? Sorcière, referme les yeux." });
  e.push({ titre: "🌫️ L'aube", texte: auHasard(garouAubes) + " Tout le monde ouvre les yeux. (Meneur : annonce qui est mort cette nuit, et la victime retourne sa carte. Si c'est le chasseur, il tire sa dernière flèche.) Puis lis à voix haute le mot du village : chacun peut l'employer pour brouiller les pistes.",
    encart: encartMot("📣", "Mot du village · public", mots.village, "public") });
  e.push({ titre: "⚖️ Le procès", texte: "Le village a trois minutes pour démasquer les loups. Accusez, défendez-vous, mentez. Les loups doivent glisser leur mot de passe dans une phrase. Si tu crois l'entendre, crie « Mot de passe ! » en désignant celui qui vient de parler : si c'était bien le mot secret, ce loup est pendu sur-le-champ ; sinon, tu te tais jusqu'au vote. Au signal, tout le monde pointe du doigt un suspect : le plus désigné est pendu et révèle son rôle.", minuteur: 180 });
  e.push({ titre: "⚰️ Le verdict", texte: "Meneur, révèle à tous le mot de passe des loups, ci-dessous. Si aucun loup n'a réussi à le placer, les loups ne pourront pas tuer la nuit prochaine. Les villageois gagnent quand le dernier loup est mort ; les loups gagnent quand ils sont aussi nombreux que les vivants. Sinon… la nuit retombe.",
    encart: encartMot("🔓", "Le mot de passe était", mots.loups, "revele") });
  return e;
}

function rendreGarou(phase) {
  arreterMinuteurGarou();
  const z = $("garou");
  if (phase === "reglage") {
    z.innerHTML =
      '<p class="petit gauche">Il faut un meneur, qui ne joue pas : il tient le téléphone et lit l\'histoire à voix haute. Les autres jouent.</p>' +
      '<div class="garou-nombre"><button class="bouton petit-bouton" type="button" data-garou="moins" aria-label="Un joueur de moins">−</button>' +
      "<strong>" + garou.joueurs + " joueurs</strong>" +
      '<button class="bouton petit-bouton" type="button" data-garou="plus" aria-label="Un joueur de plus">+</button></div>' +
      '<p class="petit">Rôles tirés au sort parmi : ' + compteGarou(compositionGarou(garou.joueurs).sort()) + "</p>" +
      '<button class="bouton principal large" type="button" data-garou="distribuer">🃏 Distribuer les rôles</button>';
  } else if (phase === "distribution") {
    const r = rolesGarou[garou.roles[garou.tour]];
    z.innerHTML = garou.devoile
      ? '<div class="garou-role"><span class="garou-icone">' + r[0] + '</span><p class="grimoire-titre">' + echapper(r[1]) + '</p><p class="texte-doux">' + echapper(r[2]) + "</p></div>" +
        '<button class="bouton principal large" type="button" data-garou="cacher">🙈 J\'ai retenu, je cache</button>'
      : '<p class="garou-tour">Joueur ' + (garou.tour + 1) + " sur " + garou.joueurs + "</p>" +
        '<p class="petit">Prends le téléphone, cache l\'écran aux autres, puis touche le bouton.</p>' +
        '<button class="bouton principal large" type="button" data-garou="voir">👁️ Voir mon rôle</button>';
  } else if (phase === "partie") {
    const etapes = etapesGarou.cache || (etapesGarou.cache = etapesGarou());
    const e = etapes[garou.etape];
    z.innerHTML =
      '<p class="petit">Meneur, lis à voix haute · étape ' + (garou.etape + 1) + " sur " + etapes.length + "</p>" +
      '<p class="grimoire-titre">' + e.titre + "</p>" +
      '<p class="citation-grande garou-recit">' + echapper(e.texte) + "</p>" +
      (e.encart || "") +
      (e.minuteur ? '<p class="garou-chrono" id="garou-chrono">3:00</p><button class="bouton petit-bouton" type="button" data-garou="chrono">⏳ Lancer le sablier</button>' : "") +
      '<div class="actions-pyramide">' +
      (garou.etape < etapes.length - 1
        ? '<button class="bouton principal" type="button" data-garou="suivant">Étape suivante</button>'
        : '<button class="bouton principal" type="button" data-garou="nuit">🌕 La nuit retombe</button>') +
      '<button class="bouton" type="button" data-garou="roles">📜 Les rôles</button>' +
      '<button class="bouton" type="button" data-garou="reglage">↺ Nouvelle partie</button></div>' +
      '<p class="petit gauche" id="garou-roles" hidden>Dans cette partie : ' + compteGarou(garou.roles.slice().sort()) + ".</p>";
  }
}

$("garou").addEventListener("click", function (ev) {
  const b = ev.target.closest("[data-garou]");
  if (!b) return;
  const a = b.dataset.garou;
  if (a === "moins" || a === "plus") { garou.joueurs = Math.max(5, Math.min(16, garou.joueurs + (a === "plus" ? 1 : -1))); rendreGarou("reglage"); }
  else if (a === "reglage") rendreGarou("reglage");
  else if (a === "distribuer") { garou.roles = compositionGarou(garou.joueurs); garou.tour = 0; garou.devoile = false; rendreGarou("distribution"); }
  else if (a === "voir") { garou.devoile = true; sonRetourne(); rendreGarou("distribution"); }
  else if (a === "cacher") {
    garou.devoile = false; garou.tour++;
    if (garou.tour < garou.joueurs) rendreGarou("distribution");
    else {
      garou.nuit = 1; garou.etape = 0; etapesGarou.cache = null; rendreGarou("partie");
      etat.garous = (etat.garous || 0) + 1; sauver(); setTimeout(verifierTitres, 600);
    }
  }
  else if (a === "suivant") { garou.etape++; rendreGarou("partie"); }
  else if (a === "nuit") { garou.nuit++; garou.etape = 0; etapesGarou.cache = null; sonBascule(); rendreGarou("partie"); }
  else if (a === "roles") { $("garou-roles").hidden = !$("garou-roles").hidden; }
  else if (a === "chrono") {
    arreterMinuteurGarou();
    let reste = 180;
    b.hidden = true;
    garou.minuteur = setInterval(function () {
      reste--;
      const c = $("garou-chrono");
      if (!c) { arreterMinuteurGarou(); return; }
      c.textContent = Math.floor(reste / 60) + ":" + String(reste % 60).padStart(2, "0");
      if (reste <= 0) { arreterMinuteurGarou(); c.textContent = "⚖️ Votez !"; sonFaux(0); }
    }, 1000);
  }
});
$("ouvrir-garou").addEventListener("click", function () { rendreGarou("reglage"); $("fenetre-garou").hidden = false; });
$("fermer-garou").addEventListener("click", function () { arreterMinuteurGarou(); $("fenetre-garou").hidden = true; });
$("fenetre-garou").addEventListener("click", function (e) { if (e.target === $("fenetre-garou")) { arreterMinuteurGarou(); $("fenetre-garou").hidden = true; } });

$("ouvrir-paires").addEventListener("click", function () {
  entreeAlliances();
  $("fenetre-paires").hidden = false;
});
function fermerAlliances() { clearInterval(alliance.minuteur); alliance.fini = true; $("fenetre-paires").hidden = true; majPairesSous(); }
$("fermer-paires").addEventListener("click", fermerAlliances);
$("fenetre-paires").addEventListener("click", function (e) { if (e.target === $("fenetre-paires")) fermerAlliances(); });

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

// ===== Que lire ensuite ? (livres.js) : des livres choisis à la main, selon les thèmes qu'on aime =====
let vueLivres = "conseils";
function livresDispo() { return typeof livres !== "undefined" ? livres : []; }
function anneeLivre(a) { return a < 0 ? "vers " + (-a) + " av. J.-C." : (a < 200 ? "vers " + a : String(a)); }
function livresPourToi() {
  const themes = etat.themesLivres || [];
  const lus = etat.livresLus || [];
  return livresDispo().filter(function (l) { return lus.indexOf(l.titre) === -1; }).map(function (l) {
    const communs = l.themes.filter(function (t) { return themes.indexOf(t) !== -1; }).length;
    return { l: l, score: (themes.length ? communs * 2 : 1) + (l.carnet === "liste" ? 1 : 0) };
  }).filter(function (x) { return !themes.length || x.score >= 2; })
    .sort(function (a, b) { return b.score - a.score || ((a.l.titre.length * 7 + numeroJour) % 13) - ((b.l.titre.length * 7 + numeroJour) % 13); })
    .map(function (x) { return x.l; });
}

function widgetLivre() {
  const liste = livresPourToi();
  if (!liste.length) return "";
  const l = liste[numeroJour % Math.min(liste.length, 8)];
  const phrase = (l.accroche.match(/^.*?[.!?…](\s|$)/) || [l.accroche])[0].trim();
  return '<article class="widget widget-livre" id="widget-livre" role="button" tabindex="0">' +
    '<p class="etiquette">📚 Le livre du jour' + (l.carnet === "liste" ? " · sur ta liste" : "") + "</p>" +
    '<p class="grimoire-titre">' + echapper(l.titre) + '</p><p class="petit">' + echapper(l.auteur) + "</p>" +
    '<p class="texte-doux">' + echapper(phrase) + "</p>" +
    '<p class="petit">Touche pour la suite, et d\'autres livres selon tes thèmes →</p></article>';
}

function carteLivre(l) {
  const pile = (etat.livresPile || []).indexOf(l.titre) !== -1;
  const lu = (etat.livresLus || []).indexOf(l.titre) !== -1;
  const badge = l.carnet === "lu" ? '<span class="livre-badge">📓 Lu et pillé pour le carnet</span>' :
    (l.carnet === "liste" ? '<span class="livre-badge">📌 Sur ta liste à lire</span>' : "");
  const themes = l.themes.map(function (t) { const d = themesLivres.find(function (x) { return x[0] === t; }); return d ? d[1] : ""; }).join(" ");
  return '<article class="livre">' + badge +
    '<p class="livre-titre">' + echapper(l.titre) + "</p>" +
    '<p class="livre-auteur">' + echapper(l.auteur) + " · " + anneeLivre(l.annee) + " · " + l.format + " " + themes + "</p>" +
    '<p class="livre-accroche">' + echapper(l.accroche) + "</p>" +
    (l.siTuAimes ? '<p class="fiche-part"><b>💫 Si tu aimes</b> ' + echapper(l.siTuAimes) + "</p>" : "") +
    (l.entree ? '<p class="fiche-part"><b>🚪 Par où entrer</b> ' + echapper(l.entree) + "</p>" : "") +
    (l.liens && l.liens.length ? '<p class="fiche-part"><b>🔗 Dans l\'appli</b> ' + l.liens.map(function (m) {
      return '<button class="puce livre-lien" type="button" data-lien="' + echapper(m) + '">' + echapper(m) + "</button>";
    }).join(" ") + "</p>" : "") +
    '<div class="actions-carte">' +
      '<button class="bouton petit-bouton" type="button" data-pile="' + echapper(l.titre) + '">' + (pile ? "📌 Dans ma pile" : "📌 Je le note") + "</button>" +
      '<button class="bouton petit-bouton" type="button" data-lu="' + echapper(l.titre) + '">' + (lu ? "✓ Lu" : "Je l'ai lu") + "</button>" +
    "</div></article>";
}

function rendreLivres() {
  const choisis = etat.themesLivres || [];
  $("livres-themes").innerHTML = themesLivres.map(function (t) {
    return '<button class="puce' + (choisis.indexOf(t[0]) !== -1 ? " active" : "") + '" type="button" data-theme="' + t[0] + '">' + t[1] + " " + echapper(t[2]) + "</button>";
  }).join("");
  document.querySelectorAll(".livres-onglets .puce").forEach(function (p) { p.classList.toggle("active", p.dataset.vue === vueLivres); });
  let liste, vide;
  if (vueLivres === "pile") {
    liste = livresDispo().filter(function (l) { return (etat.livresPile || []).indexOf(l.titre) !== -1; });
    vide = "Ta pile est vide. Note un livre qui te fait envie avec 📌 : il t'attendra ici.";
  } else if (vueLivres === "lus") {
    liste = livresDispo().filter(function (l) { return (etat.livresLus || []).indexOf(l.titre) !== -1; });
    vide = "Pas encore de livre coché. Chaque livre lu rapporte 20 ✦.";
  } else {
    liste = livresPourToi();
    vide = "Aucun livre pour ce mélange de thèmes… pour l'instant. Essaie d'en ajouter un autre.";
  }
  $("livres-liste").innerHTML = liste.length ? liste.map(carteLivre).join("") : '<p class="petit">' + vide + "</p>";
}

function ouvrirLivres() { vueLivres = "conseils"; rendreLivres(); $("fenetre-livres").hidden = false; $("livres-liste").scrollTop = 0; }
$("widgets").addEventListener("click", function (e) { if (e.target.closest("#widget-livre")) ouvrirLivres(); });
$("widgets").addEventListener("keydown", function (e) { if (e.key === "Enter" && e.target.closest("#widget-livre")) ouvrirLivres(); });
$("fermer-livres").addEventListener("click", function () { $("fenetre-livres").hidden = true; majWidgets(); });
$("fenetre-livres").addEventListener("click", function (e) {
  if (e.target === $("fenetre-livres")) { $("fenetre-livres").hidden = true; majWidgets(); return; }
  const b = e.target.closest("button");
  if (!b) return;
  const basculer = function (cle, valeur) {
    etat[cle] = etat[cle] || [];
    const i = etat[cle].indexOf(valeur);
    if (i === -1) etat[cle].push(valeur); else etat[cle].splice(i, 1);
    return i === -1;
  };
  if (b.dataset.theme) { basculer("themesLivres", b.dataset.theme); vueLivres = "conseils"; }
  else if (b.dataset.vue) vueLivres = b.dataset.vue;
  else if (b.dataset.pile) basculer("livresPile", b.dataset.pile);
  else if (b.dataset.lu) {
    const ajoute = basculer("livresLus", b.dataset.lu);
    if (ajoute) {
      const i = (etat.livresPile || []).indexOf(b.dataset.lu);
      if (i !== -1) etat.livresPile.splice(i, 1);
      etat.livresRecompenses = etat.livresRecompenses || [];
      if (etat.livresRecompenses.indexOf(b.dataset.lu) === -1) {
        etat.livresRecompenses.push(b.dataset.lu);
        etat.xp += 20; $("xp").textContent = etat.xp;
        sonBoire(true);
        const r = b.getBoundingClientRect(); etincellesAuToucher(r.left + r.width / 2, r.top, 24);
      }
    }
  } else if (b.dataset.lien) {
    const m = tousLesMots().find(function (x) { return x.mot === b.dataset.lien; });
    if (m) return ouvrirFiche(m);
    const c = conceptsDispo.find(function (x) { return x.nom === b.dataset.lien; });
    if (c) ouvrirFicheConcept(c);
    return;
  } else return;
  sauver();
  rendreLivres();
});

// ===== La belle phrase du jour (phrases.js) : une tournure élégante, la scène où la placer, son secret =====
var decalPhrase = 0; // var : le widget peut être dessiné avant cette ligne
function widgetPhrase() {
  const liste = typeof bellesPhrases !== "undefined" ? bellesPhrases : [];
  if (!liste.length) return "";
  const p = liste[(numeroJour + (decalPhrase || 0)) % liste.length];
  return '<article class="widget widget-phrase" id="widget-phrase">' +
    '<p class="etiquette">🖋️ La belle phrase ' + (decalPhrase ? "à placer" : "du jour") + "</p>" +
    '<p class="phrase-belle">« ' + echapper(p.phrase) + " »</p>" +
    '<p class="fiche-part"><b>🎯 À dégainer</b> ' + echapper(p.quand) + "</p>" +
    '<p class="fiche-part"><b>✨ Son secret</b> ' + echapper(p.secret) + "</p>" +
    '<div class="actions-carte"><button class="bouton petit-bouton" type="button" data-phrase="ecouter">🔊 Écouter</button>' +
    '<button class="bouton petit-bouton" type="button" data-phrase="autre">🎲 Une autre</button></div></article>';
}
$("widgets").addEventListener("click", function (e) {
  const b = e.target.closest("[data-phrase]");
  if (!b) return;
  const liste = bellesPhrases;
  if (b.dataset.phrase === "ecouter") { parler(liste[(numeroJour + (decalPhrase || 0)) % liste.length].phrase, "fr-FR"); return; }
  decalPhrase = (decalPhrase + 1 + Math.floor(Math.random() * (liste.length - 1))) % liste.length || 1;
  const w = $("widget-phrase");
  if (w) { w.insertAdjacentHTML("afterend", widgetPhrase()); w.remove(); }
});

// ===== 🔮 L'oracle des mots (oracle.js) : trois cartes du jour, passé, présent, avenir =====
// Le tirage est le même toute la journée ; il pioche d'abord dans TES mots (carnet, favoris), puis dans le dictionnaire.
var POSITIONS_ORACLE = [["passe", "Le passé"], ["present", "Le présent"], ["avenir", "L'avenir"]];
function tirageOracle() {
  const rnd = hasardGraine(numeroJour * 7919 + 13);
  const tous = tousLesMots().filter(function (m) { return m.definition && m.mot.length <= 22; });
  const miens = tous.filter(function (m) { return m.perso || (etat.favoris || []).indexOf(m.mot) !== -1; });
  const rares = motsRaresDispo().filter(function (m) { return m.definition && m.mot.length <= 22; });
  const pris = [], cartes = [];
  POSITIONS_ORACLE.forEach(function (p, k) {
    const source = (k === 1 && miens.length) ? miens : (rares.length > 10 ? rares : tous);
    let m, essai = 0;
    do { m = source[Math.floor(rnd() * source.length)]; essai++; } while (pris.indexOf(m.mot) !== -1 && essai < 20);
    pris.push(m.mot);
    const a = arcanes[Math.floor(rnd() * arcanes.length)];
    const o = oracles[p[0]][Math.floor(rnd() * oracles[p[0]].length)];
    cartes.push({ pos: p[1], arcane: a, mot: m, oracle: o.replace("{mot}", "« " + m.mot + " »") });
  });
  return cartes;
}
function etatOracle() {
  if (!etat.oracle || etat.oracle.jour !== aujourdhui) etat.oracle = { jour: aujourdhui, vues: [], recompense: false };
  return etat.oracle;
}
// ----- L'horoscope des mots (astro.js) : ton signe, la vraie Lune du jour, ton horoscope façon influenceuse astro -----
function luneDuJour() {
  const jd = Date.UTC(maintenant.getFullYear(), maintenant.getMonth(), maintenant.getDate(), 12) / 86400000 + 2440587.5;
  const age = ((jd - 2451550.1) % 29.530588853 + 29.530588853) % 29.530588853;
  return lunes[Math.floor(age / 29.530588853 * 8 + 0.5) % 8];
}
function motAstro(liste, rnd) {
  const ok = liste.filter(function (m) { return typeof fiches === "undefined" || fiches[m]; });
  return ok[Math.floor(rnd() * ok.length)];
}
function horoscopeDuJour(i) {
  const s = signes[i], rnd = hasardGraine(numeroJour * 104729 + i * 7907 + 3), lune = luneDuJour();
  const vibe = motAstro(vibesAstro, rnd), red = motAstro(redflagsAstro, rnd);
  const cartes = tirageOracle(), mot = cartes[1].mot.mot;
  const remplir = function (t) { return t.replace(/\{signe\}/g, s.nom).replace(/\{vibe\}/g, vibe).replace(/\{redflag\}/g, red).replace(/\{mot\}/g, mot).replace(/\{lune\}/g, lune.nom.toLowerCase()); };
  const pioche = function (l) { return l[Math.floor(rnd() * l.length)]; };
  const amis = signes.filter(function (x, k) { return k !== i && affinites[s.element].indexOf(x.element) !== -1; });
  const etoiles = function () { return 2 + Math.floor(rnd() * 4); };
  return { signe: s, lune: lune, vibe: vibe, red: red, mot: mot, match: pioche(amis),
    intro: remplir(pioche(horoscopes.intro)), amour: remplir(pioche(horoscopes.amour)), taf: remplir(pioche(horoscopes.taf)),
    scores: [["💞 Amour", etoiles()], ["💼 Taf", etoiles()], ["⚡ Énergie", etoiles()]] };
}
function lienMotAstro(m) { return '<button class="lien-mot" type="button" data-oracle-mot="' + echapper(m) + '">' + echapper(m) + "</button>"; }
function blocHoroscope() {
  if (typeof signes === "undefined") return "";
  if (etat.signe === undefined || etat.signe === null || etat.choixSigne) {
    return '<p class="petit">Dis-moi ton signe, et chaque jour je te tire ton horoscope… avec nos mots.</p>' +
      '<div class="astro-signes">' + signes.map(function (s, k) {
        return '<button class="astro-signe' + (etat.signe === k ? " actif" : "") + '" type="button" data-signe="' + k + '"><span class="astro-glyphe">' + s.icone + "︎</span><span>" + s.nom + '</span><span class="astro-dates">' + s.dates + "</span></button>";
      }).join("") + "</div>";
  }
  const h = horoscopeDuJour(etat.signe), s = h.signe;
  return '<div class="astro-carte">' +
      '<p class="astro-entete"><span class="astro-glyphe-grand">' + s.icone + "︎</span><span><b>" + s.nom + "</b><br><span class=\"astro-dates\">" + dateLisible(aujourdhui) + " · " + h.lune.icone + " " + h.lune.nom + "</span></span></p>" +
      '<p class="astro-intro">' + echapper(h.intro) + "</p>" +
      '<div class="astro-scores">' + h.scores.map(function (x) { return '<span class="astro-score">' + x[0] + " " + "✦".repeat(x[1]) + '<span class="astro-vide">' + "✦".repeat(5 - x[1]) + "</span></span>"; }).join("") + "</div>" +
      '<p class="astro-ligne"><b>💞 Amour</b> ' + echapper(h.amour) + "</p>" +
      '<p class="astro-ligne"><b>💼 Taf</b> ' + echapper(h.taf) + "</p>" +
      '<div class="astro-puces">' +
        '<p>💅 <b>Ta vibe</b><br>' + lienMotAstro(h.vibe) + "</p>" +
        '<p>🚩 <b>Red flag</b><br>' + lienMotAstro(h.red) + "</p>" +
        '<p>🍀 <b>Porte-bonheur</b><br>' + lienMotAstro(h.mot) + "</p>" +
        '<p>💫 <b>Ton match</b><br>' + h.match.icone + " " + h.match.nom + "</p>" +
      "</div>" +
      '<p class="astro-ligne"><b>' + h.lune.icone + " Rituel de la lune</b> " + echapper(h.lune.rituel) + "</p>" +
    "</div>" +
    '<details class="astro-portrait"><summary>' + s.icone + " Ton portrait " + s.nom + "</summary><p>" + echapper(s.portrait) + "</p>" +
      '<p class="petit gauche">Ton mot totem : ' + lienMotAstro(s.totem) + " · ton red flag signature : " + lienMotAstro(s.redflag) + "</p>" +
      '<button class="bouton large" type="button" data-signe-changer="1">Changer de signe</button></details>' +
    '<p class="petit astro-rappel">🌙 Pour jouer : les astres ne décident de rien. Les mots, si.</p>';
}
function widgetOracle() {
  if (typeof arcanes === "undefined") return "";
  const o = etatOracle(), cartes = tirageOracle(), toutes = o.vues.length === 3;
  return '<article class="widget widget-oracle" id="widget-oracle">' +
    '<p class="etiquette">🔮 Ton horoscope des mots</p>' +
    blocHoroscope() +
    '<p class="etiquette-petite astro-titre-tirage">🃏 Ton tirage du jour</p>' +
    '<p class="petit">' + (toutes ? "Les cartes ont parlé. Reviens demain pour un nouveau tirage." : "Trois cartes t'attendent, face cachée. Touche-les pour les retourner.") + "</p>" +
    '<div class="oracle-cartes">' + cartes.map(function (c, k) {
      const vue = o.vues.indexOf(k) !== -1;
      return '<button class="oracle-carte' + (vue ? " retournee" : "") + '" type="button" data-oracle="' + k + '" aria-label="' + c.pos + '">' +
        '<span class="oracle-dos"><span class="oracle-sceau">✦</span><span class="oracle-pos">' + c.pos + "</span></span>" +
        '<span class="oracle-face"><span class="oracle-icone">' + c.arcane.icone + '</span><span class="oracle-arcane">' + echapper(c.arcane.nom) + '</span><span class="oracle-mot">' + echapper(c.mot.mot) + "</span></span>" +
        "</button>";
    }).join("") + "</div>" +
    '<div class="oracle-lecture">' + cartes.map(function (c, k) {
      return o.vues.indexOf(k) === -1 ? "" :
        '<div class="oracle-ligne"><p class="fiche-part"><b>' + c.arcane.icone + " " + c.pos + " · " + echapper(c.arcane.nom) + "</b> " + echapper(c.arcane.sens) + "</p>" +
        '<p class="oracle-parole">' + echapper(c.oracle) + "</p>" +
        '<p class="petit gauche"><button class="lien-mot" type="button" data-oracle-mot="' + echapper(c.mot.mot) + '">' + echapper(c.mot.mot) + "</button> : " + echapper(c.mot.definition) + "</p></div>";
    }).join("") +
    (toutes ? '<p class="oracle-mission">✨ Ta mission du jour : placer « ' + echapper(cartes[1].mot.mot) + " » dans une conversation avant ce soir.</p>" : "") + "</div></article>";
}
$("widgets").addEventListener("click", function (e) {
  const mot = e.target.closest("[data-oracle-mot]");
  if (mot) { const m = tousLesMots().filter(function (x) { return x.mot === mot.dataset.oracleMot; })[0]; if (m) ouvrirFiche(m); return; }
  const sg = e.target.closest("[data-signe]"), ch = e.target.closest("[data-signe-changer]");
  if (sg || ch) {
    if (sg) { etat.signe = Number(sg.dataset.signe); etat.choixSigne = false; sonFiole(); } else etat.choixSigne = true;
    sauver();
    const w = $("widget-oracle"); if (w) { w.insertAdjacentHTML("afterend", widgetOracle()); w.remove(); }
    return;
  }
  const b = e.target.closest("[data-oracle]");
  if (!b) return;
  const o = etatOracle(), k = Number(b.dataset.oracle);
  if (o.vues.indexOf(k) !== -1) return;
  o.vues.push(k);
  sonFiole();
  const r = b.getBoundingClientRect(); etincellesAuToucher(r.left + r.width / 2, r.top + r.height / 2, 14);
  if (o.vues.length === 3 && !o.recompense) { o.recompense = true; etat.xp += 3; $("xp").textContent = etat.xp; }
  sauver();
  b.classList.add("retournee");
  setTimeout(function () { const w = $("widget-oracle"); if (w) { w.insertAdjacentHTML("afterend", widgetOracle()); w.remove(); } }, 650);
});
appliquerVersion();
chercherPeintre();
majFormulaire();
majCompteurs();
// On ouvre sur le mot du jour : quelqu'un qui découvre l'appli comprend tout de suite (2026-11-25)
allerA("aujourdhui");

// ---------- Les œufs cachés : des surprises selon l'heure ou la date (2026-11-25) ----------
var oeufsVus = {};
function motOeuf(liste) {
  const ok = liste.filter(function (m) { return fiches[m]; });
  return ok[Math.floor(Math.random() * ok.length)] || liste[0];
}
function lienOeuf(m) { return '<button class="oeuf-mot" type="button" data-oeuf-mot="' + echapper(m) + '">' + echapper(m) + "</button>"; }
function quelOeuf(d) {
  const h = d.getHours(), mn = d.getMinutes(), jour = d.getDate(), mois = d.getMonth() + 1;
  if (h === 3 && mn === 33) return "sorcieres";
  if (h === 0 && mn === 0) return "minuit";
  if (h === mn && h > 0) return "miroir";
  if (jour === 1 && mois === 4) return "avril";
  if (jour === 31 && mois === 10) return "halloween";
  return null;
}
function montrerOeuf(type, d) {
  d = d || new Date();
  const heure = String(d.getHours()).padStart(2, "0") + " h " + String(d.getMinutes()).padStart(2, "0");
  let html = "";
  if (type === "sorcieres") {
    html = '<p class="oeuf-icone">🕯️ 🕯️ 🕯️</p><p class="oeuf-titre">3 h 33</p><p class="oeuf-sous">L’heure des sorcières</p>' +
      '<p class="oeuf-texte">Tu ne devrais pas être debout à cette heure-ci. Les mots non plus. Celui-ci s’est échappé du grimoire :</p>' +
      lienOeuf(motOeuf(["Méphitique", "Spectral", "Funeste", "Sabbat", "Goule", "Fantasmagorie"])) +
      '<p class="oeuf-petit">Ferme les yeux. Compte jusqu’à trois. Il est encore là.</p>';
  } else if (type === "minuit") {
    const noms = Object.keys(fiches);
    html = '<p class="oeuf-icone">✨🍯✨</p><p class="oeuf-titre">Minuit pile</p><p class="oeuf-sous">L’élixir des noctambules</p>' +
      '<p class="oeuf-texte">Pendant une minute, la fiole se remplit d’or. Le mot légendaire de minuit :</p>' +
      lienOeuf(noms[Math.floor(Math.random() * noms.length)]) +
      '<p class="oeuf-petit">À minuit et une, il aura disparu. Garde-le bien.</p>';
  } else if (type === "miroir") {
    html = '<p class="oeuf-icone">🪞</p><p class="oeuf-titre">' + heure + '</p><p class="oeuf-sous">Heure miroir</p>' +
      '<p class="oeuf-texte">L’univers te fait un clin d’œil. Fais un vœu, mais fais-le avec un mot rare :</p>' +
      lienOeuf(motOeuf(typeof vibesAstro !== "undefined" ? vibesAstro : ["Sibyllin"])) +
      '<p class="oeuf-petit">Dis-le à voix haute. Les vœux précis se réalisent mieux.</p>';
  } else if (type === "avril") {
    html = '<p class="oeuf-icone">📜</p><p class="oeuf-titre">Éberluture</p><p class="oeuf-sous">Mot du jour exceptionnel</p>' +
      '<p class="oeuf-texte">Nom féminin. L’état de stupeur délicieuse qui suit la découverte d’un mot trop beau. « Elle resta dans une éberluture profonde devant le dictionnaire. »</p>' +
      '<p class="oeuf-revele" hidden>🐟 <b>Poisson d’avril !</b> Ce mot n’existe pas… mais <b>éberlué</b>, lui, existe bien :</p>' +
      '<div class="oeuf-revele" hidden>' + lienOeuf("Éberlué") + "</div>";
  } else if (type === "halloween") {
    html = '<p class="oeuf-icone">🎃</p><p class="oeuf-titre">Nuit de Samain</p><p class="oeuf-sous">31 octobre</p>' +
      '<p class="oeuf-texte">Cette nuit, les mots d’antan sortent de leurs tombes. L’un d’eux rôde près de toi :</p>' +
      lienOeuf(motOeuf(["Goule", "Sabbat", "Spectral", "Fantasmagorie", "Funeste"])) +
      '<p class="oeuf-petit">Prononce-le trois fois devant un miroir. (Ou pas.)</p>';
  }
  if (!html) return;
  const o = $("oeuf");
  o.className = "oeuf oeuf-" + type;
  o.innerHTML = '<div class="oeuf-carte">' + html + '<button class="bouton oeuf-fermer" type="button">Fermer</button></div>';
  o.hidden = false;
  document.body.classList.toggle("sorcellerie", type === "sorcieres");
  etat.oeufs = etat.oeufs || {};
  if (!etat.oeufs[type]) { etat.oeufs[type] = true; etat.xp += 5; $("xp").textContent = etat.xp; sauver(); }
  if (typeof sonFiole === "function") sonFiole();
  if (type === "avril") setTimeout(function () { o.querySelectorAll(".oeuf-revele").forEach(function (e) { e.hidden = false; }); }, 4000);
}
function fermerOeuf() { $("oeuf").hidden = true; document.body.classList.remove("sorcellerie"); }
$("oeuf").addEventListener("click", function (e) {
  const m = e.target.closest("[data-oeuf-mot]");
  if (m) { fermerOeuf(); chercherDansLeDico(m.dataset.oeufMot); return; }
  if (e.target.closest(".oeuf-fermer") || e.target === $("oeuf")) fermerOeuf();
});
function guetterOeuf() {
  if (document.hidden) return;
  const d = new Date();
  const type = quelOeuf(d);
  if (!type) return;
  // Une fois par minute magique (heures), une fois par jour (dates)
  const cle = (type === "avril" || type === "halloween") ? type + d.toDateString() : type + d.toDateString() + d.getHours() + ":" + d.getMinutes();
  if (oeufsVus[cle]) return;
  oeufsVus[cle] = true;
  montrerOeuf(type, d);
}
setTimeout(guetterOeuf, 1500);
setInterval(guetterOeuf, 15000);
document.addEventListener("visibilitychange", function () { if (!document.hidden) setTimeout(guetterOeuf, 800); });
