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
  },

  // Série 2 (2026-11-23)
  "S'absoudre": {
    clair: "Se laver soi-même d'une faute : décider qu'on n'est plus coupable, à tort ou à raison.",
    sens: [
      ["Se pardonner", "Se libérer de sa culpabilité.", "Il s'est absous un peu vite de ses mensonges."],
      ["Absoudre quelqu'un", "En religion ou en justice, déclarer pardonné ou non coupable.", "Le prêtre l'absout de ses péchés ; le tribunal l'a absous."]
    ],
    retenir: "Piège de conjugaison : absous au masculin, absoute au féminin (pas « absout »)."
  },
  "Allégation": {
    clair: "Ce qu'on affirme sans l'avoir encore prouvé. Ça peut être vrai… ou pas.",
    sens: [["Affirmation", "Une déclaration avancée sans preuve.", "Ces allégations de tricherie n'ont jamais été démontrées."]],
    retenir: "Très utilisé en justice et dans les médias : une allégation attend sa preuve."
  },
  "Amalgamer": {
    clair: "Mettre dans le même sac des choses ou des gens qui n'ont rien à voir.",
    sens: [
      ["Au figuré", "Confondre abusivement.", "Il ne faut pas amalgamer quelques casseurs avec tous les manifestants."],
      ["Au sens propre", "Mélanger des matières en un tout.", "Le dentiste amalgame le mercure et l'argent."]
    ],
    retenir: "« Faire un amalgame », c'est généraliser à tort."
  },
  "Ambivalent": {
    clair: "Aimer et détester à la fois. Avoir deux sentiments contraires sur la même chose.",
    sens: [
      ["Sentiments", "Partagé entre deux émotions opposées.", "Elle a un rapport ambivalent à sa ville natale : elle la fuit et la regrette."],
      ["Une chose", "Qui a deux aspects, deux valeurs.", "Les réseaux sociaux sont ambivalents : ils relient et isolent."]
    ],
    retenir: "« Ambi » = les deux (comme ambidextre)."
  },
  "Anachronisme": {
    clair: "Une montre au poignet d'un chevalier : quelque chose qui n'est pas à sa place dans le temps.",
    sens: [
      ["Une erreur", "Placer une chose à une époque où elle n'existait pas.", "Un téléphone dans un film sur Napoléon, quel anachronisme !"],
      ["Une survivance", "Ce qui est dépassé, d'un autre âge.", "Le fax est devenu un anachronisme."]
    ],
    retenir: "« Ana » (en arrière) + « chronos » (temps)."
  },
  "Apothicaire": {
    clair: "Le pharmacien d'autrefois, entouré de pots de poudres, d'herbes et d'onguents.",
    sens: [
      ["Le métier", "Celui qui préparait et vendait les remèdes.", "L'apothicaire broyait des herbes dans son mortier."],
      ["Expression", "« Un compte d'apothicaire » : un calcul compliqué et pointilleux.", "Le partage de l'addition a tourné au compte d'apothicaire."]
    ],
    retenir: "Les apothicaires gonflaient leurs factures, d'où les « comptes d'apothicaire »."
  },
  "Assertion": {
    clair: "Une phrase qu'on présente comme vraie, avec assurance.",
    sens: [["Affirmation", "Ce qu'on avance comme vrai.", "Son assertion selon laquelle la Terre est plate a fait rire la classe."]],
    retenir: "Une assertion affirme ; une allégation affirme sans preuve."
  },
  "Auguste": {
    clair: "Si majestueux qu'on baisse un peu la voix. Et aussi… le clown au nez rouge !",
    sens: [
      ["Adjectif", "Noble, majestueux, qui impose le respect.", "L'auguste assemblée se leva à l'entrée du roi."],
      ["Au cirque", "Le clown maladroit qui fait rire, face au clown blanc.", "L'auguste trébucha et tout le chapiteau éclata de rire."]
    ],
    retenir: "Vient de l'empereur Auguste. Le clown porte ce nom par ironie."
  },
  "Bringuebalant": {
    clair: "Qui tremble, cliquette et menace de tomber à chaque pas.",
    sens: [["Branlant", "Qui tient mal, secoué.", "On a traversé la campagne dans un vieux bus bringuebalant."]],
    retenir: "On dit aussi « brinquebalant ». Le son du mot imite le cahot."
  },
  "Cathartique": {
    clair: "Ce qui fait sortir ce qu'on gardait en soi, et qui soulage après.",
    sens: [
      ["Psychologie", "Qui libère des émotions refoulées.", "Pleurer devant ce film a été cathartique."],
      ["Théâtre", "Chez Aristote, la tragédie purge les passions du spectateur.", "La tragédie a une fonction cathartique."]
    ],
    retenir: "La catharsis : la « purification » en grec."
  },
  "Cantonné": {
    clair: "Coincé dans une case dont on n'arrive pas à sortir.",
    sens: [
      ["Limité", "Réduit à un rôle, un domaine.", "Longtemps cantonnée aux seconds rôles, elle explose enfin."],
      ["Armée", "Des troupes installées dans un lieu.", "Le régiment était cantonné au village."]
    ],
    retenir: "Un canton, c'est un petit territoire : on y est cantonné."
  },
  "Châtier": {
    clair: "Punir sévèrement… ou polir son style jusqu'à ce qu'il soit impeccable.",
    sens: [
      ["Punir", "Infliger une punition.", "Le roi châtia les traîtres."],
      ["Le langage", "Soigner, épurer son expression.", "Il parle une langue châtiée, sans un mot de travers."]
    ],
    retenir: "Proverbe : « Qui aime bien châtie bien »."
  },
  "Chérubin": {
    clair: "Le petit ange joufflu des tableaux, et l'enfant adorable qui lui ressemble.",
    sens: [
      ["Religion et art", "Ange représenté en enfant ailé.", "Des chérubins dorés ornent le plafond de l'église."],
      ["Un enfant", "Mignon, à la tête d'ange.", "Leur chérubin dort enfin, après trois histoires."]
    ],
    retenir: "Dans la Bible, les chérubins sont pourtant des anges puissants, pas des bébés !"
  },
  "Clivant": {
    clair: "Un sujet qui coupe une salle en deux : on est pour ou contre, sans milieu.",
    sens: [["Qui divise", "Qui sépare les opinions en camps opposés.", "La pizza à l'ananas, sujet clivant par excellence."]],
    retenir: "Le clivage, en géologie, c'est la ligne où une roche se fend."
  },
  "Confins": {
    clair: "Le bout du bout, là où un territoire se termine.",
    sens: [
      ["Géographie", "Les limites extrêmes d'un territoire.", "Ils vivent aux confins de la Mongolie."],
      ["Au figuré", "La limite entre deux domaines.", "Aux confins de la science et du rêve."]
    ],
    retenir: "Toujours au pluriel. Même famille que « confiner »."
  },
  "Consensus": {
    clair: "Le moment où tout le monde finit par être d'accord, ou presque.",
    sens: [["Accord", "Accord général d'un groupe.", "Après deux heures de débat, un consensus s'est dégagé : on va au resto."]],
    retenir: "L'adjectif « consensuel » est parfois péjoratif : fade, qui ne fâche personne."
  },
  "Crépiter": {
    clair: "Le petit bruit sec et répété du feu de bois, de la pluie sur une tôle ou des applaudissements.",
    sens: [["Le son", "Faire une suite de petits claquements.", "Les bûches crépitaient dans la cheminée."]],
    retenir: "Un mot qui imite son propre bruit (une onomatopée cachée)."
  },
  "Décharné": {
    clair: "Si maigre qu'on devine les os sous la peau.",
    sens: [
      ["Un corps", "Très maigre.", "Le chien errant, décharné, cherchait à manger."],
      ["Un paysage", "Dénudé, sans végétation.", "Les arbres décharnés de l'hiver."]
    ],
    retenir: "« Dé » + « chair » : qui a perdu sa chair."
  },
  "Détonner": {
    clair: "Être la note fausse du tableau : ne pas aller avec le reste.",
    sens: [
      ["Ne pas s'accorder", "Contraster de façon choquante.", "Son costume fluo détonnait au milieu des tenues noires."],
      ["En musique", "Chanter faux.", "Le choriste détonnait à chaque refrain."]
    ],
    retenir: "Piège : détoNNer (le ton) ≠ déToner (exploser, la détonation)."
  },
  "Discordance": {
    clair: "Quand les choses ne s'accordent pas : des sons, des avis, des versions.",
    sens: [
      ["Désaccord", "Différence entre des versions.", "Les enquêteurs ont relevé des discordances dans son témoignage."],
      ["Musique", "Sons qui ne s'harmonisent pas.", "La discordance des violons faisait grincer des dents."]
    ],
    retenir: "Contraire : concordance. Même famille que « discorde »."
  },
  "Éberlué": {
    clair: "Les yeux ronds, la bouche ouverte : tellement surpris qu'on n'y croit pas.",
    sens: [["Stupéfait", "Ébahi, abasourdi.", "Éberlué, il regarda son chat ouvrir la porte du frigo."]],
    retenir: "Proche de « pantois » ; éberlué insiste sur le regard incrédule."
  },
  "Échine": {
    clair: "Le dos, la colonne : et au figuré, la fierté qu'on garde droite ou qu'on courbe.",
    sens: [
      ["Le corps", "La colonne vertébrale.", "Un frisson lui parcourut l'échine."],
      ["Au figuré", "« Courber l'échine » : se soumettre.", "Il refusa de courber l'échine devant son patron."]
    ],
    retenir: "« Avoir l'échine souple » : être servile, obséquieux."
  },
  "Écroué": {
    clair: "Inscrit au registre de la prison : enfermé officiellement.",
    sens: [["Emprisonné", "Mis en détention.", "Le suspect a été écroué hier soir."]],
    retenir: "L'écrou, c'est le registre d'entrée de la prison (rien à voir avec la vis)."
  },
  "Enclin": {
    clair: "Avoir un penchant naturel pour quelque chose, comme une pente qu'on descend facilement.",
    sens: [["Tendance", "Porté à faire quelque chose.", "Fatigué, il est enclin à tout voir en noir."]],
    retenir: "Toujours suivi de « à ». Même idée que « incliné »."
  },
  "Éolien": {
    clair: "Tout ce qui vient du vent, ou qui est aussi léger que lui.",
    sens: [
      ["Le vent", "Mû par le vent.", "Un parc éolien tourne au large de la côte."],
      ["Poétique", "Léger, aérien, mélodieux.", "La harpe éolienne chante quand le vent passe."]
    ],
    retenir: "Éole, le dieu grec des vents."
  },
  "Épigraphe": {
    clair: "La petite citation en tête d'un livre qui donne le ton avant même la première page.",
    sens: [
      ["Littérature", "Citation placée en tête d'un ouvrage.", "Le roman s'ouvre sur une épigraphe de Baudelaire."],
      ["Architecture", "Inscription sur un monument.", "L'épigraphe gravée au fronton indique la date."]
    ],
    retenir: "Ne pas confondre avec l'épitaphe (sur une tombe) ni l'exergue."
  },
  "Épître": {
    clair: "Une lettre, mais avec de l'allure : longue, soignée, souvent publique.",
    sens: [
      ["Religion", "Les lettres des apôtres dans le Nouveau Testament.", "On lut l'épître de saint Paul."],
      ["Avec humour", "Une lettre interminable.", "Il m'a envoyé une épître de six pages pour s'excuser."]
    ],
    retenir: "Un accent circonflexe sur le i, souvenir du s latin (epistola)."
  },
  "Ériger": {
    clair: "Dresser bien haut : une statue, ou une idée qu'on élève au rang de règle.",
    sens: [
      ["Construire", "Élever un monument.", "On érigea une statue en son honneur."],
      ["Ériger en", "Faire passer pour, élever au rang de.", "Il a érigé la paresse en art de vivre."]
    ],
    retenir: "« S'ériger en juge » : se donner soi-même le droit de juger."
  },
  "Exhaustif": {
    clair: "Qui fait le tour complet, sans rien oublier.",
    sens: [["Complet", "Qui traite tout le sujet.", "Voici la liste exhaustive des ingrédients."]],
    retenir: "Vient d'« épuiser » : on épuise le sujet."
  },
  "Fac-similé": {
    clair: "La copie si fidèle d'un document qu'on la confondrait avec l'original.",
    sens: [["Copie", "Reproduction exacte.", "Le musée expose un fac-similé du manuscrit, l'original est trop fragile."]],
    retenir: "Latin « fac simile » : fais semblable. Le mot « fax » en vient."
  },
  "Factieux": {
    clair: "Le comploteur qui forme un clan pour renverser le pouvoir.",
    sens: [["Rebelle", "Qui fomente des troubles contre l'État.", "Les factieux ont tenté de s'emparer du palais."]],
    retenir: "Une faction, c'est un groupe rebelle."
  },
  "Faire fi de": {
    clair: "Balayer d'un revers de main, comme si ça n'existait pas.",
    sens: [["Mépriser", "Ne pas tenir compte.", "Faisant fi des conseils, il est parti sans parapluie."]],
    retenir: "« Fi ! » était une interjection de dégoût, comme « pouah ! »."
  },
  "Félonie": {
    clair: "La pire des trahisons : celle envers quelqu'un à qui on avait juré fidélité.",
    sens: [
      ["Moyen Âge", "Trahison d'un vassal envers son seigneur.", "Le chevalier fut banni pour félonie."],
      ["Aujourd'hui", "Déloyauté, traîtrise.", "Passer chez le club rival ? Une félonie pour les supporters !"]
    ],
    retenir: "Le traître s'appelle un félon."
  },
  "Se fourvoyer": {
    clair: "Partir dans la mauvaise direction, sur la route ou dans ses idées.",
    sens: [["Se tromper", "Faire fausse route.", "Les enquêteurs se sont fourvoyés pendant des mois."]],
    retenir: "« Hors de la voie » : fors + voie."
  },
  "Fustiger": {
    clair: "Fouetter avec les mots : critiquer avec une grande violence.",
    sens: [
      ["Critiquer", "Blâmer durement.", "L'éditorial fustige l'incompétence du gouvernement."],
      ["Ancien sens", "Frapper à coups de bâton.", "Le coupable fut fustigé sur la place."]
    ],
    retenir: "Du latin « fustis », le bâton."
  },
  "Gérontocratie": {
    clair: "Quand ce sont toujours les plus vieux qui décident de tout.",
    sens: [["Pouvoir", "Gouvernement par les anciens.", "Ce parti est une gérontocratie : la moyenne d'âge du bureau est de 75 ans."]],
    retenir: "« Géronto » (vieillard, comme gériatrie) + « cratie » (pouvoir)."
  },
  "Grabataire": {
    clair: "Le malade qui ne peut plus quitter son lit.",
    sens: [["Alité", "Qui ne peut plus se lever.", "Sa grand-mère, grabataire, recevait les visites dans sa chambre."]],
    retenir: "Même famille que « grabat », le lit misérable."
  },
  "Grief": {
    clair: "Ce qu'on reproche à quelqu'un, le motif de la plainte.",
    sens: [["Reproche", "Motif de plainte.", "Elle a exposé tous ses griefs contre son voisin."]],
    retenir: "« Faire grief à quelqu'un de quelque chose » : le lui reprocher."
  },
  "Hétéroclite": {
    clair: "Un bric-à-brac d'éléments qui n'ont rien à faire ensemble.",
    sens: [["Disparate", "Fait d'éléments très différents.", "Une collection hétéroclite : un casque viking, une théière et un vinyle."]],
    retenir: "« Hétéro » = autre, différent."
  },
  "Hymen": {
    clair: "Un mot poétique pour le mariage, venu du dieu grec des noces.",
    sens: [
      ["Poétique", "Le mariage.", "Les deux familles célébrèrent l'hymen des jeunes gens."],
      ["Anatomie", "Une membrane du corps féminin.", "Le mot a aussi un sens médical."]
    ],
    retenir: "Hyménée est un synonyme encore plus poétique."
  },
  "Incoercible": {
    clair: "Impossible à retenir, à contenir : un fou rire, une envie, une toux.",
    sens: [["Irrépressible", "Qu'on ne peut maîtriser.", "Un fou rire incoercible le prit en pleine réunion."]],
    retenir: "Le contraire de coercitif : rien ne peut le contraindre."
  },
  "Infamant": {
    clair: "Ce qui salit la réputation, laisse une marque de honte.",
    sens: [["Déshonorant", "Qui couvre d'infamie.", "Une accusation infamante, même fausse, laisse des traces."]],
    retenir: "L'infamie, c'est la honte extrême (la « mauvaise fama », renommée)."
  },
  "Injonction": {
    clair: "Un ordre pressant, qui ne laisse pas le choix.",
    sens: [
      ["Ordre", "Commandement formel.", "Il a reçu une injonction de quitter les lieux."],
      ["Société", "Une pression sociale à faire ou être quelque chose.", "L'injonction au bonheur sur les réseaux épuise."]
    ],
    retenir: "« Injonction paradoxale » : « Sois spontané ! » (impossible à respecter)."
  },
  "Ineptie": {
    clair: "Une bêtise tellement grosse qu'on ne sait pas par où la prendre.",
    sens: [["Absurdité", "Propos ou acte stupide.", "Dire que les poissons ne dorment jamais ? Une ineptie."]],
    retenir: "L'adjectif : inepte. On prononce « i-nèp-si »."
  },
  "Intangible": {
    clair: "Qu'on ne peut pas toucher : soit parce que c'est immatériel, soit parce que c'est sacré.",
    sens: [
      ["Immatériel", "Qui ne se touche pas.", "La réputation est un bien intangible."],
      ["Inviolable", "Qu'on ne doit pas modifier.", "Pour lui, la sieste est un principe intangible."]
    ],
    retenir: "« Tangere » = toucher (comme tangible, contact)."
  },
  "Irrévérencieux": {
    clair: "Qui ne s'incline devant rien : impertinent, souvent pour faire rire.",
    sens: [["Impertinent", "Qui manque de respect.", "Un humoriste irrévérencieux qui se moque des puissants."]],
    retenir: "La révérence, c'est le salut respectueux. Irrévérencieux : sans salut."
  },
  "Larcin": {
    clair: "Un petit vol, sans violence, presque discret.",
    sens: [["Vol", "Petit vol, chapardage.", "Son larcin : trois pommes dans le verger du voisin."]],
    retenir: "Plus léger que « vol » : on parle de larcin pour les petites choses."
  },
  "Libelliste": {
    clair: "L'auteur de pamphlets courts et piquants, souvent pour attaquer quelqu'un.",
    sens: [["Écrivain satirique", "Auteur de libelles.", "Les libellistes du XVIIIe siècle ridiculisaient la reine."]],
    retenir: "Un libelle, c'est un petit écrit diffamatoire."
  },
  "Lie": {
    clair: "Le dépôt au fond de la bouteille, et au figuré, ce que certains méprisent comme « le fond » de la société.",
    sens: [
      ["Le vin", "Le dépôt au fond d'un tonneau.", "Ne secoue pas la bouteille, tu vas remuer la lie."],
      ["Au figuré", "Le plus bas, le plus vil.", "« La lie de l'humanité », disait-il avec mépris."],
      ["Expression", "« Boire la coupe jusqu'à la lie » : subir jusqu'au bout.", "Il a bu le calice jusqu'à la lie."]
    ],
    retenir: "La couleur « lie-de-vin » : un rouge violacé."
  },
  "Lorgnon": {
    clair: "Les lunettes sans branches qu'on tenait devant ses yeux d'un air savant.",
    sens: [["Lunettes", "Verres tenus à la main ou pincés sur le nez.", "Le notaire ajusta son lorgnon pour lire le testament."]],
    retenir: "Même famille que « lorgner », regarder avec insistance."
  },
  "Macrocosme": {
    clair: "L'univers entier vu comme un grand tout, dont l'homme serait le reflet en miniature.",
    sens: [["L'univers", "Le monde dans son ensemble.", "Pour les alchimistes, l'homme est un microcosme qui reflète le macrocosme."]],
    retenir: "« Macro » (grand) + « cosmos » (monde). Le petit : microcosme."
  },
  "Magnificence": {
    clair: "Une splendeur qui coupe le souffle, ou une générosité de prince.",
    sens: [
      ["Splendeur", "Beauté grandiose.", "La magnificence de la galerie des Glaces."],
      ["Générosité", "Libéralité fastueuse.", "Il reçut ses invités avec magnificence."]
    ],
    retenir: "Même famille que magnifique, magnanime."
  },
  "Métastase": {
    clair: "Quand un mal se propage loin de son point de départ.",
    sens: [
      ["Médecine", "Foyer secondaire d'un cancer.", "Le médecin cherche d'éventuelles métastases."],
      ["Au figuré", "Propagation d'un mal.", "La corruption a fait des métastases dans toute l'administration."]
    ],
    retenir: "En grec : « déplacement »."
  },
  "Occlusion": {
    clair: "Une fermeture, un bouchon : là où plus rien ne passe.",
    sens: [
      ["Médecine", "Blocage d'un conduit.", "Une occlusion intestinale nécessite une opération."],
      ["Phonétique", "Fermeture de la bouche pour prononcer p, t, k.", "Le p demande une occlusion des lèvres."]
    ],
    retenir: "Même famille qu'« occlure », fermer."
  },
  "Omerta": {
    clair: "La loi du silence : personne ne parle, par peur ou par loyauté.",
    sens: [
      ["Mafia", "Le code du silence.", "L'omerta protège les parrains."],
      ["Au figuré", "Silence imposé dans un groupe.", "Une omerta régnait sur le harcèlement dans l'entreprise."]
    ],
    retenir: "Mot italien du sud. « Briser l'omerta » : oser parler."
  },
  "Onirique": {
    clair: "Qui ressemble à un rêve : étrange, flottant, irréel.",
    sens: [["Le rêve", "Qui évoque le rêve.", "Ce film aux images oniriques ressemble à un rêve éveillé."]],
    retenir: "Du grec « oneiros », le rêve."
  },
  "Oxymore": {
    clair: "Coller deux mots contraires pour créer une image saisissante.",
    sens: [["Figure de style", "Alliance de deux termes opposés.", "« Un silence assourdissant » : un oxymore."]],
    retenir: "Le mot est lui-même un oxymore : en grec, « pointu-émoussé »."
  },
  "Parasocial": {
    clair: "Avoir l'impression de connaître quelqu'un qu'on suit sur un écran, alors qu'il ignore qu'on existe.",
    sens: [["Relation", "Lien affectif à sens unique avec une célébrité.", "Pleurer la rupture d'un youtubeur, c'est une relation parasociale."]],
    retenir: "« Para » = à côté : une relation à côté du vrai lien social."
  },
  "Parfaire": {
    clair: "Donner la dernière touche pour que ce soit parfait.",
    sens: [["Achever", "Compléter, perfectionner.", "Elle a passé un an à Madrid pour parfaire son espagnol."]],
    retenir: "Se conjugue comme faire."
  },
  "Pérégrination": {
    clair: "Un long voyage plein de détours, d'étapes et d'aventures.",
    sens: [["Voyage", "Allées et venues, périple.", "Il nous a raconté ses pérégrinations en Amérique du Sud."]],
    retenir: "Le pèlerin vient du même mot latin (peregrinus, étranger)."
  },
  "Peuchère": {
    clair: "Le soupir du Midi : pitié, tendresse ou étonnement, selon le ton.",
    sens: [["Exclamation", "Pour plaindre ou s'étonner.", "Peuchère, il a encore perdu ses clés !"]],
    retenir: "Du provençal « pecaire », pécheur."
  },
  "Phraséologie": {
    clair: "La manière de tourner ses phrases, et parfois l'art de parler pour ne rien dire.",
    sens: [
      ["Le style", "Tournures propres à quelqu'un ou à un milieu.", "La phraséologie juridique est déroutante."],
      ["Péjoratif", "Discours creux et ronflant.", "Derrière la phraséologie du discours, aucune mesure concrète."]
    ],
    retenir: "La « langue de bois » est une phraséologie."
  },
  "Pourparlers": {
    clair: "Les discussions qui préparent un accord, avant de signer.",
    sens: [["Négociations", "Échanges préliminaires.", "Les pourparlers de paix ont repris à Genève."]],
    retenir: "Toujours au pluriel. « Entrer en pourparlers »."
  },
  "Pudibond": {
    clair: "Si gêné par tout ce qui touche au corps qu'il rougit pour un rien.",
    sens: [["Pudique à l'excès", "Qui s'effarouche facilement.", "Une tante pudibonde qui couvre les statues nues."]],
    retenir: "Un mot moqueur. Proche de « prude »."
  },
  "Rétropédaler": {
    clair: "Faire marche arrière sur ce qu'on a dit ou décidé.",
    sens: [["Revenir en arrière", "Se dédire, reculer.", "Face au tollé, le ministre a rétropédalé."]],
    retenir: "L'image du vélo : on pédale à l'envers."
  },
  "Saprelotte": {
    clair: "Un juron de grand-père, rigolo et sans méchanceté.",
    sens: [["Juron", "Exclamation de surprise ou de colère.", "Saprelotte ! J'ai oublié le gâteau dans le four !"]],
    retenir: "Une déformation de « sacré nom »."
  },
  "Somatique": {
    clair: "Ce qui touche au corps, par opposition à l'esprit.",
    sens: [["Le corps", "Qui concerne le corps.", "Le stress peut avoir des effets somatiques : maux de ventre, insomnies."]],
    retenir: "« Psychosomatique » : quand l'esprit rend le corps malade."
  },
  "Spoliation": {
    clair: "Dépouiller quelqu'un de ce qui lui appartient, par la force ou par la ruse.",
    sens: [["Dépossession", "Vol légalisé ou injuste.", "Les familles réclament la restitution des œuvres issues de spoliations."]],
    retenir: "Le verbe : spolier. Rien à voir avec « spoiler » !"
  },
  "Suave": {
    clair: "D'une douceur qui caresse : un parfum, une voix, une musique.",
    sens: [["Doux", "Agréable aux sens.", "Une voix suave annonça le départ du train."]],
    retenir: "La suavité. Parfois ironique : un ton suave qui cache un piège."
  },
  "Subversif": {
    clair: "Ce qui ébranle l'ordre établi, en douce ou ouvertement.",
    sens: [["Contestataire", "Qui menace l'ordre, les valeurs en place.", "Ce livre fut interdit pour ses idées subversives."]],
    retenir: "« Subvertir » : renverser par en dessous."
  },
  "Tanner": {
    clair: "Insister encore et encore, jusqu'à ce que l'autre craque. Et aussi : traiter le cuir.",
    sens: [
      ["Familier", "Harceler, importuner.", "Les enfants m'ont tanné toute la journée pour une glace."],
      ["Artisanat", "Transformer une peau en cuir.", "Le tanneur tanne les peaux au bord de la rivière."]
    ],
    retenir: "Peau tannée : brunie, durcie, comme du cuir."
  },
  "Tellurique": {
    clair: "Qui vient de la Terre, du sol, des profondeurs.",
    sens: [
      ["Géologie", "Lié à la terre : « secousse tellurique », un séisme.", "Une secousse tellurique a été ressentie cette nuit."],
      ["Astronomie", "Planète rocheuse comme la Terre.", "Mars est une planète tellurique."]
    ],
    retenir: "Tellus, la déesse romaine de la Terre."
  },
  "Tiraillé": {
    clair: "Tiré de deux côtés à la fois, sans savoir lequel choisir.",
    sens: [["Partagé", "Déchiré entre deux choix.", "Tiraillée entre son job et sa passion, elle hésite."]],
    retenir: "On peut aussi avoir des tiraillements d'estomac."
  },
  "Torgnole": {
    clair: "Une bonne gifle, dans le langage familier.",
    sens: [["Familier", "Gifle, coup.", "Il s'est pris une torgnole en pleine figure."]],
    retenir: "Synonymes savoureux : beigne, baffe, mandale, taloche."
  },
  "Versatile": {
    clair: "Qui change d'avis comme de chemise.",
    sens: [["Changeant", "Inconstant, instable.", "Le public est versatile : adulé hier, oublié demain."]],
    retenir: "Faux ami ! En anglais, « versatile » veut dire polyvalent."
  },
  "Acrasie": {
    clair: "Savoir ce qui est bon pour soi… et faire exactement l'inverse.",
    sens: [["Philosophie", "Faiblesse de la volonté.", "Je sais que je dois dormir, mais je scrolle : c'est l'acrasie."]],
    retenir: "Les Grecs se demandaient déjà comment c'était possible (Socrate, Aristote)."
  },
  "Allégresse": {
    clair: "Une joie qui déborde et se partage, qui donne envie de danser.",
    sens: [["Joie", "Joie vive et collective.", "La victoire fut accueillie dans l'allégresse générale."]],
    retenir: "Même famille qu'« allègre »."
  },
  "Aplomb": {
    clair: "Être sûr de soi, droit dans ses bottes : parfois avec culot.",
    sens: [
      ["Assurance", "Confiance en soi.", "Elle répond aux questions avec un aplomb admirable."],
      ["Culot", "Audace effrontée.", "Quel aplomb de mentir en le regardant dans les yeux !"],
      ["Technique", "La verticale.", "Le mur n'est pas d'aplomb."]
    ],
    retenir: "Le fil à plomb mesure la verticale : se tenir d'aplomb, c'est être droit."
  },
  "Appétence": {
    clair: "Un goût, une attirance naturelle pour quelque chose.",
    sens: [["Attirance", "Envie, inclination.", "Il a une appétence pour les vieilles pierres."]],
    retenir: "Même famille qu'« appétit »."
  },
  "Archaïque": {
    clair: "Venu d'un temps très ancien, et souvent dépassé aujourd'hui.",
    sens: [
      ["Ancien", "Qui appartient à un passé lointain.", "La Grèce archaïque précède l'âge classique."],
      ["Dépassé", "Désuet, obsolète.", "Ce règlement est archaïque."]
    ],
    retenir: "Un archaïsme : un mot ou un usage ancien."
  },
  "Binette": {
    clair: "Une tête, une frimousse, en familier et souvent avec tendresse.",
    sens: [
      ["Familier", "Visage.", "T'as vu sa binette quand il a ouvert le cadeau ?"],
      ["Jardinage", "Outil pour biner la terre.", "Elle a sarclé le potager à la binette."]
    ],
    retenir: "Au Québec, une « binette » est un smiley !"
  },
  "Bourlinguer": {
    clair: "Rouler sa bosse aux quatre coins du monde, vivre mille aventures.",
    sens: [["Voyager", "Voyager beaucoup.", "Il a bourlingué sur tous les océans avant de s'installer."]],
    retenir: "À l'origine, un bateau qui « bourlingue » avance péniblement contre le vent."
  },
  "Bravade": {
    clair: "Le défi lancé pour montrer qu'on n'a pas peur, souvent par orgueil.",
    sens: [["Provocation", "Fanfaronnade, défi.", "Par bravade, il a sauté dans l'eau glacée."]],
    retenir: "Plus d'esbroufe que de vrai courage."
  },
  "Calomnie": {
    clair: "Un mensonge qu'on répand exprès pour salir quelqu'un.",
    sens: [["Diffamation", "Accusation mensongère.", "La calomnie s'est répandue plus vite que le démenti."]],
    retenir: "Beaumarchais : « Calomniez, calomniez, il en restera toujours quelque chose. »"
  },
  "Carabiné": {
    clair: "Extrêmement fort, violent, au point de mettre KO.",
    sens: [["Intense", "Très fort.", "J'ai une migraine carabinée."]],
    retenir: "Comme un coup de carabine."
  },
  "Coalition": {
    clair: "Plusieurs camps qui s'unissent contre un adversaire commun.",
    sens: [["Alliance", "Union temporaire.", "Une coalition de pays s'est formée."]],
    retenir: "Souvent temporaire : on s'allie le temps de gagner."
  },
  "Conspuer": {
    clair: "Huer quelqu'un publiquement, le couvrir de sifflets.",
    sens: [["Huer", "Manifester son mépris bruyamment.", "L'arbitre fut conspué par tout le stade."]],
    retenir: "Du latin « conspuere », cracher sur."
  },
  "Dogme": {
    clair: "Une vérité qu'on n'a pas le droit de discuter.",
    sens: [
      ["Religion", "Vérité de foi.", "Le dogme de la Trinité."],
      ["Au figuré", "Une idée imposée comme indiscutable.", "Le « toujours plus » est devenu un dogme."]
    ],
    retenir: "Dogmatique : qui affirme sans accepter la discussion."
  },
  "Embruns": {
    clair: "La poussière d'eau salée que le vent arrache aux vagues.",
    sens: [["La mer", "Fines gouttelettes portées par le vent.", "Les embruns nous fouettaient le visage sur la jetée."]],
    retenir: "Presque toujours au pluriel."
  },
  "Effluves": {
    clair: "Des odeurs qui flottent et arrivent jusqu'à vous.",
    sens: [["Odeurs", "Émanations, bonnes ou mauvaises.", "Des effluves de café chaud montaient de la cuisine."]],
    retenir: "Masculin : « des effluves enivrants »."
  },
  "Embaumer": {
    clair: "Remplir l'air d'un parfum… ou préserver un corps.",
    sens: [
      ["Parfumer", "Sentir très bon.", "Le lilas embaume tout le jardin."],
      ["Conserver", "Traiter un corps pour qu'il ne se décompose pas.", "Les Égyptiens embaumaient les pharaons."]
    ],
    retenir: "Le baume, substance parfumée, est à l'origine des deux sens."
  },
  "Endémique": {
    clair: "Ce qui est propre à un endroit, ou qui revient sans cesse comme une maladie chronique.",
    sens: [
      ["Biologie", "Espèce qu'on ne trouve qu'à un endroit.", "Le lémurien est endémique de Madagascar."],
      ["Au figuré", "Mal permanent.", "Le chômage est endémique dans la région."]
    ],
    retenir: "Différent d'« épidémique » (qui éclate puis passe)."
  },
  "Envenimer": {
    clair: "Mettre du poison dans une situation déjà tendue.",
    sens: [["Aggraver", "Rendre plus vif un conflit.", "Ses remarques ont envenimé la dispute."]],
    retenir: "Une plaie envenimée s'infecte ; une querelle aussi."
  },
  "Ésotérique": {
    clair: "Réservé à quelques initiés, mystérieux pour les autres.",
    sens: [
      ["Occulte", "Lié aux savoirs secrets.", "Des livres ésotériques sur l'alchimie."],
      ["Incompréhensible", "Obscur pour le non-spécialiste.", "Son exposé était ésotérique pour toute la salle."]
    ],
    retenir: "Contraire : exotérique (ouvert à tous)."
  },
  "Exproprier": {
    clair: "Forcer quelqu'un à céder son bien, au nom de l'intérêt public.",
    sens: [["Droit", "Retirer une propriété.", "Les maisons ont été expropriées pour construire l'autoroute."]],
    retenir: "« Ex » (hors de) + propriété."
  },
  "Hégémonie": {
    clair: "Être le chef incontesté qui domine tous les autres.",
    sens: [["Domination", "Suprématie d'un groupe, d'un pays.", "L'hégémonie de ce géant du numérique inquiète."]],
    retenir: "Du grec « hêgemôn », le chef."
  },
  "Illusoire": {
    clair: "Qui a l'air réel, mais s'évapore quand on s'en approche.",
    sens: [["Trompeur", "Qui ne repose sur rien de réel.", "Espérer finir ce dossier ce soir est illusoire."]],
    retenir: "Même famille qu'illusion."
  },
  "Inopinément": {
    clair: "Sans prévenir, comme un invité qui sonne à l'improviste.",
    sens: [["Par surprise", "De manière imprévue.", "Il est arrivé inopinément au milieu du dîner."]],
    retenir: "L'adjectif : inopiné (une visite inopinée)."
  },
  "Malléable": {
    clair: "Qui se façonne facilement : un métal, une pâte, ou une personne trop influençable.",
    sens: [
      ["Matière", "Qui se travaille sans casser.", "L'or est très malléable."],
      ["Personne", "Qui se laisse influencer.", "Un esprit jeune est malléable."]
    ],
    retenir: "Le maillet du forgeron : « malleus »."
  },
  "Mascarade": {
    clair: "Un spectacle hypocrite où chacun fait semblant.",
    sens: [
      ["Au figuré", "Mise en scène trompeuse.", "Ce procès n'était qu'une mascarade."],
      ["Fête", "Défilé de personnes masquées.", "La mascarade du carnaval."]
    ],
    retenir: "Le masque est au cœur du mot."
  },
  "Mégalomane": {
    clair: "Celui qui se voit en génie, en empereur, en sauveur du monde.",
    sens: [["Orgueil démesuré", "Qui a la folie des grandeurs.", "Ce patron mégalomane a fait poser son portrait dans chaque bureau."]],
    retenir: "Familièrement : « mégalo ». « Mega » = grand."
  },
  "Missive": {
    clair: "Une lettre, dit avec un peu de solennité ou d'humour.",
    sens: [["Lettre", "Message écrit.", "J'ai reçu une longue missive de ma grand-tante."]],
    retenir: "De « missus », envoyé."
  },
  "Neuroplasticité": {
    clair: "La capacité du cerveau à se recâbler quand on apprend : il n'est jamais figé.",
    sens: [["Science", "Le cerveau change avec l'expérience.", "Grâce à la neuroplasticité, on peut apprendre une langue à tout âge."]],
    retenir: "Chaque mot appris ici sculpte ton cerveau !"
  },
  "Pérenne": {
    clair: "Fait pour durer, pas pour passer.",
    sens: [["Durable", "Qui dure longtemps.", "Ils cherchent une solution pérenne, pas un pansement."]],
    retenir: "Une plante pérenne revient chaque année."
  },
  "Polarisé": {
    clair: "Coupé en deux camps qui s'éloignent, comme les deux pôles d'un aimant.",
    sens: [
      ["Société", "Divisé en camps opposés.", "Le débat public est de plus en plus polarisé."],
      ["Familier", "Obsédé par une seule chose.", "Il est polarisé sur son régime."],
      ["Physique", "Lumière ou électricité orientée.", "Des lunettes à verres polarisés."]
    ],
    retenir: "Deux pôles, deux extrêmes, rien au milieu."
  },
  "Programmatique": {
    clair: "Qui annonce un programme, une ligne directrice.",
    sens: [["Projet", "Qui expose un programme.", "Un discours programmatique détaillant les réformes à venir."]],
    retenir: "Un titre programmatique annonce tout le livre."
  },
  "Risible": {
    clair: "Tellement ridicule qu'on a envie de rire, souvent avec mépris.",
    sens: [["Ridicule", "Qui prête à rire.", "Son excuse était risible : son chien aurait mangé sa clé USB."]],
    retenir: "Ne pas confondre avec « drôle » : le risible, on se moque de lui."
  }
};
