// La liste des mots est dans mots.js (chargé avant ce fichier dans index.html)

// Les citations (tirées de mes Citations)
const citations = [
  { texte: "Faire rire, c'est faire oublier. Et quel bienfaiteur sur la terre qu'un distributeur d'oubli !", auteur: "Victor Hugo, L'Homme qui rit (à confirmer)" },
  { texte: "Là où la multitude voyait le monstre, elle voyait l'archange.", auteur: "Victor Hugo, L'Homme qui rit (à confirmer)" },
  { texte: "Un homme qui craint de souffrir souffre déjà de ce qu'il craint.", auteur: "Montaigne" },
  { texte: "Faire le miel n'absolvait pas l'abeille de piquer.", auteur: "Victor Hugo (à confirmer)" },
  { texte: "Quand on aime, les cicatrices ont la beauté des fossettes.", auteur: "Proverbe japonais" },
  { texte: "C'est à la fin du bal qu'on paye les musiciens.", auteur: "Proverbe" },
  { texte: "La vérité est toujours moins amère quand on y trouve un ou deux coupables.", auteur: "" },
  { texte: "Le vagabond qui n'avait pas le droit de prendre une fleur dans l'herbe pourra cueillir des astres dans le ciel.", auteur: "Victor Hugo, L'Homme qui rit (à confirmer)" },
  { texte: "Il avait mordu dans le fruit d'or, il recrachait la bouchée de cendres.", auteur: "Victor Hugo, L'Homme qui rit (à confirmer)" }
];

// Les expressions (tirées de mes notes)
const expressions = [
  { texte: "Mettre la charrue avant les bœufs", sens: "Faire les choses dans le mauvais ordre." },
  { texte: "C'est un peu fort de café", sens: "C'est exagéré, difficile à croire." },
  { texte: "Avoir une araignée au plafond", sens: "Être un peu fou." },
  { texte: "Lancer un ballon d'essai", sens: "Tester une idée pour voir les réactions." },
  { texte: "Boire le calice jusqu'à la lie", sens: "Subir une épreuve jusqu'au bout." },
  { texte: "Point trop n'en faut", sens: "Pas d'excès." },
  { texte: "Marquer d'une pierre blanche", sens: "Retenir un jour comme heureux." },
  { texte: "Avoir pignon sur rue", sens: "Être établi, reconnu." },
  { texte: "Défrayer la chronique", sens: "Faire beaucoup parler de soi." },
  { texte: "Une besogne de Sisyphe", sens: "Un travail sans fin, toujours à recommencer." },
  { texte: "Réclamer à cor et à cri", sens: "Réclamer avec beaucoup d'insistance." },
  { texte: "À l'aune de", sens: "En prenant pour critère. À ne pas confondre avec « à l'aube de »." },
  { texte: "Monter sur ses ergots", sens: "Prendre un air fier, agressif ou susceptible." },
  { texte: "Il n'y a pas de quoi pavoiser", sens: "Il n'y a pas de quoi être fier." }
];

// Répliques de théâtre, expressions francophones, philosophies, poèmes et « Ça sonne bien » : dans contenus.js

