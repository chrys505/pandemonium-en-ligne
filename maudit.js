// ===== La version sombre : « Deux minutes par jour pour maudire le monde » =====
// Des insultes d'antan et d'argot, de l'humour noir, et des rumeurs complotistes célèbres…
// toujours suivies de leur fin mot : on s'amuse du complot, on ne le propage pas.

// Les insultes : d'antan, puis de la rue
const insultesAntan = ["Maraud", "Faquin", "Gredin", "Malandrin", "Pendard", "Bélître", "Butor", "Gougnafier",
  "Paltoquet", "Olibrius", "Malotru", "Goujat", "Pignouf", "Sacripant", "Bachi-bouzouk", "Scélérat", "Jean-foutre",
  "Félon", "Renégat"];
const insultesArgot = ["Narvalo", "Michto", "Poucave", "Zinzin", "Tocard", "Boloss", "Mytho", "Bouffon", "Charo"];

// Les rumeurs : [titre, la rumeur, le fin mot]
const rumeurs = [
  ["Les oiseaux n'existent pas",
    "Tous les oiseaux auraient été remplacés par des drones de surveillance. Les fils électriques ? Leurs stations de recharge.",
    "Une parodie lancée en 2017 par un jeune Américain, Peter McIndoe, pour singer les complotistes. Des milliers de gens l'ont prise au sérieux… ce qui prouvait son propos."],
  ["Paul McCartney est mort en 1966",
    "Le Beatle aurait péri dans un accident de voiture, remplacé en secret par un sosie. La preuve : il marche pieds nus sur la pochette d'Abbey Road, comme un mort qu'on enterre.",
    "La rumeur est née en 1969. McCartney s'en est moqué en baptisant son album live de 1993 « Paul Is Live »."],
  ["Bielefeld n'existe pas",
    "Cette ville allemande serait une pure invention : personne n'y est jamais allé, personne n'en vient.",
    "Une blague née sur Internet en 1994. La ville, plus de 300 000 habitants, a même promis en 2019 un million d'euros à qui prouverait sa non-existence. Personne n'a gagné."],
  ["Le Moyen Âge a été inventé",
    "Près de trois siècles, de 614 à 911, n'auraient jamais existé : des faussaires auraient rajouté des années au calendrier. Charlemagne ? Un personnage de roman.",
    "La théorie d'Heribert Illig (1991). Elle s'effondre devant le ciel : les éclipses notées par les astronomes de l'Antiquité tombent pile aux bonnes dates, ce qui serait impossible avec trois siècles en trop."],
  ["On n'a jamais marché sur la Lune",
    "Les images d'Apollo 11 auraient été tournées en studio. Le drapeau flotte, alors qu'il n'y a pas de vent !",
    "Le drapeau était tenu par une tringle et bougeait parce qu'on venait de le planter. Et les astronautes ont laissé là-haut des réflecteurs : des observatoires y renvoient encore des lasers pour mesurer la distance Terre-Lune au centimètre près."],
  ["Les pyramides ont été bâties par des extraterrestres",
    "Des blocs de plusieurs tonnes, un alignement parfait sur les étoiles : impossible pour des humains de l'âge du bronze.",
    "On a retrouvé les villages des ouvriers, leurs tombes, et même le journal de bord d'un chef d'équipe, Merer, qui convoyait par bateau le calcaire destiné à la pyramide de Khéops."],
  ["Elvis est vivant",
    "Le King aurait simulé sa mort en 1977 pour vivre en paix. On l'aperçoit régulièrement dans des stations-service.",
    "Elvis est mort à Graceland le 16 août 1977. Les stations-service, elles, continuent de recevoir des visites."],
  ["Avril Lavigne a été remplacée",
    "La chanteuse serait morte en 2003, remplacée par une sosie nommée Melissa. Regardez bien ses grains de beauté.",
    "Une rumeur lancée en 2011 par un blog brésilien, qui a ensuite avoué l'avoir inventée pour montrer comment naissent les théories du complot."],
  ["Shakespeare n'a rien écrit",
    "Un simple acteur de province n'aurait jamais pu écrire Hamlet : le vrai auteur serait un aristocrate caché, le comte d'Oxford.",
    "Une vieille querelle, mais le comte d'Oxford est mort en 1604, avant plusieurs des pièces. Presque tous les historiens tiennent Shakespeare pour l'auteur."],
  ["La Terre est plate",
    "L'horizon est plat, l'eau des lacs est plate : la Terre est un disque, bordé d'un mur de glace.",
    "Vers 240 avant notre ère, Ératosthène a mesuré la circonférence de la Terre avec deux ombres, à Syène et à Alexandrie, et s'est trompé de moins de 20 %. Il y a plus de 2 200 ans."],
  // Ajoutées le 2026-11-17
  ["Napoléon était minuscule",
    "Le petit caporal mesurait à peine 1,57 m, et toute sa soif de conquête venait de ce complexe.",
    "Il mesurait environ 1,69 m, un peu plus que la moyenne de son temps. L'erreur vient de la différence entre le pouce français et le pouce anglais… et des caricaturistes anglais, ravis de le dessiner minuscule."],
  ["On n'utilise que 10 % de son cerveau",
    "Les 90 % restants dormiraient, prêts à libérer des pouvoirs cachés : télépathie, mémoire absolue…",
    "L'imagerie cérébrale montre qu'au fil d'une journée, toutes les zones du cerveau travaillent. Et un organe qui consomme 20 % de notre énergie ne se permet pas de rester inutile à 90 %."],
  ["Les Vikings portaient des casques à cornes",
    "Pour terrifier l'ennemi, chaque guerrier viking chargeait coiffé d'un casque à cornes.",
    "Aucun casque à cornes n'a jamais été retrouvé sur un site viking. L'image vient du XIXe siècle, notamment des costumes de l'opéra de Wagner, L'Anneau du Nibelung, en 1876."],
  ["« Qu'ils mangent de la brioche ! »",
    "Apprenant que le peuple n'avait plus de pain, Marie-Antoinette aurait lancé cette phrase méprisante.",
    "La phrase apparaît dans les Confessions de Rousseau, attribuée à « une grande princesse », à une époque où Marie-Antoinette n'était qu'une enfant en Autriche. Aucune preuve qu'elle l'ait jamais dite."],
  ["La Grande Muraille se voit depuis la Lune",
    "C'est la seule construction humaine visible à l'œil nu depuis la Lune.",
    "Depuis la Lune, à 384 000 km, on ne distingue aucune construction humaine. Même en orbite basse, la Muraille, étroite et de la couleur du sol, est très difficile à repérer."],
  ["L'Atlantide a existé",
    "Un continent avancé aurait été englouti en une nuit, emportant une civilisation plus savante que la nôtre.",
    "On ne la connaît que par deux dialogues de Platon, le Timée et le Critias. Pour la plupart des historiens, c'est une fable philosophique, une cité inventée pour illustrer une leçon sur l'orgueil."]
];

