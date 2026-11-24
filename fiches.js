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
};