// Les répliques de film (courtes répliques célèbres, avec le film cité)
const films = [
  // ton = comment c'est dit dans le film ; hauteur et vitesse = réglages de la voix qui imite (1 = normal)
  { texte: "Les cons, ça ose tout. C'est même à ça qu'on les reconnaît.", titre: "Les Tontons flingueurs (1963)",
    ton: "Fernand Naudin (Lino Ventura), d'un ton calme et pince-sans-rire, comme une évidence.", hauteur: 0.8, vitesse: 0.85 },
  { texte: "Okayyy !", titre: "Les Visiteurs (1993)",
    ton: "Jacquouille la Fripouille (Christian Clavier), tout content, en étirant le mot qu'il vient d'apprendre.", hauteur: 1.4, vitesse: 0.6 },
  { texte: "Quand on mettra les cons sur orbite, t'as pas fini de tourner.", titre: "Le Pacha (1968)",
    ton: "Le commissaire Joss (Jean Gabin), d'une voix bourrue, sèche et méprisante.", hauteur: 0.7, vitesse: 0.85 },
  { texte: "Oublie que t'as aucune chance, vas-y, fonce. On sait jamais !", titre: "Les Bronzés font du ski (1979)",
    ton: "Jean-Claude Dusse (Michel Blanc), sa devise de dragueur malchanceux, dite avec un optimisme désespéré.", hauteur: 1.2, vitesse: 1.05 },
  { texte: "Il s'appelle Juste Leblanc.", titre: "Le Dîner de cons (1998)",
    ton: "François Pignon (Jacques Villeret), avec un sérieux totalement innocent, face à un Thierry Lhermitte perdu.", hauteur: 1.1, vitesse: 0.85 },
  { texte: "Comment est votre blanquette ?", titre: "OSS 117 : Le Caire, nid d'espions (2006)",
    ton: "Hubert Bonisseur de La Bath (Jean Dujardin), avec un sourire satisfait, comme un mot de passe secret.", hauteur: 1, vitesse: 0.9 },
  { texte: "Jusqu'ici tout va bien… Le problème, c'est pas la chute, c'est l'atterrissage.", titre: "La Haine (1995)",
    ton: "Hubert (Hubert Koundé), en voix off, lent et grave, comme une histoire racontée au bord du vide.", hauteur: 0.8, vitesse: 0.75 },
  { texte: "Je vais lui faire une offre qu'il ne pourra pas refuser.", titre: "Le Parrain (1972)",
    ton: "Don Vito Corleone (Marlon Brando), d'une voix rauque, basse et tranquille : une menace polie.", hauteur: 0.5, vitesse: 0.7 },
  { texte: "Je suis ton père.", titre: "Star Wars : L'Empire contre-attaque (1980)",
    ton: "Dark Vador, voix très grave à travers son masque, en plein duel avec Luke, qui hurle « Non ! ».", hauteur: 0.2, vitesse: 0.6 },
  { texte: "Maman disait toujours : la vie, c'est comme une boîte de chocolats, on ne sait jamais sur quoi on va tomber.", titre: "Forrest Gump (1994)",
    ton: "Forrest (Tom Hanks), assis sur un banc, d'une voix douce et naïve, à une inconnue qui attend le bus.", hauteur: 1.1, vitesse: 0.8 },
  { texte: "Vous ne passerez pas !", titre: "Le Seigneur des anneaux : La Communauté de l'anneau (2001)",
    ton: "Gandalf (Ian McKellen), sur le pont, face au Balrog, en criant et en frappant le sol de son bâton.", hauteur: 0.6, vitesse: 0.7 },
  { texte: "Je suis le roi du monde !", titre: "Titanic (1997)",
    ton: "Jack (Leonardo DiCaprio), à l'avant du bateau, bras écartés, en hurlant de joie dans le vent.", hauteur: 1.4, vitesse: 1.1 },
  { texte: "La première règle du Fight Club est : il est interdit de parler du Fight Club.", titre: "Fight Club (1999)",
    ton: "Tyler Durden (Brad Pitt), dans une cave, devant les membres, comme un prêcheur qui récite ses règles.", hauteur: 0.9, vitesse: 0.9 }
];

// Le nom propre du jour (catégorie à part, avec son anecdote et son tableau)
function afficherNomPropre(index) {
  if (typeof nomsPropres === "undefined" || !nomsPropres.length) return;
  const n = nomsPropres[index % nomsPropres.length];
  document.getElementById("nom-propre").textContent = n.nom;
  document.getElementById("nom-propre-qui").textContent = n.qui;
  document.getElementById("nom-propre-anecdote").textContent = n.anecdote;
  document.getElementById("nom-propre-credit").textContent = n.credit ? "Image : " + n.credit + ", domaine public" : "";
  const img = document.getElementById("nom-propre-image");
  if (n.image) {
    img.onerror = function () { img.hidden = true; };
    img.src = "https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(n.image) + "?width=640";
    img.alt = n.credit || n.nom;
    img.hidden = false;
  } else {
    img.hidden = true;
    img.removeAttribute("src");
  }
}

function afficherSonore(index) {
  const s = sonores[index % sonores.length];
  document.getElementById("sonore-type").textContent = s[0];
  document.getElementById("sonore").textContent = s[1];
  document.getElementById("sonore-info").textContent = s[2] ? "— " + s[2] : "";
}

// Ajoute le reste de mes citations, expressions et pensées (fichier citations-plus.js)
if (typeof citationsPlus !== "undefined") {
  citationsPlus.forEach(function (c) { citations.push({ texte: c[0], auteur: c[1] }); });
  expressionsPlus.forEach(function (e) { expressions.push({ texte: e[0], sens: e[1] }); });
  philosophiesPlus.forEach(function (p) { philosophies.push({ texte: p[0], auteur: p[1] }); });
}