// Les tyrans : une anecdote vraie et étrange, puis le prix payé par leur peuple (on raconte, on ne glorifie pas)
// [nom, l'anecdote, le revers]
const dictateurs = [
  ["Caligula (empereur romain, 37-41)",
    "Selon l'historien Suétone, il voulait faire consul son cheval préféré, Incitatus, qui avait une écurie de marbre et une mangeoire d'ivoire.",
    "Exécutions arbitraires, ruine du trésor : il fut assassiné par sa propre garde au bout de quatre ans."],
  ["Néron (empereur romain, 54-68)",
    "Il se voulait artiste et chantait en public. Ses derniers mots, d'après Suétone : « Quel artiste périt avec moi ! »",
    "Il fit tuer sa mère, sa femme et son précepteur Sénèque, et persécuta les chrétiens après l'incendie de Rome."],
  ["Joseph Staline (URSS, 1924-1953)",
    "Ses services retouchaient les photos officielles pour effacer les camarades tombés en disgrâce, comme Nikolaï Iejov, qui disparut d'un cliché où il marchait à côté de lui.",
    "Des millions de morts : famines, déportations, goulag et la Grande Terreur de 1937-1938."],
  ["Adolf Hitler (Allemagne, 1933-1945)",
    "Il rêvait d'être peintre et fut recalé deux fois à l'Académie des beaux-arts de Vienne, en 1907 et en 1908.",
    "La Seconde Guerre mondiale et la Shoah : six millions de Juifs assassinés, des dizaines de millions de morts en tout."],
  ["Benito Mussolini (Italie, 1922-1943)",
    "Avant d'inventer le fascisme, il dirigeait le grand journal socialiste italien, Avanti!.",
    "Dictature, lois antijuives de 1938, guerres en Éthiopie et aux côtés de Hitler. Il fut fusillé par des résistants en 1945."],
  ["Saparmourat Niazov (Turkménistan, 1991-2006)",
    "Il rebaptisa les mois de l'année : janvier prit son titre, Türkmenbachy (« chef des Turkmènes »), et avril le nom de sa mère.",
    "Culte de la personnalité, hôpitaux fermés hors de la capitale, opposants emprisonnés."],
  ["Idi Amin Dada (Ouganda, 1971-1979)",
    "Il se proclama « Seigneur de toutes les bêtes de la Terre et des poissons des mers » et « dernier roi d'Écosse ».",
    "Entre 100 000 et 500 000 morts selon les estimations, et l'expulsion de toute la population asiatique du pays."],
  ["Jean-Bedel Bokassa (Centrafrique, 1966-1979)",
    "En 1977, il se fit sacrer empereur en copiant le sacre de Napoléon : trône en forme d'aigle, couronne, manteau d'hermine, dans l'un des pays les plus pauvres du monde.",
    "Répression sanglante : en 1979, des écoliers qui protestaient contre l'uniforme obligatoire furent massacrés."],
  ["Nicolae Ceaușescu (Roumanie, 1965-1989)",
    "Il fit raser une partie du vieux Bucarest pour bâtir son palais, aujourd'hui l'un des plus grands bâtiments administratifs du monde.",
    "Pénuries, police politique omniprésente. Renversé en 1989, il fut jugé en une heure et fusillé le jour de Noël."],
  ["Pol Pot (Cambodge, 1975-1979)",
    "Avant de prendre le pouvoir, il avait étudié à Paris puis enseigné l'histoire et la littérature française dans un lycée privé de Phnom Penh.",
    "Les Khmers rouges vidèrent les villes : près de deux millions de morts, environ un Cambodgien sur quatre."],
  ["Francisco Franco (Espagne, 1939-1975)",
    "Son agonie dura si longtemps que « Franco est toujours mort » devint une blague récurrente de l'émission américaine Saturday Night Live.",
    "Guerre civile, puis des dizaines de milliers d'opposants exécutés après la victoire de 1939."],
  // Ajoutés le 2026-11-17
  ["Héliogabale (empereur romain, 218-222)",
    "Selon l'Histoire Auguste, une source peu fiable mais savoureuse, il aurait étouffé ses invités sous une pluie de pétales de roses tombée du plafond.",
    "Caprices, scandales et cruautés : il fut assassiné à 18 ans par sa propre garde, son corps jeté dans le Tibre."],
  ["Ivan IV, dit le Terrible (Russie, 1547-1584)",
    "En 1581, dans un accès de colère, il frappa à mort son propre fils d'un coup de bâton ; le peintre Ilia Répine a peint la scène.",
    "L'opritchnina, une police de terreur, et le massacre de Novgorod en 1570, où des milliers d'habitants furent tués."],
  ["Mao Zedong (Chine, 1949-1976)",
    "En 1958, il lança une campagne pour exterminer les moineaux, accusés de manger les grains. Sans eux, les insectes ravagèrent les récoltes.",
    "Le Grand Bond en avant provoqua l'une des pires famines de l'histoire : des dizaines de millions de morts."],
  ["Kim Il-sung (Corée du Nord, 1948-1994)",
    "Mort en 1994, il reste officiellement le « président éternel » du pays : un mort gouverne toujours, sur le papier.",
    "Camps de travail, culte de la personnalité, famine des années 1990 sous son fils."],
  ["Rafael Trujillo (République dominicaine, 1930-1961)",
    "Il rebaptisa la capitale « Ciudad Trujillo » et le plus haut sommet du pays « pic Trujillo ».",
    "En 1937, ses soldats massacrèrent des milliers d'Haïtiens à la frontière. Il fut abattu dans une embuscade en 1961."]
];

