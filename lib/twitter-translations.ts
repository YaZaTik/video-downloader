import { Language } from "./translations";

export interface TwitterFeature {
  title: string;
  desc: string;
  badge?: string;
}

export interface TwitterFaq {
  q: string;
  a: string;
}

export interface TwitterPageTranslations {
  badge: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
  shortcutTip: string;
  shortcutDesc: string;

  // Editorial Section 1: Intro
  introTitle: string;
  introSubtitle: string;
  introText: string;
  compatTitle: string;
  compatDesc: string;
  watermarkTitle: string;
  watermarkDesc: string;

  // Capabilities
  capabilitiesTitle: string;
  capabilitiesSubtitle: string;
  capabilities: {
    tweetsTitle: string;
    tweetsDesc: string;
    gifsTitle: string;
    gifsDesc: string;
    audioTitle: string;
    audioDesc: string;
    spacesTitle: string;
    spacesDesc: string;
  };

  // Advantages
  advantagesTitle: string;
  advantagesSubtitle: string;
  advantages: TwitterFeature[];

  // PWA Section
  pwaTitle: string;
  pwaSubtitle: string;
  pwaText: string;
  pwaF1Title: string;
  pwaF1Desc: string;
  pwaF2Title: string;
  pwaF2Desc: string;
  pwaF3Title: string;
  pwaF3Desc: string;

  // Guide Steps
  guideBadge: string;
  guideTitle: string;
  guideSubtitle: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;

  // Address Bar Shortcut
  shortcutBoxTitle: string;
  shortcutBoxSubtitle: string;
  shortcutBoxText: string;
  shortcutStep1: string;
  shortcutStep2: string;
  shortcutStep3: string;

  // Comparison Table
  comparisonTitle: string;
  comparisonSubtitle: string;
  thFeature: string;
  thSaveIt: string;
  thOthers: string;
  thScreenRecord: string;
  compRows: {
    feature: string;
    saveit: string;
    others: string;
    screenRecord: string;
  }[];

  // FAQ
  faqBadge: string;
  faqTitle: string;
  faqSubtitle: string;
  faqs: TwitterFaq[];
}

