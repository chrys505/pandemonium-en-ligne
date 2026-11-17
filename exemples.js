// Phrases d'exemple pour les mots, rangées par sens (courant, juridique, médical…)
// Format : "Mot": [["Sens", "Phrase d'exemple"], …]   (phrases originales, écrites pour l'appli)
const exemples = {
  "Répudier": [
    ["Droit", "Faute de pouvoir rembourser les dettes du défunt, elle a préféré répudier la succession."],
    ["Histoire", "Dans certaines sociétés anciennes, un mari pouvait répudier sa femme sans aucun jugement."],
    ["Figuré", "Avec l'âge, il a répudié les idées de sa jeunesse."]
  ],
  "Faste": [
    ["Nom", "Le mariage s'est déroulé dans un faste digne d'un roi."],
    ["Adjectif", "Ce printemps a été une période faste pour son entreprise."]
  ],
  "Trivial": [
    ["Courant", "Ils ont parlé de sujets triviaux : la météo, les courses, le bus en retard."],
    ["Maths", "La solution x = 0 est triviale ; cherche plutôt les autres."],
    ["Péjoratif", "Sa plaisanterie, trop triviale, a jeté un froid dans la salle."]
  ],
  "Emphase": [
    ["Courant", "Il a lu son discours avec tant d'emphase que toute la salle a souri."],
    ["Grammaire", "Dans « Ce livre, je l'ai adoré », l'emphase porte sur « ce livre »."]
  ],
  "Glose": [
    ["Littérature", "Le vieux manuscrit est couvert de gloses dans la marge."],
    ["Familier", "Les voisins font des gloses sur chacune de ses sorties."]
  ],
  "Coercitif": [
    ["Droit", "Le préfet a pris des mesures coercitives pour faire respecter l'arrêté."],
    ["Psychologie", "Le contrôle coercitif peut exister sans aucune violence physique."]
  ],
  "Occlusion": [
    ["Médecine", "Une occlusion intestinale demande une prise en charge urgente."],
    ["Courant", "L'occlusion des volets plongeait la pièce dans le noir complet."]
  ],
  "Métastase": [
    ["Médecine", "Le scanner n'a révélé aucune métastase : une excellente nouvelle."],
    ["Figuré", "La corruption a fait des métastases dans toute l'administration."]
  ],
  "Sidération": [
    ["Psychologie", "Sous le choc, la victime était en état de sidération, incapable de crier."],
    ["Courant", "L'annonce des résultats a provoqué une sidération générale."]
  ],
  "Contentieux": [
    ["Droit", "Le service contentieux de la banque a repris le dossier."],
    ["Courant", "Entre les deux frères, il reste un vieux contentieux jamais réglé."]
  ],
  "Injonction": [
    ["Droit", "Le juge a délivré une injonction de payer avant la fin du mois."],
    ["Société", "Les injonctions à être toujours heureux sur les réseaux sont épuisantes."]
  ],
  "Sommation": [
    ["Droit", "L'huissier lui a adressé une sommation de quitter les lieux."],
    ["Maths", "Le symbole Σ indique une sommation : on additionne tous les termes."],
    ["Police", "Les gendarmes ont fait les sommations avant de disperser la foule."]
  ],
  "Écroué": [
    ["Droit", "Après sa garde à vue, le suspect a été écroué à la maison d'arrêt."]
  ],
  "Châtier": [
    ["Punir", "Le traître fut châtié pour sa félonie."],
    ["Style", "Elle s'exprime dans une langue très châtiée, sans un mot de travers."]
  ],
  "Lie": [
    ["Propre", "Il reste un peu de lie au fond de la bouteille de vin."],
    ["Expression", "Il a bu le calice jusqu'à la lie : il a subi l'épreuve jusqu'au bout."]
  ],
  "Hymen": [
    ["Littéraire", "Les deux familles célébrèrent l'hymen de leurs enfants au printemps."]
  ],
  "Escarre": [
    ["Médecine", "Il faut changer souvent la position du patient pour éviter les escarres."]
  ],
  "Palliatif": [
    ["Médecine", "Elle travaille dans une unité de soins palliatifs."],
    ["Figuré", "Cette aide n'est qu'un palliatif, pas une vraie solution."]
  ],
  "Intrinsèque": [
    ["Économie", "La valeur intrinsèque d'une pièce de monnaie est souvent inférieure à sa valeur affichée."],
    ["Courant", "Le talent intrinsèque ne suffit pas sans le travail."]
  ],
  "Prérogative": [
    ["Droit", "Le droit de grâce est une prérogative du président de la République."],
    ["Courant", "Choisir la musique en voiture, c'est sa prérogative."]
  ],
  "Calomnie": [
    ["Droit", "Il a porté plainte pour dénonciation calomnieuse."],
    ["Courant", "Ces rumeurs ne sont que des calomnies."]
  ],
  "Allégation": [
    ["Droit", "Les allégations de l'accusation n'ont jamais été prouvées."]
  ],
  "Spoliation": [
    ["Histoire", "Des familles réclament encore la restitution de biens issus de spoliations."],
    ["Droit", "Il dénonce la spoliation de son héritage par un faux testament."]
  ],
  "Exproprier": [
    ["Droit", "La mairie a exproprié trois maisons pour construire la nouvelle route."]
  ],
  "Grabataire": [
    ["Médecine", "Après sa chute, sa grand-mère est devenue grabataire."]
  ],
  "Somatique": [
    ["Médecine", "Le stress peut provoquer des troubles somatiques : maux de ventre, migraines."]
  ],
  "Neuroplasticité": [
    ["Science", "Grâce à la neuroplasticité, on peut apprendre à tout âge."]
  ],
  "Endémique": [
    ["Médecine", "Le paludisme est endémique dans certaines régions tropicales."],
    ["Biologie", "Le lémurien est une espèce endémique de Madagascar."],
    ["Figuré", "Le chômage est devenu endémique dans cette vallée."]
  ],
  "Incoercible": [
    ["Médecine", "Elle souffrait de vomissements incoercibles."],
    ["Courant", "Un fou rire incoercible l'a pris en pleine réunion."]
  ],
  "Ankylosé": [
    ["Médecine", "Après dix heures de vol, ses genoux étaient ankylosés."],
    ["Figuré", "Une administration ankylosée par les règlements."]
  ],
  "Abortif": [
    ["Médecine", "Cette plante était autrefois connue pour ses effets abortifs."],
    ["Figuré", "Après une tentative abortive, la réforme a été abandonnée."]
  ],
  "Taxonomie": [
    ["Biologie", "En taxonomie, le loup et le chien appartiennent au même genre."],
    ["Finance", "La taxonomie verte européenne classe les activités durables."]
  ],
  "Assertion": [
    ["Logique", "Cette assertion est vraie seulement si les deux conditions sont remplies."],
    ["Courant", "Son assertion, lancée sans preuve, a fait réagir tout le monde."]
  ],
  "Syllogisme": [
    ["Logique", "Tous les hommes sont mortels ; Socrate est un homme ; donc Socrate est mortel."]
  ],
  "Opprobre": [
    ["Courant", "Par son comportement, il a jeté l'opprobre sur toute sa famille."]
  ],
  "Pernicieux": [
    ["Médecine", "L'anémie pernicieuse est due à un manque de vitamine B12."],
    ["Courant", "Les écrans ont parfois une influence pernicieuse sur le sommeil."]
  ],
  "Délétère": [
    ["Chimie", "L'usine rejetait des gaz délétères."],
    ["Figuré", "Un climat délétère s'est installé dans l'équipe."]
  ],
  "Cathartique": [
    ["Psychologie", "Écrire ce journal a eu sur lui un effet cathartique."],
    ["Médecine ancienne", "Un remède cathartique, c'était un purgatif."]
  ],
  "Grief": [
    ["Droit", "L'avocat a exposé ses griefs contre le jugement en appel."],
    ["Courant", "Elle n'a aucun grief contre toi, rassure-toi."]
  ],
  "Pourvoir": [
    ["Droit", "Après sa condamnation, il a décidé de se pourvoir en cassation."],
    ["Courant", "Il travaille dur pour pourvoir aux besoins de sa famille."]
  ],
  "Échoir": [
    ["Finance", "Le loyer échoit le premier de chaque mois."],
    ["Courant", "Cette lourde tâche lui est échue par tirage au sort."]
  ],
  "Imputable": [
    ["Comptabilité", "Cette dépense est imputable sur le budget de l'an prochain."],
    ["Courant", "L'accident est imputable à la fatigue du conducteur."]
  ],
  "Lancinant": [
    ["Médecine", "Il se plaint d'une douleur lancinante dans le genou."],
    ["Courant", "Une question lancinante le poursuit : et si j'avais dit oui ?"]
  ],
  "Outrecuidance": [
    ["Courant", "Il a eu l'outrecuidance de corriger le professeur… en se trompant."]
  ],
  "Tergiverser": [
    ["Courant", "Arrête de tergiverser : tu viens ou tu ne viens pas ?"]
  ],
  "Pantois": [
    ["Courant", "Devant ce tour de magie, les enfants sont restés pantois."]
  ],
  "Capillotracté": [
    ["Courant", "Ton excuse est un peu capillotractée : le chien a vraiment mangé ton téléphone ?"]
  ],
  "Hâbleur": [
    ["Courant", "Ce hâbleur raconte qu'il a battu un champion du monde aux échecs."]
  ],
  "Galéjade": [
    ["Courant", "Une sardine qui bouche le port ? C'est une galéjade, voyons !"]
  ],
  "Ineffable": [
    ["Littéraire", "Devant la mer au coucher du soleil, il ressentit un bonheur ineffable."]
  ],
  "Thésauriser": [
    ["Économie", "En temps de crise, les ménages ont tendance à thésauriser."],
    ["Courant", "Il thésaurise chaque pièce dans une vieille boîte à biscuits."]
  ],
  "Pensum": [
    ["École", "Pour avoir bavardé, il a dû copier cent lignes : un vrai pensum."],
    ["Courant", "Remplir ces formulaires administratifs, quel pensum !"]
  ]
};

