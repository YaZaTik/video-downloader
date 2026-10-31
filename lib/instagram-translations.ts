import { Language } from "./translations";

export interface InstagramFeature {
  title: string;
  desc: string;
  badge?: string;
}

export interface InstagramFaq {
  q: string;
  a: string;
}

export interface InstagramPageTranslations {
  badge: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
  shortcutTip: string;
  shortcutDesc: string;

  // Editorial Section 1: Introduction
  introTitle: string;
  introSubtitle: string;
  introText: string;
  compatTitle: string;
  compatDesc: string;
  watermarkTitle: string;
  watermarkDesc: string;

  // Formats / Capabilities
  capabilitiesTitle: string;
  capabilitiesSubtitle: string;
  capabilities: {
    reelsTitle: string;
    reelsDesc: string;
    storiesTitle: string;
    storiesDesc: string;
    audioTitle: string;
    audioDesc: string;
    carouselTitle: string;
    carouselDesc: string;
  };

  // Website Unique Advantages
  advantagesTitle: string;
  advantagesSubtitle: string;
  advantages: InstagramFeature[];

  // Mobile PWA Section
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
  faqs: InstagramFaq[];
}

export const instagramTranslations: Record<Language, InstagramPageTranslations> = {
  ar: {
    badge: "أداة تحميل فيديوهات وريلز إنستغرام الرسمية",
    heroTitle: "تحميل مقاطع وريلز",
    heroTitleHighlight: "إنستغرام بدقة 1080p الأصلية",
    heroSubtitle:
      "احفظ مقاطع ريلز، القصص (Stories)، المنشورات واستخرج صوت MP3 بنقاء 100% بدون علامة مائية، مجاناً وبدون أي تسجيل.",
    shortcutTip: "⚡ اختصار فوري:",
    shortcutDesc: "أضف saveit.video/ أمام أي رابط إنستغرام للتحميل المباشر! (مثال: saveit.video/instagram.com/reel/...)",

    introTitle: "أسهل وأسرع وسيلة لتحميل محتوى إنستغرام عبر موقع Saveit.video",
    introSubtitle: "الحل السحابي المتكامل لحفظ وأرشفة وسائط إنستغرام بدون إعلانات مزعجة",
    introText:
      "هل تبحث عن طريقة سريعة ومجانية لحفظ مقاطعك المفضلة من إنستغرام؟ اكتشف موقع Saveit.video المتطور الذي يمنحك تجربة تحميل سلسة وفائقة السرعة. احصل على فيديوهاتك وصورك بأعلى دقة متوفرة (Full HD 1080p و 4K) بنقرة واحدة، لتُحفظ مباشرة في ألبوم الصور أو مجلد التنزيلات على جهازك.",
    compatTitle: "توافق شامل مع جميع المتصفحات والأجهزة",
    compatDesc:
      "يعمل مباشرة من المتصفح دون الحاجة إلى تثبيت أي إضافات خارجية. يدعم بالكامل Google Chrome و Safari و Firefox و Opera و Edge على الحواسيب (Windows و Mac و Linux) والهواتف (Android و iPhone).",
    watermarkTitle: "جودة نقية 100% بدون علامة مائية وبدون ضغط",
    watermarkDesc:
      "نقوم باستخراج ملف الفيديو الخام مباشرة من خوادم إنستغرام CDN الأصلية دون إضافة أي شعارات أو نصوص مشوهة أو تخفيض في معدل البت (Bitrate).",

    capabilitiesTitle: "جميع أنواع محتوى إنستغرام المدعومة",
    capabilitiesSubtitle: "مهما كان نوع المنشور على إنستغرام، أداتنا قادرة على تحليله وتنزيله فوراً",
    capabilities: {
      reelsTitle: "فيديوهات ريلز (Instagram Reels)",
      reelsDesc: "حفظ مقاطع ريلز العمودية بالدقة الكاملة 1080p مع الصوت الأصلي المتزامن تماماً.",
      storiesTitle: "قصص إنستغرام (Stories & Highlights)",
      storiesDesc: "احتفظ بالقصص اليومية وأبرز اللحظات (Highlights) قبل أن تختفي بعد 24 ساعة.",
      audioTitle: "استخراج صوت MP3 نقي",
      audioDesc: "تحميل الموسيقى الرائجة والبودكاست والمؤثرات الصوتية في الريلز كملف صوتي منفصل.",
      carouselTitle: "المنشورات المتعددة (Carousel Albums)",
      carouselDesc: "تنزيل الألبومات التي تحتوي على عدة صور وفيديوهات في منشور واحد بسهولة تامة.",
    },

    advantagesTitle: "مميزات موقعنا الحصرية (لماذا SaveIt هو الأفضل؟)",
    advantagesSubtitle: "صُممت منصتنا لتوفر تجربة مستخدم خالية من التعقيد والبطء",
    advantages: [
      {
        title: "سرعة تحميل خارقة عبر CDN",
        desc: "خوادمنا تتصل مباشرة بنقاط التوزيع العالمية السريعة لتبدأ عملية التنزيل فوراً دون انتظار.",
        badge: "فائق السرعة",
      },
      {
        title: "حيلة شريط العناوين الثورية",
        desc: "لست بحاجة لفتح الموقع، فقط اكتب saveit.video/ قبل رابط الإنستغرام واضغط Enter!",
        badge: "حصري",
      },
      {
        title: "تطبيق ويب تقدمي (PWA) للأجهزة الذكية",
        desc: "ثبّت الموقع كتطبيق خفيف وسريع على شاشة هاتفك الرئيسية دون المرور بمتجر التطبيقات.",
        badge: "PWA جاهز",
      },
      {
        title: "حماية الخصوصية 100% وبدون تسجيل",
        desc: "لا نطلب منك إنشاء حساب ولا ندخل كلمة مرورك ولا نسجل تاريخ تحميلاتك أبداً.",
        badge: "آمن وخاص",
      },
      {
        title: "تنزيل غير محدود ومجاني للأبد",
        desc: "حمّل ما تشاء من مقاطع الفيديو والريلز دون أي قيود يومية أو دفعات مخفية.",
        badge: "مجاني 100%",
      },
      {
        title: "حفظ مباشر في معرض الهاتف",
        desc: "الفيديوهات تُحفظ مباشرة في تطبيق الصور أو تطبيق الملفات لسهولة المشاركة.",
        badge: "سهولة الاستخدام",
      },
    ],

    pwaTitle: "حمّل عبر هاتفك بسهولة مع تطبيق Saveit.video",
    pwaSubtitle: "تطبيق ويب خفيف ومثالي لهواتف أندرويد وآيفون",
    pwaText:
      "بفضل تقنية Progressive Web App (PWA)، يمكنك تثبيت Saveit.video كأيقونة تطبيق رسمي على شاشتك الرئيسية في ثانية واحدة، بدون استهلاك ذاكرة الهاتف وبدون تحديثات مزعجة.",
    pwaF1Title: "تنزيل بنقرة واحدة",
    pwaF1Desc: "افتح التطبيق من شاشتك الرئيسية وألصق الرابط لتحصل على الفيديو فوراً.",
    pwaF2Title: "مشاهدة أوفلاين بدون إنترنت",
    pwaF2Desc: "احتفظ بفيديوهاتك المفضلة واستمتع بمشاهدتها أثناء السفر أو في الأماكن الخالية من الشبكة.",
    pwaF3Title: "حفظ فوري في ألبوم الكاميرا",
    pwaF3Desc: "تنزل المقاطع مباشرة في مجلد التنزيلات وتظهر في تطبيق الصور لمشاركتها مع أصدقائك.",

    guideBadge: "دليل الاستخدام السريع",
    guideTitle: "كيف تقوم بتحميل فيديو أو ريلز من إنستغرام؟",
    guideSubtitle: "ثلاث خطوات بسيطة فقط تفصلك عن حفظ أي مقطع بدقة 1080p عالية:",
    step1Title: "1. انسخ رابط الفيديو",
    step1Desc: "افتح تطبيق إنستغرام أو المتصفح، اختر الريلز أو المنشور، اضغط على زر المشاركة ثم اختر 'نسخ الرابط'.",
    step2Title: "2. الصق الرابط في SaveIt",
    step2Desc: "ادخل إلى الموقع والصق الرابط في مربع البحث بالأعلى، واضغط على زر 'تحميل'.",
    step3Title: "3. احفظ الملف على جهازك",
    step3Desc: "اختر الجودة المناسبة (1080p MP4 أو ملف صوت MP3) واضغط لتحميل الفيديو فوراً.",

    shortcutBoxTitle: "الحيلة السرية: التحميل مباشرة من شريط المتصفح!",
    shortcutBoxSubtitle: "وفّر وقتك وحمّل بدون الدخول إلى الموقع مسبقاً",
    shortcutBoxText:
      "إذا كنت تتصفح إنستغرام عبر متصفح الكمبيوتر أو الهاتف، يمكنك استخدام هذا الاختصار السحري:",
    shortcutStep1: "توجّه إلى المنشور أو الريلز في إنستغرام.",
    shortcutStep2: "أضف ببساطة saveit.video/ في بداية الرابط في شريط العناوين:",
    shortcutStep3: "اضغط على Enter وستفتح لك خيارات التحميل المباشرة فوراً بأعلى جودة!",

    comparisonTitle: "مقارنة Saveit.video مع الحلول الأخرى",
    comparisonSubtitle: "شاهد الفرق بين موقعنا والأدوات التقليدية وتصوير الشاشة",
    thFeature: "الميزة",
    thSaveIt: "موقع Saveit.video",
    thOthers: "المواقع والإضافات الأخرى",
    thScreenRecord: "تصوير الشاشة",
    compRows: [
      {
        feature: "جودة الفيديو",
        saveit: "1080p Full HD نقية أصلية",
        others: "غالباً مضغوطة إلى 720p",
        screenRecord: "جودة منخفضة ومشوشة",
      },
      {
        feature: "العلامات المائية والشعارات",
        saveit: "نظيف 100% بدون أي شعار",
        others: "بعضها يضع علامات مائية",
        screenRecord: "أزرار الشاشة وأسماء الحسابات ظاهرة",
      },
      {
        feature: "استخراج صوت MP3 فقط",
        saveit: "مدمج بنقرة واحدة (نقاء عالي)",
        others: "غير متوفر في معظم الأدوات",
        screenRecord: "يتطلب برامج تعديل إضافية",
      },
      {
        feature: "الإعلانات والنوافذ المنبثقة",
        saveit: "خالي من النوافذ المزعجة والإعلانات الاحتيالية",
        others: "نوافذ منبثقة مزعجة وتوجيهات زائفة",
        screenRecord: "لا ينطبق",
      },
      {
        feature: "تطبيق خفيف للهاتف (PWA)",
        saveit: "متوفر بضغطة زر لآيفون وأندرويد",
        others: "نادراً ما يتوفر أو يتطلب ملف APK",
        screenRecord: "لا ينطبق",
      },
    ],

    faqBadge: "إجابات على أكثر الأسئلة شيوعاً",
    faqTitle: "الأسئلة الشائعة حول تحميل إنستغرام (FAQ)",
    faqSubtitle: "كل ما تحتاج إلى معرفته حول حفظ فيديوهات وريلز وقصص إنستغرام",
    faqs: [
      {
        q: "هل خدمة تحميل فيديوهات إنستغرام مجانية تماماً؟",
        a: "نعم، موقع Saveit.video مجاني بنسبة 100% دون أي رسوم اشتراك، وبدون حدود لعدد مقاطع الفيديو التي يمكنك تحميلها يومياً.",
      },
      {
        q: "أين يتم حفظ الفيديوهات المحملة على الهاتف (آيفون وأندرويد)؟",
        a: "في هواتف أندرويد ستجد الملف مباشرة في مجلد 'التنزيلات (Downloads)' ويظهر في تطبيق الصور/الاستوديو. أما في هواتف iPhone (iOS)، فيتم حفظه في تطبيق 'الملفات (Files)' أو داخل مجلد التنزيلات في سفاري، ويمكنك نقله لألبوم الكاميرا بسهولة.",
      },
      {
        q: "هل يمكنني استخراج الصوت فقط بصيغة MP3 من ريلز إنستغرام؟",
        a: "نعم بالتأكيد! توفر أداتنا خيار 'Audio' مخصص لاستخراج المسار الصوتي النقي بنقرة واحدة، وهو مثالي للاستماع للموسيقى والمؤثرات الصوتية والبودكاست.",
      },
      {
        q: "هل الفيديوهات المحملة تكون بعلامة مائية أو شعار إنستغرام؟",
        a: "كلا، الفيديوهات والريلز التي يتم تنزيلها عبر موقعنا نظيفة تماماً 100% وبدون أي علامة مائية أو شعار لأننا نسحب الملف الأصلي مباشرة.",
      },
      {
        q: "كيف يعمل اختصار شريط العناوين (saveit.video/...)؟",
        a: "كل ما عليك فعله هو إضافة saveit.video/ أمام رابط أي منشور أو ريلز في شريط عنوان المتصفح، وسيتم نقلك مباشرة إلى صفحة التحميل مع استخراج روابط الجودة تلقائياً.",
      },
      {
        q: "هل يحتفظ موقع SaveIt بنسخ من مقاطع الفيديو المحملة أو بياناتي الشخصية؟",
        a: "لا، احتراماً للخصوصية والأمان، نحن لا نخزن أي مقاطع فيديو على خوادمنا ولا نسجل أي معلومات شخصية. جميع الملفات يتم جلبها مباشرة من خوادم إنستغرام العامة.",
      },
    ],
  },

  fr: {
    badge: "Téléchargeur Instagram Officiel & Gratuit",
    heroTitle: "Télécharger les vidéos et Reels",
    heroTitleHighlight: "Instagram en 1080p Full HD",
    heroSubtitle:
      "Enregistrez instantanément vos Reels, Stories, vidéos de feed et extrayez l'audio MP3 sans filigrane, 100% gratuit et sans aucune inscription.",
    shortcutTip: "⚡ Raccourci Pro :",
    shortcutDesc: "Ajoutez saveit.video/ devant n'importe quel lien Instagram pour un téléchargement direct ! (ex : saveit.video/instagram.com/reel/...)",

    introTitle: "Téléchargez facilement du contenu Instagram avec Saveit.video",
    introSubtitle: "La solution en ligne rapide, sécurisée et sans publicité intrusive",
    introText:
      "Vous cherchez un moyen rapide et efficace pour enregistrer vos contenus Instagram préférés ? Découvrez Saveit.video, la plateforme nouvelle génération qui simplifie tous vos téléchargements. Récupérez vos photos, Reels et vidéos en haute définition en un seul clic, directement dans la mémoire de votre appareil.",
    compatTitle: "Compatibilité universelle (Zéro extension)",
    compatDesc:
      "Fonctionne sans aucune extension sur l'ensemble des navigateurs majeurs (Google Chrome, Mozilla Firefox, Opera, Safari, Microsoft Edge) et sur tous les systèmes d'exploitation (Windows, macOS, Linux, Android et iOS).",
    watermarkTitle: "100% Sans Filigrane & Qualité Originale",
    watermarkDesc:
      "Le flux vidéo original est extrait directement des serveurs CDN officiels. Aucun logo, filigrane ou compression artificielle n'est ajouté au fichier téléchargé.",

    capabilitiesTitle: "Tous les types de contenus Instagram pris en charge",
    capabilitiesSubtitle: "Peu importe le format de publication sur Instagram, SaveIt l'extrait instantanément",
    capabilities: {
      reelsTitle: "Reels Instagram (Vidéos verticales)",
      reelsDesc: "Archivage de vos Reels verticaux préférés en résolution 1080p avec audio stéréo synchronisé.",
      storiesTitle: "Stories & Highlights Instagram",
      storiesDesc: "Sauvegardez les Stories éphémères et les Highlights avant leur disparition au bout de 24 heures.",
      audioTitle: "Extracteur Audio MP3 haute fidélité",
      audioDesc: "Téléchargez les musiques tendances, discours et podcasts de Reels sous forme de fichier audio léger.",
      carouselTitle: "Publications multi-médias (Carousels)",
      carouselDesc: "Récupération aisée des albums contenant plusieurs photos et vidéos dans une seule publication.",
    },

    advantagesTitle: "Les atouts exclusifs de Saveit.video",
    advantagesSubtitle: "Découvrez pourquoi des millions d'utilisateurs préfèrent notre service",
    advantages: [
      {
        title: "Connexion ultra-rapide aux CDN",
        desc: "Nos algorithmes se connectent directement aux serveurs CDN pour lancer le téléchargement à vitesse maximale.",
        badge: "Ultra Rapide",
      },
      {
        title: "Astuce unique barre d'adresse",
        desc: "Tapez saveit.video/ juste devant l'URL Instagram dans votre navigateur pour télécharger en 1 seconde.",
        badge: "Exclusif",
      },
      {
        title: "Application Mobile Web (PWA)",
        desc: "Installez l'application sur votre écran d'accueil Android ou iPhone en 1 clic sans passer par l'App Store.",
        badge: "PWA Mobile",
      },
      {
        title: "100% Anonyme & Sans Inscription",
        desc: "Aucune création de compte, aucun mot de passe demandé et aucun suivi de votre historique de téléchargement.",
        badge: "Privé & Sécurisé",
      },
      {
        title: "Téléchargements illimités et gratuits",
        desc: "Aucune limite quotidienne, aucun bridage et aucun abonnement caché.",
        badge: "100% Gratuit",
      },
      {
        title: "Enregistrement direct dans la Galerie",
        desc: "Les vidéos se sauvegardent directement dans votre application Photos pour un partage instantané.",
        badge: "Pratique",
      },
    ],

    pwaTitle: "Téléchargez sur mobile avec l'application Saveit.video",
    pwaSubtitle: "Optimisée pour smartphones et tablettes Android & iPhone",
    pwaText:
      "Grâce à notre technologie d'application web progressive (PWA), installez Saveit.video sur votre smartphone en un clic, sans passer par le Play Store ni l'App Store et sans occuper d'espace de stockage.",
    pwaF1Title: "Téléchargement en un clic",
    pwaF1Desc: "Ouvrez l'icône depuis votre écran d'accueil et collez le lien pour récupérer le fichier instantanément.",
    pwaF2Title: "Visionnage hors-ligne",
    pwaF2Desc: "Profitez de vos vidéos enregistrées partout, en voyage ou sans connexion Internet.",
    pwaF3Title: "Enregistrement dans la Galerie",
    pwaF3Desc: "Les vidéos sont directement enregistrées dans vos Photos ou Fichiers, prêtes à être partagées.",

    guideBadge: "Guide Pratique",
    guideTitle: "Comment télécharger une vidéo Instagram ?",
    guideSubtitle: "Trois étapes très simples pour sauvegarder n'importe quel contenu en 1080p :",
    step1Title: "1. Copiez le lien de la publication",
    step1Desc: "Rendez-vous sur Instagram, repérez la vidéo ou le Reel, cliquez sur l'icône de partage et sélectionnez 'Copier le lien'.",
    step2Title: "2. Collez l'URL sur Saveit.video",
    step2Desc: "Accédez à Saveit.video/instagram, collez l'adresse dans la barre principale et cliquez sur 'Télécharger'.",
    step3Title: "3. Enregistrez le fichier sur votre appareil",
    step3Desc: "Choisissez la résolution souhaitée (1080p MP4 ou Audio MP3) et cliquez pour lancer le téléchargement immédiat.",

    shortcutBoxTitle: "Astuce secrète : Enregistrez directement depuis la barre d'adresse !",
    shortcutBoxSubtitle: "Gagnez du temps sans même ouvrir la page d'accueil",
    shortcutBoxText:
      "Pour télécharger encore plus rapidement sans passer par le formulaire, utilisez notre raccourci exclusif dans la barre d'adresse de votre navigateur :",
    shortcutStep1: "Positionnez-vous sur la publication Instagram de votre choix.",
    shortcutStep2: "Ajoutez simplement saveit.video/ juste devant l'URL dans votre barre d'adresse :",
    shortcutStep3: "Appuyez sur Entrée : les options de téléchargement s'affichent automatiquement dans la meilleure qualité disponible !",

    comparisonTitle: "Pourquoi choisir Saveit.video ?",
    comparisonSubtitle: "Découvrez la différence par rapport aux autres outils et aux enregistrements d'écran",
    thFeature: "Fonctionnalité",
    thSaveIt: "Saveit.video",
    thOthers: "Autres téléchargeurs",
    thScreenRecord: "Enregistrement d'écran",
    compRows: [
      {
        feature: "Qualité vidéo",
        saveit: "1080p Full HD d'origine",
        others: "Souvent compressée en 720p",
        screenRecord: "Qualité dégradée et floue",
      },
      {
        feature: "Sans filigrane",
        saveit: "100% Propre sans logo",
        others: "Certains ajoutent un watermark",
        screenRecord: "Boutons et textes d'interface visibles",
      },
      {
        feature: "Extracteur MP3 dédié",
        saveit: "Inclus en un clic (320kbps)",
        others: "Rarement disponible",
        screenRecord: "Nécessite une extraction manuelle",
      },
      {
        feature: "Publicités agressives",
        saveit: "Zéro pop-up, navigation propre",
        others: "Nombreuses fenêtres pop-up",
        screenRecord: "Non applicable",
      },
      {
        feature: "Application mobile PWA",
        saveit: "Installable en 1 clic (iOS & Android)",
        others: "Extensions lourdes ou fichiers APK",
        screenRecord: "Non applicable",
      },
    ],

    faqBadge: "Questions Fréquentes",
    faqTitle: "Foire Aux Questions (FAQ) Instagram",
    faqSubtitle: "Tout ce que vous devez savoir pour télécharger des Reels, Stories et vidéos Instagram",
    faqs: [
      {
        q: "Saveit.video est-il 100% gratuit pour Instagram ?",
        a: "Oui, notre outil est totalement gratuit avec des téléchargements illimités. Aucune carte bancaire, aucune période d'essai et aucun abonnement requis.",
      },
      {
        q: "Où se trouvent les vidéos téléchargées sur iPhone et Android ?",
        a: "Sur Android, la vidéo arrive directement dans le dossier 'Téléchargements' et dans votre galerie de photos. Sur iPhone, elle est enregistrée dans l'application 'Fichiers' ou dans l'album 'Photos' selon vos réglages Safari.",
      },
      {
        q: "Peut-on télécharger des Reels avec le son et la musique ?",
        a: "Oui ! Tous les Reels sont téléchargés avec la piste audio originale en haute qualité stéréo synchronisée à la perfection.",
      },
      {
        q: "Les vidéos téléchargées comportent-elles un filigrane ?",
        a: "Non. Nous extrayons le fichier source directement depuis les serveurs d'Instagram, sans aucun logo, sans filigrane et sans mention de notre site.",
      },
      {
        q: "Comment fonctionne le raccourci dans la barre d'adresse ?",
        a: "Il vous suffit d'insérer saveit.video/ devant n'importe quel lien Instagram (ex: saveit.video/instagram.com/reel/...) dans la barre de votre navigateur pour ouvrir directement la page de téléchargement.",
      },
      {
        q: "Saveit.video conserve-t-il une copie de mes téléchargements ?",
        a: "Non. Par respect strict de votre vie privée, aucun fichier vidéo n'est stocké sur nos serveurs. Le flux multimédia est transmis directement de manière éphémère.",
      },
    ],
  },

  en: {
    badge: "Official & Free Instagram Video Downloader",
    heroTitle: "Download Instagram Videos & Reels",
    heroTitleHighlight: "in 1080p Full HD",
    heroSubtitle:
      "Save public Instagram Reels, Stories, videos and extract crystal-clear MP3 audio. 100% watermark-free, unlimited, and no registration needed.",
    shortcutTip: "⚡ Pro Shortcut:",
    shortcutDesc: "Add saveit.video/ right before any Instagram link for instant download! (e.g. saveit.video/instagram.com/reel/...)",

    introTitle: "Easily Download Instagram Content with Saveit.video",
    introSubtitle: "The fast, secure, cloud-based downloader without intrusive pop-ups",
    introText:
      "Looking for a fast and reliable way to save your favorite Instagram content? Discover Saveit.video, the next-generation media platform designed to make downloads effortless. Grab photos, Reels, and videos in original high definition (1080p Full HD) in a single click, saved straight to your device.",
    compatTitle: "Universal Compatibility (No extension needed)",
    compatDesc:
      "Works directly inside any modern browser without installing third-party extensions. Fully compatible with Google Chrome, Safari, Mozilla Firefox, Opera, and Microsoft Edge across Windows, macOS, Linux, Android, and iOS.",
    watermarkTitle: "100% Watermark-Free & Original Quality",
    watermarkDesc:
      "The raw MP4 stream is extracted directly from Instagram's official CDN servers. No watermarks, logos, or lossy re-encoding applied.",

    capabilitiesTitle: "Supported Instagram Media Types",
    capabilitiesSubtitle: "Whatever format is published on Instagram, SaveIt extracts it instantly",
    capabilities: {
      reelsTitle: "Instagram Reels (Vertical Videos)",
      reelsDesc: "Download vertical short-form Reels in full 1080p resolution with synchronized high-fidelity stereo audio.",
      storiesTitle: "Instagram Stories & Highlights",
      storiesDesc: "Archive ephemeral 24-hour Stories and permanent profile Highlights before they vanish.",
      audioTitle: "High-Bitrate MP3 Audio Extractor",
      audioDesc: "Extract trending sounds, speeches, and music tracks from Reels as lightweight standalone audio files.",
      carouselTitle: "Multi-post Carousels",
      carouselDesc: "Seamlessly download multi-slide carousel posts containing multiple photos and videos in one package.",
    },

    advantagesTitle: "Exclusive Advantages of Saveit.video",
    advantagesSubtitle: "See why millions choose SaveIt over traditional tools",
    advantages: [
      {
        title: "Ultra-Fast Direct CDN Engine",
        desc: "Our serverless architecture fetches direct streams from edge nodes for blazing-fast download speeds.",
        badge: "Blazing Fast",
      },
      {
        title: "Signature Address Bar Shortcut",
        desc: "Type saveit.video/ right in front of the Instagram link in your browser to download in seconds.",
        badge: "Exclusive",
      },
      {
        title: "Mobile Progressive Web App (PWA)",
        desc: "Install SaveIt onto your home screen on Android or iPhone in 1 click without app store downloads.",
        badge: "Mobile PWA",
      },
      {
        title: "100% Anonymous & Zero Signup",
        desc: "No accounts, no passwords, and zero activity logging. Your downloads remain private.",
        badge: "Private & Safe",
      },
      {
        title: "Unlimited Free Downloads",
        desc: "Download as many videos as you want with no daily limits or hidden fees.",
        badge: "100% Free",
      },
      {
        title: "Direct Gallery / Camera Roll Save",
        desc: "Files save straight into your device's photo library or downloads folder for instant sharing.",
        badge: "Convenient",
      },
    ],

    pwaTitle: "Download on Mobile with the Saveit.video App",
    pwaSubtitle: "Optimized for Android & iPhone smartphones and tablets",
    pwaText:
      "Using modern Progressive Web App (PWA) technology, install Saveit.video on your home screen in 1 click without going through Google Play or Apple App Store.",
    pwaF1Title: "One-Tap Downloads",
    pwaF1Desc: "Launch the app icon from your home screen and paste any link to save files instantly.",
    pwaF2Title: "Offline Video Viewing",
    pwaF2Desc: "Enjoy your saved videos anywhere, even without Wi-Fi or cellular connection.",
    pwaF3Title: "Save Directly to Photos",
    pwaF3Desc: "Media files are automatically saved to your Photos or Files app for quick access.",

    guideBadge: "Quick 3-Step Guide",
    guideTitle: "How to Download an Instagram Video or Reel",
    guideSubtitle: "Three simple steps to save any public video in high-definition 1080p:",
    step1Title: "1. Copy the Video Link",
    step1Desc: "Open Instagram, navigate to the Reel or video, tap the Share icon, and select 'Copy Link'.",
    step2Title: "2. Paste the URL on SaveIt",
    step2Desc: "Visit Saveit.video/instagram, paste the URL into the search bar, and click 'Download'.",
    step3Title: "3. Save to Your Device",
    step3Desc: "Choose your preferred format (1080p MP4 or MP3 Audio) and click to start the instant file save.",

    shortcutBoxTitle: "Pro Trick: Download Directly from the Address Bar!",
    shortcutBoxSubtitle: "Save time without even visiting the homepage first",
    shortcutBoxText:
      "To download even faster without using the search form, use our exclusive address bar shortcut in any browser:",
    shortcutStep1: "Navigate to the desired Instagram video or Reel in your browser.",
    shortcutStep2: "Simply prepend saveit.video/ directly in front of the URL:",
    shortcutStep3: "Press Enter: you'll be redirected straight to the download options in maximum resolution!",

    comparisonTitle: "Why Choose Saveit.video?",
    comparisonSubtitle: "See how SaveIt compares to cluttered download websites and screen recording",
    thFeature: "Feature",
    thSaveIt: "Saveit.video",
    thOthers: "Other Downloaders",
    thScreenRecord: "Screen Recording",
    compRows: [
      {
        feature: "Video Resolution",
        saveit: "1080p Full HD direct source",
        others: "Often compressed to 720p",
        screenRecord: "Degraded, low bitrate",
      },
      {
        feature: "Watermark-free",
        saveit: "100% Clean original file",
        others: "Some inject watermark logos",
        screenRecord: "UI buttons and handles visible",
      },
      {
        feature: "Dedicated MP3 Extractor",
        saveit: "Built-in 1-click audio extractor",
        others: "Rarely available",
        screenRecord: "Requires manual audio trimming",
      },
      {
        feature: "Intrusive Ads & Popups",
        saveit: "Zero spam popups or fake downloads",
        others: "Aggressive redirects and malware ads",
        screenRecord: "Not applicable",
      },
      {
        feature: "Mobile App (PWA)",
        saveit: "1-click install (iOS & Android)",
        others: "Clunky extensions or APK files",
        screenRecord: "Not applicable",
      },
    ],

    faqBadge: "Frequently Asked Questions",
    faqTitle: "Instagram Downloader FAQ",
    faqSubtitle: "Everything you need to know about downloading Instagram Reels, Stories, and videos",
    faqs: [
      {
        q: "Is Saveit.video 100% free to use for Instagram?",
        a: "Yes, our Instagram video downloader is completely free with unlimited downloads. No accounts, credit cards, or trial periods.",
      },
      {
        q: "Where are downloaded Instagram videos saved on iPhone and Android?",
        a: "On Android, videos go straight to your 'Downloads' folder and show up in your Gallery/Photos. On iPhone (iOS), they are saved in the 'Files' app or Safari Downloads, and can be saved to your Camera Roll with one tap.",
      },
      {
        q: "Can I download Instagram Reels with original audio and music?",
        a: "Yes! All Reels are downloaded with their original synchronized stereo audio track at full bitrate.",
      },
      {
        q: "Do downloaded videos have watermarks or logos?",
        a: "No. SaveIt extracts the original raw file from Instagram's CDN servers. No logos, watermarks, or branding are ever added.",
      },
      {
        q: "How does the address bar shortcut work?",
        a: "Simply insert saveit.video/ right before any Instagram link (e.g., saveit.video/instagram.com/reel/...) in your browser address bar to automatically launch the download page.",
      },
      {
        q: "Does SaveIt store my downloaded videos or track my browsing?",
        a: "No. We respect user privacy. We do not store downloaded videos on our servers and we never track or log personal activity.",
      },
    ],
  },
};
