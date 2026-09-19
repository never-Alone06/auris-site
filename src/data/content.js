// ============================================
// CONTENU DU SITE AURIS
// ============================================

const CONTACTS = {
  emails: ["nehemielambda@gmail.com", "kamgafranck301@gmail.com"],
  whatsapps: [
    { display: "+237 657 517 940", link: "237657517940" },
    { display: "+237 657 055 208", link: "237657055208" },
  ],
  location: "Douala, Cameroun",
  school: "ENSPD — École Nationale Supérieure Polytechnique de Douala",
};

export const site = {
  name: "AURIS",
  tagline: "Le bracelet qui donne une voix au silence",
  subtitle: "Alerte vibratoire intelligente pour personnes sourdes et malentendantes",
  email: CONTACTS.emails[0],
  emails: CONTACTS.emails,
  whatsapps: CONTACTS.whatsapps,
  location: CONTACTS.location,
  school: CONTACTS.school,
};

export const navigation = [
  { label: "Problème", href: "#probleme" },
  { label: "Solution", href: "#solution" },
  { label: "Technologie", href: "#technologie" },
  { label: "Équipe", href: "#equipe" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  badge: "Conçu au Cameroun · ENSPD Douala",
  title: "AURIS",
  tagline: "Le bracelet qui donne une voix au silence",
  subtitle:
    "Un bracelet connecté à intelligence artificielle embarquée qui reconnaît les sons dangereux de l'environnement et alerte son porteur par des vibrations différenciées — sans téléphone, sans internet, partout.",
  ctaPrimary: { label: "Découvrir le projet", href: "#solution" },
  ctaSecondary: { label: "Nous contacter", href: "#contact" },
  image: "/prototype-1.jpg",
};

export const stats = [
  { value: "500 000", suffix: "+", label: "personnes sourdes au Cameroun", hint: "Besoin non couvert" },
  { value: "92,2", suffix: " %", label: "de précision de l'IA", hint: "4 classes reconnues" },
  { value: "98", suffix: " ms", label: "temps d'inférence", hint: "Sur ESP32-S3 embarqué" },
  { value: "10", suffix: " h", label: "d'autonomie", hint: "Batterie LiPo 320 mAh" },
  { value: "49 000", suffix: " FCFA", label: "prix de vente visé", hint: "≈ 75 € — accessible" },
];

export const soundClasses = [
  { id: "alarme", label: "Alarme danger", description: "Alarme incendie, sirène, klaxon", vibration: "3 vibrations courtes", color: "red" },
  { id: "toc-toc", label: "Toc-toc", description: "Quelqu'un frappe à la porte", vibration: "2 vibrations courtes", color: "amber" },
  { id: "kevin", label: "Prénom « Kévin »", description: "Appel personnalisé", vibration: "1 vibration longue", color: "cyan" },
  { id: "autres", label: "Autres sons", description: "Bruits non dangereux", vibration: "Aucune (par défaut)", color: "slate" },
];

export const team = {
  title: "Une équipe jeune, déterminée et pluridisciplinaire",
  intro:
    "Deux étudiants de l'ENSPD Douala, animés par une conviction : la technologie peut et doit servir les plus vulnérables.",
  photo: "/innovateurs.jpg",
  photoCaption: "Boris & Franck — ENSPD Douala",
  members: [
    {
      name: "Nguimbous Nehemie Boris",
      initials: "NB",
      photo: "/boris.jpg",
      role: "Cofondateur",
      focus: "Électronique & IA embarquée",
      school: "ENSPD Douala — Niveau 3",
      bio: "Conception matérielle du bracelet, intégration du modèle IA sur ESP32-S3, tests de performance.",
      email: CONTACTS.emails[0],
      whatsapp: CONTACTS.whatsapps[0].link,
    },
    {
      name: "Tiencheu Kamga Leuga Franck",
      initials: "TF",
      photo: "/franck.jpg",
      role: "Cofondateur",
      focus: "Firmware & Intégration système",
      school: "ENSPD Douala — Niveau 3",
      bio: "Développement du code embarqué, gestion du pipeline audio I2S, communication Bluetooth BLE.",
      email: CONTACTS.emails[1],
      whatsapp: CONTACTS.whatsapps[1].link,
    },
  ],
};

export const problem = {
  title: "Un danger silencieux au quotidien",
  intro:
    "Au Cameroun, entre 500 000 et 600 000 personnes vivent avec une déficience auditive sévère ou profonde. Ne pas entendre un klaxon, une alarme, un cri ou une sonnette, c'est vivre avec un risque permanent que la plupart d'entre nous ignorent.",
  points: [
    { title: "Dangers du quotidien", text: "Klaxons, alarmes incendie, sonnettes, cris d'alerte : autant de sons qui protègent les entendants et qui restent inaudibles pour les personnes sourdes." },
    { title: "Dépendance à l'entourage", text: "Familles, voisins et collègues jouent souvent le rôle d'« oreilles bénévoles » — une charge mentale lourde et une autonomie réduite." },
    { title: "Solutions actuelles inadaptées", text: "Appareils auditifs : 150 000 à 300 000 FCFA. Montres connectées : 250 000 à 500 000 FCFA. Dispositifs fixes : non portables. Aucune solution à moins de 50 000 FCFA n'existe." },
  ],
};

export const solution = {
  title: "AURIS, la réponse concrète",
  intro:
    "Un bracelet connecté qui écoute en permanence son environnement, reconnaît les sons utiles grâce à une IA embarquée, et alerte son porteur par des vibrations différenciées — sans téléphone, sans internet, partout.",
  features: [
    { title: "4 classes de sons reconnues", text: "Alarme danger, toc-toc à la porte, prénom « Kévin », autres bruits. Chaque classe est associée à un motif vibratoire unique.", icon: "waves" },
    { title: "Vibrations différenciées", text: "3 vibrations courtes pour une alarme, 2 pour un toc-toc, 1 longue pour un prénom. Reconnaissance immédiate du type de danger.", icon: "vibrate" },
    { title: "Fonctionnement 100 % autonome", text: "Aucune connexion internet requise. Aucun smartphone obligatoire. Le bracelet fonctionne seul, partout, en permanence.", icon: "chip" },
    { title: "Mode intérieur / extérieur", text: "Un bouton unique permet d'ajuster la sensibilité au bruit ambiant. Simple, rapide, efficace, même dans une rue animée.", icon: "toggle" },
    { title: "Application mobile compagnon", text: "Appairage Bluetooth BLE pour consulter l'historique des alertes, régler les seuils et activer/désactiver certaines classes.", icon: "phone" },
    { title: "Adapté aux réalités locales", text: "Conçu pour les environnements camerounais : chaleur, poussière, bruits de marché, klaxons, alarmes artisanales.", icon: "sun" },
  ],
  gallery: [
    { src: "/prototype-2.jpg", caption: "Boîtier imprimé en 3D — LED d'état" },
    { src: "/prototype-3.jpg", caption: "Porté au poignet" },
    { src: "/prototype-4.jpg", caption: "Détail des composants" },
  ],
};

export const technology = {
  title: "Une IA embarquée, taillée pour le terrain",
  intro:
    "AURIS embarque un réseau de neurones convolutif léger, entraîné sur Edge Impulse, quantifié en int8 et déployé sur un microcontrôleur ESP32-S3. Inférence en 98 ms, sans cloud, sans latence réseau.",
  pipeline: [
    { step: "01", label: "Capture audio", detail: "Micro MEMS INMP441 · 16 kHz · 16 bits" },
    { step: "02", label: "Prétraitement", detail: "Spectrogramme Mel · 40 coefficients" },
    { step: "03", label: "Inférence IA", detail: "CNN quantifié int8 · TensorFlow Lite Micro" },
    { step: "04", label: "Alerte vibratoire", detail: "Moteur PWM · motif selon la classe" },
  ],
  performances: [
    { label: "Précision globale", value: "92,2", suffix: "%", detail: "Après itérations" },
    { label: "Temps d'inférence", value: "98", suffix: " ms", detail: "Sur ESP32-S3" },
    { label: "Échantillons collectés", value: "4 729", suffix: "", detail: "Enregistrés et étiquetés" },
    { label: "Perte (test)", value: "0,23", suffix: "", detail: "Modèle quantifié" },
  ],
  confusionMatrix: {
    labels: ["Kévin", "Toc-toc", "Alarme", "Autres"],
    rows: [
      { class: "Kévin", values: [89.5, 1.5, 1.7, 7.2] },
      { class: "Toc-toc", values: [0.5, 93.2, 0.8, 5.9] },
      { class: "Alarme", values: [0.5, 0.9, 98.2, 0.5] },
      { class: "Autres", values: [0.5, 0.9, 0.5, 91.1] },
    ],
  },
  cnn: {
    title: "Architecture du réseau",
    layers: [
      "2 couches de convolution (8 puis 16 filtres, 3×3)",
      "Max-pooling après chaque convolution",
      "Couche dense de 32 neurones + dropout 0,25",
      "Sortie softmax à 4 classes",
      "≈ 12 000 paramètres · quantifié int8 · < 5 Mo",
    ],
  },
  hardware: [
    { name: "ESP32-S3", role: "Microcontrôleur double cœur 240 MHz, BLE intégré", price: "7 000 F" },
    { name: "INMP441", role: "Microphone MEMS numérique I2S", price: "3 500 F" },
    { name: "Moteur vibrant", role: "Vibreur 10×3 mm piloté par PWM", price: "2 000 F" },
    { name: "Batterie LiPo 320 mAh", role: "Alimentation 3,7 V + TP4056", price: "5 000 F" },
    { name: "Bouton + composants", role: "Bouton poussoir, interrupteur, résistances", price: "2 000 F" },
    { name: "Boîtier PLA", role: "Imprimé 3D sur mesure, 70×37 mm", price: "3 000 F" },
  ],
  stack: [
    { name: "Edge Impulse", usage: "Entraînement du modèle" },
    { name: "TensorFlow Lite Micro", usage: "Inférence embarquée" },
    { name: "Arduino IDE", usage: "Firmware ESP32-S3" },
    { name: "MIT App Inventor", usage: "Application Android" },
    { name: "SolidWorks", usage: "Modélisation 3D du boîtier" },
  ],
};

export const contact = {
  title: "Travaillons ensemble",
  intro:
    "Une question, un partenariat, une demande de démonstration ou simplement envie de soutenir le projet AURIS ? Contactez-nous directement via WhatsApp ou par email.",
  emails: CONTACTS.emails,
  whatsapps: CONTACTS.whatsapps,
  location: CONTACTS.location,
  school: CONTACTS.school,
};

export const footer = {
  tagline: "Le bracelet qui donne une voix au silence",
  description:
    "Projet étudiant développé à l'ENSPD Douala, pour les personnes sourdes et malentendantes du Cameroun et d'Afrique centrale.",
  links: [
    { label: "Problème", href: "#probleme" },
    { label: "Solution", href: "#solution" },
    { label: "Technologie", href: "#technologie" },
    { label: "Équipe", href: "#equipe" },
    { label: "Contact", href: "#contact" },
  ],
  social: [
    { name: "LinkedIn", href: "#", icon: "linkedin" },
    { name: "GitHub", href: "#", icon: "github" },
    { name: "Email", href: `mailto:${CONTACTS.emails[0]}`, icon: "mail" },
  ],
  copyright: `© ${new Date().getFullYear()} AURIS. Tous droits réservés.`,
  credits: "Projet tutoré ENSPD Douala · Cameroun",
};