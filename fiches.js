// Les fiches enrichies : une explication vivante, chaque sens avec son exemple, et une astuce pour retenir.
// Format : "Mot": { clair: "…", sens: [["Étiquette du sens", "Explication", "Exemple"], …], retenir: "…" }
// Textes originaux, écrits pour l'appli. La définition courte (mots.js, mots-plus.js) reste pour les jeux.
const fiches = {
  "Opprobre": {
    clair: "C'est la honte qui ne reste pas dans ta tête : elle est sur la place publique. Tout le monde te montre du doigt.",
    sens: [
      ["La honte publique", "Le mépris de tout un groupe envers quelqu'un.", "Après le scandale, l'opprobre est tombé sur toute la famille."],
      ["Ce qui fait honte", "La personne ou la chose qui déshonore les autres.", "Ce tricheur est l'opprobre de son club."]
    ],
    retenir: "On « jette l'opprobre » sur quelqu'un, comme on lui jetterait de la boue. Attention : c'est un nom masculin, « un opprobre »."
  },
  "Histrion": {
    clair: "Le comédien qui en fait des tonnes. Et, par extension, quiconque transforme tout en spectacle pour se faire voir.",
    sens: [
      ["Au théâtre", "Un acteur médiocre, qui surjoue.", "Cet histrion hurlait chaque réplique comme si sa vie en dépendait."],
      ["Au figuré", "Quelqu'un qui joue la comédie en public, souvent pour manipuler.", "Sur les plateaux télé, l'histrion fait le show et oublie le fond."]
    ],
    retenir: "Les histrions étaient les acteurs bouffons de la Rome antique. Proche de « cabotin »."
  },
  "Prolixe": {
    clair: "Celui qui met trois pages là où trois lignes suffisaient. Le contraire de « concis ».",
    sens: [
      ["À l'oral", "Qui parle trop longtemps, avec trop de détails.", "Prolixe, l'oncle Marc a raconté son voyage pendant tout le repas."],
      ["À l'écrit", "Un texte trop long, qui se répète.", "Son mail prolixe noyait la seule info utile au milieu du douzième paragraphe."]
    ],
    retenir: "Pense à « prolonger » : le prolixe prolonge tout. Son contraire : laconique."
  },
  "Falot": {
    clair: "Une personne si effacée qu'on oublie qu'elle était là. Pas méchante : juste sans relief.",
    sens: [
      ["Une personne", "Sans éclat, sans caractère.", "Le héros du film est si falot qu'on s'attache au méchant."],
      ["Ancien nom", "Une grosse lanterne (d'où l'idée d'une lumière faible).", "Le gardien avançait dans la cour, un falot à la main."]
    ],
    retenir: "Une lumière de falot éclaire peu : une personne falote brille peu."
  },
  "Chantre": {
    clair: "Celui qui « chante » les louanges d'une idée, d'un pays, d'une cause, à qui veut l'entendre.",
    sens: [
      ["Au figuré", "Un défenseur enthousiaste d'une cause.", "Elle s'est faite la chantre du vélo en ville."],
      ["À l'église", "Le chanteur qui dirige les chants pendant l'office.", "Le chantre entonna le psaume, et toute l'assemblée suivit."]
    ],
    retenir: "Chantre vient de « chanter ». On dit « se faire le chantre de… »."
  },
  "Capillotracté": {
    clair: "Une explication tellement forcée qu'on a dû la tirer par les cheveux pour la faire tenir debout.",
    sens: [
      ["Un raisonnement", "Peu crédible, construit de travers.", "Ta théorie sur le complot des pigeons est un peu capillotractée."]
    ],
    retenir: "C'est du latin pour rire : « capillus » (cheveu) + « tractus » (tiré). Mot familier et savant à la fois."
  },
  "Pernicieux": {
    clair: "Le mal qui ne se voit pas venir. Il agit en douce, et quand on le remarque, les dégâts sont faits.",
    sens: [
      ["Une influence", "Nuisible, mais de manière cachée.", "Le pernicieux, avec les réseaux, c'est qu'on se compare sans s'en rendre compte."],
      ["En médecine", "Une maladie grave, qui évolue mal.", "L'anémie pernicieuse était autrefois mortelle."]
    ],
    retenir: "Différent de « délétère » : le délétère est toxique, le pernicieux est toxique ET sournois."
  },
  "Débonnaire": {
    clair: "Le grand-père qu'on n'arrive jamais à fâcher. Gentil jusqu'à en être un peu trop indulgent.",
    sens: [
      ["Le caractère", "Doux, bienveillant, peu sévère.", "Le prof débonnaire laissait passer les retards avec un sourire."],
      ["Un air", "Qui a l'air paisible et accommodant.", "Sous ses airs débonnaires, le commissaire n'oubliait rien."]
    ],
    retenir: "À l'origine « de bonne aire », de bonne race. Louis le Pieux était surnommé « le Débonnaire »."
  },
  "Délétère": {
    clair: "Quelque chose qui empoisonne, littéralement ou au figuré. Un air, une ambiance, une relation.",
    sens: [
      ["Au sens propre", "Toxique pour la santé.", "Les mineurs respiraient des gaz délétères."],
      ["Au figuré", "Qui pourrit les relations, le moral.", "Une ambiance délétère régnait dans l'équipe depuis la réorganisation."]
    ],
    retenir: "On l'emploie très souvent avec « climat » ou « ambiance »."
  },
  "Tergiverser": {
    clair: "Tourner autour du pot pour éviter de choisir. On repousse, on hésite, on change de sujet.",
    sens: [
      ["Hésiter", "Faire des détours pour ne pas décider.", "Arrête de tergiverser : on prend la pizza ou les sushis ?"]
    ],
    retenir: "Du latin « tergum vertere » : tourner le dos. Celui qui tergiverse tourne le dos à la décision."
  },
  "Pantois": {
    clair: "Tellement surpris qu'on reste la bouche ouverte, incapable de répondre.",
    sens: [
      ["Stupéfait", "Sans voix devant une surprise.", "Quand elle a annoncé qu'elle partait vivre au Japon, toute la tablée est restée pantoise."]
    ],
    retenir: "Presque toujours avec « rester » ou « laisser » : « ça m'a laissé pantois »."
  },
  "Outrecuidance": {
    clair: "Se croire tellement au-dessus des autres qu'on se permet tout, même l'impolitesse.",
    sens: [
      ["L'arrogance", "Une confiance en soi démesurée et insolente.", "Il a eu l'outrecuidance de corriger le chef devant ses propres clients."]
    ],
    retenir: "« Outre » (au-delà) + « cuider » (croire, en ancien français) : se croire au-delà de ce qu'on est."
  },
  "Narquois": {
    clair: "Le petit sourire en coin de quelqu'un qui se moque de toi sans le dire.",
    sens: [
      ["Moqueur", "Ironique, avec une pointe de malice.", "« Alors, ce régime ? », demanda-t-il d'un ton narquois en voyant mon assiette."]
    ],
    retenir: "Un air, un sourire, un ton narquois : c'est souvent dans le regard que ça se voit."
  },
  "Désuétude": {
    clair: "Ce qui ne sert plus parce que plus personne ne le fait. Comme une vieille coutume oubliée au grenier.",
    sens: [
      ["Une habitude", "L'abandon d'un usage.", "Le baisemain est tombé en désuétude."],
      ["En droit", "Une loi jamais abrogée, mais plus appliquée.", "Cette vieille loi existe encore, mais elle est tombée en désuétude."]
    ],
    retenir: "L'expression reine : « tomber en désuétude ». L'adjectif : désuet, désuète."
  },
  "Vitupérer": {
    clair: "Pester haut et fort, avec rage, contre quelqu'un ou quelque chose.",
    sens: [
      ["Protester", "Crier sa colère.", "Il vitupère contre les embouteillages chaque matin."],
      ["Blâmer", "Critiquer durement quelqu'un.", "Le critique vitupéra le film dans sa chronique."]
    ],
    retenir: "On dit « vitupérer contre » en usage courant ; « vitupérer quelqu'un » est plus littéraire."
  },
  "Valétudinaire": {
    clair: "Toujours un rhume, une migraine, un mal de dos : la santé qui ne tient jamais bien.",
    sens: [
      ["La santé", "Souvent malade, fragile.", "Ma grand-tante, valétudinaire, ne sortait jamais sans son châle."]
    ],
    retenir: "Ironie du latin : « valetudo » voulait dire la santé, bonne ou mauvaise."
  },
  "Doléances": {
    clair: "La liste de ce qui ne va pas, qu'on présente à quelqu'un qui pourrait y remédier.",
    sens: [
      ["Des plaintes", "Des réclamations exprimées à une autorité.", "Les habitants ont présenté leurs doléances au maire."],
      ["En histoire", "Les cahiers de doléances de 1789, où le peuple écrivait ses griefs au roi.", "Les cahiers de doléances ont préparé la Révolution."]
    ],
    retenir: "Presque toujours au pluriel. Même famille que « se douloir », souffrir."
  },
  "Fatuité": {
    clair: "Être tellement content de soi qu'on en devient ridicule aux yeux des autres.",
    sens: [
      ["La vanité", "Satisfaction excessive de soi.", "Avec fatuité, il expliquait le football à un ancien champion du monde."]
    ],
    retenir: "La fatuité, c'est le défaut du « fat ». Les deux viennent du latin « fatuus », sot."
  },
  "Contingence": {
    clair: "Ce qui aurait pu ne pas arriver. Le hasard, les petites circonstances de la vie.",
    sens: [
      ["En philosophie", "Ce qui peut être ou ne pas être, par opposition au nécessaire.", "Notre rencontre relève de la pure contingence."],
      ["Au quotidien", "Les détails pratiques, les obligations matérielles.", "Les contingences du quotidien (le loyer, les courses) l'éloignaient de son roman."]
    ],
    retenir: "Contingent = pas obligé d'être. Son contraire : nécessaire."
  },
  "Sardonique": {
    clair: "Le rire du méchant de film : moqueur, froid, qui se réjouit du malheur des autres.",
    sens: [
      ["Un rire, un air", "Moqueur et cruel.", "Le méchant éclata d'un rire sardonique en voyant le héros enfermé."]
    ],
    retenir: "Légende antique : une plante de Sardaigne donnait aux mourants une grimace qui ressemblait à un rire."
  },
  "Folâtrer": {
    clair: "S'amuser sans but, gaiement, comme un chiot dans l'herbe.",
    sens: [
      ["Jouer", "S'amuser légèrement, sans sérieux.", "Les enfants folâtraient dans le jardin pendant que les adultes discutaient."]
    ],
    retenir: "Même famille que « fou » et « folâtre » (gai, léger)."
  },
  "Sommité": {
    clair: "Une star de son domaine, quelqu'un que tous les spécialistes respectent.",
    sens: [
      ["Une personne", "Quelqu'un d'éminent dans sa discipline.", "Ce chirurgien est une sommité de la cardiologie."],
      ["En botanique", "Le sommet d'une plante.", "On cueille les sommités fleuries de la lavande."]
    ],
    retenir: "La sommité est au sommet. Souvent : « une sommité de la médecine »."
  },
  "Sobriquet": {
    clair: "Le surnom qu'on te colle, souvent pour se moquer d'un trait de caractère ou d'un physique.",
    sens: [
      ["Un surnom", "Familier, souvent moqueur.", "À cause de sa lenteur, on lui avait donné le sobriquet de « Tortue »."]
    ],
    retenir: "Un surnom peut être tendre ; un sobriquet a presque toujours une pointe de moquerie."
  },
  "Apocryphe": {
    clair: "Un texte, une citation ou une histoire dont on ne peut pas prouver l'origine. Peut-être faux.",
    sens: [
      ["Un texte", "Dont l'auteur ou l'authenticité est douteux.", "Cette citation attribuée à Einstein est apocryphe : il ne l'a jamais dite."],
      ["En religion", "Les livres non reconnus dans la Bible officielle.", "Les évangiles apocryphes racontent l'enfance de Jésus."]
    ],
    retenir: "Très pratique sur Internet : la plupart des citations virales sont apocryphes."
  },
  "Cantilène": {
    clair: "Une chanson douce et un peu triste, qu'on fredonne presque malgré soi.",
    sens: [
      ["Un chant", "Simple, mélodieux, mélancolique.", "Elle chantait une cantilène pour endormir son bébé."],
      ["Péjoratif", "Une plainte qu'on répète sans cesse.", "Toujours la même cantilène : « C'était mieux avant »."]
    ],
    retenir: "Même racine que « chanter » (« cantare » en latin)."
  },
  "Coercitif": {
    clair: "Ce qui force à obéir, par la menace, la sanction ou la contrainte.",
    sens: [
      ["En droit", "Une mesure qui impose une obligation.", "L'État a pris des mesures coercitives contre les pollueurs."],
      ["Dans une relation", "Un contrôle qui prive l'autre de sa liberté.", "Le contrôle coercitif peut exister sans aucun coup."]
    ],
    retenir: "La coercition, c'est la contrainte. Contraire : incitatif."
  },
  "Coterie": {
    clair: "Un petit cercle fermé qui se serre les coudes et regarde les autres de haut.",
    sens: [
      ["Un groupe", "Un clan qui défend ses intérêts.", "Le festival était tenu par une coterie de critiques parisiens."]
    ],
    retenir: "Toujours péjoratif. Plus fermé et intrigant qu'une « bande »."
  },
  "Emphase": {
    clair: "Parler avec trop de grandeur, comme un acteur de tragédie, même pour annoncer qu'il pleut.",
    sens: [
      ["Le style", "Une manière pompeuse et exagérée.", "Il a annoncé avec emphase qu'il avait réparé le grille-pain."],
      ["En grammaire", "Une mise en relief d'un mot dans la phrase.", "« Lui, je ne l'aime pas » : l'emphase porte sur « lui »."]
    ],
    retenir: "En anglais « emphasis » veut juste dire « insister » : en français, c'est souvent un excès."
  },
  "Ergoter": {
    clair: "Pinailler sur chaque virgule pour gagner une dispute, ou juste pour ne pas avoir tort.",
    sens: [
      ["Chicaner", "Contester des détails sans importance.", "On ne va pas ergoter pour deux euros sur l'addition !"]
    ],
    retenir: "Vient du latin « ergo » (donc), mot préféré des raisonneurs."
  },
  "Exhalaison": {
    clair: "Ce qui s'échappe dans l'air : un parfum de fleur, une vapeur, une odeur d'égout.",
    sens: [
      ["Agréable", "Une odeur qui flotte.", "Les exhalaisons du pain chaud envahissaient la rue."],
      ["Désagréable", "Une vapeur nauséabonde.", "Les exhalaisons du marais incommodaient le village."]
    ],
    retenir: "Même famille qu'« exhaler » et « haleine »."
  },
  "Extatique": {
    clair: "Transporté de joie au point d'oublier le reste du monde.",
    sens: [
      ["La joie", "Qui exprime un bonheur intense.", "Elle a ouvert sa lettre d'admission, extatique."],
      ["En religion", "Qui est en extase mystique.", "Le saint est représenté extatique, les yeux levés au ciel."]
    ],
    retenir: "L'extase, c'est « sortir de soi » en grec. Ne pas confondre avec « statique »."
  },
  "Fabliau": {
    clair: "Une petite histoire drôle et souvent grivoise, racontée en vers au Moyen Âge.",
    sens: [
      ["En littérature", "Un conte comique en vers, du XIIe au XIVe siècle.", "Dans ce fabliau, un paysan rusé dupe un prêtre avare."]
    ],
    retenir: "Les fabliaux sont les ancêtres des sketchs : maris trompés, curés gourmands, vilains malins."
  },
  "Farder": {
    clair: "Mettre du maquillage, sur un visage ou sur la vérité.",
    sens: [
      ["Au sens propre", "Maquiller.", "La comédienne se farde avant d'entrer en scène."],
      ["Au figuré", "Embellir, déguiser la réalité.", "Le rapport fardait les chiffres pour rassurer les actionnaires."]
    ],
    retenir: "Le fard, c'est le maquillage. Parler « sans fard », c'est parler franchement."
  },
  "Faste": {
    clair: "Deux mots en un : le nom, c'est le luxe éclatant ; l'adjectif, c'est la bonne période.",
    sens: [
      ["Nom", "Luxe, apparat, déploiement de richesse.", "Le mariage fut célébré avec un faste royal."],
      ["Adjectif", "Favorable, heureux.", "Les années 2000 furent une période faste pour le groupe."]
    ],
    retenir: "Son contraire comme adjectif : « néfaste ». Jour faste, jour néfaste."
  },
  "Fat": {
    clair: "Le prétentieux qui se regarde dans chaque vitrine. On prononce le t : « fatte ».",
    sens: [
      ["Adjectif ou nom", "Vaniteux et sot.", "Ce fat se croyait irrésistible."]
    ],
    retenir: "Rien à voir avec l'anglais « fat » (gros). Le défaut du fat : la fatuité."
  },
  "Fruste": {
    clair: "Brut, mal dégrossi : une manière, un objet ou une personne sans raffinement.",
    sens: [
      ["Une personne", "Rude, peu éduquée.", "Sous ses manières frustes, c'était un homme d'une grande bonté."],
      ["Un objet", "Simple, rudimentaire, usé.", "Une cabane fruste, quatre planches et un toit."]
    ],
    retenir: "Piège : on écrit FRUSTE, pas « frustre ». Ça n'a rien à voir avec « frustré »."
  },
  "Galéjade": {
    clair: "Une histoire énorme qu'on raconte avec aplomb pour faire rire, typique de Marseille.",
    sens: [
      ["Une blague", "Un récit inventé ou exagéré.", "Son poisson « grand comme une barque » ? Une galéjade, évidemment."]
    ],
    retenir: "Le verbe : galéjer. On pense à la sardine qui a bouché le port de Marseille."
  },
  "Galvauder": {
    clair: "Abîmer quelque chose de précieux en l'utilisant n'importe comment, jusqu'à ce qu'il ne veuille plus rien dire.",
    sens: [
      ["Un mot, une idée", "Le vider de son sens par l'abus.", "Le mot « génie » est tellement galvaudé qu'on l'emploie pour un influenceur."],
      ["Un talent", "Le gâcher.", "Il a galvaudé son talent dans des rôles indignes de lui."]
    ],
    retenir: "Un mot galvaudé, c'est un mot usé jusqu'à la corde."
  },
  "Gascon": {
    clair: "Habitant de la Gascogne, mais aussi, en littérature, le fanfaron qui en rajoute toujours.",
    sens: [
      ["Géographie", "De la Gascogne, dans le sud-ouest.", "D'Artagnan est un cadet gascon."],
      ["Littéraire", "Vantard.", "Une promesse de Gascon : beaucoup de mots, peu d'actes."]
    ],
    retenir: "Cyrano et d'Artagnan ont fait la légende des Gascons panachés et hâbleurs."
  },
  "Glose": {
    clair: "Le petit commentaire griffonné dans la marge pour expliquer un passage difficile.",
    sens: [
      ["Explication", "Note qui éclaire un mot ou un texte.", "Les étudiants médiévaux couvraient leurs manuscrits de gloses."],
      ["Commentaire malveillant", "Bavardage, critique.", "Ses vacances aux Maldives ont alimenté les gloses du bureau."]
    ],
    retenir: "Gloser sur quelque chose, c'est le commenter longuement. « Glossaire » est de la même famille."
  },
  "Hâbleur": {
    clair: "Celui qui raconte ses exploits en les gonflant à chaque fois.",
    sens: [
      ["Vantard", "Qui parle beaucoup et exagère.", "Hâbleur, il prétendait avoir dîné avec trois présidents."]
    ],
    retenir: "De l'espagnol « hablar », parler. Le hâbleur parle… surtout de lui."
  },
  "Hâve": {
    clair: "Le visage creusé et blême de quelqu'un qui n'a ni mangé ni dormi.",
    sens: [
      ["Un visage", "Pâle, maigre, épuisé.", "Les naufragés, hâves, furent enfin recueillis."]
    ],
    retenir: "Un mot très court, très littéraire. Le h est aspiré : « le hâve visage »."
  },
  "Immuable": {
    clair: "Ce qui ne bouge pas, ne change jamais, quoi qu'il arrive.",
    sens: [
      ["Constant", "Qui reste toujours identique.", "Chaque dimanche, son immuable rituel : croissant, journal, sieste."],
      ["En philosophie", "Ce qui échappe au temps.", "Platon cherchait les vérités immuables."]
    ],
    retenir: "« Im » (pas) + « muable » (qui change) : pense à « mutation »."
  },
  "Imprécation": {
    clair: "Une malédiction lancée à voix haute, avec solennité et colère.",
    sens: [
      ["Malédiction", "Souhait de malheur contre quelqu'un.", "La sorcière lança une imprécation contre le village."],
      ["En rhétorique", "Une figure où l'on appelle le malheur sur l'adversaire.", "Les imprécations de Camille, dans Horace, sont célèbres."]
    ],
    retenir: "Une insulte vise à blesser ; une imprécation appelle le malheur."
  },
  "Ingénu": {
    clair: "Quelqu'un d'une innocence touchante, qui dit ce qu'il pense sans calcul.",
    sens: [
      ["Le caractère", "Naïf et sincère.", "Avec une question ingénue, l'enfant mit tout le monde mal à l'aise."],
      ["Au théâtre", "Le rôle de la jeune fille naïve (« l'ingénue »).", "Elle a commencé sa carrière en jouant les ingénues."]
    ],
    retenir: "Voltaire a écrit « L'Ingénu », un Huron qui découvre la France avec un regard neuf."
  },
  "Liturgie": {
    clair: "Le déroulé officiel d'une cérémonie religieuse : les gestes, les chants, les mots.",
    sens: [
      ["En religion", "Les rites d'un culte.", "La liturgie de Pâques suit un ordre précis."],
      ["Au figuré", "Un rituel répété avec solennité.", "Le match du dimanche est devenu une liturgie familiale."]
    ],
    retenir: "L'adjectif : liturgique. Au figuré, ça donne une touche d'ironie."
  },
  "Magnanime": {
    clair: "Avoir une grande âme : pardonner quand on pourrait se venger.",
    sens: [
      ["Généreux", "Qui pardonne avec noblesse.", "Magnanime, la championne a consolé son adversaire battue."]
    ],
    retenir: "« Magna » (grande) + « anima » (âme). Le nom : magnanimité."
  },
  "Prosaïque": {
    clair: "Les choses concrètes et banales, sans aucune poésie.",
    sens: [
      ["Terre à terre", "Banal, matériel.", "Après la demande en mariage, retour au prosaïque : qui sort la poubelle ?"],
      ["En littérature", "Qui manque d'élan poétique.", "Ses vers sont prosaïques, on dirait une liste de courses."]
    ],
    retenir: "Vient de « prose » : ce qui ne s'élève pas jusqu'à la poésie."
  },
  "Psalmodier": {
    clair: "Réciter sur un ton qui ne monte ni ne descend, comme un moine chante les psaumes.",
    sens: [
      ["Réciter", "Chanter les psaumes sur une seule note.", "Les moines psalmodiaient dans la chapelle."],
      ["Au figuré", "Parler de façon monotone.", "Le conférencier psalmodiait ses diapos, et la salle s'endormait."]
    ],
    retenir: "Même famille que « psaume »."
  },
  "Roué": {
    clair: "Le malin sans scrupules, qui connaît tous les tours pour arriver à ses fins.",
    sens: [
      ["Rusé", "Habile et sans morale.", "Ce négociateur roué obtient toujours ce qu'il veut."],
      ["En histoire", "Le débauché du XVIIIe siècle, compagnon du Régent.", "Les roués du Régent menaient une vie de plaisirs."]
    ],
    retenir: "Ils méritaient « le supplice de la roue », disait-on. D'où le nom !"
  },
  "Taxonomie": {
    clair: "L'art de ranger le monde dans des cases bien nommées, comme les tiroirs d'un grand cabinet.",
    sens: [
      ["En biologie", "La science de la classification du vivant.", "La taxonomie range le loup dans la famille des canidés."],
      ["Ailleurs", "Tout système de classement.", "Le site utilise une taxonomie de 40 catégories de produits."]
    ],
    retenir: "Du grec « taxis » (ordre) et « nomos » (loi)."
  },
  "Trivial": {
    clair: "Un mot à trois visages : banal, évident ou vulgaire selon qui l'emploie.",
    sens: [
      ["Banal", "Ordinaire, sans intérêt.", "Ils parlaient de sujets triviaux : la météo, le trafic."],
      ["En maths", "Évident, sans difficulté.", "La solution x = 0 est triviale."],
      ["Vulgaire", "Grossier, inconvenant.", "Sa blague triviale a jeté un froid."]
    ],
    retenir: "Du latin « trivium », le carrefour : ce qu'on entend à tous les coins de rue."
  },
  "Alcôve": {
    clair: "Le coin où l'on cache le lit, et par extension tout ce qui touche à la vie amoureuse.",
    sens: [
      ["Architecture", "Un renfoncement dans une chambre pour le lit.", "Le lit était dissimulé dans une alcôve derrière un rideau."],
      ["Au figuré", "La vie intime, les secrets d'amour.", "Les secrets d'alcôve de la cour de Versailles."]
    ],
    retenir: "De l'arabe « al-qubba », la petite pièce voûtée."
  },
  "Allègre": {
    clair: "Le pas léger et la bonne humeur de quelqu'un pour qui tout va bien.",
    sens: [
      ["Joyeux", "Plein d'entrain.", "Elle partit d'un pas allègre au marché."]
    ],
    retenir: "L'allégresse, c'est la grande joie. En musique, « allegro » : vif."
  },
  "Cacochyme": {
    clair: "Le vieillard (souvent imaginaire) qui tousse, boite et se plaint de tout. Toujours un peu moqueur.",
    sens: [
      ["Avec humour", "De santé chancelante.", "Je ne suis pas encore un vieillard cacochyme, je peux porter mon sac !"]
    ],
    retenir: "Vient du grec : « mauvaises humeurs » (les liquides du corps selon la vieille médecine)."
  },
  "Chicaneur": {
    clair: "Celui qui transforme chaque détail en procès.",
    sens: [
      ["Querelleur", "Qui cherche la petite bête.", "Chicaneur, il conteste chaque ligne de la facture."]
    ],
    retenir: "La chicane : une dispute pour rien. Et une chicane, c'est aussi un passage en zigzag."
  },
  "Claustral": {
    clair: "Ce qui rappelle le cloître : le silence, l'isolement, la vie à l'écart du monde.",
    sens: [
      ["Religieux", "Qui concerne le cloître.", "La vie claustrale suit le rythme des prières."],
      ["Au figuré", "Retiré, austère.", "Il menait une existence claustrale dans son appartement."]
    ],
    retenir: "Même famille que « claustrophobie », la peur d'être enfermé."
  },
  "Déjeté": {
    clair: "Penché, tordu, sorti de son axe : un mur, un arbre ou un corps fatigué.",
    sens: [
      ["Un objet", "Déformé, dévié.", "Une vieille clôture déjetée par le vent."],
      ["Familier", "Abîmé, en mauvais état (pour une personne).", "Après cette nuit blanche, il était tout déjeté."]
    ],
    retenir: "« Jeté » de côté : ce qui n'est plus droit."
  },
  "Gastrolâtre": {
    clair: "Celui pour qui manger est une religion, et le ventre un dieu.",
    sens: [
      ["Gourmand", "Qui vit pour son estomac.", "Gastrolâtre assumé, il planifie ses vacances selon les restaurants."]
    ],
    retenir: "Rabelais l'a popularisé : « gaster » (ventre) + « latreia » (adoration)."
  },
  "Grabat": {
    clair: "Le lit du pauvre : une paillasse, un matelas défoncé.",
    sens: [
      ["Un lit", "Misérable, rudimentaire.", "Le malade gisait sur un grabat dans un coin de la mansarde."]
    ],
    retenir: "Souvent : « sur son grabat », pour évoquer la misère ou l'agonie."
  },
  "Guigner": {
    clair: "Lorgner en douce ce qu'on aimerait bien avoir.",
    sens: [
      ["Regarder", "Du coin de l'œil.", "Il guignait la copie de son voisin."],
      ["Convoiter", "Désirer discrètement.", "Elle guigne ce poste depuis des mois."]
    ],
    retenir: "Rien à voir avec la guigne (la malchance)… quoique, à force de guigner, on peut l'attraper."
  },
  "Incurie": {
    clair: "Ne s'occuper de rien, laisser tout se dégrader par négligence.",
    sens: [
      ["Négligence", "Un manque total de soin.", "Le pont s'est effondré par l'incurie des autorités."]
    ],
    retenir: "« In » (pas) + « cura » (soin). Plus grave que « négligence »."
  },
  "Ineffable": {
    clair: "Une émotion si forte ou si belle qu'aucun mot n'arrive à la dire.",
    sens: [
      ["Indicible", "Qu'on ne peut pas exprimer.", "Devant la mer au lever du jour, un bonheur ineffable."],
      ["Ironique", "Tellement ridicule qu'on ne sait plus quoi dire.", "L'ineffable conseiller nous a encore pondu une réforme."]
    ],
    retenir: "Du latin « fari », parler : ce qu'on ne peut pas dire."
  },
  "Minauder": {
    clair: "Faire des mimiques et des petites manières pour séduire ou attendrir.",
    sens: [
      ["Coquetterie", "Prendre des airs affectés.", "Elle minaudait devant le photographe."]
    ],
    retenir: "Les minauderies, ce sont ces petits gestes faussement mignons."
  },
  "Pavoiser": {
    clair: "Sortir les drapeaux : sur les façades, ou dans sa propre attitude quand on est fier.",
    sens: [
      ["Décorer", "Orner de drapeaux.", "La mairie était pavoisée pour le 14 Juillet."],
      ["Au figuré", "Se réjouir bruyamment.", "Il n'y a pas de quoi pavoiser : on a gagné un match sur dix."]
    ],
    retenir: "Le pavois, c'était le grand bouclier sur lequel on hissait le roi."
  },
  "Pensum": {
    clair: "La corvée qu'on traîne comme un boulet : un travail long, ennuyeux, obligé.",
    sens: [
      ["Corvée", "Travail pénible.", "Remplir sa déclaration d'impôts, quel pensum !"],
      ["À l'école, autrefois", "Une punition écrite.", "Il copia cent fois sa phrase en guise de pensum."]
    ],
    retenir: "On prononce « pin-somme ». Un mot latin : la tâche à peser, à faire."
  },
  "Persiflage": {
    clair: "Se moquer de quelqu'un tout en ayant l'air poli, avec élégance et ironie.",
    sens: [
      ["Moquerie", "Raillerie légère et fine.", "Son persiflage amusait la salle et vexait l'orateur."]
    ],
    retenir: "Le verbe : persifler. Pense à « siffler » : on siffle quelqu'un, mais en douceur."
  },
  "Saurien": {
    clair: "Un lézard, ou un animal qui y ressemble. Le mot évoque aussi un regard froid et immobile.",
    sens: [
      ["Zoologie", "Reptile du groupe des lézards.", "L'iguane est un saurien."],
      ["Au figuré", "Une allure de reptile, froide.", "Il nous fixait de son œil de saurien."]
    ],
    retenir: "Du grec « sauros », lézard, comme dans « dinosaure »."
  },
  "Superfluité": {
    clair: "Ce qu'on a en trop et dont on pourrait se passer.",
    sens: [
      ["Le superflu", "Une chose inutile.", "Il a vendu toutes ses superfluités pour voyager léger."]
    ],
    retenir: "Voltaire : « Le superflu, chose très nécessaire. »"
  },
  "Sylphe": {
    clair: "Un génie de l'air, léger et invisible, dans les vieilles légendes.",
    sens: [
      ["Légende", "Esprit aérien.", "Les sylphes dansaient, dit-on, dans la brume du matin."],
      ["Au figuré", "Une personne très gracieuse et légère (au féminin : sylphide).", "La danseuse semblait une sylphide."]
    ],
    retenir: "Au féminin, « sylphide » s'emploie pour une femme mince et gracieuse."
  },
  "Télescoper": {
    clair: "Deux choses qui se rentrent dedans : des voitures, ou des idées.",
    sens: [
      ["Un choc", "Heurter violemment.", "Le camion a télescopé trois voitures."],
      ["Au figuré", "Mêler des éléments qui n'ont rien à voir.", "Dans ce roman, passé et présent se télescopent."]
    ],
    retenir: "Comme les tubes d'une longue-vue qui rentrent les uns dans les autres."
  },
  "Thésauriser": {
    clair: "Mettre de l'argent de côté sans jamais le dépenser, comme un dragon sur son trésor.",
    sens: [
      ["Économie", "Accumuler de l'argent sans le faire circuler.", "En période de crise, les ménages thésaurisent."],
      ["Au figuré", "Accumuler pour garder.", "Elle thésaurise les souvenirs comme d'autres les timbres."]
    ],
    retenir: "Même racine que « trésor » (« thesaurus »)."
  },
  "Verdeur": {
    clair: "La vigueur pleine de sève de la jeunesse, ou d'un vieil homme qui a gardé sa pêche.",
    sens: [
      ["Vitalité", "Vigueur, énergie.", "Malgré ses 80 ans, il garde une verdeur étonnante."],
      ["Le langage", "Crudité, liberté de ton.", "La verdeur de son langage choquait les salons."],
      ["Un vin", "Acidité d'un vin jeune.", "Ce vin a encore de la verdeur."]
    ],
    retenir: "Le vert de la sève. On dit aussi « une vieillesse verte »."
  }
};