// Le numéro du jour : il change à minuit, le même pour toute la journée
const aujourdhui = new Date();
const numeroDuJour = Math.floor(
  Date.UTC(aujourdhui.getFullYear(), aujourdhui.getMonth(), aujourdhui.getDate()) / 86400000
);

// Le mot et l'expression francophone affichés en ce moment (pour la voix)
let motAffiche = null;
let francophoneAffichee = null;
let filmAffiche = null;

// Répliques de films récents : protégées par le droit d'auteur, donc retirées de la version à vendre.
// Le code reste là (idée gardée) : passer à true et remettre la rubrique dans index.html pour un usage perso.
const afficherFilms = false;

function afficherFrancophone(index) {
  const fr = francophones[index % francophones.length];
  document.getElementById("pays").textContent = fr.pays;
  document.getElementById("francophone").textContent = fr.texte;
  document.getElementById("francophone-sens").textContent = fr.sens;
  francophoneAffichee = fr;
}

// Les catégories : soutenu (utile), rare, argot, jurons et insultes d'antan
const TITRES_CATEGORIES = {
  utile: "⭐ Le mot soutenu", courant: "📘 Un mot courant", rare: "💎 Le mot rare", argot: "🎤 Le mot de la rue · argot", antan: "⚔️ Juron ou insulte d'antan"
};
let categorie = "tout";
let premierAffichage = true;

function categorieDuMot(m) {
  return typeof niveauDuMot === "function" ? niveauDuMot(m.mot) : "utile";
}

function motsSansCourants() {
  const liste = mots.filter(function (m) { return categorieDuMot(m) !== "courant"; });
  return liste.length ? liste : mots;
}

function afficherMot(m) {
  document.getElementById("etiquette-mot").textContent = premierAffichage ? "Le mot du jour" : TITRES_CATEGORIES[categorieDuMot(m)];
  premierAffichage = false;
  const motEl = document.getElementById("mot");
  motEl.textContent = m.mot;
  // Relance l'animation « le mot surgit des flammes »
  motEl.classList.remove("surgit");
  void motEl.offsetWidth;
  motEl.classList.add("surgit");
  document.getElementById("definition").textContent = m.definition;
  document.getElementById("anglais").textContent = m.anglais;
  document.getElementById("espagnol").textContent = m.espagnol;
  motAffiche = m;
}

function afficher(indexMot,indexExpression, indexCitation, indexReplique, indexFilm) {
  if (afficherFilms) {
    const f = films[indexFilm % films.length];
    document.getElementById("film").textContent = "« " + f.texte + " »";
    document.getElementById("titre-film").textContent = "— " + f.titre;
    document.getElementById("ton-film").textContent = "🎙️ " + f.ton;
    filmAffiche = f;
  }
  // Le mot du jour n'est jamais un mot trop courant
  const choisis = motsSansCourants();
  const m = choisis[indexMot % choisis.length];
  const e = expressions[indexExpression % expressions.length];
  const c = citations[indexCitation % citations.length];
  const r = repliques[indexReplique % repliques.length];
  document.getElementById("expression").textContent = e.texte;
  document.getElementById("sens").textContent = e.sens;
  document.getElementById("replique").textContent = "« " + r.texte + " »";
  document.getElementById("piece").textContent = "— " + r.piece;
  afficherMot(m);
  const p = philosophies[indexCitation % philosophies.length];
  const po = poemes[indexCitation % poemes.length];
  document.getElementById("philosophie").textContent = "« " + p.texte + " »";
  document.getElementById("philosophe").textContent = p.auteur ? "— " + p.auteur : "";
  document.getElementById("poeme").textContent = po.texte;
  document.getElementById("poete").textContent = "— " + po.auteur;
  document.getElementById("citation").textContent = "« " + c.texte + " »";
  document.getElementById("auteur").textContent = c.auteur ? "— " + c.auteur : "";
}

// La date en français, en haut de la carte
document.getElementById("date").textContent = aujourdhui.toLocaleDateString("fr-FR", {
  weekday: "long", day: "numeric", month: "long", year: "numeric"
});

afficher(numeroDuJour, numeroDuJour, numeroDuJour, numeroDuJour, numeroDuJour);
afficherFrancophone(numeroDuJour);
afficherSonore(numeroDuJour);
afficherNomPropre(numeroDuJour);

