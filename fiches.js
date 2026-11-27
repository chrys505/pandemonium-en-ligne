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

  // Série 4
  "Sournois": {
    scene: "Il te sourit en face, et dès que tu as tourné le dos, il raconte à tout le bureau que tu es incompétent. Le sournois n'attaque jamais de front.",
    aussi: "Un mal peut être sournois aussi : une douleur sournoise s'installe sans prévenir.",
  },
  "Substantifique moelle": {
    scene: "Tu as lu trois cents pages, tu en retiens trois idées, mais ce sont les bonnes. Tu as tiré la substantifique moelle du livre : ce qu'il a de meilleur, de plus nourrissant.",
    origine: "Rabelais, dans le prologue de Gargantua : il compare le lecteur à un chien qui ronge un os pour en sucer la moelle.",
  },
  "Supputation": {
    scene: "« S'il a dit ça à Julie, c'est sûrement qu'il veut partir, donc que… » Trois heures de supputations entre amis pour une phrase de deux mots. Des calculs, des hypothèses, et aucune certitude.",
  },
  "Syllogisme": {
    scene: "Tous les hommes sont mortels. Socrate est un homme. Donc Socrate est mortel. Trois marches, et on arrive à une conclusion inévitable : c'est un syllogisme.",
    piege: "Gare au faux syllogisme : « Tous les chats sont mortels. Socrate est mortel. Donc Socrate est un chat. »",
    origine: "Aristote l'a mis au point il y a plus de deux mille ans.",
  },
  "Tournebouler": {
    scene: "Cette lettre l'a tourneboulé : il relit chaque ligne, se lève, se rassoit, ne sait plus ce qu'il ressent. Tout est sens dessus dessous dans sa tête.",
  },
  "Turlupiner": {
    scene: "Tu as fermé la porte à clé ? Sûrement. Mais tu n'en es pas certain, et ça te turlupine pendant tout le trajet. Une petite idée qui gratte, qui tracasse, sans vouloir te lâcher.",
    origine: "Turlupin était un comédien farceur du XVIIe siècle.",
  },
  "Vénéneux": {
    scene: "Un champignon magnifique au pied du chêne, rouge à pois blancs. Ne le cueille pas : il est vénéneux, il contient du poison.",
    piege: "Une plante ou un champignon est vénéneux (on s'empoisonne en le mangeant). Un serpent est venimeux (il t'injecte son venin).",
  },
  "Vipérin": {
    scene: "Elle ne dit jamais de gros mots. Mais chaque petite phrase est calculée pour piquer là où ça fait mal. Elle a une langue vipérine.",
    degainer: "Presque toujours dans l'expression « une langue de vipère », ou « vipérine ».",
  },
  "Vociférer": {
    scene: "Le client hurle dans la boutique, rouge de colère, le doigt tendu vers le vendeur. Il vocifère : il crie des injures à pleine voix.",
  },
  "Véhémence": {
    scene: "Elle a défendu son projet avec une telle véhémence que personne n'a osé la contredire. Une force passionnée, presque violente, dans chaque mot.",
  },
  "Velléité": {
    scene: "Chaque 1er janvier, il s'inscrit à la salle de sport. Il y va deux fois. Ce n'est pas une volonté, c'est une velléité : une petite intention qui ne passe jamais à l'action.",
    degainer: "L'adjectif « velléitaire » : quelqu'un qui commence tout et ne finit rien.",
  },
  "Célérité": {
    scene: "Tu commandes le soir, le colis est sur ton palier le lendemain matin. Quelle célérité !",
    degainer: "Un mot soutenu pour remercier quelqu'un de sa rapidité : « Merci pour votre célérité. »",
  },
  "Attester": {
    scene: "Le médecin signe un papier : il atteste que tu étais bien malade ce jour-là. Attester, c'est certifier, avec sa signature ou sa parole.",
    aussi: "Un mot attesté dans la langue est un mot dont on a trouvé des traces écrites.",
  },
  "Bocage": {
    scene: "En Normandie ou en Bretagne : des petits champs bordés de haies épaisses, de talus et d'arbres, des chemins creux entre les deux. C'est le bocage.",
  },
  "Idiome": {
    scene: "Entre jumeaux, entre amis d'enfance, dans un village de montagne : un parler à eux, avec des mots qu'eux seuls comprennent. C'est un idiome.",
    piege: "Rien à voir avec « idiot ». En anglais, « idiom » veut dire expression toute faite.",
  },
  "S'impatroniser": {
    scene: "Il est venu dîner un soir. Trois semaines plus tard, il a sa brosse à dents dans la salle de bains et choisit les programmes télé. Il s'est impatronisé : il s'est installé en maître.",
  },
  "Abortif": {
    scene: "Un mot qu'on croise d'abord en médecine, pour un produit qui interrompt une grossesse.",
    aussi: "Au figuré, un projet abortif est un projet mort-né, qui n'aboutit jamais.",
  },
  "Ostéologie": {
    scene: "Dans le laboratoire, un squelette entier attend sur la table. L'ostéologue examine chaque os pour savoir l'âge, le sexe, les maladies de la personne. C'est l'ostéologie, la science des os.",
    origine: "Du grec « osteon », l'os, comme dans ostéopathe.",
  },
  "Exhalation": {
    scene: "Inspire… et expire lentement. Ce long souffle qui sort de toi, c'est l'exhalation.",
    piege: "Ne pas confondre avec l'exhalaison, qui est l'odeur ou la vapeur qui se dégage.",
  },
  "Mulâtre": {
    scene: "Un mot qu'on croise dans les romans anciens, écrits à l'époque de l'esclavage et des colonies. Il désignait une personne née d'un parent blanc et d'un parent noir, et il vient de « mulet » : il porte donc en lui le mépris raciste de cette époque.",
    degainer: "À comprendre quand on le lit, jamais à employer. Aujourd'hui, on dit « métis ».",
  },
  "Prôneur": {
    scene: "Il ne parle que de son régime miracle, de sa méthode, de son coach. Le prôneur vante sa trouvaille à tout le monde, avec insistance.",
    origine: "Le prône, c'est le sermon du dimanche : le prôneur prêche.",
  },
  "Messeoir": {
    scene: "« Un peu d'audace ne vous messied pas, mademoiselle. » Dans les salons d'autrefois, messeoir voulait dire ne pas convenir, ne pas aller bien.",
    degainer: "Presque toujours à la forme négative, pour un compliment élégant : « Cela ne vous messied pas. »",
  },
  "Dénoter": {
    scene: "Il range ses chaussettes par couleur et ses livres par taille. Ça dénote un certain goût de l'ordre : ça le révèle, sans qu'il le dise.",
  },
  "Séditieux": {
    scene: "Des tracts glissés sous les portes la nuit, des appels à prendre les armes contre le roi. Ce sont des écrits séditieux : ils appellent ouvertement à la révolte.",
  },
  "Pamphlétaire": {
    scene: "Quelques pages, une plume trempée dans le vitriol, et un puissant ridiculisé dans tout Paris. Le pamphlétaire écrit court et frappe fort.",
  },
  "Arriéré": {
    scene: "Trois mois de loyer impayés : ce sont des arriérés, une dette en retard.",
    aussi: "Comme adjectif, c'est dépassé, en retard sur son époque. Pour une personne, le mot est blessant : mieux vaut l'éviter.",
  },
  "Sornettes": {
    scene: "« J'ai vu un OVNI au-dessus de la boulangerie, il m'a fait coucou. » Sornettes ! Des histoires sans queue ni tête.",
  },
  "Cahute": {
    scene: "Trois planches, une tôle, une porte qui ferme mal : la cahute du jardinier au fond du potager. Un abri de fortune.",
  },
  "Contentieux": {
    scene: "Les deux familles ne se parlent plus depuis l'histoire du mur mitoyen. Il y a un vieux contentieux entre elles : un conflit jamais réglé.",
    aussi: "Dans une entreprise, le service contentieux s'occupe des litiges qui vont devant la justice.",
  },
  "Figure de proue": {
    scene: "À l'avant des grands voiliers, une statue de sirène ou de guerrier fend les vagues la première. Dans un mouvement, la figure de proue est la personnalité qu'on voit en premier, celle qui incarne la cause.",
  },
  "Répudier": {
    scene: "Les dettes du grand-père dépassent ce qu'il possédait. Ses petits-enfants préfèrent répudier la succession : refuser l'héritage.",
    aussi: "Dans certaines sociétés anciennes, un mari pouvait répudier sa femme. Et au figuré, on répudie les idées de sa jeunesse.",
  },
  "Grimer": {
    scene: "Dans la loge, la maquilleuse creuse les rides, blanchit les cheveux, ajoute une cicatrice. En une heure, la jeune actrice a soixante-dix ans. On l'a grimée.",
  },
  "Guilleret": {
    scene: "Il siffle en marchant, salue les voisins, fait un petit saut au-dessus d'une flaque. Ce matin, il est tout guilleret.",
  },
  "Méphitique": {
    scene: "Le vieux puits, la cave jamais aérée, les égouts : un air qui empeste et qui pourrait bien te rendre malade. Un air méphitique.",
    origine: "Méphitis était la déesse romaine des vapeurs empoisonnées.",
  },
  "Mausolée": {
    scene: "Un tombeau si grand qu'on pourrait y habiter. Le Taj Mahal, en Inde, est un mausolée : un empereur l'a fait construire pour son épouse morte.",
    origine: "Mausole, roi d'Asie Mineure, s'est fait construire un tombeau si spectaculaire qu'il compte parmi les Sept Merveilles du monde.",
  },
  "Pinacle": {
    scene: "Hier encore inconnue, elle est aujourd'hui portée au pinacle : tous les journaux l'adorent, on la cite partout. Elle est au sommet.",
    piege: "Plus on monte au pinacle, plus la chute est rude : la presse adore aussi faire redescendre.",
  },
  "Rédimer": {
    scene: "Dans les vieux récits, le héros cherche à rédimer sa faute : par un sacrifice, un acte de courage, une vie entière à réparer. Se racheter.",
    degainer: "La rédemption, c'est le même mot.",
  },
  "Apoplexie": {
    scene: "Dans les romans du XIXe siècle, le vieux baron devient rouge, porte la main à son cœur et s'écroule : il est frappé d'apoplexie, une perte de connaissance brutale.",
    aussi: "Avec humour : « En voyant la facture, il a failli faire une apoplexie. »",
  },
  "Ablution": {
    scene: "Avant la prière, il se lave les mains, le visage, les pieds, toujours dans le même ordre. Ce sont ses ablutions.",
    aussi: "Avec humour, tes « ablutions matinales », c'est ta douche.",
  },
  "Timoré": {
    scene: "Il n'ose ni demander une augmentation, ni goûter un plat nouveau, ni prendre la parole en réunion. Il est timoré : la peur de mal faire le retient toujours.",
  },
  "Toiser": {
    scene: "Elle entre dans la boutique de luxe en baskets. La vendeuse la regarde des pieds à la tête, lentement, sans un sourire. Elle la toise : elle la mesure du regard, de haut.",
    origine: "La toise était une ancienne mesure de longueur. On toisait les gens pour les mesurer, puis pour les juger.",
  },
  "Véloce": {
    scene: "Le guépard bondit, et en trois secondes il est déjà loin. Véloce : rapide et agile à la fois.",
    origine: "Le vélo vient de là : le vélocipède avance avec les pieds, rapidement.",
  },
  "Hirsute": {
    scene: "Il sort de sa tente après trois jours de festival : cheveux dressés dans tous les sens, barbe en broussaille. Il est hirsute.",
  },
  "Inique": {
    scene: "Le plus pauvre paie l'amende, le plus riche s'en sort avec un sourire. Ce jugement est inique : profondément injuste.",
    degainer: "Le nom : une iniquité.",
  },
  "Sagacité": {
    scene: "Un seul coup d'œil sur la scène, et le détective a compris : la tasse encore tiède, la fenêtre entrouverte. La sagacité, c'est l'esprit qui comprend vite et juste.",
  },
  "Diligence": {
    scene: "Elle a traité ton dossier en une heure, sans une erreur. Elle a fait preuve de diligence : rapide et soigneuse.",
    aussi: "Dans les westerns, la diligence est aussi la voiture à chevaux attaquée par les bandits.",
  },
  "Cabale": {
    scene: "Des rumeurs lancées en même temps par plusieurs personnes, des sifflets organisés à la première d'une pièce. Ce n'est pas un hasard : c'est une cabale, un complot pour faire tomber quelqu'un.",
  },
  "Obvier": {
    scene: "Pour obvier aux embouteillages du vendredi, il part le jeudi soir. Obvier, c'est prendre les devants pour qu'un problème n'arrive pas.",
    piege: "On obvie « à » quelque chose.",
  },
  "Pluralisme": {
    scene: "Des journaux de gauche, de droite, du centre, des religions et des cultures différentes qui cohabitent : c'est le pluralisme, la coexistence de plusieurs voix.",
  },
  "Exergue": {
    scene: "Dans son rapport, elle a mis en exergue un seul chiffre, en gros, en haut de la page. Mettre en exergue, c'est mettre en valeur, bien en évidence.",
    aussi: "C'est aussi la citation placée en tête d'un livre, comme une épigraphe.",
  },
  "Dessein": {
    scene: "Il ne s'est pas assis à côté d'elle par hasard. C'était à dessein : il avait un projet, une intention bien précise.",
    piege: "Dessein (l'intention) ne s'écrit pas comme dessin (le crayon).",
  },
  "Feudataire": {
    scene: "Au Moyen Âge, le seigneur confiait une terre à un vassal. En échange, celui-ci lui devait fidélité et service. Le vassal était son feudataire.",
    origine: "La même famille que « féodal » et « fief ».",
  },
  "Exhorter": {
    scene: "Sur le banc de touche, l'entraîneur se lève, frappe dans ses mains : « Allez ! On y croit ! » Il exhorte ses joueurs à se battre.",
  },
  "Nébuleuse": {
    scene: "Au télescope, une tache de lumière colorée dans le noir : un nuage géant de gaz et de poussières où naissent les étoiles. C'est une nébuleuse.",
    aussi: "Au figuré : un ensemble flou, aux contours mal définis. « Une nébuleuse de petits groupes. »",
  },
  "Férir": {
    scene: "La forteresse s'est rendue avant même que les assaillants n'arrivent. Ils l'ont prise sans coup férir : sans combattre, sans aucun effort.",
    piege: "Le verbe ne survit plus que dans cette expression. Il voulait dire « frapper ».",
  },
  "Fomenter": {
    scene: "Dans l'arrière-salle d'une taverne, à voix basse, ils préparent la révolte de demain. Ils fomentent des troubles.",
  },
  "S'enticher": {
    scene: "Il y a une semaine, elle ne connaissait pas le jazz. Aujourd'hui, elle ne jure que par lui et achète des vinyles. Elle s'en est entichée, d'un coup.",
    degainer: "Souvent avec une pointe d'ironie : on se doute que ça ne durera pas.",
  },
  "Affable": {
    scene: "La concierge te salue par ton prénom, prend des nouvelles de ta mère, t'aide avec tes courses. Elle est affable : aimable et accueillante.",
  },
  "Faîte": {
    scene: "Tout en haut du toit, sur la ligne qui le couronne, un merle chante. Il est sur le faîte. Et au figuré, une carrière peut atteindre son faîte : son sommet.",
    piege: "Avec un accent circonflexe, comme sur « fête ».",
  },
  "Peccadille": {
    scene: "Un biscuit volé dans la boîte, un retard de cinq minutes. Une peccadille : une toute petite faute, pas de quoi en faire une histoire.",
  },
  "Ressentiment": {
    scene: "Il ne lui a jamais pardonné ce mot prononcé il y a dix ans. Il n'en parle pas, mais il le garde en lui, intact. C'est du ressentiment.",
  },
  "Tribulation": {
    scene: "Le train annulé, la valise perdue, l'hôtel complet : il nous raconte en riant les tribulations de son voyage.",
    degainer: "Presque toujours au pluriel.",
  },
  "Émoi": {
    scene: "Une lettre anonyme arrive à la mairie, et c'est tout le village qui est en émoi. Un trouble, une émotion vive, qui se répand.",
  },
  "Indicible": {
    scene: "Certaines douleurs, certaines joies dépassent les mots. Les survivants parlent d'une horreur indicible : impossible à raconter.",
    degainer: "Proche d'« ineffable », mais plus souvent utilisé pour la souffrance.",
  },
  "Éluder": {
    scene: "« Et ton travail, ça avance ? — Tiens, tu as vu le temps qu'il fait ? » Il élude la question : il l'esquive habilement.",
  },
  "Polype": {
    scene: "Au fond de la mer, de minuscules animaux mous construisent ensemble les récifs de corail. Ce sont des polypes.",
    aussi: "Chez le médecin, un polype est une petite excroissance bénigne.",
  },
  "Amnistie": {
    scene: "Une loi est votée, et des condamnations sont effacées comme si elles n'avaient jamais existé. C'est une amnistie.",
    origine: "La même famille qu'« amnésie » : l'oubli.",
  },
  "Diocèse": {
    scene: "Chaque évêque a son territoire, avec ses paroisses et ses églises. C'est son diocèse.",
  },
  "Diaphane": {
    scene: "Un rideau de soie si fin que la lumière du matin passe au travers. Une peau si pâle qu'on devine les veines. Diaphane.",
  },
  "Omnipotent": {
    scene: "Il décide de tout, contrôle tout, signe tout. Dans son entreprise, le patron est omnipotent : tout-puissant.",
    origine: "« Omni », tout, et « potens », qui peut.",
  },
  "Sollicitude": {
    scene: "Elle t'apporte une soupe quand tu es malade, t'envoie un message pour savoir si tu es bien rentré. Sa sollicitude te touche : une attention douce, un peu inquiète.",
  },
  "Péricliter": {
    scene: "Les clients se font rares, les étagères se vident, la vitrine se ternit. Le petit commerce périclite : il décline, il va à sa perte.",
  },
  "Postérité": {
    scene: "Il ne sera pas célèbre de son vivant, mais il est sûr d'une chose : la postérité lui rendra justice. Les générations futures, et la mémoire qu'on leur laisse.",
  },
  "Incidemment": {
    scene: "Au milieu de la conversation sur les vacances, il glisse, incidemment, qu'il a démissionné. En passant, comme un détail.",
  },
  "Fulminer": {
    scene: "Il a appris qu'on l'avait doublé pour la promotion. Il fulmine dans son bureau, il tape du poing, il menace de tout faire sauter.",
    origine: "Du latin « fulmen », la foudre.",
  },
  "Volubile": {
    scene: "Elle enchaîne les phrases sans respirer, saute d'un sujet à l'autre, et tu n'arrives pas à placer un mot. Elle est volubile.",
  },
  "Exaction": {
    scene: "Des soldats qui pillent les villages, des fonctionnaires qui rackettent les habitants. Ce sont des exactions : des violences et des abus commis par ceux qui ont le pouvoir.",
  },
  "Leitmotiv": {
    scene: "Dans le film, la même musique revient chaque fois que le méchant apparaît. Et chez ta grand-mère, le même leitmotiv : « Couvre-toi, tu vas attraper froid. »",
    origine: "Un mot allemand venu de l'opéra de Wagner : le « motif conducteur ».",
  },
  "Adultérer": {
    scene: "Du miel coupé au sirop de sucre, un vin allongé d'eau. On l'a adultéré : on l'a falsifié en le mélangeant.",
  },
  "Agoniste": {
    scene: "Quand tu plies le bras, le biceps se contracte : c'est l'agoniste. Le triceps, de l'autre côté, se relâche : c'est l'antagoniste.",
  },
  "Séculier": {
    scene: "Le prêtre de ta paroisse vit dans le monde, au milieu des gens : c'est un prêtre séculier. Le moine, lui, vit à l'écart, dans son monastère.",
    aussi: "Plus largement, séculier veut dire civil, non religieux : le « bras séculier », c'est la justice ordinaire.",
  },
  "Laïus": {
    scene: "On lui a demandé de dire deux mots pour le pot de départ. Vingt minutes plus tard, il est toujours là. Son laïus est interminable.",
  },
  "Ascèse": {
    scene: "Lever à cinq heures, pas de sucre, pas d'écran, une heure de méditation. Il s'impose une ascèse : une discipline stricte, faite de privations choisies.",
  },
  "Manichéen": {
    scene: "Dans ce film, les gentils sont tout gentils et les méchants tout méchants. Aucune nuance : c'est manichéen.",
    origine: "Mani, un prophète perse, enseignait que le monde est un combat entre le Bien et le Mal.",
  },
  "Iconoclaste": {
    scene: "Elle met de la musique électronique dans un opéra de Mozart et du ketchup sur un plat de grand chef. Elle est iconoclaste : elle bouscule les traditions.",
    origine: "À l'origine, les iconoclastes détruisaient les images religieuses : « briseurs d'icônes ».",
  },
  "Gavroche": {
    scene: "Un gamin des rues, gouailleur, débrouillard, qui n'a peur de rien et se moque des puissants. On dit encore « un gavroche » pour un enfant de Paris effronté.",
    origine: "Gavroche est un personnage des Misérables de Victor Hugo, qui chante sur les barricades.",
  },
  "Concomitant": {
    scene: "Il a commencé à boire du café le jour même où il a commencé à mal dormir. Les deux sont concomitants : ils arrivent en même temps. Reste à savoir si l'un cause l'autre.",
  },
  "Probité": {
    scene: "Il trouve un portefeuille plein de billets dans la rue et le rapporte, au centime près. Sa probité est sans faille : une honnêteté irréprochable.",
  },
  "Irrémissiblement": {
    scene: "Il a franchi la ligne, et il le sait : il est irrémissiblement perdu à ses yeux. Sans retour, sans pardon possible.",
  },
  "Récuser": {
    scene: "L'avocat se lève : ce juge connaît l'accusé, il ne peut pas être impartial. Il le récuse : il refuse qu'il juge l'affaire.",
    aussi: "On récuse aussi un argument : on conteste sa valeur.",
  },
  "Sinistrose": {
    scene: "Les informations du soir, la météo grise, la facture d'électricité. Tout le monde déprime, tout le monde dit que tout va mal. C'est la sinistrose, un pessimisme qui se propage.",
  },
  "Prélat": {
    scene: "Évêques, archevêques, cardinaux en robe pourpre : les hauts dignitaires de l'Église sont des prélats.",
  },
  "Reddition": {
    scene: "Le drapeau blanc monte au-dessus de la forteresse. Les soldats sortent, les armes baissées. C'est la reddition.",
    piege: "Ne pas confondre avec « rédaction ».",
  },
  "Impérieux": {
    scene: "Un ton qui ne laisse pas le choix : « Tu restes ici. » Ou un besoin qui ne peut pas attendre : une envie impérieuse de dormir. Impérieux, c'est ce qui commande.",
  },
  "Providence": {
    scene: "Tu n'as plus un sou, et le matin même, tu trouves un billet dans une vieille poche. C'est la providence : une chance inespérée, presque un cadeau du ciel.",
    aussi: "Pour les croyants, la Providence est la sagesse de Dieu qui gouverne le monde.",
  },
  "Nécromancien": {
    scene: "Dans la crypte, à la lueur des bougies, il trace un cercle sur le sol et appelle les morts pour qu'ils lui révèlent l'avenir. C'est le nécromancien.",
    origine: "Du grec « nekros », le mort, et « manteia », la divination.",
  },
  "Archange": {
    scene: "Au-dessus des anges, les archanges : Michel qui terrasse le dragon, Gabriel qui porte les grandes annonces.",
  },
  "Sépulcre": {
    scene: "Une pierre lourde, une crypte silencieuse, une plaque presque effacée. Le sépulcre est le tombeau, dit avec solennité.",
    degainer: "« Un silence de sépulcre » : un silence de mort.",
  },
  "Despote": {
    scene: "Il gouverne seul, ne rend de comptes à personne, fait taire ceux qui le contestent. C'est un despote.",
    aussi: "En famille aussi : « un petit despote » qui fait la loi à la maison.",
  },
  "Chimérique": {
    scene: "Un château en Espagne, une fortune faite en un an sans travailler. Ce projet est chimérique : il n'existe que dans les rêves.",
    origine: "La Chimère, monstre de la mythologie grecque à tête de lion, corps de chèvre et queue de serpent.",
  },
  "Absolution": {
    scene: "Au confessionnal, le prêtre écoute, puis prononce les mots qui lavent la faute. C'est l'absolution, le pardon.",
  },
  "Succube": {
    scene: "Dans les légendes du Moyen Âge, un démon prend l'apparence d'une femme d'une beauté irrésistible et visite les hommes dans leur sommeil. C'est la succube.",
  },
  "Fiducie": {
    scene: "Tu confies tes biens à quelqu'un de confiance, qui les gère pour toi selon des règles précises. C'est une fiducie, un contrat fondé sur la confiance.",
    origine: "Du latin « fiducia », la confiance.",
  },
  "Monolithe": {
    scene: "Un bloc de pierre immense, d'une seule pièce, dressé au milieu de la plaine depuis des milliers d'années. C'est un monolithe.",
    aussi: "Au figuré, un parti ou un groupe monolithique forme un bloc uni, sans aucune voix discordante.",
  },

  // Série 5
  "Élider": {
    scene: "Personne ne dit « le ami » ni « je aime ». La voyelle saute d'elle-même et laisse une apostrophe à sa place : l'ami, j'aime. On l'a élidée.",
    aussi: "Au figuré, élider une question, c'est la faire disparaître discrètement de la discussion.",
  },
  "Hoirie": {
    scene: "Chez le notaire, un mot qui sent la poussière des vieux actes : l'hoirie, c'est l'héritage.",
    degainer: "« Une avance d'hoirie » : de l'argent donné par un parent de son vivant, à valoir sur l'héritage.",
  },
  "Cénobite": {
    scene: "Les moines qui mangent ensemble, prient ensemble et dorment sous le même toit sont des cénobites. Celui qui part seul dans le désert, lui, est un ermite.",
    origine: "Du grec « koinos bios », la vie en commun.",
  },
  "Bigotisme": {
    scene: "Elle compte les signes de croix de ses voisins à la messe et juge ceux qui n'y vont pas. Ce n'est pas de la foi, c'est du bigotisme : une dévotion étroite qui surveille les autres.",
  },
  "Villégiature": {
    scene: "Une maison louée au bord de la mer, des journées sans horaire, une chaise longue à l'ombre. Ils sont en villégiature.",
    degainer: "Un mot délicieusement rétro pour dire « en vacances ».",
  },
  "Tacite": {
    scene: "Personne ne l'a jamais dit, mais tout le monde le sait : le premier qui se lève fait le café. C'est un accord tacite.",
    aussi: "En droit, la « tacite reconduction » renouvelle un contrat si personne ne dit non.",
  },
  "Démagogue": {
    scene: "« Moins d'impôts, plus de vacances, et tout sera gratuit ! » Il dit à la foule exactement ce qu'elle veut entendre, même ce qu'il ne pourra jamais tenir. C'est un démagogue.",
    origine: "Du grec : celui qui « mène le peuple ».",
  },
  "Alexithymie": {
    scene: "« Ça va ? — Je sais pas. » Pas par pudeur : il ne sait vraiment pas mettre de nom sur ce qu'il ressent. L'alexithymie, c'est cette difficulté à identifier et dire ses émotions.",
    origine: "Du grec : « sans mots pour les émotions ».",
  },
  "Myriade": {
    scene: "Allongé dans un champ, loin des villes, tu lèves les yeux : une myriade d'étoiles. Tellement qu'on renonce à compter.",
    origine: "En grec, « myrias » voulait dire dix mille.",
  },
  "Vitrifier": {
    scene: "Le sable chauffé à très haute température devient du verre : on le vitrifie. Et un regard glacial peut vitrifier toute une salle.",
    aussi: "Sur un parquet, on passe un vitrificateur pour le rendre brillant et dur.",
  },
  "Malingre": {
    scene: "Un enfant maigre, pâle, toujours enrhumé, qui flotte dans ses vêtements. On le dit malingre.",
  },
  "Dépréciation": {
    scene: "La voiture neuve perd un quart de sa valeur dès la première année. C'est la dépréciation.",
    aussi: "On parle aussi de la dépréciation d'une monnaie, ou d'une personne qu'on rabaisse.",
  },
  "Éructer": {
    scene: "Après trois bières, il éructe bruyamment. Et quand il est en colère, il éructe des insultes, comme on rote : sans retenue.",
  },
  "Colloque": {
    scene: "Trois jours dans un amphithéâtre, des spécialistes venus du monde entier qui présentent leurs recherches sur un même sujet. C'est un colloque.",
  },
  "Obturation": {
    scene: "Le dentiste nettoie la carie et la bouche avec une pâte blanche. C'est une obturation.",
    aussi: "En photo, l'obturateur s'ouvre et se ferme pour laisser entrer la lumière.",
  },
  "Élucider": {
    scene: "Personne ne comprenait comment le voleur était entré. Puis l'enquêtrice remarque la trappe sous le tapis. Le mystère est élucidé.",
    origine: "Du latin « lucidus », clair, comme « lucide ».",
  },
  "Furibond": {
    scene: "Il sort du garage, la facture à la main, rouge, les yeux exorbités. Il est furibond.",
  },
  "Belligérant": {
    scene: "Deux pays en guerre s'assoient enfin à la même table. Les belligérants négocient une trêve.",
    degainer: "Pour un enfant qui se dispute avec son frère, avec humour : « Les belligérants sont priés de passer à table. »",
  },
  "Soliloque": {
    scene: "Seule dans sa cuisine, elle parle à voix haute : « Bon, où j'ai mis mes clés… et pourquoi je suis venue ici ? » C'est un soliloque.",
    aussi: "Au théâtre, c'est un monologue où le personnage pense tout haut.",
  },
  "Loisible": {
    scene: "« Il vous est loisible de partir avant la fin. » Traduction : vous avez le droit, personne ne vous retient.",
  },
  "Cariatide": {
    scene: "Sur l'Acropole d'Athènes, six statues de femmes portent le toit d'un temple sur leur tête, depuis plus de deux mille ans. Ce sont les cariatides.",
  },
  "Polypier": {
    scene: "Un récif de corail, c'est une immense cité : des millions de petits polypes qui ont bâti ensemble un squelette commun. Ce squelette s'appelle le polypier.",
  },
  "Métonymie": {
    scene: "« On boit un verre ? » Tu ne vas pas boire le verre, mais ce qu'il contient. « Lire un Zola », c'est lire un livre de Zola. La métonymie désigne une chose par une autre qui lui est liée.",
  },
  "Gloser": {
    scene: "Elle a mis une robe rouge au mariage, et toute la soirée, les tantes ont glosé sur ce choix. Commenter longuement, souvent pour critiquer.",
  },
  "Archaïsme": {
    scene: "« Icelle », « jadis », « occire » : des mots d'un autre temps, qu'on n'emploie plus. Ce sont des archaïsmes.",
    degainer: "Pour faire sourire, glisse un archaïsme bien choisi : « Je vais de ce pas occire ce moustique. »",
  },
  "Quidam": {
    scene: "« Un quidam s'est garé devant mon portail. » Quelqu'un, n'importe qui, dont on ne connaît pas le nom.",
    piege: "On prononce « ki-dam ».",
  },
  "Vivisection": {
    scene: "Un mot dur, de laboratoire : opérer un animal vivant pour la recherche. Il a provoqué de grands débats sur la souffrance animale.",
  },
  "Tératologique": {
    scene: "Dans les cabinets de curiosités d'autrefois, des bocaux de formol conservaient des veaux à deux têtes. La tératologie, c'est l'étude des malformations.",
    aussi: "Au figuré, tératologique veut dire monstrueux : « un projet tératologique ».",
    origine: "Du grec « teras », le monstre.",
  },
  "Camaïeu": {
    scene: "Un salon tout en bleus : bleu ciel, bleu canard, bleu nuit. Une seule couleur, toutes ses nuances. C'est un camaïeu.",
  },
  "Déclivité": {
    scene: "La rue descend si fort vers le port que les vélos dévalent sans pédaler. La déclivité est impressionnante : la pente.",
  },
  "Désagrégation": {
    scene: "La vieille statue de grès s'effrite, grain par grain, sous la pluie. Et le groupe d'amis, lui, se défait petit à petit. C'est la désagrégation.",
  },
  "Vicissitude": {
    scene: "La faillite, puis la fortune, puis la maladie, puis la guérison. Il a connu toutes les vicissitudes de la vie : ses hauts, et surtout ses bas.",
    piege: "Presque toujours au pluriel.",
  },
  "Noroît": {
    scene: "Sur le port breton, le vieux marin lève le nez : « Le noroît se lève, on rentre. » Le vent du nord-ouest, qui annonce le gros temps.",
  },
  "Isthme": {
    scene: "Une bande de terre étroite entre deux mers, comme un pont naturel. Le canal de Panama a été creusé à travers un isthme.",
    piege: "On ne prononce ni le h ni le t : « isme ».",
  },
  "Fondrière": {
    scene: "Le chemin de campagne après l'orage : des trous remplis de boue où la voiture s'enfonce jusqu'aux essieux. Des fondrières.",
  },
  "Misanthrope": {
    scene: "Il vit seul au bout du chemin, ne répond pas au bonjour, trouve les gens hypocrites et bruyants. Il fuit le genre humain : c'est un misanthrope.",
    origine: "Molière en a fait une comédie : « Le Misanthrope », avec Alceste qui ne supporte pas les mensonges des salons.",
  },
  "Fongible": {
    scene: "Tu prêtes un billet de dix euros à un ami. Il ne te rendra pas ce billet-là, mais un autre, et ça revient au même. L'argent est fongible : remplaçable par l'identique.",
    aussi: "Les NFT ont fait connaître le contraire : « non fongible », un objet numérique unique.",
  },
  "Syzygie": {
    scene: "La Terre, la Lune et le Soleil parfaitement alignés, comme trois perles sur un fil. C'est la syzygie, le moment des éclipses et des grandes marées.",
    degainer: "Un des mots les plus étranges de la langue française : de quoi briller au Scrabble.",
  },
  "Maraude": {
    scene: "Des enfants qui se glissent dans le verger du voisin pour chaparder des pommes : c'est la maraude.",
    aussi: "Un taxi en maraude roule à la recherche de clients. Et les « maraudes » sont aussi les tournées des bénévoles auprès des sans-abri.",
  },
  "Innervé": {
    scene: "Le bout des doigts est l'une des parties les plus innervées du corps : des milliers de terminaisons nerveuses, c'est pour ça qu'une coupure au doigt fait si mal.",
  },
  "Épiphénomène": {
    scene: "Les journaux en parlent comme d'une révolution, mais dans trois mois plus personne n'y pensera. C'est un épiphénomène : un fait secondaire, de surface.",
  },
  "Amphigouri": {
    scene: "« Dans une perspective de transversalité systémique, l'enjeu est de recontextualiser le paradigme… » Personne n'a rien compris, et peut-être même pas lui. C'est de l'amphigouri.",
  },
  "Vindicatif": {
    scene: "Tu lui as pris sa place de parking il y a trois ans. Il s'en souvient, et il attend son heure. Il est vindicatif : il aime se venger.",
  },
  "Parachever": {
    scene: "Le tableau est fini. Ou presque : un dernier reflet dans l'œil, une ombre à adoucir. Le peintre parachève son œuvre.",
  },
  "Épiphonème": {
    scene: "Après avoir raconté toute l'histoire, le conteur conclut d'une phrase qui claque, comme une morale : c'est l'épiphonème.",
    degainer: "« Tant de fiel entre-t-il dans l'âme des dévots ? » : Boileau termine ainsi un récit, par une exclamation qui résume tout.",
  },
  "Avilir": {
    scene: "Mentir pour une promotion, écraser les autres pour un peu de pouvoir. Il s'avilit : il se rend méprisable, il se rabaisse.",
  },
  "Flegme": {
    scene: "La maison brûle, tout le monde court. Lui prend son manteau, son chapeau, et sort tranquillement en disant : « Il fait un peu chaud, non ? » Quel flegme !",
    degainer: "« Le flegme britannique » : le calme légendaire des Anglais.",
  },
  "Assonance": {
    scene: "« Tout s'en va, tout s'efface » : le même son de voyelle revient et donne une musique à la phrase. C'est une assonance.",
    piege: "L'assonance répète des voyelles ; l'allitération répète des consonnes.",
  },
  "Abhorrer": {
    scene: "Les endives, le bruit des couverts sur l'assiette, les gens qui arrivent en retard. Il abhorre tout ça : il le déteste profondément.",
  },
  "Menuiser": {
    scene: "Dans l'atelier, l'odeur de la sciure, le rabot qui glisse, une table qui prend forme. Menuiser, c'est travailler le bois.",
    aussi: "Au figuré, un écrivain menuise ses phrases : il les façonne avec patience.",
  },
  "Jurisprudence": {
    scene: "Le juge hésite. Mais un autre tribunal a déjà tranché un cas presque identique il y a dix ans. Cette décision fait jurisprudence : elle sert de référence.",
  },
  "Quorum": {
    scene: "Assemblée générale de l'association : il faut au moins la moitié des membres pour voter. Il en manque deux. Le quorum n'est pas atteint, on reporte.",
  },
  "S'enquérir": {
    scene: "Elle passe chez la voisine pour s'enquérir de sa santé : demander de ses nouvelles.",
    piege: "Ça se conjugue comme « acquérir » : je m'enquiers, il s'est enquis.",
  },
  "Asynchrone": {
    scene: "Tu laisses un message vocal, il répond trois heures plus tard. Vous ne parlez pas en même temps : la conversation est asynchrone.",
  },
  "Agraire": {
    scene: "Les champs, les fermes, la terre qu'on cultive, et qui la possède. Une réforme agraire redistribue les terres agricoles.",
  },
  "Rétrocession": {
    scene: "La commune avait acheté le terrain pour y faire un parc. Le projet est abandonné, et le terrain est rendu à son ancien propriétaire. C'est une rétrocession.",
  },
  "Ambages": {
    scene: "« Je vais te le dire sans ambages : ton gâteau est raté. » Sans détour, franchement, sans tourner autour du pot.",
    piege: "Le mot ne s'emploie plus que dans « sans ambages ».",
  },
  "Paganisme": {
    scene: "Zeus, Odin, Isis : avant l'arrivée des grandes religions monothéistes, les peuples honoraient de nombreux dieux. Les chrétiens ont appelé ça le paganisme.",
    origine: "Du latin « paganus », le paysan : c'est dans les campagnes que les anciens cultes ont résisté le plus longtemps.",
  },
  "Véniel": {
    scene: "Un mensonge pour ne pas vexer quelqu'un, un dernier carré de chocolat volé. Des péchés véniels : légers, faciles à pardonner.",
  },
  "Consubstantialité": {
    scene: "Un mot de théologien : être d'une seule et même substance. Il a été au cœur des grands débats de l'Église sur le Père et le Fils.",
    degainer: "Au figuré, pour deux choses inséparables : « la consubstantialité de l'auteur et de son œuvre ».",
  },
  "Métempsycose": {
    scene: "Et si, après la mort, ton âme passait dans le corps d'un chat, d'un aigle, d'un autre humain ? C'est la métempsycose : la réincarnation d'un corps à l'autre.",
    origine: "Pythagore y croyait, dit-on : il aurait reconnu la voix d'un ami dans les cris d'un chien battu.",
  },
  "Antonomase": {
    scene: "« C'est un vrai Harpagon » pour un avare, « un Apollon » pour un bel homme, « un don Juan » pour un séducteur. L'antonomase, c'est un nom propre devenu nom commun.",
  },
  "Misopédie": {
    scene: "Le restaurant interdit aux enfants, le voisin qui soupire à chaque cri du parc. La misopédie, c'est l'aversion pour les enfants.",
  },
  "Impermanence": {
    scene: "Les fleurs de cerisier tombent après une semaine, la vague efface le château de sable. Rien ne dure : c'est l'impermanence.",
    origine: "Une idée au cœur du bouddhisme : accepter que tout change apaise la souffrance.",
  },
  "Affliction": {
    scene: "Le jour de l'enterrement, la famille est accablée, silencieuse. Une affliction profonde : un chagrin qui écrase.",
  },
  "Lithophanie": {
    scene: "Une plaque de porcelaine blanche, sans rien de particulier. Puis tu la places devant une bougie, et un paysage apparaît, tout en nuances de lumière. C'est une lithophanie.",
  },
  "Moribond": {
    scene: "Le vieux café du coin, plus de clients, plus de lumière, plus de musique. Il est moribond : sur le point de mourir.",
    aussi: "Au sens propre, un malade moribond vit ses dernières heures.",
  },
  "Moult": {
    scene: "« Après moult hésitations, il a enfin commandé. » Un mot de chevalier pour dire « beaucoup », qu'on emploie aujourd'hui pour sourire.",
    piege: "On prononce le t : « moulte ».",
  },
  "Cosmogonique": {
    scene: "Au commencement, un œuf cosmique, un géant découpé, un dieu qui sépare la lumière des ténèbres. Chaque peuple a son récit cosmogonique : son histoire de la naissance du monde.",
  },
  "Indolence": {
    scene: "Allongé dans un hamac, un bras qui pend, il regarde passer les nuages sans la moindre intention de bouger. Quelle douce indolence.",
  },
  "Guigne": {
    scene: "Pneu crevé, parapluie oublié, train annulé, le tout le même jour. Il a la guigne : la malchance lui colle aux baskets.",
    aussi: "Une guigne, c'est aussi une petite cerise sucrée. Et « je m'en soucie comme d'une guigne » : je m'en fiche complètement.",
  },
  "Agrégateur": {
    scene: "Une seule appli, et tous tes journaux, blogs et podcasts au même endroit. C'est un agrégateur : il rassemble des contenus venus de partout.",
  },
  "Pérorer": {
    scene: "Au dîner, il pérore depuis une heure sur l'économie mondiale, en citant des chiffres approximatifs et sans laisser personne en placer une.",
  },
  "Anamorphose": {
    scene: "Dans un tableau de Holbein, une forme étrange flotte aux pieds de deux ambassadeurs. Place-toi sur le côté, et la forme devient un crâne. C'est une anamorphose.",
  },
  "Contumace": {
    scene: "L'accusé a fui à l'étranger. Le procès a lieu quand même, sans lui : il est jugé par contumace.",
  },
  "Colliger": {
    scene: "Pendant des années, il a recopié chaque proverbe entendu dans son village, dans un grand cahier. Il a colligé tout un trésor de sagesse populaire.",
  },
  "Élégie": {
    scene: "Un poème qui pleure : un amour perdu, un ami mort, une jeunesse envolée. C'est une élégie.",
  },
  "Tripot": {
    scene: "Une arrière-salle enfumée, des cartes poisseuses, des types louches qui misent leur paie. Un tripot : une maison de jeu mal famée.",
  },
  "Corporation": {
    scene: "Les boulangers, les menuisiers, les tailleurs de pierre : au Moyen Âge, chaque métier avait sa corporation, avec ses règles, ses fêtes et ses secrets.",
  },
  "Rupestre": {
    scene: "Dans la grotte de Lascaux, des chevaux, des taureaux et des cerfs dessinés sur la paroi il y a dix-sept mille ans. C'est l'art rupestre.",
  },
  "S'enorgueillir": {
    scene: "Le petit village s'enorgueillit d'avoir vu naître un champion du monde : il en tire une immense fierté, et l'a écrit en grand sur un panneau à l'entrée.",
  },
  "Agréer": {
    scene: "« Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées. » Agréer, c'est accepter, bien recevoir.",
    aussi: "Un artisan « agréé » a reçu l'approbation officielle.",
  },
  "Nachave": {
    scene: "« Allez, on nachave ! » Un mot d'argot venu des Manouches : partir, s'en aller, filer.",
  },
  "Frise chronologique": {
    scene: "Sur le mur de la classe, une longue bande de papier : la préhistoire, l'Antiquité, le Moyen Âge… Chaque événement à sa place. C'est la frise chronologique.",
  },
  "Bon an mal an": {
    scene: "Certaines années sont bonnes, d'autres mauvaises, mais en moyenne la vigne donne deux mille bouteilles, bon an mal an.",
  },
  "Servile": {
    scene: "Il rit à toutes les blagues du patron, même les mauvaises, et lui porte son café sans qu'on le demande. Il est servile : soumis, sans dignité.",
    aussi: "Une « imitation servile » copie sans aucune originalité.",
  },
  "Obséquieux": {
    scene: "« Mais bien sûr, Monsieur ! Tout de suite, Monsieur ! Quel honneur, Monsieur ! » Le serveur est obséquieux : poli à l'excès, surtout pour son pourboire.",
  },
  "Promptement": {
    scene: "À peine la sonnette a-t-elle retenti que le majordome est déjà à la porte. Il a répondu promptement : sans perdre une seconde.",
  },
  "Se départir de": {
    scene: "Même au milieu de la tempête, le capitaine ne se départait jamais de son calme. Il ne l'abandonnait pas.",
    piege: "Se conjugue comme « partir » : il ne se départ pas (et non « départit »).",
  },
  "Autocratique": {
    scene: "Une seule personne décide de tout, pas de parlement, pas de justice indépendante, pas de presse libre. Le régime est autocratique.",
  },
  "Fiacre": {
    scene: "Paris, 1880 : un cheval, un cocher en chapeau haut-de-forme, une voiture qu'on hèle dans la rue. Le fiacre, l'ancêtre du taxi.",
    origine: "Les premières voitures de louage stationnaient devant une auberge à l'enseigne de saint Fiacre.",
  },
  "Acéré": {
    scene: "La lame du couteau, la griffe du chat, la plume d'un critique : tout ce qui est acéré coupe, pointe et blesse.",
  },
  "Léonin": {
    scene: "Une crinière léonine, une démarche léonine : ce qui rappelle le lion.",
    aussi: "Une « clause léonine », dans un contrat, donne tout à un seul : la part du lion.",
  },
  "Hémistiche": {
    scene: "« Rodrigue, as-tu du cœur ? » : six syllabes, un souffle, puis la seconde moitié du vers. Chacune de ces moitiés est un hémistiche.",
  },
  "Corinthien": {
    scene: "Lève les yeux vers le haut d'une colonne grecque : si son chapiteau est couvert de feuilles d'acanthe sculptées, comme un bouquet de pierre, il est corinthien.",
  },
  "Dussé-je": {
    scene: "« Je finirai ce roman, dussé-je y passer mes nuits ! » Une tournure d'un autre siècle qui veut dire « même si je devais ».",
    degainer: "Pour donner un ton de serment à une promesse, avec un peu d'humour.",
  },
  "Pertinacité": {
    scene: "Vingt refus d'éditeurs, et elle envoie son manuscrit une vingt et unième fois. Sa pertinacité force le respect : une obstination qui ne lâche rien.",
  },
  "Opiniâtreté": {
    scene: "Chaque matin, la même vague revient contre le même rocher. Et des siècles plus tard, elle l'a creusé. C'est l'opiniâtreté : une persévérance acharnée.",
    aussi: "Parfois, c'est aussi de l'entêtement.",
  },
  "Rembruni": {
    scene: "Il souriait encore. Puis il a lu le message, et son visage s'est rembruni : l'ombre est passée dessus.",
  },
  "Houri": {
    scene: "Dans la tradition islamique, les houris sont des compagnes célestes promises au paradis. Les poètes d'Orient en ont fait une image de la beauté.",
    aussi: "Dans la littérature française, « une houri » désigne parfois, au figuré, une femme d'une grande beauté.",
  },
  "Axiome": {
    scene: "« Par deux points passe une seule droite. » On ne le démontre pas : on part de là. C'est un axiome, le premier pas d'un raisonnement.",
    degainer: "Pour une règle de vie qu'on pose sans discuter : « Mon axiome : jamais de réunion avant dix heures. »",
  },
  "Détirer": {
    scene: "À la sortie du lavoir, deux femmes tiennent chacune un bout du drap et tirent dessus pour le défroisser. Elles le détirent.",
  },
  "Moucheture": {
    scene: "Le pelage du léopard, les ailes d'un papillon, une robe à petits points : toutes ces petites taches sont des mouchetures.",
  },
  "Métaphysiquement": {
    scene: "Physiquement, tu es dans ton lit. Métaphysiquement, tu te demandes pourquoi il y a quelque chose plutôt que rien. Au-delà de la matière, du côté des grandes questions.",
  },

  // Série 6
  "Frac": {
    scene: "Le chef d'orchestre monte sur l'estrade, se retourne, et deux longues basques noires dansent derrière lui. Il porte le frac, l'habit de cérémonie à queue-de-pie.",
  },
  "Probe": {
    scene: "Le caissier aurait pu garder la différence, personne ne l'aurait su. Il a couru dans la rue pour rendre la monnaie. Un homme probe : honnête jusqu'au scrupule.",
    degainer: "Le nom, c'est la probité.",
  },
  "Expédient": {
    scene: "Plus d'argent pour le loyer ? Il vend sa guitare, emprunte à un cousin, fait des petits boulots au noir. Il vit d'expédients : des solutions de fortune pour s'en sortir au jour le jour.",
  },
  "Entériner": {
    scene: "Tout le monde s'était déjà organisé comme ça depuis des mois. La réunion n'a fait qu'entériner la décision : la rendre officielle.",
  },
  "Mansarde": {
    scene: "Sous les toits de Paris, une chambre aux murs penchés, une lucarne sur les cheminées. C'est la mansarde de l'étudiant, du poète pauvre, du peintre qui commence.",
    origine: "D'après l'architecte François Mansart, qui a rendu ces toits à pans brisés célèbres.",
  },
  "Fallacieux": {
    scene: "« Tu ne peux pas critiquer le chef, tu n'as jamais été chef. » L'argument sonne bien, mais il est fallacieux : il cherche à te tromper.",
  },
  "Dogmatique": {
    scene: "Il ne discute pas : il annonce. « C'est comme ça, point. » Toute objection est une hérésie. Il est dogmatique.",
  },
  "Bocager": {
    scene: "Des haies bocagères bordent les prés normands, pleines de mûres en septembre et d'oiseaux toute l'année. Bocager : qui appartient au bocage.",
  },
  "Patelin": {
    scene: "« Mais oui, mon petit, faites-moi confiance… » Une voix pateline : douce, mielleuse, et pas du tout sincère.",
    aussi: "En familier, un patelin, c'est aussi un petit village : rien à voir.",
    origine: "Maître Pathelin, avocat rusé d'une farce du Moyen Âge, qui embobinait ses clients.",
  },
  "Inflexion": {
    scene: "Au milieu de la phrase, sa voix change légèrement, plus douce. Cette inflexion en dit plus que les mots.",
    aussi: "En politique, une inflexion, c'est un léger changement de direction.",
  },
  "Se sustenter": {
    scene: "Après six heures de randonnée, on s'arrête au refuge pour se sustenter : un bout de pain, du fromage, et les forces reviennent.",
    degainer: "Pour dire « manger » avec un sourire : « Il est temps de se sustenter. »",
  },
  "Substanter": {
    scene: "Un vieux mot pour nourrir quelqu'un, lui donner de quoi subsister. On le croise surtout dans les vieux livres.",
    piege: "Aujourd'hui, on dit plutôt « sustenter ».",
  },
  "Entrave": {
    scene: "Au pré, on attache une corde aux pattes du cheval pour qu'il ne s'enfuie pas : c'est une entrave. Au bureau, une procédure de quinze pages peut devenir une entrave tout aussi efficace.",
  },
  "Thaumaturge": {
    scene: "Au Moyen Âge, on disait que les rois de France guérissaient les malades en les touchant. On les croyait thaumaturges : faiseurs de miracles.",
    aussi: "Au figuré, un thaumaturge est un magicien qui accomplit l'impossible.",
  },
  "Paladin": {
    scene: "Roland et ses compagnons, chevaliers de Charlemagne, sans peur et sans reproche, qui combattent pour une noble cause. Ce sont les paladins.",
    aussi: "Au figuré, un paladin est un défenseur ardent : « le paladin des causes perdues ».",
  },
  "Basilic": {
    scene: "Dans les bestiaires du Moyen Âge, un serpent couronné dont un seul regard suffit à tuer. On combattait le basilic avec un miroir, pour qu'il se foudroie lui-même.",
    aussi: "Et dans ta cuisine, le basilic, c'est l'herbe du pesto. Même nom, autre destin.",
  },
  "Mandragore": {
    scene: "Sa racine ressemble à un petit corps humain. Selon la légende, elle hurle quand on l'arrache, et son cri rend fou. Les sorciers la recherchaient pour leurs philtres.",
    origine: "La plante existe vraiment : elle est toxique, ce qui a nourri toutes ces légendes.",
  },
  "Hippogriffe": {
    scene: "La tête et les ailes d'un aigle, le corps d'un cheval. Dans les romans de chevalerie de la Renaissance, des héros chevauchaient l'hippogriffe jusqu'à la Lune.",
    origine: "Inventé par le poète italien l'Arioste, dans le Roland furieux.",
  },
  "Phénix": {
    scene: "Quand il sent la mort venir, l'oiseau de feu s'embrase dans son nid. Et de ses cendres renaît un nouveau phénix, plus beau que le premier.",
    aussi: "Au figuré, un phénix est une personne exceptionnelle, unique. Et « renaître de ses cendres », c'est se relever après une catastrophe.",
  },
  "Cerbère": {
    scene: "Aux portes des Enfers grecs, un chien à trois têtes veille : personne n'entre vivant, personne ne sort mort.",
    degainer: "La secrétaire qui filtre tous les appels du directeur ? Un vrai cerbère.",
  },
  "Némésis": {
    scene: "Dans chaque histoire de super-héros, il y a l'ennemi juré, celui qui revient toujours, qui le connaît par cœur. C'est sa némésis.",
    origine: "Némésis était la déesse grecque de la vengeance, qui punissait l'orgueil démesuré.",
  },
  "Léviathan": {
    scene: "Dans la Bible, un monstre marin colossal, qu'aucun homme ne peut vaincre.",
    aussi: "Le philosophe Hobbes a donné ce nom à l'État tout-puissant, qui protège les gens en échange de leur obéissance.",
  },
  "Arcanes": {
    scene: "Les couloirs du ministère, les dîners discrets, les décisions prises avant les réunions. Les arcanes du pouvoir : des secrets réservés à quelques initiés.",
    aussi: "Dans le tarot, les cartes sont aussi des arcanes : majeurs et mineurs.",
  },
  "Titan": {
    scene: "Avant les dieux de l'Olympe, il y avait les Titans, des géants qui régnaient sur le monde. Zeus les a vaincus et enfermés sous la terre.",
    aussi: "Au figuré, un titan est quelqu'un d'une puissance hors norme : « un titan de l'industrie ».",
  },
  "Régicide": {
    scene: "21 janvier 1793 : Louis XVI monte sur l'échafaud. Tuer un roi, c'est un régicide, et ceux qui ont voté sa mort ont été appelés les régicides.",
  },
  "Usurpateur": {
    scene: "Le roi légitime est en exil. Sur le trône siège un autre, qui a pris la couronne par la ruse ou la force. C'est l'usurpateur.",
  },
  "Graal": {
    scene: "Les chevaliers de la Table ronde ont passé leur vie à chercher le Graal, la coupe sacrée. Seuls les plus purs pouvaient l'approcher.",
    degainer: "Au figuré, le Graal, c'est le but ultime d'une longue quête : « Ce contrat, c'est le Graal. »",
  },
  "Oracle": {
    scene: "À Delphes, une prêtresse assise sur un trépied rendait les réponses du dieu Apollon, toujours énigmatiques. On venait de toute la Grèce consulter l'oracle.",
    aussi: "Aujourd'hui, on appelle « oracle » quelqu'un dont l'avis fait autorité.",
  },
  "Pandémonium": {
    scene: "Dans « Le Paradis perdu » de Milton, les anges déchus bâtissent leur capitale au fond de l'Enfer : Pandémonium, le palais de tous les démons. Depuis, le mot désigne un lieu de chaos bruyant, une cohue infernale.",
    degainer: "C'est le nom de cette appli : un joyeux chaos de mots, où chacun peut trouver le sien.",
    origine: "Inventé par Milton en 1667, à partir du grec : « pan », tout, et « daimon », démon.",
  },
  "Alchimiste": {
    scene: "Dans une cave enfumée, entre les alambics et les vieux grimoires, il cherche à changer le plomb en or et à distiller l'élixir de longue vie.",
    origine: "Newton lui-même a écrit plus de pages sur l'alchimie que sur la physique.",
  },
  "Chimère": {
    scene: "Une tête de lion, un corps de chèvre, une queue de serpent, et du feu qui sort de sa gueule. La Chimère des Grecs.",
    aussi: "Au figuré, une chimère est un rêve impossible : « courir après des chimères ».",
  },
  "Hydre": {
    scene: "Hercule tranche une tête du serpent de Lerne. Deux repoussent à la place. C'est l'hydre : plus on la combat, plus elle grandit.",
    degainer: "Pour un problème qui renaît sans cesse : « l'hydre de la corruption ».",
  },
  "Avatar": {
    scene: "Dans l'hindouisme, le dieu Vishnou descend sur Terre sous différentes formes : un poisson, une tortue, un prince. Chacune est un avatar.",
    aussi: "Aujourd'hui, ton avatar, c'est ton personnage dans un jeu vidéo ou ta photo de profil.",
  },
  "Sosie": {
    scene: "Dans le métro, tu croises quelqu'un qui ressemble trait pour trait à ton prof de maths. Même nez, même moustache. C'est son sosie.",
    origine: "Sosie est le serviteur d'Amphitryon : le dieu Mercure prend son apparence pour le tromper.",
  },
  "Tartuffe": {
    scene: "Il prie à voix haute, parle de vertu, condamne les autres, et pendant ce temps, il essaie de prendre la maison et la femme de son hôte. C'est un tartuffe : un hypocrite qui joue la piété.",
    origine: "Le personnage de Molière, dont la pièce a été interdite pendant cinq ans.",
  },
  "Harpagon": {
    scene: "Il compte les morceaux de sucre, éteint la lumière dès que tu sors d'une pièce, et cache son argent dans le jardin. Un vrai Harpagon.",
    origine: "Le héros de « L'Avare » de Molière, qui crie « Au voleur ! » quand on lui prend sa cassette.",
  },
  "Rodomontade": {
    scene: "« Moi, je l'aurais mis au tapis en dix secondes ! » Il n'a jamais mis les pieds dans une salle de boxe. Ce sont des rodomontades : de la vantardise.",
    origine: "Rodomont, un guerrier fanfaron du Roland furieux de l'Arioste.",
  },
  "Gargantuesque": {
    scene: "Un sandwich de cinquante centimètres, un plateau de fruits de mer pour deux qui nourrirait dix personnes. Une portion gargantuesque.",
    origine: "Gargantua, le géant de Rabelais, qui buvait le lait de dix-sept mille vaches.",
  },
  "Ubuesque": {
    scene: "Pour obtenir le formulaire A, il faut le formulaire B, qui exige le formulaire A. C'est ubuesque : absurde, grotesque et un peu cruel.",
    origine: "Ubu roi, la pièce d'Alfred Jarry, qui fit scandale en 1896 dès le premier mot.",
  },
  "Lilliputien": {
    scene: "Une maison de poupée avec des tasses grandes comme un ongle. Tout y est lilliputien.",
    origine: "Lilliput, le pays des tout petits hommes dans « Les Voyages de Gulliver », de Swift.",
  },
  "Cassandre": {
    scene: "Elle avait prévenu que l'entreprise allait couler. Personne ne l'a écoutée. Elle a joué les Cassandre.",
    origine: "Apollon avait donné à Cassandre le don de prédire l'avenir, puis l'a maudite : personne ne la croirait jamais. Elle avait annoncé la chute de Troie.",
  },
  "Pygmalion": {
    scene: "Il l'a découverte dans un petit bar, lui a appris à chanter, à tenir la scène, et en a fait une star. C'était son Pygmalion.",
    origine: "Dans la mythologie, Pygmalion sculpte une statue si belle qu'il en tombe amoureux, et la déesse Aphrodite lui donne vie.",
  },
  "Mécène": {
    scene: "Sans lui, le jeune peintre serait mort de faim. Il lui paie un atelier, achète ses toiles, le présente aux galeries. C'est son mécène.",
    origine: "Mécène était un riche ami de l'empereur Auguste, qui protégeait les poètes Virgile et Horace.",
  },
  "Faustien": {
    scene: "Le savoir absolu, la jeunesse éternelle, le pouvoir sans limite, et en échange, ton âme. Un pacte faustien.",
    origine: "Faust, le savant de la légende allemande, qui vend son âme au diable Méphistophélès.",
  },
  "Prométhéen": {
    scene: "Voler le feu aux dieux pour le donner aux hommes, quitte à être enchaîné à un rocher pour l'éternité. Une ambition prométhéenne défie les limites humaines.",
  },
  "Bovarysme": {
    scene: "Elle s'imagine une vie de roman, des bals, des amants, des voyages, et trouve son quotidien d'une platitude insupportable. C'est le bovarysme.",
    origine: "Emma Bovary, l'héroïne de Flaubert, nourrie de romans sentimentaux, qui ne supporte pas sa vie de province.",
  },
  "Donquichottesque": {
    scene: "Il se bat seul contre une multinationale, avec une pétition et beaucoup de courage. Généreux, naïf, un peu fou : c'est donquichottesque.",
    origine: "Don Quichotte, le chevalier de Cervantès, qui charge des moulins à vent en les prenant pour des géants.",
  },
  "Byzantin": {
    scene: "Trois heures à débattre pour savoir si la virgule va avant ou après les guillemets. Une discussion byzantine : subtile à l'excès, et parfaitement inutile.",
    origine: "On raconte que pendant le siège de Constantinople, en 1453, les théologiens débattaient du sexe des anges.",
  },
  "Immanentisme": {
    scene: "Dieu n'est pas un vieux barbu au-dessus des nuages : il est dans les arbres, les étoiles, en toi. Tout ce qui est divin est dans le monde lui-même. C'est l'immanentisme.",
    origine: "Spinoza le résumait en trois mots : « Dieu, c'est-à-dire la Nature. »",
  },
  "Dépraver": {
    scene: "Les mauvaises fréquentations, l'argent facile, et peu à peu, le jeune homme honnête se perd. On l'a dépravé : corrompu.",
    aussi: "On peut aussi dépraver le goût : « Trop de sucre a dépravé son palais. »",
  },
  "Subdivision": {
    scene: "Le livre est divisé en parties, les parties en chapitres, les chapitres en sections. Chaque section est une subdivision.",
  },
  "Fantasmatique": {
    scene: "Le voisin qu'il imagine espion, la fortune qui l'attend à Las Vegas : tout ça est fantasmatique, ça n'existe que dans sa tête.",
  },
  "Gnostique": {
    scene: "Aux premiers siècles de notre ère, des groupes croyaient détenir un savoir secret, capable de libérer l'esprit prisonnier de la matière. Les gnostiques.",
  },
  "Ancillaire": {
    scene: "Dans les romans du XIXe siècle, les « amours ancillaires », ce sont les liaisons des maîtres avec leurs servantes.",
    aussi: "Aujourd'hui, ancillaire veut dire secondaire : « une tâche ancillaire ».",
  },
  "Enjôleur": {
    scene: "Un sourire en coin, un compliment bien placé, une voix qui caresse. Il est enjôleur : il te séduit avec des mots doux… et tu te méfies un peu.",
  },
  "Laconique": {
    scene: "Tu lui envoies un long message plein d'émotion. Il répond : « Ok. » Une réponse laconique.",
    origine: "Les Spartiates venaient de Laconie. Philippe de Macédoine leur écrivit : « Si j'entre en Laconie, je raserai Sparte. » Ils répondirent : « Si. »",
  },
  "Enchâsser": {
    scene: "Le joaillier fixe le diamant dans sa monture d'or, griffe par griffe. Il l'enchâsse.",
    aussi: "On enchâsse aussi une citation dans un texte, comme une pierre précieuse.",
  },
  "Dispendieux": {
    scene: "Un mariage dans un château, trois cents invités, un feu d'artifice. C'est dispendieux : ça coûte très cher.",
    piege: "Ce qui est cher est dispendieux ; la personne qui dépense trop est dépensière.",
  },
  "Anticlérical": {
    scene: "Il ne s'en prend pas à la foi des gens, mais refuse que les curés se mêlent de l'école ou de la politique. Il est anticlérical.",
  },
  "Fureter": {
    scene: "Dans la brocante, elle ouvre chaque tiroir, soulève chaque carton, regarde sous chaque table. Elle furète, comme un furet dans son terrier.",
  },
  "Superlatif": {
    scene: "« Le plus beau », « très grand », « extrêmement drôle » : tout ce qui monte au plus haut degré est un superlatif.",
    aussi: "Au figuré : « Il parle toujours en superlatifs », tout est le meilleur ou le pire.",
  },
  "Épigramme": {
    scene: "Quatre vers, une pointe à la fin, et la victime est ridiculisée dans tout Paris. Voltaire en était le maître.",
  },
  "Saillie": {
    scene: "En plein dîner un peu ennuyeux, elle lance une remarque si drôle et si inattendue que toute la table éclate de rire. Une saillie : un trait d'esprit qui jaillit.",
    aussi: "C'est aussi ce qui dépasse d'un mur : une saillie de pierre.",
  },
  "Rondo": {
    scene: "Un refrain, un couplet, le refrain, un autre couplet, le refrain encore. La musique fait la ronde : c'est un rondo.",
  },
  "Emmiellé": {
    scene: "« Ma chère amie, vous êtes si charmante aujourd'hui… » Des paroles emmiellées : sucrées en surface, et pas forcément sincères.",
  },
  "Jeter sa gourme": {
    scene: "À vingt ans, il a fait la fête, des voyages fous, des amours de trois semaines. Il a jeté sa gourme : ses premières folies de jeunesse, avant de se poser.",
    origine: "La gourme était une maladie des jeunes chevaux : une fois passée, ils étaient tranquilles.",
  },
  "Sophistique": {
    scene: "« Rien n'existe, et si quelque chose existait, on ne pourrait pas le connaître. » Un raisonnement brillant, habile, et pourtant faux. C'est un raisonnement sophistique.",
    origine: "Les sophistes, dans la Grèce antique, enseignaient l'art de convaincre. Socrate les accusait de défendre n'importe quoi pour de l'argent.",
  },
  "Épris": {
    scene: "Il ne pense qu'à elle, il relit ses messages, il sourit tout seul dans le bus. Il est épris.",
    aussi: "On peut aussi être épris d'une idée : « épris de liberté ».",
  },
  "Cassolette": {
    scene: "Dans les temples anciens, de petits vases où brûlaient des encens. Et dans les restaurants, une cassolette de Saint-Jacques arrive bouillante dans son petit plat.",
  },
  "Cothurne": {
    scene: "Les acteurs tragiques de la Grèce antique portaient de hautes chaussures pour paraître plus grands que les mortels. Ce sont les cothurnes.",
    degainer: "« Chausser le cothurne » : prendre un ton tragique et solennel.",
  },
  "Épanchement": {
    scene: "Tard dans la nuit, après une bouteille de vin, il raconte tout : son enfance, ses peurs, son chagrin. Un épanchement : un cœur qui déborde.",
  },
  "Albâtre": {
    scene: "Une pierre blanche, si fine qu'on voit la lumière au travers. Les poètes parlent d'un « teint d'albâtre » pour une peau très pâle.",
  },
  "Recrudescence": {
    scene: "L'épidémie semblait finie. Puis, en novembre, les cas remontent d'un coup. C'est une recrudescence : un retour en force.",
  },
  "Odalisque": {
    scene: "Allongée sur des coussins de soie, de dos, le visage tourné vers nous : la Grande Odalisque, d'Ingres, au Louvre. Une femme du harem, telle que l'imaginaient les peintres européens.",
  },
  "Sérail": {
    scene: "Le palais du sultan à Istanbul, ses jardins, ses appartements secrets. C'était le sérail.",
    aussi: "Au figuré, le sérail, c'est le milieu fermé du pouvoir : « Il a grandi dans le sérail ».",
  },
  "Anachorète": {
    scene: "Seul dans une grotte au milieu du désert, il prie, jeûne et ne parle à personne pendant des années. C'est un anachorète.",
    degainer: "Pour quelqu'un qui ne sort jamais de chez lui : « Il vit en anachorète. »",
  },
  "Thébaïde": {
    scene: "Une maison isolée dans la montagne, pas de réseau, pas de voisins, juste le silence. Sa thébaïde : un refuge pour se retirer du monde.",
    origine: "La Thébaïde était une région du désert d'Égypte où vivaient les premiers ermites chrétiens.",
  },
  "Ficher": {
    scene: "Un poignard fiché dans la porte, une flèche fichée dans un arbre : planté par la pointe.",
    aussi: "Être « fiché » par la police, c'est être inscrit sur un fichier. Et en familier, « fiche-moi la paix ».",
  },
  "Cabrioler": {
    scene: "Les chevreaux dans le pré sautent, se retournent en l'air, retombent et repartent. Ils cabriolent.",
  },
  "Derechef": {
    scene: "Il trébucha, se releva, et trébucha derechef. De nouveau, une deuxième fois.",
    degainer: "Un mot littéraire qui fait sourire dans un texto : « Je t'écris derechef. »",
  },
  "S'adonner": {
    scene: "Le week-end, elle s'adonne à la poterie : elle y consacre tout son temps, toute son attention.",
  },
  "Prompt": {
    scene: "Un mot de travers, et il s'emporte. Il est prompt à la colère : rapide à réagir.",
    degainer: "« Prompt rétablissement ! » : guéris vite.",
  },
  "Abdication": {
    scene: "Le roi renonce au trône, signe le document, et rend sa couronne. C'est l'abdication.",
    aussi: "Au figuré, abdiquer, c'est renoncer, abandonner la lutte.",
  },
  "Glossaire": {
    scene: "À la fin du manuel, une liste de mots difficiles avec leur explication. C'est le glossaire.",
  },
  "Babillard": {
    scene: "Elle parle de tout, de rien, du temps, de la voisine, sans jamais s'arrêter. Babillarde comme un oiseau dans un buisson.",
    aussi: "Au Québec, un babillard, c'est un panneau d'affichage.",
  },
  "Fronder": {
    scene: "Dans les couloirs, ils critiquent la direction, contestent chaque décision, font circuler des pétitions. Ils frondent.",
    origine: "La Fronde fut une révolte contre le pouvoir royal, quand Louis XIV était enfant.",
  },
  "Vicié": {
    scene: "Une pièce fermée depuis des jours, l'air lourd et confiné. L'air est vicié.",
    aussi: "Un raisonnement vicié est faussé dès le départ.",
  },
  "Brocarder": {
    scene: "Les humoristes s'en donnent à cœur joie : chaque soir, le ministre est brocardé à la télévision. Moqué, raillé, tourné en ridicule.",
  },
  "Péristyle": {
    scene: "Autour de la cour intérieure de la villa romaine, une rangée de colonnes abrite une galerie du soleil. C'est le péristyle.",
  },
  "Sigisbée": {
    scene: "À Venise, au XVIIIe siècle, une dame mariée sortait accompagnée d'un gentilhomme galant qui portait son éventail, l'escortait au théâtre, lui faisait la conversation. C'était son sigisbée.",
  },
  "Néologisme": {
    scene: "« Courriel », « divulgâcher », « procrastiner » à une époque : des mots tout neufs, inventés pour nommer quelque chose de nouveau. Ce sont des néologismes.",
  },
  "Scission": {
    scene: "Le groupe de rock se sépare en deux : le chanteur part fonder un nouveau groupe avec le batteur. C'est une scission.",
  },
  "Transiger": {
    scene: "Il veut vendre sa voiture deux mille euros, l'acheteur en propose mille cinq cents. Ils transigent à mille sept cent cinquante.",
    degainer: "« Je ne transige pas sur mes principes » : je ne ferai aucune concession.",
  },
  "Répugner": {
    scene: "L'odeur de poisson pourri lui répugne : elle le dégoûte.",
    aussi: "« Répugner à » faire quelque chose, c'est être réticent : « Il répugne à demander de l'aide. »",
  },
  "Flétrir": {
    scene: "Le bouquet de roses oublié sur la table, les pétales qui noircissent et pendent. Les fleurs sont flétries.",
    aussi: "Au figuré, flétrir quelqu'un, c'est le condamner publiquement, le déshonorer.",
  },
  "Sentine": {
    scene: "Tout au fond du navire, sous les cales, l'eau sale, la vase et les rats s'accumulent. C'est la sentine.",
    aussi: "Au figuré, une sentine est un lieu de corruption : « la sentine de tous les vices ».",
  },
  "Anoblir": {
    scene: "Le roi frappe l'épaule du marchand du plat de son épée : le voici chevalier. Il est anobli.",
    aussi: "Au figuré, une belle action anoblit celui qui la fait.",
  },
  "Soufflet": {
    scene: "Dans les romans de cape et d'épée, une insulte, un soufflet, et le duel est fixé au lendemain. Le soufflet, c'est la gifle.",
    aussi: "Le soufflet, c'est aussi l'instrument en cuir qui attise le feu dans la cheminée.",
  },
  "Paralytique": {
    scene: "Depuis son accident, il ne peut plus bouger les jambes. Il est paralytique.",
  },
  "Madrier": {
    scene: "Sur le chantier, deux ouvriers portent une poutre épaisse, lourde, posée sur leurs épaules. C'est un madrier.",
  },
  "Fange": {
    scene: "Les chevaux s'enfoncent jusqu'aux genoux dans la boue épaisse du chemin. C'est la fange.",
    aussi: "Au figuré, « tomber dans la fange », c'est tomber dans la bassesse, l'abjection.",
  },
  "Pourceau": {
    scene: "Un mot littéraire pour le porc. On l'entend surtout dans les vieilles fables et les jurons d'antan.",
    degainer: "« Jeter des perles aux pourceaux » : offrir quelque chose de précieux à quelqu'un qui ne saura pas l'apprécier.",
  },
  "Liard": {
    scene: "Une pièce de cuivre de rien du tout, sous l'Ancien Régime. « Il n'a pas un traître liard » : il n'a pas un sou.",
  },

  // Série 7
  "Prouesse": {
    scene: "Autrefois, c'était le chevalier qui terrassait seul dix ennemis. Aujourd'hui, c'est ton neveu qui a rangé sa chambre sans qu'on le lui demande. Une prouesse : un exploit, petit ou grand.",
  },
  "Congédier": {
    scene: "Le patron le convoque, lui tend une enveloppe, et lui montre la porte. Il l'a congédié : renvoyé.",
    aussi: "On congédie aussi un visiteur trop bavard : « Il est tard, je ne vous retiens pas. »",
  },
  "Métacognition": {
    scene: "Tu relis ta leçon trois fois et tu te dis : « Attends, est-ce que je comprends vraiment, ou est-ce que je reconnais juste les mots ? » Penser à sa propre façon de penser, c'est la métacognition.",
    degainer: "C'est exactement ce que fait le jeu « Réviser » : vérifier ce que tu sais vraiment.",
  },
  "Antiphrase": {
    scene: "Il renverse son café sur sa chemise blanche, juste avant l'entretien. « Bravo, magnifique, quelle journée ! » Il dit le contraire de ce qu'il pense, et tout le monde comprend : c'est une antiphrase.",
  },
  "Brahmane": {
    scene: "Dans la société hindoue traditionnelle, en haut de l'échelle, les prêtres et les lettrés qui gardaient les textes sacrés. Ce sont les brahmanes.",
    degainer: "Dans « Siddhartha » de Hermann Hesse, le héros est un jeune brahmane qui quitte tout.",
  },
  "Bobèche": {
    scene: "Sur le chandelier, autour de la bougie, une petite coupelle recueille la cire qui coule. C'est la bobèche.",
    aussi: "En argot ancien, la bobèche, c'était la tête : « se monter la bobèche », se faire des idées.",
  },
  "Bilieux": {
    scene: "Dès le réveil, il trouve à redire au café, au journal et au soleil. Il est bilieux : sombre, irritable, toujours prêt à s'emporter.",
    origine: "Les médecins d'autrefois pensaient que trop de bile rendait coléreux. C'est la théorie des humeurs.",
  },
  "Stigmate": {
    scene: "Les façades criblées d'impacts, des décennies après la guerre : la ville en porte encore les stigmates. Des marques qui ne s'effacent pas.",
    aussi: "Au pluriel, les stigmates sont aussi les plaies du Christ, apparues selon la tradition sur le corps de certains saints.",
  },
  "Déguenillé": {
    scene: "Sur le parvis de l'église, un enfant en vêtements troués, la chemise en lambeaux, tend la main. Il est déguenillé.",
  },
  "Fangeux": {
    scene: "Les chevaux peinent sur le chemin fangeux, enfoncés jusqu'aux genoux. Plein de boue.",
    aussi: "Au figuré, une affaire fangeuse est sale, abjecte.",
  },
  "Humoral": {
    scene: "Le sang, la bile jaune, la bile noire, le flegme : pendant des siècles, les médecins pensaient que ces quatre humeurs gouvernaient la santé et le caractère. Une médecine humorale.",
  },
  "Languissamment": {
    scene: "Étendue sur le divan, elle tourne languissamment les pages d'un roman, sans vraiment lire. Mollement, avec une langueur de dimanche après-midi.",
  },
  "Coter": {
    scene: "Chez l'antiquaire, chaque objet a son étiquette : on l'a coté, on lui a donné un prix.",
    aussi: "« Être bien coté », c'est être estimé. Et en Bourse, une action cotée a un prix public.",
  },
  "Amphitryon": {
    scene: "Il a préparé le repas, ouvert les meilleures bouteilles, et veille à ce que chaque verre soit plein. C'est notre amphitryon : l'hôte qui régale.",
    origine: "Molière, dans « Amphitryon » : « Le véritable Amphitryon est l'Amphitryon où l'on dîne. »",
  },
  "Saturnales": {
    scene: "À Rome, en décembre, pendant quelques jours, tout était à l'envers : les esclaves étaient servis par leurs maîtres, on jouait, on buvait. C'étaient les Saturnales.",
    aussi: "Au figuré, une période de fête et de désordre : « les saturnales du Nouvel An ».",
  },
  "Courroucer": {
    scene: "La nouvelle du mensonge parvient aux oreilles du roi. Son visage se ferme, sa voix tonne : il est courroucé.",
    degainer: "Un mot de tragédie pour dire « fâché », parfait pour dramatiser avec humour : « Mon chat est courroucé, je lui ai servi des croquettes au poulet. »",
  },
  "Lambris": {
    scene: "Des murs couverts de boiseries sculptées et dorées, des plafonds peints. Ce sont les lambris.",
    degainer: "« Sous les lambris dorés » : dans le luxe des palais du pouvoir.",
  },
  "Tonnant": {
    scene: "« Silence ! » Une voix tonnante résonne dans la salle, et tout le monde se fige.",
  },
  "Palingénésie": {
    scene: "Les saisons qui reviennent, les civilisations qui renaissent de leurs cendres. Certains philosophes imaginaient le monde comme une suite de renaissances : la palingénésie.",
    origine: "Du grec « palin », de nouveau, et « genesis », naissance.",
  },
  "Perron": {
    scene: "Trois marches de pierre devant la porte du château. Les mariés y posent pour la photo, et les invités attendent en bas. C'est le perron.",
  },
  "Vestibule": {
    scene: "Tu pousses la porte, tu enlèves ton manteau, tu poses tes clés. Tu es dans le vestibule, la pièce d'entrée.",
  },
  "Croître": {
    scene: "La graine devient pousse, la pousse devient arbre. Elle croît.",
    piege: "Croître garde son accent circonflexe pour ne pas le confondre avec croire : « il croît » (il grandit), « il croit » (il pense).",
  },
  "Morne": {
    scene: "Un dimanche de novembre, la pluie, une plaine sans arbre, et un silence où personne n'a envie de parler. Tout est morne.",
  },
  "Marmiton": {
    scene: "Dans les cuisines du château, le petit apprenti épluche les oignons, récure les marmites et court chercher le sel. C'est le marmiton.",
  },
  "Vétille": {
    scene: "Ils se disputent depuis une heure pour savoir qui a oublié d'acheter le pain. Une vétille ! Une chose sans importance.",
  },
  "Vergeter": {
    scene: "Avant de sortir, le valet brosse le manteau de son maître avec une petite brosse dure. Il le vergète.",
  },
  "Émérite": {
    scene: "Elle monte à cheval depuis quarante ans : elle franchit les obstacles sans même y penser. Une cavalière émérite.",
    aussi: "Un « professeur émérite » est un professeur retraité qui garde son titre, en hommage à sa carrière.",
  },
  "Étiolé": {
    scene: "Une plante oubliée dans un placard pousse quand même, mais toute pâle et frêle, à la recherche de la lumière. Elle est étiolée.",
    aussi: "Au figuré, un enthousiasme qui s'étiole perd sa vigueur peu à peu.",
  },
  "Malachite": {
    scene: "Une pierre d'un vert profond, veinée comme du bois. Les tsars de Russie en ont fait des salons entiers.",
  },
  "Amoindrir": {
    scene: "« Oui, il a gagné, mais il avait de la chance. » Il cherche à amoindrir son mérite : à le rendre plus petit.",
  },
  "Amenuiser": {
    scene: "Le temps passe, les secours n'arrivent pas, et les chances de retrouver les randonneurs s'amenuisent : elles diminuent peu à peu.",
  },
  "Narghilé": {
    scene: "Dans un café d'Istanbul, la fumée passe dans un vase d'eau qui glougloute avant d'arriver à la bouche. C'est le narghilé, qu'on appelle aussi chicha.",
  },
  "Prédicateur": {
    scene: "Du haut de la chaire, il tonne contre les vices et appelle au repentir. C'est le prédicateur.",
  },
  "Apostat": {
    scene: "Il a abandonné la religion de son enfance, ou le parti qu'il a défendu toute sa vie. Pour ceux qu'il a quittés, c'est un apostat.",
  },
  "Renégat": {
    scene: "Il a trahi les siens pour passer à l'ennemi. Pour son ancien camp, c'est un renégat.",
    origine: "Du XVIe au XVIIIe siècle, on appelait renégats les chrétiens passés à l'islam qui rejoignaient les corsaires de la Méditerranée.",
  },
  "Passementerie": {
    scene: "Les galons dorés d'un uniforme, les franges d'un rideau, les glands au bout d'un cordon. Toute cette parure s'appelle la passementerie.",
  },
  "Décrépitude": {
    scene: "Le vieux manoir : les volets qui pendent, le lierre qui dévore les murs, le toit qui s'effondre. Il tombe en décrépitude.",
  },
  "Décrépiter": {
    scene: "Jette une pincée de gros sel dans le feu : il éclate en petits craquements. Il décrépite.",
    piege: "Rien à voir avec décrépit : ici, c'est le bruit du sel qui éclate.",
  },
  "Pétulant": {
    scene: "Elle parle avec les mains, saute de sa chaise, rit fort, invente dix projets par minute. Elle est pétulante : une vivacité qui déborde.",
  },
  "Vénal": {
    scene: "Pour un peu d'argent, ce juge rend le verdict qu'on lui demande. Il est vénal : il se vend.",
  },
  "Œillade": {
    scene: "À travers la salle, un regard rapide, complice, un sourire à peine esquissé. Une œillade.",
  },
  "Repaître": {
    scene: "Le loup se repaît de sa proie : il se nourrit avec avidité.",
    aussi: "Au figuré, « se repaître d'illusions », c'est s'en nourrir, s'y complaire.",
  },
  "Paître": {
    scene: "Les moutons paissent tranquillement dans la prairie : ils broutent.",
    degainer: "« Envoyer paître quelqu'un » : le renvoyer sans ménagement.",
  },
  "Impunément": {
    scene: "Il triche depuis des années, impunément : sans jamais être puni.",
  },
  "Carlisme": {
    scene: "Dans l'Espagne du XIXe siècle, des guerres civiles ont éclaté pour savoir qui devait régner : les partisans de don Carlos, frère du roi défunt, contre ceux de sa nièce Isabelle. C'est le carlisme.",
  },
  "Nobiliaire": {
    scene: "Comte, marquis, baron : ce sont des titres nobiliaires.",
  },
  "Grisette": {
    scene: "Paris, XIXe siècle : une jeune couturière en robe d'étoffe grise, coquette, rieuse, qui fait battre le cœur des étudiants. C'est la grisette des romans de Balzac.",
  },
  "Laudanum": {
    scene: "Une teinture d'opium, quelques gouttes dans un verre d'eau pour calmer la douleur ou l'insomnie. Au XIXe siècle, bien des écrivains en prenaient, parfois jusqu'à la dépendance.",
  },
  "Synchrone": {
    scene: "Les nageuses plongent, tournent et ressortent exactement au même moment, au même rythme. Elles sont synchrones.",
  },
  "Contractile": {
    scene: "Le cœur se serre et se relâche des dizaines de fois par minute, toute une vie. C'est un muscle contractile.",
  },
  "Hardiesse": {
    scene: "Il a osé interrompre le roi pour défendre son ami. Une hardiesse qui aurait pu lui coûter la tête.",
  },
  "Mutin": {
    scene: "Un petit sourire en coin, un clin d'œil, une moue espiègle : un air mutin.",
    aussi: "Autrefois, les mutins étaient des marins révoltés contre leur capitaine.",
  },
  "Dévotieux": {
    scene: "Agenouillée chaque matin à l'église, elle prie avec une ardeur dévotieuse.",
    degainer: "Un mot vieilli, qu'on croise dans les romans anciens.",
  },
  "Onagre": {
    scene: "Dans les plaines d'Asie, un âne sauvage galope plus vite qu'un cheval. C'est l'onagre.",
    aussi: "Les Romains ont donné son nom à une catapulte, qui ruait comme l'animal en lançant ses pierres.",
  },
  "Héraldique": {
    scene: "Un lion d'or sur fond rouge, trois fleurs de lys, une tour d'argent. Chaque blason se lit comme un texte : c'est l'héraldique, la science des armoiries.",
  },
  "Macaronique": {
    scene: "« Ego sum le patron de cette maisonus ! » Du faux latin mélangé au français, pour faire rire. C'est du latin macaronique.",
  },
  "Affabulation": {
    scene: "Il a sauvé un enfant de la noyade, rencontré une star et gagné au loto, tout ça la même semaine. Ce n'est plus un récit, c'est de l'affabulation.",
  },
  "Septentrional": {
    scene: "La Norvège, la Suède, la Finlande : l'Europe septentrionale, celle du nord.",
    origine: "Du latin « septem triones », les sept bœufs : les sept étoiles de la Grande Ourse, qui indiquent le nord.",
  },
  "Carolingien": {
    scene: "Charlemagne, couronné empereur à Rome en l'an 800, et ses descendants. C'est la dynastie carolingienne.",
  },
  "Réprouver": {
    scene: "Ses parents réprouvent son choix : ils le désapprouvent fortement.",
    aussi: "Un réprouvé est rejeté par tous, ou damné.",
  },
  "Épigone": {
    scene: "Après le génie, viennent les imitateurs : ils reprennent son style, ses tics, sans jamais retrouver l'étincelle. Ce sont ses épigones.",
  },
  "Élisabéthain": {
    scene: "Londres, fin du XVIe siècle : les théâtres en bois, Shakespeare qui écrit Hamlet. C'est le théâtre élisabéthain, sous le règne d'Élisabeth Ire.",
  },
  "Tronqué": {
    scene: "« Il a dit qu'il détestait les enfants. » Oui, mais il avait ajouté : « qui crient au cinéma ». La citation est tronquée : il en manque une partie.",
  },
  "Césure": {
    scene: "« Rodrigue, as-tu du cœur ? // Tout autre que mon père… » Au milieu de l'alexandrin, après la sixième syllabe, une petite pause. C'est la césure.",
  },
  "Aède": {
    scene: "Dans la Grèce antique, un poète aveugle s'assoit près du feu, prend sa lyre, et chante pendant des heures la guerre de Troie. C'est l'aède.",
    origine: "Homère en est la figure légendaire.",
  },
  "S'atteler": {
    scene: "On attelle le cheval à la charrette. Et toi, ce matin, tu t'attelles enfin au rangement du garage : tu t'y mets, avec énergie.",
  },
  "Polycentrique": {
    scene: "Pas une seule capitale qui décide de tout, mais plusieurs villes, plusieurs centres de pouvoir. Le pays est polycentrique.",
  },
  "Synchronique": {
    scene: "Une photo de la langue française aujourd'hui, à un instant précis, sans se demander d'où viennent les mots. C'est une étude synchronique.",
    piege: "Le contraire, diachronique, étudie l'évolution dans le temps.",
  },
  "Gnomique": {
    scene: "« Qui sème le vent récolte la tempête. » Une vérité morale en une phrase, facile à retenir. C'est de la poésie gnomique.",
  },
  "Péroraison": {
    scene: "L'avocat se lève pour la dernière partie de sa plaidoirie, la voix vibrante, la main sur le cœur. C'est la péroraison : la conclusion du discours.",
    aussi: "Avec ironie, c'est une fin de discours pompeuse et interminable.",
  },
  "Ptolémaïque": {
    scene: "La Terre immobile au centre, et autour d'elle, le Soleil, la Lune et les planètes qui tournent. Pendant plus de mille ans, c'était l'univers ptolémaïque, jusqu'à Copernic.",
  },
  "Canevas": {
    scene: "Une grosse toile quadrillée sur laquelle la grand-mère brode un bouquet de roses. C'est le canevas.",
    aussi: "Au figuré, le canevas est la trame d'un récit ou d'un projet, avant de le remplir.",
  },
  "Sarabande": {
    scene: "Une danse lente et grave de la cour de Louis XIV. Et dans ta tête, au moment de faire les comptes, une sarabande de chiffres qui tournent sans fin.",
  },
  "Se mouvoir": {
    scene: "La danseuse se meut avec une grâce qui fait oublier qu'elle a un corps : elle se déplace comme portée par l'air.",
  },
  "Convoler": {
    scene: "Après quinze ans de vie commune, ils ont enfin décidé de convoler en justes noces : de se marier.",
    degainer: "Toujours avec un petit sourire.",
  },
  "Versification": {
    scene: "Compter les syllabes, placer la rime, respecter la césure : c'est la versification, l'art de construire des vers.",
  },
  "Pied-de-mouche": {
    scene: "Dans un traitement de texte, ce petit signe ¶ qui marque la fin d'un paragraphe : c'est le pied-de-mouche.",
    piege: "À ne pas confondre avec les « pattes de mouche » : une écriture minuscule et illisible.",
  },
  "Patère": {
    scene: "Dans l'entrée, accrochés au mur, des crochets où pendent les manteaux et les chapeaux. Ce sont des patères.",
  },
  "Jésuitique": {
    scene: "Il ne ment pas vraiment, il arrange la vérité avec des raisonnements si habiles qu'on ne sait plus où est le faux. Un raisonnement jésuitique.",
    origine: "Une allusion polémique, née des querelles du XVIIe siècle contre les jésuites.",
  },
  "Colifichet": {
    scene: "Des porte-clés, des petits bibelots en plastique, des bracelets de fête foraine. Des colifichets : des babioles sans valeur.",
  },
  "Paraphe": {
    scene: "Le notaire te demande de mettre tes initiales en bas de chaque page du contrat. C'est ton paraphe.",
  },
  "Pontife": {
    scene: "Le souverain pontife, c'est le pape. Mais le pontife, c'est aussi ce critique qui parle de tout avec suffisance, comme s'il détenait la vérité.",
  },
  "Entomologiste": {
    scene: "Une loupe, un filet à papillons, des boîtes pleines de scarabées épinglés. L'entomologiste étudie les insectes.",
  },
  "Nomenclature": {
    scene: "Chaque plante, chaque animal, chaque élément chimique a son nom bien rangé dans une grande liste. C'est la nomenclature.",
  },
  "Huppé": {
    scene: "La huppe de la mésange, ces plumes dressées sur la tête. Et dans les beaux quartiers, des gens huppés : riches et de haut rang.",
  },
  "Galuchat": {
    scene: "Une peau de raie au grain perlé, comme de minuscules billes : on en recouvre les étuis de luxe et les poignées de sabres japonais. C'est le galuchat.",
  },
  "Chevrier": {
    scene: "Dans la montagne, au son des clochettes, un homme conduit son troupeau de chèvres vers les alpages. C'est le chevrier.",
  },
  "Haquet": {
    scene: "Dans les rues pavées du vieux Paris, une longue charrette étroite, sans rebords, chargée de tonneaux de vin. C'est un haquet.",
  },
  "Agate": {
    scene: "Une pierre tranchée qui révèle des cercles de couleurs, comme les cernes d'un arbre. C'est l'agate.",
    aussi: "Dans la cour de récré, une agate, c'est aussi une belle bille de verre.",
  },
  "Potence": {
    scene: "Sur la place, la potence attend le condamné. Un instrument de pendaison.",
    aussi: "Plus paisiblement, une potence est aussi un support en équerre, comme celui d'une lampe d'atelier.",
  },
  "Cavalièrement": {
    scene: "Il l'a quittée par un simple texto, sans un mot de plus. Il l'a traitée cavalièrement : avec une désinvolture impolie.",
  },
  "Papier brouillard": {
    scene: "Au temps des plumes et de l'encre, on posait un papier épais et doux sur la page pour boire l'encre avant qu'elle ne tache. C'est le papier brouillard, le buvard.",
  },
  "Glaise": {
    scene: "Les mains du potier dans une terre grise, humide et collante, qui prend forme sur le tour. C'est la glaise.",
  },
  "Gnomon": {
    scene: "Sur le cadran solaire, une tige plantée au centre projette son ombre sur les heures. C'est le gnomon.",
  },
  "Tocard": {
    scene: "Aux courses, le cheval que personne ne joue, celui qui finit toujours dernier. Et par extension, celui qu'on trouve nul : un tocard.",
    degainer: "Argot, à garder pour les copains.",
  },
  "Boloss": {
    scene: "Dans la cour, le naïf qu'on se permet de racketter ou de ridiculiser, parce qu'il ne réagit pas. En argot, c'est le boloss.",
    degainer: "Argot de cour de récré, qui a fait le tour de la France dans les années 2000.",
  },
  "Mytho": {
    scene: "Il a été pilote de chasse, mannequin, et il a joué au foot avec une star. Tout le monde le sait : c'est un mytho.",
    origine: "De « mythomane », celui qui invente sans cesse des histoires.",
  },
  "Bouffon": {
    scene: "Autrefois, à la cour, le fou du roi faisait rire et avait le droit de tout dire. Aujourd'hui, en argot, un bouffon, c'est celui qu'on ne prend pas au sérieux.",
  },
  "Charo": {
    scene: "En soirée, il colle tout le monde, enchaîne les phrases de drague lourdes et ne comprend pas quand on lui dit non. En argot, c'est un charo.",
    origine: "De « charognard », qui tourne autour de sa proie.",
  },
  "Zinzin": {
    scene: "Il parle à ses plantes, dort avec un casque de vélo, et collectionne les bouchons de liège. Il est un peu zinzin : bizarre, un peu fou.",
    aussi: "En Bourse, « les zinzins », ce sont les investisseurs institutionnels : les banques, les assurances.",
  },
  "Soupape": {
    scene: "Sur la cocotte-minute, un petit clapet siffle et laisse échapper la vapeur avant que tout n'explose. C'est la soupape.",
    aussi: "Au figuré, le sport, la musique, une balade : une soupape de sécurité pour relâcher la pression.",
  },
  "Chiquenaude": {
    scene: "Un doigt replié, une détente, et la petite boule de papier traverse la table. Une chiquenaude.",
    aussi: "Au figuré, la petite impulsion qui met tout en branle : « Il a suffi d'une chiquenaude pour lancer sa carrière. »",
  },
  "Platine": {
    scene: "Le vinyle tourne sur la platine, le bras se pose délicatement sur le sillon.",
    aussi: "C'est aussi le plateau d'un microscope, où l'on pose la lame. Et le platine (au masculin) est un métal précieux.",
  },

  // Série 8
  "Mugir": {
    scene: "Dans le pré, la vache lève la tête et pousse un long cri grave. Elle mugit. Et la nuit de tempête, c'est le vent qui mugit dans la cheminée.",
  },
  "Laminoir": {
    scene: "À l'usine, deux énormes cylindres écrasent une barre de métal rougeoyante jusqu'à en faire une feuille fine. C'est le laminoir.",
    degainer: "« Passer au laminoir » : se faire broyer, écraser, par une épreuve ou une critique.",
  },
  "Salicine": {
    scene: "Depuis l'Antiquité, on mâchait de l'écorce de saule contre la fièvre et la douleur. La substance amère qui agit, c'est la salicine : l'ancêtre de l'aspirine.",
    origine: "Du latin « salix », le saule.",
  },
  "Houppe": {
    scene: "Le petit pompon de duvet pour se poudrer le visage, la touffe de plumes sur la tête d'un oiseau. C'est une houppe.",
    aussi: "Riquet à la houppe, le prince laid mais spirituel du conte de Perrault, en portait une sur la tête.",
  },
  "Infusible": {
    scene: "Le creuset du forgeron résiste à la chaleur du four sans jamais fondre. Il est infusible.",
    piege: "Rien à voir avec l'infusion de tisane : ici, fondre, c'est la fusion.",
  },
  "Incarnat": {
    scene: "Elle rougit, et un rouge vif et frais lui monte aux joues. L'incarnat de ses joues la trahit.",
  },
  "Phtisie": {
    scene: "Une toux qui ne guérit pas, des joues creuses, une pâleur de cire. Dans les romans du XIXe siècle, les héroïnes romantiques mouraient de phtisie : la tuberculose.",
    piege: "On prononce « ftizi ».",
  },
  "Éclectisme": {
    scene: "Dans sa bibliothèque, Platon côtoie des mangas, des livres de cuisine et un traité d'astronomie. Son éclectisme est réjouissant : il puise partout.",
  },
  "Pyrrhonien": {
    scene: "« Tu es sûr que le soleil se lèvera demain ? Comment peux-tu le savoir ? » Il doute de tout, même de ses doutes. C'est un pyrrhonien.",
    origine: "Pyrrhon, philosophe grec qui conseillait de suspendre son jugement sur tout.",
  },
  "Racornissement": {
    scene: "Un vieux morceau de cuir oublié au soleil devient dur, sec, ratatiné, comme de la corne. Au fil des années, son cœur a connu le même racornissement.",
  },
  "Se récrier": {
    scene: "« Moi ? Paresseux ? Jamais de la vie ! » À peine l'accusation lancée, il se récrie : il proteste haut et fort.",
  },
  "Épigastre": {
    scene: "Juste sous les côtes, au milieu, ce creux où tu sens le trac avant un examen. C'est l'épigastre.",
  },
  "Plexus": {
    scene: "Un coup au creux du ventre, et tu as le souffle coupé. Tu as été touché au plexus solaire, un entrelacs de nerfs en forme de soleil.",
  },
  "Monomanie": {
    scene: "Il ne parle que de trains. Au petit-déjeuner, au mariage de sa sœur, à l'enterrement de son oncle : des trains. C'est une monomanie, une idée fixe.",
  },
  "Fêlure": {
    scene: "Une fine ligne sur la tasse, presque invisible, mais elle est là. Et sous le sourire, une fêlure : une blessure intime que personne ne voit.",
  },
  "Hypocondres": {
    scene: "Les médecins anciens pensaient que la mélancolie naissait sous les côtes, de chaque côté du ventre : dans les hypocondres.",
    origine: "C'est de là que vient « hypocondriaque » : celui qui s'inquiète sans cesse de sa santé.",
  },
  "Prostration": {
    scene: "Après l'annonce, il reste assis, le regard vide, incapable de bouger ou de parler. Il est en pleine prostration.",
  },
  "Lymphatique": {
    scene: "Mou, lent, toujours fatigué, il traîne les pieds et bâille à midi. Les médecins d'autrefois l'auraient dit de tempérament lymphatique.",
    aussi: "En médecine, le système lymphatique transporte la lymphe dans le corps.",
  },
  "Ombilic": {
    scene: "Le nombril, en langage savant. Et Delphes, pour les Grecs, était l'ombilic du monde : son centre.",
  },
  "Sis": {
    scene: "« Une maison sise au 12, rue des Lilas. » Chez le notaire, on n'est pas situé : on est sis.",
  },
  "S'égailler": {
    scene: "La cloche sonne, la porte s'ouvre, et les enfants s'égaillent dans la cour comme une volée de moineaux.",
    piege: "Rien à voir avec « s'égayer » : on se disperse, on ne s'amuse pas.",
  },
  "Nasse": {
    scene: "Un panier en osier en forme d'entonnoir : le poisson entre facilement, mais ne trouve jamais la sortie. C'est une nasse.",
    aussi: "Au figuré, une nasse est un piège dont on ne peut pas sortir.",
  },
  "Soupente": {
    scene: "Sous l'escalier ou sous le toit, un petit réduit où l'on cache les balais, les valises et les vieux cartons. C'est la soupente.",
  },
  "Baldaquin": {
    scene: "Un grand lit de château, avec quatre colonnes et un toit de velours rouge d'où tombent des rideaux. Un lit à baldaquin.",
  },
  "Anthologie": {
    scene: "Les plus beaux poèmes d'amour de la langue française, choisis un à un et réunis en un seul livre. C'est une anthologie.",
    origine: "Du grec : « cueillette de fleurs ».",
  },
  "Oisel": {
    scene: "Chez les poètes de la Renaissance, le petit oiseau qui chante au printemps s'appelle l'oisel.",
  },
  "Toponymie": {
    scene: "Pourquoi « Montmartre » ? Le mont des martyrs. Pourquoi « Fontainebleau » ? Une fontaine. La toponymie raconte l'histoire cachée dans les noms de lieux.",
  },
  "Nonsense": {
    scene: "Un chat qui disparaît en ne laissant que son sourire, un chapelier qui fête son non-anniversaire. L'absurde à l'anglaise, logique et fou à la fois : le nonsense.",
    origine: "Lewis Carroll et Edward Lear en sont les maîtres.",
  },
  "Anglomane": {
    scene: "Il boit son thé à 17 heures, dit « indeed » à chaque phrase et porte du tweed en plein été. Il est anglomane.",
  },
  "Pétrarquisant": {
    scene: "« Je brûle et je gèle, je vis et je meurs. » L'amour dit en contradictions brûlantes, à la manière du poète italien Pétrarque. Un poème pétrarquisant.",
  },
  "Choir": {
    scene: "Épuisé, il se laisse choir dans le fauteuil. Choir, c'est tomber, en plus élégant.",
    degainer: "« Laisser choir quelqu'un » : le laisser tomber, l'abandonner.",
  },
  "Flexueux": {
    scene: "Une rivière qui serpente en courbes douces dans la vallée. Son cours est flexueux.",
  },
  "Acanthe": {
    scene: "Lève les yeux vers le chapiteau d'une colonne grecque : ces grandes feuilles sculptées et découpées sont des feuilles d'acanthe.",
  },
  "Prodrome": {
    scene: "La fièvre légère, les courbatures : les prodromes de la grippe. Et le grondement lointain, le prodrome de l'orage. Un signe qui annonce ce qui vient.",
  },
  "Vertugadin": {
    scene: "Sous la robe d'une reine du XVIe siècle, un cerceau qui fait bouffer la jupe sur les hanches comme une cloche. C'est le vertugadin.",
  },
  "Cotte": {
    scene: "Le chevalier enfile sa cotte de mailles : des milliers de petits anneaux de fer entrelacés, lourds et froids.",
  },
  "Casuistique": {
    scene: "Mentir est mal, sauf pour sauver une vie, sauf si la vie est celle d'un méchant, sauf si… À force de distinguer les cas, on finit par tout justifier. C'est la casuistique.",
  },
  "Truculent": {
    scene: "Il parle fort, jure avec saveur, raconte des histoires énormes et rit à s'en décrocher la mâchoire. Un personnage truculent : haut en couleur.",
  },
  "Pourfendre": {
    scene: "D'un coup d'épée, le chevalier pourfend le dragon. Et l'éditorialiste, lui, pourfend les hypocrites : il les attaque avec fougue.",
  },
  "Senestre": {
    scene: "À gauche, en vieux français. Sur un blason, la senestre, c'est le côté gauche de l'écu (la droite, c'est dextre).",
    origine: "La même famille que « sinistre » : la gauche était le côté de mauvais augure.",
  },
  "Tétin": {
    scene: "Un vieux mot pour le bout du sein. Au XVIe siècle, le poète Clément Marot lui a consacré un « blason » célèbre, un poème qui chante une partie du corps.",
  },
  "Bévue": {
    scene: "Il appelle sa nouvelle compagne par le prénom de son ex, devant toute la famille. Une bévue monumentale.",
  },
  "Rosaire": {
    scene: "Assise au fond de l'église, la vieille dame fait glisser entre ses doigts les grains d'un grand chapelet, en murmurant une prière à chacun. C'est son rosaire.",
  },
  "Assentiment": {
    scene: "Il regarde son père, qui hoche lentement la tête. Il a son assentiment : son accord.",
  },
  "Aigreur": {
    scene: "« Bravo, tu as réussi, toi au moins. » Les mots sont gentils, mais le ton est amer. Il répond avec aigreur.",
    aussi: "Les aigreurs d'estomac, elles, sont des remontées acides.",
  },
  "Saillir": {
    scene: "Sous la colère, les veines saillent sur son front : elles ressortent, elles font relief.",
  },
  "Despotisme": {
    scene: "Un seul homme décide, tous obéissent, et personne n'a de recours. C'est le despotisme.",
    degainer: "Au XVIIIe siècle, on parlait de « despotisme éclairé » pour des rois absolus qui se voulaient amis des philosophes.",
  },
  "Ostracisme": {
    scene: "Depuis qu'il a parlé à la direction, plus personne ne mange avec lui à la cantine. Il subit l'ostracisme de ses collègues.",
    origine: "À Athènes, on écrivait sur un tesson de poterie (« ostrakon ») le nom de celui qu'on voulait bannir pour dix ans.",
  },
  "Intussusception": {
    scene: "Un mot de biologiste : la nourriture qui pénètre au cœur des tissus vivants pour les faire grandir. Balzac l'emploie pour un savoir qu'on assimile si profondément qu'il devient presque une intuition.",
  },
  "Morbifique": {
    scene: "Les miasmes, l'air vicié, l'eau croupie : tout ce qui, pour les médecins anciens, était morbifique, cause de maladie.",
  },
  "Ilote": {
    scene: "À Sparte, des esclaves appartenant à l'État cultivaient les terres pendant que les citoyens s'entraînaient à la guerre. Ce sont les ilotes.",
    aussi: "Au figuré, un ilote est une personne réduite à la misère et à la servitude.",
  },
  "Paria": {
    scene: "Depuis le scandale, plus personne ne l'invite, ne lui répond, ne le salue. Il est devenu un paria.",
    origine: "En Inde, le mot désignait ceux qu'on plaçait hors de toute caste.",
  },
  "Bâter": {
    scene: "Avant le départ, le muletier charge l'âne : il le bâte, il pose sur son dos la selle qui porte les sacs.",
    degainer: "« Un âne bâté » : un ignorant complet.",
  },
  "Mors": {
    scene: "La pièce de métal dans la bouche du cheval, reliée aux rênes : en tirant dessus, le cavalier le dirige. C'est le mors.",
    degainer: "« Prendre le mors aux dents » : s'emballer, foncer sans plus rien écouter.",
  },
  "Quinteux": {
    scene: "Un jour charmant, le lendemain odieux, sans qu'on sache pourquoi. Il est quinteux : d'humeur capricieuse.",
    aussi: "C'est aussi celui qui a des quintes de toux.",
  },
  "Châtrer": {
    scene: "Castrer un animal, en langage ancien. Et au figuré, châtrer un texte, c'est le couper au point de lui retirer toute sa force.",
  },
  "Quaker": {
    scene: "Des vêtements simples, pas de prêtres, des réunions en silence où chacun parle quand l'esprit le pousse, et un refus de la guerre. Ce sont les quakers, nés en Angleterre au XVIIe siècle.",
  },
  "S'astreindre": {
    scene: "Chaque matin, même fatigué, même sous la pluie, il s'astreint à courir trente minutes. Il s'y oblige.",
  },
  "Phlogistique": {
    scene: "Pour les chimistes d'avant Lavoisier, ce qui brûle perd un fluide invisible, le phlogistique. Lavoisier a montré que c'était l'inverse : la combustion prend de l'oxygène.",
  },
  "Complexion": {
    scene: "Fragile, robuste, ardente, délicate : la complexion, c'est la constitution du corps et du tempérament.",
  },
  "Inféodé": {
    scene: "Ce journal répète mot pour mot tout ce que dit son propriétaire. Il lui est inféodé : entièrement soumis.",
    origine: "À l'origine, une terre inféodée était donnée en fief à un vassal.",
  },
  "Indolent": {
    scene: "Allongé au soleil, il laisse passer les heures. Le moindre effort lui semble une montagne. Il est indolent.",
  },
  "Promontoire": {
    scene: "Une pointe de roche haute qui s'avance dans la mer, battue par les vagues, avec un phare au bout. C'est un promontoire.",
  },
  "Glapir": {
    scene: "La nuit, dans le bois, un cri aigu et bref : le renard glapit. Et le petit chien du voisin aussi, à chaque passage du facteur.",
  },
  "Factice": {
    scene: "Elle rit à toutes les blagues, sourit à tout le monde, mais quelque chose sonne faux. Sa gaieté est factice.",
  },
  "Prescience": {
    scene: "Elle a refusé de monter dans l'avion sans savoir pourquoi. Ce jour-là, il y a eu un orage terrible. Une prescience : comme si elle avait su avant.",
  },
  "Artificieux": {
    scene: "Des sourires calculés, des mensonges habiles, des pièges bien posés. Un esprit artificieux : plein de ruse.",
  },
  "Circonspect": {
    scene: "Avant de signer, il relit chaque ligne, pose trois questions, et demande un délai. Il est circonspect : prudent.",
  },
  "Incisif": {
    scene: "Trois phrases, pas une de plus, et l'argument de l'adversaire s'effondre. Son style est incisif : tranchant.",
    aussi: "Les incisives sont tes dents de devant, celles qui coupent.",
  },
  "Postillon": {
    scene: "Il parle avec passion, si près de toi que tu reçois quelques gouttes de salive. Des postillons !",
    aussi: "Autrefois, le postillon était le cocher qui menait les chevaux de la diligence.",
  },
  "Défait": {
    scene: "Il sort de l'hôpital après une nuit blanche, pâle, les traits tirés, les yeux rouges. Il a le visage défait.",
  },
  "Aversion": {
    scene: "Les araignées, le bruit de la craie sur le tableau, les gens qui mâchent la bouche ouverte. Il a une aversion pour tout ça : un dégoût profond.",
  },
  "Dissonance": {
    scene: "Au milieu de la mélodie, deux notes qui grincent ensemble. Une dissonance.",
    degainer: "La « dissonance cognitive » : quand on fait le contraire de ce qu'on croit, et qu'on s'arrange pour ne pas le voir.",
  },
  "Frugifère": {
    scene: "Les branches du vieux pommier ploient sous les fruits. L'arbre est frugifère : il porte des fruits.",
  },
  "Évasé": {
    scene: "Une coupe de champagne, une jupe qui s'élargit vers le bas, un vase en forme de tulipe ouverte. Tout ce qui s'élargit vers l'ouverture est évasé.",
  },
  "Anfractuosité": {
    scene: "Dans la falaise, une cavité irrégulière où niche une mouette. Une anfractuosité.",
  },
  "Redan": {
    scene: "Le long des remparts, le mur avance et recule en dents de scie, pour que les défenseurs puissent tirer sur les côtés. Ce sont des redans.",
  },
  "Palissé": {
    scene: "Les poiriers sont attachés contre le mur du potager, leurs branches étalées comme des bras. Ce sont des arbres palissés.",
  },
  "Glaïeul": {
    scene: "De longues tiges dressées, couvertes de fleurs du bas jusqu'en haut, rouges, roses ou blanches. Ce sont des glaïeuls.",
  },
  "Frêne": {
    scene: "Un grand arbre au bois clair, dur et souple, dont on faisait les manches d'outils et les arcs. C'est le frêne.",
  },
  "Boulingrin": {
    scene: "Dans le parc du château, un parterre de gazon parfaitement tondu, entouré de bordures. C'est le boulingrin.",
    origine: "De l'anglais « bowling green », la pelouse où l'on joue aux boules.",
  },
  "Arpent": {
    scene: "« Il possède quelques arpents de vigne au flanc du coteau. » Une ancienne mesure de terre, environ un demi-hectare.",
  },
  "Vaporeux": {
    scene: "Un matin de brume, les collines sont floues, comme peintes à l'aquarelle. Le paysage est vaporeux.",
    aussi: "Une robe vaporeuse est légère, aérienne.",
  },
  "Antédiluvien": {
    scene: "Le téléphone de son grand-père : à clapet, sans écran couleur, avec une antenne. Il est antédiluvien.",
    origine: "Littéralement : d'avant le Déluge.",
  },
  "Irisé": {
    scene: "Une bulle de savon au soleil, une flaque d'essence, la gorge d'un pigeon : des reflets aux couleurs de l'arc-en-ciel. Irisés.",
  },
  "Rocailleux": {
    scene: "Un chemin de montagne plein de cailloux qui roulent sous les pieds. Et la voix du vieux chanteur, rugueuse et grave : rocailleuse.",
  },
  "Capucin": {
    scene: "Un moine franciscain en robe brune avec un long capuchon pointu. C'est un capucin.",
    aussi: "Le cappuccino lui doit son nom, par sa couleur. Et un capucin, c'est aussi un petit singe d'Amérique.",
  },
  "Emprunté": {
    scene: "Au mariage, il ne sait pas quoi faire de ses mains, se tient trop droit, sourit trop. Il a l'air emprunté : raide de gêne.",
  },
  "Gauche": {
    scene: "Il renverse son verre, se cogne à la porte, ne sait pas comment dire bonjour. Il est gauche : maladroit.",
    origine: "La main gauche était jugée la moins habile : d'où ce sens.",
  },
  "Pataud": {
    scene: "Le chiot aux grosses pattes qui trébuche sur ses propres oreilles. Il est pataud : lourd et maladroit.",
  },
  "Empoté": {
    scene: "Il met dix minutes à ouvrir un pot de confiture et finit par le faire tomber. Qu'il est empoté !",
  },
  "Malhabile": {
    scene: "Une main malhabile qui tremble en enfilant une aiguille. Qui manque d'adresse.",
  },
  "Godiche": {
    scene: "Elle reste plantée là, la bouche ouverte, sans savoir quoi dire ni quoi faire. Un peu godiche : maladroite et un peu niaise.",
  },
  "Balourd": {
    scene: "Il marche sur les pieds de tout le monde et dit exactement ce qu'il ne faut pas dire. Un balourd : lourd de corps et d'esprit.",
  },
  "Daron": {
    scene: "« Mon daron rentre à 19 heures, faut que je range avant. » Le daron, c'est le père ; la daronne, la mère.",
    origine: "Un argot très ancien : les voleurs du XVIIIe siècle l'employaient déjà.",
  },
  "Poucave": {
    scene: "Il a tout raconté au surveillant. Dans la cour, la nouvelle fait le tour : c'est une poucave, une balance.",
    origine: "Du romani, la langue des Roms.",
  },
  "Chouraver": {
    scene: "« On m'a chouravé mon vélo ! » Volé, en argot.",
    origine: "Du romani.",
  },
  "Marave": {
    scene: "« Viens pas me chercher ou je te marave. » Te frapper, en argot.",
    origine: "Du romani.",
  },
  "Gadjo": {
    scene: "Pour les Roms, le gadjo, c'est celui qui n'est pas rom. Puis le mot est passé dans l'argot pour dire « un gars ».",
    degainer: "Au féminin : une gadji.",
  },
  "Narvalo": {
    scene: "« T'es un narvalo, toi ! » Un fou, un idiot, en argot.",
    origine: "Du romani.",
  },
  "Michto": {
    scene: "En romani, michto voulait dire « beau, bien ». En argot d'aujourd'hui, une michto, c'est quelqu'un qui s'intéresse surtout à ton argent.",
  },
  "Pénave": {
    scene: "« Viens, j'te pénave un truc. » Je te dis, je te raconte, en argot.",
    origine: "Du romani « phenav », je dis.",
  },
  "Seum": {
    scene: "Battu au dernier moment, à la dernière seconde du match. Il a le seum : la rage, la frustration.",
    origine: "De l'arabe « sèmm », le venin.",
  },
  "Zbeul": {
    scene: "Les gamins sont rentrés, et en dix minutes, le salon est un champ de bataille. Ils ont foutu le zbeul.",
    origine: "De l'arabe.",
  },

  // Série 9
  "Flouze": {
    scene: "« T'as du flouze pour le resto ? » L'argent, en argot.",
    origine: "De l'arabe « flous ».",
  },
  "Thune": {
    scene: "« J'ai pas une thune ce mois-ci. » L'argent, encore. Au XIXe siècle, une thune était une pièce de cinq francs.",
  },
  "Blase": {
    scene: "« C'est quoi ton blase ? » Ton nom, ton surnom, dans le vieil argot des voyous.",
  },
  "Bled": {
    scene: "Un village perdu sans boulangerie, où le bus passe deux fois par semaine : un bled. Et pour beaucoup, « le bled », c'est aussi le pays d'origine de la famille, où l'on retourne l'été.",
    origine: "De l'arabe « bilad », le pays.",
  },
  "Tchatche": {
    scene: "Il vendrait du sable dans le désert : il parle, il charme, il ne s'arrête jamais. Il a la tchatche.",
  },
  "Chelou": {
    scene: "Un type qui rôde devant l'immeuble depuis une heure, capuche sur la tête. C'est chelou.",
    origine: "Le verlan de « louche » : on retourne les syllabes.",
  },
  "Vénère": {
    scene: "Il a attendu le bus quarante minutes sous la pluie, et il est passé plein. Il est vénère.",
    origine: "Le verlan d'« énervé ».",
  },
  "Ouf": {
    scene: "« Ce concert, c'était ouf ! » Incroyable, dingue.",
    origine: "Le verlan de « fou ».",
  },
  "Bader": {
    scene: "Dimanche soir, la pluie, le travail demain : il bade. Un coup de blues.",
    origine: "De l'anglais « bad ».",
  },
  "Palsambleu": {
    scene: "« Palsambleu, monsieur, vous m'insultez ! » Un juron de mousquetaire, adouci pour ne pas jurer sur le sang de Dieu.",
  },
  "Morbleu": {
    scene: "« Morbleu ! Le traître m'a échappé ! » « Mort de Dieu », déguisé en « bleu » pour éviter le blasphème.",
  },
  "Parbleu": {
    scene: "« Tu viendras ? — Parbleu ! » Évidemment ! Un juron de bonne humeur, adouci de « par Dieu ».",
  },
  "Diantre": {
    scene: "« Diantre, que c'est cher ! » Le diable, mais déguisé en mot poli.",
  },
  "Fichtre": {
    scene: "Tu découvres la facture du garagiste : « Fichtre ! » De l'étonnement, avec un soupçon d'admiration.",
  },
  "Ventre-saint-gris": {
    scene: "Le juron favori du roi Henri IV, le « bon roi » qui voulait une poule au pot dans chaque marmite le dimanche.",
  },
  "Saperlipopette": {
    scene: "« Saperlipopette, j'ai encore perdu mes lunettes ! » Un juron qui fait sourire, cousin de saprelotte.",
  },
  "Maraud": {
    scene: "« Hors d'ici, maraud ! » Dans les comédies de Molière, le maître chasse le valet coquin d'un coup de canne. Un vaurien.",
  },
  "Faquin": {
    scene: "Il se prend pour un grand seigneur, et ce n'est qu'un homme de rien. « Faquin ! » : méprisable et prétentieux.",
  },
  "Gredin": {
    scene: "« Ah, le gredin, il m'a volé ma montre ! » Un malhonnête, une crapule.",
  },
  "Malandrin": {
    scene: "Sur les routes du Moyen Âge, dans la forêt, des brigands attendaient les voyageurs. Les malandrins.",
  },
  "Pendard": {
    scene: "« Pendard ! » crie le vieil homme au valet qui l'a trompé. Un vaurien qui mériterait la corde.",
  },
  "Bélître": {
    scene: "« Va-t'en, bélître ! » Un gueux, un homme de rien, dans la bouche des seigneurs d'autrefois.",
  },
  "Butor": {
    scene: "Il bouscule tout le monde et ne s'excuse jamais. Quel butor !",
    aussi: "Le butor est aussi un oiseau des marais, au cri sourd comme un mugissement.",
  },
  "Gougnafier": {
    scene: "Il a monté l'étagère de travers et a cassé deux verres en le faisant. Un gougnafier : un bon à rien.",
  },
  "Paltoquet": {
    scene: "Petit, prétentieux et parfaitement insignifiant, il donne des ordres à tout le monde. Un paltoquet.",
  },
  "Olibrius": {
    scene: "Chapeau melon, chaussettes dépareillées, il fait des discours aux pigeons. Un drôle d'olibrius.",
  },
  "Malotru": {
    scene: "Il mâche la bouche ouverte, coupe la parole et rote à table. Un malotru : un mal élevé.",
  },
  "Goujat": {
    scene: "Il lui a laissé payer l'addition et a passé la soirée à regarder son téléphone. Un goujat : sans aucune délicatesse.",
  },
  "Pignouf": {
    scene: "Il jette ses papiers par terre et parle fort au cinéma. Un pignouf : un rustre.",
  },
  "Sacripant": {
    scene: "« Ah, le petit sacripant ! » Le chenapan qui a mangé tous les gâteaux et nie, la bouche pleine de crème.",
    origine: "Sacripant est un personnage du Roland furieux de l'Arioste.",
  },
  "Bachi-bouzouk": {
    scene: "« Bachi-bouzouk ! » Une insulte rendue célèbre par le capitaine Haddock, le grand ami de Tintin.",
    origine: "À l'origine, les bachi-bouzouks étaient des soldats irréguliers de l'Empire ottoman.",
  },
  "Scélérat": {
    scene: "« Ah, le scélérat ! » Celui qui a commis un crime et n'en a aucun remords.",
  },
  "Jean-foutre": {
    scene: "Il promet tout, ne tient rien, et disparaît au premier problème. Un jean-foutre : à qui on ne peut pas se fier.",
  },
  "Galvaudé": {
    scene: "« Incroyable », « légendaire », « génial » : à force de les coller partout, ces mots sont galvaudés. Ils ne veulent plus rien dire.",
  },
  "Probant": {
    scene: "Trois études, mille patients, des résultats clairs. Les preuves sont probantes : elles convainquent.",
  },
  "Phrénologie": {
    scene: "Au XIXe siècle, des savants palpaient les bosses du crâne pour y lire le génie, la ruse ou le crime. La phrénologie était une fausse science.",
    degainer: "C'est de là que vient « avoir la bosse des maths ».",
  },
  "Épigénétique": {
    scene: "Deux jumeaux ont exactement le même ADN. Pourtant, avec les années, leur santé diverge : le stress, l'alimentation, le sport ont allumé ou éteint certains gènes. C'est l'épigénétique.",
  },
  "Commissure": {
    scene: "Au coin de ses lèvres, un léger pli remonte : elle sourit sans le vouloir. La commissure des lèvres la trahit.",
  },
  "Gastrolâtrie": {
    scene: "Il planifie son week-end autour d'un seul restaurant et parle de son dessert comme d'une révélation. C'est la gastrolâtrie : le culte du ventre.",
  },
  "Acuité": {
    scene: "L'aigle repère un lapin à un kilomètre. Et le détective remarque le détail que personne n'a vu. Une acuité impressionnante : un sens, un esprit d'une finesse aiguë.",
  },
  "S'arroger": {
    scene: "Personne ne l'a élu, personne ne l'a nommé. Il s'est arrogé le droit de décider pour tout le monde.",
  },
  "Abscons": {
    scene: "Un mode d'emploi traduit trois fois, un contrat écrit pour ne pas être compris. Un texte abscons : obscur.",
  },
  "Décorum": {
    scene: "Les tapis rouges, les uniformes, les discours, les petits fours. Tout le décorum d'une cérémonie officielle, parfois plus impressionnant que ce qu'on célèbre.",
  },
  "Sylvothérapie": {
    scene: "Une heure en forêt, les mains sur l'écorce d'un chêne, à respirer lentement. La sylvothérapie promet du calme au contact des arbres.",
  },
  "Adage": {
    scene: "« Comme dit l'adage, qui va lentement va sûrement. » Une vieille formule de sagesse, transmise de génération en génération.",
  },
  "Pampre": {
    scene: "Sous la tonnelle, les rameaux de vigne chargés de feuilles et de grappes dorées. Ce sont les pampres.",
  },
  "Lutin": {
    scene: "Dans les contes, un petit génie espiègle qui cache tes clés et noue les crins des chevaux la nuit. C'est un lutin.",
    aussi: "Comme adjectif, lutin veut dire malicieux et vif : « un air lutin ».",
  },
  "Langes": {
    scene: "Autrefois, on enveloppait les nouveau-nés serrés dans des linges, de la tête aux pieds. Les langes.",
    degainer: "« Dans les langes » : à ses tout débuts.",
  },
  "Rusticité": {
    scene: "Une table en bois brut, un pain de campagne, des manières franches et un peu rudes. Le charme de la rusticité.",
  },
  "Teiller": {
    scene: "Dans les fermes d'autrefois, on battait les tiges de lin pour en détacher la fibre, qui deviendrait du fil. On teillait le lin.",
  },
  "Purpurin": {
    scene: "En septembre, les grappes purpurines pendent sous les feuilles de vigne : d'un rouge pourpre, profond.",
  },
  "Lustre": {
    scene: "Le grand chandelier de cristal au plafond du salon, c'est un lustre. Et l'éclat d'un meuble bien ciré, c'est aussi son lustre.",
    aussi: "Un lustre, c'est enfin une période de cinq ans : « depuis des lustres », depuis très longtemps.",
  },
  "Plantureux": {
    scene: "Un repas plantureux, une récolte plantureuse : de l'abondance, à profusion.",
  },
  "Capucinade": {
    scene: "« Il faut être sage, mes enfants, et obéir à vos parents… » Un sermon plat, prévisible, sans aucune étincelle. Une capucinade.",
  },
  "Bistre": {
    scene: "Un brun noirâtre, la couleur de la suie. Après un été au soleil, le marin a le teint bistre.",
  },
  "Damné": {
    scene: "Pour les croyants, le damné est condamné à l'enfer pour l'éternité. Et dans la bouche de ta grand-mère : « Cette damnée machine ne marche jamais ! »",
  },
  "Baraka": {
    scene: "Trois fois, il a échappé de justesse à l'accident. Il a la baraka : une chance qui le protège.",
    origine: "De l'arabe : la bénédiction.",
  },
  "Neuvaine": {
    scene: "Neuf jours de suite, la même prière, pour demander une guérison, un miracle. C'est une neuvaine.",
  },
  "Serein": {
    scene: "Après une belle journée d'été, au coucher du soleil, une humidité fine tombe sur le jardin. « Rentrons, voilà le serein. »",
    aussi: "Comme adjectif, serein veut dire calme, paisible : « un ciel serein ».",
  },
  "Tonique": {
    scene: "Une douche froide, un air de montagne, une musique entraînante : tout ce qui réveille et fortifie est tonique.",
    degainer: "Balzac le dit d'une passion : même la haine peut être un tonique.",
  },
  "Tracassier": {
    scene: "Il vérifie à quelle heure tu arrives, combien de temps dure ta pause, si ton bureau est bien rangé. Un chef tracassier : qui embête pour des riens.",
  },
  "Opiniâtre": {
    scene: "Elle a recommencé son examen quatre fois, et l'a réussi la cinquième. Opiniâtre : elle ne lâche jamais.",
    aussi: "Une toux opiniâtre, elle, refuse de partir.",
  },
  "Quinte": {
    scene: "En plein concert, un spectateur est pris d'une toux violente, interminable, qu'il n'arrive pas à arrêter. Une quinte de toux.",
  },
  "Trappiste": {
    scene: "Lever à trois heures, silence presque total, travail des champs et prière. Les moines trappistes mènent une vie d'une grande austérité.",
    aussi: "Ils sont aussi connus pour leurs bières et leurs fromages.",
  },
  "Gaillardement": {
    scene: "À quatre-vingts ans, il gravit la colline gaillardement, en sifflotant, devant les jeunes essoufflés.",
  },
  "Endimanché": {
    scene: "Costume trop serré, chaussures cirées, cheveux plaqués : le petit garçon se tient raide à la communion de sa cousine. Il est endimanché.",
  },
  "Réprimer": {
    scene: "Pendant l'enterrement, il sent un fou rire monter. Il serre les lèvres, il le réprime.",
    aussi: "Réprimer une révolte, c'est l'étouffer par la force.",
  },
  "Effarouché": {
    scene: "Le faon lève la tête au moindre bruit, prêt à bondir dans les fourrés. Il est effarouché.",
  },
  "Ménétrier": {
    scene: "Aux noces du village, sur une estrade de fortune, le violoneux fait danser tout le monde jusqu'à l'aube. C'est le ménétrier.",
  },
  "Grimaud": {
    scene: "Un vieux mot pour un air chagrin, renfrogné, maussade. Autrefois, on traitait aussi de grimaud un mauvais écrivain.",
  },
  "Racornir": {
    scene: "Le cuir oublié au soleil se dessèche et se ratatine. La vie a racorni son cœur, comme de la corne.",
  },
  "Morceler": {
    scene: "À chaque héritage, le grand domaine est partagé entre les enfants, puis les petits-enfants. Il a été morcelé en petites parcelles.",
  },
  "Abolir": {
    scene: "Une loi votée, et l'esclavage n'existe plus aux yeux du droit. On l'a aboli.",
  },
  "Dichotomie": {
    scene: "Le corps d'un côté, l'esprit de l'autre. Le bien, le mal. Une dichotomie coupe le monde en deux camps opposés.",
  },
  "Basquine": {
    scene: "Une jupe ample, brodée, qui tournoie dans les danses espagnoles et basques. La basquine.",
  },
  "Lascif": {
    scene: "Une danse lente, des hanches qui ondulent, un regard qui s'attarde. Le mouvement est lascif : il évoque les plaisirs des sens.",
  },
  "Rutilant": {
    scene: "La voiture de collection sort du garage, rouge vif, chromes étincelants. Elle est rutilante.",
  },
  "Argentin": {
    scene: "Un rire clair et pur, comme une cuillère d'argent contre un verre de cristal. Un rire argentin.",
    piege: "Rien à voir avec l'Argentine, même si le mot argentin désigne aussi ses habitants.",
  },
  "Guttural": {
    scene: "Une voix qui vient du fond de la gorge, grave et rauque, comme un grondement. Une voix gutturale.",
  },
  "Pervenche": {
    scene: "Au printemps, dans les sous-bois, de petites fleurs bleu-mauve tapissent le sol. Ce sont des pervenches.",
    aussi: "Et les yeux pervenche ont cette couleur douce.",
  },
  "Râle": {
    scene: "Dans la chambre silencieuse, un souffle rauque, lent, qui s'arrête parfois. Le râle des derniers instants.",
    aussi: "Le râle est aussi un oiseau des marais.",
  },
  "Ondine": {
    scene: "Dans les légendes germaniques, une nymphe aux longs cheveux vit au fond des lacs et attire les chevaliers. C'est l'ondine.",
  },
  "Sylphide": {
    scene: "Un génie féminin de l'air, léger comme une brume. Et la danseuse étoile qui semble flotter au-dessus de la scène : une sylphide.",
  },
  "Vaudeville": {
    scene: "Un amant caché dans le placard, un mari qui rentre plus tôt, une porte qui claque, un quiproquo de plus. C'est un vaudeville.",
  },
  "Voltiger": {
    scene: "Un papillon voltige de fleur en fleur sans jamais se poser vraiment. Et les feuilles mortes voltigent dans le vent d'automne.",
  },
  "Paillardise": {
    scene: "Les chansons de fin de banquet, grivoises et joyeuses, qu'on chante en tapant sur la table. La paillardise.",
  },
  "Dialectique": {
    scene: "Une idée, puis son contraire, puis de leur choc naît une troisième idée, plus riche. C'est la dialectique : l'art de penser en confrontant les opposés.",
  },
  "Mouvoir": {
    scene: "Le vent meut les ailes du moulin. Et dans un roman, ce sont les passions qui meuvent les personnages : elles les font agir.",
  },
  "Dandy": {
    scene: "Gilet de soie, canne à pommeau, mot d'esprit toujours prêt. Pour lui, l'élégance n'est pas un détail : c'est un art de vivre. C'est un dandy.",
    origine: "Baudelaire et Oscar Wilde en ont fait une figure littéraire.",
  },
  "Duire": {
    scene: "« Si cela vous duit, monsieur. » Un très vieux mot pour dire « convenir, plaire ».",
  },
  "Inanité": {
    scene: "Trois heures de réunion pour décider de la couleur des trombones. L'inanité de la chose saute aux yeux : vaine, vide, inutile.",
  },
  "Lubie": {
    scene: "Hier, il voulait apprendre le cor de chasse. Aujourd'hui, élever des escargots. Encore une lubie : un caprice soudain.",
  },
  "Méritoire": {
    scene: "Il a appris à lire à soixante-dix ans. C'est méritoire : digne d'éloge.",
  },
  "Dévergondage": {
    scene: "Des nuits de fête, des excès, et plus aucune retenue. Dans les romans moralisateurs, c'est le dévergondage.",
  },
  "Pâture": {
    scene: "Le pré où les vaches broutent, c'est une pâture. Et les livres, pour un esprit curieux, sont une pâture inépuisable.",
    degainer: "« Jeter en pâture » : livrer quelqu'un à la curiosité ou à la méchanceté du public.",
  },
  "Tintamarre": {
    scene: "Les casseroles, les klaxons, les cris, la fanfare qui joue faux. Un tintamarre à rendre fou.",
  },
  "Charivari": {
    scene: "Autrefois, quand un vieux veuf épousait une jeune fille, les villageois venaient faire un vacarme de casseroles sous leurs fenêtres. C'était le charivari.",
  },
  "Orpiment": {
    scene: "Un minéral jaune d'or, éclatant, que les peintres broyaient pour leurs pigments. Mais attention : c'est de l'arsenic.",
  },
  "Pâtre": {
    scene: "Sur la colline, appuyé sur son bâton, il garde son troupeau en jouant de la flûte. Le pâtre des poèmes antiques.",
  },
  "Poindre": {
    scene: "À l'horizon, une lueur pâle : le jour commence à poindre. Et dans ta tête, une idée point doucement.",
  },
  "Essaim": {
    scene: "Un nuage d'abeilles qui bourdonne autour de la reine. Un essaim. Et à la sortie de l'école, un essaim d'enfants s'éparpille dans la rue.",
  },
  "Hypocras": {
    scene: "Au banquet du château, on sert un vin chaud, sucré au miel, parfumé de cannelle et de gingembre. L'hypocras du Moyen Âge.",
  },
  "Bombance": {
    scene: "Le soir de la victoire, toute la troupe fait bombance : un festin, des chants, du vin à volonté.",
  },
  "Éthéré": {
    scene: "Une musique si légère, si pure, qu'elle semble ne pas toucher terre. Éthérée.",
  },
  "Galvanique": {
    scene: "Au XIXe siècle, on parlait de « fluide galvanique » pour l'électricité née d'une réaction chimique, comme dans une pile.",
  },
  "Cicérone": {
    scene: "À Rome, un vieil homme t'emmène dans les ruelles, te raconte chaque fontaine et chaque légende. C'est ton cicérone.",
    origine: "D'après Cicéron, le grand orateur romain : les guides parlaient autant que lui.",
  },
  "Esquisse": {
    scene: "Quelques traits de crayon, rapides, qui donnent déjà l'idée du tableau à venir. C'est l'esquisse.",
  },

  // Série 10
  "Sellier": {
    scene: "Dans son atelier qui sent le cuir, il coud à la main une selle pour un cheval de course, point par point. C'est le sellier.",
    degainer: "Les grandes maisons de luxe sont nées dans des ateliers de selliers.",
  },
  "Sédition": {
    scene: "Des soldats refusent d'obéir, des tracts appellent à marcher sur le palais. La ville est au bord de la sédition : la révolte contre l'autorité.",
  },
  "Ode": {
    scene: "Un poème qui chante, qui célèbre : une ode à la mer, à l'amitié, à une ville aimée. Ronsard en écrivait à sa belle.",
    degainer: "Avec humour : « Ce plat de pâtes est une ode à la simplicité. »",
  },
  "Abîme": {
    scene: "Au bord de la falaise, tu regardes en bas et tu ne vois pas le fond. Un abîme.",
    aussi: "La « mise en abyme », avec l'ancienne graphie, c'est une image dans l'image : le tableau qui contient un petit tableau, qui contient un tableau encore plus petit…",
  },
  "Rimailleur": {
    scene: "« Mon amour, tu es mon toujours, comme un tambour qui fait des tours. » Il aligne les rimes sans aucun talent. C'est un rimailleur.",
  },
  "Auvent": {
    scene: "La pluie se met à tomber : tout le monde se serre sous le petit toit au-dessus de la porte de la boulangerie. Sous l'auvent.",
  },
  "Pochade": {
    scene: "Quelques coups de pinceau rapides, au bord de la Seine, en une heure, pour saisir la lumière. Une pochade.",
    aussi: "En littérature, une pochade est une œuvre légère, écrite vite, pour s'amuser.",
  },
  "Fourbu": {
    scene: "Après la randonnée de vingt kilomètres, il s'effondre sur le canapé, les jambes en coton. Il est fourbu.",
  },
  "Ténuité": {
    scene: "Un fil de soie d'araignée, à peine visible dans la lumière du matin. Sa ténuité est stupéfiante.",
  },
  "Frai": {
    scene: "Au printemps, les saumons remontent la rivière pour pondre. C'est le temps du frai.",
  },
  "Cavatine": {
    scene: "À l'opéra, l'héroïne s'avance seule sur scène et chante un air court, tendre, qui fait frissonner la salle. Une cavatine.",
  },
  "Schlague": {
    scene: "Dans les vieilles armées, le soldat qui désobéissait recevait des coups de baguette. La schlague. Et « vivre sous la schlague », c'est subir une discipline brutale.",
  },
  "Heiduque": {
    scene: "Dans les grandes maisons du XVIIIe siècle, un laquais habillé à la hongroise, avec moustache et dolman brodé : le heiduque.",
  },
  "Encan": {
    scene: "Les meubles du château vendus un par un au plus offrant, sous le marteau du commissaire-priseur. Tout est à l'encan.",
    degainer: "« Mettre à l'encan » : vendre au plus offrant, y compris ce qui ne devrait pas se vendre (son honneur, sa conscience).",
  },
  "Désargenté": {
    scene: "Un nom à rallonge, un château qui tombe en ruine, et plus un sou en poche. Le jeune aristocrate désargenté.",
  },
  "Égrapper": {
    scene: "Pendant les vendanges, on détache les grains de raisin de leur rafle avant de les presser. On les égrappe.",
  },
  "Chansonnier": {
    scene: "Sur la scène d'un petit cabaret, il chante l'actualité de la semaine en se moquant des puissants. C'est un chansonnier.",
  },
  "S'épancher": {
    scene: "Après minuit, autour d'une tasse de thé, elle s'épanche : tout ce qu'elle gardait depuis des mois sort enfin.",
  },
  "Outrager": {
    scene: "Insulter un juge en pleine audience, cracher sur un monument aux morts. Ce n'est pas une offense, c'est un outrage.",
  },
  "Complaisamment": {
    scene: "Il raconte complaisamment ses exploits de jeunesse, en s'écoutant parler, ravi de lui-même.",
  },
  "Réséda": {
    scene: "Dans le jardin de la grand-mère, de petites fleurs discrètes qui embaument tout le soir. Le réséda.",
  },
  "Ottomane": {
    scene: "Dans le salon oriental, un canapé bas et profond, couvert de coussins brodés, sur lequel on s'allonge pour fumer le narghilé. Une ottomane.",
  },
  "Insidieusement": {
    scene: "Le doute s'est installé insidieusement : une petite remarque, puis une autre, et un jour tu ne fais plus confiance à personne.",
  },
  "Airain": {
    scene: "Les cloches, les statues antiques, les canons d'autrefois : de l'airain, l'ancien nom du bronze.",
    degainer: "« Un cœur d'airain » : un cœur dur, que rien ne touche.",
  },
  "Boudoir": {
    scene: "Au XVIIIe siècle, un petit salon intime, tendu de soie rose, où une dame recevait ses amis proches. Le boudoir.",
    origine: "De « bouder » : c'est là qu'on allait se retirer quand on boudait.",
  },
  "Aiguillon": {
    scene: "Le bouvier pique ses bœufs avec un bâton à pointe pour les faire avancer. Et l'aiguillon de la jalousie pousse à faire des folies.",
  },
  "Flegmatique": {
    scene: "La maison est en feu, l'alarme hurle, et lui termine tranquillement sa tasse de thé. Il est flegmatique.",
  },
  "Perfidie": {
    scene: "Il l'embrasse sur la joue en public, et l'a dénoncée la veille au patron. Quelle perfidie !",
  },
  "Cou-de-pied": {
    scene: "La danseuse tend le pied, et la partie bombée sur le dessus forme une courbe parfaite. C'est le cou-de-pied.",
    piege: "Rien à voir avec un coup de pied !",
  },
  "Ménechme": {
    scene: "Dans la rue, tu croises ton propre visage : même nez, même sourire, même démarche. Ton ménechme : ton sosie parfait.",
    origine: "D'après « Les Ménechmes », une comédie de Plaute sur deux jumeaux qu'on confond.",
  },
  "Rançonner": {
    scene: "Les brigands arrêtent la diligence et exigent de l'or pour laisser repartir les voyageurs. Ils les rançonnent.",
  },
  "Relater": {
    scene: "Le journaliste relate les faits un par un, dans l'ordre, sans rien oublier.",
  },
  "Tiquer": {
    scene: "Quand le vendeur a annoncé le prix, il a tiqué : un petit mouvement de sourcil, à peine visible.",
  },
  "Fricassée": {
    scene: "Des morceaux de poulet qui mijotent dans une sauce crémeuse aux champignons, comme chez la grand-mère. Une fricassée.",
  },
  "Receleur": {
    scene: "Dans une arrière-boutique, il achète les bijoux volés à moitié prix et les revend plus loin. C'est le receleur.",
  },
  "Componction": {
    scene: "Les mains jointes, la tête baissée, la voix grave : il prend un air de componction pour faire la morale, mais personne n'y croit.",
  },
  "Fortin": {
    scene: "Au bord du désert, un petit fort de pierre avec une poignée de soldats qui guettent l'horizon. Un fortin.",
  },
  "Impie": {
    scene: "Pour les dévots, celui qui se moque de Dieu, rit pendant la messe et mange gras le vendredi est un impie.",
  },
  "Homélie": {
    scene: "À la messe, après la lecture, le prêtre parle aux fidèles : c'est l'homélie.",
    degainer: "Au figuré, une homélie est un long sermon moralisateur : « Épargne-moi ton homélie. »",
  },
  "Anthropophage": {
    scene: "Dans les vieux récits d'explorateurs, les naufragés redoutaient les peuples anthropophages : mangeurs de chair humaine.",
  },
  "Janissaire": {
    scene: "L'infanterie d'élite de l'Empire ottoman, redoutée dans toute l'Europe, avec ses grands bonnets blancs. Les janissaires.",
  },
  "Supplétif": {
    scene: "L'armée régulière ne suffit plus : on recrute des troupes supplétives, qui viennent en renfort.",
  },
  "Intestin": {
    scene: "Comme adjectif, intestin veut dire « à l'intérieur ». Des guerres intestines déchirent un pays de l'intérieur.",
  },
  "Cocagne": {
    scene: "Un pays imaginaire où les rivières sont de vin, où les maisons sont en gâteau et où il suffit d'ouvrir la bouche pour qu'une alouette rôtie y tombe. Le pays de Cocagne.",
    aussi: "Le mât de cocagne est un poteau glissant au sommet duquel on accroche des prix à décrocher.",
  },
  "Gondolier": {
    scene: "À Venise, debout à l'arrière de sa gondole noire, il manie sa longue rame en chantant. Le gondolier.",
  },
  "Avanie": {
    scene: "Insulté devant tout le monde, renvoyé sans un merci, moqué dans le journal. Il a subi avanie sur avanie.",
  },
  "Éraillé": {
    scene: "Après le concert, il a hurlé toute la nuit : le lendemain, sa voix est éraillée, cassée, rauque.",
  },
  "Credo": {
    scene: "« Ne jamais remettre au lendemain ce qu'on peut faire le jour même. » C'est son credo : le principe auquel il croit.",
    origine: "Du latin « je crois », le premier mot de la prière chrétienne.",
  },
  "Exhortation": {
    scene: "« Levez-vous ! Battez-vous ! N'abandonnez jamais ! » Le discours de l'entraîneur à la mi-temps est une exhortation.",
  },
  "Épistémologique": {
    scene: "« Comment savons-nous ce que nous savons ? Qu'est-ce qu'une preuve ? » Ce sont des questions épistémologiques.",
  },
  "Productiviste": {
    scene: "Produire plus, plus vite, toujours plus, comme si c'était un but en soi. Une logique productiviste.",
  },
  "Antiroman": {
    scene: "Pas d'intrigue, pas de héros, pas de fin : un livre qui refuse toutes les règles du roman. Un antiroman.",
  },
  "Métaroman": {
    scene: "Le narrateur s'adresse à toi, le lecteur, et commente le livre que tu es en train de lire. Calvino l'a fait dans « Si par une nuit d'hiver un voyageur ». C'est un métaroman.",
  },
  "Démentir": {
    scene: "Le lendemain de la rumeur, le ministre publie un communiqué : « C'est faux. » Il dément.",
  },
  "Polyphonique": {
    scene: "Un roman où chaque chapitre est raconté par un personnage différent, avec sa voix, sa vérité. Un roman polyphonique.",
  },
  "Rabelaisien": {
    scene: "Des banquets énormes, des rires gras, des mots inventés, une joie de vivre débordante. Un esprit rabelaisien.",
  },
  "Ménippée": {
    scene: "Un mélange de prose et de vers, de sérieux et de bouffonnerie, pour se moquer des puissants. La satire ménippée.",
  },
  "Anglophilie": {
    scene: "Thé à cinq heures, humour pince-sans-rire et pluie adorée. Son anglophilie ne connaît pas de limites.",
  },
  "Picaresque": {
    scene: "Un jeune vagabond rusé, sans un sou, qui traverse le pays de maître en maître, en survivant grâce à ses tours. Le roman picaresque est né en Espagne.",
  },
  "Paraphraser": {
    scene: "Au lieu de donner son avis, il répète la question de l'examen avec d'autres mots, en plus long. Il paraphrase.",
  },
  "Effusion": {
    scene: "À l'aéroport, des embrassades, des larmes, des cris de joie : des effusions de retrouvailles.",
    aussi: "« Sans effusion de sang » : sans qu'une goutte de sang soit versée.",
  },
  "Maestria": {
    scene: "Le pianiste joue sans partition, les mains volent sur le clavier. Quelle maestria !",
  },
  "Caracoler": {
    scene: "Le cavalier fait tourner son cheval en petits cercles devant la foule, pour le plaisir de se montrer. Il caracole.",
    degainer: "« Caracoler en tête des sondages » : être loin devant, avec aisance.",
  },
  "Apologue": {
    scene: "Le lièvre trop sûr de lui, la tortue qui avance sans s'arrêter. Une petite histoire, une grande leçon : c'est un apologue.",
  },
  "Irréfutable": {
    scene: "Une vidéo, trois témoins, ses empreintes partout. La preuve est irréfutable.",
  },
  "Sérénissime": {
    scene: "Venise, ses canaux, ses palais et ses doges, s'appelait autrefois la Sérénissime République.",
  },
  "Péremptoire": {
    scene: "« C'est comme ça, et pas autrement. » Un ton péremptoire, qui n'admet aucune réponse.",
  },
  "Arithmomanie": {
    scene: "Il compte les marches de chaque escalier, les fenêtres de chaque immeuble, les carreaux de chaque sol. C'est de l'arithmomanie : le besoin de tout compter.",
  },
  "Feindre": {
    scene: "Elle feint la surprise devant le cadeau, alors qu'elle l'a trouvé dans le placard la semaine dernière.",
  },
  "Copernicien": {
    scene: "Pendant des siècles, la Terre était au centre. Copernic y a mis le Soleil. Une révolution copernicienne, c'est un renversement complet du point de vue.",
  },
  "Ecclésiastique": {
    scene: "Prêtres, évêques, moines : ce sont des ecclésiastiques, des membres du clergé.",
  },
  "Eudémonisme": {
    scene: "Le but de la vie ? Être heureux, et tout le reste en découle. C'est l'eudémonisme.",
    origine: "Du grec « eudaimonia », le bonheur.",
  },
  "Bourru": {
    scene: "Il grogne, il ne dit jamais merci, mais il est le premier à venir réparer ta voiture un dimanche. Bourru, mais en or.",
  },
  "Avaliser": {
    scene: "Le projet était prêt depuis des mois. Il ne manquait que la signature du directeur pour l'avaliser : le valider officiellement.",
  },
  "Sociobiologie": {
    scene: "Pourquoi les fourmis se sacrifient pour la colonie ? Pourquoi les singes se toilettent ? La sociobiologie cherche les racines biologiques des comportements sociaux.",
  },
  "Typologie": {
    scene: "Le gros dormeur, le lève-tôt, l'insomniaque : une typologie des dormeurs, un classement par types.",
  },
  "Asocialité": {
    scene: "Il ne répond pas aux invitations, ne salue pas ses voisins, fuit toute conversation. Une asocialité assumée.",
  },
  "Infinitésimal": {
    scene: "Une goutte d'encre dans l'océan. Une différence infinitésimale : infiniment petite.",
  },
  "Dilettante": {
    scene: "Un peu de piano, un peu de peinture, un peu de poterie, et tout ça pour le plaisir, sans jamais se prendre au sérieux. Un dilettante.",
  },
  "Polygraphe": {
    scene: "Des romans, des essais, des articles sur la cuisine, l'histoire et les étoiles. Il écrit sur tout : c'est un polygraphe.",
  },
  "Paradigme": {
    scene: "Pendant des siècles, on pensait que la Terre était plate. Puis le modèle a changé, et toute la pensée a basculé. Un changement de paradigme.",
  },
  "Protéiforme": {
    scene: "Musicien, peintre, cuisinier, acteur : un artiste protéiforme, qui change sans cesse de forme.",
    origine: "Protée, dieu marin grec, se transformait en lion, en serpent, en eau pour échapper à ceux qui voulaient l'interroger.",
  },
  "Synoptique": {
    scene: "Un grand tableau qui montre toutes les étapes du projet d'un seul coup d'œil. Un tableau synoptique.",
  },
  "Limitrophe": {
    scene: "La Belgique, le Luxembourg, l'Allemagne, la Suisse, l'Italie, l'Espagne… Les pays limitrophes de la France touchent sa frontière.",
  },
  "Pulvisculaire": {
    scene: "Un bonheur fait de mille petites choses : une odeur, un rayon de soleil, un mot gentil. Un bonheur pulvisculaire, en fine poussière.",
  },
  "Hypermétrope": {
    scene: "Il lit les panneaux au loin sans problème, mais tient le menu à bout de bras. Il est hypermétrope.",
  },
  "Gemme": {
    scene: "Rubis, saphir, émeraude : des gemmes, des pierres précieuses.",
    aussi: "Le sel gemme, lui, est extrait des mines, et non de la mer.",
  },
  "Crible": {
    scene: "Au jardin, on secoue la terre dans un grand tamis pour en retirer les cailloux. Le crible.",
    degainer: "« Passer au crible » : examiner dans les moindres détails.",
  },
  "Indocile": {
    scene: "Le cheval refuse la selle, se cabre, mord. Il est indocile : il n'obéit pas.",
  },
  "Choyer": {
    scene: "Couvertures chaudes, soupe maison, petits mots tendres : sa grand-mère la choie quand elle est malade.",
  },
  "Vortex": {
    scene: "L'eau qui tourbillonne en descendant dans le lavabo. Et sur les réseaux, un vortex de vidéos qui t'aspire pendant des heures.",
  },
  "Indiciaire": {
    scene: "Le détective remonte au coupable à partir d'un mégot, d'une trace de boue, d'un mot de travers. Une méthode indiciaire : fondée sur des indices.",
  },
  "Sémiotique": {
    scene: "Pourquoi le rouge veut dire « stop » ? Pourquoi une colombe veut dire « paix » ? La sémiotique étudie les signes et leur sens.",
  },
  "Superfétatoire": {
    scene: "Après trois explications claires, une quatrième serait superfétatoire : inutile, en trop.",
  },
  "Compacité": {
    scene: "Une boule de neige bien tassée, qui ne s'effrite pas. Sa compacité la rend redoutable.",
  },
  "Missel": {
    scene: "À la messe, la grand-mère ouvre un petit livre usé aux pages dorées, où sont écrites toutes les prières. Son missel.",
  },
  "Marâtre": {
    scene: "Dans les contes, la nouvelle femme du père qui maltraite Cendrillon : la marâtre.",
  },
  "Intrication": {
    scene: "Des fils emmêlés si serrés qu'on ne sait plus où commence l'un et où finit l'autre. Une intrication.",
    aussi: "En physique quantique, deux particules intriquées restent liées, même à des années-lumière l'une de l'autre.",
  },
  "Prosaïsme": {
    scene: "Il lui offre des fleurs et un poème… et elle répond : « Tu as pensé à acheter du pain ? » Le prosaïsme de la vie quotidienne.",
  },
  "Livide": {
    scene: "En apprenant la nouvelle, il devient livide : d'une pâleur grise, presque bleutée.",
  },
  "Égotisme": {
    scene: "Il ne parle que de lui, analyse chacune de ses émotions, et s'étonne que les autres ne s'y intéressent pas autant. L'égotisme : le culte de soi.",
    origine: "Stendhal a adopté le mot pour ses « Souvenirs d'égotisme ».",
  },
  "Mesquinerie": {
    scene: "Il compte au centime près qui a bu combien de bières pour partager l'addition. Quelle mesquinerie !",
  },
  "Snob": {
    scene: "Il ne boit que du café d'Éthiopie, n'écoute que des vinyles et lève les yeux au ciel quand tu cites une chanson connue. Il est snob.",
  },
  "Centrifuge": {
    scene: "Le manège tourne de plus en plus vite, et tu te sens plaqué contre la paroi. C'est la force centrifuge, qui pousse loin du centre.",
  },

  // Série 11
  "Affleurer": {
    scene: "À marée basse, des rochers affleurent à la surface de l'eau. Et dans un roman, une tristesse affleure sous chaque phrase drôle : elle apparaît à peine, à fleur.",
  },
  "Sulfureux": {
    scene: "Une odeur d'œuf pourri près des sources volcaniques : c'est le soufre. Et un écrivain sulfureux sent le soufre lui aussi : il fait scandale.",
  },
  "Pathos": {
    scene: "Violons, larmes, ralenti, enfant perdu sous la pluie : le film en fait trop. Trop de pathos, tout ce qui cherche à émouvoir, jusqu'à l'excès.",
  },
  "Punctiforme": {
    scene: "Vue de très loin, une étoile n'a pas de taille : c'est juste un point lumineux. Une source punctiforme.",
  },
  "Canonique": {
    scene: "La recette de la vraie carbonara, sans crème, celle qui fait référence : la version canonique.",
    aussi: "En religion, le droit canonique est celui de l'Église. Et « l'âge canonique », c'est un âge respectable.",
  },
  "Immédiateté": {
    scene: "Un message envoyé, une réponse attendue dans la seconde, une vidéo qui démarre sans attendre. Nous vivons dans l'immédiateté : sans délai, sans intermédiaire.",
  },
  "S'estomper": {
    scene: "Les années passent, et le visage de ce premier amour s'estompe : les contours deviennent flous, comme une photo au soleil.",
  },
  "Entropie": {
    scene: "Ta chambre se met en désordre toute seule. Ton café refroidit tout seul. Jamais l'inverse. C'est l'entropie : la tendance de tout à se défaire.",
  },
  "Équidistant": {
    scene: "Pour que personne ne fasse plus de route que l'autre, ils choisissent un village pile au milieu, équidistant de leurs deux villes.",
  },
  "Patrouiller": {
    scene: "Comme verbe ancien, patrouiller voulait dire tripoter sans précaution : « Ne patrouille pas les pêches, tu vas les abîmer ! »",
    aussi: "Aujourd'hui, une patrouille fait des rondes pour surveiller : les soldats patrouillent dans les rues.",
  },
  "Ampoulé": {
    scene: "« En cette aube radieuse de notre glorieuse entreprise commune… » pour annoncer la réunion de lundi. Le style est ampoulé : gonflé comme une ampoule.",
  },
  "Corrélatif": {
    scene: "La chaleur monte, et les ventes de glaces montent avec. Les deux vont de pair : elles sont corrélatives.",
  },
  "Transversal": {
    scene: "Savoir parler en public, s'organiser, travailler en équipe : ça sert dans tous les métiers. Ce sont des compétences transversales.",
  },
  "Contingent": {
    scene: "Chaque région a reçu son contingent de vaccins : sa part, son nombre.",
    aussi: "Comme adjectif, contingent veut dire « qui aurait pu ne pas arriver », comme la contingence.",
  },
  "Iconographique": {
    scene: "Pour le livre, elle a cherché pendant des mois les tableaux, les gravures et les photos d'époque. Un énorme travail iconographique.",
  },
  "Abasourdi": {
    scene: "Il a gagné au loto. Il fixe le ticket, puis l'écran, puis le ticket. Il est abasourdi, comme assommé.",
  },
  "Radiesthésiste": {
    scene: "Un pendule au bout des doigts, il arpente le champ en disant qu'il va trouver l'eau sous la terre. C'est un radiesthésiste.",
    piege: "Aucune étude sérieuse n'a jamais confirmé ses pouvoirs.",
  },
  "Étatiste": {
    scene: "Les trains, l'énergie, la santé : pour l'étatiste, l'État doit tout gérer lui-même. Un mot de science politique, qui décrit une doctrine.",
  },
  "Vivandière": {
    scene: "Sur les champs de bataille de Napoléon, une femme suivait la troupe avec son tonnelet d'eau-de-vie et son panier de pain. La vivandière.",
  },
  "Trépidation": {
    scene: "Le métro qui vibre sous tes pieds, la ville qui ne dort jamais, la vie à cent à l'heure. La trépidation.",
  },
  "Stridence": {
    scene: "Le cri d'une alarme, une craie sur le tableau, un sifflet d'arbitre dans l'oreille. Une stridence qui transperce.",
  },
  "Impondérable": {
    scene: "Tout était prévu : le vol, l'hôtel, les visites. Puis une grève, un volcan, une valise perdue. Les impondérables.",
  },
  "Soutane": {
    scene: "Une longue robe noire boutonnée du col jusqu'aux pieds, que portaient les prêtres. La soutane.",
  },
  "Hypergamie": {
    scene: "Dans les romans de Balzac, l'ambitieux épouse une héritière plus riche et mieux née que lui. Un mariage d'ascension sociale : l'hypergamie.",
  },
  "Tyranneau": {
    scene: "Chef du club de pétanque, il fait la loi, distribue les punitions et adore donner des ordres. Un tyranneau : un petit tyran sur un petit royaume.",
  },
  "Jacobin": {
    scene: "En 1789, dans un ancien couvent de moines jacobins à Paris, des révolutionnaires se réunissent. Ils veulent une République forte et centralisée. Ce sont les Jacobins.",
    aussi: "Aujourd'hui, on dit « jacobin » de quelqu'un qui préfère que tout soit décidé depuis Paris.",
  },
  "Zélé": {
    scene: "Le stagiaire arrive à 7 heures, repart à 22 heures, et propose de laver la voiture du patron. Il est zélé : peut-être un peu trop.",
  },
  "Imminent": {
    scene: "Le ciel devient noir, le vent se lève, les premières gouttes tombent. L'orage est imminent.",
    piege: "Ne pas confondre avec « éminent » (remarquable).",
  },
  "Retors": {
    scene: "Il te sourit, te fait signer, et tu découvres trois mois plus tard la petite clause qui te coûte cher. Un homme d'affaires retors.",
  },
  "Cataclysme": {
    scene: "Un séisme, un raz-de-marée, une ville rasée en quelques minutes. Un cataclysme.",
    degainer: "Avec humour : « La disparition de ma tasse préférée : un cataclysme. »",
  },
  "Omnipotence": {
    scene: "Il contrôle la télé, les juges, l'armée. Son omnipotence fait peur : la toute-puissance.",
  },
  "Démiurge": {
    scene: "Chez Platon, un artisan divin façonne le monde à partir du chaos. Le démiurge.",
    aussi: "Aujourd'hui, un architecte qui dessine une ville entière ou un romancier qui crée tout un univers est un démiurge.",
  },
  "Remontrance": {
    scene: "« Tu rentres trop tard, tu ne ranges rien, tu ne m'écoutes jamais… » Chaque soir, les mêmes remontrances.",
  },
  "Fastueux": {
    scene: "Des lustres de cristal, une fontaine de champagne, des musiciens en habit. Un mariage fastueux.",
  },
  "Déclamatoire": {
    scene: "Il parle de son chat comme on lit une tragédie de Racine, la main sur le cœur. Un ton déclamatoire.",
  },
  "Ossianique": {
    scene: "Des landes écossaises noyées de brume, des héros morts au combat, des bardes qui pleurent. Un paysage ossianique.",
    origine: "D'après Ossian, un barde légendaire dont un poète du XVIIIe siècle prétendait avoir retrouvé les chants : Napoléon en raffolait.",
  },
  "Giroflée": {
    scene: "Sur les vieux murs, des fleurs jaunes et pourpres au parfum doux de miel. Les giroflées.",
    degainer: "« Une giroflée à cinq feuilles » : une gifle, la main laissant cinq doigts sur la joue.",
  },
  "Méandre": {
    scene: "Vue d'avion, la rivière dessine des boucles qui reviennent sur elles-mêmes. Ce sont des méandres.",
    aussi: "Au figuré, les méandres de l'administration sont ses détours interminables.",
  },
  "Triptyque": {
    scene: "Dans l'église, un tableau en trois panneaux : le centre, et deux volets qu'on peut refermer. Un triptyque.",
  },
  "Apothéose": {
    scene: "Le feu d'artifice monte, monte, et la dernière gerbe illumine tout le ciel. C'est l'apothéose.",
    origine: "À l'origine, l'élévation d'un héros ou d'un empereur au rang des dieux.",
  },
  "Enchevêtrement": {
    scene: "Les câbles derrière la télé : on ne sait plus lequel va où. Un enchevêtrement.",
  },
  "Tamiser": {
    scene: "Le pâtissier fait passer la farine au tamis. Et un abat-jour tamise la lumière : il l'adoucit.",
  },
  "Chaland": {
    scene: "Sur le canal, un bateau plat et lourd, chargé de sable, avance lentement. Un chaland.",
    aussi: "Autrefois, le chaland était aussi le client d'une boutique, d'où « achalandé ».",
  },
  "Pommadé": {
    scene: "Des cheveux plaqués et brillants comme dans les films des années 30. Il est pommadé.",
    aussi: "Au figuré : affecté, trop soigné pour être sincère.",
  },
  "Spectral": {
    scene: "Dans le brouillard, une silhouette pâle, floue, qui semble flotter. Une apparition spectrale.",
  },
  "Édulcoré": {
    scene: "Le conte original finissait très mal. La version pour enfants est édulcorée : adoucie au point de perdre sa force.",
  },
  "Tare": {
    scene: "Le menteur, le colérique, le paresseux : chacun a sa tare, son défaut grave.",
    aussi: "Sur une balance, « faire la tare », c'est retirer le poids du récipient.",
  },
  "Mansuétude": {
    scene: "Le juge aurait pu être sévère. Il a choisi la douceur, l'indulgence. Il a fait preuve de mansuétude.",
  },
  "Déréliction": {
    scene: "Seul, sans personne vers qui se tourner, avec le sentiment que même le ciel l'a oublié. La déréliction : un abandon total.",
  },
  "Douairière": {
    scene: "Une vieille dame très digne, avec perles et canne, qui règne sur le salon familial. La douairière.",
  },
  "Se draper": {
    scene: "Elle se drape dans un grand châle de soie. Et lui, accusé, se drape dans sa dignité : il prend un air noble pour ne pas répondre.",
  },
  "Objecter": {
    scene: "« C'est une super idée ! — Je peux objecter une chose ? On n'a pas d'argent. » Objecter, c'est opposer un argument.",
  },
  "Condescendance": {
    scene: "« C'est mignon, ce que tu fais. » Un sourire, une petite tape sur l'épaule, et le message est clair : il se croit au-dessus. Quelle condescendance !",
  },
  "Convexe": {
    scene: "Le dos d'une cuillère, bombé vers toi. Il est convexe. Le creux, de l'autre côté, est concave.",
  },
  "Enserrer": {
    scene: "Le lierre enserre le vieux chêne, de plus en plus fort, année après année.",
  },
  "Fourrager": {
    scene: "Elle fourrage dans son sac à la recherche de ses clés : tout sort, rien ne se trouve.",
  },
  "Érudit": {
    scene: "Il cite de mémoire Homère, Montaigne et un traité chinois du IVe siècle. Un érudit : son savoir est immense, nourri de lectures.",
  },
  "Enluminé": {
    scene: "Dans le vieux livre d'heures, chaque première lettre est peinte d'or et de bleu, entourée de fleurs et de petits personnages. Un manuscrit enluminé.",
  },
  "Zoomorphe": {
    scene: "Des cruches en forme de chouette, des chapiteaux sculptés de lions, des nuages qui ressemblent à des chats. Tout ce qui a forme animale est zoomorphe.",
  },
  "Tolstoïen": {
    scene: "Un roman immense, des familles entières, des guerres, et une question morale au cœur de tout. Une fresque tolstoïenne.",
  },
  "Bamboche": {
    scene: "Musique jusqu'à l'aube, bouteilles qui se vident, danses sur les tables. Une nuit de bamboche.",
  },
  "Féodalité": {
    scene: "Le seigneur donne une terre et sa protection ; le vassal lui jure fidélité et le sert à la guerre. Toute une société bâtie ainsi : la féodalité.",
  },
  "Fanfaron": {
    scene: "« Moi, je l'aurais battu les yeux fermés ! » Il bombe le torse, mais il n'a jamais rien fait. Un fanfaron.",
  },
  "Dilapidateur": {
    scene: "Héritier d'une fortune, il a tout dépensé en trois ans : voitures, fêtes, casino. Un dilapidateur.",
  },
  "Gruger": {
    scene: "Un faux artisan, un devis gonflé, un chèque encaissé, et plus de nouvelles. Elle s'est fait gruger.",
  },
  "Hussard": {
    scene: "Des cavaliers rapides au dolman brodé, sabre au clair, qui chargent en tête. Les hussards.",
    degainer: "« À la hussarde » : brutalement, sans délicatesse.",
  },
  "Matrone": {
    scene: "À Rome, la mère de famille respectée qui régnait sur la maison. Aujourd'hui, une femme d'âge mûr, imposante, qui ne se laisse pas faire.",
  },
  "Spéculaire": {
    scene: "Un reflet, un double, une image qui renvoie l'autre comme dans un miroir. Un jeu spéculaire.",
    origine: "Du latin « speculum », le miroir.",
  },
  "Caravansérail": {
    scene: "Sur la route de la soie, une grande auberge fortifiée où les caravanes de chameaux s'arrêtent pour la nuit. Un caravansérail.",
    aussi: "Au figuré, un lieu où se croisent des gens venus de partout.",
  },
  "Contemporanéité": {
    scene: "Molière et Louis XIV vivaient à la même époque : leur contemporanéité explique bien des choses dans ses pièces.",
  },
  "Bougonner": {
    scene: "Il range la vaisselle en marmonnant des reproches entre ses dents. Il bougonne.",
  },
  "Équivoque": {
    scene: "« Je te verrai ce soir. » Une promesse ou une menace ? Le ton est équivoque : il peut s'entendre de deux façons.",
  },
  "Condottiere": {
    scene: "Dans l'Italie de la Renaissance, les villes payaient des chefs de mercenaires pour faire leurs guerres. Les condottieri.",
  },
  "Didactique": {
    scene: "Un livre qui explique, un musée qui enseigne en jouant, un professeur qui veut que tu comprennes. Didactique.",
  },
  "Philistinisme": {
    scene: "« La peinture, ça sert à rien. Les livres, ça sert à rien. » L'indifférence fière à toute forme de culture. Le philistinisme.",
  },
  "Corporéité": {
    scene: "Ton cœur qui bat, tes mains qui ont froid, ta fatigue du soir. Tu n'es pas qu'un esprit : c'est ta corporéité.",
  },
  "Incorruptibilité": {
    scene: "On lui a offert de l'argent, des places, des honneurs. Il a tout refusé. Son incorruptibilité est légendaire.",
    origine: "Robespierre était surnommé « l'Incorruptible ».",
  },
  "Coryphée": {
    scene: "Dans le théâtre grec, devant le chœur, un acteur parle au nom de tous. Le coryphée.",
    aussi: "Au figuré, le meneur d'un groupe, d'un mouvement.",
  },
  "Rigorisme": {
    scene: "Pas de dessert, pas de rire à table, pas de sortie le dimanche : une morale appliquée sans aucune souplesse. Le rigorisme.",
  },
  "Puritanisme": {
    scene: "Un regard sévère sur tous les plaisirs, la danse, le vin, les baisers. Le puritanisme.",
  },
  "Émancipé": {
    scene: "À dix-huit ans, elle a quitté la maison, trouvé un travail, pris son propre appartement. La voilà émancipée : libre de toute tutelle.",
  },
  "Inhérent": {
    scene: "La fatigue fait partie du métier de jeune parent. Elle lui est inhérente : elle en fait partie par nature.",
  },
  "Cancans": {
    scene: "« Tu as vu qui sort avec qui ? » Au marché, sur le palier, à la sortie de l'école : les cancans vont bon train.",
  },
  "Convenances": {
    scene: "Ne pas parler la bouche pleine, ne pas arriver les mains vides, ne pas poser de questions sur le salaire. Les convenances.",
  },
  "Piètre": {
    scene: "Il voulait impressionner au karaoké. Il a chanté faux, oublié les paroles et fait piètre figure.",
  },
  "Promiscuité": {
    scene: "Dans le métro aux heures de pointe, collé contre des inconnus, le nez dans un sac à dos. La promiscuité.",
  },
  "Aseptique": {
    scene: "Au bloc opératoire, tout est stérilisé, sans un seul microbe. Aseptique.",
    aussi: "Au figuré, un bureau aseptique est froid, impersonnel, sans vie.",
  },
  "Impalpable": {
    scene: "Une poussière si fine qu'on ne la sent pas entre les doigts. Une tristesse qu'on ne peut nommer. Impalpables.",
  },
  "Holocauste": {
    scene: "Dans l'Antiquité, un sacrifice où l'animal offert aux dieux était entièrement brûlé.",
    aussi: "Le mot désigne aussi l'extermination des Juifs d'Europe par les nazis ; on emploie aussi le mot hébreu Shoah.",
  },
  "Incongru": {
    scene: "Un éclat de rire pendant un enterrement, un maillot de bain à un entretien d'embauche. Incongru : déplacé.",
  },
  "Misanthropie": {
    scene: "Il trouve les gens bruyants, hypocrites, égoïstes, et préfère la compagnie de son chien. La misanthropie.",
  },
  "Misogyne": {
    scene: "« Les femmes ne savent pas conduire. » Ce n'est pas une blague, c'est du mépris. Misogyne.",
  },
  "Présupposer": {
    scene: "En disant « Tu as arrêté de fumer ? », tu présupposes qu'il fumait : tu le tiens pour acquis sans le dire.",
  },
  "Épier": {
    scene: "Derrière le rideau, la voisine épie le moindre va-et-vient de la rue.",
  },
  "Juxtaposition": {
    scene: "Une église gothique à côté d'un gratte-ciel de verre. Une juxtaposition saisissante : côte à côte, sans lien.",
  },
  "Byronien": {
    scene: "Un héros sombre, beau, tourmenté, révolté contre le monde et ses règles. Un héros byronien.",
    origine: "D'après le poète anglais Lord Byron, mort de fièvre en Grèce, où il était venu soutenir la guerre d'indépendance.",
  },
  "Conjuration": {
    scene: "Une nuit, dans une cave, des conjurés jurent de renverser le prince. C'est une conjuration.",
    aussi: "C'est aussi une formule pour chasser les démons.",
  },
  "Carbonari": {
    scene: "Dans l'Italie du XIXe siècle, une société secrète se réunissait en se disant charbonniers, pour libérer et unifier le pays. Les carbonari.",
  },
  "Crisser": {
    scene: "Des pneus qui freinent sur l'asphalte, la neige sous les bottes, un ongle sur un tableau. Ça crisse.",
  },
  "Vocatif": {
    scene: "« Ô Rome, unique objet de mon ressentiment ! » Quand on appelle quelqu'un ou quelque chose directement, on emploie le vocatif.",
  },
  "Contrit": {
    scene: "La tête basse, les yeux sur ses chaussures, il bredouille des excuses. Il a l'air contrit : il regrette vraiment.",
  },
  "Ledit": {
    scene: "« Le locataire s'engage à entretenir le jardin. Ledit jardin comprend un potager. » Ledit : celui dont on vient de parler.",
  },
  "Autocompassion": {
    scene: "Tu as raté ton examen. Au lieu de te traiter d'idiot, tu te parles comme tu parlerais à un ami. C'est l'autocompassion.",
  },
  "Tabou": {
    scene: "L'argent, la mort, la santé mentale : dans certaines familles, on n'en parle jamais. Ce sont des tabous.",
    origine: "Un mot polynésien, rapporté par l'explorateur Cook : ce qui est sacré et interdit.",
  },
  "Consteller": {
    scene: "Une nuit d'été à la campagne : le ciel constellé d'étoiles. Et sa robe de soirée, constellée de petites perles.",
    degainer: "Pour un parcours semé d'épreuves : « Une vie constellée d'obstacles. »",
  },
  "Germer": {
    scene: "La graine se fend, une petite pousse verte apparaît. Elle germe. Et dans ta tête, une idée commence à germer.",
  },
  "Pictural": {
    scene: "La lumière sur la mer à six heures du soir, les couleurs du marché : une scène très picturale, on dirait un tableau.",
  },
  "Revêtir": {
    scene: "Le juge revêt sa robe noire avant d'entrer dans la salle. Et l'affaire, elle, revêt une importance capitale : elle prend cet aspect.",
  },

  // Série 12
  "Étreinte": {
    scene: "Sur le quai de la gare, après deux ans d'absence, ils se serrent si fort qu'ils en oublient le train. Une étreinte.",
  },
  "Intériorité": {
    scene: "Il ne dit presque rien, mais le roman nous fait entendre tout ce qui bouillonne en lui : ses doutes, ses peurs, ses rêves. Son intériorité.",
  },
  "Halo": {
    scene: "Les soirs de brume, un cercle de lumière pâle entoure la lune et chaque réverbère. Un halo.",
    aussi: "Au figuré, une star avance dans un halo de mystère.",
  },
  "Informe": {
    scene: "Une masse de pâte à modeler écrasée par un enfant, une silhouette dans le brouillard. Informe : sans forme nette.",
  },
  "Piété": {
    scene: "Chaque matin, à genoux devant la petite statue, elle prie. Sa piété est discrète et profonde.",
    aussi: "La « piété filiale », c'est l'amour respectueux d'un enfant pour ses parents.",
  },
  "Cruauté": {
    scene: "Le chat qui joue longtemps avec la souris avant de l'achever. La cruauté : le goût de faire souffrir.",
  },
  "Étoffe": {
    scene: "Chez le tailleur, il touche les rouleaux de laine, de soie, de velours. Des étoffes.",
    degainer: "« Avoir l'étoffe d'un chef » : avoir les qualités qu'il faut.",
  },
  "Tsigane": {
    scene: "Au coin du feu, un violon s'emballe, de plus en plus vite, et tout le monde se met à danser. La musique tsigane.",
    origine: "Les Tsiganes sont un peuple venu de l'Inde il y a des siècles, dispersé dans toute l'Europe.",
  },
  "Affect": {
    scene: "En psychologie, tes émotions, tes sentiments, ce que tu ressens avant même de le penser : tes affects.",
  },
  "Comble": {
    scene: "Il arrive en retard à son propre mariage, et en plus il a oublié les alliances. C'est le comble !",
    aussi: "Les combles, au pluriel, ce sont aussi les greniers sous le toit.",
  },
  "Transcender": {
    scene: "Sur scène, le chanteur fatigué disparaît : la musique le porte, le dépasse, l'élève. Elle le transcende.",
  },
  "Dévoué": {
    scene: "Trente ans au service de la même famille, toujours présente, toujours fidèle. Une gouvernante dévouée.",
  },
  "Chahuter": {
    scene: "Le prof tourne le dos : boulettes de papier, bruits d'animaux, rires étouffés. La classe chahute.",
  },
  "Unanimité": {
    scene: "« Qui est pour la pizza ? » Toutes les mains se lèvent. Adopté à l'unanimité.",
    degainer: "« Il ne fait pas l'unanimité » : certains l'aiment, d'autres non.",
  },
  "Charrette": {
    scene: "Une petite voiture à deux roues tirée par un âne.",
    aussi: "Au bureau, « être en charrette », c'est travailler toute la nuit pour finir à temps. Et « une charrette », c'est aussi une vague de licenciements.",
  },
  "Burn-out": {
    scene: "Des mois à tout donner, à dormir mal, à ne jamais dire non. Puis un matin, impossible de se lever. Le burn-out : un épuisement profond causé par le travail.",
  },
  "Vérolé": {
    scene: "Autrefois, un visage vérolé portait les traces de la variole. Aujourd'hui, en familier, un fichier vérolé est infecté par un virus.",
  },
  "Différenciant": {
    scene: "Cent boulangeries dans la ville, mais la sienne a un four à bois. C'est son atout différenciant.",
  },
  "Marginal": {
    scene: "Un détail marginal dans le rapport, une note en bas de page. Secondaire.",
    aussi: "Une personne marginale vit à l'écart des normes de la société.",
  },
  "Néoclassique": {
    scene: "L'Arc de triomphe, la Madeleine à Paris : des colonnes, des frontons, comme dans la Rome antique. C'est le style néoclassique, à la mode sous Napoléon.",
  },
  "Contrecoup": {
    scene: "La banque fait faillite à New York. Par contrecoup, une petite usine ferme en Bretagne.",
  },
  "Extrapoler": {
    scene: "Il a vu deux Parisiens pressés, et il en conclut que tous les Parisiens sont désagréables. Il extrapole.",
  },
  "Hyperbole": {
    scene: "« Je meurs de faim ! », « Je t'ai dit mille fois ! » Personne ne meurt, personne n'a compté. C'est une hyperbole : on exagère pour frapper.",
  },
  "Hyperboliser": {
    scene: "Un petit rhume devient « la pire grippe de sa vie ». Il hyperbolise tout.",
  },
  "Hypocrisie": {
    scene: "Il donne des leçons de générosité et ne laisse jamais de pourboire. Quelle hypocrisie !",
  },
  "Culpabilité": {
    scene: "Il a oublié l'anniversaire de sa mère. Toute la soirée, une petite voix lui reproche. La culpabilité.",
  },
  "Libéral": {
    scene: "Des parents libéraux laissent leurs enfants choisir. Un donateur libéral donne sans compter.",
    aussi: "En politique et en économie, le mot désigne une doctrine qui défend les libertés individuelles et le libre marché.",
  },
  "Subliminal": {
    scene: "Une image glissée dans un film, si brève que tu ne la vois pas consciemment. Et pourtant, elle t'a marqué. Un message subliminal.",
  },
  "Privatif": {
    scene: "« In- » dans « inutile », « dé- » dans « défaire », « a- » dans « amoral » : ces préfixes privatifs disent le manque ou le contraire.",
    aussi: "Un jardin privatif est réservé à un seul logement.",
  },
  "Rhétorique": {
    scene: "Le bon avocat ne dit pas seulement la vérité : il la construit, il choisit ses mots, son rythme, ses silences. C'est la rhétorique.",
    aussi: "Péjoratif : « Tout ça, c'est de la rhétorique » : de beaux discours vides.",
  },
  "Solvable": {
    scene: "Avant de prêter, la banque vérifie que tu pourras rembourser. Que tu es solvable.",
  },
  "Prohairesis": {
    scene: "La pluie, le trafic, l'avis des autres : ça ne dépend pas de toi. Ta façon d'y répondre, si. Cette faculté de choisir, Épictète l'appelait la prohairesis.",
  },
  "Interjection": {
    scene: "« Ah ! », « Hélas ! », « Aïe ! », « Fichtre ! » Des petits mots qui jaillissent avec l'émotion. Des interjections.",
  },
  "Voluptueux": {
    scene: "Un bain chaud, un carré de chocolat qui fond, des draps de soie. Un plaisir voluptueux, raffiné.",
  },
  "Travestissement": {
    scene: "Au carnaval, le travestissement est roi : masques, perruques, costumes. Et au figuré, travestir la vérité, c'est la déguiser.",
  },
  "Fugitif": {
    scene: "Le prisonnier évadé court dans la forêt : c'est un fugitif. Et l'arc-en-ciel, qui disparaît après cinq minutes, est un phénomène fugitif.",
  },
  "Dériseur": {
    scene: "Un vieux mot pour celui qui tourne tout en dérision, qui se moque de tout et de tous.",
  },
  "Rossinien": {
    scene: "L'orchestre accélère, monte, monte encore, avec des violons qui pétillent. Un crescendo rossinien.",
    origine: "Rossini, compositeur italien du « Barbier de Séville », célèbre pour ses crescendos endiablés.",
  },
  "Parqué": {
    scene: "Dans le car, trente touristes parqués comme des moutons. Enfermés à l'étroit.",
  },
  "Mantra": {
    scene: "En méditation, une syllabe répétée doucement, encore et encore. Un mantra.",
    aussi: "Au quotidien : « Un jour à la fois », c'est son mantra.",
  },
  "Doter": {
    scene: "La mairie a doté l'école d'une bibliothèque toute neuve. Elle l'en a pourvue.",
    aussi: "Autrefois, on dotait sa fille : on lui donnait une dot pour son mariage.",
  },
  "Cuber": {
    scene: "Le forestier mesure les troncs pour calculer le volume de bois. Il les cube.",
  },
  "Accabler": {
    scene: "Le soleil de plomb l'accable. Et ses collègues l'accablent de reproches : ils l'écrasent sous leur poids.",
  },
  "Corrupteur": {
    scene: "Dans les romans moraux, il entraîne le jeune homme innocent vers le jeu, l'alcool et la débauche. Le corrupteur.",
  },
  "Sentinelle": {
    scene: "Devant la tour, un soldat monte la garde toute la nuit, fusil à l'épaule. La sentinelle.",
  },
  "Savamment": {
    scene: "Un peu de sel, un peu de sucre, une pincée de piment : un plat savamment dosé.",
  },
  "Grailler": {
    scene: "« On va grailler ? J'ai trop la dalle. » Manger, en argot.",
  },
  "Lège": {
    scene: "Un navire lège rentre au port sans cargaison, léger et haut sur l'eau.",
    aussi: "Par extension, lège veut dire faible : « une concurrence assez lège ».",
  },
  "Protestantisme": {
    scene: "Au XVIe siècle, Luther puis Calvin contestent l'autorité du pape et appellent à revenir à la Bible. De cette Réforme naît le protestantisme.",
  },
  "Syphilis": {
    scene: "Une maladie qui a terrifié l'Europe pendant des siècles. Dans « Candide », Pangloss en est rongé, et il trouve encore le moyen de dire que tout est pour le mieux.",
  },
  "Écaillé": {
    scene: "La vieille porte bleue de la maison de vacances, dont la peinture part en petites plaques. Écaillée.",
  },
  "Providentiel": {
    scene: "Panne d'essence au milieu de nulle part, et soudain une dépanneuse surgit. Une arrivée providentielle.",
  },
  "Pédagogue": {
    scene: "Elle prend un sujet impossible et te le rend limpide, avec patience et une bonne histoire. Une vraie pédagogue.",
  },
  "Leibnizien": {
    scene: "« Nous vivons dans le meilleur des mondes possibles. » C'est l'idée leibnizienne, dont Voltaire se moque dans « Candide ».",
  },
  "Antifinaliste": {
    scene: "Le monde n'a pas de but caché, rien n'est écrit d'avance : les choses arrivent, c'est tout. Une pensée antifinaliste.",
  },
  "Allègrement": {
    scene: "Il traverse la ville allègrement, en sifflotant. Mais attention : il dépasse aussi allègrement son budget, avec un peu trop de légèreté.",
  },
  "Exalter": {
    scene: "Le poète exalte la beauté de la mer. Et la victoire exalte toute la ville : elle l'enthousiasme.",
  },
  "Cristallin": {
    scene: "L'eau d'un torrent de montagne, si pure qu'on voit chaque caillou au fond. Cristalline.",
    aussi: "Une voix cristalline est claire et pure.",
  },
  "Sémantique": {
    scene: "« Ce n'est pas un mensonge, c'est une vérité arrangée. » Ce n'est qu'une question de sémantique : de sens des mots.",
  },
  "Se rassasier": {
    scene: "Après la longue marche, il mange, et mange encore, jusqu'à être enfin rassasié.",
  },
  "Fragmentation": {
    scene: "Le vase tombe et éclate en mille morceaux. Et l'attention, entre les notifications, se fragmente aussi.",
  },
  "Polynymie": {
    scene: "Le poète portugais Pessoa écrivait sous des dizaines de noms, chacun avec sa vie, son style, sa biographie. La polynymie.",
  },
  "Fresque": {
    scene: "Au plafond de la chapelle Sixtine, Michel-Ange a peint sur l'enduit encore frais. Une fresque.",
    aussi: "Au figuré, un grand roman qui embrasse toute une époque est une fresque.",
  },
  "Spécificité": {
    scene: "La raclette, le reblochon, la tartiflette : chaque région a sa spécificité, ce qui n'appartient qu'à elle.",
  },
  "Gradation": {
    scene: "« Va, cours, vole, et nous venge ! » Chaque verbe va plus vite que le précédent. C'est une gradation.",
  },
  "Sommaire": {
    scene: "Au début du livre, la liste des chapitres : le sommaire.",
    aussi: "Comme adjectif : court, expéditif. « Une justice sommaire » ne prend pas le temps d'examiner.",
  },
  "Topographique": {
    scene: "Les collines, les rivières, les chemins, tout dessiné avec précision. Une carte topographique.",
  },
  "Ferveur": {
    scene: "Le stade entier qui chante pour son équipe sous la pluie. Une ferveur brûlante.",
  },
  "S'avérer": {
    scene: "Le petit hôtel paraissait miteux sur les photos. Il s'est avéré charmant.",
    piege: "« S'avérer vrai » est un pléonasme : avérer veut déjà dire « vrai ».",
  },
  "Brodé": {
    scene: "Sur le mouchoir de la grand-mère, des initiales brodées au fil bleu, point par point.",
  },
  "Sexophobie": {
    scene: "La peur, le malaise ou l'hostilité devant tout ce qui touche à la sexualité. La sexophobie.",
  },
  "Bestiaire": {
    scene: "Au Moyen Âge, de grands livres enluminés décrivaient les animaux, vrais ou fabuleux : le lion, la licorne, le pélican. Des bestiaires.",
    degainer: "L'appli a le sien, plein de créatures à découvrir.",
  },
  "Dévorant": {
    scene: "Une faim dévorante après la piscine. Une passion dévorante, qui consume tout le reste.",
  },
  "Ariostesque": {
    scene: "Des chevaliers qui volent sur des hippogriffes, des fous qui vont chercher leur raison sur la Lune, des aventures qui s'entrelacent avec ironie. Une fantaisie ariostesque.",
    origine: "D'après l'Arioste, l'auteur du Roland furieux, que Calvino adorait.",
  },
  "Abduction": {
    scene: "Le gazon est mouillé. Il a dû pleuvoir cette nuit. Partir d'un indice pour deviner l'explication la plus probable : c'est l'abduction, le raisonnement du détective.",
  },
  "Abdiquer": {
    scene: "Le roi retire sa couronne et la pose sur la table. Il abdique.",
    aussi: "Au figuré, abdiquer, c'est renoncer : « Il a abdiqué devant les difficultés. »",
  },
  "Absolutiste": {
    scene: "« L'État, c'est moi. » Un roi qui ne rend de comptes à personne. Un régime absolutiste.",
  },
  "Abscisse": {
    scene: "Sur le graphique, la ligne horizontale en bas : l'abscisse. La ligne verticale : l'ordonnée.",
  },
  "Adéquation": {
    scene: "Il aime les animaux, il est devenu vétérinaire. Une adéquation parfaite entre ce qu'il est et ce qu'il fait.",
  },
  "Affranchir": {
    scene: "Le maître signe un papier : l'esclave est libre. Il l'a affranchi.",
    aussi: "Affranchir une lettre, c'est payer le timbre. Et en argot, « affranchir quelqu'un », c'est le mettre au courant.",
  },
  "Affûté": {
    scene: "Le couteau du chef, aiguisé au point de trancher une tomate sans l'écraser. Affûté. Et après une bonne nuit, ton esprit l'est aussi.",
  },
  "Aliénant": {
    scene: "Le même geste, huit heures par jour, sur une chaîne d'usine, sans jamais savoir à quoi il sert. Un travail aliénant.",
  },
  "Allitération": {
    scene: "« Pour qui sont ces serpents qui sifflent sur vos têtes ? » Les s qui se répètent font entendre les serpents. C'est une allitération.",
    origine: "Racine, dans « Andromaque ».",
  },
  "Amadouer": {
    scene: "Un sourire, un compliment, une part de gâteau : il essaie d'amadouer sa mère avant d'annoncer la mauvaise note.",
  },
  "Amoncellement": {
    scene: "Sur son bureau, des piles de papiers, de livres et de tasses vides. Un amoncellement.",
  },
  "Anathème": {
    scene: "Au Moyen Âge, l'Église chasse un hérétique de la communauté des croyants. Elle jette l'anathème sur lui.",
    aussi: "Aujourd'hui, « jeter l'anathème », c'est condamner solennellement.",
  },
  "Ânonner": {
    scene: "« Le… pe… petit… cha… chat… » L'enfant lit en butant sur chaque syllabe. Il ânonne.",
  },
  "Anticléricalisme": {
    scene: "Au XIXe siècle, dans les cafés, on caricature les curés et on refuse qu'ils dirigent l'école. L'anticléricalisme.",
  },
  "Antonyme": {
    scene: "Chaud et froid. Grand et petit. Jour et nuit. Des antonymes : des mots de sens contraire.",
  },
  "Apogée": {
    scene: "La victoire en finale, le stade debout, son nom en une de tous les journaux. L'apogée de sa carrière.",
  },
  "Arborescence": {
    scene: "Dans ton ordinateur, un dossier contient des dossiers, qui en contiennent d'autres. Une arborescence, comme les branches d'un arbre.",
  },
  "Ardemment": {
    scene: "Elle souhaite ardemment réussir ce concours : de tout son cœur, avec passion.",
  },
  "Autodérision": {
    scene: "« Moi, danser ? J'ai le rythme d'un frigo. » Se moquer de soi avant que les autres ne le fassent. L'autodérision.",
  },
  "Badinage": {
    scene: "Des mots légers, des taquineries, un peu de galanterie, rien de grave. Le badinage.",
  },
  "Barbarisme": {
    scene: "« Ils croivent », « vous faisez », « malgré que » : des mots déformés. Des barbarismes.",
  },
  "Bas-relief": {
    scene: "Sur le mur du monument, des soldats sculptés qui se détachent à peine de la pierre. Un bas-relief.",
  },
  "Bluffeur": {
    scene: "Il n'a qu'une paire de deux, mais il mise tout en souriant. Au poker, c'est un bluffeur redoutable.",
  },
  "Boursouflure": {
    scene: "Une cloque sur la peinture, une enflure sur la peau. Et dans un discours, des grands mots qui gonflent sans rien dire : de la boursouflure.",
  },
  "Brassage": {
    scene: "Dans le marché de la ville, des épices d'Afrique, des fruits d'Asie, des langues de partout. Un brassage des cultures.",
  },
  "Cajoleur": {
    scene: "Il se colle à toi, te fait des yeux doux et te dit que tu es la meilleure… juste avant de demander un service. Cajoleur.",
  },
  "Calomnier": {
    scene: "Elle a inventé de toutes pièces une histoire de vol pour salir son collègue. Elle l'a calomnié.",
  },
  "Candeur": {
    scene: "« Pourquoi le monsieur dort dans la rue ? » La question d'un enfant, posée avec toute sa candeur : une innocence sans méfiance.",
  },
  "Carillonner": {
    scene: "Dimanche matin, les cloches de l'église carillonnent pour le mariage. Et la voisine carillonne la nouvelle à tout le quartier.",
  },

  // Série 13
  "Castagne": {
    scene: "« Ça va finir en castagne ! » À la sortie du bal, les esprits s'échauffent et les poings partent. La bagarre, en argot.",
  },
  "Cénacle": {
    scene: "Chaque jeudi soir, dans l'arrière-salle d'un café, les mêmes six poètes se lisent leurs vers. Un cénacle : un petit cercle d'initiés.",
    origine: "Le Cénacle était la salle où Jésus partagea son dernier repas avec ses apôtres.",
  },
  "Chipoter": {
    scene: "Il pousse les petits pois sur le bord de l'assiette, goûte un bout de viande, soupire. Il chipote.",
    aussi: "On chipote aussi sur des détails : « On ne va pas chipoter pour cinq minutes. »",
  },
  "Circonspection": {
    scene: "Il examine le champignon, le sent, consulte son livre, demande l'avis d'un voisin. Il le mange avec circonspection : avec une prudence réfléchie.",
  },
  "Clinquant": {
    scene: "Des chaînes en or massif, une montre énorme, une voiture dorée. Tout brille, mais rien n'a de goût. C'est clinquant.",
  },
  "Concasser": {
    scene: "Dans le mortier, le cuisinier écrase grossièrement les grains de poivre. Il les concasse.",
  },
  "Conciliant": {
    scene: "« Tu veux le film d'action ? D'accord, et on regarde ta comédie demain. » Elle est conciliante : elle cherche l'accord.",
  },
  "Concis": {
    scene: "« Je suis venu, j'ai vu, j'ai vaincu. » César résume une guerre en six mots. Concis.",
  },
  "Congénère": {
    scene: "Le chien aboie dès qu'il croise un de ses congénères au parc : un autre chien.",
    degainer: "Souvent avec ironie : « Il se méfie de ses congénères humains. »",
  },
  "Connotation": {
    scene: "« Mère » et « maman » désignent la même personne. Mais « maman » a une connotation de tendresse que « mère » n'a pas : un sens second, une couleur.",
  },
  "Conscientiser": {
    scene: "Une campagne d'affiches, une vidéo choc, un témoignage : on cherche à conscientiser les gens, à leur faire prendre conscience.",
  },
  "Consterner": {
    scene: "La nouvelle tombe : l'usine ferme. Silence dans la salle, regards baissés. Tout le monde est consterné.",
  },
  "Controversé": {
    scene: "La moitié de la salle l'adore, l'autre veut le faire taire. Un auteur controversé.",
  },
  "Courbettes": {
    scene: "Il se plie en deux devant le directeur, rit à toutes ses blagues et lui porte sa mallette. Il fait des courbettes.",
  },
  "Crémaillère": {
    scene: "Autrefois, on accrochait la marmite dans la cheminée à une tige crantée : la crémaillère. La pendre, c'était le dernier geste de l'emménagement, qu'on fêtait avec les amis.",
    degainer: "« Pendre la crémaillère » : fêter son nouveau logement.",
  },
  "Créationnisme": {
    scene: "Pour les créationnistes, chaque animal a été créé tel quel par Dieu, et l'évolution n'existe pas. Une croyance, pas une théorie scientifique.",
  },
  "Cryptologue": {
    scene: "Pendant la guerre, dans un manoir anglais, des cryptologues ont passé des nuits à casser le code secret des Allemands.",
  },
  "Cultuel": {
    scene: "Une église, une mosquée, une synagogue : ce sont des lieux cultuels, consacrés au culte.",
    piege: "Ne pas confondre avec « culturel ».",
  },
  "Dardé": {
    scene: "Elle tourne la tête, et son regard noir est dardé sur lui, comme une flèche.",
  },
  "Déchanter": {
    scene: "Il pensait que vivre à Paris, ce serait les cafés et les musées. Puis il a vu le loyer. Il a vite déchanté.",
  },
  "Déconcertant": {
    scene: "Il répond à chaque question par une autre question, en souriant. Déconcertant : ça te déroute.",
  },
  "Décousu": {
    scene: "Il commence par sa grand-mère, passe au foot, revient à ses impôts. Son discours est décousu : sans fil logique.",
  },
  "Dédaigner": {
    scene: "On lui offre un poste, il hausse les épaules et dédaigne la proposition, trop fier pour l'accepter.",
  },
  "Dédouaner": {
    scene: "« Ce n'est pas ma faute, c'est le système. » Il cherche à se dédouaner : à se libérer de sa responsabilité.",
    aussi: "Au sens propre, dédouaner une marchandise, c'est payer les droits de douane.",
  },
  "Se défausser": {
    scene: "Aux cartes, tu te débarrasses de ta carte la plus faible. Tu te défausses. Et au bureau, il se défausse du dossier sur son collègue.",
  },
  "Déférent": {
    scene: "Il se lève quand la vieille dame entre, l'appelle « madame », lui tend la meilleure chaise. Il est déférent.",
  },
  "Déferlement": {
    scene: "Les portes du magasin s'ouvrent pour les soldes : un déferlement de clients, comme une vague.",
  },
  "Défrichement": {
    scene: "Couper les ronces, arracher les souches, rendre la terre cultivable : le défrichement.",
    aussi: "Au figuré, c'est le premier travail sur un sujet nouveau.",
  },
  "Démanteler": {
    scene: "La police a démantelé le réseau : arrêté les chefs, saisi l'argent, fermé les planques. Tout est détruit.",
  },
  "Dénigrer": {
    scene: "Il ne rate jamais une occasion de dire que le travail de sa collègue est médiocre. Il la dénigre.",
  },
  "Dépeindre": {
    scene: "En quelques lignes, l'écrivain dépeint le village : les toits rouges, l'odeur de pain, le vieux chien sur la place.",
  },
  "Dépit": {
    scene: "Battu au dernier moment, il jette sa raquette par terre. Du chagrin mêlé de colère : du dépit.",
    degainer: "« En dépit de » : malgré. « Il est sorti en dépit de la pluie. »",
  },
  "Dépotoir": {
    scene: "Derrière le hangar, des vieux frigos, des pneus, des sacs éventrés. Un dépotoir.",
  },
  "Désillusion": {
    scene: "Il croyait que l'artiste qu'il admirait était un modèle de gentillesse. Puis il l'a rencontré. Quelle désillusion !",
  },
  "Désolation": {
    scene: "Après l'incendie, la forêt noire et fumante à perte de vue. Un paysage de désolation.",
  },
  "Discutailler": {
    scene: "Une heure à discutailler pour savoir si on met la nappe rouge ou la bleue. Des discussions sans fin sur des riens.",
  },
  "Dislocation": {
    scene: "Après la guerre, l'empire se défait, morceau par morceau. C'est la dislocation.",
    aussi: "En médecine, une épaule disloquée est sortie de son articulation.",
  },
  "Dissociation": {
    scene: "Séparer l'homme de l'œuvre, le travail de la vie privée, l'huile de l'eau. Une dissociation.",
  },
  "Dixit": {
    scene: "« La vie, c'est comme une bicyclette : il faut avancer pour ne pas perdre l'équilibre. » Einstein dixit : comme l'a dit Einstein.",
  },
  "Dudit": {
    scene: "« Le propriétaire dudit terrain s'engage… » Du terrain dont on vient de parler. La langue des notaires.",
  },
  "Écrouelles": {
    scene: "Le jour du sacre, le roi de France touchait les malades en disant : « Le roi te touche, Dieu te guérit. » Il était censé guérir les écrouelles, une maladie des ganglions.",
  },
  "Elliptique": {
    scene: "« Et alors ? — Et alors, rien. » Une réponse elliptique : elle laisse beaucoup de choses sous-entendues.",
    aussi: "En géométrie, une forme elliptique est un ovale. La Terre tourne autour du Soleil sur une orbite elliptique.",
  },
  "Émanation": {
    scene: "Une odeur qui monte des égouts, une chaleur qui sort de la terre. Des émanations.",
    aussi: "Au figuré, ce comité est l'émanation du peuple : il en provient.",
  },
  "Émasculer": {
    scene: "Au sens propre, castrer. Au figuré, émasculer une loi, c'est lui retirer tout ce qui faisait sa force.",
  },
  "Emblématique": {
    scene: "La tour Eiffel, emblématique de Paris : elle la symbolise mieux que n'importe quel monument.",
  },
  "Éminemment": {
    scene: "Un sujet éminemment sensible : au plus haut point.",
  },
  "Enchâssement": {
    scene: "Le diamant serti dans sa monture d'or. Et dans « Les Mille et Une Nuits », des histoires dans les histoires, comme des poupées russes. L'enchâssement.",
  },
  "Enchatonner": {
    scene: "Le bijoutier place la pierre dans le petit logement en or de la bague, le chaton, et referme les griffes. Il l'enchatonne.",
  },
  "Encyclique": {
    scene: "Une lettre solennelle du pape, envoyée aux évêques du monde entier sur une grande question. Une encyclique.",
  },
  "Enflure": {
    scene: "Après la piqûre de guêpe, le bras gonfle. L'enflure.",
    aussi: "Au figuré, l'enflure du style, c'est l'emphase. Et en familier, « espèce d'enflure ! » est une insulte.",
  },
  "Enguirlander": {
    scene: "Pour Noël, on enguirlande le sapin. Et quand il rentre à trois heures du matin, sa mère l'enguirlande : elle le réprimande vertement.",
  },
  "Ensorceleur": {
    scene: "Un sourire, une voix, un regard dont on ne peut se détacher. Un charme ensorceleur.",
  },
  "Entacher": {
    scene: "Une seule tache de vin sur la nappe blanche. Et une seule erreur peut entacher une carrière parfaite.",
  },
  "Escampette": {
    scene: "Le chat a renversé le vase. Il a pris la poudre d'escampette : il s'est enfui à toutes pattes.",
  },
  "Esquiver": {
    scene: "Le boxeur penche la tête, et le coup passe à côté. Il esquive. Et toi, tu esquives la question de ta tante sur tes projets.",
  },
  "Esthétisme": {
    scene: "Chez lui, chaque objet est choisi pour sa beauté, chaque livre aligné par couleur. Un culte de l'esthétisme.",
  },
  "Exécration": {
    scene: "Le traître est maudit par tout le village. Il est l'objet de l'exécration générale : une haine violente.",
  },
  "Exhaler": {
    scene: "Les roses exhalent leur parfum dans la chaleur du soir. Et le mourant exhale son dernier soupir.",
  },
  "Exhausser": {
    scene: "La maison est trop basse : on l'exhausse d'un étage.",
    piege: "Exhausser (rendre plus haut) ≠ exaucer (réaliser un vœu).",
  },
  "Exhaustivité": {
    scene: "Le dictionnaire veut tous les mots, sans exception. Il vise l'exhaustivité.",
  },
  "Exorbitant": {
    scene: "Vingt euros pour un café sur la place Saint-Marc ! Un prix exorbitant.",
    origine: "Littéralement : qui sort de l'orbite.",
  },
  "Exsangue": {
    scene: "Après l'accident, il est blanc comme un linge, vidé de son sang. Exsangue.",
    aussi: "Au figuré, un pays exsangue a été épuisé par la guerre.",
  },
  "Extase": {
    scene: "Devant le coucher de soleil sur la mer, elle oublie tout : le temps, le lieu, elle-même. L'extase.",
  },
  "Fastidieux": {
    scene: "Recopier à la main deux cents adresses, une par une. Une tâche fastidieuse : longue et monotone.",
  },
  "Farandole": {
    scene: "Au mariage, quelqu'un prend une main, puis une autre, et toute la salle se met à serpenter entre les tables. Une farandole.",
  },
  "Fioriture": {
    scene: "Des volutes, des dorures, des petits anges partout. Trop de fioritures.",
    degainer: "« Sans fioritures » : simplement, sans ornement.",
  },
  "Folichon": {
    scene: "Un dimanche de pluie, rien à la télé, le frigo vide. Ce n'est pas folichon.",
  },
  "Foisonnement": {
    scene: "Dans la jungle, des fleurs, des lianes, des insectes partout. Un foisonnement de vie.",
  },
  "Forceps": {
    scene: "Au sens propre, une pince pour aider un bébé à naître. Au figuré, un accord obtenu au forceps : avec énormément de peine.",
  },
  "Fourvoyer": {
    scene: "Un faux panneau, un GPS qui se trompe, et le voilà fourvoyé dans un chemin de terre. Égaré.",
  },
  "Fragmentaire": {
    scene: "Des pages manquantes, des phrases coupées. Le manuscrit retrouvé est fragmentaire.",
  },
  "Funeste": {
    scene: "Ce jour funeste où le navire a sombré. Une décision funeste, qui a mené au désastre.",
  },
  "Futile": {
    scene: "Des disputes futiles pour la place sur le canapé : sans importance.",
  },
  "Galéjer": {
    scene: "« Il a attrapé un poisson grand comme le bateau ! » Il galèje, à la marseillaise : il raconte des histoires inventées pour faire rire.",
  },
  "Geôlier": {
    scene: "Un trousseau de clés à la ceinture, il ferme les cellules chaque soir. Le geôlier.",
  },
  "Girouette": {
    scene: "Sur le toit de la ferme, un coq de fer qui tourne au gré du vent. Une girouette.",
    aussi: "Au figuré, une personne qui change d'avis au moindre souffle.",
  },
  "Niaque": {
    scene: "Score défavorable, deux minutes à jouer, et elle ne lâche rien. Elle a la niaque : la rage de gagner.",
  },
  "Goret": {
    scene: "Un petit cochon rose qui se roule dans la boue. Un goret.",
    aussi: "En familier, « espèce de goret ! » : un sale, un malpropre.",
  },
  "Goule": {
    scene: "Dans les légendes arabes, un démon qui rôde dans les cimetières la nuit et dévore les cadavres. La goule.",
  },
  "Héraut": {
    scene: "Sur la place du marché, un homme en livrée sonne la trompette et proclame la nouvelle loi du roi. Le héraut.",
    piege: "Ne pas confondre avec « héros ».",
  },
  "Hérésie": {
    scene: "Au Moyen Âge, contester un dogme de l'Église pouvait mener au bûcher. C'était une hérésie.",
    degainer: "Avec humour : « Mettre de la crème dans une carbonara ? Une hérésie ! »",
  },
  "Hybride": {
    scene: "Une voiture qui roule à l'essence et à l'électricité, une rose croisée de deux variétés. Hybride.",
  },
  "Idiomatique": {
    scene: "« It's raining cats and dogs » : il pleut des chats et des chiens, en anglais. Une expression idiomatique : propre à une langue, intraduisible mot à mot.",
  },
  "Idyllique": {
    scene: "Une petite maison au bord d'un lac, des montagnes au loin, le silence. Un cadre idyllique.",
  },
  "Illusionniste": {
    scene: "Il fait disparaître une colombe dans son chapeau et réapparaître ta montre dans ta poche. Un illusionniste.",
  },
  "Impotent": {
    scene: "Depuis sa chute, le vieil homme ne peut plus marcher qu'avec peine, aidé de deux cannes. Il est impotent.",
  },
  "Imputer": {
    scene: "On impute l'accident au mauvais temps : on lui en attribue la faute.",
  },
  "Inaltérable": {
    scene: "L'or ne rouille jamais, même après mille ans sous la terre. Inaltérable. Comme leur amitié.",
  },
  "Incomber": {
    scene: "« Il vous incombe de prévenir les familles. » Cette charge vous revient, à vous.",
  },
  "Inconduite": {
    scene: "Dans les romans anciens, un fils renvoyé de l'école pour inconduite : une mauvaise conduite morale.",
  },
  "Induire": {
    scene: "Un panneau mal placé peut induire les automobilistes en erreur : les tromper.",
  },
  "Inébranlable": {
    scene: "Les vagues frappent, la tempête souffle : le phare reste debout. Inébranlable. Comme sa confiance en toi.",
  },
  "Inquisiteur": {
    scene: "Au Moyen Âge, le juge de l'Inquisition interrogeait les suspects d'hérésie. L'inquisiteur.",
    aussi: "« Un regard inquisiteur » fouille et soupçonne.",
  },
  "Insaisissable": {
    scene: "La police le traque depuis des années, il change de nom, de ville, de visage. Un voleur insaisissable.",
  },
  "Insubordonné": {
    scene: "Le soldat refuse l'ordre, tourne le dos à l'officier. Il est insubordonné.",
  },
  "Insuffler": {
    scene: "L'entraîneur insuffle du courage à son équipe : il le leur fait passer, comme un souffle.",
  },
  "Insurrection": {
    scene: "Des barricades dans les rues, la foule qui marche sur le palais. Une insurrection : un soulèvement contre le pouvoir.",
  },
  "Intercaler": {
    scene: "Entre deux rendez-vous, elle intercale un café avec une amie : elle le glisse entre les deux.",
  },
  "Intransitif": {
    scene: "« Il dort. » Pas besoin de complément. Dormir est un verbe intransitif. « Il mange une pomme » : manger, lui, est transitif.",
  },
  "Intrigant": {
    scene: "Il flatte l'un, trahit l'autre, glisse un mot à l'oreille du patron. Un intrigant qui manœuvre pour arriver à ses fins.",
    piege: "Ne pas confondre avec « intriguant » (le participe : en intriguant).",
  },
  "Irruption": {
    scene: "En pleine réunion, la porte s'ouvre à la volée et un livreur entre en criant. Une irruption.",
    piege: "Irruption (entrer brusquement) ≠ éruption (sortir brusquement, comme un volcan).",
  },
  "Jalonner": {
    scene: "Des cailloux blancs marquent le chemin du randonneur. Et sa vie a été jalonnée d'épreuves.",
  },
  "Jongleur": {
    scene: "Au Moyen Âge, il allait de château en château, chantait, racontait des histoires et lançait des balles en l'air. Le jongleur.",
  },
  "Jubiler": {
    scene: "Son rival a raté son examen. Il ne dit rien, mais intérieurement, il jubile.",
  },
  "Lapidaire": {
    scene: "« Non. » Une réponse lapidaire : brève et frappante, comme gravée dans la pierre.",
    aussi: "Le lapidaire, c'est aussi l'artisan qui taille les pierres précieuses.",
  },
  "Lichette": {
    scene: "« Juste une lichette de gâteau, pas plus ! » Un tout petit morceau.",
  },

  // Série 14
  "Loquace": {
    scene: "D'habitude, il répond par oui ou par non. Mais ce soir, après deux verres, il raconte toute sa vie. Il est loquace.",
  },
  "Locution": {
    scene: "« Au fur et à mesure », « tout à coup », « à cause de » : des mots soudés ensemble, qu'on ne sépare pas. Des locutions.",
  },
  "Latent": {
    scene: "Personne ne dit rien, mais le conflit est là, sous la surface, prêt à éclater. Un conflit latent.",
  },
  "Liturgique": {
    scene: "Les chants, les couleurs des habits du prêtre, l'ordre des prières : tout ce qui est liturgique concerne les rites du culte.",
  },
  "Mandibule": {
    scene: "Sous la loupe, la fourmi serre une miette entre ses deux pinces. Ses mandibules.",
  },
  "Manigancer": {
    scene: "Ils se taisent dès que tu entres, et échangent des regards complices. Qu'est-ce qu'ils manigancent ?",
  },
  "Marsouin": {
    scene: "Au large de la Bretagne, un petit dauphin gris sort la tête de l'eau. Un marsouin.",
    aussi: "Les soldats de l'infanterie de marine sont surnommés les marsouins.",
  },
  "Médisance": {
    scene: "« Tu sais ce qu'on dit sur elle ? » Les ragots malveillants qui courent de bouche en bouche. La médisance.",
    piege: "La médisance dit du mal de quelqu'un, même si c'est vrai ; la calomnie invente.",
  },
  "Mélopée": {
    scene: "Dans le désert, un chamelier chante, toujours sur les mêmes notes, une mélodie lente et triste. Une mélopée.",
  },
  "Ménagerie": {
    scene: "Deux chats, un chien, un lapin, trois poissons et un perroquet qui parle. Chez eux, c'est une vraie ménagerie.",
  },
  "Minaudier": {
    scene: "Petite voix, battements de cils, moue boudeuse pour obtenir ce qu'il veut. Il est minaudier.",
  },
  "Monocorde": {
    scene: "Le conférencier parle sans aucune variation de ton, comme une seule corde de violon. Une voix monocorde.",
  },
  "Mosaïque": {
    scene: "À Ravenne, des milliers de petits cubes de verre et de pierre forment le visage d'un empereur. Une mosaïque.",
    aussi: "Au figuré, une ville est une mosaïque de cultures.",
  },
  "Mystification": {
    scene: "Le faux Vermeer exposé dans un grand musée pendant des années. Une mystification magistrale.",
  },
  "Narguer": {
    scene: "Il a eu la dernière part de gâteau, et il la mange lentement devant toi en souriant. Il te nargue.",
  },
  "Néfaste": {
    scene: "Les écrans avant de dormir ont un effet néfaste sur le sommeil : nuisible.",
  },
  "Obnubilé": {
    scene: "Il ne parle que de son nouveau téléphone, ne pense qu'à lui, n'entend plus rien d'autre. Il est obnubilé.",
  },
  "Obsolète": {
    scene: "Les disquettes, le Minitel, le fax : des technologies obsolètes, hors d'usage.",
  },
  "Octosyllabe": {
    scene: "« Maître Corbeau, sur un arbre perché » : huit syllabes. Un octosyllabe.",
  },
  "Officieux": {
    scene: "« Ce n'est pas encore annoncé, mais c'est sûr à 99 %. » Une information officieuse.",
  },
  "Oisif": {
    scene: "Pas de travail, pas de projet, pas d'obligation : il passe ses journées à regarder passer les nuages. Il est oisif.",
  },
  "Olfactif": {
    scene: "L'odeur du pain chaud, du chlore, de l'herbe coupée : ta mémoire olfactive te ramène des années en arrière.",
  },
  "Onéreux": {
    scene: "Un week-end à Venise en plein carnaval : onéreux. Ça coûte cher.",
  },
  "Opulence": {
    scene: "Des lustres de cristal, une piscine intérieure, trois voitures de luxe. Ils vivent dans l'opulence.",
  },
  "Orfèvre": {
    scene: "Penché sur son établi, l'artisan cisèle un calice d'argent. L'orfèvre.",
    degainer: "« Être orfèvre en la matière » : s'y connaître parfaitement.",
  },
  "Ostentation": {
    scene: "Il sort sa montre en or toutes les cinq minutes pour regarder l'heure. Quelle ostentation !",
  },
  "Outrance": {
    scene: "Maquillage à outrance, gestes à outrance, cris à outrance. L'excès en tout.",
  },
  "Pacotille": {
    scene: "Des bijoux qui noircissent après deux jours, des souvenirs en plastique made in ailleurs. De la pacotille.",
  },
  "Panard": {
    scene: "« Aïe, il m'a marché sur le panard ! » Le pied, en argot.",
    degainer: "« C'est le panard ! » : c'est le pied, un grand plaisir.",
  },
  "Papoter": {
    scene: "Sur le banc du parc, deux voisines papotent depuis une heure : le temps, les petits-enfants, la recette de la tarte.",
  },
  "Parabole": {
    scene: "Le fils qui dilapide tout, revient, et que son père accueille en fête. Une histoire simple pour une grande leçon : une parabole.",
    aussi: "En maths, une parabole est une courbe. Et sur le toit, l'antenne parabolique en a la forme.",
  },
  "Parages": {
    scene: "« Tu es dans les parages ? Passe prendre un café ! » Dans le coin, les environs.",
  },
  "Parasitisme": {
    scene: "Le gui qui pousse sur l'arbre et se nourrit de sa sève. Et le colocataire qui vide ton frigo sans jamais rien acheter. Du parasitisme.",
  },
  "Parodique": {
    scene: "Un faux journal télévisé où le présentateur annonce que les pigeons ont pris le pouvoir. Une émission parodique.",
  },
  "Pâtir": {
    scene: "Ses notes ont pâti de ses nuits de jeux vidéo : elles en ont souffert.",
  },
  "Patois": {
    scene: "Sa grand-mère parle encore le patois du village, des mots que ses petits-enfants ne comprennent plus.",
  },
  "Se pavaner": {
    scene: "Nouvelle veste, lunettes de soleil, il traverse la terrasse lentement pour qu'on le voie. Il se pavane, comme un paon.",
  },
  "Pépère": {
    scene: "Un dimanche pépère : canapé, plaid et série. Tranquille, sans souci.",
    aussi: "En familier, c'est aussi le grand-père.",
  },
  "Pépite": {
    scene: "Dans la rivière, le chercheur d'or secoue son tamis, et un petit éclat jaune brille. Une pépite.",
    aussi: "Au figuré, une pépite est un trésor caché : un petit restaurant, un livre méconnu.",
  },
  "Péripétie": {
    scene: "Le train annulé, le chauffeur perdu, l'hôtel complet : notre voyage a connu bien des péripéties.",
  },
  "Personnification": {
    scene: "« Le vent hurle », « la ville s'éveille », « la mort frappe à la porte ». On donne une vie humaine à ce qui n'en a pas. C'est la personnification.",
  },
  "Pestilence": {
    scene: "Les poubelles en plein été, après une grève de dix jours. Une pestilence.",
    aussi: "Autrefois, une pestilence était aussi une épidémie, comme la peste.",
  },
  "Pétoche": {
    scene: "Une porte qui grince dans le noir, et il se cache sous la couette. Il a la pétoche : la peur.",
  },
  "Phylogénie": {
    scene: "L'homme et le chimpanzé, cousins ; la baleine et l'hippopotame, aussi. La phylogénie dessine l'arbre de famille de tous les êtres vivants.",
  },
  "Piastre": {
    scene: "Une vieille pièce dans un coffre de pirate. Et au Québec, « une piasse », c'est un dollar.",
  },
  "Piédestal": {
    scene: "La statue du général, perchée sur son socle de marbre. Le piédestal.",
    degainer: "« Mettre quelqu'un sur un piédestal » : l'idolâtrer.",
  },
  "Pinailler": {
    scene: "« Tu as écrit 3,5 alors que c'est 3,49. » On ne va pas pinailler pour un centime ! Ergoter sur des détails.",
  },
  "Platonique": {
    scene: "Ils s'écrivent des lettres passionnées depuis des années, sans jamais s'être embrassés. Un amour platonique.",
  },
  "Plénitude": {
    scene: "Assis au sommet de la montagne après cinq heures de marche, le soleil qui se lève, plus rien ne manque. La plénitude.",
  },
  "Plérôme": {
    scene: "Pour les gnostiques des premiers siècles, au-delà de notre monde imparfait existe un royaume de lumière pure, la plénitude divine. Le plérôme.",
  },
  "Pognon": {
    scene: "« T'as du pognon pour le resto ? » De l'argent, en argot.",
  },
  "Pointilleux": {
    scene: "Il vérifie que les couverts sont parfaitement alignés et que le pli de la serviette est droit. Pointilleux.",
  },
  "Poseur": {
    scene: "Il cite des philosophes qu'il n'a pas lus et prend des airs pensifs devant les tableaux. Un poseur.",
  },
  "Potasser": {
    scene: "La veille de l'examen, elle potasse ses fiches jusqu'à minuit : elle révise avec acharnement.",
  },
  "Prémices": {
    scene: "Les premiers bourgeons en février, les prémices du printemps. Les tout premiers signes.",
    piege: "Prémices (les débuts) ≠ prémisses (les points de départ d'un raisonnement).",
  },
  "Prémunir": {
    scene: "Un vaccin avant le voyage, une assurance avant l'hiver : on se prémunit contre les ennuis.",
  },
  "Prestidigitateur": {
    scene: "Une pièce passe d'une main à l'autre, disparaît, réapparaît derrière ton oreille. Le prestidigitateur.",
    origine: "« Doigts prestes » : des doigts rapides.",
  },
  "Primeur": {
    scene: "« Je te réserve la primeur de la nouvelle ! » Tu es le premier à la savoir.",
    aussi: "Les primeurs, ce sont aussi les premiers fruits et légumes de la saison.",
  },
  "Prisme": {
    scene: "Un rayon de soleil traverse le bloc de verre et ressort en arc-en-ciel sur le mur. Un prisme.",
    aussi: "Au figuré, voir le monde à travers le prisme de ses peurs, c'est le voir déformé.",
  },
  "Proscrire": {
    scene: "Dans la cuisine du chef, le micro-ondes est proscrit : interdit. Et sous la Terreur, les ennemis de la Révolution étaient proscrits : bannis.",
  },
  "Psaume": {
    scene: "« Le Seigneur est mon berger, je ne manque de rien. » Un chant sacré de la Bible. Un psaume.",
  },
  "Putréfaction": {
    scene: "Dans le compost, les épluchures se décomposent, lentement. La putréfaction.",
  },
  "Quémander": {
    scene: "Le chien s'assoit près de la table, la tête penchée, les yeux humides, et quémande un bout de viande.",
  },
  "Raboter": {
    scene: "La porte frotte contre le sol : le menuisier passe le rabot pour enlever quelques millimètres de bois.",
    aussi: "Au figuré, on rabote un budget : on le réduit.",
  },
  "Ravissement": {
    scene: "Elle ouvre la boîte, et découvre le petit chiot. Ses yeux s'illuminent : le ravissement.",
  },
  "Rebelotte": {
    scene: "À la belote, le joueur pose la reine d'atout après le roi et annonce : « Rebelotte ! »",
    degainer: "« Et rebelotte ! » : et ça recommence.",
  },
  "Reliquaire": {
    scene: "Dans la cathédrale, une petite boîte en or, couverte de pierres précieuses, contient un os de saint. Le reliquaire.",
  },
  "Reluire": {
    scene: "Les chaussures cirées, l'argenterie astiquée, la voiture lavée. Tout reluit.",
    degainer: "« Passer la brosse à reluire » : flatter.",
  },
  "Remembrement": {
    scene: "Autrefois, un paysan avait vingt petits champs dispersés. On les a regroupés en un seul grand. Le remembrement.",
  },
  "Résignation": {
    scene: "Le train est annulé, il n'y en a pas d'autre avant demain. Il soupire et s'assoit. La résignation.",
  },
  "Ressasser": {
    scene: "Cette dispute d'il y a trois ans, il la ressasse encore chaque soir : il y repense sans cesse.",
  },
  "Rétorquer": {
    scene: "« Tu es toujours en retard ! — Et toi, toujours en avance ! » rétorque-t-il. Il renvoie l'argument.",
  },
  "Rétribuer": {
    scene: "Trois jours de travail pour le déménagement, et il refuse d'être rétribué. Il ne veut pas être payé.",
  },
  "Réverbère": {
    scene: "Dans la rue pavée, la nuit, les lampes de fer forgé jettent des cercles de lumière jaune. Les réverbères.",
  },
  "Roublard": {
    scene: "Il connaît tous les trucs pour ne jamais payer sa tournée. Un vieux roublard : rusé et malin.",
  },
  "Roupillon": {
    scene: "Après le déjeuner, vingt minutes sur le canapé : un petit roupillon.",
  },
  "Rugissement": {
    scene: "Dans la savane, un rugissement fait trembler l'air : le lion. Et le moteur de la moto de sport aussi.",
  },
  "Sacramentel": {
    scene: "« Je vous déclare mari et femme. » Les mots qu'on prononce toujours, à l'identique, au moment solennel. Une formule sacramentelle.",
  },
  "Sagouin": {
    scene: "Un petit singe d'Amérique du Sud. Et en familier, celui qui mange en mettant de la sauce partout : un sagouin.",
  },
  "Salvateur": {
    scene: "Après trois heures de marche au soleil, une source d'eau fraîche. Salvatrice : elle sauve.",
  },
  "Sanctuariser": {
    scene: "Cette forêt est protégée pour toujours, personne ne pourra jamais y construire. On l'a sanctuarisée.",
    aussi: "Au figuré : « Je sanctuarise mon dimanche : pas de travail. »",
  },
  "Savourer": {
    scene: "La première bouchée de fraise de l'été : tu fermes les yeux et tu prends ton temps. Tu la savoures.",
  },
  "Sédentarité": {
    scene: "Assis au bureau, assis dans la voiture, assis devant la télé. La sédentarité : vivre sans presque bouger.",
  },
  "Séminal": {
    scene: "Ce premier album a inspiré tous les groupes qui sont venus après. Une œuvre séminale : fondatrice.",
  },
  "Servilement": {
    scene: "Il répète servilement chaque mot du patron, sans jamais oser donner son avis.",
  },
  "Servitude": {
    scene: "Le serf ne pouvait ni quitter sa terre, ni se marier sans l'accord du seigneur. La servitude.",
  },
  "Somptuosité": {
    scene: "Les plafonds dorés, les miroirs, les tapisseries : la somptuosité de Versailles.",
  },
  "Souillon": {
    scene: "Dans les vieux contes, la petite servante de cuisine couverte de suie, qu'on appelait par mépris la souillon.",
  },
  "Stridulation": {
    scene: "Une après-midi d'été en Provence : le chant des cigales, sans fin. Leur stridulation.",
  },
  "Succinct": {
    scene: "« Résume-moi le film en trois mots. » Une réponse succincte : brève.",
    piege: "On prononce « suk-sin ».",
  },
  "Surélever": {
    scene: "La maison est inondable : on la surélève d'un mètre sur des pilotis.",
  },
  "Tarauder": {
    scene: "Est-ce qu'il a eu raison de partir ? La question le taraude, le ronge, nuit après nuit.",
  },
  "Tarir": {
    scene: "En plein été, la source finit par tarir : plus une goutte.",
    degainer: "« Ne pas tarir d'éloges » : faire des compliments sans fin.",
  },
  "Tarpin": {
    scene: "« Il fait tarpin chaud ! » À Marseille, tarpin veut dire très, beaucoup.",
  },
  "Tartarinade": {
    scene: "Il raconte avoir chassé le lion en Afrique… alors qu'il n'a jamais quitté son village. Une tartarinade.",
    origine: "Tartarin de Tarascon, le héros vantard d'Alphonse Daudet.",
  },
  "Taxinomie": {
    scene: "Règne, embranchement, classe, ordre, famille, genre, espèce. Le rangement du vivant en tiroirs. La taxinomie.",
    piege: "On dit aussi « taxonomie ».",
  },
  "Télégraphique": {
    scene: "« Arrivé. Fatigué. Rappelle demain. » Pas un mot de trop. Un style télégraphique.",
    origine: "Au temps du télégraphe, chaque mot coûtait cher.",
  },
  "Tendancieux": {
    scene: "Le journal ne cite que les témoins qui vont dans son sens. Un article tendancieux : il cache mal son parti pris.",
  },
  "Terreau": {
    scene: "Une terre noire et riche où tout pousse. Le terreau.",
    aussi: "Au figuré, la misère est le terreau de la révolte : le milieu où elle grandit.",
  },
  "Titulariser": {
    scene: "Après des années de contrats précaires, elle est enfin titularisée : son poste devient définitivement le sien.",
  },
  "Tollé": {
    scene: "L'annonce de la hausse des prix déclenche un tollé : des cris d'indignation de partout.",
  },
  "Transcendantalisme": {
    scene: "Thoreau part vivre seul deux ans dans une cabane au bord d'un lac, pour écouter la nature et lui-même. C'est l'esprit du transcendantalisme américain.",
  },
  "Transgressif": {
    scene: "Un artiste qui expose ce qu'on n'ose pas montrer, qui brise les tabous de son époque. Une œuvre transgressive.",
  },
  "Trimer": {
    scene: "Douze heures par jour sur le chantier, sous la pluie, pour un petit salaire. Il trime.",
  },
  "Trinquer": {
    scene: "« À ta santé ! » Les verres s'entrechoquent. On trinque.",
    aussi: "En familier, trinquer, c'est aussi subir les conséquences : « Ce sont toujours les mêmes qui trinquent. »",
  },
  "Trois-mâts": {
    scene: "Toutes voiles dehors, un grand voilier à trois mâts fend l'océan. Un trois-mâts.",
  },

  // Série 15
  "Unilatéral": {
    scene: "Il a décidé seul de rompre le contrat, sans demander l'avis de l'autre partie. Une décision unilatérale : d'un seul côté.",
  },
  "Va-tout": {
    scene: "Il ne lui reste qu'une poignée de jetons. Il les pousse tous au centre de la table. Il joue son va-tout : il risque tout.",
  },
  "Verticalité": {
    scene: "Les gratte-ciel de New York, tout en hauteur. Leur verticalité donne le vertige.",
    aussi: "Dans une entreprise, la verticalité, c'est une hiérarchie où les ordres descendent d'en haut.",
  },
  "Vitupération": {
    scene: "Le critique publie trois pages de reproches furieux contre le film. Une vitupération : un blâme violent.",
  },
  "Volage": {
    scene: "Une semaine avec l'une, la suivante avec l'autre, jamais de promesse. Un cœur volage.",
  },
  "Volatil": {
    scene: "Ouvre un flacon de parfum, et l'odeur se répand puis disparaît : le parfum est volatil, il s'évapore.",
    aussi: "Au figuré, un marché volatil change brutalement d'un jour à l'autre.",
  },
  "Martingale": {
    scene: "Au casino, il double sa mise à chaque perte, persuadé qu'il finira forcément par gagner. Sa martingale le ruine en une soirée.",
    aussi: "C'est aussi la demi-ceinture cousue au dos d'un manteau.",
  },
  "Corrélat": {
    scene: "La liberté a un corrélat : la responsabilité. L'une ne va pas sans l'autre.",
  },
  "Inusité": {
    scene: "« Gourgandine », « vespasienne », « ribaude » : des mots que plus personne n'emploie. Ils sont inusités.",
  },
  "Rétrospectivement": {
    scene: "Sur le moment, il trouvait ce job horrible. Rétrospectivement, c'est là qu'il a tout appris.",
  },
  "Pêle-mêle": {
    scene: "Dans la valise, chaussettes, livres, chargeur et brosse à dents, jetés pêle-mêle.",
  },
  "Synapse": {
    scene: "Entre deux neurones, un minuscule espace où passe le message nerveux. Chaque fois que tu apprends un mot, de nouvelles synapses se renforcent.",
  },
  "Archétype": {
    scene: "Le vieux sage, le héros qui part à l'aventure, le mentor qui meurt : des personnages qu'on retrouve dans toutes les histoires. Des archétypes.",
  },
  "Comptine": {
    scene: "« Am, stram, gram, pic et pic et colégram… » Le doigt qui passe d'un enfant à l'autre pour désigner celui qui « l'est ». Une comptine.",
  },
  "Balbutiant": {
    scene: "Les premiers mots d'un bébé, hésitants. Et l'aviation en 1905 : une science encore balbutiante, à ses tout débuts.",
  },
  "Continuum": {
    scene: "Le passé, le présent, le futur forment une ligne sans coupure. Un continuum.",
    aussi: "Einstein parle du continuum espace-temps.",
  },
  "Objectiver": {
    scene: "Elle écrit sa colère sur une feuille, puis la relit comme si c'était celle d'une autre. Elle objective son émotion pour mieux la comprendre.",
  },
  "Précariser": {
    scene: "Des contrats d'un mois, renouvelés ou pas au dernier moment. On précarise les salariés : on rend leur vie instable.",
  },
  "Atypique": {
    scene: "Ancien boulanger devenu astronaute, puis peintre : un parcours atypique.",
  },
  "S'étioler": {
    scene: "La plante oubliée dans le placard pâlit, s'allonge, se fane. Elle s'étiole. Et une amitié qu'on n'entretient pas aussi.",
  },
  "Paupérisation": {
    scene: "Un quartier où les commerces ferment un à un, où les familles s'appauvrissent année après année. La paupérisation.",
  },
  "Écumer": {
    scene: "La mer en furie écume contre les rochers. Et lui écume les brocantes chaque dimanche, pour tout rafler.",
  },
  "Repu": {
    scene: "Après le repas de Noël, il se cale dans le fauteuil, déboutonne sa ceinture et soupire : « Je suis repu. »",
  },
  "Joute": {
    scene: "Deux chevaliers en armure se lancent l'un contre l'autre au galop, lance en avant. Une joute.",
    degainer: "« Une joute verbale » : un duel de mots, comme dans le duel d'insultes de l'appli.",
  },
  "Podagre": {
    scene: "Le gros orteil gonflé, brûlant, impossible à poser par terre. La podagre, la goutte du pied, maladie des gourmets d'autrefois.",
    origine: "Lucien de Samosate, auteur grec du IIe siècle, en a fait une tragédie comique.",
  },
  "Comédon": {
    scene: "Devant le miroir, un petit point noir sur le nez. Un comédon.",
  },
  "Docte": {
    scene: "D'une voix docte, il explique l'histoire de la fourchette depuis l'Antiquité. Savant, avec une pointe de pédanterie.",
  },
  "Dais": {
    scene: "Au-dessus du trône, un toit de velours brodé d'or, soutenu par quatre colonnes. Le dais.",
  },
  "Combinatoire": {
    scene: "Avec cinq chemises et quatre pantalons, combien de tenues ? Vingt. C'est de la combinatoire : l'art de compter les combinaisons.",
  },
  "Aristotélicien": {
    scene: "Classer, définir, raisonner pas à pas, chercher la juste mesure entre deux excès. Une démarche aristotélicienne.",
  },
  "Immutabilité": {
    scene: "Les lois de la physique ne changent pas, ici ou à l'autre bout de l'univers. Leur immutabilité est rassurante.",
  },
  "Jaspe": {
    scene: "Une pierre dure aux veines rouges, vertes ou jaunes, qu'on polissait pour en faire des coupes et des bijoux. Le jaspe.",
  },
  "Péripatéticien": {
    scene: "Aristote enseignait en marchant sous les arcades du Lycée, ses élèves derrière lui. Ses disciples étaient appelés les péripatéticiens.",
    piege: "Au féminin, « péripatéticienne » est devenu, par plaisanterie, un mot pour prostituée.",
  },
  "Subversion": {
    scene: "Des affiches détournées, des chansons moqueuses, des idées qui sapent l'autorité de l'intérieur. La subversion.",
  },
  "Atomisme": {
    scene: "Il y a vingt-cinq siècles, Démocrite affirme que tout est fait de grains invisibles et de vide. L'atomisme, deux mille ans avant le microscope.",
  },
  "Onguent": {
    scene: "Dans un petit pot de faïence, une pommade à l'odeur de plantes que la guérisseuse étale sur la brûlure. Un onguent.",
  },
  "Salace": {
    scene: "À la fin du banquet, l'oncle se lance dans une blague grivoise qui fait rougir toute la table. Une plaisanterie salace.",
  },
  "Empyrée": {
    scene: "Pour les Anciens, au-dessus de tous les cieux, la sphère de feu pur où vivaient les dieux. L'empyrée.",
  },
  "Badin": {
    scene: "Un ton léger, une plaisanterie par-ci par-là, rien de sérieux. Une conversation badine.",
  },
  "Camus": {
    scene: "Un nez court et aplati, comme celui d'un carlin. Un nez camus.",
  },
  "Pendeloque": {
    scene: "Les gouttes de cristal qui pendent du lustre et tintent au moindre courant d'air. Des pendeloques.",
  },
  "Spadassin": {
    scene: "Dans une ruelle sombre de Venise, un homme payé pour tuer attend, la main sur son épée. Un spadassin.",
  },
  "Frontispice": {
    scene: "Tu ouvres un vieux livre, et face au titre, une gravure représente l'auteur entouré d'allégories. Le frontispice.",
    aussi: "C'est aussi la façade principale d'un grand bâtiment.",
  },
  "Pamphlet": {
    scene: "Quelques pages imprimées en secret, distribuées sous le manteau, qui ridiculisent le ministre. Un pamphlet.",
  },
  "Occultisme": {
    scene: "Tarot, alchimie, séances de spiritisme, livres de magie : le monde des forces cachées. L'occultisme.",
  },
  "Prêche": {
    scene: "Du haut de la chaire, le prêtre fait son prêche du dimanche. Et ton frère te fait le sien sur ton alimentation.",
  },
  "Édifiant": {
    scene: "La vie d'un saint, racontée pour donner l'exemple : une histoire édifiante.",
    degainer: "Avec ironie : « Le reportage sur le gaspillage était édifiant. » Très instructif, et pas rassurant.",
  },
  "Hâtif": {
    scene: "Il l'a vue sourire à un autre, et il en a conclu qu'elle le trompait. Une conclusion hâtive : faite trop vite.",
  },
  "Psychorigide": {
    scene: "Dîner à 19 h 00 précises, pas 19 h 05. Le même chemin, les mêmes habitudes, et la panique au moindre changement. Il est psychorigide.",
  },
  "Préjudice": {
    scene: "Le voisin a abattu son arbre par erreur. Il a subi un préjudice et demande réparation.",
  },
  "Grog": {
    scene: "Un soir d'hiver, enrhumé, une tasse fumante de rhum, d'eau chaude, de citron et de miel entre les mains. Un grog.",
    origine: "D'après le surnom d'un amiral anglais du XVIIIe siècle, qui fit couper d'eau le rhum de ses marins.",
  },
  "Dissoner": {
    scene: "Deux notes qui grincent ensemble au milieu de la chanson. Elles dissonent.",
  },
  "Dépérir": {
    scene: "Privé de soleil, le rosier perd ses feuilles une à une. Il dépérit. Et le petit commerce aussi, sans clients.",
  },
  "Belek": {
    scene: "« Fais belek, le bus arrive ! » Attention, en argot.",
    origine: "De l'arabe.",
  },
  "Gratter": {
    scene: "« Il me gratte toujours une clope. » Soutirer quelque chose, en argot.",
    aussi: "Et « gratter », c'est aussi gagner un peu, grappiller : « gratter quelques minutes de sommeil ».",
  },
  "Reliure": {
    scene: "Un vieux livre aux tranches dorées, la couverture en cuir patiné qui craque quand on l'ouvre. Sous la reliure, trois siècles de lecteurs.",
  },
  "Esthète": {
    scene: "Il choisit sa tasse selon la couleur du thé et refait trois fois le bouquet sur la table. Un esthète, pour qui la beauté passe avant tout.",
  },
  "Abysses": {
    scene: "À des milliers de mètres sous la mer, dans le noir complet, des poissons lumineux et des créatures jamais vues. Les abysses.",
    aussi: "Au figuré, les abysses de l'âme sont ses gouffres les plus profonds.",
  },
  "Abyssal": {
    scene: "Une fosse océanique abyssale, sans fond visible. Et, avec humour, une ignorance abyssale.",
  },
  "Déclin": {
    scene: "Les colonnes effondrées, les routes envahies d'herbe : l'empire romain en déclin. Il perd sa force, lentement.",
  },
  "Illustre": {
    scene: "« Nous avons ce soir à notre table un hôte illustre. » Tout le monde se retourne : un grand écrivain, célèbre et admiré.",
    degainer: "Avec humour : « un illustre inconnu ».",
  },
  "Habitus": {
    scene: "La façon de tenir sa fourchette, de parler, ce qu'on trouve beau ou vulgaire : tout ça, on l'a appris sans s'en rendre compte, dans son milieu. L'habitus.",
    origine: "Le sociologue Pierre Bourdieu a rendu ce mot célèbre.",
  },
  "Osciller": {
    scene: "Le pendule de l'horloge oscille, de gauche à droite. Et lui oscille entre rire et larmes.",
  },
  "Complaisance": {
    scene: "Il se regarde dans chaque vitrine, se raconte ses propres succès. Une complaisance envers soi-même.",
    aussi: "C'est aussi une indulgence trop grande : « un certificat de complaisance ».",
  },
  "Âpreté": {
    scene: "Le vent glacé qui coupe le visage, le goût d'un vin trop jeune : de l'âpreté, de la rudesse.",
    degainer: "« L'âpreté au gain » : l'avidité acharnée pour l'argent.",
  },
  "Desperado": {
    scene: "Dans les westerns, le hors-la-loi recherché partout, qui n'a plus rien à perdre et tire le premier. Un desperado.",
  },
  "S'arc-bouter": {
    scene: "La voiture est en panne au milieu de la côte. Il s'arc-boute contre le coffre, les pieds bien plantés, et pousse de toutes ses forces.",
  },
  "Prévarication": {
    scene: "Un fonctionnaire qui accepte de l'argent pour fermer les yeux sur un dossier. Une prévarication : il trahit les devoirs de sa charge.",
  },
  "Triumvirat": {
    scene: "À Rome, César, Pompée et Crassus se partagent le pouvoir à trois. Un triumvirat.",
    degainer: "Pour trois amis qui décident de tout : « le triumvirat du bureau ».",
  },
  "Apologie": {
    scene: "Dans son discours, il fait l'apologie de la lenteur : il la défend, en fait l'éloge.",
    piege: "En anglais, « apology » veut dire excuse : faux ami.",
  },
  "Girandole": {
    scene: "Sur la table du banquet, un grand chandelier à plusieurs branches couvertes de bougies. Une girandole.",
    aussi: "C'est aussi une guirlande de lumières, ou une gerbe de feu d'artifice qui tourne.",
  },
  "Dix-neuviémisme": {
    scene: "De grandes fresques familiales, des héros ambitieux, des descriptions de salons : un roman d'aujourd'hui marqué par le goût du XIXe siècle. Du dix-neuviémisme.",
  },
  "Tardif": {
    scene: "Des pommes qui mûrissent en novembre, un premier amour à soixante ans. Tardifs, mais pas moins doux.",
  },
  "Primo, secundo": {
    scene: "« Primo, tu ranges ta chambre. Secundo, tu fais tes devoirs. » Premièrement, deuxièmement, avec une touche de latin.",
  },
  "Entrelacs": {
    scene: "Sur la pierre celtique, des lignes qui se croisent et se recroisent sans fin. Des entrelacs.",
  },
  "Romanesquement": {
    scene: "Ils se sont rencontrés sous la pluie, en ramassant le même livre tombé. Romanesquement : comme dans un roman.",
  },
  "Interrelation": {
    scene: "Les abeilles, les fleurs, le pommier, les oiseaux : tout dépend de tout dans le verger. Des interrelations.",
  },
  "Épilogue": {
    scene: "Le roman est fini, mais une dernière page raconte ce que sont devenus les personnages dix ans plus tard. L'épilogue.",
  },
  "Altérité": {
    scene: "Voyager, rencontrer quelqu'un qui pense, vit, croit autrement, et accepter qu'il soit différent sans vouloir le changer. L'altérité.",
  },
  "Aphorisme": {
    scene: "« Connais-toi toi-même. » Trois mots, une vérité. Un aphorisme : une pensée brève qui frappe.",
  },
  "Religiosité": {
    scene: "Il ne va jamais à l'église, mais allume une bougie avant chaque examen. Une religiosité vague, plus sentie que pratiquée.",
  },
  "Esthétisant": {
    scene: "Des images magnifiques, des couleurs parfaites… et une histoire vide. Un film esthétisant : la forme avant le fond.",
  },
  "Vitalisme": {
    scene: "La vie n'est pas qu'une machine faite de matière : il y a en elle un élan, une force. C'est la pensée du vitalisme.",
  },
  "Intelligentsia": {
    scene: "Les écrivains, les professeurs, les philosophes qui débattent dans les journaux : l'intelligentsia d'un pays.",
    origine: "Le mot est né en Russie au XIXe siècle.",
  },
  "Idylle": {
    scene: "Un été, deux adolescents, des promenades au bord du lac et des lettres le soir. Une idylle : un amour tendre et naïf.",
  },
  "Potentialité": {
    scene: "Dans une graine, il y a tout l'arbre à venir, en puissance. Une potentialité.",
  },
  "Prépondérant": {
    scene: "Dans la décision, l'avis du médecin a été prépondérant : il a pesé plus que tous les autres.",
  },
  "Bureaucratique": {
    scene: "Trois formulaires, quatre guichets, six semaines d'attente pour un tampon. Un enfer bureaucratique.",
  },
  "Forcené": {
    scene: "Barricadé chez lui, il hurle et menace la police. Un forcené : fou furieux.",
    aussi: "« Un travail forcené » est acharné, sans pause.",
  },
  "Inintelligible": {
    scene: "Une ordonnance griffonnée, un message brouillé par le vent. Inintelligible : impossible à comprendre.",
  },
  "Cocaïnomane": {
    scene: "Sherlock Holmes, dans les romans de Conan Doyle, était cocaïnomane : dépendant à la cocaïne.",
  },
  "Pope": {
    scene: "Une longue barbe, une robe noire, un grand chapeau cylindrique. Le pope, prêtre de l'Église orthodoxe, en Russie ou en Grèce.",
  },
  "Rédemption": {
    scene: "Ancien voleur, il consacre sa vie aux enfants des rues. Il cherche sa rédemption : racheter ses fautes.",
  },
  "Comparse": {
    scene: "Le chef de la bande fait le coup, et son comparse surveille la rue. Un complice de second plan.",
    aussi: "Au théâtre, un comparse est un figurant.",
  },
  "Univoque": {
    scene: "« Non. » Pas d'interprétation possible. Une réponse univoque : un seul sens.",
    piege: "Son contraire : équivoque.",
  },
  "Ennoblir": {
    scene: "Son courage dans l'épreuve l'a ennobli : il l'a rendu plus grand moralement.",
    piege: "Ennoblir (donner de la grandeur) ≠ anoblir (donner un titre de noblesse).",
  },
  "Tsariste": {
    scene: "Des palais d'or, une police secrète, un empereur tout-puissant : la Russie tsariste, avant la révolution de 1917.",
  },
  "Prolétarien": {
    scene: "Les ouvriers des usines, des mines, des docks : le monde prolétarien.",
  },
  "Partisan": {
    scene: "Il est partisan de la semaine de quatre jours : il prend parti pour elle.",
    aussi: "Pendant la guerre, les partisans se cachaient dans les forêts pour résister.",
  },
  "Ruisseler": {
    scene: "La pluie ruisselle sur les vitres, la sueur ruisselle sur son front. Couler à flots.",
  },
  "Ébauche": {
    scene: "Quelques traits de fusain sur la toile, une silhouette à peine dessinée. L'ébauche du tableau.",
  },
  "Sibyllin": {
    scene: "« Tu comprendras le moment venu. » Et il part sans rien ajouter. Une réponse sibylline : mystérieuse.",
    origine: "Les sibylles, prêtresses de l'Antiquité, rendaient des oracles obscurs.",
  },
  "Rejeton": {
    scene: "Au pied du vieux tronc coupé, une jeune pousse verte. Un rejeton.",
    aussi: "En familier : « Elle est venue avec ses trois rejetons. » Ses enfants.",
  },
  "Décantation": {
    scene: "On laisse reposer le vin, et le dépôt tombe doucement au fond. C'est la décantation.",
    aussi: "Au figuré, laisser une idée en décantation, c'est la laisser mûrir avant de décider.",
  },

  // Série 16
  "Soubresaut": {
    scene: "Endormi dans le train, il sursaute soudain, tout le corps secoué. Un soubresaut.",
    aussi: "Au figuré : « des soubresauts d'envie », de brusques accès qui reviennent.",
  },
  "Verve": {
    scene: "Il raconte son voyage avec tant d'esprit et d'entrain que toute la table pleure de rire. Quelle verve !",
    degainer: "« Ma spécialité, ce n'est pas la verve, c'est la nourriture » : à chacun son talent.",
  },
  "Gastrique": {
    scene: "Trop de fête, trop de fromage, trop de vin : le lendemain, de petits nœuds dans l'estomac. Des troubles gastriques.",
  },
  "Affairiste": {
    scene: "Il achète, revend, fait des montages compliqués, et ferme les yeux sur tout ce qui rapporte. Un affairiste : le profit avant les scrupules.",
  },
  "Réfractaire": {
    scene: "Les briques du four résistent à des milliers de degrés : elles sont réfractaires.",
    aussi: "Une personne réfractaire résiste, refuse. « Je ne suis pas réfractaire à l'idée » : je ne suis pas contre.",
  },
  "Ramification": {
    scene: "Le tronc se divise en branches, les branches en rameaux, les rameaux en brindilles. Des ramifications.",
    aussi: "Une affaire peut avoir des ramifications jusqu'à l'étranger.",
  },
  "Allégorie": {
    scene: "Une femme aux yeux bandés, une balance à la main : c'est la Justice. Une idée abstraite qui prend corps. Une allégorie.",
  },
  "Lyrique": {
    scene: "Un poème où le poète crie son amour, son chagrin, sa joie à la première personne. Lyrique.",
    aussi: "L'art lyrique, c'est aussi l'opéra.",
  },
  "Aliénation": {
    scene: "Huit heures par jour à faire le même geste, sans savoir à quoi il sert, et le soir on ne se reconnaît plus. L'aliénation : devenir étranger à soi-même.",
  },
  "Solennité": {
    scene: "Le silence dans la salle, les robes noires, le juge qui se lève. Toute la solennité d'un procès.",
  },
  "Assomption": {
    scene: "En philosophie, l'assomption, c'est le fait d'accepter, d'assumer pleinement : l'assomption du négatif, c'est regarder le pire en face.",
    aussi: "Le 15 août, les catholiques fêtent l'Assomption : la montée de Marie au ciel.",
  },
  "Hérissé": {
    scene: "Le chat face au chien : le dos rond, les poils dressés. Hérissé.",
    aussi: "Au figuré, une réalité hérissée de difficultés.",
  },
  "Chérir": {
    scene: "Une vieille lettre de sa mère, gardée dans un tiroir depuis trente ans, relue les soirs de tristesse. Il la chérit.",
  },
  "Fourmillement": {
    scene: "Vue d'en haut, la place du marché : des gens partout, qui vont, viennent, se croisent. Un fourmillement.",
    aussi: "Et après être resté assis en tailleur, des fourmillements dans les jambes.",
  },
  "Esquisser": {
    scene: "En trois coups de crayon, elle esquisse un visage. Et lui esquisse un sourire : il le commence à peine.",
  },
  "Terminologie": {
    scene: "« Myocarde », « tachycardie », « infarctus » : chaque métier a ses mots. La terminologie médicale.",
  },
  "Encéphale": {
    scene: "Le cerveau, le cervelet, le tronc cérébral : tout ce qui loge dans la boîte crânienne. L'encéphale.",
  },
  "Névrosé": {
    scene: "Il vérifie dix fois que la porte est fermée, s'inquiète de tout, ne dort pas. En familier, on le dit névrosé.",
  },
  "Converger": {
    scene: "Toutes les routes de la région convergent vers la grande ville. Et tous les indices convergent vers le jardinier.",
  },
  "Surabondance": {
    scene: "Trois cents chaînes de télé, et rien à regarder. Une surabondance qui étouffe.",
  },
  "Congestionné": {
    scene: "Après avoir crié, il a le visage rouge et gonflé. Congestionné.",
    aussi: "Les routes du vendredi soir aussi sont congestionnées : bouchées.",
  },
  "Méridional": {
    scene: "L'accent qui chante, les cigales, les platanes : la France méridionale, celle du sud.",
  },
  "Melting-pot": {
    scene: "Dans une rue de New York, on entend dix langues, on mange vingt cuisines. Un melting-pot.",
  },
  "Dialectal": {
    scene: "Un mot que seuls les gens de la vallée emploient. Un mot dialectal, d'un parler régional.",
  },
  "Plébéien": {
    scene: "À Rome, d'un côté les patriciens, les grandes familles ; de l'autre, la plèbe, le peuple. Les plébéiens.",
  },
  "Va-nu-pieds": {
    scene: "Un gamin des rues, pieds nus sur les pavés, vêtements trop grands. Un va-nu-pieds.",
  },
  "Braillard": {
    scene: "Au fond du bus, un groupe chante à tue-tête et parle si fort que tout le monde les entend. Des braillards.",
  },
  "Néoréalisme": {
    scene: "Rome, après la guerre : des films tournés dans la rue, avec de vrais ouvriers et de vrais enfants, sur la misère de tous les jours. Le néoréalisme italien.",
  },
  "Sabbat": {
    scene: "Dans le judaïsme, du vendredi soir au samedi soir, le jour de repos. Le sabbat.",
    aussi: "Dans les légendes, le sabbat est aussi l'assemblée des sorcières à minuit, autour d'un feu.",
  },
  "Gynécée": {
    scene: "Dans la maison grecque antique, la partie réservée aux femmes. Le gynécée.",
    aussi: "Par extension, un lieu où vivent surtout des femmes.",
  },
  "Fausset": {
    scene: "Il imite sa tante avec une petite voix aiguë et forcée. Une voix de fausset.",
  },
  "Grotesque": {
    scene: "Un clown avec un nez énorme, des chaussures géantes, qui se prend pour un roi. Ridicule et bizarre : grotesque.",
  },
  "Flaubertien": {
    scene: "Chaque phrase relue à voix haute, chaque mot pesé, des jours sur un paragraphe. Un perfectionnisme flaubertien.",
    origine: "Flaubert passait ses phrases au « gueuloir » : il les hurlait pour vérifier leur rythme.",
  },
  "Marteler": {
    scene: "Le forgeron martèle le fer rouge. Et le professeur martèle chaque mot de la règle, pour qu'elle rentre bien.",
  },
  "S'enliser": {
    scene: "La voiture s'enfonce dans le sable, les roues tournent dans le vide. Elle s'enlise. Comme les négociations, qui n'avancent plus.",
  },
  "Breloque": {
    scene: "Sur son bracelet, un petit cœur, une tour Eiffel, un fer à cheval. Des breloques.",
  },
  "Opale": {
    scene: "Une pierre laiteuse qui, quand on la tourne, s'allume de reflets bleus, verts, roses. Une opale.",
  },
  "Plutonien": {
    scene: "Le granit s'est formé dans les profondeurs brûlantes de la Terre, lentement refroidi. Une roche plutonienne.",
    origine: "Pluton, dieu des Enfers.",
  },
  "Raptus": {
    scene: "Calme d'ordinaire, il est pris soudain d'un accès de colère incontrôlable, puis retombe. Un raptus.",
  },
  "Saphique": {
    scene: "Un poème d'amour d'une femme pour une autre femme. Saphique.",
    origine: "Sappho, poétesse grecque de l'île de Lesbos, au VIIe siècle avant notre ère.",
  },
  "Amoralité": {
    scene: "Le bien, le mal ? Il ne se pose même pas la question. Ce n'est pas de la méchanceté : c'est de l'amoralité, l'absence de morale.",
    piege: "Amoral (sans morale) ≠ immoral (contre la morale).",
  },
  "Coercition": {
    scene: "Menaces, amendes, prison : tous les moyens pour forcer quelqu'un à obéir. La coercition.",
  },
  "Émaner": {
    scene: "Une grande douceur émane d'elle : elle s'en dégage, comme une lumière.",
  },
  "Mezouzah": {
    scene: "À l'entrée d'une maison juive, fixé au montant de la porte, un petit étui contient un parchemin avec un verset de la Torah. La mezouzah.",
  },
  "Aride": {
    scene: "Un désert de cailloux, pas une goutte d'eau. Aride.",
    aussi: "Au figuré, un sujet aride est austère et sans charme.",
  },
  "Sédimenter": {
    scene: "Au fond du lac, la boue se dépose, couche après couche, depuis des siècles. Elle sédimente.",
    aussi: "Au figuré, les souvenirs sédimentent dans la mémoire.",
  },
  "Oscillation": {
    scene: "Le balancier de l'horloge qui va et vient. Et l'humeur qui passe du rire aux larmes. Des oscillations.",
  },
  "Se camper": {
    scene: "Il se plante au milieu du salon, les mains sur les hanches, le menton levé. Il se campe, prêt à en découdre.",
  },
  "Coi": {
    scene: "La question l'a pris de court : il reste coi, sans un mot.",
    degainer: "« Je m'en irai coi » : je partirai sans rien dire.",
  },
  "Immanent": {
    scene: "La justice ne vient pas d'en haut : elle est dans les choses mêmes. Une justice immanente.",
  },
  "Mnémonique": {
    scene: "« Mais où est donc Ornicar ? » pour retenir mais, ou, et, donc, or, ni, car. Un moyen mnémonique.",
  },
  "Métrique": {
    scene: "Compter les syllabes, les accents, les rimes d'un vers. La métrique.",
    aussi: "Le système métrique, lui, c'est le mètre, le litre, le kilo.",
  },
  "Paroxyton": {
    scene: "En espagnol, « casa » se prononce en appuyant sur l'avant-dernière syllabe. Un mot paroxyton.",
  },
  "Proparoxyton": {
    scene: "« Música », « teléfono » : en espagnol, l'accent tombe sur la troisième syllabe en partant de la fin. Des mots proparoxytons.",
  },
  "Ostraciser": {
    scene: "Plus personne ne lui adresse la parole, on l'exclut des repas, des sorties. On l'ostracise.",
  },
  "Déléguer": {
    scene: "Elle ne peut pas tout faire seule : elle confie les courses à l'un, les invitations à l'autre. Elle délègue.",
  },
  "Ormeau": {
    scene: "Dans les vieux poèmes, les bergers se reposent à l'ombre d'un tendre ormeau, un jeune orme.",
    aussi: "En Bretagne, l'ormeau est aussi un coquillage nacré très recherché.",
  },
  "Délasser": {
    scene: "Après la semaine, un bain chaud et un livre pour se délasser : se reposer.",
  },
  "Languir": {
    scene: "« Languirai-je encore longtemps ? » Attendre, s'impatienter, en perdant ses forces.",
  },
  "Ritournelle": {
    scene: "Le petit refrain qui revient entre les couplets. Et la même plainte qu'il répète sans cesse : toujours la même ritournelle.",
  },
  "La nue": {
    scene: "Dans les poèmes, le ciel et les nuages s'appellent la nue. « La nue enflammée » d'un coucher de soleil.",
    degainer: "« Porter aux nues » : couvrir d'éloges. « Tomber des nues » : être stupéfait.",
  },
  "Déblatérer": {
    scene: "Depuis une heure, il déblatère contre son voisin : le bruit, la haie, la voiture. Dire du mal, longuement.",
  },
  "Clystère": {
    scene: "Dans « Le Malade imaginaire », l'apothicaire arrive avec sa grosse seringue pour soigner Argan par l'arrière. Un clystère : un lavement.",
  },
  "Détersif": {
    scene: "« Un petit clystère détersif », écrit l'apothicaire de Molière sur sa facture : un lavement qui nettoie.",
  },
  "Catholicon": {
    scene: "Un remède miracle qui guérirait tout, de la fièvre à la mélancolie. Les médecins de Molière le prescrivaient : le catholicon.",
  },
  "Rhubarbe": {
    scene: "En compote, ses tiges roses sont acidulées. Mais chez Molière, la rhubarbe était surtout un remède purgatif.",
  },
  "Rosat": {
    scene: "Du miel parfumé aux pétales de rose : du miel rosat, remède doux des apothicaires.",
  },
  "Julep": {
    scene: "Une potion sucrée, parfumée, pour calmer les nerfs avant de dormir. Le julep.",
  },
  "Soporatif": {
    scene: "« Un julep soporatif et somnifère » : chez Molière, l'apothicaire invente un mot pour dire qu'il fait dormir.",
  },
  "Purgatif": {
    scene: "Un remède pour vider l'intestin, le grand traitement des médecins de Molière. Purgatif.",
  },
  "Corroboratif": {
    scene: "« Une potion purgative et corroborative » : qui purge, puis qui donne des forces. Le jargon des médecins du XVIIe siècle.",
  },
  "Séné": {
    scene: "Une plante venue d'Orient, laxative, que les apothicaires prescrivaient à tour de bras. Le séné.",
  },
  "Astringent": {
    scene: "Une lotion qui resserre les pores de la peau, un fruit vert qui assèche la bouche. Astringent.",
  },
  "Carminatif": {
    scene: "Une tisane de fenouil après un repas trop lourd, pour chasser les gaz. Un remède carminatif.",
  },
  "Dulcorer": {
    scene: "Une potion trop amère : l'apothicaire ajoute du sirop pour la dulcorer, l'adoucir en sucrant.",
  },
  "Lénifier": {
    scene: "Un baume qui apaise la brûlure. Et des paroles qui calment, parfois trop : des propos lénifiants.",
  },
  "Bézoard": {
    scene: "Une petite boule dure trouvée dans l'estomac de certaines chèvres, qu'on croyait capable de neutraliser les poisons. Le bézoard.",
  },
  "Carogne": {
    scene: "« Carogne ! » crie Argan à sa servante qui lui tient tête. Une vieille injure de Molière pour une femme qu'on juge méchante.",
  },
  "Carne": {
    scene: "Un steak dur comme une semelle : de la carne. Et un vieux cheval fatigué, aussi.",
    aussi: "Dans la vieille langue, la carne, c'est aussi l'angle, le coin d'une pierre ou d'un volet.",
  },
  "S'égosiller": {
    scene: "Il crie le prénom de son chien dans tout le parc, jusqu'à en perdre la voix. Il s'égosille.",
  },
  "Ouïr": {
    scene: "« Je suis prêt à vous ouïr. » Entendre, écouter, dans la langue d'autrefois.",
    degainer: "Il survit dans « par ouï-dire » et dans « l'ouïe ».",
  },
  "S'aheurter": {
    scene: "Elle s'est aheurtée à cette idée et rien ne l'en fera démordre. S'obstiner, en vieux français.",
  },
  "Invective": {
    scene: "« Menteur ! Incapable ! Traître ! » Des paroles violentes lancées à la figure. Des invectives.",
  },
  "Démordre": {
    scene: "Il a dit que la Terre était plate, et il n'en démordra pas, même devant les photos de la NASA.",
  },
  "Bagatelle": {
    scene: "« Ce cadeau ? Une bagatelle ! » Une chose de peu de valeur.",
    degainer: "Avec ironie : « Il a dépensé la bagatelle de dix mille euros. »",
  },
  "Effronterie": {
    scene: "Pris la main dans le sac, il demande en plus qu'on lui rende la monnaie. Quelle effronterie !",
  },
  "Impertinence": {
    scene: "La servante de Molière répond à son maître, le contredit, se moque de lui. Une impertinence délicieuse.",
  },
  "Doucereux": {
    scene: "« Mais oui, ma chérie, tout ce que tu voudras… » Un ton doucereux, sucré en surface, et faux.",
  },
  "Complaire": {
    scene: "« Je ne songe qu'à vous complaire. » Chercher à faire plaisir, en tout.",
    aussi: "« Se complaire dans » : y prendre plaisir, parfois un peu trop.",
  },
  "Tressaillir": {
    scene: "Une porte claque dans le silence, et elle tressaille, le cœur battant.",
  },
  "Aplanir": {
    scene: "Le bulldozer aplanit le terrain. Et un bon médiateur aplanit les difficultés entre deux familles.",
  },
  "Quérir": {
    scene: "« Allez quérir le médecin, vite ! » Aller chercher, dans la langue de Molière.",
  },
  "Usurier": {
    scene: "Il te prête cent euros, et en exige deux cents à la fin du mois. Un usurier.",
  },
  "Polichinelle": {
    scene: "Un personnage de théâtre bossu, au nez crochu, qui fait rire les enfants. Polichinelle.",
    degainer: "« Un secret de Polichinelle » : un secret que tout le monde connaît.",
  },
  "Intermède": {
    scene: "Entre deux actes de la pièce, des danseurs et des musiciens viennent divertir le public. Un intermède.",
    aussi: "Plus largement, une pause entre deux moments : « un intermède ensoleillé entre deux averses ».",
  },
  "Sérénade": {
    scene: "Sous le balcon, à la nuit tombée, un amoureux joue de la guitare pour sa belle. Une sérénade.",
  },
  "Négoce": {
    scene: "Du vin, des épices, des étoffes achetés ici, revendus là. Le négoce.",
  },
  "Dragonne": {
    scene: "La boucle de cuir au bout du bâton de ski, qu'on passe au poignet pour ne pas le perdre. La dragonne.",
  },
  "Inexorable": {
    scene: "Les grains du sablier qui tombent, un par un, sans qu'on puisse rien y faire. La marche inexorable du temps.",
  },
  "Luth": {
    scene: "Un instrument au dos bombé comme une poire, aux cordes pincées, roi des cours de la Renaissance. Le luth.",
  },

  // Série 17, la dernière
  "Poitevin": {
    scene: "Les marais aux canaux verts, le chabichou, le Futuroscope : tout ce qui vient du Poitou est poitevin.",
  },
  "Impudent": {
    scene: "Pris en train de mentir, il te regarde droit dans les yeux et recommence. Impudent : insolent, sans la moindre honte.",
  },
  "Pistole": {
    scene: "« Deux pistoles pour ce cheval ! » Dans les romans de cape et d'épée, on paie en pièces d'or : des pistoles.",
  },
  "Croquignole": {
    scene: "Une pichenette sur le bout du nez, pour taquiner. Une croquignole.",
    aussi: "C'est aussi un petit biscuit sec. Et en familier, « croquignolet » veut dire mignon.",
  },
  "Céans": {
    scene: "« Le maître de céans vous attend au salon. » Ici, dans cette maison, dans la langue de Molière.",
  },
  "Se dédire": {
    scene: "Hier, il avait promis de venir. Aujourd'hui, il se dédit : il revient sur sa parole.",
    degainer: "Dans Molière : « Je me dédis de tout ce que je disais. »",
  },
  "Mander": {
    scene: "« Mandez le notaire ! » Le roi fait venir quelqu'un, le convoque. Il le mande.",
  },
  "Révérer": {
    scene: "Dans le village, on révère la vieille institutrice : on l'honore avec un profond respect.",
  },
  "Héliotrope": {
    scene: "Le matin face à l'est, le soir face à l'ouest : ses fleurs suivent le soleil toute la journée. L'héliotrope.",
    origine: "Du grec : « qui se tourne vers le soleil ».",
  },
  "Dorénavant": {
    scene: "« Dorénavant, je me lèverai à six heures. » À partir de maintenant… au moins jusqu'à lundi.",
  },
  "Appendre": {
    scene: "Dans le temple, le guerrier vainqueur suspend son bouclier en offrande aux dieux. Il l'append.",
  },
  "Augurer": {
    scene: "Un beau soleil le jour du mariage : de quoi bien augurer de l'avenir. Prévoir d'après des signes.",
    origine: "À Rome, les augures lisaient l'avenir dans le vol des oiseaux.",
  },
  "Mièvre": {
    scene: "Des cœurs roses, des petits chats et des phrases sucrées. Un film mièvre : d'une gentillesse fade.",
    aussi: "Chez Molière, mièvre voulait dire au contraire vif et malicieux : un enfant « mièvre et éveillé ».",
  },
  "Régent": {
    scene: "Louis XV n'a que cinq ans quand il devient roi. Philippe d'Orléans, un prince de la famille, gouverne à sa place : c'est le Régent.",
    aussi: "Dans les collèges d'autrefois, le régent était le professeur.",
  },
  "Gnoséologique": {
    scene: "« Comment pouvons-nous connaître le monde ? » Une question gnoséologique, qui porte sur la connaissance elle-même.",
  },
  "Phénoménologie": {
    scene: "Ne te demande pas ce qu'est vraiment une tasse de café : décris comment elle t'apparaît, sa chaleur, son odeur, sa couleur. C'est la démarche de la phénoménologie.",
  },
  "Vectoriel": {
    scene: "Une flèche qui a une direction et une force : le vent qui pousse le voilier vers le nord-est. Un vecteur.",
    aussi: "Une image vectorielle peut s'agrandir à l'infini sans devenir floue.",
  },
  "Monade": {
    scene: "Pour Leibniz, l'univers est fait de petites unités simples, sans parties, chacune reflétant le monde entier à sa façon. Les monades.",
  },
  "Réfraction": {
    scene: "Plonge une paille dans un verre d'eau : elle a l'air cassée à la surface. C'est la réfraction : la lumière dévie en changeant de milieu.",
  },
  "Bipartition": {
    scene: "La cellule se divise en deux cellules identiques. Une bipartition.",
  },
  "Anthropologique": {
    scene: "Pourquoi tous les peuples racontent-ils des histoires, fêtent-ils les morts, partagent-ils la nourriture ? Des questions anthropologiques.",
  },
  "Égratigner": {
    scene: "Le chat t'égratigne la main en jouant. Et le critique égratigne gentiment le film : une petite pique, pas plus.",
  },
  "Bidimensionnel": {
    scene: "Une feuille de papier, un dessin, un écran : hauteur et largeur, pas de profondeur. Bidimensionnel.",
  },
  "Tâtonner": {
    scene: "La lumière est coupée : il avance dans le noir, la main sur le mur, à la recherche de l'interrupteur. Il tâtonne.",
    aussi: "Au figuré, on tâtonne avant de trouver la bonne méthode.",
  },
  "Substituer": {
    scene: "Pas de beurre ? Elle substitue de l'huile d'olive : elle la met à la place.",
  },
  "Vélocité": {
    scene: "Les doigts du pianiste courent sur les touches à une vitesse folle. Une vélocité impressionnante.",
  },
  "Cachet": {
    scene: "Sur l'enveloppe, la cire rouge et le sceau du roi : le cachet.",
    aussi: "Une vieille maison qui « a du cachet » a un charme bien à elle. Un cachet d'aspirine, c'est un comprimé. Et le cachet d'un artiste, c'est sa paie.",
  },
  "Chauler": {
    scene: "Dans les vergers, au printemps, on peint le bas des troncs en blanc pour les protéger. On les chaule.",
  },
  "Cognassier": {
    scene: "Au fond du jardin, un arbre aux fruits jaunes, durs, au parfum incroyable, qu'on ne mange qu'en gelée. Le cognassier, l'arbre des coings.",
  },
  "Se cabrer": {
    scene: "Un serpent sur le chemin, et le cheval se dresse sur ses pattes arrière. Il se cabre.",
    aussi: "Au figuré, quelqu'un se cabre quand il refuse brusquement.",
  },
  "Étrille": {
    scene: "À l'écurie, une brosse en fer à dents courtes pour nettoyer le poil du cheval. L'étrille.",
    aussi: "C'est aussi un petit crabe des côtes bretonnes.",
  },
  "Proue": {
    scene: "À l'avant du navire, la pointe qui fend les vagues. La proue.",
    piege: "L'arrière, c'est la poupe.",
  },
  "Ténu": {
    scene: "Un fil de soie, un murmure, un espoir. Si fin qu'on le perçoit à peine : ténu.",
  },
  "Prosodie": {
    scene: "La musique d'une phrase : où on appuie, où on monte, où on ralentit. Un Québécois et un Marseillais disent les mêmes mots avec une autre prosodie.",
  },
  "Esplanade": {
    scene: "Devant le château, un immense espace plat et dégagé, où l'on se promène le dimanche. L'esplanade.",
  },
  "Encapuchonné": {
    scene: "Sous la pluie, une silhouette encapuchonnée traverse la place, la tête cachée sous un capuchon.",
  },
  "Labile": {
    scene: "Un parfum qui s'évapore, une humeur qui change d'une minute à l'autre, une trace qui s'efface. Labile : instable.",
  },
  "Crécerelle": {
    scene: "Au bord de l'autoroute, un petit faucon roux reste immobile dans le ciel, battant des ailes sur place, avant de plonger. La crécerelle.",
  },
  "Photogramme": {
    scene: "Un film, c'est vingt-quatre images fixes par seconde. Chacune d'elles est un photogramme.",
  },
  "Crânerie": {
    scene: "Il traverse le champ de tir en sifflotant, les mains dans les poches. Une bravoure un peu provocante : de la crânerie.",
  },
  "Promptitude": {
    scene: "Le serveur remplit ton verre avant même qu'il soit vide. Quelle promptitude !",
  },
  "Inclination": {
    scene: "Dès l'enfance, il avait une inclination pour la musique : un penchant naturel.",
    degainer: "Chez Molière : « avoir de l'inclination pour quelqu'un », c'est être attiré par lui.",
  },
  "Dannunzien": {
    scene: "Des capes, des poèmes enflammés, des amours théâtrales, des vols au-dessus de Vienne en pleine guerre. Un style dannunzien.",
    origine: "Gabriele D'Annunzio, poète italien flamboyant du début du XXe siècle.",
  },
  "Phalangiste": {
    scene: "Dans l'Espagne des années 1930, un mouvement fasciste en chemises bleues, qui soutint Franco. Ses membres étaient les phalangistes.",
  },
  "Understatement": {
    scene: "Sous un déluge, un Anglais lève les yeux et dit : « Un peu humide, aujourd'hui. » Dire moins qu'on ne pense, avec flegme : l'understatement.",
  },
  "Pléiade": {
    scene: "Une pléiade de stars sur le tapis rouge : un groupe de personnes remarquables.",
    aussi: "La Pléiade, au XVIe siècle, c'étaient sept poètes réunis autour de Ronsard et Du Bellay.",
  },
  "Néopositivisme": {
    scene: "« Si on ne peut pas le vérifier par l'expérience ou la logique, ça n'a pas de sens. » La règle stricte des néopositivistes de Vienne, au XXe siècle.",
  },
  "Érotomane": {
    scene: "En psychiatrie, l'érotomane est persuadé qu'une personne, souvent célèbre, est secrètement amoureuse de lui.",
  },
  "Soûlard": {
    scene: "Accoudé au comptoir dès dix heures du matin, il ne sait plus très bien qui il est. Un soûlard.",
  },
  "Vacuité": {
    scene: "Trois heures de discours, et pas une idée. La vacuité du propos : le vide.",
  },
  "Parturiente": {
    scene: "À la maternité, la sage-femme encourage la parturiente : la femme en train d'accoucher.",
  },
  "Ethnologue": {
    scene: "Elle a vécu deux ans dans un village d'Amazonie, à noter les rites, les mythes, les gestes du quotidien. C'est une ethnologue.",
  },
  "Se ramifier": {
    scene: "La rivière se ramifie en mille bras dans le delta. Et un réseau criminel se ramifie dans tout le pays.",
  },
  "Techniciste": {
    scene: "« Une appli réglera le problème. » Pour lui, la technique résout tout. Une vision techniciste.",
  },
  "Symbolisme": {
    scene: "« Il pleure dans mon cœur comme il pleut sur la ville. » Verlaine ne décrit pas sa tristesse, il la suggère. C'est le symbolisme.",
  },
  "Philologie": {
    scene: "Comparer les vieux manuscrits, retrouver le texte original, comprendre chaque mot dans sa langue d'époque. La philologie.",
  },
  "Rudesse": {
    scene: "La rudesse d'un hiver en montagne. Et celle d'un vieux paysan, qui cache souvent un cœur tendre.",
  },
  "S'enclore": {
    scene: "Il s'enclôt dans son jardin, derrière de hauts murs, et ne voit plus personne. Il se retranche.",
  },
  "Luire": {
    scene: "Dans la nuit, les yeux du chat luisent. Et une lueur d'espoir luit au bout du tunnel.",
  },
  "Voirie": {
    scene: "Les rues, les trottoirs, les égouts, les poubelles : tout ce que la mairie entretient. La voirie.",
    aussi: "Jadis, la voirie était aussi le dépôt d'ordures.",
  },
  "S'appesantir": {
    scene: "« Je ne vais pas m'appesantir sur les détails. » Je ne vais pas insister longuement.",
  },
  "Poreux": {
    scene: "Une éponge, une brique, une pierre ponce : pleines de petits trous qui laissent passer l'eau. Poreuses.",
    aussi: "Au figuré, une frontière poreuse laisse tout passer.",
  },
  "Bariolé": {
    scene: "Un châle mexicain aux rayures rouges, jaunes, vertes, bleues, toutes mélangées. Bariolé.",
  },
  "Exégète": {
    scene: "Il passe sa vie à expliquer chaque phrase d'un seul livre, mot par mot, depuis quarante ans. Un exégète.",
  },
  "Anthropomorphe": {
    scene: "Une racine de mandragore qui ressemble à un petit bonhomme, un robot à deux bras et deux jambes. Anthropomorphe : en forme humaine.",
  },
  "Appendice": {
    scene: "À la fin du livre, des cartes et des documents en plus : l'appendice.",
    aussi: "Dans le ventre, un petit prolongement de l'intestin qui peut s'enflammer : l'appendicite.",
  },
  "Cantique": {
    scene: "À Noël, dans l'église, toute l'assemblée chante ensemble un chant religieux. Un cantique.",
  },
  "Borgésien": {
    scene: "Une bibliothèque infinie, un livre dont les pages se multiplient, un labyrinthe de miroirs. Un récit borgésien.",
    origine: "Jorge Luis Borges, écrivain argentin, maître des paradoxes et des labyrinthes.",
  },
  "Prosateur": {
    scene: "Victor Hugo était poète, mais aussi un immense prosateur : il écrivait en prose, comme dans « Les Misérables ».",
  },
  "Régir": {
    scene: "Les lois de la gravité régissent le mouvement des planètes. Et un règlement régit la vie de l'immeuble.",
  },
  "Ontologique": {
    scene: "« Pourquoi y a-t-il quelque chose plutôt que rien ? » La question ontologique par excellence : celle de l'être.",
  },
  "Contigu": {
    scene: "Deux chambres contiguës, séparées par une simple porte. Juste à côté.",
  },
  "Confluent": {
    scene: "À Lyon, le Rhône et la Saône se rejoignent à la pointe de la ville. Le confluent.",
  },
  "Écheveau": {
    scene: "Un fil de laine enroulé en boucle, que le chat a emmêlé dans tout le salon. Un écheveau.",
    aussi: "Au figuré, l'enquêteur démêle l'écheveau d'une affaire.",
  },
  "Inanition": {
    scene: "Perdus dans le désert depuis dix jours, sans vivres. Ils meurent d'inanition.",
    aussi: "Dans « L'Enfer » de Dante, le comte Ugolin, enfermé dans une tour, meurt de faim avec ses fils.",
  },
  "Fructifier": {
    scene: "Les arbres fructifient à la fin de l'été. Et l'argent placé fructifie : il rapporte.",
  },
  "Polyèdre": {
    scene: "Un dé, une pyramide, un diamant taillé : des volumes aux faces planes. Des polyèdres.",
  },
  "Lourdaud": {
    scene: "Il marche sur les pieds de sa cavalière, renverse son verre et rit trop fort. Quel lourdaud !",
  },
  "Corpus": {
    scene: "Tous les poèmes de Baudelaire réunis pour être étudiés en classe. Le corpus.",
  },
  "Cosmogonie": {
    scene: "Au début, le chaos. Puis la nuit pond un œuf, d'où naît l'amour, qui crée le monde. Chaque peuple a sa cosmogonie : son récit de la naissance de l'univers.",
  },
  "Morcelé": {
    scene: "Un territoire morcelé en mille petites parcelles, un récit morcelé en fragments. Divisé en petits morceaux.",
  },
  "Épars": {
    scene: "Après la tempête, des branches éparses dans le jardin. Dispersées çà et là.",
  },
  "Marmoréen": {
    scene: "Une peau d'une blancheur parfaite, un visage froid, immobile. Marmoréen, comme une statue de marbre.",
  },
  "Démotique": {
    scene: "Les Égyptiens avaient l'écriture sacrée des hiéroglyphes, et une écriture plus simple, de tous les jours. Le démotique.",
    aussi: "En Grèce, le démotique est la langue parlée par le peuple.",
  },
  "Vernaculaire": {
    scene: "Au Moyen Âge, les savants écrivent en latin, mais au marché, on parle la langue du pays. La langue vernaculaire.",
  },
  "S'ossifier": {
    scene: "Le cartilage du bébé se durcit peu à peu et devient de l'os. Il s'ossifie.",
    aussi: "Au figuré, une institution qui ne change plus s'ossifie : elle se fige.",
  },
  "Diaspora": {
    scene: "Des familles parties il y a des générations, qui vivent à Montréal, à Paris ou à Dakar, et gardent la langue et les recettes du pays. Une diaspora.",
  },
  "Débauchard": {
    scene: "Fêtes, alcool, nuits blanches, et rien d'autre. Dans les romans d'autrefois, un vieux débauchard.",
  },
  "Cautériser": {
    scene: "Sur le champ de bataille, on brûlait la plaie au fer rouge pour arrêter le sang. On la cautérisait.",
    aussi: "Au figuré, le temps cautérise les blessures du cœur.",
  },
  "Prosélytisme": {
    scene: "Il veut absolument te convertir à son régime, à sa religion, à son groupe de musique. Du prosélytisme.",
  },
  "Tchi": {
    scene: "« T'as rien compris ? — Non, tchi. » Rien du tout, en argot.",
  },
  "Bougre": {
    scene: "« C'est un bon bougre » : un brave type. « Bougre d'idiot ! » : espèce d'idiot. Et « Bougre ! » : un juron à l'ancienne.",
  },
  "Se débrider": {
    scene: "Timide toute la soirée, il monte sur la table au dernier morceau et danse comme un fou. Il se débride : il se lâche.",
  },
  // Série 18 (note du 25 novembre : Calvino, Voltaire, Le Malade imaginaire)
  "Mégoter": {
    scene: "Au resto entre amis, il sort sa calculette pour savoir qui a pris un café de plus. Il mégote : il chipote sur des centimes.",
    degainer: "« Ne mégotons pas sur notre plaisir. » Parfait pour commander le dessert sans culpabiliser.",
    origine: "Vient de « mégot » : au départ, ramasser les bouts de cigarette pour en tirer encore deux bouffées. L'image de l'économie de bouts de chandelle est restée.",
  },
  "Harnachement": {
    scene: "Selle, bride, mors, sangles, étriers : tout ce qu'on met sur un cheval avant de partir. Et quand ton pote part en randonnée avec trois sacs, deux bâtons et une lampe frontale, c'est aussi un harnachement.",
  },
  "Hégélien": {
    scene: "Deux amis se disputent : l'un veut la mer, l'autre la montagne. Ils finissent en Corse, où il y a les deux. Un hégélien te dirait que la contradiction a été dépassée.",
    piege: "Le fameux « thèse, antithèse, synthèse » est presque toujours attribué à Hegel, mais lui-même ne l'a quasiment jamais formulé ainsi : c'est plutôt Fichte et des commentateurs qui l'ont figé en recette.",
  },
  "Malignité": {
    scene: "Il te complimente sur ta coupe devant tout le monde, avec un petit sourire qui veut dire le contraire. Ce n'est pas une méchanceté franche : c'est de la malignité.",
    aussi: "En médecine, on parle de la malignité d'une tumeur : sa capacité à s'étendre.",
  },
  "Condisciple": {
    scene: "Vingt ans après, tu croises quelqu'un qui avait le même prof de philo que toi, au même lycée. Pas forcément un ami : un condisciple, quelqu'un qui a appris à la même école.",
  },
  "Professer": {
    scene: "« Il professe une admiration sans bornes pour Molière » : il le dit haut et fort, à qui veut l'entendre.",
    aussi: "Professer, c'est aussi enseigner : d'où le « professeur ».",
  },
  "Culbute": {
    scene: "Le gamin fait une culbute dans l'herbe, les pieds par-dessus la tête. Et l'entreprise qui fait la culbute, elle, a la tête dans le mur.",
    aussi: "Chez les commerçants, « faire la culbute », c'est revendre au double du prix d'achat. Le même mot pour la faillite et pour le jackpot.",
  },
  "Humorisme": {
    scene: "Pendant deux mille ans, les médecins ont cru que tout se jouait entre quatre liquides : le sang, le flegme, la bile jaune et la bile noire. Trop de l'un, et tu tombais malade. C'était l'humorisme.",
    origine: "Il en reste des mots qu'on emploie tous les jours : sanguin, flegmatique, colérique (la bile) et mélancolique (« bile noire » en grec). Et « être de bonne humeur », c'est avoir ses liquides bien dosés.",
    aussi: "Chez Calvino et d'autres écrivains, l'humorisme désigne aussi une manière de regarder le monde avec humour.",
  },
  "Pars construens": {
    scene: "Tu critiques le plan de tes amis pendant dix minutes. Puis quelqu'un te dit : « D'accord, et toi, tu proposes quoi ? » Il te demande ta pars construens : la partie qui construit.",
    origine: "Expression de Francis Bacon, au XVIIe siècle : d'abord la pars destruens (démolir les idées fausses), puis la pars construens (bâtir à la place).",
  },
  "Cosmologue": {
    scene: "Elle passe ses journées à se demander quelle forme a l'univers, d'où il vient et comment il finira. Elle est cosmologue.",
    aussi: "À ne pas confondre avec l'astronome, qui observe les astres, ni avec le cosmonaute, qui y va.",
  },
  "Axiomatique": {
    scene: "Au Monopoly, on ne discute pas le fait de toucher 200 en passant par la case départ : c'est une règle de base. L'ensemble de ces règles de départ, c'est l'axiomatique du jeu.",
  },
  "Maboule": {
    scene: "« Il a fait 300 kilomètres pour une crêpe ? Il est complètement maboule ! »",
    origine: "De l'arabe « mahbûl », fou, ramené d'Afrique du Nord par les soldats au XIXe siècle.",
  },
  "Pataphysique": {
    scene: "Pourquoi la tartine tombe-t-elle toujours côté beurre ? Un pataphysicien prendrait la question très au sérieux et inventerait une solution parfaitement absurde.",
    origine: "Inventée par Alfred Jarry (le père d'Ubu roi) : « la science des solutions imaginaires ». Un Collège de 'Pataphysique existe vraiment depuis 1948, et c'est en son sein qu'est né l'Oulipo.",
  },
  "Circularité": {
    scene: "« Pourquoi faut-il lui faire confiance ? — Parce qu'il est honnête. — Comment tu le sais ? — Il me l'a dit. » Le raisonnement tourne en rond : c'est de la circularité.",
  },
  "Téméraire": {
    scene: "Sauter du plongeoir de dix mètres le premier jour où tu sais nager : c'est courageux, mais surtout téméraire.",
    origine: "Charles le Téméraire, duc de Bourgogne, a mérité son surnom : il est mort en 1477 en attaquant Nancy en plein hiver avec une armée épuisée.",
  },
  "Universaux": {
    scene: "Tu as vu des milliers de chats. Mais « le chat » en général, celui qui n'est ni roux ni tigré, existe-t-il quelque part ? Au Moyen Âge, des philosophes se sont écharpés là-dessus pendant des siècles : la querelle des universaux.",
  },
  "Gnose": {
    scene: "Certains groupes antiques promettaient que tu serais sauvé non par tes actes, mais parce qu'on t'aurait révélé un savoir secret. Cette connaissance réservée aux initiés, c'est la gnose.",
    origine: "Du grec « gnôsis », connaissance. Quand le savant Thomas Huxley a voulu dire en 1869 qu'on ne peut pas savoir si Dieu existe, il a inventé le mot « agnostique » : celui qui est sans gnose.",
  },
  "Paradoxal": {
    scene: "Plus tu as de choix au restaurant, moins tu arrives à choisir. C'est paradoxal : ça va contre le bon sens, et pourtant c'est vrai.",
  },
  "Insuppressible": {
    scene: "Le fou rire en plein enterrement : tu essaies de le retenir, il revient. Il est insuppressible.",
  },
  "Calembour": {
    scene: "« Le comble pour un électricien ? Ne pas être au courant. » Un jeu sur deux sens du même son : c'est un calembour.",
    degainer: "Victor Hugo trouvait que c'était « la fiente de l'esprit qui vole ». Utile pour accueillir le calembour d'un ami en levant les yeux au ciel.",
  },
  "Algébriser": {
    scene: "Transformer « j'ai trois fois plus de billes que toi, plus deux » en « y = 3x + 2 », c'est algébriser : mettre le monde en formules.",
    origine: "Algèbre vient de l'arabe « al-jabr », remettre en place. En Espagne, un « algebrista » était aussi celui qui remettait les os déboîtés.",
  },
  "Antithétique": {
    scene: "Le jour et la nuit, la cigale et la fourmi, Jean qui rit et Jean qui pleure : des paires qui s'opposent point par point. Elles sont antithétiques.",
  },
  "Mathématisable": {
    scene: "La trajectoire d'un ballon, oui. Le chagrin d'une rupture, beaucoup moins. La question de ce qui est mathématisable passionnait Calvino.",
  },
  "Sizain": {
    scene: "Six vers, et c'est fini : une petite strophe ramassée, qu'on peut apprendre par cœur en marchant. C'est un sizain.",
    aussi: "Ses voisins : le quatrain (4 vers), le quintil (5), le huitain (8), le dizain (10).",
  },
  "Désopilant": {
    scene: "Ton oncle imite la voisine au repas de Noël, et toute la table pleure de rire. Il était désopilant.",
    origine: "« Désopiler », c'était déboucher : on disait « désopiler la rate », parce qu'on croyait que le rire débouchait cet organe et chassait la mélancolie.",
  },
  "Sans heurt": {
    scene: "Le déménagement s'est fait sans heurt : pas un carton cassé, pas une dispute. Tout a glissé.",
  },
  "Analogiquement": {
    scene: "« Le cœur est une pompe » : on comprend le cœur analogiquement, en le comparant à une chose qu'on connaît déjà.",
  },
  "Se heurter à": {
    scene: "Tu proposes ton idée, sûr de toi, et tu te heurtes à un « non » poli mais ferme. Comme une porte vitrée que tu n'avais pas vue.",
  },
  "Oulipo": {
    scene: "Écrire un roman entier sans jamais utiliser la lettre « e » : Georges Perec l'a fait (La Disparition, 1969). C'est l'esprit de l'Oulipo : s'imposer une contrainte pour inventer.",
    origine: "OUvroir de LIttérature POtentielle, fondé en 1960 par Raymond Queneau et François Le Lionnais. Italo Calvino en est devenu membre.",
    degainer: "Raymond Queneau a écrit Cent mille milliards de poèmes : 10 sonnets découpés en bandes, qu'on peut combiner. Il faudrait plus de 190 millions d'années pour tous les lire.",
  },
  "Rire homérique": {
    scene: "Un fou rire si énorme qu'on ne peut plus s'arrêter, à en avoir mal au ventre : un rire homérique.",
    origine: "Dans l'Iliade d'Homère, les dieux de l'Olympe sont pris d'un « rire inextinguible » en voyant Héphaïstos, le dieu boiteux, faire le service en clopinant.",
  },
  "Incommunicable": {
    scene: "L'odeur de la maison de ta grand-mère, ce qu'elle te fait : tu peux essayer de l'expliquer, ça ne passera jamais tout à fait. C'est incommunicable.",
  },
  "Réticence": {
    scene: "« J'émets quelques réticences » : je ne dis pas non, mais je traîne des pieds.",
    aussi: "En rhétorique, la réticence, c'est s'arrêter au milieu d'une phrase pour laisser deviner la suite : « Si je n'étais pas si bien élevé… »",
  },
  "Prodigalité": {
    scene: "Il paie la tournée à tout le bar, offre des fleurs à des inconnues et finit le mois avec des pâtes. Sa prodigalité est légendaire.",
    aussi: "Le « fils prodigue » de la parabole est celui qui a dilapidé sa part d'héritage, puis est revenu.",
  },
  "Annexer": {
    scene: "Ton frère part en voyage, et à son retour tu as annexé sa chambre : ta console, ton linge, tes posters. Tu l'as rattachée à ton territoire.",
    aussi: "On annexe aussi un document à un dossier : c'est l'annexe, à la fin.",
  },
  "Fenil": {
    scene: "Dans les vieilles fermes, on grimpait par une échelle au-dessus de l'étable : c'était le fenil, où l'on gardait le foin bien au sec.",
    origine: "Du latin « fenum », le foin. Le foin lui-même vient du même mot.",
  },
  "Mythico-rituel": {
    scene: "Le gâteau d'anniversaire : une histoire (on grandit d'un an), un geste répété (souffler les bougies), un vœu secret. Un petit moment mythico-rituel, mi-récit, mi-cérémonie.",
  },
  "Aux antipodes": {
    scene: "Lui se lève à 5 heures pour courir, elle se couche à 5 heures en rentrant de soirée. Leurs vies sont aux antipodes.",
    origine: "Du grec « pieds opposés » : les antipodes, ce sont les gens qui vivent de l'autre côté de la Terre et marchent, en quelque sorte, pieds contre nos pieds.",
  },
  "Point de suture": {
    scene: "Chez le médecin, c'est le fil qui referme une plaie. Au figuré, c'est ce qui recoud deux mondes : un livre peut être le point de suture entre la science et la poésie.",
  },
  "Atemporel": {
    scene: "Une chemise blanche, une chanson de Brassens, un conte de fées : ça ne date d'aucune époque. C'est atemporel.",
  },
  "Charrier": {
    scene: "Après l'orage, le fleuve charrie des branches, de la boue, parfois une chaise de jardin. Il emporte tout dans son courant.",
    aussi: "« Faut pas charrier ! » : faut pas exagérer. Et « charrier quelqu'un », c'est le taquiner.",
  },
  "En aval": {
    scene: "Si tu jettes un bateau en papier dans la rivière, tu le retrouveras en aval : plus bas, là où va le courant. En amont, c'est vers la source.",
    origine: "« À val », c'est vers la vallée. Et « avaler » voulait d'abord dire « faire descendre » : on avalait un tonneau dans la cave avant d'avaler sa soupe.",
  },
  "Remous": {
    scene: "Derrière le pilier du pont, l'eau tourne sur elle-même : ce sont des remous. Et l'annonce d'un mariage surprise provoque, elle, des remous dans la famille.",
  },
  "Sarment": {
    scene: "En hiver, le vigneron taille la vigne et ramasse les jeunes branches coupées : les sarments. Ils brûlent vite et très chaud, parfaits pour griller des côtelettes.",
  },
  "Agronome": {
    scene: "Pourquoi ce champ donne moins de blé que celui d'à côté ? Le sol, l'eau, les semences : l'agronome mène l'enquête.",
    aussi: "Antoine Parmentier, agronome, a fait accepter la pomme de terre en France au XVIIIe siècle.",
  },
  "Dissidence": {
    scene: "Dans le groupe de randonnée, trois personnes refusent l'itinéraire et prennent un autre chemin. Une petite dissidence : on se sépare du groupe parce qu'on n'est plus d'accord avec sa ligne.",
  },
  "Diptyque": {
    scene: "Deux films qui se répondent, deux livres qui racontent la même histoire de deux côtés : c'est un diptyque.",
    origine: "Du grec « plié en deux » : au départ, deux tablettes de bois reliées par une charnière, comme un livre de deux pages.",
  },
  "Tantième": {
    scene: "« Rendez-vous au tantième du mois » : tel jour, à préciser. C'est le « tant » des comptes, quand on ne veut pas dire le chiffre.",
  },
  "Pusillanime": {
    scene: "Il voulait demander une augmentation, puis s'est dit que ce n'était pas le moment. Ni la semaine suivante. Ni l'année d'après. Il est pusillanime : il manque d'audace.",
    origine: "Du latin « petite âme ». Son contraire, c'est « magnanime » : une grande âme.",
  },
  "Alléguer": {
    scene: "En retard, il allègue une grève de bus. Il avance une raison pour se justifier, vraie ou non.",
  },
  "Plagiaire": {
    scene: "Il recopie le devoir de sa voisine, change trois mots et signe. C'est un plagiaire.",
    origine: "À Rome, le « plagiarius » était celui qui enlevait des enfants ou des esclaves pour les revendre. Le poète Martial a traité ainsi un homme qui récitait ses vers comme s'ils étaient les siens : un voleur d'enfants de l'esprit.",
  },
  "Pentateuque": {
    scene: "La Genèse, l'Exode, le Lévitique, les Nombres et le Deutéronome : les cinq premiers livres de la Bible, que la tradition juive appelle la Torah.",
    origine: "Du grec « cinq étuis » : les rouleaux étaient rangés dans des étuis.",
  },
  "Quadrige": {
    scene: "Quatre chevaux de front tirant un char : c'est un quadrige. Il y en a un en bronze tout en haut de l'arc de triomphe du Carrousel, à Paris, et un autre sur la porte de Brandebourg, à Berlin.",
  },
  "Frugalité": {
    scene: "Du pain, un fruit, un peu de fromage, et elle est heureuse. Sa frugalité n'est pas de la privation : c'est le goût du peu.",
    origine: "Du latin « frux », les fruits de la terre.",
  },
  "Transmigration": {
    scene: "L'âme qui quitte un corps à la mort pour aller vivre dans un autre, humain ou animal : c'est la transmigration, qu'on appelle aussi métempsycose.",
    aussi: "Le mot désigne aussi le déplacement de tout un peuple vers un autre pays.",
  },
  "Guère": {
    scene: "« Je ne le connaissais guère » : à peine, presque pas.",
    origine: "Paradoxe savoureux : « guère » vient d'un mot germanique qui voulait dire « beaucoup ». « Ne… guère », c'est donc « pas beaucoup ».",
  },
  "Dévot": {
    scene: "Tous les matins à la messe, chapelet à la main : elle est dévote, très attachée à sa religion.",
    piege: "Chez Molière, le « faux dévot » (Tartuffe) affiche sa piété pour mieux manipuler. Selon le ton, le mot peut donc piquer.",
  },
  "Samaritain": {
    scene: "Ta voiture tombe en panne sous la pluie, et un inconnu s'arrête pour t'aider à pousser. C'est un bon samaritain.",
    origine: "Dans une parabole de l'Évangile, un homme blessé est ignoré par deux passants respectés, puis secouru par un habitant de Samarie, peuple alors méprisé.",
  },
  "Roitelet": {
    scene: "Un minuscule oiseau à crête jaune, l'un des plus petits d'Europe. Et un roi d'un tout petit pays, qui se croit puissant : un roitelet.",
  },
  "Triumvir": {
    scene: "César, Pompée et Crassus se partagent Rome. Chacun des trois est un triumvir.",
    aussi: "Leur alliance à trois, c'est le triumvirat.",
  },
  "Brigandage": {
    scene: "Des hommes armés guettaient les diligences sur les routes de forêt pour les dévaliser : c'était le brigandage.",
    origine: "Un « brigand », à l'origine, c'était simplement un soldat à pied d'une brigade. Certains ont mal tourné.",
  },
  "Impiété": {
    scene: "Rire pendant une cérémonie religieuse, profaner un lieu de culte : pour les croyants, c'est une impiété, un manque de respect envers le sacré.",
  },
  "Déplorable": {
    scene: "Après la fête, l'appartement est dans un état déplorable : on ne peut que le regretter.",
  },
  "Pharisien": {
    scene: "Il fait la morale à tout le monde sur l'honnêteté, puis triche aux impôts. Un pharisien : vertueux en façade.",
    origine: "Les pharisiens étaient un courant juif très attaché à la Loi. Les Évangiles les montrent souvent en conflit avec Jésus, et le mot a pris au figuré le sens d'hypocrite.",
  },
  "Épiscopal": {
    scene: "Le palais épiscopal, l'anneau épiscopal : tout ce qui touche à l'évêque.",
    origine: "Du grec « episkopos », surveillant. C'est le même mot qui a donné « évêque », après des siècles d'usure.",
  },
  "Presbytérien": {
    scene: "En Écosse, une grande Église protestante n'a pas d'évêques : elle est dirigée par des « anciens » élus. Ce sont les presbytériens.",
    origine: "Du grec « presbyteros », ancien. Le mot « prêtre » vient de la même racine.",
  },
  "Interpoler": {
    scene: "Un copiste glisse dans un vieux texte une phrase qui n'y était pas, et tout le monde finit par croire qu'elle est de l'auteur. Le passage a été interpolé.",
  },
  "Énergumène": {
    scene: "Il crie dans le bus, gesticule et apostrophe tout le monde. Un vrai énergumène.",
    origine: "En grec, l'« energoumenos » était un possédé : quelqu'un « travaillé » par un démon.",
  },
  "Prosélyte": {
    scene: "Il vient de découvrir le jeûne intermittent, et il en parle à chaque repas. Un prosélyte : un nouveau converti, plein de zèle.",
  },
  "Faction": {
    scene: "Dans le club, un petit groupe se réunit en douce pour renverser le président. C'est une faction.",
    aussi: "« Être de faction », c'est monter la garde, comme une sentinelle devant sa guérite.",
  },
  "Rapine": {
    scene: "Les pillards passent, prennent les récoltes, le bétail, l'argent. La rapine, c'est le vol par la force.",
  },
  "Pythagoricien": {
    scene: "Pour les pythagoriciens, tout est nombre : la musique, les astres, l'âme.",
    aussi: "Ils avaient des règles étranges : ne pas manger de fèves, ne pas ramasser ce qui était tombé, ne pas tisonner le feu avec un couteau.",
  },
  "Stoïcien": {
    scene: "Ton train est annulé. Tu ne t'énerves pas : tu ne peux rien y changer, alors tu sors un livre. Un vrai stoïcien.",
    origine: "Du grec « stoa », portique : Zénon enseignait sous un portique peint d'Athènes. On dit encore « rester stoïque ».",
  },
  "Essénien": {
    scene: "Une communauté juive de l'Antiquité qui vivait à l'écart, dans le désert, en mettant tout en commun.",
    aussi: "En 1947, des bergers ont découvert dans des grottes de Qumrân, près de la mer Morte, des manuscrits que beaucoup d'historiens attribuent à ce groupe.",
  },
  "Fripon": {
    scene: "Il a piqué le dernier biscuit et fait semblant de rien, avec un sourire en coin. Petit fripon !",
    aussi: "Chez Molière, « friponne » se dit tendrement à une petite fille espiègle, et « un sot fripon » est un coquin bête.",
  },
  "Prodige": {
    scene: "À six ans, il jouait du Mozart au piano : un enfant prodige. Et une source qui jaillit d'un rocher sec, c'est un prodige au sens de miracle.",
  },
  "Sectateur": {
    scene: "Il cite son maître à chaque phrase et défend sa doctrine bec et ongles. C'est un sectateur, un partisan très fervent.",
  },
  "Généalogie": {
    scene: "Ta tante a passé l'hiver dans les archives et remonté la famille jusqu'en 1720. Elle a dressé votre généalogie.",
  },
  "Fadaise": {
    scene: "Il t'a servi une heure de compliments creux et de banalités : des fadaises.",
    degainer: "« Que de fadaises ! » : pour balayer un discours sans intérêt.",
  },
  "La lie du peuple": {
    scene: "Vieilles expressions méprisantes pour désigner les plus pauvres et les plus humbles : « né dans la lie du peuple ».",
    origine: "La lie, c'est le dépôt au fond d'une bouteille de vin. D'où aussi « boire le calice jusqu'à la lie » : endurer jusqu'au bout.",
    piege: "C'est méprisant : à reconnaître dans un vieux texte, pas à employer pour parler de quelqu'un.",
  },
  "Subsister": {
    scene: "De l'ancien château, il ne subsiste qu'une tour : c'est tout ce qui reste debout.",
    aussi: "Subsister, c'est aussi arriver à vivre : « Il subsistait de petits boulots. »",
  },
  "Conjecturer": {
    scene: "Des miettes sur la table, la boîte de gâteaux vide, ton frère qui évite ton regard : tu peux conjecturer ce qui s'est passé.",
  },
  "Parvis": {
    scene: "La grande place devant Notre-Dame, où les touristes prennent leurs photos : c'est le parvis.",
    origine: "Du latin « paradisus », le paradis : c'était le jardin qui précédait les églises.",
  },
  "Répréhensible": {
    scene: "Garder la monnaie quand la caissière s'est trompée en ta faveur : ce n'est pas un crime, mais c'est répréhensible.",
  },
  "Réfuter": {
    scene: "« La Terre est plate. » Tu sors une photo prise depuis l'espace : tu réfutes, tu prouves que c'est faux.",
    piege: "Réfuter, ce n'est pas juste contester : c'est démontrer. Dire « je réfute ces accusations » sans preuve, c'est seulement les nier.",
  },
  "Transfigurer": {
    scene: "Quand elle parle de son métier, son visage change, elle s'illumine. Sa passion la transfigure.",
  },
  "Sépulcre blanchi": {
    scene: "Costume impeccable, sourire parfait, discours vertueux, et des comptes cachés partout. Un sépulcre blanchi : beau dehors, pourri dedans.",
    origine: "Dans l'Évangile de Matthieu, Jésus compare ainsi les hypocrites à des tombeaux peints en blanc, beaux à voir, mais pleins d'ossements.",
  },
  "Daigner": {
    scene: "Après trois messages sans réponse, il daigne enfin répondre : « ok ». Comme s'il te faisait une faveur.",
  },
  "Déroger": {
    scene: "Elle a toujours refusé de travailler le dimanche, mais pour ton anniversaire elle déroge à sa règle.",
    origine: "Sous l'Ancien Régime, un noble qui faisait du commerce ou travaillait de ses mains « dérogeait » : il pouvait perdre sa noblesse.",
  },
  "Panégyriste": {
    scene: "Au pot de départ, un collègue fait un discours si élogieux qu'on croirait parler d'un saint. Le panégyriste du jour.",
    origine: "Le panégyrique, en grec, était le discours prononcé devant l'assemblée de tout le peuple, à l'occasion d'une grande fête.",
  },
  "Ameuter": {
    scene: "Il crie au voleur dans la rue et, en deux minutes, il a ameuté tout le quartier.",
    origine: "De « meute » : rassembler les chiens pour la chasse. Ameuter une foule, c'est la lancer comme une meute.",
  },
  "En butte à": {
    scene: "Nouveau dans la classe, il est en butte aux moqueries : c'est sur lui que tout le monde tire.",
    origine: "La butte, c'était le tertre de terre derrière la cible, sur lequel les archers s'exerçaient.",
  },
  "Sacerdotal": {
    scene: "La soutane, le col blanc, les gestes de la messe : tout ce qui appartient au prêtre et à sa fonction est sacerdotal.",
  },
  "Gibet": {
    scene: "Sur une colline à l'entrée des villes, on pendait les condamnés et on les laissait là, pour l'exemple. C'était le gibet.",
    aussi: "Le gibet de Montfaucon, à Paris, pouvait accrocher des dizaines de corps à la fois. Le poète François Villon, condamné à la pendaison puis gracié, a écrit la Ballade des pendus.",
  },
  "Inférer": {
    scene: "Ses chaussures sont pleines de sable et il a un coup de soleil : tu en infères qu'il revient de la plage.",
  },
  "Inepte": {
    scene: "« Mettre de l'eau dans l'essence pour économiser ? » Une idée inepte : absurde de bout en bout.",
    origine: "Du latin « ineptus », qui n'est pas apte, pas adapté.",
  },
  "Galimatias": {
    scene: "La notice du meuble en kit, traduite trois fois par un logiciel : un pur galimatias.",
    degainer: "Molière, dans Le Malade imaginaire, se moque des médecins dont l'art consiste en « un pompeux galimatias ».",
    origine: "Origine inconnue. Une légende parle d'un avocat qui, plaidant en latin pour un certain Mathias, se serait emmêlé et aurait dit « galli Mathias » au lieu de « gallus Mathiae ».",
  },
  "Deutéronome": {
    scene: "Le cinquième livre de la Bible, où Moïse, avant de mourir, rappelle au peuple toute la loi.",
    origine: "Du grec « deuxième loi » : la loi redite une seconde fois.",
  },
  "Bélial": {
    scene: "Dans les vieux textes religieux et les grimoires, Bélial est le nom d'un démon, figure de la perversité.",
    origine: "De l'hébreu, avec l'idée de « sans valeur ».",
  },
  "Proditoirement": {
    scene: "Il t'a serré la main en souriant, puis t'a dénoncé dans ton dos. Il a agi proditoirement : en traître.",
    origine: "Du latin « proditor », le traître.",
  },
  "Païen": {
    scene: "Les dieux de l'Olympe, les esprits des forêts, les fêtes du solstice : ce qui vient des religions anciennes, avant le christianisme, est païen.",
    origine: "Du latin « paganus », paysan : c'est dans les campagnes que les vieux cultes ont résisté le plus longtemps.",
  },
  "Copiste": {
    scene: "Avant l'imprimerie, des moines passaient des mois à recopier un livre à la plume, lettre après lettre. C'étaient les copistes.",
    aussi: "On leur doit des fautes célèbres, que les spécialistes traquent encore en comparant les manuscrits.",
  },
  "Rustique": {
    scene: "Une table en chêne brut, un pain de campagne, un vin du coin : un repas rustique, simple et robuste.",
    origine: "Du latin « rus », la campagne.",
  },
  "Supplicié": {
    scene: "Les gravures anciennes montrent les suppliciés sur la place publique, face à la foule.",
  },
  "Fatras": {
    scene: "Le tiroir de la cuisine : élastiques, piles mortes, clés de nulle part, notices. Un fatras. Et un discours mal préparé peut aussi être un fatras d'idées.",
  },
  "Saducéen": {
    scene: "Un courant juif de l'Antiquité, lié aux prêtres du Temple de Jérusalem.",
    aussi: "Contrairement aux pharisiens, les saducéens ne croyaient pas à la résurrection des morts.",
  },
  "Conférer": {
    scene: "Le jury lui confère le titre de docteur : il le lui accorde officiellement.",
    aussi: "Le petit « cf. » dans les livres est l'abréviation du latin « confer » : compare, va voir.",
  },
  "Oint": {
    scene: "Les rois de France étaient oints à Reims : on leur versait de l'huile sainte sur le front pour les consacrer.",
    origine: "« Messie » (en hébreu) et « Christ » (en grec) veulent tous deux dire « l'oint ».",
  },
  "Schisme": {
    scene: "Le groupe de musique se divise en deux camps qui ne se parlent plus. Un vrai schisme.",
    origine: "Du grec « schisma », fente, déchirure. Le plus célèbre : en 1054, l'Église de Rome et celle de Constantinople se séparent.",
  },
  "Ramas": {
    scene: "Un ramas de vieux journaux dans la cave. Et, avec mépris, « un ramas de brigands » : une bande de gens peu recommandables.",
  },
  "Diacre": {
    scene: "Pendant la messe, à côté du prêtre, celui qui lit l'Évangile et l'aide : c'est le diacre.",
    origine: "Du grec « diakonos », serviteur.",
  },
  "Concile": {
    scene: "Tous les évêques réunis pour trancher les grandes questions de l'Église : c'est un concile. Celui de Nicée, en 325, a fixé le credo chrétien.",
  },
  "Traditeur": {
    scene: "Sous les persécutions romaines, certains chrétiens livraient leurs livres saints aux autorités pour avoir la vie sauve. On les appelait les traditeurs.",
    origine: "Du latin « tradere », livrer. Le même mot a donné « traître »… et « tradition », ce qu'on livre aux générations suivantes.",
  },
  "Récognition": {
    scene: "Le moment où Ulysse, revenu déguisé, est reconnu par sa vieille nourrice grâce à une cicatrice : c'est une scène de récognition.",
  },
  "De même farine": {
    scene: "« Lui et ses copains, c'est de même farine » : des gens du même genre, et pas du meilleur.",
  },
  "Prose cadencée": {
    scene: "Ce n'est pas de la poésie, pas de rimes, pas de vers, et pourtant ça se lit comme une musique. C'est de la prose cadencée.",
  },
  "Apprêts": {
    scene: "Les apprêts de la fête : guirlandes, plats, chaises à déplacer. Tout ce qu'on prépare avant le grand moment.",
  },
  "Assujettir": {
    scene: "« Un père à ses vœux vous veut assujettir », écrit Molière : il veut vous soumettre à sa volonté.",
    aussi: "Aujourd'hui, on est surtout « assujetti à la TVA » : soumis à cet impôt.",
  },
  "Appas": {
    scene: "Chez les auteurs classiques, une belle personne fait valoir ses appas : ses charmes.",
    origine: "« Appas » et « appât » étaient le même mot. Au XVIIe siècle, on les a séparés : l'appât pour la pêche, les appas pour la séduction.",
  },
  "Tantôt": {
    scene: "« Vous eussiez été ici tantôt » : vous auriez dû être là tout à l'heure.",
    aussi: "Dans le Nord et en Belgique, « à tantôt » veut dire « à cet après-midi » ou « à tout à l'heure ». Et « tantôt il rit, tantôt il pleure » : parfois l'un, parfois l'autre.",
  },
  "Ma mie": {
    scene: "« Ma mie, apportez-moi mon chapeau. » Une façon ancienne et tendre de dire « mon amie, ma chère ».",
    origine: "On disait « m'amie », comme « m'amour ». L'oreille a mal coupé, et c'est devenu « ma mie ».",
  },
  "Distinguo": {
    scene: "« Je ne mens pas : je ne dis pas toute la vérité. » Il fait un distinguo, une distinction subtile.",
    degainer: "Thomas Diafoirus, dans Le Malade imaginaire, répond à tout par « Distinguo » : la parodie du savant qui coupe les cheveux en quatre.",
  },
  "Nego consequentiam": {
    scene: "« Tu as raté ton bus, donc ta journée est fichue. — Nego consequentiam ! » Je nie la conséquence : l'un n'entraîne pas l'autre.",
    aussi: "Une formule des débats en latin des vieilles écoles, que Molière met dans la bouche du pédant Thomas Diafoirus.",
  },
  "Frais émoulu": {
    scene: "Frais émoulu de son école de commerce, il veut déjà tout réorganiser dans l'entreprise.",
    origine: "« Émoudre », c'est aiguiser sur la meule. Une lame frais émoulue sort tout juste de chez le rémouleur : neuve et bien tranchante.",
  },
  "Douaire": {
    scene: "Autrefois, le mari réservait une part de ses biens pour que sa femme puisse vivre s'il mourait avant elle. C'était le douaire.",
    aussi: "D'où la « douairière » : la veuve qui en profitait, puis, par moquerie, une vieille dame à l'air hautain.",
  },
  "S'ôter de la vue": {
    scene: "« Si tu me le permets, j'aimerais m'ôter de ta vue et vaquer à différentes occupations variées et équilibrées. » La façon la plus élégante de dire « je m'en vais ».",
  },
  "Se mettre en peine": {
    scene: "« Ne vous mettez pas en peine pour moi » : ne vous inquiétez pas, ne vous donnez pas tout ce mal.",
  },
  "Prendre congé": {
    scene: "Il se lève, salue chacun, remercie l'hôtesse : il prend congé.",
    aussi: "« Je ne puis me dispenser de prendre congé de vous » : le grand style de Molière pour dire au revoir.",
  },
  "Duriuscule": {
    scene: "Le jeune médecin prend le pouls d'Argan et déclare, très sérieux, qu'il est « duriuscule, pour ne pas dire dur ».",
    aussi: "Faux latin de Molière pour se moquer des médecins qui habillent des banalités en latin.",
  },
  "Parenchyme": {
    scene: "Le tissu qui fait le vrai travail d'un organe, la chair du foie ou du poumon : c'est le parenchyme.",
    degainer: "Les Diafoirus du Malade imaginaire parlent doctement du « parenchyme splénique » : du jargon pour impressionner.",
  },
  "Splénique": {
    scene: "Tout ce qui concerne la rate est splénique.",
    origine: "Du grec « splên », la rate. Les Anglais en ont tiré « spleen », et Baudelaire l'a pris pour nommer sa mélancolie : on croyait la rate siège de l'humeur noire.",
  },
  "Pylore": {
    scene: "La petite porte musclée au bas de l'estomac, qui s'ouvre pour laisser passer la nourriture vers l'intestin.",
    origine: "Du grec « pylôros », le gardien de la porte.",
  },
  "Cholédoque": {
    scene: "Le canal qui conduit la bile du foie jusqu'à l'intestin. Les médecins de Molière en font un mot savant pour éblouir.",
    origine: "Du grec : « qui reçoit la bile ».",
  },
  "Désennuyer": {
    scene: "Un jeu de cartes, une histoire, une chanson pour désennuyer le malade : le distraire, chasser l'ennui.",
  },
  "Contrefaire": {
    scene: "Elle contrefait la voix de sa mère au téléphone pour excuser son absence. Contrefaire, c'est imiter pour tromper ; ou feindre, faire semblant.",
    aussi: "D'où la contrefaçon : le faux sac de luxe.",
  },
  "Langueur": {
    scene: "Un dimanche d'été, la chaleur, les volets mi-clos : une douce langueur, on n'a envie de rien.",
    aussi: "Chez les auteurs classiques, les « douces langueurs » sont celles de l'amour.",
  },
  "Une prise de casse": {
    scene: "Chez Molière, l'apothicaire prescrit « une prise de casse » : une dose de laxatif.",
    origine: "La casse est le fruit d'un arbre, le cassier : une longue gousse noire dont la pulpe purge.",
  },
  "Embéguiné": {
    scene: "« Toujours embéguiné de ses apothicaires » : Argan ne jure que par eux, il en est entiché.",
    origine: "De « béguin », un petit bonnet. Être embéguiné, c'est avoir la tête coiffée d'une idée. D'où aussi « avoir le béguin ».",
  },
  "Ne voir goutte": {
    scene: "Coupure de courant en pleine nuit : on n'y voit goutte.",
    origine: "Comme « ne… pas » (un pas) ou « ne… point » (un point), le vieux français disait « ne… goutte » ou « ne… mie » (une miette) : pas même une goutte.",
  },
  "Si fait": {
    scene: "« Tu n'as pas fini tes devoirs ? — Si fait ! » Une façon ancienne de dire « mais si ».",
  },
  "Spécieux": {
    scene: "« Si tu m'aimais vraiment, tu me prêterais ta voiture. » Ça a l'air logique, mais ça ne tient pas : un argument spécieux.",
    origine: "Du latin « speciosus », beau à voir. Il a gardé la belle apparence et perdu la vérité.",
  },
  "Babil": {
    scene: "Le babil d'un bébé, le gazouillis des oiseaux le matin : un bavardage léger qui ne s'arrête pas.",
    degainer: "Molière parle d'« un spécieux babil, qui vous donne des mots pour des raisons et des promesses pour des effets ».",
  },
  "Impétuosité": {
    scene: "Il se jette dans la discussion avec impétuosité : sans réfléchir, emporté comme un torrent.",
  },
  "Purgation": {
    scene: "Saignées, lavements, purgations : la médecine du XVIIe siècle vidait les malades pour les soigner.",
    aussi: "Au figuré, une purgation, c'est une purification de l'âme.",
  },
  "Avoir une dent contre": {
    scene: "Depuis qu'il lui a volé sa place de parking, elle a une dent contre lui : elle lui en veut, pour longtemps.",
  },
  "Rabattre le caquet": {
    scene: "Il se vantait d'être imbattable aux échecs. Ta petite sœur l'a battu en dix coups : ça lui a rabattu le caquet.",
    origine: "Le caquet, c'est le gloussement de la poule. On dit aussi « rabaisser le caquet ».",
  },
  "Prendre à tâche de": {
    scene: "Elle a pris à tâche de lire un classique par mois : elle s'y applique comme à une mission.",
  },
  "Nigaud": {
    scene: "Il cherche ses lunettes depuis dix minutes, alors qu'il les a sur le nez. Gros nigaud !",
  },
  "Malavisé": {
    scene: "Envoyer un message énervé à son patron à deux heures du matin : malavisé. Il a agi sans réfléchir.",
  },
  "Jaser": {
    scene: "Il rentre à l'aube avec une inconnue : demain, tout le village va jaser.",
  },
  "Lèse-majesté": {
    scene: "Insulter le roi, c'était un crime de lèse-majesté. Aujourd'hui, dire à un fan de foot que son équipe joue mal, c'en est presque un.",
    origine: "« Lèse » vient du latin « laesa », blessée : la majesté blessée. Molière invente même « un crime de lèse-Faculté », quand on désobéit à son médecin.",
  },
  "Rompre commerce": {
    scene: "« Je romps commerce avec vous » : le médecin furieux, dans Le Malade imaginaire, cesse toute relation avec Argan.",
    aussi: "« Commerce », dans la vieille langue, c'est la fréquentation : « d'un commerce agréable » veut dire « agréable à fréquenter ».",
  },
  "Carabistouilles": {
    scene: "« Pas de carabistouilles ! » : pas d'histoires, pas de balivernes.",
    aussi: "Un mot de Belgique et du Nord de la France, qui sonne déjà comme une farce.",
  },
  "Vaquer": {
    scene: "« Je vous laisse vaquer à vos occupations » : je vous laisse à ce que vous avez à faire.",
    origine: "Du latin « vacare », être vide, être libre. Les « vacances » viennent du même mot.",
  },
  "Lewis-carrollien": {
    scene: "Un chat qui disparaît en laissant son sourire, une reine qui veut la sentence avant le verdict : c'est absurde, et pourtant ça suit une logique. C'est lewis-carrollien.",
    aussi: "Lewis Carroll, l'auteur d'Alice au pays des merveilles, était aussi professeur de mathématiques à Oxford.",
  },
  "Loi de Murphy": {
    scene: "Tu laves ta voiture, il pleut. Tu changes de file au péage, l'autre avance. La loi de Murphy : tout ce qui peut mal tourner finira par mal tourner.",
    origine: "Edward Murphy était un ingénieur de l'armée de l'air américaine. En 1949, des capteurs installés à l'envers sur un test de décélération lui auraient inspiré la formule.",
  },
  "Neutrino": {
    scene: "Une particule si fuyante qu'elle traverse ton corps, les murs et la Terre entière sans rien toucher.",
    origine: "En 1930, Wolfgang Pauli imagine cette particule et s'excuse presque : il a inventé une chose qu'on ne pourra peut-être jamais détecter. Enrico Fermi la baptise en italien : « le petit neutre ». On l'a détectée en 1956.",
    aussi: "Certains physiciens pensent que c'est grâce à lui qu'il reste de la matière dans l'univers : va voir la notion « Le milliardième de trop ».",
  },
  // Série 19 : note du 2026-11-26 (Voltaire, Le Malade imaginaire, onglet retrouvé)
  "Apostolique": {
    scene: "Le représentant du pape dans un pays s'appelle le « nonce apostolique » : un ambassadeur, mais en soutane.",
    origine: "Du grec « apostolos », l'envoyé. Les apôtres sont, au sens propre, des envoyés en mission.",
  },
  "Impudence": {
    scene: "Il arrive avec une heure de retard, se sert le dernier morceau de gâteau et demande pourquoi on ne l'a pas attendu : quelle impudence !",
    origine: "Du latin « pudere », avoir honte, comme « pudeur ». L'impudent est celui à qui la honte ne rend jamais visite.",
  },
  "Sibylle": {
    scene: "Ta tante qui prédit, à chaque repas de famille, qui va divorcer et qui va déménager : la sibylle du clan.",
    origine: "Dans l'Antiquité, les sibylles rendaient des oracles en transe, comme celle de Cumes, près de Naples. Leurs réponses étaient si obscures qu'elles ont donné un autre mot : « sibyllin ».",
  },
  "Fourberie": {
    scene: "Faire croire à son père qu'on a été enlevé par des pirates pour lui soutirer de l'argent : la fourberie dans toute sa splendeur.",
    aussi: "C'est l'intrigue des Fourberies de Scapin (Molière, 1671), et sa réplique culte : « Que diable allait-il faire dans cette galère ? »",
  },
  "Prophétesse": {
    scene: "Cassandre annonce la chute de Troie, personne ne la croit, et Troie tombe. Le destin des prophétesses : avoir raison trop tôt.",
    origine: "Apollon lui avait donné le don de prophétie, puis, vexé qu'elle le repousse, l'avait condamnée à ne jamais être crue.",
  },
  "Iniquité": {
    scene: "Punir toute la classe pour la bêtise d'un seul : une iniquité que tout le monde a vécue au moins une fois.",
    origine: "Du latin « iniquus », pas égal, pas juste. C'est le contraire exact de l'équité.",
  },
  "Décréditer": {
    scene: "Une seule rumeur bien placée suffit à décréditer quelqu'un dans tout le village.",
    origine: "Mot du temps de Voltaire, remplacé depuis par « discréditer ». Il sent la poudre et les perruques.",
  },
  "Poix": {
    scene: "Dans les films de siège, on renverse de la poix brûlante du haut des remparts sur les assaillants.",
    origine: "La poix, résine de pin, servait à rendre étanches les tonneaux et les coques des bateaux. Elle nous a laissé « poisseux » : collant comme de la poix.",
  },
  "Pilorier": {
    scene: "Un tweet maladroit, et le voilà pilorié par des milliers d'inconnus avant midi.",
    origine: "Le pilori était un poteau ou une tour où l'on exposait les condamnés aux moqueries de la foule. Celui des Halles, à Paris, était le plus célèbre.",
  },
  "Subjuguer": {
    scene: "Elle a chanté trois notes et toute la salle était subjuguée, sans un bruit.",
    origine: "Du latin « sub jugum », sous le joug : le vaincu passait courbé sous des lances croisées. Aujourd'hui, on subjugue plutôt par le charme.",
  },
  "Proscription": {
    scene: "En 43 avant J.-C., Octave, Antoine et Lépide affichent des listes de noms à abattre : la tête de Cicéron y figure.",
    origine: "Du latin « proscribere », afficher publiquement. Les proscriptions romaines étaient des listes placardées : quiconque tuait un nom inscrit touchait une récompense.",
  },
  "Facétie": {
    scene: "Remplacer le sucre par du sel le 1er avril : une facétie qui ne fait rire que celui qui l'a faite.",
    origine: "Du latin « facetus », élégant, spirituel. La facétie, à l'origine, était une plaisanterie fine, pas un coussin péteur.",
  },
  "Rémunérateur": {
    scene: "Un petit boulot rémunérateur, c'est celui qui paie assez pour qu'on oublie un peu l'ennui.",
    aussi: "Voltaire parlait d'un « Dieu rémunérateur et vengeur » : un Dieu qui récompense les bons et punit les méchants, utile selon lui pour que les gens restent honnêtes.",
  },
  "Putatif": {
    scene: "Dans les feuilletons, il y a toujours un père putatif qui découvre au dernier épisode que l'enfant n'est pas de lui.",
    origine: "Du latin « putare », croire, estimer. Le père putatif est celui que l'on croit être le père. Joseph est le plus célèbre d'entre eux.",
  },
  "Disert": {
    scene: "Interrogé à l'improviste, il a parlé dix minutes sans une hésitation, clair et brillant : un orateur disert.",
    origine: "Du latin « disertus », habile à parler. Un compliment rare, à garder pour quelqu'un qui le mérite vraiment.",
  },
  "Logos": {
    scene: "Pour les Grecs, le monde n'est pas un chaos : une raison l'organise, et cette raison parle. C'est le logos.",
    origine: "En grec, « logos » veut dire à la fois la parole et la raison. Il se cache dans tous nos « -logie » : biologie, psychologie, la science qui parle de la vie, de l'âme.",
    aussi: "L'Évangile de Jean commence par « Au commencement était le Logos », que l'on traduit par « le Verbe ».",
  },
  "Expier": {
    scene: "Il a oublié l'anniversaire de sa compagne : il expie en faisant la vaisselle pendant un mois.",
    origine: "Du latin « expiare », purifier par un sacrifice. On expiait ses fautes devant les dieux ; aujourd'hui, plutôt devant les gens qu'on a vexés.",
  },
  "Isiaque": {
    scene: "À Pompéi, on visite encore un petit temple isiaque : des Romains venaient y prier une déesse égyptienne.",
    origine: "D'Isis, la grande déesse d'Égypte. Son culte s'est répandu dans tout l'Empire romain, jusqu'à Paris : une vieille légende fait même venir le nom de Paris d'Isis, mais c'est une fausse étymologie.",
  },
  "Extirper": {
    scene: "Extirper un aveu à son petit frère, c'est comme arracher une mauvaise herbe : il faut tirer doucement, jusqu'à la racine.",
    origine: "Du latin « stirps », la souche, la racine. Extirper, c'est arracher avec la racine, pour que ça ne repousse pas.",
  },
  "Consubstantiel": {
    scene: "Pour certains, l'humour et la tristesse sont consubstantiels : l'un ne va jamais sans l'autre.",
    origine: "En 325, le concile de Nicée déclare le Fils « consubstantiel » au Père. Le débat portait sur un seul mot grec, « homoousios » (même substance) contre « homoiousios » (substance semblable) : une seule lettre, le iota.",
    aussi: "C'est de là que viendrait l'expression « ne pas changer d'un iota ».",
  },
  "Codex": {
    scene: "Tu tournes les pages de ton livre de poche ? Tu tiens un codex, l'invention qui a remplacé les rouleaux.",
    origine: "En latin, « codex » désignait un tronc d'arbre, puis des tablettes de bois reliées. Les Romains ont fini par coudre des pages ensemble, et le livre moderne est né.",
  },
  "Hérétique": {
    scene: "Mettre de l'ananas sur une pizza, en Italie, c'est presque hérétique.",
    origine: "Du grec « hairesis », le choix. L'hérétique, c'est d'abord celui qui choisit par lui-même au lieu de suivre la doctrine.",
  },
  "Anathématiser": {
    scene: "Le chef cuisinier a anathématisé la crème dans la carbonara : interdite, maudite, à jamais.",
    origine: "Du grec « anathema », ce qui est mis à part. Le mot désignait d'abord une offrande déposée au temple, puis ce qu'on écarte avec horreur : la malédiction.",
  },
  "Quaternité": {
    scene: "Trois mousquetaires qui sont quatre : c'est la quaternité d'Athos, Porthos, Aramis et d'Artagnan.",
    origine: "Mot savant forgé sur la Trinité. Dans les querelles de théologie, accuser quelqu'un d'adorer une « quaternité », c'était l'accuser d'avoir ajouté une quatrième personne à Dieu.",
    aussi: "Le psychanalyste Carl Jung aimait ce mot : pour lui, le nombre quatre symbolisait la totalité.",
  },
  "Transsubstantiation": {
    scene: "Le mot le plus long de ta collection, peut-être. Il décrit ce que croient les catholiques à la messe : le pain et le vin changent de substance.",
    origine: "Du latin « trans », au-delà, et « substantia », la substance. Le dogme est fixé au concile de Latran en 1215.",
  },
  "Talapoin": {
    scene: "Chez Voltaire, le talapoin est un moine lointain qu'il met en scène pour montrer que chaque peuple croit détenir la seule vérité.",
    origine: "Du portugais « talapão », emprunté à une langue de Birmanie. Le mot désignait les moines bouddhistes du Siam et de Birmanie.",
    aussi: "C'est aussi le nom d'un tout petit singe d'Afrique.",
  },
  "Santon": {
    scene: "À Noël, en Provence, on installe les santons dans la crèche : le berger, le meunier, le boulanger, même le maire du village.",
    origine: "Le provençal « santoun » veut dire « petit saint ». Le même mot désigne aussi, chez les voyageurs d'autrefois, un ermite musulman vénéré.",
  },
  "Marabout": {
    scene: "Au zoo, ce grand oiseau chauve au long bec, immobile et sérieux, c'est un marabout.",
    origine: "De l'arabe « murabit », l'homme du couvent fortifié : un saint homme musulman. L'oiseau tiendrait son nom de son allure grave et solitaire, comme un ermite en méditation.",
  },
  "Épithète": {
    scene: "« Achille aux pieds légers », « l'Aurore aux doigts de rose » : chez Homère, chaque héros a son épithète, comme une signature.",
    origine: "Du grec « epitheton », ce qui est ajouté. Les rois de France en collectionnaient : le Bel, le Hardi, le Bien-Aimé.",
  },
  "Parricide": {
    scene: "Œdipe tue son père sans savoir qui il est : le parricide le plus célèbre de la littérature.",
    origine: "Du latin « parricida ». À Rome, le parricide était cousu dans un sac avec un chien, un coq, une vipère et un singe, puis jeté au fleuve.",
  },
  "Iconolâtre": {
    scene: "À Byzance, aux VIIIe et IXe siècles, on s'est battu pour savoir s'il fallait détruire les images saintes. En face des iconoclastes, les iconolâtres les défendaient.",
    origine: "Du grec « eikôn », l'image, et « latreia », l'adoration. Le mot était souvent lancé comme un reproche par leurs adversaires.",
  },
  "Supputer": {
    scene: "Avant de proposer un rendez-vous, il suppute ses chances : deux sur dix, trois si elle a bien dormi.",
    origine: "Du latin « supputare », calculer. On y retrouve « putare », compter, comme dans l'anglais « computer », l'ordinateur : la machine qui suppute.",
  },
  "S'amender": {
    scene: "Après trois retards, il promet de s'amender : réveil à 6 h, deux alarmes, et un café prêt la veille.",
    origine: "Du latin « emendare », corriger une faute. L'amende que l'on paie vient de la même famille : on corrige sa faute en payant.",
  },
  "Renchérir": {
    scene: "Tu dis que le film était long ; ton ami renchérit : « Long ? J'ai eu le temps de vieillir. »",
    origine: "De « cher » : renchérir, c'est d'abord faire monter le prix. On a gardé l'idée d'en rajouter, avec des mots.",
  },
  "Surplis": {
    scene: "Les enfants de chœur portent un surplis blanc, léger et plissé, par-dessus leur aube.",
    origine: "Du latin « superpellicium », par-dessus la pelisse. Dans les églises glaciales du Moyen Âge, les prêtres portaient une fourrure, et le surplis se mettait par-dessus.",
  },
  "Étole": {
    scene: "Les stars des années 1950 portaient une étole de vison sur les épaules pour monter les marches.",
    origine: "Du latin « stola », la longue robe des matrones romaines. Le prêtre en porte une aussi, une bande de tissu brodée autour du cou.",
  },
  "Chanoine": {
    scene: "« Mener une vie de chanoine » : se lever tard, bien manger, et ne pas trop se fatiguer.",
    origine: "Du grec « kanôn », la règle : les chanoines vivaient selon une règle, près de la cathédrale. Leur réputation de confort est restée dans l'expression.",
  },
  "Sophisme": {
    scene: "« Tout ce qui est rare est cher ; un cheval bon marché est rare ; donc un cheval bon marché est cher. » Un sophisme : ça a l'air logique, et c'est faux.",
    origine: "Des sophistes grecs, professeurs d'éloquence payés pour apprendre à gagner n'importe quel débat. Socrate et Platon les ont accusés de préférer la victoire à la vérité.",
  },
  "Socinien": {
    scene: "Voltaire, qui se méfiait des Églises, avait un faible pour les sociniens : des croyants qui voulaient une foi raisonnable.",
    origine: "De Fausto Sozzini, dit Socin, un théologien italien du XVIe siècle qui refusait la Trinité. Ses disciples se sont surtout installés en Pologne.",
  },
  "Anabaptiste": {
    scene: "Pour un anabaptiste, un bébé ne peut pas choisir sa foi : on se fait baptiser adulte, en connaissance de cause.",
    origine: "Du grec « ana », de nouveau, et « baptizein », plonger dans l'eau : ceux qui rebaptisent. Les Amish et les mennonites en sont les héritiers.",
  },
  "Piétiste": {
    scene: "Au XVIIe siècle, en Allemagne, des luthériens lassés des grands sermons se réunissent chez eux pour lire la Bible et prier simplement : ce sont les piétistes.",
    origine: "De « piété ». Le mouvement a marqué Bach, dont beaucoup de textes de cantates en sont imprégnés.",
  },
  "Poularde": {
    scene: "Le menu de Noël du grand-père : une poularde de Bresse, des marrons, et un silence religieux autour de la table.",
    origine: "De « poule ». La plus célèbre recette lyonnaise s'appelle la « poularde demi-deuil » : des lamelles de truffe noire glissées sous la peau blanche.",
  },
  "Inviolablement": {
    scene: "Deux amis d'enfance qui se sont juré de garder un secret, et qui l'ont gardé inviolablement pendant quarante ans.",
    origine: "De « violer », au sens ancien d'enfreindre : un serment inviolable est un serment que rien ne peut briser.",
  },
  "Clameur": {
    scene: "Le but à la dernière minute, et une clameur monte du stade jusqu'à la ville.",
    origine: "Du latin « clamare », crier. En Normandie, la « clameur de haro » permettait à quiconque subissait une injustice de crier « Haro ! » pour faire tout arrêter. D'où « crier haro sur quelqu'un ».",
  },
  "Mâchelière": {
    scene: "Le dentiste de 1750 aurait parlé de vos dents mâchelières : vos molaires, celles du fond, qui écrasent tout.",
    origine: "De « mâcher ». Un mot simple et imagé, que la médecine a remplacé par le latin « molaire » (la meule).",
  },
  "Coagulé": {
    scene: "La sauce oubliée au frigo : un bloc coagulé qu'on n'ose plus toucher.",
    origine: "Du latin « coagulum », la présure, ce qui fait cailler le lait. Coaguler, c'est d'abord faire du fromage.",
  },
  "Séculaire": {
    scene: "Un chêne séculaire au milieu du village : il a vu passer plus de générations que le cimetière.",
    origine: "Du latin « saeculum », le siècle. À Rome, les Jeux séculaires ne revenaient qu'une fois par siècle : personne ne pouvait les voir deux fois. Horace écrivit un chant pour ceux de 17 avant J.-C.",
  },
  "Harangue": {
    scene: "Le capitaine qui harangue son équipe dans le vestiaire, à la mi-temps, quand on perd 2 à 0.",
    origine: "Probablement d'un mot germanique désignant le cercle, l'assemblée : on haranguait la foule réunie en rond.",
  },
  "Imposture": {
    scene: "Le faux médecin qui exerçait depuis dix ans sans diplôme : une imposture découverte par hasard.",
    aussi: "Molière en a fait une pièce : Tartuffe ou l'Imposteur, interdite pendant cinq ans parce qu'elle dérangeait les dévots.",
  },
  "Spinoziste": {
    scene: "Quand Einstein disait croire au « Dieu de Spinoza », il parlait en spinoziste : un Dieu qui est la nature elle-même, pas un juge dans le ciel.",
    origine: "De Baruch Spinoza, philosophe d'Amsterdam du XVIIe siècle, qui polissait des lentilles de lunettes pour vivre. Sa formule : « Dieu, c'est-à-dire la Nature ».",
  },
  "Théiste": {
    scene: "Voltaire se disait théiste : il croyait en un grand horloger de l'univers, mais pas aux Églises.",
    origine: "Du grec « theos », dieu. Le théiste croit en Dieu ; l'athée (a-theos), non.",
  },
  "Équité": {
    scene: "Partager une pizza entre quatre, quand l'un a faim et l'autre pas : l'égalité donne quatre parts égales, l'équité donne à chacun ce qu'il lui faut.",
    origine: "Du latin « aequus », égal, juste. La même racine que « équilibre » et « équateur ».",
  },
  "Friponnerie": {
    scene: "Faire passer son frère devant soi dans la file pour garder la meilleure place au cinéma : une petite friponnerie.",
    origine: "De « fripon », qui viendrait de « friper », chiffonner, et plus anciennement « dévorer goulûment » : le fripon était d'abord un gourmand qui chipe.",
  },
  "Janséniste": {
    scene: "Un régime sans sucre, sans alcool, sans dessert et sans sortie : c'est un mode de vie janséniste.",
    origine: "De Jansénius, évêque d'Ypres. Les jansénistes du XVIIe siècle, autour de l'abbaye de Port-Royal, pensaient que seule la grâce de Dieu sauve. Pascal les a défendus dans Les Provinciales.",
  },
  "Moliniste": {
    scene: "Jansénistes contre molinistes : la grande querelle du XVIIe siècle, entre ceux qui croient que tout est décidé d'avance et ceux qui croient au libre choix.",
    origine: "De Luis de Molina, jésuite espagnol, qui défendait la liberté humaine face à la grâce divine. Voltaire se moquait des deux camps.",
  },
  "Calcédoine": {
    scene: "Dans la boutique de minéraux, une pierre laiteuse et bleutée qui laisse passer la lumière : une calcédoine.",
    origine: "De Chalcédoine, ancienne ville grecque en face de Byzance, sur le Bosphore. Une pierre qui porte le nom d'un port.",
  },
  "Volupté": {
    scene: "Le premier bain chaud après une journée de randonnée sous la pluie : la volupté à l'état pur.",
    origine: "Du latin « voluptas », le plaisir. Épicure en faisait le but de la vie, mais un plaisir calme, loin des excès : un verre d'eau, du pain et des amis.",
  },
  "Indubitable": {
    scene: "Il est indubitable qu'un lundi matin sans café est une épreuve.",
    origine: "Du latin « dubitare », douter. Un mot élégant pour éviter de dire « c'est sûr ».",
  },
  "Âcreté": {
    scene: "L'âcreté de la fumée d'un feu de pneus, qui pique les yeux et la gorge.",
    origine: "Du latin « acer », piquant, aigu. Au figuré, on parle aussi de l'âcreté d'une remarque, qui laisse un goût amer.",
  },
  "Féculence": {
    scene: "Monsieur Purgon reproche à Argan « la féculence de ses humeurs » : un corps plein de dépôts troubles, à purger d'urgence.",
    origine: "Du latin « faecula », la lie du vin. Les « féculents » de nos assiettes (pâtes, riz, pommes de terre) viennent de la même famille : la fécule, c'est ce qui se dépose au fond.",
  },
  "Bradypepsie": {
    scene: "Le premier palier de la malédiction de Monsieur Purgon, dans Le Malade imaginaire : « Je veux que vous tombiez dans la bradypepsie… »",
    origine: "Du grec « bradus », lent, et « pepsis », digestion. Purgon fait ensuite dégringoler Argan, marche après marche : dyspepsie, apepsie, lienterie, dysenterie, hydropisie… jusqu'à la mort.",
  },
  "Dyspepsie": {
    scene: "Le repas de mariage trop riche, et la nuit d'après passée à soupirer : une dyspepsie de compétition.",
    origine: "Du grec « dys », mal, et « pepsis », digestion. Deuxième marche de l'escalier de malédictions de Monsieur Purgon.",
  },
  "Apepsie": {
    scene: "Troisième marche de la malédiction de Purgon : après la digestion lente, puis difficile, plus de digestion du tout.",
    origine: "Du grec « a- », sans, et « pepsis », digestion. Molière aligne les termes savants comme un médecin qui prononce une sentence.",
  },
  "Lienterie": {
    scene: "Dans la bouche de Monsieur Purgon, le mot sonne comme une menace solennelle. En réalité, il désigne un banal et très peu glorieux dérangement intestinal.",
    origine: "Du grec « leios », lisse, et « enteron », intestin : les aliments glissent sans être digérés. Tout le comique de Molière est là : de grands mots pour de petites misères.",
  },
  "Hydropisie": {
    scene: "Dernière marche avant la mort dans la malédiction de Purgon : « …et de l'hydropisie dans la privation de la vie ».",
    origine: "Du grec « hudôr », l'eau. Le corps gonfle d'eau : on parle aujourd'hui d'œdème. Beethoven en souffrait à la fin de sa vie.",
  },
  "Trépas": {
    scene: "« Passer de vie à trépas » : une façon poétique, presque douce, de dire mourir.",
    origine: "De « trépasser », passer au-delà (« tres », au-delà, et « passer »). Le trépas, c'est la frontière qu'on franchit.",
  },
  "Fluxion": {
    scene: "Une rage de dents et la joue qui enfle : votre grand-mère aurait dit que vous aviez une fluxion.",
    origine: "Du latin « fluere », couler : on croyait que les humeurs du corps coulaient vers l'endroit malade. La « fluxion de poitrine » était le nom ancien de la pneumonie.",
  },
  "Fiévrotte": {
    scene: "Toinette, déguisée en médecin, méprise les petites maladies : « je dédaigne de m'amuser à ces fiévrottes ». Elle veut du sérieux, de la vraie fièvre.",
    origine: "Diminutif de « fièvre », comme « menotte » pour « main ». Un mot délicieux pour une maladie de rien.",
  },
  "Pleurésie": {
    scene: "Les romans du XIXe siècle sont pleins d'héroïnes qui meurent de pleurésie après avoir pris froid sous la pluie.",
    origine: "Du grec « pleura », le côté, les côtes : la plèvre enveloppe les poumons. Rien à voir avec les pleurs, malgré les apparences.",
  },
  "Néphrétique": {
    scene: "Une colique néphrétique : une douleur dans le dos si violente qu'on la compare souvent à un accouchement.",
    origine: "Du grec « nephros », le rein. Les néphrologues, médecins des reins, portent la même racine.",
  },
  "Conglutiner": {
    scene: "Le riz trop cuit qui se conglutine au fond de la casserole en une seule masse.",
    origine: "Du latin « gluten », la colle. Le gluten du pain, qui rend la pâte élastique, vient de la même famille.",
  },
  "Oraison funèbre": {
    scene: "« Madame se meurt ! Madame est morte ! » : le cri de Bossuet, en 1670, au début de l'oraison funèbre d'Henriette d'Angleterre, fit pleurer toute la cour.",
    origine: "Du latin « oratio », le discours. Bossuet en a fait un art : on les étudie encore comme des chefs-d'œuvre d'éloquence.",
  },
  "Panégyrique": {
    scene: "Au pot de départ, le chef fait le panégyrique de son collègue : trente ans de génie, de dévouement et de bonne humeur. Les collègues se regardent.",
    origine: "Du grec « panêguris », l'assemblée de tout le peuple : le panégyrique était le discours prononcé devant la foule réunie pour une grande fête.",
  },
  "Surcroît": {
    scene: "Il a perdu ses clés, et de surcroît il pleut.",
    origine: "De « croître », grandir : le surcroît, c'est ce qui pousse en plus. « Pour un surcroît de désespoir », dit-on chez Molière, quand le malheur en rajoute.",
  },
  "Inopiné": {
    scene: "Une visite inopinée de ta belle-mère un dimanche à 9 h : le salon n'a jamais été rangé aussi vite.",
    origine: "Du latin « opinari », penser, avoir une opinion : l'inopiné est ce qu'on n'avait pas pensé du tout.",
  },
  "Hégélianisme": {
    scene: "Une dispute, puis une réconciliation, et un couple plus fort qu'avant : c'est presque de l'hégélianisme appliqué.",
    origine: "De Hegel, philosophe allemand mort en 1831, pour qui l'histoire avance en dépassant ses contradictions.",
    aussi: "La célèbre formule « thèse, antithèse, synthèse » n'est presque jamais employée par Hegel lui-même : elle vient surtout de ses commentateurs.",
  },
  "Maboul": {
    scene: "« Il veut traverser la Manche à la nage en janvier ? Il est complètement maboul ! »",
    origine: "De l'arabe maghrébin « mahbul », fou, rapporté par les soldats français d'Algérie au XIXe siècle. Comme « toubib » ou « kif-kif ».",
  },
  "Manichéisme": {
    scene: "Dans les dessins animés, il y a les gentils et les méchants : un monde manichéen, sans aucune zone grise.",
    origine: "De Mani, prophète perse du IIIe siècle, pour qui le monde était un combat entre la Lumière et les Ténèbres. Saint Augustin a été manichéen pendant près de dix ans avant de se convertir.",
  },
  "Homérique": {
    scene: "La chaise qui se dérobe sous l'oncle au milieu de son discours : un rire homérique, impossible à arrêter.",
    origine: "Dans l'Iliade, les dieux de l'Olympe sont pris d'un « rire inextinguible » en voyant Héphaïstos, le dieu boiteux, leur servir à boire en se dandinant. Le premier fou rire de la littérature.",
  },
  "Antipodes": {
    scene: "Son frère vit en Nouvelle-Zélande : quand il se couche, elle se lève. Ils sont littéralement aux antipodes.",
    origine: "Du grec « anti », contre, et « pous, podos », le pied : ceux qui ont les pieds contre les nôtres, de l'autre côté de la Terre.",
    aussi: "Près de la Nouvelle-Zélande, il existe de vraies îles des Antipodes, à peu près à l'opposé de la Normandie.",
  },
  "Contiguïté": {
    scene: "La contiguïté des appartements parisiens : on entend le voisin éternuer, et on lui dit « à vos souhaits ».",
    origine: "Du latin « contingere », toucher. Deux choses contiguës se touchent, sans rien entre elles.",
  },
  "Cadencé": {
    scene: "Le pas cadencé des soldats au défilé du 14 Juillet, tous en même temps, comme une seule machine.",
    origine: "Du latin « cadere », tomber : la cadence, c'est la façon dont les sons ou les pas retombent, régulièrement. Molière parle de « prose cadencée » pour un texte qui sonne comme une musique.",
  },
  "Émoulu": {
    scene: "Frais émoulu de son école de commerce, il voulait déjà tout réorganiser dès le premier jour.",
    origine: "D'« émoudre », aiguiser sur la meule. Une épée frais émoulue sortait de chez le rémouleur, toute neuve et bien tranchante. Le jeune diplômé aussi : brillant, mais pas encore éprouvé.",
  },
  "Effronté": {
    scene: "L'enfant de cinq ans qui répond à sa grand-mère : « T'as qu'à le faire toi-même. » Petit effronté !",
    origine: "De « front », qui désignait autrefois la honte, la pudeur (« avoir le front de… »). L'effronté est celui qui n'a plus de front : plus de honte.",
  },
  "Casse": {
    scene: "Chez Molière, Argan avale sa « prise de casse » comme d'autres prennent un café : le purgatif du matin.",
    origine: "Du grec « kassia ». C'est une longue gousse noire d'un arbre tropical, dont la pulpe purgeait les malades du XVIIe siècle.",
    aussi: "L'expression « passe-moi la rhubarbe, je te passerai le séné » vient de ces vieux remèdes : deux purgatifs qu'on s'échange, comme deux complices qui se rendent service.",
  },
  "Caquet": {
    scene: "Le vantard de la soirée explique qu'il a couru un marathon. Quelqu'un lui demande son temps. Ça lui a rabattu le caquet.",
    origine: "Du bruit de la poule qui caquette après avoir pondu, très fière d'elle. Rabattre le caquet, c'est faire taire la poule.",
  },
  "Carabistouille": {
    scene: "« Arrête tes carabistouilles, tu n'as jamais serré la main de Zidane ! »",
    origine: "Un mot belge, joyeux et sonore, qui veut dire bêtises, balivernes. Il s'est fait connaître en France grâce aux Belges, qui ont le chic pour les mots savoureux.",
  },
  "Vocable": {
    scene: "« Parle normalement ! » « Pardon, j'ai dit procrastiner : c'est juste un vocable un peu chic pour dire que je remets à demain. »",
    origine: "Du latin vocabulum, « nom, appellation », qui vient de vox, la voix : un vocable, c'est d'abord un mot qu'on fait sonner. La même famille a donné vocabulaire, vocation et voyelle. Et une église « sous le vocable de saint Michel » porte son nom comme un mot qu'on prononce sur elle.",
  },
};
