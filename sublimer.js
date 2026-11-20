// ===== Sublimer : le recueil de tournures (sans IA) =====
// On tape son message, on choisit un ton et un degré : l'appli reconnaît ce qu'on veut dire
// (inviter, remercier, s'excuser…) et propose de plus belles tournures. Toutes les phrases sont originales.
//
// Écriture des tournures :
//   {forme tu|forme vous}  → l'appli choisit selon le tutoiement ou le vouvoiement
//   {moment}               → « demain », « ce soir », « samedi à 18 h »… (repris du message)
//   {objet} / {dobjet}     → « un café » / « d'un café » (repris du message)
// Chaque intention a, pour chaque ton, trois degrés : 1 Délicat, 2 Raffiné, 3 Grandiloquent.

const SUBLIMER_TONS = [
  { id: "pro", icone: "💼", nom: "Élégant", aide: "Pour le travail : soutenu, net, courtois" },
  { id: "poetique", icone: "🌙", nom: "Poétique", aide: "Des images, de la lumière, du rythme" },
  { id: "romantique", icone: "🌹", nom: "Romantique", aide: "Tendre, galant, avec panache" }
];

const SUBLIMER_DEGRES = ["", "Délicat", "Raffiné", "Grandiloquent"];

// Ce que l'appli reconnaît dans le message (texte sans accents, en minuscules)
const SUBLIMER_INTENTIONS = [
  { id: "invitation", motif: /\b(cafe|verre|boire un|diner|dejeuner|resto|restaurant|cine|cinema|sortir|balade|promener|promenade|se voir|on se voit|te voir|vous voir|dispo|disponible|libre|reunion|rdv|rendez-vous|visio|un point|un appel|s'appeler|entretien)\b/ },
  { id: "retard", motif: /\b(en retard|du retard|j'arrive|j arrive|bouchons?|je suis en route)\b/ },
  { id: "excuse", motif: /\b(desolee?|pardon|excuse|excuses|mea culpa|je m'en veux)\b/ },
  { id: "merci", motif: /\b(merci|mercii+|remercie|remercier|thanks?)\b/ },
  { id: "felicitation", motif: /\b(bravo|felicitations?|chapeau|bien joue|bien ouej)\b/ },
  { id: "compliment", motif: /\b(belle|jolie|magnifique|canon|charmante?|sublime|ravissante?|sourire|tes yeux|vos yeux|super travail|beau travail|du bon travail|tu es beau|vous etes beau|t'es beau)\b/ },
  { id: "manque", motif: /\b(tu me manques|vous me manquez|me manques|pense a toi|pense a vous|penser a toi|penser a vous)\b/ },
  { id: "nouvelles", motif: /\b(ca va|ca va \?|comment vas|comment allez|tu vas bien|vous allez bien|quoi de neuf|des nouvelles de toi)\b/ },
  { id: "relance", motif: /\b(relance|relancer|je reviens vers|sans nouvelles|toujours pas de reponse|suite a mon|mon precedent message|devis|un retour|ta reponse|votre reponse)\b/ },
  { id: "nuit", motif: /\b(bonne nuit|dors bien|dormez bien|beaux reves|fais de beaux)\b/ },
  { id: "confirmation", motif: /\b(ok|okay|oki|d'accord|dacc|daccord|ca marche|parfait|entendu|c'est note|vendu|avec plaisir|carrement|grave)\b/ }
];
const SUBLIMER_SALUT = /\b(salut|coucou|bonjour|bonsoir|hello|hey|yo|wesh|slt|cc)\b/;
const SUBLIMER_AU_REVOIR = /\b(bonne journee|bonne soiree|a plus|a\+|a bientot|a demain|a tout a l'heure|bisous?|bises|ciao|biz|je t'embrasse)\b/;

// Le moment, repris tel quel du message
const SUBLIMER_MOMENTS = [
  [/\bdemain soir\b/, "demain soir"], [/\bdemain matin\b/, "demain matin"], [/\bdemain midi\b/, "demain midi"],
  [/\bapres-demain\b/, "après-demain"], [/\bdemain\b/, "demain"], [/\bce soir\b/, "ce soir"],
  [/\bcet apres-midi|cette aprem|cet aprem\b/, "cet après-midi"], [/\bce midi\b/, "ce midi"], [/\bce matin\b/, "ce matin"],
  [/\bce week-?end|ce we\b/, "ce week-end"], [/\bla semaine prochaine\b/, "la semaine prochaine"],
  [/\blundi\b/, "lundi"], [/\bmardi\b/, "mardi"], [/\bmercredi\b/, "mercredi"], [/\bjeudi\b/, "jeudi"],
  [/\bvendredi\b/, "vendredi"], [/\bsamedi\b/, "samedi"], [/\bdimanche\b/, "dimanche"]
];

// Ce qu'on propose de partager
const SUBLIMER_OBJETS = [
  [/\bcafes?\b/, "un café", "d'un café"],
  [/\bverres?\b|\bboire un\b/, "un verre", "d'un verre"],
  [/\bdejeuner\b|\bce midi\b/, "un déjeuner", "d'un déjeuner"],
  [/\bdiner\b|\bresto\b|\brestaurant\b/, "un dîner", "d'un dîner"],
  [/\bcine\b|\bcinema\b|\bfilm\b/, "une séance de cinéma", "d'une séance de cinéma"],
  [/\bbalade\b|\bpromener\b|\bpromenade\b/, "une promenade", "d'une promenade"],
  [/\bappel\b|\bs'appeler\b|\bvisio\b/, "un appel", "d'un appel"],
  [/\breunion\b|\brdv\b|\brendez-vous\b|\bun point\b|\bentretien\b/, "un échange", "d'un échange"]
];
const SUBLIMER_OBJET_DEFAUT = { pro: ["un échange", "d'un échange"], poetique: ["un café", "d'un café"], romantique: ["un café", "d'un café"] };
const SUBLIMER_MOMENT_DEFAUT = { pro: "prochainement", poetique: "un de ces jours", romantique: "un de ces jours" };

// Les ouvertures et les fermetures, par ton et par degré
const SUBLIMER_OUVERTURES = {
  pro: [[], ["Bonjour,", "Bonjour à {toi|vous},"],
    ["Bonjour,\nJ'espère que {tu vas|vous allez} bien.", "Bonjour,\nJ'espère que ce message {te|vous} trouve en pleine forme."],
    ["Bonjour,\nJ'espère que ce message {te|vous} trouve en excellente disposition.", "Bonjour,\nPuisse ce message {te|vous} trouver au meilleur de {ta|votre} forme."]],
  poetique: [[], ["Bonjour,", "Salut à {toi|vous},"],
    ["Bien le bonjour,", "Bonjour, {toi qui portes|vous qui portez} le soleil en poche,"],
    ["Bien le bonjour, et que l'aube {te|vous} soit douce,", "Salut à {toi|vous}, comme on salue une aurore,"]],
  romantique: [[], ["Coucou {toi|vous},", "Bonjour {toi|vous},"],
    ["Bonjour, {toi qui occupes|vous qui occupez} mes pensées,", "Bien le bonjour, belle âme,"],
    ["Ô {toi|vous} dont le seul prénom suffit à éclairer ma journée,", "Bien le bonjour, {toi qui rends|vous qui rendez} les matins plus doux,"]]
};

const SUBLIMER_FERMETURES = {
  pro: [[], ["Bonne journée,", "Bien à {toi|vous},"],
    ["Je {te|vous} souhaite une excellente journée.\nBien cordialement,", "Au plaisir de {te|vous} lire,\nBien cordialement,"],
    ["Au plaisir sincère de {te|vous} lire, et avec toute ma considération,", "Avec l'assurance de mon entier dévouement,"]],
  poetique: [[], ["À bientôt,", "À très vite,"],
    ["À très vite, sous un ciel clément.", "Je {te|vous} laisse à {ta|votre} journée : qu'elle soit lumineuse."],
    ["Que les heures {te|vous} soient légères, et les étoiles bienveillantes.", "Je {te|vous} quitte comme on referme un beau livre : à regret, et avec l'envie d'y revenir."]],
  romantique: [[], ["{Je t'embrasse|Je vous embrasse},", "À très vite,"],
    ["{Je t'embrasse tendrement|Je vous embrasse tendrement},", "Hâte de {te|vous} revoir."],
    ["Je {te|vous} laisse, mais mon cœur, lui, reste en chemin.", "Mille baisers, que le vent saura bien {te|vous} porter."]]
};

// Les tournures, intention par intention : [ton][degré] = liste de variantes
const SUBLIMER_TOURNURES = {
  invitation: {
    pro: [[],
      ["{Serais-tu|Seriez-vous} disponible {moment} pour {objet} ?", "Je {te|vous} propose {objet} {moment}, si cela {te|vous} convient."],
      ["Me {ferais-tu|feriez-vous} le plaisir {dobjet} {moment} ? Ce serait l'occasion d'échanger de vive voix.", "{Accepterais-tu|Accepteriez-vous} que nous prenions le temps {dobjet} {moment} ? Rien ne remplace un échange de vive voix."],
      ["Ce serait un honneur de {te|vous} convier {moment} à {objet} : rien ne vaut la vive voix pour faire mûrir les beaux projets.", "Si {ton|votre} agenda le permet, j'aurais grand plaisir à {te|vous} retrouver {moment} pour {objet}, et à donner à nos idées l'élan qu'elles méritent."]],
    poetique: [[],
      ["Et si on prenait le temps {dobjet} {moment} ?", "{Tu serais|Vous seriez} libre {moment} pour {objet} ?"],
      ["{Accepterais-tu|Accepteriez-vous} {objet} {moment}, le temps de laisser filer les heures ?", "Je {te|vous} propose {objet} {moment} : le monde peut bien attendre un peu."],
      ["{Accorde-moi|Accordez-moi} {objet} {moment}, et laissons le temps s'égarer entre deux silences.", "Il est des heures qu'on vole au monde pour les offrir à quelqu'un : {veux-tu|voulez-vous} les miennes {moment}, pour {objet} ?"]],
    romantique: [[],
      ["Ça {te dirait|vous dirait} {objet} {moment} ?", "{Je t'invite|Je vous invite} pour {objet} {moment} ?"],
      ["Me {ferais-tu|feriez-vous} l'honneur {dobjet} {moment} ? {Ta|Votre} compagnie rendrait tout plus doux.", "J'aimerais {t'offrir|vous offrir} {objet} {moment}… et le plaisir de {ta|votre} compagnie."],
      ["Me {ferais-tu|feriez-vous} l'honneur {dobjet} {moment} ? Je promets d'être à l'heure, et d'oublier ma montre dès que {tu seras|vous serez} là.", "Il me faut un prétexte pour {te|vous} revoir : que ce soit {objet} {moment}. Le vrai motif, {tu le devines|vous le devinez} sans peine.", "Une idée m'obsède, impérissable : partager {objet} avec {toi|vous} {moment}. {Dis-moi|Dites-moi} que ce n'est pas une chimère."]]
  },
  retard: {
    pro: [[],
      ["J'aurai quelques minutes de retard, je {te|vous} prie de m'en excuser."],
      ["Un contretemps me retarde de quelques minutes ; je {te|vous} prie de bien vouloir m'en excuser.", "Je serai là dans quelques instants : un imprévu me retarde, {veuille|veuillez} m'en excuser."],
      ["Un contretemps indépendant de ma volonté me retarde quelque peu : je {te|vous} prie d'excuser cette entorse à l'exactitude, qui n'est guère dans mes habitudes."]],
    poetique: [[],
      ["J'arrive, le temps de traverser la ville."],
      ["J'arrive : le temps a des caprices, et je cours derrière."],
      ["Le temps s'est joué de moi ; mais j'arrive, porté par l'impatience comme une voile par le vent."]],
    romantique: [[],
      ["J'arrive vite, promis."],
      ["J'arrive… chaque minute de retard est une minute volée à {ta|votre} compagnie."],
      ["Je suis en retard, et chaque minute loin de {toi|vous} me semble une petite éternité : j'accours."]]
  },
  excuse: {
    pro: [[],
      ["Je {te|vous} prie de m'excuser.", "Toutes mes excuses."],
      ["Je {te|vous} prie de bien vouloir excuser ce contretemps.", "Je regrette sincèrement ce désagrément."],
      ["Je {te|vous} prie d'accepter mes excuses les plus sincères pour ce fâcheux contretemps, dont je mesure pleinement la portée.", "Que {ta|votre} indulgence veuille bien excuser cet impair : je m'emploie déjà à le réparer."]],
    poetique: [[],
      ["Pardon, sincèrement."],
      ["{Pardonne-moi|Pardonnez-moi} : le temps m'a joué un tour.", "Pardon : j'ai trébuché sur mes propres mots."],
      ["{Pardonne|Pardonnez} ma maladresse : on trébuche parfois sur les plus petites pierres du chemin.", "Je {te|vous} demande pardon, comme on demande au jour de bien vouloir se lever encore."]],
    romantique: [[],
      ["Pardon, vraiment."],
      ["{Pardonne-moi|Pardonnez-moi}, je m'en veux de {t'avoir|vous avoir} fait de la peine.", "{Pardonne-moi|Pardonnez-moi} : {ton|votre} sourire me manque déjà trop pour que je supporte de {te|vous} fâcher."],
      ["Si j'ai terni {ta|votre} journée, {laisse-moi|laissez-moi} la repeindre en mille couleurs : pardon.", "{Sois|Soyez} magnanime : mon cœur fait amende honorable, plaide coupable et implore {ta|votre} clémence."]]
  },
  merci: {
    pro: [[],
      ["Merci infiniment.", "Je {te|vous} remercie sincèrement."],
      ["Je {te|vous} remercie chaleureusement : {ton|votre} aide m'est précieuse.", "Merci pour {ta|votre} réactivité et {ta|votre} bienveillance : elles sont aussi rares que précieuses."],
      ["Je tiens à {t'exprimer|vous exprimer} toute ma gratitude : {ton|votre} concours a été aussi précieux que décisif.", "{Permets-moi|Permettez-moi} de {te|vous} dire toute ma reconnaissance : un tel geste ne passe pas inaperçu.", "Je {te|vous} remercie pour {ta|votre} sollicitude et {ta|votre} célérité : elles honorent notre collaboration."]],
    poetique: [[],
      ["Merci, du fond du cœur."],
      ["Merci : {ton|votre} geste a la douceur d'une éclaircie.", "Mille mercis, et autant de sourires.", "Merci pour {ta|votre} sollicitude : elle a la tiédeur d'un rayon d'hiver."],
      ["Merci. Il est des gestes qui, comme les lampes, éclairent longtemps après qu'on les a posés.", "Ma gratitude est un jardin : {ton|votre} geste vient d'y faire éclore une fleur de plus."]],
    romantique: [[],
      ["Merci, {toi|vous}.", "Merci, c'est adorable."],
      ["Merci… {tu as|vous avez} l'art de rendre mes journées plus belles.", "Mille mercis, {tu es|vous êtes} adorable."],
      ["Merci. {Tu as|Vous avez} ce don rare de transformer un simple jour en souvenir.", "Je n'ai qu'un merci à {t'offrir|vous offrir}, mais il vient de tout mon cœur."]]
  },
  felicitation: {
    pro: [[],
      ["Félicitations pour cette belle réussite !"],
      ["Toutes mes félicitations : cette réussite est amplement méritée."],
      ["Je {t'adresse|vous adresse} mes plus vives félicitations : cette réussite couronne un travail aussi exigeant qu'admirable."]],
    poetique: [[],
      ["Bravo, c'est magnifique !"],
      ["Bravo ! La récolte est à la hauteur des semailles."],
      ["Bravo ! Les lauriers ont enfin trouvé le front qu'ils attendaient."]],
    romantique: [[],
      ["Bravo, quelle fierté !"],
      ["Bravo ! {Tu mérites|Vous méritez} toutes les étoiles du ciel."],
      ["Bravo ! Le monde vient de découvrir ce que je savais déjà : {tu es|vous êtes} extraordinaire."]]
  },
  compliment: {
    pro: [[],
      ["Bravo pour ce travail de qualité."],
      ["Je salue la qualité remarquable de {ton|votre} travail."],
      ["{Permets-moi|Permettez-moi} de saluer un travail d'une rare exigence, qui fait honneur à {ton|votre} talent.", "{Ton|Votre} travail témoigne d'une diligence et d'une rigueur peu communes : chapeau bas."]],
    poetique: [[],
      ["{Tu rayonnes|Vous rayonnez}."],
      ["{Tu as|Vous avez} la grâce des matins clairs.", "{Ton|Votre} sourire ferait pâlir le soleil."],
      ["Il y a dans {ton|votre} regard une lumière que les peintres ont cherchée toute leur vie.", "Si la beauté était une saison, {tu serais|vous seriez} un printemps éternel.", "Il y a chez {toi|vous} quelque chose d'éthéré, comme une lumière qui aurait appris à sourire."]],
    romantique: [[],
      ["{Tu es|Vous êtes} magnifique."],
      ["{Tu es|Vous êtes} d'une beauté à faire oublier le reste du monde.", "{Ton|Votre} sourire est ma plus belle distraction.", "{Tu as|Vous avez} la grâce diaphane d'un matin d'avril."],
      ["{Tu es|Vous êtes} d'une beauté si ineffable que les mots, confus, se retirent sur la pointe des pieds.", "Si l'on m'avait dit que la grâce avait un visage, je n'aurais jamais cru qu'il fût {le tien|le vôtre}."]]
  },
  manque: {
    pro: [[],
      ["Au plaisir de {te|vous} revoir très bientôt."],
      ["Ce sera un plaisir de {te|vous} retrouver très bientôt."],
      ["Je me réjouis par avance du plaisir de {te|vous} retrouver prochainement."]],
    poetique: [[],
      ["Je pense à {toi|vous}."],
      ["{Ton|Votre} absence a la longueur des jours sans soleil."],
      ["Loin de {toi|vous}, les heures se traînent comme des rivières en été."]],
    romantique: [[],
      ["{Tu me manques|Vous me manquez}."],
      ["{Tu me manques|Vous me manquez}, et tous les chemins me ramènent à {toi|vous}."],
      ["{Tu me manques|Vous me manquez} comme la lumière manque aux nuits d'hiver.", "Mon cœur compte les heures qui nous séparent, et trouve toujours qu'il y en a trop.", "Loin de {toi|vous}, mon émoi est indicible : chaque heure s'étire comme une chimère."]]
  },
  nouvelles: {
    pro: [[],
      ["J'espère que {tu vas|vous allez} bien."],
      ["J'espère que {tes|vos} projets avancent comme {tu le souhaites|vous le souhaitez}."],
      ["J'espère que la période {t'est|vous est} favorable, et que {tes|vos} projets prospèrent au gré de {tes|vos} ambitions."]],
    poetique: [[],
      ["Comment {vas-tu|allez-vous} ?"],
      ["Comment se porte {ton|votre} cœur, ces temps-ci ?"],
      ["Quelle couleur a pris {ton|votre} ciel ces jours-ci ? Je veux tout savoir."]],
    romantique: [[],
      ["Comment {vas-tu|allez-vous} ?"],
      ["Comment {vas-tu|allez-vous} ? J'ai envie de tout savoir de {ta|votre} journée."],
      ["{Raconte-moi|Racontez-moi} {ta|votre} journée : le moindre détail venant de {toi|vous} m'est un trésor."]]
  },
  relance: {
    pro: [[],
      ["Je me permets de revenir vers {toi|vous} au sujet de mon précédent message."],
      ["Je me permets de {te|vous} relancer au sujet de mon précédent message : {aurais-tu|auriez-vous} pu en prendre connaissance ?"],
      ["Sachant {ton|votre} agenda chargé, je me permets de revenir vers {toi|vous} au sujet de mon précédent message ; {ton|votre} retour me serait des plus précieux."]],
    poetique: [[],
      ["Des nouvelles ? Le silence commence à me sembler long."],
      ["Un petit mot de {toi|vous}, et la journée changerait de couleur."],
      ["Mon message erre-t-il encore quelque part, comme une bouteille à la mer ? J'attends {ta|votre} réponse, le regard sur l'horizon."]],
    romantique: [[],
      ["Un petit mot de {toi|vous} me ferait plaisir."],
      ["J'attends {ton|votre} message comme on attend le printemps."],
      ["Chaque fois que mon téléphone s'allume, mon cœur espère {ton|votre} nom : ne le {fais|faites} pas languir davantage."]]
  },
  nuit: {
    pro: [[],
      ["Excellente soirée."],
      ["Je {te|vous} souhaite une excellente soirée."],
      ["Je {te|vous} souhaite une soirée reposante, et un repos à la mesure de {ta|votre} journée."]],
    poetique: [[],
      ["Bonne nuit, {dors|dormez} bien."],
      ["Bonne nuit : que les étoiles veillent sur {ton|votre} sommeil."],
      ["Que la nuit {te|vous} drape de silence, et que les rêves {te|vous} soient cléments."]],
    romantique: [[],
      ["Bonne nuit, {toi|vous}."],
      ["Bonne nuit… j'espère {te|vous} croiser dans mes rêves."],
      ["Bonne nuit. Je ferme les yeux, et c'est encore {toi|vous} que je vois.", "Bonne nuit : que le sommeil {t'emporte|vous emporte} vers des contrées oniriques, où je {t'attendrai|vous attendrai}."]]
  },
  confirmation: {
    pro: [[],
      ["C'est entendu, merci."],
      ["C'est parfaitement entendu ; je m'en occupe.", "C'est entendu ; je m'en charge promptement."],
      ["Tout est parfaitement entendu ; {tu peux|vous pouvez} compter sur ma pleine diligence."]],
    poetique: [[],
      ["Avec plaisir !"],
      ["Avec joie, c'est entendu."],
      ["C'est dit : je l'inscris à l'encre d'or dans les pages de ma semaine."]],
    romantique: [[],
      ["Avec plaisir !"],
      ["Avec grand plaisir, j'ai hâte !"],
      ["Oui, mille fois oui : j'attends déjà ce moment avec une impatience délicieuse."]]
  },
  salut: {
    pro: [[],
      ["Je me permets de {te|vous} écrire pour prendre de {tes|vos} nouvelles."],
      ["Je me permets ce petit message pour prendre de {tes|vos} nouvelles."],
      ["Je {t'adresse|vous adresse} ces quelques lignes pour le simple plaisir de prendre de {tes|vos} nouvelles."]],
    poetique: [[],
      ["Un petit signe, en passant."],
      ["Je {t'écris|vous écris} sans autre raison que le plaisir de le faire."],
      ["Ce message n'a d'autre motif que la joie de {t'écrire|vous écrire} : c'est le plus beau des prétextes."]],
    romantique: [[],
      ["Je pensais à {toi|vous}, alors je {t'écris|vous écris}."],
      ["Un petit mot, juste pour {te|vous} faire sourire."],
      ["Je n'avais rien à {te|vous} dire, sinon tout : alors je commence par bonjour."]]
  }
};

// Les mots du message rehaussés, selon le degré [délicat, raffiné, grandiloquent]
// (texte comparé sans accents ; "" efface le mot)
const SUBLIMER_MOTS = {
  "super": ["formidable", "remarquable", "prodigieux"],
  "genial": ["formidable", "admirable", "sublime"],
  "geniale": ["formidable", "admirable", "sublime"],
  "cool": ["agréable", "charmant", "délicieux"],
  "top": ["excellent", "remarquable", "magistral"],
  "content": ["heureux", "ravi", "comblé"],
  "contente": ["heureuse", "ravie", "comblée"],
  "jolie": ["charmante", "ravissante", "éblouissante"],
  "joli": ["charmant", "ravissant", "éblouissant"],
  "triste": ["triste", "mélancolique", "inconsolable"],
  "fatigue": ["fatigué", "las", "harassé"],
  "fatiguee": ["fatiguée", "lasse", "harassée"],
  "creve": ["épuisé", "las", "harassé"],
  "crevee": ["épuisée", "lasse", "harassée"],
  "vite": ["vite", "promptement", "prestement"],
  "rapidement": ["rapidement", "promptement", "prestement"],
  "bizarre": ["étrange", "singulier", "insolite"],
  "chelou": ["étrange", "singulier", "insolite"],
  "nul": ["décevant", "navrant", "calamiteux"],
  "nulle": ["décevante", "navrante", "calamiteuse"],
  "marrant": ["amusant", "cocasse", "truculent"],
  "marrante": ["amusante", "cocasse", "truculente"],
  "drole": ["amusant", "cocasse", "truculent"],
  "ouf": ["incroyable", "inouï", "prodigieux"],
  "dingue": ["incroyable", "inouï", "prodigieux"],
  "boulot": ["travail", "ouvrage", "labeur"],
  "taf": ["travail", "ouvrage", "labeur"],
  "pote": ["ami", "ami", "compagnon"],
  "potes": ["amis", "amis", "compagnons"],
  "discuter": ["échanger", "converser", "deviser"],
  "parler": ["discuter", "converser", "deviser"],
  "beaucoup": ["beaucoup", "infiniment", "infiniment"],
  "bcp": ["beaucoup", "infiniment", "infiniment"],
  "vraiment": ["vraiment", "sincèrement", "résolument"],
  "grave": ["vraiment", "fort", "prodigieusement"],
  "trop": ["très", "fort", "prodigieusement"],
  "dispo": ["disponible", "disponible", "libre"],
  "resto": ["restaurant", "restaurant", "restaurant"],
  "cine": ["cinéma", "cinéma", "cinéma"],
  "aprem": ["après-midi", "après-midi", "après-midi"],
  "ok": ["d'accord", "entendu", "fort bien"],
  "oki": ["d'accord", "entendu", "fort bien"],
  "dacc": ["d'accord", "entendu", "fort bien"],
  "daccord": ["d'accord", "entendu", "fort bien"],
  "stp": ["s'il te plaît", "s'il te plaît", "de grâce"],
  "svp": ["s'il vous plaît", "s'il vous plaît", "de grâce"],
  "pk": ["pourquoi", "pourquoi", "pourquoi"],
  "pq": ["pourquoi", "pourquoi", "pourquoi"],
  "tkt": ["ne t'inquiète pas", "sois sans crainte", "sois sans crainte"],
  "jsp": ["je ne sais pas", "je ne sais pas", "je ne sais pas"],
  "jpp": ["je n'en peux plus", "je n'en puis plus", "je n'en puis plus"],
  "slt": ["salut", "bonjour", "bien le bonjour"],
  "cc": ["coucou", "bonjour", "bien le bonjour"],
  "wesh": ["salut", "bonjour", "bien le bonjour"],
  "bisous": ["bises", "je t'embrasse", "mille baisers"],
  "biz": ["bises", "je t'embrasse", "mille baisers"],
  "mdr": ["", "", ""],
  "lol": ["", "", ""],
  "ptdr": ["", "", ""],
  "xd": ["", "", ""],
  "ptn": ["", "", ""],
  "putain": ["", "", ""]
};
