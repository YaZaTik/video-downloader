import { Language } from "./translations";

export interface FaqItem {
  q: string;
  a: string;
}

export interface SeoTranslations {
  filterAll: string;
  filterTwitter: string;
  filterInstagram: string;

  howItWorksBadge: string;
  howItWorksTitle: string;
  howItWorksSubtitle: string;

  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;

  twitterPillarTitle: string;
  twitterPillarSubtitle: string;
  twitterPillarF1Title: string;
  twitterPillarF1Desc: string;
  twitterPillarF2Title: string;
  twitterPillarF2Desc: string;

  instagramPillarTitle: string;
  instagramPillarSubtitle: string;
  instagramPillarF1Title: string;
  instagramPillarF1Desc: string;
  instagramPillarF2Title: string;
  instagramPillarF2Desc: string;

  table1Title: string;
  table1Subtitle: string;
  thResolution: string;
  thContainer: string;
  thBestFor: string;
  thFileSize: string;
  row1Best: string;
  row2Best: string;
  row3Best: string;
  row4Best: string;

  table2Title: string;
  table2Subtitle: string;
  thFeatures: string;
  thOurTool: string;
  thExtensions: string;
  thScreenRecord: string;

  rowFeat1: string;
  rowFeat1Val1: string;
  rowFeat1Val2: string;
  rowFeat1Val3: string;

  rowFeat2: string;
  rowFeat2Val1: string;
  rowFeat2Val2: string;
  rowFeat2Val3: string;

  rowFeat3: string;
  rowFeat3Val1: string;
  rowFeat3Val2: string;
  rowFeat3Val3: string;

  rowFeat4: string;
  rowFeat4Val1: string;
  rowFeat4Val2: string;
  rowFeat4Val3: string;

  rowFeat5: string;
  rowFeat5Val1: string;
  rowFeat5Val2: string;
  rowFeat5Val3: string;

  faqBadge: string;
  faqTitle: string;
  faqSubtitle: string;
  faqs: FaqItem[];

  footerAboutTitle: string;
  footerAboutDesc: string;
  footerPlatformsTitle: string;
  footerLegalTitle: string;
  footerLegalDesc: string;
  footerRights: string;
}