export const twitterTranslations: Record<Language, TwitterPageTranslations> = {
  ar: {
    badge: "أداة تحميل فيديوهات تويتر (X) الرسمية",
    heroTitle: "تحميل مقاطع وتغريدات",
    heroTitleHighlight: "تويتر (X) بدقة 1080p MP4",
    heroSubtitle:
      "احفظ مقاطع الفيديو والتغريدات والـ GIFs واستخرج صوت MP3 بنقاء استثنائي من منصة X (تويتر سابقاً) بدون برامج، مجاناً وبدون أي تسجيل.",
    shortcutTip: "⚡ اختصار فوري:",
    shortcutDesc: "أضف saveit.video/ قبل أي رابط تغريدة في شريط العناوين للتحميل المباشر! (مثال: saveit.video/x.com/user/status/...)",

    introTitle: "أسرع وأسهل طريقة لتحميل فيديوهات X (تويتر) بجودة Full HD",
    introSubtitle: "الحل النهائي لتحميل مقاطع منصة X بضغطة زر واحدة وبدون إعلانات مزعجة",
    introText:
      "تعتبر منصة X (تويter) المصدر الأول للأخبار العاجلة والمقابلات والمقاطع الفيروسية في العالم. يمنحك موقع Saveit.video إمكانية استخراج الفيديو الأصلي الخام من أي تغريدة بجميع الدقات المتاحة (1080p, 720p, 480p) وحفظه مباشرة في ذاكرة هاتفك أو جهاز الكمبيوتر الخاص بك بسرعة خاطفة.",
    compatTitle: "يعمل على جميع الأجهزة والمتصفحات",
    compatDesc:
      "لا تحتاج لتحميل أي برامج خارجية أو روبوتات منشن في تويتر. متوافق 100% مع Google Chrome و Safari و Edge و Firefox على أنظمة Windows و Mac و Android و iPhone.",
    watermarkTitle: "فيديو نقي 100% بدون أي ضغط أو علامات مائية",
    watermarkDesc:
      "نقوم بسحب ملف الفيديو مباشرة من خوادم CDN التابعة لمنصة X، مما يضمن لك أعلى معدل وضوح وبت (Bitrate) ممكن بدون أي شعارات أو أزرار شاشة.",

    capabilitiesTitle: "جميع أنواع وسائط تويتر (X) المدعومة",
    capabilitiesSubtitle: "أداتنا قادرة على تحليل كافة أنواع الوسائط المنشورة في تغريدات منصة X",
    capabilities: {
      tweetsTitle: "فيديوهات التغريدات (HD MP4)",
      tweetsDesc: "تحميل مقاطع الفيديو المرفقة في التغريدات بأعلى دقة متوفرة تصل إلى 1080p Full HD.",
      gifsTitle: "صور الـ GIF المتحركة",
      gifsDesc: "تحويل وتحميل صور الـ GIF في تويتر كملفات MP4 خفيفة وسلسة يسهل مشاركتها في واتساب وتليجرام.",
      audioTitle: "استخراج صوت MP3 نقي",
      audioDesc: "تحميل الصوت فقط من المقابلات والخطابات والبودكاست كملف MP3 خفيف ونقي بنقرة واحدة.",
      spacesTitle: "مساحات تويتر الصوتية والمقاطع الطويلة",
      spacesDesc: "دعم المقاطع الطويلة والتسجيلات المرفوعة بجودة استريو فائقة الوضوح.",
    },

    advantagesTitle: "مميزات موقعنا الحصرية لتويتر (X)",
    advantagesSubtitle: "لماذا يفضل الملايين SaveIt على روبوتات تويتر والمواقع البطيئة؟",
    advantages: [
      {
        title: "بدون روبوتات منشن (No Bot Mentions)",
        desc: "لا داعي للإشارة إلى بوتات تويتر في التعليقات وانتظار الرد، فقط انسخ الرابط وحمّل فوراً.",
        badge: "فوري وخاص",
      },
      {
        title: "حيلة شريط العناوين الخارقة",
        desc: "اكتب saveit.video/ قبل رابط أي تغريدة في متصفحك واضغط Enter لتبدأ التحميل مباشرة.",
        badge: "حصري",
      },
      {
        title: "تطبيق ويب تقدمي (PWA) للأجهزة الذكية",
        desc: "ثبّت SaveIt كتطبيق رسمي على شاشة هاتفك الرئيسية بنقرة واحدة بدون متجر التطبيقات.",
        badge: "PWA جاهز",
      },
      {
        title: "حماية الخصوصية 100% وبدون تسجيل",
        desc: "لا نطلب منك تسجيل الدخول بحساب تويتر ولا نسجل بياناتك أو تاريخ تحميلاتك.",
        badge: "آمن 100%",
      },
      {
        title: "تنزيل غير محدود ومجاني للأبد",
        desc: "حمّل عدداً لا نهائياً من مقاطع التغريدات والـ GIFs مجاناً وبدون أي اشتراكات.",
        badge: "مجاني للأبد",
      },
      {
        title: "حفظ مباشر في مجلد التنزيلات والمعرض",
        desc: "الملفات تُحفظ بصيغة MP4 المتوافقة مع جميع مشغلات الفيديو والأجهزة الذكية.",
        badge: "سهولة تامة",
      },
    ],

    pwaTitle: "حمّل مقاطع تويتر بضغطة زر عبر تطبيق SaveIt",
    pwaSubtitle: "تطبيق خفيف وفائق السرعة لهواتف أندرويد وآيفون",
    pwaText:
      "مع تقنية Progressive Web App (PWA)، يمكنك تثبيت Saveit.video على شاشة هاتفك في ثانية واحدة لتنزيل فيديوهات X وقتما تشاء دون استهلاك مساحة الذاكرة.",
    pwaF1Title: "تنزيل سريع بضغطة واحدة",
    pwaF1Desc: "افتح التطبيق من شاشتك الرئيسية وألصق رابط التغريدة ليتم جلب الفيديو فوراً.",
    pwaF2Title: "مشاهدة أوفلاين بدون إنترنت",
    pwaF2Desc: "استمتع بمشاهدة مقاطع التغريدات والتحليلات الإخبارية أثناء السفر وبدون استهلاك باقة النت.",
    pwaF3Title: "حفظ في ألبوم الكاميرا والاستوديو",
    pwaF3Desc: "المقاطع تُحفظ مباشرة في تطبيق الصور أو الملفات لتكون جاهزة للمشاركة السريعة.",

    guideBadge: "دليل الاستخدام السريع",
    guideTitle: "كيف تقوم بتحميل فيديو من تويتر (X)؟",
    guideSubtitle: "ثلاث خطوات فقط لتحميل أي فيديو تغريدة بدقة 1080p عالية:",
    step1Title: "1. انسخ رابط التغريدة",
    step1Desc: "افتح تطبيق X (تويتر) أو المتصفح، توجه إلى التغريدة المطلوبة، اضغط على زر المشاركة ثم اختر 'نسخ الرابط'.",
    step2Title: "2. الصق الرابط في SaveIt",
    step2Desc: "افتح saveit.video/x والصق الرابط في مربع البحث، ثم اضغط على زر 'تحميل'.",
    step3Title: "3. اختر الجودة واحفظ الملف",
    step3Desc: "اختر الجودة المطلوبة (1080p أو 720p أو صوت MP3) واضغط للتحميل المباشر على جهازك.",

    shortcutBoxTitle: "الحيلة السرية: التحميل مباشرة من شريط المتصفح!",
    shortcutBoxSubtitle: "أسرع طريقة في العالم لتحميل أي تغريدة بدون فتح الصفحة مسبقاً",
    shortcutBoxText:
      "إذا كنت تتصفح تويتر عبر المتصفح، استخدم هذا الاختصار السريع للغاية:",
    shortcutStep1: "افتح أي تغريدة تحتوي على فيديو على موقع x.com أو twitter.com.",
    shortcutStep2: "أضف ببساطة saveit.video/ في بداية رابط التغريدة في شريط العناوين:",
    shortcutStep3: "اضغط على Enter وسيتم نقلك مباشرة إلى خيارات التحميل بأعلى جودة متوفرة!",

    comparisonTitle: "مقارنة Saveit.video مع روبوتات تويتر والمواقع الأخرى",
    comparisonSubtitle: "شاهد لماذا SaveIt هو الأفضل والأكثر أماناً لتحميل وسائط منصة X",
    thFeature: "الميزة",
    thSaveIt: "موقع Saveit.video",
    thOthers: "المواقع التقليدية",
    thScreenRecord: "روبوتات المنشن في تويتر",
    compRows: [
      {
        feature: "سرعة التحميل",
        saveit: "فوري خلال 1-2 ثانية",
        others: "بطيء مع إعلانات إعادة توجيه",
        screenRecord: "قد يتأخر بالدقائق أو يفشل الرد",
      },
      {
        feature: "الخصوصية",
        saveit: "خاصة 100% ولا تظهر لأحد",
        others: "مقبولة",
        screenRecord: "عامة ويرى الجميع تعليقك ومنشنك",
      },
      {
        feature: "جودة 1080p كاملة",
        saveit: "الملف الأصلي بأعلى جودة",
        others: "غالباً محصورة في 720p",
        screenRecord: "تعتمد على إمكانيات الروبوت",
      },
      {
        feature: "استخراج صوت MP3",
        saveit: "مدمج بنقرة واحدة (نقاء عالي)",
        others: "نادراً ما يتوفر",
        screenRecord: "غير متاح",
      },
      {
        feature: "دعم صور GIF في تويتر",
        saveit: "تحويل مباشر إلى MP4 سلس",
        others: "غير مدعوم دائماً",
        screenRecord: "يحتاج لأوامر إضافية",
      },
    ],

    faqBadge: "إجابات على الأسئلة الشائعة",
    faqTitle: "الأسئلة الشائعة حول تحميل فيديوهات X (تويتر)",
    faqSubtitle: "كل ما تحتاج إلى معرفته حول حفظ مقاطع الفيديو والتغريدات والـ GIFs",
    faqs: [
      {
        q: "هل خدمة تحميل فيديوهات تويتر (X) مجانية تماماً؟",
        a: "نعم، موقع Saveit.video مجاني 100% وبدون أي قيود على عدد الفيديوهات أو التغريدات التي تقوم بتحميلها.",
      },
      {
        q: "أين تحفظ مقاطع الفيديو المحملة من تويتر على جهازي؟",
        a: "في أجهزة أندرويد يتم حفظ الفيديو مباشرة في مجلد 'التنزيلات (Downloads)' ويظهر في تطبيق الصور. وفي هواتف آيفون (iOS) ستجده في تطبيق 'الملفات (Files)' أو داخل مجلد تنزيلات سفاري ويمكن حفظه في ألبوم الكاميرا.",
      },
      {
        q: "هل يمكنني استخراج الصوت فقط بصيغة MP3 من تغريدات تويتر؟",
        a: "نعم! نوفر لك خيار 'Audio' لاستخراج الصوت بجودة نقية، وهو مثالي للاستماع للمقابلات والخطابات والبودكاست بدون الحاجة لتنزيل الفيديو كاملاً.",
      },
      {
        q: "هل يدعم الموقع تحميل صور الـ GIF المتحركة من تويتر؟",
        a: "نعم، منصة X تخزن الـ GIF بصيغة فيديو، وأداتنا تقوم بتحويلها وحفظها كملف MP4 عالي الكفاءة يسهل تشغيله وإرساله في كافة تطبيقات المراسلة.",
      },
      {
        q: "كيف يعمل اختصار شريط العناوين (saveit.video/x.com/...)؟",
        a: "اكتب saveit.video/ مباشرة قبل رابط التغريدة في متصفحك واضغط Enter، وسيتم توجيهك تلقائياً لصفحة التحميل مع إظهار دقة 1080p و 720p فوراً.",
      },
      {
        q: "هل يحفظ موقع SaveIt أي بيانات حول حسابي أو المقاطع المحملة؟",
        a: "أبداً. نحن نضمن الخصوصية الكاملة. لا نقوم بتخزين أي مقاطع فيديو على خوادمنا ولا نطلب إذن الوصول لحسابك الشخصي في تويتر.",
      },
    ],
  },

  fr: {
    badge: "Téléchargeur Vidéo X (Twitter) Officiel & Gratuit",
    heroTitle: "Télécharger les vidéos et Tweets",
    heroTitleHighlight: "X (Twitter) en 1080p Full HD",
    heroSubtitle:
      "Enregistrez les vidéos, GIFs et tweets de X (anciennement Twitter) en MP4 haute résolution ou extrayez l'audio MP3. Sans filigrane, 100% gratuit et sans inscription.",
    shortcutTip: "⚡ Raccourci Pro :",
    shortcutDesc: "Ajoutez saveit.video/ devant n'importe quel lien de tweet pour un téléchargement direct ! (ex : saveit.video/x.com/user/status/...)",

    introTitle: "Téléchargez facilement du contenu X (Twitter) avec Saveit.video",
    introSubtitle: "La méthode la plus rapide et la plus sûre pour sauvegarder vos tweets vidéo",
    introText:
      "X (Twitter) est la plateforme de référence pour les actualités en direct, interviews et vidéos virales. Grâce à Saveit.video, extrayez en un clic le flux MP4 original de n'importe quel tweet dans toutes les résolutions disponibles (1080p Full HD, 720p, 480p) et enregistrez-le directement sur votre appareil.",
    compatTitle: "Compatibilité universelle (Sans bots ni extensions)",
    compatDesc:
      "Fonctionne sans installer aucun logiciel ni devoir mentionner des bots en réponse. Compatible avec Google Chrome, Safari, Firefox, Edge sur ordinateurs (Windows, Mac, Linux) et mobiles (Android, iPhone).",
    watermarkTitle: "Qualité source originale & 100% Sans Filigrane",
    watermarkDesc:
      "Le flux vidéo est téléchargé directement depuis les serveurs CDN de Twitter, sans aucune perte de qualité ni filigrane ajouté.",

    capabilitiesTitle: "Tous les formats de médias X (Twitter) pris en charge",
    capabilitiesSubtitle: "Qu'il s'agisse d'une vidéo virale, d'un GIF ou d'un podcast, SaveIt l'extrait instantanément",
    capabilities: {
      tweetsTitle: "Vidéos de Tweets (MP4 1080p)",
      tweetsDesc: "Téléchargez les vidéos publiées dans les tweets dans leur résolution maximale d'origine.",
      gifsTitle: "GIFs animés Twitter",
      gifsDesc: "Convertissez et enregistrez les GIFs de Twitter sous forme de vidéos MP4 fluides et faciles à partager.",
      audioTitle: "Extracteur Audio MP3 haute clarté",
      audioDesc: "Récupérez uniquement la bande sonore des interviews ou des podcasts sous forme de fichier audio léger.",
      spacesTitle: "Enregistrements longs & Espaces",
      spacesDesc: "Téléchargement sans coupure des longues vidéos et discours avec un son stéréo synchronisé.",
    },

    advantagesTitle: "Les atouts exclusifs de Saveit.video pour X",
    advantagesSubtitle: "Pourquoi choisir SaveIt plutôt que les bots Twitter et les sites lents ?",
    advantages: [
      {
        title: "Zéro bot de mention requis",
        desc: "Pas besoin de poster un commentaire public en mentionnant un bot : copiez le lien et téléchargez en privé.",
        badge: "100% Privé",
      },
      {
        title: "Raccourci barre d'adresse exclusif",
        desc: "Tapez saveit.video/ devant n'importe quelle URL de tweet dans votre navigateur pour télécharger en 1 seconde.",
        badge: "Exclusif",
      },
      {
        title: "Application Mobile Web (PWA)",
        desc: "Installez l'application sur votre écran d'accueil Android ou iPhone en un clic sans passer par l'App Store.",
        badge: "PWA Mobile",
      },
      {
        title: "Totalement anonyme & Sans compte",
        desc: "Aucune connexion avec votre compte Twitter, aucun mot de passe demandé et aucun suivi d'activité.",
        badge: "Sécurisé",
      },
      {
        title: "Téléchargements illimités et gratuits",
        desc: "Enregistrez autant de vidéos que vous le souhaitez sans limites quotidiennes ni frais cachés.",
        badge: "100% Gratuit",
      },
      {
        title: "Sauvegarde directe dans la Galerie",
        desc: "Fichiers MP4 prêts à être visionnés hors ligne ou partagés directement sur WhatsApp et Telegram.",
        badge: "Pratique",
      },
    ],

    pwaTitle: "Téléchargez sur mobile avec l'application Saveit.video",
    pwaSubtitle: "Optimisée pour smartphones et tablettes Android & iPhone",
    pwaText:
      "Grâce à notre technologie d'application web progressive (PWA), installez Saveit.video sur votre écran d'accueil en 1 clic pour sauvegarder vos vidéos X en un geste.",
    pwaF1Title: "Téléchargement en un clic",
    pwaF1Desc: "Ouvrez l'icône depuis votre écran d'accueil et collez le lien du tweet pour récupérer la vidéo instantanément.",
    pwaF2Title: "Visionnage hors-ligne",
    pwaF2Desc: "Visionnez vos vidéos enregistrées partout, même dans l'avion ou sans connexion 4G/5G.",
    pwaF3Title: "Enregistrement direct dans les Photos",
    pwaF3Desc: "Les vidéos se sauvegardent directement dans votre bibliothèque multimédia.",

    guideBadge: "Guide Pratique",
    guideTitle: "Comment télécharger une vidéo de X (Twitter) ?",
    guideSubtitle: "Trois étapes très simples pour sauvegarder n'importe quel tweet en 1080p :",
    step1Title: "1. Copiez le lien du tweet",
    step1Desc: "Sur X (Twitter), repérez le tweet contenant la vidéo, cliquez sur l'icône Partager et sélectionnez 'Copier le lien'.",
    step2Title: "2. Collez l'URL sur Saveit.video",
    step2Desc: "Accédez à saveit.video/x, collez le lien dans le champ de recherche et cliquez sur 'Télécharger'.",
    step3Title: "3. Choisissez la résolution et téléchargez",
    step3Desc: "Sélectionnez votre qualité préférée (1080p Full HD, 720p ou Audio MP3) pour lancer l'enregistrement immédiat.",

    shortcutBoxTitle: "Astuce secrète : Téléchargez directement depuis la barre d'adresse !",
    shortcutBoxSubtitle: "Gagnez du temps sans même ouvrir notre page d'accueil",
    shortcutBoxText:
      "Lorsque vous consultez un tweet sur votre navigateur, utilisez ce raccourci magique :",
    shortcutStep1: "Positionnez-vous sur le tweet contenant la vidéo sur x.com ou twitter.com.",
    shortcutStep2: "Ajoutez simplement saveit.video/ juste devant l'URL dans votre barre d'adresse :",
    shortcutStep3: "Appuyez sur Entrée : les options de téléchargement s'affichent automatiquement en haute qualité !",

    comparisonTitle: "Pourquoi choisir Saveit.video ?",
    comparisonSubtitle: "Découvrez la différence par rapport aux bots Twitter et aux enregistrements d'écran",
    thFeature: "Fonctionnalité",
    thSaveIt: "Saveit.video",
    thOthers: "Sites classiques",
    thScreenRecord: "Bots Twitter / Screen record",
    compRows: [
      {
        feature: "Vitesse de téléchargement",
        saveit: "Instantané (1 à 2 secondes)",
        others: "Lent avec pop-ups publicitaires",
        screenRecord: "Attente de réponse du bot",
      },
      {
        feature: "Confidentialité",
        saveit: "100% Privé et discret",
        others: "Acceptable",
        screenRecord: "Public (tout le monde voit le bot)",
      },
      {
        feature: "Qualité Full HD 1080p",
        saveit: "Fichier source direct",
        others: "Souvent limité à 720p",
        screenRecord: "Qualité dégradée",
      },
      {
        feature: "Extracteur MP3 dédié",
        saveit: "Inclus en un clic",
        others: "Rarement disponible",
        screenRecord: "Non disponible",
      },
      {
        feature: "Téléchargement des GIFs",
        saveit: "Conversion automatique en MP4",
        others: "Souvent ignoré",
        screenRecord: "Nécessite des commandes",
      },
    ],

    faqBadge: "Questions Fréquentes",
    faqTitle: "Foire Aux Questions (FAQ) X / Twitter",
    faqSubtitle: "Tout ce que vous devez savoir pour télécharger des vidéos et GIFs depuis X",
    faqs: [
      {
        q: "Saveit.video est-il gratuit pour télécharger des vidéos X ?",
        a: "Oui, notre outil est entièrement gratuit et illimité. Aucun abonnement ni moyen de paiement n'est requis.",
      },
      {
        q: "Où sont enregistrées les vidéos sur mon téléphone (Android / iPhone) ?",
        a: "Sur Android, la vidéo est enregistrée dans le dossier 'Téléchargements' et dans la galerie. Sur iPhone, elle arrive dans l'application 'Fichiers' ou Safari et peut être enregistrée dans 'Photos'.",
      },
      {
        q: "Puis-je extraire uniquement le son ou la musique d'un tweet ?",
        a: "Oui ! Utilisez l'option 'Audio' pour obtenir un fichier MP3 léger de haute fidélité sans télécharger l'image.",
      },
      {
        q: "Comment télécharger un GIF de Twitter ?",
        a: "Les GIFs sur Twitter sont encodés en MP4. Collez simplement le lien du tweet sur notre site et téléchargez le fichier MP4 en haute fluidité.",
      },
      {
        q: "Comment fonctionne le raccourci dans la barre d'adresse ?",
        a: "Insérez saveit.video/ devant l'URL du tweet (ex: saveit.video/x.com/user/status/...) dans votre navigateur pour lancer le téléchargement direct.",
      },
      {
        q: "Saveit.video conserve-t-il des données ou des copies de mes vidéos ?",
        a: "Non. Vos téléchargements sont strictement privés et aucun fichier média n'est stocké sur nos serveurs.",
      },
    ],
  },

  en: {
    badge: "Official & Free X (Twitter) Video Downloader",
    heroTitle: "Download X (Twitter) Videos & Tweets",
    heroTitleHighlight: "in 1080p Full HD MP4",
    heroSubtitle:
      "Save high-definition videos, GIFs, and tweets from X (formerly Twitter) with crystal-clear MP3 audio. Watermark-free, unlimited, and no registration needed.",
    shortcutTip: "⚡ Pro Shortcut:",
    shortcutDesc: "Add saveit.video/ before any tweet link for instant download! (e.g. saveit.video/x.com/user/status/...)",

    introTitle: "Easily Download X (Twitter) Content with Saveit.video",
    introSubtitle: "The fastest, safest cloud downloader for viral tweets and videos",
    introText:
      "X (formerly Twitter) is the world's pulse for breaking news, podcasts, and viral video moments. With Saveit.video, effortlessly extract the raw original MP4 stream from any tweet in all available resolutions (1080p Full HD, 720p, 480p) and save it directly to your computer or mobile device.",
    compatTitle: "Universal Compatibility (No Bots or Extensions)",
    compatDesc:
      "Works directly inside any web browser with no third-party extensions and no need to publicly mention download bots. Compatible with Google Chrome, Safari, Firefox, Edge across Windows, macOS, Linux, Android, and iOS.",
    watermarkTitle: "100% Watermark-Free & Original Bitrate",
    watermarkDesc:
      "Videos are downloaded directly from official Twitter CDN servers, preserving pure audio and video fidelity with zero added logos or watermarks.",

    capabilitiesTitle: "Supported X (Twitter) Media Types",
    capabilitiesSubtitle: "Whatever media format is posted on X, SaveIt extracts it immediately",
    capabilities: {
      tweetsTitle: "Tweet Videos (1080p Full HD MP4)",
      tweetsDesc: "Save video clips embedded in tweets at their absolute highest available bitrate.",
      gifsTitle: "Twitter Animated GIFs",
      gifsDesc: "Convert and save looping Twitter GIFs as lightweight, smooth MP4 video files ready to share.",
      audioTitle: "High-Bitrate MP3 Audio Extraction",
      audioDesc: "Extract crisp background speeches, interviews, and music from tweets as standalone audio files.",
      spacesTitle: "Long-Form Videos & Speeches",
      spacesDesc: "Seamlessly download extended video clips with synchronized stereo audio.",
    },

    advantagesTitle: "Exclusive Advantages of Saveit.video for X",
    advantagesSubtitle: "Why millions choose SaveIt over clunky bots and ad-heavy downloaders",
    advantages: [
      {
        title: "No Public Bot Mentions",
        desc: "Never clutter replies or expose what you're downloading. Just paste the URL and download in complete privacy.",
        badge: "100% Private",
      },
      {
        title: "Signature Address Bar Shortcut",
        desc: "Type saveit.video/ in front of any tweet URL in your browser to download in a single keystroke.",
        badge: "Exclusive",
      },
      {
        title: "Mobile Progressive Web App (PWA)",
        desc: "Install SaveIt onto your home screen on Android or iPhone with 1 click without going to an app store.",
        badge: "Mobile PWA",
      },
      {
        title: "100% Anonymous & Zero Accounts",
        desc: "No Twitter API login, no passwords requested, and zero download tracking.",
        badge: "Private & Safe",
      },
      {
        title: "Unlimited Free Downloads",
        desc: "Download as many clips and GIFs as you want with no daily throttles or hidden paywalls.",
        badge: "100% Free",
      },
      {
        title: "Direct Gallery & Camera Roll Save",
        desc: "Files save straight into your Photos or Downloads folder for immediate offline viewing and sharing.",
        badge: "Convenient",
      },
    ],

    pwaTitle: "Download on Mobile with the Saveit.video App",
    pwaSubtitle: "Optimized for Android & iPhone smartphones and tablets",
    pwaText:
      "Using modern Progressive Web App (PWA) technology, install Saveit.video to your device home screen in 1 click without downloading bulky APKs.",
    pwaF1Title: "One-Tap Downloads",
    pwaF1Desc: "Launch the app icon from your home screen, paste the tweet link, and download instantly.",
    pwaF2Title: "Offline Video Playback",
    pwaF2Desc: "Keep your favorite tweets and videos ready to watch anywhere, even without Wi-Fi.",
    pwaF3Title: "Save Directly to Photos",
    pwaF3Desc: "Media files are automatically stored in your camera roll or downloads folder.",

    guideBadge: "Quick 3-Step Guide",
    guideTitle: "How to Download Videos from X (Twitter)",
    guideSubtitle: "Three simple steps to save any public tweet video in high-definition 1080p:",
    step1Title: "1. Copy the Tweet Link",
    step1Desc: "On X (Twitter), navigate to the tweet, tap the Share icon, and select 'Copy Link'.",
    step2Title: "2. Paste the URL on SaveIt",
    step2Desc: "Visit saveit.video/x, paste the link into the search bar, and click 'Download'.",
    step3Title: "3. Choose Resolution & Save",
    step3Desc: "Pick 1080p Full HD, 720p, or MP3 Audio and save the file directly to your device.",

    shortcutBoxTitle: "Pro Trick: Download Directly from the Address Bar!",
    shortcutBoxSubtitle: "Save time without even visiting the homepage first",
    shortcutBoxText:
      "When viewing any tweet in your desktop or mobile browser, use this instant shortcut:",
    shortcutStep1: "Navigate to the tweet with the video on x.com or twitter.com.",
    shortcutStep2: "Simply prepend saveit.video/ directly in front of the URL in your address bar:",
    shortcutStep3: "Press Enter: you'll be redirected straight to the download options in maximum resolution!",

    comparisonTitle: "Why Choose Saveit.video?",
    comparisonSubtitle: "See how SaveIt compares to clunky Twitter download bots and screen recording",
    thFeature: "Feature",
    thSaveIt: "Saveit.video",
    thOthers: "Other Downloaders",
    thScreenRecord: "Twitter Mention Bots",
    compRows: [
      {
        feature: "Download Speed",
        saveit: "Instant (1-2 seconds)",
        others: "Slow with popup ads",
        screenRecord: "Minutes of delay or bot fails",
      },
      {
        feature: "Privacy",
        saveit: "100% Private & Invisible",
        others: "Moderate",
        screenRecord: "Public (everyone sees your mention)",
      },
      {
        feature: "1080p Full HD",
        saveit: "Original raw source stream",
        others: "Often capped at 720p",
        screenRecord: "Depends on bot limitations",
      },
      {
        feature: "Dedicated MP3 Audio",
        saveit: "Built-in 1-click extractor",
        others: "Rarely available",
        screenRecord: "Not supported",
      },
      {
        feature: "Twitter GIF Support",
        saveit: "Direct MP4 video conversion",
        others: "Often unsupported",
        screenRecord: "Requires extra commands",
      },
    ],

    faqBadge: "Frequently Asked Questions",
    faqTitle: "X (Twitter) Downloader FAQ",
    faqSubtitle: "Everything you need to know about downloading videos, GIFs, and tweets from X",
    faqs: [
      {
        q: "Is Saveit.video 100% free for X (Twitter) videos?",
        a: "Yes, our tool is completely free with unlimited downloads. No sign-up, credit cards, or hidden fees.",
      },
      {
        q: "Where are downloaded X videos saved on iPhone and Android?",
        a: "On Android, files go directly to your 'Downloads' folder and show in your Gallery/Photos. On iPhone, they are saved in 'Files' or Safari Downloads and can be moved to Photos with one tap.",
      },
      {
        q: "Can I extract only the audio or music from a tweet?",
        a: "Yes! Choose the 'Audio' option to get a high-quality MP3 file without downloading the entire video.",
      },
      {
        q: "Does SaveIt support downloading Twitter GIFs?",
        a: "Yes. Twitter stores GIFs as MP4 video files. Our tool extracts and delivers them as smooth MP4 videos compatible with all messengers.",
      },
      {
        q: "How does the address bar shortcut work?",
        a: "Simply add saveit.video/ right before the tweet URL (e.g., saveit.video/x.com/user/status/...) to jump straight to the download options.",
      },
      {
        q: "Does SaveIt store my downloaded videos or track my Twitter activity?",
        a: "Never. We do not store media on our servers and we never track or log your download activity.",
      },
    ],
  },
};
