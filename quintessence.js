// La quintessence : « la cinquième essence » des alchimistes, ce qui reste quand on a tout distillé.
// Six gouttes d'esprit pour briller ce soir (partagées par le site et l'appli).

// Les anecdotes qui font taire la table : [titre, récit, chute]
const quintAnecdotes = [
  ["Lavoisier et la phrase de trop",
    "Lavoisier a ruiné la théorie du phlogistique et fondé la chimie moderne. En 1794, sous la Terreur, il est guillotiné. Le juge aurait lancé : « La République n'a pas besoin de savants. »",
    "La phrase est apocryphe : on ne la trouve dans aucun document de l'époque. Le lendemain, Lagrange aurait dit : « Il ne leur a fallu qu'un moment pour faire tomber cette tête, et cent années peut-être ne suffiront pas pour en reproduire une semblable. »"],
  ["Balzac, ou le café en bataillons",
    "Balzac écrivait la nuit, vêtu d'une robe de moine, en buvant un café noir et serré par litres. Il en a tiré un Traité des excitants modernes.",
    "Pour lui, sous l'effet du café, les idées s'ébranlent « comme les bataillons de la Grande Armée sur le terrain d'une bataille ». La Comédie humaine a été écrite à ce régime."],
  ["Molière, mort d'avoir joué un malade",
    "Le 17 février 1673, Molière joue Argan dans Le Malade imaginaire, pour la quatrième fois. Pris d'une violente quinte de toux sur scène, il termine pourtant la représentation.",
    "Il meurt quelques heures plus tard, chez lui. L'homme qui se moquait des médecins est mort après avoir joué un malade… imaginaire."],
  ["Cléopâtre, plus proche de nous que des pyramides",
    "La grande pyramide de Khéops a été bâtie vers 2560 avant notre ère. Cléopâtre, elle, meurt en 30 avant notre ère.",
    "Il s'est donc écoulé plus de temps entre la pyramide et Cléopâtre qu'entre Cléopâtre et ton téléphone."],
  ["Oxford, plus vieille que les Aztèques",
    "On enseignait déjà à Oxford à la fin du XIe siècle. La ville aztèque de Tenochtitlan, elle, est fondée en 1325.",
    "Quand les Aztèques posent la première pierre de leur capitale, l'université d'Oxford a déjà plus de deux siècles."],
  ["Les requins, plus anciens que les arbres",
    "Les premiers requins nagent dans les océans il y a environ 450 millions d'années. Les premiers vrais arbres apparaissent vers 385 millions d'années.",
    "Les requins ont donc connu un monde sans forêts. Ils ont aussi survécu aux dinosaures."],
  ["Mozart, génie… et potache",
    "Mozart, l'enfant prodige de la musique, a composé un canon à six voix dont le titre allemand est « Leck mich im Arsch ».",
    "Traduction polie : « Lèche-moi le derrière ». Le génie n'empêche pas le goût de la blague."],
  ["Les Fleurs du mal au tribunal",
    "En 1857, Baudelaire est condamné pour « outrage à la morale publique ». Six poèmes des Fleurs du mal sont interdits.",
    "L'interdiction n'est levée qu'en 1949, près d'un siècle plus tard, quand la justice réhabilite enfin le poète, mort depuis longtemps."],
  ["Rimbaud, le poète qui s'est tu",
    "Arthur Rimbaud a écrit Le Bateau ivre à 16 ans et toute son œuvre avant 21 ans.",
    "Ensuite, plus un vers : il part en Afrique, à Harar, faire du commerce (café, peaux, et même des armes). Le plus grand poète de sa génération est devenu négociant."],
  ["La Joconde, célèbre grâce à un voleur",
    "En 1911, un vitrier italien, Vincenzo Peruggia, décroche La Joconde du Louvre et repart avec, cachée sous sa blouse. Apollinaire est arrêté, et Picasso interrogé.",
    "Avant le vol, c'était un tableau parmi d'autres. Après deux ans de une dans les journaux, elle est devenue le tableau le plus célèbre du monde."],
  ["Le général Dumas",
    "Le père d'Alexandre Dumas, Thomas-Alexandre, était le fils d'un marquis normand et d'une femme esclave de Saint-Domingue.",
    "Il est devenu le premier général d'origine afro-antillaise de l'armée française. Son fils s'en est inspiré pour Le Comte de Monte-Cristo."],
  ["Maupassant déjeunait sous la tour Eiffel",
    "En 1887, Maupassant signe avec d'autres artistes une protestation contre la « tour inutile et monstrueuse » de M. Eiffel.",
    "On raconte qu'il déjeunait ensuite au restaurant de la tour : c'était, disait-il, le seul endroit de Paris d'où on ne la voyait pas."],
  ["Newton, ruiné par la folie des hommes",
    "En 1720, Isaac Newton place une fortune dans la Compagnie des mers du Sud, dont l'action s'envole. Il revend, puis rachète au sommet, juste avant le krach.",
    "Il y perd l'équivalent de millions d'euros. Il aurait dit : « Je sais calculer le mouvement des corps célestes, mais pas la folie des hommes. »"],
  ["Tycho Brahe et son nez de métal",
    "En 1566, le jeune astronome danois Tycho Brahe se bat en duel avec un cousin, à propos, dit-on, d'une formule de mathématiques.",
    "Il y perd une partie du nez et porte, toute sa vie, une prothèse en métal. On a retrouvé dans sa tombe des traces de laiton."],
  ["« L'argent n'a pas d'odeur »",
    "L'empereur Vespasien taxe l'urine des latrines publiques de Rome, récoltée par les teinturiers pour blanchir les étoffes. Son fils Titus s'en indigne.",
    "Vespasien lui met une pièce sous le nez : « Pecunia non olet », l'argent n'a pas d'odeur. C'est pour cela que les urinoirs publics s'appelaient des « vespasiennes »."],
  ["Le docteur Guillotin n'a rien inventé",
    "Le médecin Joseph-Ignace Guillotin a seulement proposé, en 1789, une même mort, rapide, pour tous les condamnés. La machine a été mise au point par le chirurgien Antoine Louis.",
    "On l'a d'abord appelée la « louisette ». Mais c'est le nom de Guillotin qui est resté, au grand désespoir de sa famille."],
  ["« Madame Bovary, c'est moi »",
    "C'est la phrase la plus citée de Flaubert : il l'aurait dite pour parler de son héroïne.",
    "Elle n'apparaît dans aucun de ses écrits. On la connaît par un témoignage indirect, rapporté bien après sa mort. Elle est sans doute apocryphe."],
  ["« Élémentaire, mon cher Watson »",
    "C'est la réplique culte de Sherlock Holmes.",
    "Arthur Conan Doyle ne l'a jamais écrite telle quelle : on la doit aux adaptations au théâtre et au cinéma."],
  ["Les ermites de jardin",
    "Au XVIIIe siècle, de riches Anglais faisaient construire dans leur parc une grotte ou une cabane, avec un ermite dedans.",
    "Un vrai, payé pour vivre là, barbe longue et sans se laver, et parfois pour apparaître devant les invités. L'ancêtre du nain de jardin."],
  ["Le mot « quintessence »",
    "Les alchimistes connaissaient quatre éléments : la terre, l'eau, l'air et le feu. Ils en cherchaient un cinquième, l'éther, le plus pur de tous, dont seraient faits les astres.",
    "En latin, quinta essentia, « la cinquième essence ». Demander la quintessence, c'est demander ce qui reste quand on a tout distillé."],
  ["Hugo et les vers en exil",
    "Exilé par Napoléon III, Victor Hugo vit dix-neuf ans sur les îles anglo-normandes, face à la France.",
    "Il écrit chaque matin debout, devant un pupitre, au dernier étage de sa maison de Guernesey, et c'est là qu'il termine Les Misérables. L'empereur l'a chassé : il en a tiré son chef-d'œuvre."],
  ["La Fontaine n'a pas inventé ses fables",
    "La Cigale et la Fourmi, Le Corbeau et le Renard : on les croit de La Fontaine.",
    "Il les a reprises à Ésope, un Grec du VIe siècle avant notre ère, et les a mises en vers. Son génie n'est pas l'histoire, c'est la façon de la dire."]
];