// Punchlines soutenues : la touche rap × romantisme (phrases originales, écrites pour l'appli)
const punchlines = {
  "Opprobre": "On m'jette l'opprobre, j'en fais un manteau : la honte sur les épaules, la tête toujours plus haut.",
  "Outrecuidance": "J'arrive sans invitation, pure outrecuidance, mais j'repars en laissant des rimes en abondance.",
  "Pantois": "Ils m'attendaient en bas, me voilà sur les toits : mes phrases sont soutenues, ils restent pantois.",
  "Hâbleur": "J'suis pas un hâbleur, j'brode pas mes exploits : j'ai juste le vocabulaire qui met les rois aux abois.",
  "Ineffable": "Ce que j'ressens d'vant la mer, c'est ineffable, alors j'le mets en rimes : c'est plus confortable.",
  "Capillotracté": "Ton alibi est capillotracté, mon frère : même ton coiffeur dit qu'c'est tiré par les cheveux.",
  "Tergiverser": "Tu veux tergiverser, moi j'ai déjà tranché : l'audace est un poème qu'on écrit sans trembler.",
  "Narquois": "Ton sourire narquois glisse sur ma cuirasse : j'réponds en alexandrins et j'te laisse sur place.",
  "Délétère": "L'ambiance est délétère, l'air sent la jalousie : j'respire dans les livres, c'est ma pharmacie.",
  "Magnanime": "Tu m'as trahi hier, mais j'reste magnanime : j'te pardonne en douze pieds, c'est ma façon d'faire la rime.",
  "Galvauder": "Ils ont galvaudé l'amour en un swipe, en deux clics : moi j'écris des sonnets sur un beat mélancolique.",
  "Prosaïque": "Ta vie est prosaïque : métro, boulot, dodo. Moi j'glisse du Baudelaire entre deux stations de métro.",
  "Sardonique": "Ton rire sardonique, je l'connais par cœur : il cache un cœur qui saigne derrière ta froideur.",
  "Fat": "Le fat parle de sa montre, de sa caisse, de ses pièces : moi j'parle de Rimbaud, c'est ma seule richesse.",
  "Thésauriser": "Eux thésaurisent l'or dans des coffres en acier ; moi j'thésaurise les mots, et personne peut les braquer."
};

Object.keys(punchlines).forEach(function (mot) {
  if (!exemples[mot]) exemples[mot] = [];
  exemples[mot].push(["Punchline 🎤", punchlines[mot]]);
});