// La quintessence du jour : une anecdote avec sa chute, un défi et une sortie de scène
if (typeof quintessenceDuJour === "function") {
  const q = quintessenceDuJour(numeroDuJour);
  const motDefi = motsSansCourants()[numeroDuJour % motsSansCourants().length].mot;
  document.getElementById("q-etiquette").textContent = "La quintessence " + (aujourdhui.getHours() >= 16 || aujourdhui.getHours() < 5 ? "du soir" : "du jour");
  document.getElementById("q-titre").textContent = q.anecdote[0];
  document.getElementById("q-recit").textContent = q.anecdote[1];
  document.getElementById("q-chute").textContent = q.anecdote[2];
  document.getElementById("q-sortie").textContent = "« " + q.sortie + " »";
  document.getElementById("q-defi").textContent = "🎯 Le défi : " + q.defi.replace("{mot}", motDefi);
  // L'élixir ultime : l'anecdote, le mot du jour, la réplique du jour et la sortie, en une seule tirade
  const motTirade = motsSansCourants()[numeroDuJour % motsSansCourants().length];
  const repliqueTirade = repliques[numeroDuJour % repliques.length];
  document.getElementById("q-tirade").textContent = tiradeDuSoir({ anecdote: q.anecdote, mot: motTirade.mot, definition: motTirade.definition,
    replique: repliqueTirade.texte, auteur: repliqueTirade.piece, sortie: q.sortie });
  document.getElementById("q-bouton-elixir").addEventListener("click", function () {
    this.hidden = true;
    document.getElementById("q-elixir").hidden = false;
    document.getElementById("quintessence").classList.remove("q-eclat");
    void document.getElementById("quintessence").offsetWidth;
    document.getElementById("quintessence").classList.add("q-eclat", "q-doree");
  });
  document.getElementById("q-bouton-chute").addEventListener("click", function () {
    this.hidden = true;
    document.getElementById("q-chute").hidden = false;
    document.getElementById("quintessence").classList.add("q-eclat");
  });
} else {
  document.getElementById("quintessence").hidden = true;
}

// Le bouton « au hasard »
function auHasard(liste) {
  return Math.floor(Math.random() * liste.length);
}

// Un mot au hasard dans la catégorie choisie (jamais deux fois le même d'affilée)
function motAuHasard() {
  const liste = categorie === "tout" ? motsSansCourants() : mots.filter(function (m) { return categorieDuMot(m) === categorie; });
  const choix = liste.length ? liste : mots;
  let m = choix[auHasard(choix)];
  while (choix.length > 1 && m === motAffiche) m = choix[auHasard(choix)];
  return m;
}

document.getElementById("hasard").addEventListener("click", function () {
  afficher(auHasard(mots), auHasard(expressions), auHasard(citations), auHasard(repliques), auHasard(films));
  afficherMot(motAuHasard());
  afficherFrancophone(auHasard(francophones));
  afficherSonore(auHasard(sonores));
  if (typeof nomsPropres !== "undefined") afficherNomPropre(auHasard(nomsPropres));
});

// Choisir une catégorie : un mot de cette catégorie s'affiche tout de suite
document.querySelectorAll(".categorie").forEach(function (bouton) {
  bouton.addEventListener("click", function () {
    categorie = bouton.dataset.cat;
    document.querySelectorAll(".categorie").forEach(function (b) { b.classList.toggle("active", b === bouton); });
    afficherMot(motAuHasard());
  });
});