// Pour la version sombre : les anecdotes noires de l'Histoire [titre, récit, chute]
const quintNoires = [
  ["Le procès du cadavre",
    "En 897, le pape Étienne VI fait déterrer son prédécesseur, Formose, mort depuis des mois. Le cadavre, revêtu des habits pontificaux, est assis sur un trône et jugé.",
    "Reconnu coupable, il a trois doigts coupés et finit jeté dans le Tibre. Quelques mois plus tard, Étienne VI est lui-même renversé et étranglé."],
  ["Les momies en poudre",
    "Du Moyen Âge au XVIIIe siècle, les apothicaires d'Europe vendaient de la « mumia » : de la poudre de momie égyptienne, contre les maux de tête ou les blessures.",
    "On la mélangeait à du vin ou à du miel. Quand les vraies momies manquaient, on en fabriquait avec des cadavres récents."],
  ["Mozart et son canon",
    "Mozart a composé un canon à six voix au titre allemand très clair : « Leck mich im Arsch ».",
    "« Lèche-moi le derrière ». Joué dans les salons, chanté par des chœurs : la vulgarité, version génie."],
  ["L'argent n'a pas d'odeur",
    "L'empereur Vespasien taxe l'urine des latrines publiques, vendue aux teinturiers pour blanchir les toges.",
    "Quand son fils s'en offusque, il lui fait sentir une pièce : « Pecunia non olet. » Depuis, les urinoirs s'appellent des vespasiennes."],
  ["Le nom maudit de Guillotin",
    "Le docteur Guillotin voulait une mort plus humaine pour tous les condamnés. La machine porte son nom.",
    "Ses enfants ont demandé à l'État de rebaptiser la guillotine. Refus, dit-on : ce sont eux qui ont dû changer de nom."],
  ["Lavoisier",
    "Le père de la chimie moderne est guillotiné en 1794, non pour ses travaux, mais parce qu'il avait été fermier général, collecteur d'impôts.",
    "Une tête qui avait compris la combustion tombe en une seconde. Rien ne se perd, rien ne se crée."],
  ["La mort de Tycho Brahe",
    "Selon la légende, l'astronome Tycho Brahe, invité à un banquet à Prague, n'osa pas quitter la table pour aller se soulager, par politesse envers son hôte.",
    "Il mourut onze jours plus tard. Les historiens discutent encore de la cause exacte, mais la morale est restée : la politesse peut tuer."],
  ["Les ermites à louer",
    "Au XVIIIe siècle, en Angleterre, on louait des ermites pour décorer son jardin : sept ans dans une grotte, sans se laver ni se couper les ongles.",
    "Le contrat le plus connu promettait une somme rondelette… à condition de tenir jusqu'au bout. L'un d'eux fut, dit-on, surpris au pub au bout de trois semaines."]
];

