// Les fiches « faites main » : pas une définition de plus, mais une scène, comme dans un carnet.
// Format : "Mot": { scene: "…", aussi?: "l'autre sens", degainer?: "quand le placer", piege?: "…", origine?: "…" }
// Chaque fiche a sa forme : on ne remplit que ce qui vaut la peine d'être dit pour ce mot-là.
// Textes originaux, écrits pour l'appli. La définition courte (mots.js, mots-plus.js) reste pour les jeux.
const fiches = {
  "Opprobre": {
    scene: "Le village entier qui se tait quand tu passes, les rideaux qui bougent, les regards en coin à la boulangerie. La honte, mais pas celle qu'on garde pour soi : celle que les autres te collent sur le dos, en public.",
    degainer: "Quand un scandale éclabousse toute une famille : « Ce procès a jeté l'opprobre sur leur nom. »",
    piege: "C'est un nom masculin : « un opprobre », « l'opprobre est tombé ».",
  },
  "Histrion": {
    scene: "Ce comédien qui roule des yeux, hurle chaque réplique et attend les applaudissements avant même d'avoir fini. Dans la Rome antique, c'était le bouffon des tréteaux. Aujourd'hui, c'est aussi ce politicien qui transforme chaque plateau télé en numéro de cirque.",
    degainer: "Devant quelqu'un qui joue la comédie pour qu'on le regarde, plutôt que pour dire quelque chose.",
  },
  "Prolixe": {
    scene: "Tu demandes à ton oncle comment s'est passé son voyage. Quarante minutes plus tard, il en est encore à l'escale à Francfort. Il est prolixe : il met trois pages là où trois lignes suffisaient.",
    aussi: "Ça marche pour l'écrit : un mail prolixe, un roman prolixe.",
    degainer: "Pour te moquer gentiment de toi-même : « Pardon, je suis un peu prolixe ce soir. »",
  },
  "Falot": {
    scene: "Au dîner, il y avait Marc, Sophie, les cousins… et quelqu'un d'autre, mais personne n'arrive à se souvenir de qui. C'est le falot : pas méchant, pas désagréable, juste sans relief, comme une lumière qui éclaire à peine.",
    origine: "Un falot, c'était une grosse lanterne. Une lumière de falot, ça n'éblouit personne : une personne falote non plus.",
  },
  "Chantre": {
    scene: "Elle ne te parle que de ça : le vélo en ville, le vélo pour la santé, le vélo contre la pollution. À chaque dîner, elle chante ses louanges. C'est la chantre du vélo.",
    aussi: "À l'église, le chantre est celui qui lance et dirige les chants.",
    degainer: "« Se faire le chantre de… » : défendre une cause avec passion, presque en chantant.",
  },
  "Capillotracté": {
    scene: "Ton pote t'explique que s'il est en retard, c'est à cause de la pleine lune, qui a perturbé son réveil, qui a fait sonner sa voisine, qui… Stop. C'est capillotracté : tiré par les cheveux, au sens propre, mais en latin pour rire.",
    origine: "« Capillus », le cheveu, et « tractus », tiré. Un mot savant qui se moque des raisonnements forcés.",
  },
  "Pernicieux": {
    scene: "Le mal qui ne fait pas de bruit. Tu ne le vois pas venir : une petite habitude, une petite remarque, un petit doute… et un jour, les dégâts sont là. Se comparer aux autres sur les réseaux, par exemple : pas grave sur le moment, pernicieux sur la durée.",
    piege: "Ne le confonds pas avec « délétère » : le délétère est toxique, le pernicieux est toxique ET sournois.",
  },
  "Débonnaire": {
    scene: "Le grand-père qu'on n'arrive jamais à fâcher. Tu casses un vase, il hausse les épaules. Tu arrives en retard, il te sert un café. Doux, bienveillant, presque trop indulgent.",
    degainer: "« Sous ses airs débonnaires… » : la formule parfaite pour quelqu'un de gentil en apparence mais redoutable.",
    origine: "Autrefois « de bonne aire », de bonne race. Un roi carolingien était surnommé « le Débonnaire ».",
  },
  "Délétère": {
    scene: "Tu entres dans l'open space et tu le sens tout de suite : personne ne se parle, les sourires sont crispés, les portes claquent. L'ambiance est délétère. Elle empoisonne doucement tout le monde.",
    aussi: "Au sens propre, un gaz délétère est toxique : celui que respiraient les mineurs dans les galeries.",
    degainer: "Presque toujours avec « climat » ou « ambiance ».",
  },
  "Tergiverser": {
    scene: "« On prend la pizza ? Ou les sushis ? Non, attends… Tu préfères quoi, toi ? » Vingt minutes plus tard, toujours rien de commandé. Tu tergiverses : tu fais des détours pour ne pas trancher.",
    origine: "Du latin « tergum vertere », tourner le dos. Celui qui tergiverse tourne le dos à la décision.",
  },
  "Pantois": {
    scene: "Elle pose sa fourchette et annonce : « Je pars vivre au Japon le mois prochain. » Silence. Ta mère a la bouche entrouverte, ton père n'a plus de mots. Toute la tablée est restée pantoise.",
    degainer: "Presque toujours avec « rester » ou « laisser » : « Ça m'a laissé pantois. »",
  },
  "Outrecuidance": {
    scene: "Le stagiaire arrivé lundi qui corrige le chef devant ses propres clients. Ce n'est pas seulement de l'assurance : c'est se croire tellement au-dessus qu'on se permet l'impolitesse.",
    degainer: "« Il a eu l'outrecuidance de… » : la tournure classique, toujours suivie d'un acte qui fait hausser les sourcils.",
    origine: "« Outre » (au-delà) et « cuider » (croire, en ancien français) : se croire au-delà de ce qu'on est.",
  },
  "Narquois": {
    scene: "Tu reprends du dessert alors que tu as annoncé ton régime le matin même. Ton frère ne dit rien. Il te regarde juste, un petit sourire en coin. Ce sourire-là est narquois.",
    degainer: "Un air, un ton, un sourire narquois : c'est souvent dans le regard que ça se passe.",
  },
  "Désuétude": {
    scene: "Le baisemain, le vouvoiement des parents, les cartes postales de vacances… Personne ne les a interdits : on a simplement arrêté de les faire. Ils sont tombés en désuétude, comme un vieux manteau oublié au grenier.",
    aussi: "En droit, une loi peut tomber en désuétude : jamais abrogée, mais plus appliquée.",
    degainer: "L'expression reine : « tomber en désuétude ». Et l'adjectif : désuet.",
  },
  "Vitupérer": {
    scene: "Chaque matin, coincé dans les bouchons, il frappe le volant et vitupère contre les feux rouges, les cyclistes, le maire et la météo. Pas un murmure : une vraie colère à voix haute.",
    piege: "En usage courant, on dit « vitupérer contre quelque chose ». « Vitupérer quelqu'un » est plus littéraire.",
  },
  "Valétudinaire": {
    scene: "Un rhume en novembre, une migraine en décembre, le dos en janvier. Ta grand-tante ne sort jamais sans son châle et son petit flacon de pastilles. Elle est valétudinaire : la santé qui ne tient jamais bien.",
    origine: "Ironie du latin : « valetudo » voulait dire la santé, la bonne comme la mauvaise.",
  },
  "Doléances": {
    scene: "La réunion de copropriété : l'ascenseur en panne, les poubelles qui débordent, le voisin du 3e qui joue de la batterie. Chacun arrive avec sa liste. Ce sont des doléances : des plaintes qu'on adresse à quelqu'un qui pourrait y remédier.",
    origine: "En 1789, les Français ont rédigé des « cahiers de doléances » pour le roi. On connaît la suite.",
  },
  "Fatuité": {
    scene: "Il explique le football à un ancien champion du monde. Il corrige la prononciation d'un Italien sur un mot italien. Il est tellement content de lui qu'il en devient ridicule : c'est la fatuité.",
    origine: "Le défaut du « fat ». Les deux viennent du latin « fatuus », sot.",
  },
  "Contingence": {
    scene: "Si tu avais raté ce bus, tu ne l'aurais jamais rencontré. Votre histoire tient à ça : une minute de retard. C'est la contingence, ce qui aurait très bien pu ne pas arriver.",
    aussi: "Au pluriel, les « contingences », ce sont les petits soucis concrets : le loyer, les courses, les papiers.",
    degainer: "En philosophie, le contingent s'oppose au nécessaire.",
  },
  "Sardonique": {
    scene: "Le méchant du film a enfin enfermé le héros. Il se retourne lentement et éclate d'un rire froid, sans joie, qui se réjouit du malheur. Ce rire-là est sardonique.",
    origine: "Dans l'Antiquité, une plante de Sardaigne figeait le visage des mourants dans une grimace qui ressemblait à un rire.",
  },
  "Folâtrer": {
    scene: "Un dimanche de printemps, les enfants courent dans l'herbe sans but, se roulent par terre, rient pour rien. Ils folâtrent, comme des chiots lâchés dans un jardin.",
    degainer: "Pour des adultes aussi : « Au lieu de réviser, il folâtrait au soleil. »",
  },
  "Sommité": {
    scene: "Quand les autres chirurgiens ont un cas impossible, c'est elle qu'ils appellent. Elle est au sommet de sa discipline : une sommité.",
    aussi: "En botanique, les « sommités fleuries » sont les extrémités des plantes, celles qu'on cueille pour les tisanes.",
  },
  "Sobriquet": {
    scene: "Au collège, il était lent et un peu rêveur. Quelqu'un l'a appelé « la Tortue », et c'est resté jusqu'au bac. Un sobriquet, c'est ce surnom qu'on te colle, rarement pour te faire plaisir.",
    piege: "Un surnom peut être tendre ; un sobriquet a presque toujours une pointe de moquerie.",
  },
  "Apocryphe": {
    scene: "Tu vois passer sur les réseaux une belle phrase signée Einstein. Sauf qu'Einstein ne l'a jamais dite ni écrite. La citation est apocryphe : son origine ne tient pas.",
    aussi: "En religion, les évangiles apocryphes sont ceux que l'Église n'a pas retenus dans la Bible.",
    degainer: "Très utile sur Internet, où la moitié des citations virales sont apocryphes.",
  },
  "Cantilène": {
    scene: "La berceuse qu'une grand-mère fredonne à mi-voix, toujours la même, un peu triste, presque sans paroles. C'est une cantilène.",
    aussi: "Avec ironie, c'est la rengaine qu'on entend sans arrêt : « Toujours la même cantilène : c'était mieux avant. »",
  },
  "Coercitif": {
    scene: "Pas de discussion possible : une amende, une interdiction, une menace. Ce qui est coercitif t'oblige à obéir, que tu le veuilles ou non.",
    aussi: "On parle aujourd'hui de « contrôle coercitif » dans un couple : contrôler l'argent, les sorties, le téléphone de l'autre, parfois sans un seul coup.",
  },
  "Coterie": {
    scene: "Au festival, c'est toujours la même petite bande qui se donne les prix, se cite, se félicite, et regarde les autres de haut. Une coterie : un cercle fermé qui défend ses intérêts.",
    piege: "Toujours péjoratif. Une coterie, c'est plus fermé et plus calculateur qu'une simple bande d'amis.",
  },
  "Emphase": {
    scene: "« Mesdames et messieurs, j'ai l'immense honneur de vous annoncer… que le grille-pain est réparé. » Il parle avec emphase : beaucoup trop de grandeur pour pas grand-chose.",
    aussi: "En grammaire, l'emphase met un mot en relief : « Lui, je ne l'aime pas. »",
    piege: "Faux ami : en anglais, « emphasis » veut juste dire « insister ». En français, c'est souvent un excès.",
  },
  "Ergoter": {
    scene: "L'addition fait 84 euros. Il sort sa calculette, conteste le prix du café, demande si le pain était compris. On ne va pas ergoter pour deux euros, si ?",
    origine: "Du latin « ergo », donc : le mot préféré de ceux qui veulent toujours avoir le dernier mot.",
  },
  "Exhalaison": {
    scene: "Tu passes devant la boulangerie à six heures du matin : le pain chaud t'enveloppe. Dix mètres plus loin, la bouche d'égout. Deux exhalaisons, la meilleure et la pire.",
    origine: "Même famille qu'« exhaler » et qu'« haleine ».",
  },
  "Extatique": {
    scene: "Elle ouvre la lettre d'admission, la relit trois fois, puis lève les yeux, le visage illuminé, comme absente au monde. Elle est extatique, transportée de joie.",
    aussi: "Dans l'art religieux, les saints sont souvent peints extatiques, les yeux levés au ciel.",
    piege: "À ne pas confondre avec « statique », qui veut dire immobile.",
  },
  "Fabliau": {
    scene: "Un paysan malin, un curé gourmand, un mari trompé, et une chute qui fait rire toute la place du marché. Au Moyen Âge, on racontait ces petites histoires en vers : les fabliaux, ancêtres de nos sketchs.",
  },
  "Farder": {
    scene: "Avant d'entrer en scène, la comédienne se farde : poudre, rouge, khôl. Le rapport annuel aussi se farde : on arrange les chiffres pour qu'ils aient bonne mine.",
    degainer: "Parler « sans fard », c'est parler franchement, sans maquiller la vérité.",
  },
  "Faste": {
    scene: "Deux mots qui se cachent sous le même habit. Le nom, c'est le luxe éclatant d'un mariage royal, les dorures, les lustres. L'adjectif, c'est la bonne période, celle où tout réussit.",
    degainer: "« Une année faste » : une année où tout a marché.",
    piege: "Son contraire comme adjectif, c'est « néfaste ». Jour faste, jour néfaste.",
  },
  "Fat": {
    scene: "Il se recoiffe dans chaque vitrine et se croit irrésistible. Il est fat : vaniteux et un peu sot à la fois.",
    piege: "On prononce le t : « fatte ». Et rien à voir avec l'anglais « fat » (gros).",
  },
  "Fruste": {
    scene: "Imagine une vieille table de ferme : pas vernie, pas poncée, des nœuds dans le bois, mais elle a vu passer trois générations. C'est ça, être fruste : brut, sans finition, et pas forcément moins bon pour autant. Ça se dit d'un objet, d'une manière d'être, ou de ce cousin qui mange avec les doigts au mariage mais qui sera le premier à t'aider à déménager.",
    degainer: "Quand quelqu'un a le cœur sur la main et les manières d'un ours : « Un peu fruste, mais en or. »",
    piege: "Presque tout le monde dit « frustre ». Ça n'a rien à voir avec « frustré » : il n'y a pas de r après le t.",
  },
  "Galéjade": {
    scene: "« Le poisson que j'ai pêché ce matin ? Grand comme la barque, je te jure ! » Sur le port, tout le monde sourit. C'est une galéjade : une histoire énorme racontée avec aplomb, juste pour le plaisir.",
    origine: "Un mot de Provence. Le verbe, c'est « galéjer ». Et la légende veut qu'une sardine ait un jour bouché le port de Marseille.",
  },
  "Galvauder": {
    scene: "« Génie », « légende », « incroyable » : à force de les mettre partout, ces mots ne veulent plus rien dire. On les a galvaudés, usés jusqu'à la corde.",
    aussi: "On galvaude aussi un talent quand on le gâche dans des choses indignes de lui.",
  },
  "Gascon": {
    scene: "D'Artagnan, Cyrano : grande gueule, panache, et un peu d'exagération dans chaque récit. En littérature, le Gascon, c'est le fanfaron sympathique.",
    degainer: "« Une promesse de Gascon » : beaucoup de mots, peu d'actes.",
  },
  "Glose": {
    scene: "Dans les vieux manuscrits, les marges sont couvertes de petites notes griffonnées pour expliquer un passage difficile. Ce sont des gloses.",
    aussi: "Au bureau, les gloses, ce sont aussi les commentaires (pas toujours bienveillants) sur les vacances d'un collègue.",
    origine: "Le « glossaire » est de la même famille.",
  },
  "Hâbleur": {
    scene: "La première fois, il avait croisé une star dans un aéroport. La deuxième fois, ils avaient pris un verre. La troisième, ils étaient amis d'enfance. Le hâbleur gonfle ses histoires à chaque fois qu'il les raconte.",
    origine: "De l'espagnol « hablar », parler. Le hâbleur parle… surtout de lui.",
  },
  "Hâve": {
    scene: "Trois jours perdus en mer. Quand les sauveteurs les ont recueillis, les naufragés avaient le visage creusé, gris, les yeux enfoncés. Ils étaient hâves.",
    degainer: "Un mot court et très littéraire, pour un visage marqué par la faim, la fatigue ou la maladie.",
  },
  "Immuable": {
    scene: "Chaque dimanche depuis trente ans : croissant, journal, sieste. Il pleut, il neige, la Terre tremble : son rituel ne bouge pas. Il est immuable.",
    origine: "« Im » (pas) et « muable » (qui change), comme dans « mutation ».",
  },
  "Imprécation": {
    scene: "Chassée du village, la vieille femme se retourne sur le chemin, lève le bras et crie : « Que vos récoltes pourrissent ! » Ce n'est pas une insulte : c'est une imprécation, une malédiction lancée avec solennité.",
    piege: "Une insulte veut blesser ; une imprécation appelle le malheur.",
  },
  "Ingénu": {
    scene: "Pendant le repas de famille, l'enfant demande à voix haute pourquoi tonton ne parle plus à tata. Il ne pense pas à mal, il demande vraiment. C'est une question ingénue : naïve et sincère.",
    aussi: "Au théâtre, « l'ingénue » est le rôle de la jeune fille candide.",
    origine: "Voltaire a écrit « L'Ingénu » : un jeune Huron qui découvre la France avec un regard tout neuf.",
  },
  "Liturgie": {
    scene: "À l'église, chaque geste a sa place : les chants, les prières, l'ordre de la messe. C'est la liturgie. Et chez toi, le match du dimanche, avec le même fauteuil et les mêmes chips, est devenu une liturgie familiale.",
    degainer: "Au figuré, le mot apporte une touche d'ironie à un rituel du quotidien.",
  },
  "Magnanime": {
    scene: "Elle vient de remporter la finale. Au lieu de célébrer, elle traverse le court pour consoler son adversaire en larmes. Elle est magnanime : elle a une grande âme.",
    origine: "« Magna » (grande) et « anima » (âme).",
  },
  "Prosaïque": {
    scene: "La demande en mariage était parfaite : coucher de soleil, violons, larmes de joie. Puis, sur le chemin du retour : « Au fait, qui sort la poubelle ce soir ? » Retour au prosaïque.",
    origine: "De « prose » : ce qui ne s'élève jamais jusqu'à la poésie.",
  },
  "Psalmodier": {
    scene: "Le conférencier lit ses diapositives d'une voix qui ne monte jamais, ne descend jamais. Au troisième rang, quelqu'un s'endort. Il psalmodie, comme un moine qui chante les psaumes sur une seule note.",
  },
  "Roué": {
    scene: "Il connaît tous les tours : flatter au bon moment, promettre sans s'engager, faire croire que l'idée vient de toi. Un négociateur roué : habile et sans scrupules.",
    origine: "Au XVIIIe siècle, les compagnons de débauche du Régent méritaient, disait-on, « le supplice de la roue ». On les a appelés les roués.",
  },
  "Taxonomie": {
    scene: "Imagine un immense cabinet en bois avec des milliers de petits tiroirs étiquetés. Chaque être vivant a le sien : règne, famille, genre, espèce. C'est la taxonomie, l'art de ranger le monde.",
    aussi: "Hors de la biologie, c'est tout système de classement : les rayons d'un site de vente, par exemple.",
  },
  "Trivial": {
    scene: "Un mot à trois visages. Pour ta grand-mère, une blague triviale est vulgaire. Pour ton prof de maths, une solution triviale est évidente. Et pour tout le monde, parler de choses triviales, c'est parler de la météo.",
    origine: "Du latin « trivium », le carrefour : ce qu'on entend à tous les coins de rue.",
  },
  "Alcôve": {
    scene: "Dans les vieilles maisons, le lit était caché dans un renfoncement, derrière un rideau. Ce petit coin d'intimité s'appelle une alcôve. Les « secrets d'alcôve », ce sont donc les secrets d'amour.",
    origine: "De l'arabe « al-qubba », la petite pièce voûtée.",
  },
  "Allègre": {
    scene: "Samedi matin, il fait beau, le marché t'attend, tu n'as rien de prévu. Tu marches d'un pas allègre : vif, léger, de bonne humeur.",
    origine: "La même famille que l'allégresse, et que l'« allegro » des musiciens.",
  },
  "Cacochyme": {
    scene: "« Laisse, je vais porter ton sac. — Je ne suis pas encore un vieillard cacochyme ! » Le mot évoque le vieil homme qui tousse, boite et se plaint de tout, mais on l'emploie presque toujours pour rire.",
    origine: "Du grec : « mauvaises humeurs », les liquides du corps selon la médecine d'autrefois.",
  },
  "Chicaneur": {
    scene: "Il conteste chaque ligne de la facture, chaque article du règlement, chaque règle du Monopoly. Le chicaneur transforme le moindre détail en procès.",
    aussi: "Sur un circuit automobile, une chicane, c'est un passage en zigzag. Le chicaneur, lui, fait zigzaguer les conversations.",
  },
  "Claustral": {
    scene: "Les volets fermés, le silence, les journées toutes pareilles, sans voir personne. Il mène une vie claustrale, comme un moine dans son cloître.",
    origine: "La même famille que « claustrophobie », la peur d'être enfermé.",
  },
  "Déjeté": {
    scene: "La vieille clôture du jardin, penchée par des années de vent. L'arbre au bord de la falaise, tordu vers la mer. Ils sont déjetés : sortis de leur axe.",
    aussi: "En familier, après une nuit blanche, on peut se sentir « tout déjeté ».",
  },
  "Gastrolâtre": {
    scene: "Il choisit ses vacances selon les restaurants, parle de son dernier repas comme d'une œuvre d'art, et planifie le dîner pendant le déjeuner. Le gastrolâtre fait de son ventre un dieu.",
    origine: "Rabelais l'a rendu célèbre : « gaster » (le ventre) et « latreia » (l'adoration).",
  },
  "Grabat": {
    scene: "Une mansarde glacée, une paillasse posée à même le sol, une couverture trouée. Ce n'est pas un lit, c'est un grabat.",
    degainer: "Souvent dans les romans du XIXe siècle : « sur son grabat », pour dire la misère ou les derniers jours d'un malade.",
  },
  "Guigner": {
    scene: "Pendant le contrôle, il guigne la copie de son voisin, du coin de l'œil, l'air de rien. Et au bureau, elle guigne le poste de sa responsable depuis des mois.",
    piege: "Rien à voir avec la guigne (la malchance)… quoique, à force de guigner, on finit parfois par l'attraper.",
  },
  "Incurie": {
    scene: "Personne n'a repeint, personne n'a réparé, personne n'a signalé les fissures. Et un jour, le pont s'est effondré. Ce n'est pas un accident : c'est l'incurie, un manque total de soin.",
    origine: "« In » (pas) et « cura » (le soin). Plus grave que « négligence ».",
  },
  "Ineffable": {
    scene: "La mer au lever du jour, le premier cri d'un bébé, une musique qui te serre la gorge. Tu cherches les mots et aucun ne suffit. C'est ineffable.",
    aussi: "Avec ironie, on dit « l'ineffable » de quelqu'un dont le ridicule dépasse les mots.",
  },
  "Minauder": {
    scene: "Les yeux qui papillonnent, la petite voix, la mèche qu'on remet derrière l'oreille pour la photo. Elle minaude : elle prend des manières faussement mignonnes pour plaire.",
  },
  "Pavoiser": {
    scene: "Le 14 Juillet, la mairie sort les drapeaux. Ton équipe gagne un match sur dix, et ton frère sort les drapeaux aussi. Il n'y a vraiment pas de quoi pavoiser !",
    origine: "Le pavois était un grand bouclier sur lequel on hissait les rois francs pour les acclamer.",
  },
  "Pensum": {
    scene: "Remplir sa déclaration d'impôts, trier quinze ans de papiers, relire un rapport de quatre-vingts pages. Long, ennuyeux, obligatoire : un pensum.",
    aussi: "À l'école d'autrefois, c'était une punition écrite : copier cent fois la même phrase.",
    piege: "On prononce « pin-somme ».",
  },
  "Persiflage": {
    scene: "Il ne t'insulte jamais. Il te complimente, mais avec un ton si appuyé que toute la salle comprend qu'il se moque. C'est du persiflage : une moquerie élégante, enrobée de politesse.",
    origine: "Pense à « siffler » : on siffle quelqu'un, mais tout en douceur.",
  },
  "Saurien": {
    scene: "L'iguane immobile sur sa pierre, au soleil, qui te fixe sans cligner des yeux. C'est un saurien, de la famille des lézards.",
    aussi: "Au figuré, un regard de saurien est froid, immobile et un peu inquiétant.",
    origine: "Du grec « sauros », le lézard, comme dans « dinosaure ».",
  },
  "Superfluité": {
    scene: "Le troisième set de tasses, les câbles dont tu ne sais plus à quoi ils servent, les vêtements jamais portés. Le jour du déménagement, tu découvres toutes tes superfluités.",
    degainer: "Voltaire, avec malice : « Le superflu, chose très nécessaire. »",
  },
  "Sylphe": {
    scene: "Dans les vieilles légendes, les sylphes sont des esprits de l'air, invisibles et légers, qui dansent dans la brume du matin.",
    aussi: "Au féminin, une « sylphide », c'est une femme d'une grâce aérienne, comme une danseuse qui semble ne pas toucher le sol.",
  },
  "Télescoper": {
    scene: "Sur l'autoroute, le camion freine trop tard et télescope trois voitures. Dans un bon roman, le passé et le présent se télescopent aussi : ils se rentrent dedans.",
    origine: "Comme les tubes d'une longue-vue, qui rentrent les uns dans les autres.",
  },
  "Thésauriser": {
    scene: "Le dragon couché sur son tas d'or, qui ne dépense jamais une pièce. Ou ton oncle qui cache ses billets dans une boîte à chaussures. Ils thésaurisent : ils amassent sans jamais faire circuler.",
    origine: "La même racine que « trésor » (« thesaurus »).",
  },
  "Verdeur": {
    scene: "Quatre-vingts ans, et il grimpe encore aux arbres pour cueillir les cerises. Il a gardé la verdeur de sa jeunesse : la sève, la vigueur.",
    aussi: "La verdeur du langage, c'est sa crudité. Et un vin qui a de la verdeur est encore un peu acide.",
  },

  // Série 2
  "S'absoudre": {
    scene: "Il a menti, il le sait. Mais après une nuit de réflexion, il décide que « tout le monde fait pareil » et se sent beaucoup mieux. Il s'est absous tout seul, sans demander l'avis de personne.",
    aussi: "Absoudre quelqu'un, c'est le pardonner (le prêtre) ou le déclarer non coupable (le tribunal).",
    piege: "Absous au masculin, absoute au féminin. Jamais « absout ».",
  },
  "Allégation": {
    scene: "« Selon une source proche du dossier, le ministre aurait… » Rien n'est prouvé, mais c'est dit. Une allégation attend encore sa preuve, et elle peut tomber à l'eau.",
    degainer: "Pour rappeler à quelqu'un que ce qu'il raconte n'est pas encore un fait.",
  },
  "Amalgamer": {
    scene: "Trois casseurs dans une manifestation de dix mille personnes, et le lendemain on entend : « Les manifestants ont tout cassé. » C'est amalgamer : mettre tout le monde dans le même sac.",
    aussi: "Au sens propre, le dentiste amalgame des métaux pour boucher une carie.",
  },
  "Ambivalent": {
    scene: "Ta ville natale : tu l'as fuie dès tes dix-huit ans, et pourtant ton cœur se serre à chaque fois que tu y reviens. Ce que tu ressens pour elle est ambivalent : deux sentiments contraires, en même temps.",
    origine: "« Ambi », les deux, comme dans « ambidextre ».",
  },
  "Anachronisme": {
    scene: "Dans un film sur Napoléon, un figurant porte une montre au poignet. Les spectateurs les plus attentifs l'ont repéré tout de suite : un anachronisme, une chose qui n'est pas à sa place dans le temps.",
    aussi: "Le fax au bureau, en 2026 ? C'est un anachronisme aussi : un vestige d'une autre époque.",
  },
  "Apothicaire": {
    scene: "Une boutique sombre aux murs couverts de pots en faïence, une odeur d'herbes séchées, un homme qui broie des poudres dans un mortier. C'est l'apothicaire, le pharmacien d'autrefois.",
    degainer: "« Un compte d'apothicaire » : un partage d'addition qui tourne au calcul interminable.",
  },
  "Assertion": {
    scene: "« La Terre est plate. » Il le dit avec aplomb, sans sourciller, comme une évidence. C'est une assertion : une phrase qu'on présente comme vraie, qu'elle le soit ou non.",
    piege: "Une assertion affirme ; une allégation affirme sans preuve.",
  },
  "Auguste": {
    scene: "Quand le roi entre, l'auguste assemblée se lève dans un silence parfait : majestueux. Mais sous le chapiteau, l'auguste, c'est le clown au nez rouge qui trébuche sur ses grandes chaussures.",
    origine: "Du nom de l'empereur Auguste. Le clown l'a reçu par ironie.",
  },
  "Bringuebalant": {
    scene: "Le vieux bus de campagne qui grince à chaque virage, les vitres qui tremblent, le siège qui se décroche. Tout y est bringuebalant : rien ne tient vraiment.",
    origine: "On écrit aussi « brinquebalant ». Le mot fait le bruit du cahot quand on le prononce.",
  },
  "Cathartique": {
    scene: "Tu as pleuré tout le long du film, et en sortant tu te sens étrangement léger. Ce qui était coincé en toi est sorti. C'était cathartique.",
    origine: "La « catharsis », la purification en grec. Aristote pensait que la tragédie purgeait les passions du spectateur.",
  },
  "Cantonné": {
    scene: "Vingt ans à jouer la meilleure amie de l'héroïne, jamais l'héroïne elle-même. Elle était cantonnée aux seconds rôles, enfermée dans une case.",
    origine: "Un canton est un petit territoire : on y est cantonné.",
  },
  "Châtier": {
    scene: "Le roi châtie les traîtres. Mais l'écrivain, lui, châtie son style : il relit, il coupe, il polit jusqu'à ce que chaque phrase soit impeccable.",
    degainer: "« Une langue châtiée » : un français soigné, sans un mot de travers.",
    origine: "Le proverbe : « Qui aime bien châtie bien. »",
  },
  "Chérubin": {
    scene: "Les petits anges joufflus aux joues roses qui volettent au plafond des églises. Et, par ressemblance, le bébé qui dort enfin après trois histoires : « Notre chérubin. »",
    piege: "Dans la Bible, les chérubins sont pourtant des anges puissants, rien à voir avec des bébés.",
  },
  "Clivant": {
    scene: "Lance « la pizza à l'ananas » à un dîner et regarde la table se couper en deux camps. Un sujet clivant ne laisse pas de place au milieu.",
    origine: "Le clivage, en géologie, est la ligne où une roche se fend.",
  },
  "Confins": {
    scene: "Là où la route s'arrête, là où les cartes deviennent floues : aux confins de la Mongolie, aux confins du monde connu.",
    aussi: "Au figuré, la frontière entre deux domaines : « aux confins de la science et du rêve ».",
    piege: "Toujours au pluriel.",
  },
  "Consensus": {
    scene: "Deux heures de débat entre amis pour savoir où dîner. Puis quelqu'un dit « italien ? », et tout le monde hoche la tête. Un consensus s'est dégagé.",
    piege: "« Consensuel » est parfois péjoratif : fade, fait pour ne fâcher personne.",
  },
  "Crépiter": {
    scene: "Le soir, au chalet : les bûches qui crépitent dans la cheminée, la pluie qui crépite sur le toit de tôle. Un petit bruit sec, répété, presque rassurant.",
    degainer: "Les applaudissements crépitent aussi, quand ils partent de partout à la fois.",
  },
  "Décharné": {
    scene: "Le chien errant qui rôde près des poubelles : on voit ses côtes sous le pelage. Il est décharné, il n'a plus que la peau sur les os.",
    aussi: "Un arbre décharné, en hiver, n'a plus une seule feuille.",
  },
  "Détonner": {
    scene: "Un enterrement, tout le monde en noir… et lui, avec sa chemise hawaïenne. Il détonne : il est la note fausse du tableau.",
    piege: "DétoNNer (le ton, avec deux n) n'a rien à voir avec déToner (exploser, la détonation).",
  },
  "Discordance": {
    scene: "À 20 h il était chez lui, à 20 h 15 il était au bar, et à 20 h 30 il ne se souvient plus. Les enquêteurs relèvent des discordances : ses versions ne collent pas entre elles.",
    aussi: "En musique, la discordance, c'est quand les sons ne s'accordent pas et font grincer les dents.",
  },
  "Éberlué": {
    scene: "Tu rentres et tu trouves ton chat en train d'ouvrir le frigo tout seul. Tu restes planté là, les yeux ronds : éberlué.",
  },
  "Échine": {
    scene: "Un frisson te parcourt l'échine quand la porte grince dans la maison vide. Ton échine, c'est ton dos, ta colonne.",
    degainer: "« Courber l'échine » : se soumettre. « Refuser de courber l'échine » : garder sa fierté.",
  },
  "Écroué": {
    scene: "Au journal de 20 heures : « Le suspect a été écroué hier soir. » Traduction : il dort en prison, et son nom est inscrit au registre d'entrée.",
    origine: "L'écrou, c'est justement ce registre de la prison. Rien à voir avec la vis.",
  },
  "Enclin": {
    scene: "Quand il est fatigué, il voit tout en noir. Il est enclin au pessimisme, comme une pente sur laquelle il glisse naturellement.",
    piege: "Toujours suivi de « à » : « enclin à pardonner », « enclin à exagérer ».",
  },
  "Éolien": {
    scene: "Au large, les grandes hélices blanches tournent lentement : un parc éolien. Tout ce qui est éolien vient du vent.",
    origine: "Éole, le dieu grec des vents, qui les gardait enfermés dans une outre.",
  },
  "Épigraphe": {
    scene: "Tu ouvres un roman, et avant même le premier chapitre, une phrase de Baudelaire en italique. Elle donne le ton du livre entier : c'est l'épigraphe.",
    piege: "À ne pas confondre avec l'épitaphe, qui est gravée sur une tombe.",
  },
  "Épître": {
    scene: "Il voulait s'excuser. Il t'a envoyé six pages, avec des citations et un post-scriptum. Ce n'est plus une lettre, c'est une épître.",
    aussi: "Dans le Nouveau Testament, les épîtres sont les lettres des apôtres.",
  },
  "Ériger": {
    scene: "Sur la place, on érige une statue en son honneur. Et dans son salon, il a érigé la sieste en art de vivre.",
    degainer: "« S'ériger en juge » : se donner soi-même le droit de juger les autres.",
  },
  "Exhaustif": {
    scene: "Avant de partir en randonnée, elle fait la liste : gourde, lampe, pansements, crème solaire, chaussettes de rechange… Rien n'est oublié. Sa liste est exhaustive.",
    origine: "Du latin « épuiser » : on épuise le sujet jusqu'au bout.",
  },
  "Fac-similé": {
    scene: "Au musée, derrière la vitrine, le manuscrit original de Victor Hugo ? Non : un fac-similé, une copie si fidèle qu'on jurerait voir l'encre encore fraîche. L'original est trop fragile pour être exposé.",
    origine: "Du latin « fac simile », fais semblable. Le mot « fax » en vient.",
  },
  "Factieux": {
    scene: "Une nuit, un petit groupe d'officiers tente de s'emparer du palais. Ils ne représentent qu'eux-mêmes, mais veulent renverser le pouvoir. Ce sont des factieux.",
    origine: "Une faction, c'est un groupe qui se sépare pour comploter.",
  },
  "Faire fi de": {
    scene: "La météo annonçait l'orage, sa mère lui avait dit de prendre un parapluie. Faisant fi de tous les conseils, il est parti en t-shirt.",
    origine: "« Fi ! » était une exclamation de dégoût, comme « pouah ! ».",
  },
  "Félonie": {
    scene: "Au Moyen Âge, le chevalier avait juré fidélité à son seigneur. Il l'a vendu à l'ennemi. Ce n'est pas une simple trahison : c'est une félonie.",
    degainer: "Pour un joueur qui part chez le club rival, les supporters crient à la félonie.",
  },
  "Se fourvoyer": {
    scene: "Pendant des mois, les enquêteurs ont suivi la mauvaise piste, interrogé les mauvaises personnes. Ils se sont fourvoyés : ils ont fait fausse route.",
    origine: "« Fors », hors de, et « voie » : sortir du bon chemin.",
  },
  "Fustiger": {
    scene: "Le lendemain de la catastrophe, l'éditorial ne mâche pas ses mots : incompétence, mensonges, lâcheté. Il fustige le gouvernement, comme on fouetterait avec des mots.",
    origine: "Du latin « fustis », le bâton. Autrefois, fustiger, c'était frapper.",
  },
  "Gérontocratie": {
    scene: "Le bureau du parti a une moyenne d'âge de soixante-quinze ans, et le plus jeune attend son tour depuis vingt ans. C'est une gérontocratie : le pouvoir aux plus vieux.",
    origine: "« Géronto », le vieillard (comme dans gériatrie), et « cratie », le pouvoir.",
  },
  "Grabataire": {
    scene: "Sa grand-mère ne quitte plus son lit. On lui apporte ses repas, on lui fait la lecture, on reçoit les visites dans sa chambre. Elle est grabataire.",
  },
  "Grief": {
    scene: "La réunion de famille tourne mal : chacun ressort ses griefs, le cadeau oublié, la remarque de 2012, l'héritage de tante Lucie. Les reproches qu'on garde au chaud depuis des années.",
    degainer: "« Faire grief à quelqu'un de quelque chose » : le lui reprocher.",
  },
  "Hétéroclite": {
    scene: "Dans la vitrine du brocanteur : un casque viking, une théière anglaise, un vinyle de disco et un crâne de vache. Une collection hétéroclite, où rien ne va avec rien.",
  },
  "Hymen": {
    scene: "Dans les vieux romans, on ne se marie pas : on célèbre l'hymen des jeunes gens. Le mot est poétique et vient d'Hymen, le dieu grec des noces.",
    aussi: "Le mot a aussi un sens médical, en anatomie.",
  },
  "Incoercible": {
    scene: "En pleine réunion sérieuse, un collègue fait une grimace et tu sens le fou rire monter. Tu serres les dents, tu te pinces : rien à faire. Il est incoercible.",
    origine: "Le contraire de « coercitif » : aucune contrainte ne peut le retenir.",
  },
  "Infamant": {
    scene: "Même blanchi par la justice, il ne s'en est jamais remis. L'accusation était infamante : elle a laissé une marque de honte sur son nom.",
  },
  "Injonction": {
    scene: "« Sois heureux, mince, productif, détendu, et souris sur les photos. » Les réseaux sont pleins d'injonctions : des ordres qui ne disent pas leur nom.",
    degainer: "« Une injonction paradoxale » : « Sois spontané ! », un ordre impossible à respecter.",
  },
  "Ineptie": {
    scene: "« Les poissons rouges n'ont que trois secondes de mémoire. » Une ineptie, mille fois répétée, et pourtant fausse.",
    piege: "On prononce « i-nèp-si ».",
  },
  "Intangible": {
    scene: "Ta réputation, ta confiance, ton savoir : tu ne peux pas les toucher, et pourtant ils valent plus que tout le reste. Ce sont des biens intangibles.",
    aussi: "Ça veut aussi dire « sacré, qu'on ne modifie pas » : « Chez lui, la sieste est un principe intangible. »",
  },
  "Irrévérencieux": {
    scene: "Devant le président, l'humoriste fait une blague sur sa cravate. La salle s'étrangle de rire. Il est irrévérencieux : il ne s'incline devant personne.",
    origine: "La révérence, c'est le salut respectueux. L'irrévérencieux ne fait pas la révérence.",
  },
  "Larcin": {
    scene: "Trois pommes chapardées dans le verger du voisin, en rentrant de l'école. Un larcin : un tout petit vol, presque une bêtise d'enfant.",
  },
  "Libelliste": {
    scene: "Au XVIIIe siècle, sous le manteau, circulaient de petits textes anonymes qui ridiculisaient la reine. Leurs auteurs étaient des libellistes, l'ancêtre des comptes anonymes qui balancent des rumeurs.",
  },
  "Lie": {
    scene: "Au fond de la bouteille de vin, il reste un dépôt sombre qu'on évite de verser : la lie. Et quand quelqu'un parle de « la lie de la société », il parle des gens avec un mépris terrible.",
    degainer: "« Boire le calice jusqu'à la lie » : subir une épreuve jusqu'au bout.",
  },
  "Lorgnon": {
    scene: "Le vieux notaire sort de sa poche une paire de verres sans branches, les tient devant ses yeux, et se penche sur le testament. C'est un lorgnon.",
    origine: "De la même famille que « lorgner », regarder avec insistance.",
  },
  "Macrocosme": {
    scene: "Pour les alchimistes, ton corps est un petit univers qui reflète le grand. Le grand, c'est le macrocosme, l'univers entier vu comme un tout.",
    origine: "« Macro », grand, et « cosmos », le monde. Le petit s'appelle microcosme.",
  },
  "Magnificence": {
    scene: "Tu entres dans la galerie des Glaces : les lustres, les dorures, la lumière qui rebondit partout. Tu restes bouche bée devant tant de magnificence.",
    aussi: "C'est aussi la générosité d'un prince qui reçoit ses invités sans compter.",
  },
  "Métastase": {
    scene: "Un mot dur, qu'on entend dans les couloirs des hôpitaux : quand une maladie se propage loin de son point de départ.",
    aussi: "Au figuré, un mal qui s'étend : « La corruption a fait des métastases dans toute l'administration. »",
  },
  "Occlusion": {
    scene: "Rien ne passe plus : le conduit est bouché. C'est une occlusion, un mot qu'on croise surtout chez le médecin.",
    aussi: "Pour prononcer un p, tes lèvres se ferment complètement : c'est aussi une occlusion.",
  },
  "Omerta": {
    scene: "Tout le monde dans l'entreprise savait, et personne ne parlait, par peur ou par habitude. C'est l'omerta : la loi du silence.",
    origine: "Un mot venu du sud de l'Italie, celui de la mafia. « Briser l'omerta », c'est oser parler.",
  },
  "Onirique": {
    scene: "Des baleines qui volent au-dessus d'une ville, des escaliers qui ne mènent nulle part, une lumière violette. Le film a des images oniriques : on se croirait dans un rêve.",
    origine: "Du grec « oneiros », le rêve.",
  },
  "Oxymore": {
    scene: "« Un silence assourdissant », « une obscure clarté », « un doux poison ». Deux mots qui se battent, et de leur combat naît une image qui frappe.",
    origine: "Le mot est lui-même un oxymore : en grec, il veut dire « pointu-émoussé ».",
  },
  "Parasocial": {
    scene: "Tu connais son chat, son plat préféré et le prénom de sa mère. Tu as pleuré à l'annonce de sa rupture. Lui, il ne sait pas que tu existes. C'est une relation parasociale.",
    degainer: "Pour mettre un mot sur cet attachement aux streamers, influenceurs ou célébrités qu'on suit tous les jours.",
  },
  "Parfaire": {
    scene: "Elle parlait déjà bien espagnol. Elle est partie un an à Madrid pour le parfaire : donner la dernière touche.",
  },
  "Pérégrination": {
    scene: "Un bus raté au Pérou, une nuit dans un monastère, une rencontre dans un train bolivien. Il nous raconte ses pérégrinations : un voyage plein de détours et d'aventures.",
    origine: "La même racine que « pèlerin » (« peregrinus », l'étranger).",
  },
  "Peuchère": {
    scene: "« Peuchère, il a encore perdu ses clés ! » Avec l'accent du Midi, c'est un soupir qui veut tout dire : de la pitié, de la tendresse, un peu d'étonnement.",
    origine: "Du provençal « pecaire », pécheur.",
  },
  "Phraséologie": {
    scene: "« Nous allons mettre en œuvre une dynamique de transformation au service de l'ensemble des parties prenantes. » Beaucoup de mots, aucune idée. C'est de la phraséologie.",
    aussi: "Plus neutre, c'est la façon de tourner les phrases propre à un milieu : la phraséologie juridique, médicale…",
  },
  "Pourparlers": {
    scene: "Avant de signer quoi que ce soit, les deux camps se retrouvent autour d'une table, discutent, tâtent le terrain. Ce sont les pourparlers.",
    piege: "Toujours au pluriel.",
  },
  "Pudibond": {
    scene: "Sa tante couvre les statues nues du jardin avec des draps et change de chaîne à la moindre scène de baiser. Elle est pudibonde : gênée par tout ce qui touche au corps.",
    degainer: "Un mot qui se moque toujours un peu.",
  },
  "Rétropédaler": {
    scene: "Lundi, le ministre annonce une nouvelle taxe. Mardi, tollé général. Mercredi : « J'ai été mal compris. » Il rétropédale.",
    origine: "L'image du vélo dont on pédale à l'envers.",
  },
  "Saprelotte": {
    scene: "« Saprelotte ! J'ai oublié le gâteau dans le four ! » Un juron de grand-père, qui fait sourire plus qu'il ne choque.",
    origine: "Une déformation de « sacré nom », pour jurer sans jurer.",
  },
  "Somatique": {
    scene: "La veille de l'examen, tu as mal au ventre sans être malade. Le stress se manifeste dans ton corps : ce sont des symptômes somatiques.",
    degainer: "« Psychosomatique » : quand c'est l'esprit qui rend le corps malade.",
  },
  "Spoliation": {
    scene: "Pendant la guerre, des familles ont été dépouillées de leurs tableaux, de leurs maisons, de leurs commerces. Aujourd'hui encore, leurs descendants réclament les œuvres issues de ces spoliations.",
    piege: "Le verbe, c'est « spolier ». Rien à voir avec « spoiler » !",
  },
  "Suave": {
    scene: "Dans la gare, une voix douce et veloutée annonce le départ du train. Elle est suave : elle caresse l'oreille.",
    aussi: "Parfois ironique : un ton suave qui cache un piège.",
  },
  "Subversif": {
    scene: "Au XVIIIe siècle, on cachait certains livres sous le manteau parce qu'ils se moquaient du roi et de l'Église. Ils étaient subversifs : ils ébranlaient l'ordre établi.",
    origine: "« Subvertir », c'est renverser par en dessous.",
  },
  "Tanner": {
    scene: "« On peut avoir une glace ? Allez, une glace ! S'il te plaît ! » Les enfants t'ont tanné toute la journée. Tu as fini par céder.",
    aussi: "Le tanneur, lui, tanne les peaux pour en faire du cuir. Une peau tannée par le soleil est brunie et durcie.",
  },
  "Tellurique": {
    scene: "Trois heures du matin, les verres tremblent dans le placard. Une secousse tellurique : la Terre elle-même a bougé.",
    aussi: "Mars et Vénus sont des planètes telluriques, rocheuses comme la nôtre.",
    origine: "Tellus, la déesse romaine de la Terre.",
  },
  "Tiraillé": {
    scene: "D'un côté, le job stable et le salaire. De l'autre, la passion qui l'appelle depuis des années. Elle est tiraillée : tirée des deux côtés à la fois.",
  },
  "Torgnole": {
    scene: "Dans les films de cape et d'épée, la torgnole part avant le duel. Une bonne gifle, en langage familier.",
    degainer: "Ses cousines : la beigne, la baffe, la mandale, la taloche.",
  },
  "Versatile": {
    scene: "Adulé lundi, conspué mercredi, oublié vendredi. Le public est versatile : il change d'avis comme de chemise.",
    piege: "Faux ami ! En anglais, « versatile » veut dire polyvalent. En français, c'est un défaut.",
  },
  "Acrasie": {
    scene: "Il est une heure du matin. Tu sais que tu dois dormir. Tu le sais très bien. Et pourtant ton pouce continue de faire défiler l'écran. C'est l'acrasie : savoir ce qui est bon pour soi, et faire l'inverse.",
    origine: "Socrate et Aristote se demandaient déjà comment c'était possible.",
  },
  "Allégresse": {
    scene: "Le but de la victoire à la dernière minute : des inconnus s'embrassent, les klaxons hurlent, toute la ville danse. C'est l'allégresse, une joie qui déborde et se partage.",
  },
  "Aplomb": {
    scene: "Interrogée devant toute la classe, elle répond sans trembler, droite comme un I. Elle a de l'aplomb. Lui, en revanche, ment en te regardant dans les yeux : quel aplomb !",
    aussi: "Pour le maçon, un mur d'aplomb est bien vertical.",
    origine: "Le fil à plomb mesure la verticale : avoir de l'aplomb, c'est tenir droit.",
  },
  "Appétence": {
    scene: "Il ne peut pas passer devant une vieille église sans entrer, ni devant une ruine sans s'arrêter. Il a une appétence pour les vieilles pierres : une attirance naturelle.",
    origine: "La même famille que l'appétit.",
  },
  "Archaïque": {
    scene: "Le règlement de l'école interdit encore les stylos à bille. Il date de 1952. Il est archaïque : sorti d'un autre temps.",
    aussi: "En histoire, la Grèce archaïque est la période qui précède l'âge classique.",
  },
  "Binette": {
    scene: "« T'as vu sa binette quand il a ouvert le cadeau ? » Une binette, c'est une tête, une frimousse, dit avec tendresse ou moquerie.",
    aussi: "Au jardin, c'est l'outil qui sert à biner la terre. Et au Québec, une binette, c'est un émoji !",
  },
  "Bourlinguer": {
    scene: "Marin, cuisinier en Australie, guide en Patagonie : à cinquante ans, il a bourlingué sur tous les continents avant de s'installer dans un petit village.",
    origine: "À l'origine, un bateau qui bourlingue avance péniblement contre le vent et la houle.",
  },
  "Bravade": {
    scene: "Personne ne lui demandait rien. Mais devant les copains, il a sauté dans le lac glacé en janvier. Pure bravade : un défi pour montrer qu'il n'avait pas peur.",
  },
  "Calomnie": {
    scene: "Une rumeur lancée un lundi, et le vendredi tout le quartier y croit. Le démenti, lui, ne fera jamais autant de bruit. C'est la force de la calomnie.",
    origine: "Beaumarchais l'a dit mieux que personne : « Calomniez, calomniez, il en restera toujours quelque chose. »",
  },
  "Carabiné": {
    scene: "Le lendemain de la soirée, une migraine carabinée : comme un coup de carabine dans les tempes.",
    degainer: "Un rhume carabiné, une facture carabinée : tout ce qui est très fort.",
  },
  "Coalition": {
    scene: "Trois petits partis qui se détestaient hier s'allient aujourd'hui contre le grand favori. C'est une coalition : une union de circonstance contre un adversaire commun.",
  },
  "Conspuer": {
    scene: "L'arbitre siffle un penalty imaginaire. Quarante mille personnes se lèvent et le couvrent de sifflets. Il est conspué.",
    origine: "Du latin « conspuere », cracher sur.",
  },
  "Dogme": {
    scene: "« On a toujours fait comme ça. » Personne ne sait pourquoi, mais personne n'ose discuter. C'est devenu un dogme.",
    aussi: "En religion, un dogme est une vérité de foi.",
    degainer: "Dogmatique : quelqu'un qui affirme sans jamais accepter la discussion.",
  },
  "Embruns": {
    scene: "Sur la jetée, un jour de tempête, le vent arrache aux vagues une fine poussière d'eau salée qui te pique le visage. Ce sont les embruns.",
    piege: "Presque toujours au pluriel.",
  },
  "Effluves": {
    scene: "Le dimanche matin, des effluves de café et de pain grillé montent de la cuisine jusqu'à ta chambre. Tu te lèves sans qu'on ait besoin de t'appeler.",
    piege: "C'est un nom masculin : « des effluves enivrants ».",
  },
  "Embaumer": {
    scene: "En mai, le lilas embaume tout le jardin. Mais les Égyptiens embaumaient aussi leurs pharaons, pour que le corps traverse les siècles.",
    origine: "Le baume, une substance parfumée, est derrière les deux sens.",
  },
  "Endémique": {
    scene: "Le lémurien ne vit nulle part ailleurs qu'à Madagascar. Il est endémique de l'île.",
    aussi: "Au figuré, un mal endémique ne disparaît jamais : « Le chômage est endémique dans la région. »",
    piege: "Différent d'« épidémique » : une épidémie éclate puis passe.",
  },
  "Envenimer": {
    scene: "La dispute allait se calmer. Puis il a ajouté : « De toute façon, ta mère pense pareil. » Il a envenimé les choses : il a mis du poison dans la plaie.",
  },
  "Ésotérique": {
    scene: "Des grimoires d'alchimie, des symboles cachés, un savoir réservé à quelques initiés. Tout ça est ésotérique.",
    aussi: "Au quotidien : un exposé si technique que personne dans la salle n'a rien compris était « un peu ésotérique ».",
    piege: "Son contraire, « exotérique », veut dire accessible à tous.",
  },
  "Exproprier": {
    scene: "La famille vivait là depuis trois générations. Mais l'autoroute devait passer par leur jardin, et l'État les a expropriés, contre une indemnité.",
  },
  "Hégémonie": {
    scene: "Un seul moteur de recherche, un seul réseau social, une seule boutique en ligne pour tout le monde. L'hégémonie, c'est la domination sans rival.",
    origine: "Du grec « hêgemôn », le chef.",
  },
  "Illusoire": {
    scene: "Finir ce dossier ce soir, ranger tout l'appartement, et aller au sport ? C'est illusoire, et tu le sais.",
  },
  "Inopinément": {
    scene: "Le dîner était calme quand la sonnette a retenti : ton oncle, arrivé inopinément, une valise à la main.",
    degainer: "L'adjectif : « une visite inopinée ».",
  },
  "Malléable": {
    scene: "L'or est si malléable qu'on peut l'aplatir en feuilles plus fines qu'un cheveu. Un jeune esprit aussi est malléable : il se laisse façonner.",
    origine: "Le maillet du forgeron : « malleus ».",
  },
  "Mascarade": {
    scene: "Le verdict était décidé avant l'audience, les témoins avaient appris leur texte. Ce procès n'était qu'une mascarade.",
    aussi: "Au carnaval, une mascarade est un défilé de personnes masquées.",
  },
  "Mégalomane": {
    scene: "Il a fait accrocher son portrait dans chaque bureau et rebaptiser la cantine à son nom. Le patron est mégalomane : il a la folie des grandeurs.",
    degainer: "En familier : « mégalo ».",
  },
  "Missive": {
    scene: "Une enveloppe épaisse, une écriture penchée, un timbre ancien : ta grand-tante t'a envoyé une missive de quatre pages.",
    degainer: "Pour parler d'une lettre avec un peu de solennité, ou d'humour.",
  },
  "Neuroplasticité": {
    scene: "Chaque fois que tu apprends un mot, ton cerveau tisse de nouvelles connexions. Il n'est jamais figé : à vingt, cinquante ou quatre-vingts ans, il se recâble. C'est la neuroplasticité.",
    degainer: "Ce mot-là, en le lisant, tu viens d'en faire l'expérience.",
  },
  "Pérenne": {
    scene: "Un pansement sur la fuite, ça tient une semaine. Ils cherchent une solution pérenne : faite pour durer.",
    aussi: "Au jardin, une plante pérenne revient chaque année.",
  },
  "Polarisé": {
    scene: "Sur chaque sujet, deux camps qui se crient dessus et plus personne au milieu. Le débat est polarisé, comme les deux pôles d'un aimant.",
    aussi: "En familier, être polarisé sur quelque chose, c'est n'avoir plus que ça en tête. Et des lunettes polarisées filtrent les reflets.",
  },
  "Programmatique": {
    scene: "Dès les premières phrases, elle annonce tout : les trois réformes, le calendrier, les moyens. C'est un discours programmatique, qui expose un programme.",
  },
  "Risible": {
    scene: "« Mon chien a mangé ma clé USB. » Le professeur ne rit pas avec lui : il rit de lui. Son excuse est risible.",
    piege: "Ce qui est drôle fait rire avec soi ; ce qui est risible fait rire de soi.",
  },

  // Série 3
  "Ronchon": {
    scene: "Pas de café ce matin, la machine est en panne. Et le voilà ronchon jusqu'à midi : il grommelle contre la pluie, le bus, l'univers.",
    degainer: "Le verbe : « ronchonner ». Un mot qui grogne quand on le dit.",
  },
  "Sous-jacent": {
    scene: "Ils se disputent pour la vaisselle. Mais tout le monde sent bien que ce n'est pas vraiment la vaisselle. Il y a un malaise sous-jacent, caché sous la surface.",
    origine: "« Jacent », qui est couché : couché en dessous.",
  },
  "Tatillon": {
    scene: "Ton billet est un peu froissé. Le contrôleur le retourne, le lisse, l'observe à la lumière, puis te demande une pièce d'identité. Il est tatillon : pointilleux sur chaque détail.",
  },
  "Acerbe": {
    scene: "« Un premier roman qui aurait gagné à rester un premier brouillon. » La critique est acerbe : elle pique comme du citron sur une plaie.",
  },
  "Affres": {
    scene: "Le doute, la page blanche, les nuits à tourner en rond. Tout écrivain connaît les affres de la création : des tourments vécus de l'intérieur.",
    piege: "Toujours au pluriel : « les affres de la jalousie », « les affres de la mort ».",
  },
  "Ahuri": {
    scene: "Réveillé en sursaut au terminus, il regarde autour de lui, ne reconnaît rien, ne sait plus quel jour on est. Il a l'air ahuri.",
    degainer: "Une insulte gentille, à l'ancienne : « Espèce d'ahuri ! »",
  },
  "Ankylosé": {
    scene: "Six heures de train coincé contre la fenêtre. À l'arrivée, tu te lèves et tes jambes ne répondent plus : elles sont ankylosées.",
    aussi: "Au figuré : « une administration ankylosée par les habitudes », raide et incapable de bouger.",
  },
  "Antinomique": {
    scene: "« Liberté totale » et « surveillance totale » : on ne peut pas avoir les deux. Ces idées sont antinomiques.",
    origine: "« Anti » et « nomos », la loi : deux lois qui se contredisent.",
  },
  "Âprement": {
    scene: "Quatre-vingt-dixième minute, le score est nul, chaque ballon se dispute comme le dernier. Le titre est âprement disputé, sans que personne ne lâche rien.",
  },
  "Austère": {
    scene: "Une chambre de moine : un lit, une chaise, un crucifix, des murs blancs. Pas un tableau, pas une couleur. Le lieu est austère.",
    aussi: "Une personne austère ne sourit pas beaucoup. Et une « politique d'austérité » oblige à se serrer la ceinture.",
  },
  "Balivernes": {
    scene: "« J'ai pas pu venir parce que mon horoscope me le déconseillait. » Assez de balivernes : dis-moi la vérité !",
    degainer: "Ses cousines : les sornettes, les fadaises, les billevesées.",
  },
  "Baroque": {
    scene: "Entre dans une église de Rome : des anges qui débordent des murs, de l'or partout, des colonnes qui tournent sur elles-mêmes. C'est l'art baroque, l'art de l'excès.",
    aussi: "Au quotidien, une idée baroque est franchement bizarre : fêter Noël en juillet, par exemple.",
    origine: "Du portugais « barroco », une perle de forme irrégulière.",
  },
  "Blafard": {
    scene: "La lumière d'un néon à trois heures du matin dans un couloir d'hôpital. La lune sur un cimetière. Une pâleur sans vie : blafarde.",
  },
  "Boutade": {
    scene: "« Je ne suis pas en retard, c'est vous qui êtes en avance. » Il le dit en souriant, personne n'est vexé. C'est une boutade : un trait d'esprit lancé en passant.",
  },
  "Bribes": {
    scene: "À travers la cloison, tu n'entends que des bribes de leur dispute : « …jamais… », « …ta mère… », « …le chien ! ». Des petits morceaux, sans le reste.",
    piege: "Presque toujours au pluriel.",
  },
  "Brimades": {
    scene: "Le nouveau doit porter les plateaux de tout le monde, chanter à la cantine, ranger les vestiaires. Ce ne sont pas des blagues : ce sont des brimades, des humiliations imposées par plus fort que soi.",
  },
  "Burlesque": {
    scene: "Une peau de banane, puis deux, puis toute la salle de bal qui glisse en même temps. Le comique est si exagéré qu'il en devient absurde : c'est burlesque.",
    aussi: "Au cinéma, le burlesque, c'est le genre des films muets de Charlie Chaplin et Buster Keaton.",
  },
  "Masure": {
    scene: "Le toit percé, les volets qui pendent, des ronces jusqu'aux fenêtres. Ils l'ont achetée pour une bouchée de pain : une vieille masure qu'ils retapent pierre par pierre.",
  },
  "Chafouin": {
    scene: "Un visage étroit, des yeux qui ne te regardent jamais en face, un petit sourire en coin. Il a l'air chafouin : rusé et sournois.",
    aussi: "Depuis peu, on l'emploie aussi pour dire « un peu contrarié » : « Il est chafouin depuis qu'on a oublié son anniversaire. »",
  },
  "Chevrotant": {
    scene: "La vieille dame se lève pour remercier l'assemblée. L'émotion est trop forte : sa voix tremble, se casse, repart. Une voix chevrotante, comme celle d'une chèvre.",
  },
  "Chuinter": {
    scene: "La bouilloire chuinte doucement sur le feu, la cocotte-minute aussi. Un petit bruit sourd et sifflant.",
    aussi: "Quelqu'un qui chuinte prononce les s comme des ch : « un chaucichon ». Et la chouette, elle, chuinte pour de vrai : c'est son cri.",
  },
  "Colporter": {
    scene: "Elle sait tout sur tout le monde, et tout le monde finit par savoir ce qu'elle sait. Elle colporte les rumeurs de porte en porte.",
    origine: "Autrefois, le colporteur vendait des almanachs de village en village, sa marchandise accrochée au cou.",
  },
  "Conjurer": {
    scene: "« Je t'en conjure, ne lui dis rien ! » Ici, conjurer veut dire supplier. Mais les sorcières, elles, dansent pour conjurer le mauvais sort : pour l'éloigner.",
    aussi: "Et des conjurés, ce sont des comploteurs qui se réunissent la nuit.",
  },
  "Différend": {
    scene: "Les deux voisins ne se parlent plus depuis trois ans à cause de la hauteur de la haie. Ils ont un différend : un désaccord précis, qu'il faudra régler un jour.",
    piege: "Le nom s'écrit avec un d : un différenD. L'adjectif avec un t : différenT.",
  },
  "Courtiser": {
    scene: "Des fleurs chaque semaine, des lettres, des invitations refusées puis enfin acceptées. Il l'a courtisée pendant un an avant le premier rendez-vous.",
    aussi: "En campagne électorale, les candidats courtisent les électeurs indécis.",
    origine: "Vient de la cour du roi, où l'on flattait pour obtenir des faveurs.",
  },
  "Cuistrerie": {
    scene: "Citer du latin à la machine à café, corriger la prononciation des autres, glisser « comme le disait Spinoza » à propos de la photocopieuse. C'est de la cuistrerie : un savoir étalé pour écraser.",
  },
  "Déplorer": {
    scene: "Dans le communiqué de la mairie : « Nous déplorons le manque de places en crèche. » On le regrette profondément, et on le dit publiquement.",
    aussi: "Après un accident : « On déplore trois blessés. » Le mot vient de « pleurer ».",
  },
  "Déprécié": {
    scene: "Sa voiture neuve a perdu un tiers de sa valeur en sortant du garage. Elle s'est dépréciée.",
    aussi: "Une personne peut se sentir dépréciée quand on ne reconnaît pas ce qu'elle vaut.",
  },
  "Désappointement": {
    scene: "Il espérait le vélo. Il ouvre le paquet : des chaussettes. Il dit merci, mais son désappointement se lit sur son visage.",
  },
  "Désarroi": {
    scene: "L'usine ferme, l'annonce tombe un lundi matin. Les ouvriers restent sur le parking, sans savoir quoi faire, quoi dire, où aller. C'est le désarroi.",
    origine: "L'« arroi », c'était l'ordre, l'équipement. Le désarroi, c'est quand tout est sens dessus dessous.",
  },
  "Digression": {
    scene: "Il commence à raconter son voyage, puis parle de son chat, de la recette de sa grand-mère, de la météo de 1998… « Mais je digresse ! » Une digression, c'est un détour dans le récit.",
  },
  "Dissemblable": {
    scene: "Ce sont des jumeaux. Pourtant l'un est grand et bavard, l'autre petit et silencieux. Ils sont étonnamment dissemblables.",
  },
  "Dissension": {
    scene: "Dans le groupe, on ne se dispute plus pour le resto : on ne se parle plus. Des dissensions sont apparues, et le groupe se fissure.",
    piege: "Plus fort qu'un « différend » : ce n'est pas deux personnes, c'est tout le groupe qui se divise.",
  },
  "Échafauder": {
    scene: "Il gagnera au loto, achètera un bateau, ouvrira un restaurant sur une île… Il échafaude des plans, étage par étage, comme on monte un échafaudage.",
    degainer: "Souvent avec une pointe d'ironie : des plans aussi fragiles qu'un échafaudage.",
  },
  "Échoir": {
    scene: "Personne ne voulait faire le discours. On a tiré au sort, et la tâche lui est échue.",
    aussi: "Un loyer échoit le 1er du mois : il arrive à échéance.",
  },
  "Éclectique": {
    scene: "Dans sa playlist, un concerto de Mozart, un morceau de rap, une chanson réaliste et un générique de dessin animé. Ses goûts sont éclectiques.",
    origine: "Du grec « choisir » : l'éclectique choisit un peu partout.",
  },
  "Écrin": {
    scene: "La bague brille sur son coussin de velours, dans sa petite boîte. Cette boîte, c'est l'écrin. Et un village perdu dans les collines est « un écrin de verdure ».",
    degainer: "« Un écrin de verdure » : la formule préférée des brochures touristiques.",
  },
  "Émailler": {
    scene: "La journée a été émaillée d'incidents : le café renversé, le métro bloqué, la réunion annulée. Des petits événements semés un peu partout, comme des pierres brillantes dans un tissu.",
    aussi: "Au sens propre, on émaille une casserole en la recouvrant d'émail.",
  },
  "Empreint de": {
    scene: "Son discours d'adieu était empreint d'émotion : on la sentait dans chaque mot, chaque silence.",
    piege: "Empreint (marqué) ne s'écrit pas comme emprunt (ce qu'on emprunte).",
  },
  "Engranger": {
    scene: "Avant l'orage, les paysans rentrent le blé dans la grange. Et en championnat, l'équipe engrange les victoires, une à une, comme une réserve.",
  },
  "Escarre": {
    scene: "À l'hôpital, les soignants retournent régulièrement les patients qui ne peuvent plus bouger. Sinon, la peau s'abîme là où le corps appuie : ce sont les escarres.",
    piege: "C'est un nom féminin : « une escarre ».",
  },
  "Escarmouche": {
    scene: "Pas une bataille, juste quelques coups échangés à la frontière. Et à l'Assemblée, une petite pique entre deux ministres. Des escarmouches : des accrochages rapides.",
  },
  "Estropier": {
    scene: "La chute de cheval l'a estropié pour la vie. Mais la secrétaire, elle, estropie ton nom à chaque appel : elle l'écorche.",
  },
  "Étriller": {
    scene: "Six à zéro. L'équipe s'est fait étriller. Le lendemain, la presse a étrillé l'entraîneur à son tour.",
    origine: "L'étrille est une brosse en fer avec laquelle on frotte les chevaux. Sans douceur.",
  },
  "Fantasmagorie": {
    scene: "Au XVIIIe siècle, dans une salle obscure, une lanterne magique fait apparaître des fantômes sur la fumée. Les spectateurs hurlent. C'était une fantasmagorie, un spectacle d'illusions.",
    aussi: "Aujourd'hui : une ville illuminée à Noël peut être une fantasmagorie de couleurs.",
  },
  "Farfelu": {
    scene: "Son projet : ouvrir un bar à chats sur une péniche, avec des concerts de harpe. C'est farfelu, mais on a un peu envie d'y aller.",
  },
  "Rocambolesque": {
    scene: "Une évasion en hélicoptère, un faux passeport, une perruque, une poursuite en scooter. L'histoire est tellement rocambolesque qu'on la croirait inventée.",
    origine: "Rocambole était le héros d'un feuilleton du XIXe siècle, aux aventures toutes plus invraisemblables les unes que les autres.",
  },
  "Félon": {
    scene: "Le château tenait depuis des mois. Puis quelqu'un, de l'intérieur, a livré les plans à l'ennemi. Le félon, c'est celui qui trahit sa parole.",
  },
  "Flibustier": {
    scene: "Dans la mer des Caraïbes, les flibustiers attaquaient les galions espagnols chargés d'or. Aujourd'hui, un flibustier, c'est plutôt un filou qui t'arnaque avec le sourire.",
  },
  "Fluet": {
    scene: "Une silhouette mince, presque fragile, une voix fluette qui demande son chemin. On a envie de la protéger d'un coup de vent.",
  },
  "Fortuit": {
    scene: "Vingt ans sans se voir, et vous vous retrouvez assis côte à côte dans le même avion. Une rencontre fortuite : un pur hasard.",
    origine: "De Fortuna, la déesse du hasard.",
  },
  "Frivole": {
    scene: "Les vêtements, les potins, la couleur des serviettes : des conversations frivoles, légères, sans conséquence. Et parfois, c'est exactement ce dont on a besoin.",
  },
  "Galvaniser": {
    scene: "Mi-temps, trois buts de retard. L'entraîneur entre dans le vestiaire, parle cinq minutes, et l'équipe ressort transformée. Il les a galvanisés.",
    origine: "Galvani, un savant italien, faisait bouger des grenouilles mortes avec de l'électricité. D'où l'idée d'un choc qui ranime.",
  },
  "Gamberger": {
    scene: "Trois heures du matin, les yeux grands ouverts, à retourner sa proposition dans tous les sens. Tu as gambergé toute la nuit.",
  },
  "Glaner": {
    scene: "Après la moisson, les femmes ramassaient les épis oubliés dans les champs. Aujourd'hui, tu glanes des infos ici et là, sur un forum, dans un article, auprès d'un ami.",
    origine: "« Les Glaneuses », de Millet, est l'un des tableaux les plus célèbres du XIXe siècle.",
  },
  "Goguenard": {
    scene: "Tu rates ton troisième créneau devant la terrasse du café. Un vieux monsieur te regarde, les bras croisés, un sourire en coin. Il est goguenard.",
  },
  "Graillon": {
    scene: "La friteuse du voisin du dessous tourne depuis midi. Toute la cage d'escalier sent le graillon, et tes vêtements aussi.",
  },
  "Hagard": {
    scene: "Ils sortent des décombres, couverts de poussière, les yeux grands ouverts mais comme vides. Leur regard est hagard : affolé et perdu à la fois.",
  },
  "Hédonisme": {
    scene: "Une sieste au soleil, un bon vin, un livre, des amis. Pas de grand projet : le plaisir comme boussole. C'est l'hédonisme.",
    origine: "Du grec « hêdonê », le plaisir. Épicure en était un adepte… modéré.",
  },
  "Humer": {
    scene: "Il fait tourner le vin dans son verre, ferme les yeux, et respire longuement. Il hume, avant même de goûter.",
  },
  "Imputable": {
    scene: "La voiture a quitté la route. Le rapport est clair : l'accident est imputable au verglas, pas au conducteur.",
    degainer: "Le verbe, « imputer », veut dire attribuer une faute ou une dépense à quelqu'un.",
  },
  "Impérissable": {
    scene: "Des années plus tard, tu te souviens encore de chaque chanson, de chaque visage, de l'odeur de l'herbe. Ce concert t'a laissé un souvenir impérissable.",
  },
  "Implacable": {
    scene: "Le chronomètre, la marée, la logique d'un bon raisonnement : rien ne les arrête, rien ne les attendrit. Ils sont implacables.",
    origine: "« Placare », apaiser : l'implacable ne s'apaise jamais.",
  },
  "Incommensurable": {
    scene: "Tellement grand qu'on ne trouve pas de règle assez longue pour le mesurer. Une joie incommensurable… ou, avec humour, une bêtise incommensurable.",
  },
  "Indéfectible": {
    scene: "Ils se sont rencontrés en CP. Déménagements, disputes, mariages, trente ans ont passé : ils s'appellent encore chaque dimanche. Leur amitié est indéfectible.",
  },
  "Indubitablement": {
    scene: "Tu as goûté tous les croissants du quartier. Celui-là, c'est le meilleur. Indubitablement. Sans le moindre doute.",
  },
  "Inéluctable": {
    scene: "Les jours raccourcissent, les feuilles tombent, la rentrée approche. La fin de l'été est inéluctable : on ne peut rien contre elle.",
    origine: "Du latin « luctari », lutter : ce contre quoi on ne peut pas lutter.",
  },
  "Insipide": {
    scene: "Une soupe de cantine sans sel ni poivre. Ou un film où il ne se passe rien pendant deux heures. Les deux sont insipides : sans saveur.",
  },
  "Interstice": {
    scene: "Un matin d'été, un rayon de soleil passe par l'interstice des volets et vient se poser sur ton oreiller.",
  },
  "Intrinsèque": {
    scene: "Une pièce d'or garde sa valeur même si tout le monde la trouve démodée : sa valeur est intrinsèque, elle fait partie d'elle-même.",
    piege: "Son contraire, « extrinsèque », désigne ce qui vient de l'extérieur.",
  },
  "Lancinant": {
    scene: "Une douleur dans la mâchoire, qui revient par élancements, toute la nuit. Ou une question qui tourne en boucle : et si j'avais dit oui ? Les deux sont lancinantes.",
  },
  "Limbes": {
    scene: "Le projet n'est pas abandonné, mais il n'avance plus. Il flotte quelque part, entre deux réunions. Il est dans les limbes.",
    aussi: "Dans la tradition chrétienne, les limbes étaient le séjour des âmes des enfants morts sans baptême.",
  },
  "Liminalité": {
    scene: "Un aéroport à quatre heures du matin : tu n'es plus parti, pas encore arrivé, entre deux fuseaux horaires et deux vies. C'est la liminalité.",
    origine: "« Limen », le seuil, en latin.",
  },
  "Nébuleux": {
    scene: "Tu lui demandes comment il compte rembourser. Sa réponse : « On verra, il y a des pistes, ça devrait aller. » C'est nébuleux, flou comme un ciel couvert.",
    aussi: "En astronomie, une nébuleuse est un immense nuage de gaz et de poussières.",
  },
  "Notoire": {
    scene: "Tout le monde le sait, personne ne le croit plus : c'est un menteur notoire.",
    degainer: "« Il est de notoriété publique que… » : tout le monde est au courant.",
  },
  "Oisiveté": {
    scene: "Après quarante ans de travail, il savoure enfin son oisiveté : pas d'horaire, pas de réveil, rien d'autre à faire que regarder passer les nuages.",
    origine: "Le proverbe la condamne (« l'oisiveté est mère de tous les vices »), mais les philosophes de l'Antiquité en faisaient un art.",
  },
  "Orée": {
    scene: "Une petite cabane, là où les champs s'arrêtent et où les arbres commencent : à l'orée du bois.",
    degainer: "« À l'orée du XXIe siècle » : une façon élégante de dire « au début ».",
  },
  "Palabres": {
    scene: "Deux heures de réunion, quinze avis différents, toujours aucune décision. « Assez de palabres, on vote ! »",
    origine: "En Afrique de l'Ouest, l'« arbre à palabres » est un lieu où l'on discute ensemble des affaires du village.",
  },
  "Palliatif": {
    scene: "Du scotch sur le tuyau qui fuit : ça tient, pour l'instant. Ce n'est pas une réparation, c'est un palliatif.",
    aussi: "Les soins palliatifs soulagent la douleur des malades en fin de vie.",
  },
  "Pantagruélique": {
    scene: "Le repas de Noël chez ta grand-mère : sept plats, trois desserts, et une deuxième tournée de fromage. Un repas pantagruélique.",
    origine: "Pantagruel est le géant affamé des romans de Rabelais.",
  },
  "Pédant": {
    scene: "« En fait, on ne dit pas “au final”, c'est un barbarisme. » Il corrige tout le monde, cite des auteurs à chaque phrase, et soupire quand on ne connaît pas. Il est pédant.",
  },
  "Perplexe": {
    scene: "Le mode d'emploi du meuble est en japonais, il reste trois vis et l'armoire penche. Tu te grattes la tête, perplexe.",
  },
  "Pilori": {
    scene: "Au Moyen Âge, on attachait les condamnés à un poteau, sur la place du marché, pour que tout le monde vienne se moquer d'eux. C'était le pilori. Aujourd'hui, il suffit parfois d'un tweet.",
    degainer: "« Clouer quelqu'un au pilori » : le livrer au mépris de tous.",
  },
  "Pittoresque": {
    scene: "Des volets bleus, une fontaine sur la place, un vieux monsieur qui joue aux boules. Le village est pittoresque : il donne envie de le peindre.",
    origine: "De l'italien « pittore », le peintre.",
  },
  "Pompeux": {
    scene: "Fanfare, discours de vingt minutes et ruban tricolore… pour inaugurer un rond-point. La cérémonie était pompeuse.",
  },
  "Porte-étendard": {
    scene: "Elle n'a pas inventé la cause animale, mais c'est elle qu'on voit partout, en première ligne, à défendre les bêtes. Elle en est devenue le porte-étendard.",
    origine: "À l'armée, le porte-étendard marchait en tête du défilé avec le drapeau.",
  },
  "Pourvoir": {
    scene: "Depuis la mort de son père, il pourvoit aux besoins de toute la famille. Et sur l'annonce : « Poste de directeur à pourvoir », c'est-à-dire à remplir.",
    piege: "Au passé simple : « il pourvut », pas « il pourvit ».",
  },
  "Précepte": {
    scene: "Sa grand-mère lui a transmis un seul précepte, qu'il applique depuis toujours : ne jamais se coucher fâché.",
  },
  "Prérogative": {
    scene: "Dissoudre l'Assemblée, accorder une grâce : le président peut le faire, et lui seul. Ce sont ses prérogatives.",
  },
  "Proférer": {
    scene: "Avant de claquer la porte, il a proféré des menaces que tout l'étage a entendues.",
    degainer: "Presque toujours avec des mots négatifs : menaces, injures, jurons.",
  },
  "Prodiguer": {
    scene: "Elle a trente ans de métier, et elle prodigue ses conseils à tous les nouveaux, sans compter, sans rien attendre en retour.",
    origine: "La même famille que « l'enfant prodigue », celui qui avait tout dépensé.",
  },
  "Puritain": {
    scene: "Dans sa famille, on ne parlait jamais d'amour, on ne dansait pas, on ne riait pas trop fort à table. Une éducation puritaine.",
    origine: "Les Puritains étaient des protestants anglais très stricts. Certains sont partis fonder des colonies en Amérique.",
  },
  "Racoleur": {
    scene: "« Vous ne croirez JAMAIS ce qui est arrivé à cette star ! » Un titre racoleur : il t'attire avec des moyens faciles.",
  },
  "Récrimination": {
    scene: "Le bruit des voisins, la poussière, le facteur en retard, la mairie qui ne fait rien : il ne s'arrête jamais. Ses récriminations lassent tout le quartier.",
  },
  "Recéler": {
    scene: "Ce vieux grenier recèle des trésors : des lettres d'amour, une épée, des photos de famille jamais vues.",
    aussi: "En droit, recéler, c'est garder des objets volés. Le receleur revend le butin.",
  },
  "Renfrogné": {
    scene: "Les bras croisés, les sourcils froncés, le regard fixé sur son assiette. Il est resté renfrogné tout le repas, sans dire pourquoi.",
  },
  "Révulser": {
    scene: "L'injustice le révulse. Il ne peut pas la voir sans avoir un haut-le-cœur, comme si tout se retournait à l'intérieur.",
    aussi: "Des yeux révulsés sont tournés vers le haut, souvent avant un évanouissement.",
  },
  "Rictus": {
    scene: "Il essaie de sourire pour la photo, mais il a mal au dos. Résultat : un rictus, une grimace crispée qui ressemble vaguement à un sourire.",
  },
  "Saltimbanque": {
    scene: "Sur la place du village, ils montent leurs tréteaux, jonglent, font des acrobaties et repartent le lendemain. Les saltimbanques.",
    origine: "De l'italien « saltare in banco », sauter sur l'estrade.",
  },
  "Sciemment": {
    scene: "Ce n'était pas un oubli. Il savait très bien ce qu'il faisait : il a sciemment caché l'information.",
    piege: "On prononce « si-a-man ».",
  },
  "Sermonner": {
    scene: "Rentré à trois heures du matin, il a eu droit à une heure de sermon dans la cuisine. Sa mère l'a sermonné, comme un prêtre du haut de sa chaire.",
  },
  "Sidération": {
    scene: "La nouvelle tombe, et tu restes là. Tu ne peux plus bouger, plus penser, plus parler. Ce n'est pas de la faiblesse : c'est la sidération, une réaction du corps face au choc.",
    origine: "À l'origine : être frappé par les astres (« sidus », l'étoile).",
  },
  "Simagrées": {
    scene: "Les soupirs, les yeux au ciel, la main sur le front. « Arrête tes simagrées et dis-moi ce que tu veux. »",
    piege: "Toujours au pluriel.",
  },
  "Sommation": {
    scene: "Un courrier recommandé : « Vous êtes sommé de payer sous huit jours. » C'est une sommation, le dernier avertissement avant que les choses ne se gâtent.",
    aussi: "Avant de disperser une foule, la police fait aussi des sommations.",
  },
  "Sordide": {
    scene: "Une chambre au fond d'une impasse, le papier peint décollé, l'odeur de moisi. Et dans le journal, une histoire d'héritage entre frères qui finit au tribunal. Les deux sont sordides : sales, et moralement répugnantes.",
  },
};