// L'humour noir : la mort, le cimetière et le désespoir, avec le sourire
const humourNoir = [
  "Mon grand-père est mort paisiblement dans son sommeil. Pas comme les passagers de son bus, qui hurlaient.",
  "J'ai demandé au médecin combien de temps il me restait. « Dix. » « Dix quoi ? Ans ? Mois ? » « Neuf… huit… »",
  "J'ai acheté un cercueil d'occasion. Le vendeur m'a juré qu'il n'avait servi qu'une fois.",
  "L'avantage d'être enterré : plus personne ne te demande « Et sinon, tu fais quoi dans la vie ? »",
  "Le pessimiste soupire : « Ça ne peut pas être pire. » L'optimiste répond : « Mais si, mais si ! »",
  "Pourquoi les squelettes ne se battent-ils jamais entre eux ? Ils n'ont pas les tripes.",
  "Le bourreau était un homme de peu de mots : il coupait toujours court.",
  "Ma grand-mère répétait : « Les meilleurs partent les premiers. » Elle est morte à 104 ans. On n'a jamais su comment le prendre.",
  "Au cimetière, les places sont si chères que les gens meurent d'envie d'y entrer.",
  "Le croque-mort signe toutes ses lettres : « Bien à vous, pour l'éternité. »",
  "La vie est une maladie mortelle, sexuellement transmissible.",
  "Mon voisin parle à ses plantes pour qu'elles poussent. Moi aussi, je parle aux miennes : je leur fais mes adieux.",
  "Le testament de mon oncle tenait en une ligne : « Je vous avais dit que j'étais malade. »",
  "Le fantôme du château s'ennuie : depuis l'invention du Wi-Fi, plus personne ne lève les yeux pour le voir.",
  // Ajoutées le 2026-11-17
  "Le médecin m'a donné six mois à vivre. Je n'ai pas pu payer sa facture : il m'en a donné six de plus.",
  "Les cimetières sont pleins de gens irremplaçables.",
  "J'ai fait mon testament : à mes héritiers, je laisse mes dettes. Qu'on ne dise pas que je ne leur ai rien laissé.",
  "Le fossoyeur est le dernier à vous laisser tomber.",
  "À table, la Mort m'a demandé de lui passer le sel. Par prudence, je lui ai passé le poivre.",
  "Mon horoscope annonçait : « Grand changement en vue. » Le croque-mort l'avait lu aussi.",
  "L'éternité, c'est long, surtout vers la fin.",
  "Pourquoi les fantômes mentent-ils si mal ? Parce qu'on voit à travers eux.",
  "Bonne nouvelle : la médecine a fait d'immenses progrès. Mauvaise nouvelle : vous n'en profiterez pas.",
  "Le vampire a arrêté de boire. Depuis, il ne fait plus que sucer des glaçons… à la morgue."
];

