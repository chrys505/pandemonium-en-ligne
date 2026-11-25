// 🔮 L'horoscope des mots : ton signe, la vraie phase de la Lune, et un horoscope du jour façon influenceuse astro.
// Tout est écrit pour l'appli. Les mots en vedette viennent du dictionnaire du Pandémonium.
const signes = [
  { nom: "Bélier", icone: "♈", dates: "21 mars – 19 avril", element: "feu", totem: "Téméraire", redflag: "Malavisé",
    portrait: "Tu fonces d'abord, tu réfléchis ensuite, et honnêtement ça marche souvent. Ton énergie est contagieuse, ta patience un peu moins." },
  { nom: "Taureau", icone: "♉", dates: "20 avril – 20 mai", element: "terre", totem: "Pantagruélique", redflag: "Ronchon",
    portrait: "Bons plats, beaux tissus, plaids et siestes : tu ne négocies pas ton confort. Fidèle comme personne, têtu comme personne aussi." },
  { nom: "Gémeaux", icone: "♊", dates: "21 mai – 20 juin", element: "air", totem: "Volubile", redflag: "Versatile",
    portrait: "Trois conversations en même temps, dix onglets ouverts, une anecdote pour chaque situation. Tu t'ennuies vite, mais on ne s'ennuie jamais avec toi." },
  { nom: "Cancer", icone: "♋", dates: "21 juin – 22 juil.", element: "eau", totem: "Indéfectible", redflag: "Vindicatif",
    portrait: "Tu te souviens de tout : des anniversaires, des blessures, du goût de la tarte de ta grand-mère. Une carapace dehors, un cœur immense dedans." },
  { nom: "Lion", icone: "♌", dates: "23 juil. – 22 août", element: "feu", totem: "Fastueux", redflag: "Fanfaron",
    portrait: "Tu entres dans une pièce et la lumière change. Généreux, solaire, un peu dramatique : main character, et tu le sais." },
  { nom: "Vierge", icone: "♍", dates: "23 août – 22 sept.", element: "terre", totem: "Pointilleux", redflag: "Tatillon",
    portrait: "Tu vois la faute d'orthographe dans le menu, la virgule mal placée dans le message. Tu aides tout le monde, et tu ranges en même temps." },
  { nom: "Balance", icone: "♎", dates: "23 sept. – 22 oct.", element: "air", totem: "Affable", redflag: "Velléité",
    portrait: "Charme, diplomatie, sens du beau : tout le monde t'adore. Choisir un restaurant, en revanche, peut prendre la soirée." },
  { nom: "Scorpion", icone: "♏", dates: "23 oct. – 21 nov.", element: "eau", totem: "Abyssal", redflag: "Vipérin",
    portrait: "Intense, magnétique, mystérieux. Tu lis les gens comme des livres ouverts, et tu ne montres jamais toutes tes cartes." },
  { nom: "Sagittaire", icone: "♐", dates: "22 nov. – 21 déc.", element: "feu", totem: "Truculent", redflag: "Hâbleur",
    portrait: "Un billet d'avion, une grande idée, un fou rire : il t'en faut peu pour partir. Ta franchise est un cadeau, parfois mal emballé." },
  { nom: "Capricorne", icone: "♑", dates: "22 déc. – 19 janv.", element: "terre", totem: "Opiniâtre", redflag: "Renfrogné",
    portrait: "Tu as un plan à cinq ans, et un plan B. Sérieux en surface, humour pince-sans-rire en dessous : ceux qui te connaissent savent." },
  { nom: "Verseau", icone: "♒", dates: "20 janv. – 18 févr.", element: "air", totem: "Iconoclaste", redflag: "Insaisissable",
    portrait: "Tu penses à côté, en avance, ailleurs. Tes idées dérangent, puis tout le monde les copie trois ans plus tard." },
  { nom: "Poissons", icone: "♓", dates: "19 févr. – 20 mars", element: "eau", totem: "Onirique", redflag: "Vaporeux",
    portrait: "Tu ressens tout, pour toi et pour les autres. Tu rêves les yeux ouverts, et tes rêves ont souvent raison." }
];

// Les éléments qui s'entendent bien (feu + air, terre + eau)
const affinites = { feu: ["feu", "air"], air: ["air", "feu"], terre: ["terre", "eau"], eau: ["eau", "terre"] };

// Les mots du dictionnaire qui servent de « vibe » (plutôt flatteurs) et de « red flag » (à éviter)
const vibesAstro = ["Magnanime", "Serein", "Volubile", "Badin", "Sibyllin", "Allègre", "Truculent", "Guilleret", "Mutin", "Téméraire",
  "Opiniâtre", "Iconoclaste", "Ineffable", "Éthéré", "Onirique", "Extatique", "Affable", "Indéfectible", "Impérissable",
  "Pantagruélique", "Pétulant", "Incisif", "Irisé", "Rutilant", "Cristallin", "Endimanché", "Idyllique", "Inébranlable",
  "Insaisissable", "Flegmatique", "Fastueux", "Voluptueux", "Tellurique", "Goguenard", "Désopilant", "Lyrique"];
const redflagsAstro = ["Pédant", "Fat", "Hâbleur", "Chafouin", "Ergoter", "Mégoter", "Tartuffe", "Doucereux", "Spécieux", "Énergumène",
  "Malavisé", "Faquin", "Pharisien", "Ronchon", "Tatillon", "Fanfaron", "Versatile", "Volage", "Galimatias", "Jaser",
  "Obséquieux", "Fallacieux", "Pompeux", "Roublard", "Minaudier", "Intrigant", "Renfrogné", "Vindicatif", "Patelin",
  "Emmiellé", "Tracassier", "Pusillanime", "Timoré", "Velléité", "Vipérin", "Ampoulé", "Sardonique"];

