// Le niveau des mots : par défaut, un mot est « utile » (soutenu mais utilisable au quotidien).
// Ceux-ci sont « rares » : très littéraires, vieillis, régionaux ou techniques. Ils servent de bonus.
const motsRares = new Set([
  "Abortif", "Ostéologie", "Exhalation", "Exhalaison", "Saurien", "Taxonomie", "Métastase", "Occlusion",
  "Somatique", "Escarre", "Tellurique", "Syllogisme", "Liminalité", "Acrasie", "Gastrolâtre", "Hymen",
  "Fabliau", "Glose", "Épigraphe", "Épître", "Apothicaire", "Lorgnon", "Graillon", "Sylphe", "Cacochyme",
  "Valétudinaire", "Psalmodier", "Liturgie", "Claustral", "Mulâtre", "Messeoir", "S'impatroniser", "Échoir",
  "Masure", "Cahute", "Grabat", "Torgnole", "Saprelotte", "Peuchère", "Binette", "Chafouin", "Cuistrerie",
  "Histrion", "Hâve", "Déjeté", "Superfluité", "Prôneur", "Gascon", "Fruste", "Chuinter", "Éolien", "Lie",
  "Pérégrination", "Incoercible", "Phraséologie", "Pudibond", "Spoliation", "Factieux", "Séditieux", "Félonie",
  "Félon", "Flibustier", "Libelliste", "Pamphlétaire", "Imprécation", "Gérontocratie", "Macrocosme",
  "Supputation", "Tournebouler", "Turlupiner", "Sommité", "Folâtrer", "Contingence", "Fat", "Pensum",
  "Alcôve", "Grimer", "Coterie", "Cantilène", "Ergoter", "Chicaneur", "Se fourvoyer",
  "Assertion", "Allégation", "Écroué", "Lancinant", "Incommensurable", "Indéfectible", "Fantasmagorie",
  "Palabres", "Simagrées", "Velléité", "Célérité", "Vociférer", "Vipérin", "Recéler", "Prérogative",
  "Pilori", "Substantifique moelle", "Figure de proue", "Porte-étendard", "Bocage", "Idiome", "Neuroplasticité",
  "Programmatique", "Endémique", "Ankylosé", "Dissemblable", "Dissension", "Échafauder", "Émailler",
  "Escarmouche", "Étriller", "Engranger", "Fluet", "Glaner", "Interstice", "Orée", "Rictus", "Chevrotant",
  "Balivernes", "Sornettes", "Arriéré", "Contentieux", "Différend", "Sommation", "Injonction", "Grabataire",
  // Ajoutés le 2026-11-14
  "Méphitique", "Rédimer", "Apoplexie", "Ablution", "Véloce", "Feudataire", "Obvier", "Férir", "Polype",
  "Diocèse", "Agoniste", "Séculier", "Ascèse", "Irrémissiblement", "Prélat", "Nécromancien", "Succube", "Fiducie",
  "Élider", "Hoirie", "Cénobite", "Alexithymie", "Éructer", "Obturation", "Cariatide", "Polypier", "Gloser",
  "Vivisection", "Tératologique", "Déclivité", "Noroît", "Fondrière", "Fongible", "Syzygie", "Innervé",
  "Épiphénomène", "Amphigouri", "Épiphonème", "Menuiser", "Rétrocession", "Véniel", "Consubstantialité",
  "Métempsycose", "Antonomase", "Misopédie", "Lithophanie", "Cosmogonique", "Guigne", "Anamorphose",
  "Contumace", "Colliger", "Tripot", "Nachave", "Sépulcre", "Moult", "Laïus", "Cabale", "Adultérer", "Exaction",
  // 2e liste du 2026-11-14
  "Pertinacité", "Houri", "Détirer", "Substanter", "Léonin", "Hémistiche", "Moucheture", "Métaphysiquement",
  "Frac", "Probe", "Patelin", "Bocager", "Dussé-je", "Rembruni", "Thaumaturge", "Hippogriffe", "Mandragore",
  "Byzantin", "Bovarysme", "Donquichottesque", "Phrénologie", "Commissure", "Gastrolâtrie", "Godiche", "Balourd",
  "Immanentisme", "Gnostique", "Ancillaire", "Rondo", "Jeter sa gourme", "Cassolette", "Cothurne", "Odalisque",
  "Sérail", "Anachorète", "Thébaïde", "Ficher", "Derechef", "Sigisbée", "Sentine", "Madrier", "Liard", "Péristyle",
  // Liste du 2026-11-17
  "Bobèche", "Humoral", "Palingénésie", "Vergeter", "Malachite", "Narghilé", "Décrépiter", "Carlisme", "Nobiliaire",
  "Dévotieux", "Onagre", "Macaronique", "Synchronique", "Gnomique", "Ptolémaïque", "Pied-de-mouche", "Galuchat",
  "Haquet", "Gnomon", "Papier brouillard", "Polycentrique", "Contractile", "Décrépitude", "Aède", "Brahmane",
  // Journée de lecture du 2026-11-18
  "Platine", "Laminoir", "Salicine", "Houppe", "Infusible", "Phtisie", "Racornissement", "Épigastre", "Plexus",
  "Hypocondres", "Lymphatique", "Ombilic", "Oisel", "Toponymie", "Nonsense", "Anglomane", "Pétrarquisant",
  "Acanthe", "Vertugadin", "Cotte", "Senestre", "Tétin", "Rosaire", "Intussusception", "Morbifique", "Bâter",
  "Mors", "Phlogistique", "Frugifère", "Redan", "Palissé", "Boulingrin", "Arpent", "Capucin", "Postillon"
]);