// ----- Le contenu sombre des jeux (la version Pandémonium du mode Soirée) -----
// Des virelangues de malandrins
const virelanguesSombres = [
  "Le malotru mal luné maudit les mots mal dits.",
  "Six spectres sinistres susurrent des sortilèges.",
  "Le bélître bilieux boit sa bile en bâillant.",
  "Trois sorcières sèches sucent six sucres secs.",
  "Le pendard perfide pend six perdrix près du puits.",
  "Grise grimace du gredin grognon grimé de gris.",
  "Le croque-mort croque, croque-t-il ce qu'il croque ?"
];

// Des répliques sombres à jouer sur tous les tons
const phrasesSombres = [
  "Je sais ce que tu as fait.", "Tu ne te réveilleras pas.", "Le cercueil est trop petit.",
  "Quelqu'un est derrière toi.", "J'ai creusé un trou dans le jardin.", "Le testament a changé.",
  "Tu entends ce bruit ?", "Il ne fallait pas ouvrir cette lettre.", "Je t'avais prévenu.", "C'est ton tour."
];

// Les gages trash : gênants et drôles, jamais dangereux ni humiliants
const gagesTrash = [
  "Lis à voix haute le dernier message que tu as envoyé. Le contexte ne t'aidera pas.",
  "Montre au groupe la 7e photo de ta galerie, sans tricher.",
  "Laisse le groupe écrire la légende de ta prochaine story.",
  "Prononce ton propre éloge funèbre, en 30 secondes, avec émotion.",
  "Insulte-toi toi-même avec trois insultes d'antan, devant un miroir imaginaire.",
  "Jusqu'à la fin de la partie, finis chacune de tes phrases par « palsambleu ! ».",
  "Parle comme un vampire de série B jusqu'à ton prochain tour.",
  "Raconte ton plus gros râteau, sans rien enjoliver.",
  "Chante un refrain connu en remplaçant chaque mot par « maraud ».",
  "Danse un slow langoureux avec une chaise, les yeux dans les yeux.",
  "Laisse ton voisin de droite te recoiffer comme il l'entend.",
  "Imite le cri d'agonie d'un méchant de film, le plus longtemps possible.",
  "Désormais, tu t'appelles « Gougnafier ». Qui t'appelle par ton vrai prénom te donne la mise.",
  "Avoue la chose la plus honteuse que tu aies cherchée sur Internet cette semaine (version avouable).",
  "Fais une déclaration d'amour enflammée à l'objet le plus moche de la pièce.",
  "Raconte ton pire souvenir de repas de famille, avec les voix."
];

// Des questions qui font frissonner, pour le tête-à-tête
const questionsSombres = [
  "Si tu devenais un fantôme, qui viendrais-tu hanter en premier ?",
  "Quelle phrase voudrais-tu sur ta pierre tombale ?",
  "Quel méchant de film ou de roman te ressemble le plus ?",
  "Quelle est la plus grosse vengeance que tu aies jamais imaginée (sans la faire) ?",
  "Quel juron d'antan aimerais-tu remettre à la mode ?",
  "Si tu pouvais maudire un objet du quotidien, lequel choisirais-tu ?",
  "Quelle rumeur absurde as-tu crue le plus longtemps ?",
  "Quel est ton pire souvenir de repas de famille ?"
];
