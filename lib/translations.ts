export type Language = "en" | "fr" | "ar";

export interface Translations {
  dir: "ltr" | "rtl";
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  inputPlaceholder: string;
  pasteBtn: string;
  downloadBtn: string;
  analyzingBtn: string;
  shortcutTip: string;
  shortcutCode: string;
  shortcutExample: string;
  howItWorks: string;
  faq: string;
  freeBadge: string;
  installApp: string;
  installAppIos: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    dir: "ltr",
    badge: "X (Twitter) & Instagram Video Downloader",
    title: "Download X & Instagram",
    titleHighlight: "Videos in 1080p",
    subtitle:
      "Save public videos and Reels in crisp 1080p Full HD, 720p, or extract high-quality MP3 audio. Fast, free, and directly saved to your device.",
    inputPlaceholder: "Paste any X (Twitter) or Instagram video link...",
    pasteBtn: "Paste",
    downloadBtn: "Download",
    analyzingBtn: "Analyzing...",
    shortcutTip: "⚡ Pro Shortcut:",
    shortcutCode: "saveit.video/",
    shortcutExample: "before any link to download instantly! (e.g. saveit.video/x.com/...)",
    howItWorks: "How It Works",
    faq: "FAQ",
    freeBadge: "100% Free",
    installApp: "Install App",
    installAppIos: "Tap Share ➔ 'Add to Home Screen' to install SaveIt",
    step1Title: "Copy Video Link",
    step1Desc: "Open the video on X (Twitter) or Instagram, tap Share, and select Copy Link.",
    step2Title: "Paste & Analyze",
    step2Desc: "Paste the URL above. Our engine instantly extracts all available resolutions.",
    step3Title: "Download Instantly",
    step3Desc: "Pick 1080p, 720p, or MP3 audio and save the file directly to your device.",
  },
  fr: {
    dir: "ltr",
    badge: "Téléchargeur Vidéo X (Twitter) & Instagram",
    title: "Télécharger les vidéos X & Instagram",
    titleHighlight: "en 1080p Full HD",
    subtitle:
      "Enregistrez des vidéos et Reels publics en 1080p Full HD, 720p ou extrayez l'audio MP3 haute qualité. Rapide, gratuit et directement enregistré sur votre appareil.",
    inputPlaceholder: "Collez le lien d'une vidéo X (Twitter) ou Instagram...",
    pasteBtn: "Coller",
    downloadBtn: "Télécharger",
    analyzingBtn: "Analyse...",
    shortcutTip: "⚡ Astuce Pro :",
    shortcutCode: "saveit.video/",
    shortcutExample: "devant n'importe quel lien pour télécharger immédiatement ! (ex : saveit.video/x.com/...)",
    howItWorks: "Comment ça marche",
    faq: "FAQ",
    freeBadge: "100% Gratuit",
    installApp: "Installer l'app",
    installAppIos: "Appuyez sur Partager ➔ 'Sur l'écran d'accueil' pour installer SaveIt",
    step1Title: "Copier le lien",
    step1Desc: "Ouvrez la vidéo sur X ou Instagram, cliquez sur Partager et Copier le lien.",
    step2Title: "Coller et Analyser",
    step2Desc: "Collez l'URL ci-dessus. Notre moteur extrait instantanément les qualités disponibles.",
    step3Title: "Télécharger",
    step3Desc: "Choisissez 1080p, 720p ou MP3 et téléchargez le fichier directement sur votre appareil.",
  },
  ar: {
    dir: "rtl",
    badge: "برنامج تحميل فيديوهات تويتر وإنستغرام",
    title: "تحميل فيديوهات تويتر وإنستغرام",
    titleHighlight: "بدقة 1080p عالية",
    subtitle:
      "احفظ الفيديوهات وريلز بجودة 1080p Full HD أو 720p واستخرج صوت MP3 عالي النقاء. فائق السرعة، مجاني بالكامل وبدون علامات مائية.",
    inputPlaceholder: "ألصق رابط فيديو من تويتر (X) أو إنستغرام هنا...",
    pasteBtn: "لصق",
    downloadBtn: "تحميل",
    analyzingBtn: "جاري التحليل...",
    shortcutTip: "⚡ طريقة سريعة:",
    shortcutCode: "saveit.video/",
    shortcutExample: "قبل أي رابط لتحميل الفيديو فوراً! (مثال: saveit.video/x.com/...)",
    howItWorks: "طريقة الاستخدام",
    faq: "الأسئلة الشائعة",
    freeBadge: "مجاني 100%",
    installApp: "تثبيت التطبيق",
    installAppIos: "اضغط على زر المشاركة ➔ 'إضافة إلى الصفحة الرئيسية' لتثبيت SaveIt",
    step1Title: "نسخ رابط الفيديو",
    step1Desc: "افتح الفيديو في تويتر أو إنستغرام، اضغط على مشاركة واختر 'نسخ الرابط'.",
    step2Title: "لصق الرابط وتحليله",
    step2Desc: "ألصق الرابط في المربع أعلاه ليتم جلب جميع الجودات المتوفرة فوراً.",
    step3Title: "تحميل فوري",
    step3Desc: "اختر دقة 1080p أو 720p أو MP3 وسيتم حفظ الملف مباشرة على جهازك.",
  },
};