// L'horoscope du jour : {signe}, {vibe}, {redflag}, {mot}, {lune} sont remplacés
const horoscopes = {
  intro: [
    "Bestie {signe}, l'univers t'envoie un message clair aujourd'hui : arrête de mégoter sur tes rêves.",
    "{signe}, ta vibe du jour, c'est « {vibe} ». Assume-la à fond, même au supermarché.",
    "Les astres sont formels, {signe} : aujourd'hui, ton aura parle avant toi. Choisis bien tes mots, elle les répète.",
    "{signe}, la Lune est en phase « {lune} » et toi en mode « {vibe} ». Combo rare, profites-en.",
    "Aujourd'hui, {signe}, tu manifestes. Dis ce que tu veux à voix haute, et avec les bons mots : l'univers n'aime pas le flou.",
    "{signe}, journée glow-up intérieur : on soigne son vocabulaire comme on soigne sa peau.",
    "Protège ton énergie, {signe}. Tout le monde n'a pas mérité ta conversation.",
    "{signe}, l'univers a glissé un mot sur ta route : « {mot} ». Ce n'est pas un hasard (rien ne l'est, tu le sais).",
    "Journée main character pour toi, {signe}. Parle comme dans un roman de Balzac : personne ne s'y attend, tout le monde s'en souvient.",
    "{signe}, ton intuition est sibylline aujourd'hui : elle ne te dit pas tout, mais elle a raison.",
    "Petit rappel cosmique, {signe} : tu n'as rien à prouver. Ta vibe « {vibe} » suffit largement.",
    "{signe}, Vénus te fait un clin d'œil et Saturne te demande de ranger ta chambre. Écoute les deux.",
    "C'est ta saison de lâcher-prise, {signe}. Ce qui doit partir partira ; ce qui doit rester trouvera ses mots.",
    "{signe}, aujourd'hui on ne se justifie pas, on s'exprime. Nuance."
  ],
  amour: [
    "Quelqu'un pense à toi plus que tu ne crois. Réponds-lui sans mégoter sur les mots.",
    "Un compliment rare vaut dix « t'es trop beau » ou « t'es trop belle ». Sors ton plus beau vocabulaire.",
    "Aucun red flag ignoré aujourd'hui. Si la personne est « {redflag} », c'est non, et c'est très bien.",
    "Un message à 3 heures du matin n'est pas une déclaration. Garde ta dignité, et ta ponctuation.",
    "Ose la phrase un peu trop belle. Au pire, c'est désopilant ; au mieux, c'est inoubliable.",
    "On ne court après personne aujourd'hui. On marche, élégamment, dans la bonne direction.",
    "Une vieille histoire refait surface. Rappelle-toi pourquoi elle est vieille.",
    "Ta vibe « {vibe} » attire exactement les bonnes personnes. Laisse faire.",
    "Dis « je t'aime » à quelqu'un qui ne s'y attend pas : un parent, un ami, toi-même.",
    "Si on te fait attendre une réponse trois jours, tu as le droit de vaquer à d'autres occupations."
  ],
  taf: [
    "Une réunion, un prof, un chef : place ton mot du jour et regarde les sourcils se lever.",
    "Ne fais pas tout, fais bien. Les astres détestent le travail bâclé.",
    "Quelqu'un va t'expliquer ton propre métier. Reste stoïque, souris, et pense très fort « galimatias ».",
    "Une idée que tu trouves inepte est peut-être la bonne. Note-la quelque part.",
    "Journée parfaite pour finir un truc commencé il y a trois semaines. Oui, celui-là.",
    "Pas de galimatias dans tes messages : trois phrases claires valent un roman.",
    "Ton opiniâtreté paie aujourd'hui. Ne lâche rien, même si ça traîne.",
    "Demande ce que tu veux. Le pire qu'on puisse te répondre, c'est non, et tu survivras.",
    "Évite le collègue « {redflag} » avant midi. Après le café, c'est ton problème.",
    "Ce n'est pas de la procrastination, c'est de la maturation. Mais demain, on s'y met."
  ]
};

// Les 8 phases de la Lune, avec leur rituel des mots
const lunes = [
  { nom: "Nouvelle lune", icone: "🌑", rituel: "C'est le moment de poser tes intentions. Écris-en trois, chacune avec un mot rare : la lune adore les gens précis." },
  { nom: "Premier croissant", icone: "🌒", rituel: "Une petite énergie monte. Commence quelque chose de minuscule : une page, un message, un mot nouveau." },
  { nom: "Premier quartier", icone: "🌓", rituel: "La lune te lance un défi : un obstacle va se présenter. Réponds-lui calmement, avec ton mot du jour." },
  { nom: "Lune gibbeuse croissante", icone: "🌔", rituel: "On peaufine. Relis, corrige, ajuste : c'est la lune des pointilleux, et pour une fois, c'est un compliment." },
  { nom: "Pleine lune", icone: "🌕", rituel: "Tout est amplifié, les émotions aussi. Rituel : choisis un tic de langage que tu dis trop (« genre », « en mode ») et laisse-le partir pour la nuit." },
  { nom: "Lune gibbeuse décroissante", icone: "🌖", rituel: "Lune de gratitude : remercie quelqu'un aujourd'hui, avec un mot qu'il ou elle ne connaît pas encore." },
  { nom: "Dernier quartier", icone: "🌗", rituel: "On fait le tri. Range, supprime, pardonne. Laisse tes fadaises derrière toi." },
  { nom: "Dernier croissant", icone: "🌘", rituel: "Lune du repos. Pas de grands projets : un bain, un livre, et une douce langueur pleinement assumée." }
];
