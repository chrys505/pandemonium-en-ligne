// L'oracle des mots : chaque jour, trois cartes à retourner (passé, présent, avenir).
// Chaque carte = un arcane du Pandémonium + un mot rare + une parole d'oracle.
// Arcanes et oracles inventés pour l'appli.
const arcanes = [
  { nom: "La Fiole", icone: "⚗️", sens: "Ce qui attend d'être ouvert, au bon moment." },
  { nom: "Le Grimoire", icone: "📖", sens: "Un savoir ancien qui demande à être relu." },
  { nom: "L'Alambic", icone: "🔥", sens: "La patience qui transforme le brut en précieux." },
  { nom: "La Vouivre", icone: "🐉", sens: "Une vérité qu'il faut oser dire en face." },
  { nom: "L'Ondine", icone: "🌊", sens: "Ce qui coule, change, et ne revient jamais pareil." },
  { nom: "Le Phénix", icone: "🪶", sens: "Une fin qui prépare une renaissance." },
  { nom: "La Plume", icone: "✒️", sens: "Les mots que tu n'as pas encore écrits." },
  { nom: "Le Sablier", icone: "⏳", sens: "Le temps qui presse, ou qui mûrit." },
  { nom: "La Clé", icone: "🗝️", sens: "Une porte que tu crois fermée et qui ne l'est pas." },
  { nom: "Le Masque", icone: "🎭", sens: "Ce que l'on montre, et ce que l'on cache." },
  { nom: "La Lanterne", icone: "🏮", sens: "Une petite lumière suffit pour faire un pas." },
  { nom: "Le Corbeau", icone: "🐦‍⬛", sens: "Un message qui arrive par un chemin inattendu." },
  { nom: "La Rose", icone: "🌹", sens: "Ce qui est beau et qui pique à la fois." },
  { nom: "L'Encrier", icone: "🖋️", sens: "Une histoire qui ne demande qu'à commencer." },
  { nom: "Le Labyrinthe", icone: "🌀", sens: "Le détour qui est, en fait, le chemin." },
  { nom: "La Tour", icone: "🗼", sens: "Ce qui s'élève, et le vertige qui va avec." },
  { nom: "La Lune", icone: "🌙", sens: "Les rêves, les doutes, ce qui travaille dans l'ombre." },
  { nom: "Le Soleil", icone: "☀️", sens: "La clarté, la joie simple, l'évidence." },
  { nom: "L'Étoile", icone: "⭐", sens: "Un espoir lointain qui guide quand même." },
  { nom: "Le Miroir", icone: "🪞", sens: "Ce que les autres te renvoient de toi." },
  { nom: "La Couronne", icone: "👑", sens: "Une réussite à porter avec humilité." },
  { nom: "Le Serpent", icone: "🐍", sens: "Une mue : laisser derrière soi une vieille peau." }
];

// Les paroles de l'oracle, par position ; {mot} est remplacé par le mot rare tiré
const oracles = {
  passe: [
    "Ce qui t'a façonné porte un nom ancien : {mot}. Ne le renie pas.",
    "Hier a laissé une trace en toi. Les sages l'appelleraient {mot}.",
    "Derrière toi, une porte s'est refermée sur le mot {mot}. Elle t'a appris quelque chose.",
    "Ton passé murmure {mot}. Écoute-le une dernière fois, puis avance.",
    "Un mot a marqué ce que tu as traversé : {mot}. C'est lui qui te rend solide aujourd'hui.",
    "Le vent d'hier soufflait {mot}. Tu en gardes le goût sur les lèvres."
  ],
  present: [
    "Aujourd'hui, tout tourne autour d'un mot : {mot}. Il t'attend dans une conversation.",
    "Le présent te tend {mot} comme on tend une clé. À toi de trouver la serrure.",
    "Ce qui t'habite en ce moment s'appelle {mot}. Nomme-le, et il pèsera moins.",
    "Les astres du jour s'alignent sur {mot}. Place-le avant ce soir, et la journée t'appartient.",
    "Regarde autour de toi : quelqu'un, aujourd'hui, mérite le mot {mot}.",
    "Ton cœur du jour a un nom secret : {mot}."
  ],
  avenir: [
    "Devant toi, un chemin s'ouvre, pavé d'un seul mot : {mot}.",
    "Ce qui vient ressemble à {mot}. Prépare-toi à le reconnaître.",
    "Dans quelques lunes, tu repenseras à ce mot : {mot}. Tu comprendras alors.",
    "L'avenir chuchote {mot}. Il ne dit pas encore si c'est une promesse ou une épreuve.",
    "Une rencontre approche, et elle aura le parfum d'un seul mot : {mot}.",
    "Le grimoire a déjà écrit le mot {mot} sur une page que tu n'as pas tournée."
  ]
};