export const seoTranslations: Record<Language, SeoTranslations> = {
  en: {
    filterAll: "All Platforms",
    filterTwitter: "X (Twitter)",
    filterInstagram: "Instagram Reels",

    howItWorksBadge: "Quick 3-Step Process",
    howItWorksTitle: "How to Download Videos from X and Instagram",
    howItWorksSubtitle:
      "Save any public video or Reel in high resolution directly to your computer or smartphone.",

    step1Title: "Copy Video Link",
    step1Desc:
      "Open the video post on X (Twitter) or Instagram, click or tap the Share icon, and select Copy Link.",
    step2Title: "Paste & Analyze",
    step2Desc:
      "Paste the link in the search bar above. Our engine instantly analyzes and fetches all available resolutions.",
    step3Title: "Download Instantly",
    step3Desc:
      "Choose your preferred format (1080p, 720p, or Audio MP3) and click Download for an immediate file save.",

    twitterPillarTitle: "X (Twitter) Video Downloader",
    twitterPillarSubtitle: "Fast MP4 download for tweets, video clips, and GIFs",
    twitterPillarF1Title: "Download High-Definition Tweets",
    twitterPillarF1Desc:
      "X (Twitter) is the global town square for breaking news, podcasts, viral memes, and sports highlights. Our tool parses the raw progressive MP4 streams embedded in tweets so you can archive videos in full 1080p without quality degradation.",
    twitterPillarF2Title: "Convert Twitter Videos to MP3",
    twitterPillarF2Desc:
      "Need just the speech, interview, or commentary track? Use the audio selector to download a lightweight M4A / MP3 file, ideal for listening on headphones while driving or working offline.",

    instagramPillarTitle: "Instagram Reels & Video Saver",
    instagramPillarSubtitle: "Preserve vertical Reels, Feed Videos, and IGTV clips in original quality",
    instagramPillarF1Title: "Watermark-Free Instagram Saves",
    instagramPillarF1Desc:
      "Unlike recording your phone screen, our tool extracts the pristine direct source video file. Your downloaded Reels remain crystal clear without screen icons, UI buttons, or compression artifacts.",
    instagramPillarF2Title: "Full Audio Sync Preservation",
    instagramPillarF2Desc:
      "Trending Instagram audio, original background voiceovers, and music tracks are preserved in full stereo fidelity inside the MP4 container.",

    table1Title: "Available Video Formats & Resolutions",
    table1Subtitle: "Choose the right resolution for your screen size and storage bandwidth.",
    thResolution: "Resolution",
    thContainer: "Container",
    thBestFor: "Best For",
    thFileSize: "File Size",
    row1Best: "Desktop monitors, 4K TVs, video editors",
    row2Best: "Tablets, laptops, general archiving",
    row3Best: "Mobile phones, saving cellular data",
    row4Best: "Podcasts, speeches, background music",

    table2Title: "Why Use Our Web Downloader?",
    table2Subtitle: "See how our solution compares to browser extensions and screen recording apps.",
    thFeatures: "Features",
    thOurTool: "Our Online Tool",
    thExtensions: "Browser Extensions",
    thScreenRecord: "Screen Recording",

    rowFeat1: "Software Installation",
    rowFeat1Val1: "Zero install",
    rowFeat1Val2: "Requires extension",
    rowFeat1Val3: "Requires software",

    rowFeat2: "Full 1080p Quality",
    rowFeat2Val1: "Original direct stream",
    rowFeat2Val2: "Sometimes capped",
    rowFeat2Val3: "Degraded bitrate",

    rowFeat3: "No Watermarks",
    rowFeat3Val1: "100% Clean",
    rowFeat3Val2: "Clean",
    rowFeat3Val3: "UI buttons visible",

    rowFeat4: "Audio Extractor (MP3)",
    rowFeat4Val1: "Built-in",
    rowFeat4Val2: "Rarely available",
    rowFeat4Val3: "Manual split needed",

    rowFeat5: "Mobile Device Support",
    rowFeat5Val1: "iOS & Android",
    rowFeat5Val2: "Desktop only",
    rowFeat5Val3: "Clunky on mobile",

    faqBadge: "Answers to Common Inquiries",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Everything you need to know about downloading videos from X (Twitter) and Instagram.",
    faqs: [
      {
        q: "How do I download high quality 1080p videos from X (formerly Twitter)?",
        a: "Open X (Twitter), navigate to the post containing the video, click the Share icon, and select 'Copy link'. Then paste that link into the input field at the top of this page, hit Download, select '1080p' from the available qualities list, and the video file will save directly to your device without quality loss.",
      },
      {
        q: "Can I download Instagram Reels and video posts with sound?",
        a: "Yes! Our tool extracts the full video stream with synced high-fidelity audio for public Instagram Reels, feed video posts, and IGTV videos. Simply paste any standard Instagram URL to fetch all available formats.",
      },
      {
        q: "Is this video downloader completely free and safe?",
        a: "Yes. Our video downloader is 100% free with unlimited downloads. You do not need to register an account, enter credit card details, or install third-party browser extensions. We never store copies of your downloaded files on our servers.",
      },
      {
        q: "Can I extract audio only (MP3 / M4A) from videos?",
        a: "Yes! Whenever an audio stream is available from the source, our downloader gives you an 'Audio' option so you can download background music, speeches, or podcasts without the video track.",
      },
      {
        q: "Does this work on mobile phones (iPhone & Android)?",
        a: "Yes, our web application is fully responsive and optimized for mobile devices. On iPhones and iPads, use Safari or Chrome to download directly to your 'Files' app or Camera Roll. On Android, it works seamlessly with Chrome, Samsung Internet, and Firefox.",
      },
      {
        q: "Can I download videos from private accounts?",
        a: "No. Out of respect for user privacy and platform security protocols, we cannot extract media from private accounts or age-restricted content that requires a personal login.",
      },
    ],

    footerAboutTitle: "About SaveIt",
    footerAboutDesc:
      "SaveIt.video is a fast, modern online tool for downloading public videos from X (Twitter) and Instagram. Extracts high-resolution MP4 video and crystal-clear audio with zero registration.",
    footerPlatformsTitle: "Supported Platforms",
    footerLegalTitle: "Legal & Privacy",
    footerLegalDesc:
      "This service is for personal and educational use only. We do not host copyrighted files on our servers. All media files are directly downloaded from public CDN endpoints.",
    footerRights: "All rights reserved.",
  },
  fr: {
    filterAll: "Toutes les plateformes",
    filterTwitter: "X (Twitter)",
    filterInstagram: "Instagram Reels",

    howItWorksBadge: "Processus simple en 3 étapes",
    howItWorksTitle: "Comment télécharger des vidéos de X et Instagram",
    howItWorksSubtitle:
      "Enregistrez n'importe quelle vidéo ou Reel public en haute définition directement sur votre ordinateur ou smartphone.",

    step1Title: "Copier le lien de la vidéo",
    step1Desc:
      "Ouvrez la vidéo sur X (Twitter) ou Instagram, cliquez sur le bouton Partager et choisissez Copier le lien.",
    step2Title: "Coller & Analyser",
    step2Desc:
      "Collez le lien dans la barre de recherche ci-dessus. Notre moteur analyse immédiatement toutes les résolutions disponibles.",
    step3Title: "Télécharger instantanément",
    step3Desc:
      "Choisissez votre format (1080p, 720p ou Audio MP3) et cliquez sur Télécharger pour sauvegarder le fichier sur votre appareil.",

    twitterPillarTitle: "Téléchargeur Vidéo X (Twitter)",
    twitterPillarSubtitle: "Téléchargement MP4 rapide pour tweets, vidéos et GIFs",
    twitterPillarF1Title: "Téléchargez des tweets en Full HD 1080p",
    twitterPillarF1Desc:
      "X (Twitter) est la plateforme numéro 1 pour les actualités, podcasts et vidéos virales. Notre outil extrait le flux MP4 original des tweets pour archiver vos vidéos en 1080p sans perte de qualité.",
    twitterPillarF2Title: "Convertir des vidéos Twitter en MP3",
    twitterPillarF2Desc:
      "Besoin uniquement du son, d'une interview ou d'un discours ? Utilisez l'option Audio pour télécharger un fichier MP3/M4A léger, parfait pour écouter hors ligne avec vos écouteurs.",

    instagramPillarTitle: "Téléchargeur Reels & Vidéos Instagram",
    instagramPillarSubtitle: "Conservez vos Reels verticaux, vidéos de feed et IGTV dans leur qualité d'origine",
    instagramPillarF1Title: "Téléchargement Instagram sans filigrane",
    instagramPillarF1Desc:
      "Contrairement à une capture d'écran vidéo, notre outil extrait directement le fichier vidéo source. Vos Reels téléchargés restent parfaitement nets sans boutons d'interface ni perte de qualité.",
    instagramPillarF2Title: "Son et musique 100% synchronisés",
    instagramPillarF2Desc:
      "Les musiques tendances Instagram et les voix d'origine sont parfaitement conservées en haute fidélité stéréo dans le fichier MP4.",

    table1Title: "Formats & Résolutions disponibles",
    table1Subtitle: "Choisissez la résolution adaptée à votre écran et à votre espace de stockage.",
    thResolution: "Résolution",
    thContainer: "Format",
    thBestFor: "Idéal pour",
    thFileSize: "Taille moyenne",
    row1Best: "Écrans d'ordinateur, TV 4K, montage vidéo",
    row2Best: "Tablettes, ordinateurs portables, archivage",
    row3Best: "Smartphones, économie de données mobiles",
    row4Best: "Podcasts, musique, interviews audio",

    table2Title: "Pourquoi choisir SaveIt ?",
    table2Subtitle: "Découvrez la différence par rapport aux extensions de navigateur et enregistrements d'écran.",
    thFeatures: "Fonctionnalités",
    thOurTool: "SaveIt.video",
    thExtensions: "Extensions navigateur",
    thScreenRecord: "Enregistrement d'écran",

    rowFeat1: "Installation de logiciel",
    rowFeat1Val1: "Zéro installation",
    rowFeat1Val2: "Extension requise",
    rowFeat1Val3: "Application requise",

    rowFeat2: "Qualité 1080p Full HD",
    rowFeat2Val1: "Fichier source direct",
    rowFeat2Val2: "Parfois limité",
    rowFeat2Val3: "Qualité dégradée",

    rowFeat3: "Sans filigrane",
    rowFeat3Val1: "100% Propre",
    rowFeat3Val2: "Propre",
    rowFeat3Val3: "Boutons d'écran visibles",

    rowFeat4: "Extracteur Audio (MP3)",
    rowFeat4Val1: "Intégré d'office",
    rowFeat4Val2: "Rarement disponible",
    rowFeat4Val3: "Découpage manuel requis",

    rowFeat5: "Compatibilité Mobile",
    rowFeat5Val1: "iOS & Android",
    rowFeat5Val2: "Ordinateur uniquement",
    rowFeat5Val3: "Difficile sur mobile",

    faqBadge: "Réponses aux questions fréquentes",
    faqTitle: "Foire Aux Questions (FAQ)",
    faqSubtitle: "Tout ce que vous devez savoir pour télécharger des vidéos X (Twitter) et Instagram.",
    faqs: [
      {
        q: "Comment télécharger une vidéo en 1080p depuis X (Twitter) ?",
        a: "Ouvrez X (Twitter), allez sur la vidéo, cliquez sur l'icône Partager et sélectionnez 'Copier le lien'. Collez ensuite ce lien dans le champ en haut de notre page, cliquez sur Télécharger, puis choisissez '1080p' pour enregistrer directement le fichier sur votre appareil sans perte de qualité.",
      },
      {
        q: "Peut-on télécharger des Reels Instagram avec le son ?",
        a: "Oui ! Notre outil extrait la vidéo complète avec l'audio original synchronisé pour les Reels publics et vidéos Instagram. Collez simplement le lien pour obtenir toutes les qualités disponibles.",
      },
      {
        q: "Le service est-il gratuit et sans danger ?",
        a: "Oui, notre outil est 100% gratuit avec des téléchargements illimités. Aucune inscription, aucune carte bancaire et aucune installation requise. Nous ne stockons aucun de vos fichiers sur nos serveurs.",
      },
      {
        q: "Puis-je extraire uniquement la musique ou l'audio (MP3) ?",
        a: "Oui ! Lorsqu'une piste audio est disponible, notre téléchargeur vous propose l'option 'Audio' pour écouter vos podcasts ou musiques sans avoir à télécharger toute la vidéo.",
      },
      {
        q: "Fonctionne-t-il sur téléphone (iPhone et Android) ?",
        a: "Parfaitement ! Sur iPhone et iPad, utilisez Safari ou Chrome pour enregistrer la vidéo dans vos Fichiers ou Photos. Sur Android, cela fonctionne directement dans Chrome et Samsung Internet.",
      },
      {
        q: "Peut-on télécharger des vidéos de comptes privés ?",
        a: "Non. Par respect pour la vie privée des utilisateurs et les règles de sécurité, seules les vidéos publiques peuvent être téléchargées.",
      },
    ],

    footerAboutTitle: "À propos de SaveIt",
    footerAboutDesc:
      "SaveIt.video est un outil moderne et rapide pour télécharger des vidéos publiques depuis X (Twitter) et Instagram en Full HD MP4 et MP3 sans inscription.",
    footerPlatformsTitle: "Plateformes supportées",
    footerLegalTitle: "Mentions Légales & Confidentialité",
    footerLegalDesc:
      "Ce service est réservé à un usage personnel et éducatif. Aucun fichier n'est hébergé sur nos serveurs. Tous les téléchargements proviennent directement des CDN publics des plateformes.",
    footerRights: "Tous droits réservés.",
  },
  ar: {
    filterAll: "جميع المنصات",
    filterTwitter: "تويتر (X)",
    filterInstagram: "إنستغرام ريلز",

    howItWorksBadge: "طريقة سهلة في 3 خطوات",
    howItWorksTitle: "كيفية تحميل الفيديوهات من تويتر وإنستغرام",
    howItWorksSubtitle:
      "احفظ أي فيديو أو ريلز عام بجودة عالية 1080p Full HD مباشرة على هاتفك الذكي أو جهاز الحاسوب.",

    step1Title: "1. نسخ رابط الفيديو",
    step1Desc:
      "افتح الفيديو في منصة X (تويتر) أو إنستغرام، اضغط على زر المشاركة ثم اختر 'نسخ الرابط'.",
    step2Title: "2. لصق الرابط وتحليله",
    step2Desc:
      "ألصق الرابط في مربع البحث أعلاه وسيقوم محركنا بتحليل الرابط وجلب جميع الدقات المتاحة فوراً.",
    step3Title: "3. تحميل فوري",
    step3Desc:
      "اختر الجودة المطلوبة (1080p أو 720p أو صوت MP3) واضغط على تحميل لحفظ الملف مباشرة على جهازك.",

    twitterPillarTitle: "برنامج تحميل فيديوهات تويتر (X)",
    twitterPillarSubtitle: "تحميل سريع بصيغة MP4 للتغريدات ومقاطع الفيديو والـ GIFs",
    twitterPillarF1Title: "تحميل تغريدات بجودة عالية 1080p Full HD",
    twitterPillarF1Desc:
      "تعتبر منصة X (تويتر) المصدر الأول للأخبار العاجلة والبودكاست والمقاطع الفيروسية. تتيح لك أداتنا استخراج ملف MP4 المباشر بدقته الكاملة 1080p بدون أي ضغط أو تقليل في الجودة.",
    twitterPillarF2Title: "تحويل فيديو تويتر إلى صوت MP3",
    twitterPillarF2Desc:
      "هل تحتاج فقط إلى الصوت أو المقابلة أو الخطاب؟ استخدم خيار 'الصوت فقط' لتحميل ملف MP3 خفيف ونقي ومثالي للاستماع أثناء القيادة أو بدون إنترنت.",

    instagramPillarTitle: "تحميل ريلز وفيديوهات إنستغرام",
    instagramPillarSubtitle: "احفظ مقاطع ريلز وفيديوهات الخلاصة والـ IGTV بجودتها الأصلية الكاملة",
    instagramPillarF1Title: "تحميل ريلز بدون أي علامات مائية",
    instagramPillarF1Desc:
      "بدلاً من تصوير شاشة الهاتف، تستخرج أداتنا ملف الفيديو الأصلي النظيف. ستحصل على فيديو ريلز بدون أي أزرار أو أسماء مستخدمين مشوهة.",
    instagramPillarF2Title: "صوت أصلي متزامن فائق النقاء",
    instagramPillarF2Desc:
      "يتم حفظ الموسيقى والأصوات الشائعة بتزامن استريو كامل واحترافي بنسبة 100% داخل ملف MP4.",

    table1Title: "صيغ ودقات الفيديو المتاحة للتحميل",
    table1Subtitle: "اختر الدقة المناسبة لحجم شاشتك وسرعة اتصالك بالإنترنت.",
    thResolution: "الدقة",
    thContainer: "الصيغة",
    thBestFor: "الاستخدام الأفضل",
    thFileSize: "الحجم التقريبي",
    row1Best: "شاشات الحاسوب، تلفزيونات 4K، المونتاج الاحترافي",
    row2Best: "الأجهزة اللوحية، الحواسيب المحمولة، الحفظ العام",
    row3Best: "الهواتف الذكية وتوفير باقة الإنترنت",
    row4Best: "البودكاست، المقابلات الصوتية، الموسيقى",

    table2Title: "لماذا تختار SaveIt؟",
    table2Subtitle: "شاهد الفرق بين أداتنا المباشرة وإضافات المتصفح وتصوير الشاشة التقليدي.",
    thFeatures: "الميزة",
    thOurTool: "موقع SaveIt.video",
    thExtensions: "إضافات المتصفح",
    thScreenRecord: "تصوير الشاشة",

    rowFeat1: "تثبيت البرامج",
    rowFeat1Val1: "بدون أي تثبيت",
    rowFeat1Val2: "تتطلب إضافة",
    rowFeat1Val3: "تتطلب برنامج",

    rowFeat2: "جودة 1080p كاملة",
    rowFeat2Val1: "الملف الأصلي المباشر",
    rowFeat2Val2: "محدودة أحياناً",
    rowFeat2Val3: "جودة رديئة ومضغوطة",

    rowFeat3: "بدون علامة مائية",
    rowFeat3Val1: "نظيف 100%",
    rowFeat3Val2: "نظيف",
    rowFeat3Val3: "أزرار الشاشة ظاهرة",

    rowFeat4: "استخراج صوت MP3",
    rowFeat4Val1: "مدمج ومجاني",
    rowFeat4Val2: "نادراً ما يتوفر",
    rowFeat4Val3: "يتطلب برامج فصل",

    rowFeat5: "دعم الهواتف المحمولة",
    rowFeat5Val1: "آيفون وأندرويد بالكامل",
    rowFeat5Val2: "حاسوب فقط",
    rowFeat5Val3: "معقد وصعب على الهاتف",

    faqBadge: "إجابات على الأسئلة الأكثر شيوعاً",
    faqTitle: "الأسئلة الشائعة (FAQ)",
    faqSubtitle: "كل ما تحتاج لمعرفته حول تحميل الفيديوهات من تويتر (X) وإنستغرام.",
    faqs: [
      {
        q: "كيف يمكنني تحميل فيديو بدقة 1080p عالية من تويتر (X)؟",
        a: "افتح تويتر، توجه إلى التغريدة التي تحتوي على الفيديو، اضغط على زر المشاركة واختر 'نسخ الرابط'. ثم ألصق الرابط في المربع أعلى الصفحة، واضغط على 'تحميل'، ثم اختر دقة 1080p ليتم حفظ الفيديو مباشرة على جهازك دون أي فقدان في الجودة.",
      },
      {
        q: "هل يمكنني تحميل مقاطع ريلز من إنستغرام مع الصوت؟",
        a: "نعم بالتأكيد! تستخرج أداتنا الفيديو كاملاً مع الصوت المتزامن عالي الدقة لجميع مقاطع ريلز والمنشورات العامة في إنستغرام. ما عليك سوى لصق الرابط واختيار الجودة المطلوبة.",
      },
      {
        q: "هل هذا الموقع مجاني وآمن تماماً للاستخدام؟",
        a: "نعم، موقعنا مجاني 100% وبدون أي حدود لعدد التحميلات. لا نطلب منك إنشاء حساب أو إدخال بطاقة بنكية أو تثبيت أي إضافات خارجية. كما أننا لا نخزن أي مقاطع فيديو على خوادمنا.",
      },
      {
        q: "هل يمكنني استخراج الصوت فقط (MP3 / M4A) من مقاطع الفيديو؟",
        a: "نعم! توفر لك الأداة خيار 'الصوت فقط' بحيث يمكنك تحميل الأغاني أو البودكاست أو المقابلات بصيغة صوتية نقية دون الحاجة لتنزيل الفيديو كاملاً.",
      },
      {
        q: "هل يعمل الموقع على الهواتف الذكية (آيفون وأندرويد)؟",
        a: "نعم، يعمل الموقع بشكل مثالي وسلس على جميع الهواتف. في آيفون وآيباد، استخدم متصفح سفاري أو كروم وسيتم حفظ الفيديو في تطبيق الملفات أو ألبوم الكاميرا. وفي أندرويد يعمل مباشرة عبر كروم وسامسونج.",
      },
      {
        q: "هل يمكن تحميل الفيديوهات من الحسابات الخاصة (Private)؟",
        a: "لا، احتراماً لخصوصية المستخدمين وسياسات المنصات، يمكن فقط تحميل الفيديوهات العامة والمفتوحة للجميع على تويتر وإنستغرام.",
      },
    ],

    footerAboutTitle: "عن موقع SaveIt",
    footerAboutDesc:
      "SaveIt.video هي أداة حديثة وفائقة السرعة لتحميل مقاطع الفيديو العامة من تويتر (X) وإنستغرام بجودة Full HD MP4 واستخراج الصوت بصيغة MP3 بدون تسجيل.",
    footerPlatformsTitle: "المنصات المدعومة",
    footerLegalTitle: "الشروط القانونية والخصوصية",
    footerLegalDesc:
      "هذه الخدمة مخصصة للاستخدام الشخصي والتعليمي فقط. نحن لا نستضيف أي ملفات محمية بحقوق النشر على خوادمنا. جميع الوسائط يتم تنزيلها مباشرة من خوادم المنصات الرسمية.",
    footerRights: "جميع الحقوق محفوظة.",
  },
};