// La sortie de scène : la dernière phrase avant de partir
const quintSorties = [
  "Je vous laisse : la soirée était trop belle pour que je l'abîme en restant.",
  "Je m'éclipse, comme la lune : discrètement, mais on remarquera mon absence.",
  "Je pars avant d'avoir dit une bêtise. C'est rare, profitons-en.",
  "Bonsoir. Je vais rêver de cette conversation, en mieux.",
  "Je file, mais je vous laisse mon esprit : prenez-en soin.",
  "Il faut toujours partir au moment où l'on aimerait rester.",
  "Je me retire, comme l'aède après son dernier chant.",
  "Que la nuit vous soit douce et la mémoire indulgente.",
  "Je prends congé. À demain, si le monde tient jusque-là.",
  "Je vous quitte avec regret, ce qui est un luxe : merci de me l'avoir offert."
];

const quintSortiesSombres = [
  "Je vous laisse à vos ténèbres : elles vous vont si bien.",
  "Je pars avant que l'un de nous ne devienne intéressant.",
  "Adieu, misérables. Je vous aime, mais de loin.",
  "Je vais maudire ailleurs : ici, c'est déjà fait.",
  "Dormez bien. Moi, je veille sur vos secrets.",
  "Bonsoir, faquins. Que vos rêves soient courts.",
  "Je m'en vais comme je suis venu : sans prévenir, et en emportant le dessert."
];

// Le défi du soir : « {mot} » est remplacé par un mot de l'appli
const quintDefis = [
  "Place « {mot} » dans une conversation, sans en avoir l'air.",
  "Fais un compliment avec « {mot} » (si le mot s'y prête… ou même s'il ne s'y prête pas).",
  "Raconte l'anecdote du soir à quelqu'un, et guette le moment où il dit « Non ?! ».",
  "Utilise « {mot} » dans un message, et attends qu'on te demande ce que ça veut dire.",
  "Cite la réplique du soir en prenant la voix d'un tragédien, au moment le plus inattendu."
];

const quintDefisSombres = [
  "Traite quelqu'un de « {mot} », avec le plus doux des sourires.",
  "Raconte l'anecdote noire au dessert, et observe qui repose sa fourchette.",
  "Glisse « {mot} » dans la conversation comme si c'était un compliment.",
  "Lance la rumeur du soir… puis révèle son fin mot avec un air de détective."
];

// L'élixir ultime : toutes les gouttes réunies en une seule tirade, à déclamer ce soir
// o = { anecdote: [titre, récit, chute], mot, definition, replique, auteur, sortie, sombre, humour }
function tiradeDuSoir(o) {
  const court = function (t) {
    const s = (t || "").split(/[;(]/)[0].replace(/[\s.:,]+$/, "");
    return s.charAt(0).toLowerCase() + s.slice(1);
  };
  const auteur = (o.auteur || "").split(",")[0];
  if (o.sombre) {
    return "Approchez, pauvres mortels, et écoutez. " + o.anecdote[1] + " " + o.anecdote[2] +
      " Retenez ce mot, « " + o.mot + " » : " + court(o.definition) + ". C'est ce que vous êtes, et je vous aime ainsi. " +
      (o.humour ? "Et puisqu'on parle de choses gaies : " + o.humour + " " : "") +
      "Sur ce : " + o.sortie;
  }
  return "Mes amis, une goutte d'histoire. " + o.anecdote[1] + " " + o.anecdote[2] +
    " Retenez ce mot, « " + o.mot + " » : " + court(o.definition) + ". " +
    (o.replique ? "Et, comme dirait " + auteur + " : « " + o.replique + " » " : "") +
    "Sur ce, je lève mon verre… et je vous laisse : " + o.sortie.charAt(0).toLowerCase() + o.sortie.slice(1);
}

// Pour le site : la quintessence du jour (anecdote, défi, sortie)
function quintessenceDuJour(numero) {
  return {
    anecdote: quintAnecdotes[numero % quintAnecdotes.length],
    sortie: quintSorties[numero % quintSorties.length],
    defi: quintDefis[(numero + 2) % quintDefis.length]
  };
}