// L'argot et la langue de rue : pas du français soutenu, mais une vraie richesse (et la langue du rap).
// Ces mots ont leur propre catégorie : ils ne sortent jamais comme « mot utile au quotidien ».
const motsArgot = new Set([
  "Nachave", "Binette", "Gamberger", "Tanner", "Torgnole", "Bourlinguer", "Peuchère",
  "Daron", "Poucave", "Chouraver", "Marave", "Gadjo", "Narvalo", "Michto", "Pénave", "Seum",
  "Zbeul", "Flouze", "Thune", "Blase", "Bled", "Tchatche", "Chelou", "Vénère", "Ouf", "Bader", "Castagne", "Niaque", "Panard", "Pétoche", "Pognon", "Tarpin", "Roupillon", "Zinzin", "Tocard", "Boloss", "Mytho", "Bouffon", "Charo"
]);

// Les jurons et insultes d'antan : des interjections et des injures savoureuses d'autrefois.
const motsAntan = new Set([
  "Saprelotte", "Palsambleu", "Morbleu", "Parbleu", "Diantre", "Fichtre", "Ventre-saint-gris", "Saperlipopette",
  "Maraud", "Faquin", "Gredin", "Malandrin", "Pendard", "Bélître", "Butor", "Gougnafier", "Paltoquet",
  "Olibrius", "Malotru", "Goujat", "Pignouf", "Sacripant", "Bachi-bouzouk", "Scélérat", "Jean-foutre",
  "Félon", "Cuistrerie", "Renégat"
]);

// ---------- Le mot juste : on décrit avec ses mots, on obtient les mots qui correspondent ----------
// Sans IA : on compare les mots de la description avec ceux des définitions (avec quelques synonymes).
const MOTS_VIDES = new Set(("le la les un une des de du et est a il elle on ils elles pas tres peu qui que ses son sa ne trop plus " +
  "avec sans pour par en au aux ou mais ca cela ce cet cette tout tous toujours souvent assez bien quelqu quelqu un personne " +
  "gens chose fait faire etre avoir sont ont lui leur leurs se sur dans comme quand temps toujours rien veut long longs longue " +
  "probleme problemes fois jour jours vraiment beaucoup autre autres quelque peut parfois genre type mec meuf gars fille").split(" "));

const SYNONYMES_DESCRIPTION = {
  maladroit: ["maladroit", "gauche", "adresse", "habile", "aisance", "lourd"],
  stresse: ["gene", "intimide", "timide", "angoisse", "nerveux", "raide"],
  stress: ["gene", "intimide", "angoisse", "nerveux"],
  timide: ["gene", "intimide", "timide", "timore"],
  habile: ["habilete", "adresse", "habile"],
  geste: ["gestes", "mouvements", "mains"],
  gestes: ["gestes", "mouvements", "mains"],
  motricite: ["gestes", "mouvements"],
  coordonne: ["gestes", "mouvements", "coordonner"],
  menteur: ["mensonge", "ment", "hypocrite", "trompeur"],
  mechant: ["mechant", "cruel", "malveillant", "venin"],
  gentil: ["bienveillant", "bonte", "genereux", "douceur"],
  triste: ["triste", "melancolie", "morose", "chagrin", "sombre"],
  colere: ["colere", "rage", "furieux", "violent"],
  enerve: ["colere", "rage", "furieux", "humeur"],
  fier: ["orgueil", "fierte", "vanite", "pretentieux"],
  vantard: ["vantard", "vante", "vantardise", "pretentieux", "fanfaron"],
  vante: ["vantard", "vantardise", "fanfaron", "hableur"],
  gene: ["gene", "intimide", "timide", "embarras"],
  paresseux: ["paresse", "oisivete", "indolence", "rien faire"],
  bavard: ["parle", "bavard", "discours", "paroles"],
  radin: ["avare", "argent"],
  peureux: ["peur", "crainte", "timore", "craintif"],
  curieux: ["curiosite", "curieux", "curieuse"],
  hypocrite: ["hypocrite", "faux", "doucereux", "mielleux"],
  rigolo: ["drole", "plaisant", "rire", "farceur"],
  drole: ["drole", "rire", "plaisant", "comique"],
  bizarre: ["bizarre", "excentrique", "etrange", "fou"],
  intelligent: ["intelligence", "esprit", "sagacite", "subtil"],
  bete: ["niais", "sot", "stupide", "idiot", "betise"],
  grognon: ["humeur", "grognon", "mecontent"],
  ruse: ["ruse", "sournois", "malin"],
  arrogant: ["orgueil", "hautain", "meprisant", "pretentieux"]
};