// La recherche : on tape quelques lettres, on choisit le mot dans la liste.
// Sans tenir compte des accents ni des majuscules ; on cherche dans le mot, puis dans la définition.
function sansAccents(texte) {
  return texte.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

const champRecherche = document.getElementById("recherche");
const listeResultats = document.getElementById("resultats");

function chercher() {
  const q = sansAccents(champRecherche.value.trim());
  listeResultats.innerHTML = "";
  if (!q) { listeResultats.hidden = true; return; }
  // Une description de plusieurs mots : on cherche le mot juste
  if (typeof motsJustes === "function" && motsDeTexte(q).length >= 2) {
    const justes = motsJustes(champRecherche.value, mots).slice(0, 8);
    afficherResultats(justes.map(function (x) { return x.mot; }), "🎯 Aucun mot ne correspond encore : essaie d'autres mots.");
    return;
  }
  const parMot = [], parDefinition = [];
  mots.forEach(function (m) {
    const nom = sansAccents(m.mot);
    if (nom.indexOf(q) !== -1) parMot.push([nom.indexOf(q) === 0 ? 0 : 1, m]);
    else if (q.length >= 3 && sansAccents(m.definition).indexOf(q) !== -1) parDefinition.push(m);
  });
  parMot.sort(function (a, b) { return a[0] - b[0] || a[1].mot.localeCompare(b[1].mot, "fr"); });
  afficherResultats(parMot.map(function (x) { return x[1]; }).concat(parDefinition).slice(0, 12), "Pas encore ce mot dans la liste.");
}

function afficherResultats(trouves, messageVide) {
  listeResultats.innerHTML = "";
  if (!trouves.length) {
    const li = document.createElement("li");
    li.className = "vide";
    li.textContent = messageVide;
    listeResultats.appendChild(li);
  }
  trouves.forEach(function (m) {
    const li = document.createElement("li");
    const b = document.createElement("b");
    b.textContent = m.mot;
    li.appendChild(b);
    li.appendChild(document.createTextNode(" · " + m.definition));
    li.addEventListener("click", function () { choisir(m); });
    listeResultats.appendChild(li);
  });
  listeResultats.hidden = false;
}

function choisir(m) {
  afficherMot(m);
  champRecherche.value = "";
  listeResultats.hidden = true;
  document.getElementById("mot").scrollIntoView({ behavior: "smooth", block: "center" });
}

champRecherche.addEventListener("input", chercher);
champRecherche.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const premier = listeResultats.querySelector("li:not(.vide)");
    if (premier) premier.click();
  }
  if (e.key === "Escape") { champRecherche.value = ""; listeResultats.hidden = true; }
});


// La voix : le navigateur lit le texte à voix haute (gratuit, intégré, sans Internet)
function parler(texte, langue, hauteur, vitesse) {
  window.speechSynthesis.cancel();
  const phrase = new SpeechSynthesisUtterance(texte);
  phrase.lang = langue;
  // Cherche une voix avec le bon accent (ex. fr-CA) ; sinon, le navigateur prend sa voix française
  const voixAccent = window.speechSynthesis.getVoices().find(function (v) {
    return v.lang.replace("_", "-").toLowerCase() === langue.toLowerCase();
  });
  if (voixAccent) phrase.voice = voixAccent;
  phrase.rate = vitesse || 0.9;
  phrase.pitch = hauteur || 1;
  window.speechSynthesis.speak(phrase);
}

if ("speechSynthesis" in window) {
  document.querySelectorAll(".bouton-voix[data-langue]").forEach(function (bouton) {
    bouton.addEventListener("click", function () {
      if (!motAffiche) return;
      const langue = bouton.dataset.langue;
      if (langue === "fr") {
        parler(motAffiche.mot + ". " + motAffiche.definition, "fr-FR");
      } else if (langue === "en") {
        parler(motAffiche.anglais, "en-GB");
      } else {
        parler(motAffiche.espagnol, "es-ES");
      }
    });
  });
  if (afficherFilms) {
    document.getElementById("ecouter-film").addEventListener("click", function () {
      if (!filmAffiche) return;
      parler(filmAffiche.texte, "fr-FR", filmAffiche.hauteur, filmAffiche.vitesse);
    });
  }

  document.getElementById("ecouter-accent").addEventListener("click", function () {
    if (!francophoneAffichee) return;
    parler(francophoneAffichee.texte + ". " + francophoneAffichee.sens, francophoneAffichee.langue);
  });
} else {
  // Navigateur sans voix : on cache les boutons
  document.querySelectorAll(".voix").forEach(function (bloc) { bloc.hidden = true; });
}

// ---------- Musique et peinture du jour, trouvées dans Wikidata ----------
const mois = aujourdhui.getMonth() + 1;
const jour = aujourdhui.getDate();

function demanderWikidata(requete) {
  const adresse = "https://query.wikidata.org/sparql?format=json&query=" + encodeURIComponent(requete);
  return fetch(adresse, { headers: { "Accept": "application/sparql-results+json" } })
    .then(function (reponse) { return reponse.json(); })
    .then(function (donnees) { return donnees.results.bindings; });
}