function motsDeTexte(texte) {
  return texte.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()
    .split(/[^a-z]+/).filter(function (w) { return w.length >= 3 && !MOTS_VIDES.has(w); });
}

// Un mot « ressemble » à un autre s'ils partagent le même début (maladroit / maladresse, geste / gestes)
function seRessemblent(a, b) {
  // Mots courts : identiques, ou au pluriel / féminin près (gêné, gênée, gênés)
  if (a.length <= 5 || b.length <= 5) {
    const court = a.length <= b.length ? a : b, long = a.length <= b.length ? b : a;
    return long === court || long === court + "s" || long === court + "e" || long === court + "es" || long === court + "x";
  }
  const n = Math.max(5, Math.min(a.length, b.length) - 2);
  return a.slice(0, n) === b.slice(0, n);
}

// Renvoie les mots classés du plus juste au moins juste : [{ mot, score }]
function motsJustes(description, liste) {
  const demandes = motsDeTexte(description);
  if (!demandes.length) return [];
  return liste.map(function (m) {
    const nom = motsDeTexte(m.mot);
    const sens = motsDeTexte(m.definition || "");
    let score = 0;
    const dejaPris = {}; // un mot de la définition ne compte qu'une fois
    demandes.forEach(function (d) {
      const pistes = [d].concat(SYNONYMES_DESCRIPTION[d] || []);
      let meilleur = 0, place = null;
      pistes.forEach(function (p) {
        const cles = motsDeTexte(p);
        cles.forEach(function (c) {
          // Dans le mot lui-même : très fort. Dans la définition : fort si c'est au début (le sens principal).
          if (!dejaPris.nom && nom.some(function (w) { return seRessemblent(w, c); })) {
            if (4 > meilleur) { meilleur = 4; place = "nom"; }
            return;
          }
          const position = sens.findIndex(function (w, i) { return !dejaPris[i] && seRessemblent(w, c); });
          if (position === -1) return;
          const points = (c === d ? 2 : 1.5) + (position < 4 ? 1 : 0);
          if (points > meilleur) { meilleur = points; place = position; }
        });
      });
      if (place !== null) dejaPris[place] = true;
      score += meilleur;
    });
    return { mot: m, score: score };
  }).filter(function (x) { return x.score > 0; })
    .sort(function (a, b) { return b.score - a.score || a.mot.mot.localeCompare(b.mot.mot, "fr"); });
}

// Les mots trop courants À L'ORAL (ceux qu'on entend tous les jours) : on les garde dans le dictionnaire,
// mais ils ne sortent jamais comme « mot du jour » (règle : rien de banal).
// Un mot écrit mais rare à l'oral (comme « frivole ») n'est PAS courant.
const motsCourants = new Set([
  "Consensus", "Coalition", "Dogme", "Ronchon", "Perplexe", "Farfelu", "Boutade", "Malléable", "Mégalomane",
  "Polarisé", "Sous-jacent", "Baroque", "Burlesque", "Puritain", "Sournois", "Notoire", "Exhaustif", "Pourparlers",
  "Rétropédaler", "Subversif", "Versatile", "Aplomb", "Archaïque", "Envenimer", "Exproprier", "Pérenne", "Bribes",
  "Brimades", "Déplorer", "Éclectique", "Imputable", "Intrinsèque", "Palliatif", "Racoleur", "Attester", "Pluralisme",
  "Ressentiment", "Amnistie", "Postérité", "Reddition", "Despote", "Absolution", "Tacite", "Démagogue", "Colloque",
  "Belligérant", "Misanthrope", "Jurisprudence", "Quorum", "Asynchrone", "Agraire", "Paganisme", "Agrégateur",
  "Corporation", "Frise chronologique", "Bon an mal an", "Autocratique", "Mansarde", "Dogmatique", "Phénix", "Titan",
  "Avatar", "Sosie", "Mécène", "Subdivision", "Superlatif", "Glossaire", "Néologisme", "Scission", "Abdication",
  "Gauche", "Épigénétique", "Trivial", "Clivant", "Anachronisme", "Ambivalent", "Amalgamer", "Ésotérique",
  "Rocambolesque", "Sinistrose", "Dépréciation", "Fantasmatique", "Anticlérical", "Hédonisme", "Empoté",
  "Oxymore", "Parasocial", "Hégémonie", "Graal", "Alchimiste",
  "Anthologie", "Dissonance", "Despotisme", "Aversion", "Quaker", "Frêne", "Glaïeul", "Incisif", "Soupape"
]);

function niveauDuMot(mot) {
  if (motsArgot.has(mot)) return "argot";
  if (motsCourants.has(mot)) return "courant";
  if (motsAntan.has(mot)) return "antan";
  return motsRares.has(mot) ? "rare" : "utile";
}