const requeteMusique =
  "SELECT ?itemLabel ?artisteLabel ?date ?sl WHERE {" +
  " ?item wdt:P31 wd:Q134556 ;" +
  " p:P577/psv:P577 [ wikibase:timeValue ?date ; wikibase:timePrecision 11 ] ;" +
  " wikibase:sitelinks ?sl ." +
  " FILTER(MONTH(?date) = " + mois + " && DAY(?date) = " + jour + ")" +
  " ?item wdt:P175 ?artiste ." +
  " SERVICE wikibase:label { bd:serviceParam wikibase:language \"fr,en\". }" +
  "} ORDER BY DESC(?sl) LIMIT 10";

const requetePeintre =
  "SELECT ?peintreLabel ?naissance ?oeuvreLabel ?image ?sl WHERE {" +
  " ?peintre wdt:P106 wd:Q1028181 ;" +
  " p:P569/psv:P569 [ wikibase:timeValue ?naissance ; wikibase:timePrecision 11 ] ;" +
  " wikibase:sitelinks ?sl ." +
  " FILTER(MONTH(?naissance) = " + mois + " && DAY(?naissance) = " + jour + ")" +
  " FILTER(?sl > 20)" +
  " ?oeuvre wdt:P170 ?peintre ; wdt:P31 wd:Q3305213 ; wdt:P18 ?image ; wikibase:sitelinks ?osl ." +
  " SERVICE wikibase:label { bd:serviceParam wikibase:language \"fr,en\". }" +
  "} ORDER BY DESC(?sl) DESC(?osl) LIMIT 5";

// Un nom qui ressemble à « Q12345 » veut dire que Wikidata n'a pas de nom lisible : on l'ignore
function lisible(valeur) {
  return valeur && !/^Q\d+$/.test(valeur.value);
}

function annee(date) {
  return date.value.slice(0, 4).replace(/^0+/, "");
}

// La chanson du jour est mise de côté pour l'instant (idée gardée) : passer à true pour la remettre,
// et remettre aussi sa rubrique dans index.html.
const afficherMusique = false;

if (afficherMusique) demanderWikidata(requeteMusique)
  .then(function (lignes) {
    const chanson = lignes.find(function (l) { return lisible(l.itemLabel) && lisible(l.artisteLabel); });
    if (!chanson) {
      document.getElementById("musique").textContent = "Pas de chanson célèbre trouvée pour aujourd'hui.";
      return;
    }
    const titre = chanson.itemLabel.value;
    const artiste = chanson.artisteLabel.value;
    document.getElementById("musique").textContent = "« " + titre + " »";
    document.getElementById("musique-info").textContent =
      "— " + artiste + ", sortie le " + jour + "/" + mois + "/" + annee(chanson.date);
    const lien = document.createElement("a");
    lien.href = "https://www.youtube.com/results?search_query=" + encodeURIComponent(titre + " " + artiste);
    lien.target = "_blank";
    lien.rel = "noopener";
    lien.textContent = "▶ L'écouter sur YouTube";
    document.getElementById("musique-lien").appendChild(lien);
  })
  .catch(function () {
    document.getElementById("musique").textContent = "Pas de connexion : la musique du jour s'affichera avec Internet.";
  });

demanderWikidata(requetePeintre)
  .then(function (lignes) {
    const tableauDuJour = lignes.find(function (l) { return lisible(l.oeuvreLabel) && lisible(l.peintreLabel); });
    if (!tableauDuJour) {
      document.getElementById("oeuvre").textContent = "Pas de grand peintre trouvé pour aujourd'hui.";
      return;
    }
    const image = document.getElementById("oeuvre-image");
    image.src = tableauDuJour.image.value.replace("http://", "https://") + "?width=800";
    image.alt = tableauDuJour.oeuvreLabel.value;
    image.hidden = false;
    document.getElementById("oeuvre").textContent = tableauDuJour.oeuvreLabel.value;
    document.getElementById("peintre").textContent =
      "— " + tableauDuJour.peintreLabel.value + ", né le " + jour + "/" + mois + "/" + annee(tableauDuJour.naissance);
  })
  .catch(function () {
    document.getElementById("oeuvre").textContent = "Pas de connexion : le tableau du jour s'affichera avec Internet.";
  });

// Affiche le crédit du tableau seulement s'il est bien dans le dossier images
const tableau = new Image();
tableau.onload = function () { document.getElementById("credit").hidden = false; };
tableau.src = "images/fond.jpg";
