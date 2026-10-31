import { Metadata } from "next";
import HomePage from "@/app/page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "تحميل فيديو تويتر وإنستغرام (1080p MP4 و MP3) — SaveIt",
  description:
    "برنامج مجاني لتحميل مقاطع الفيديو وريلز من تويتر (X) وإنستغرام بدقة عالية 1080p Full HD واستخراج صوت MP3 بدون برامج وبدون علامة مائية.",
  keywords: [
    "تحميل فيديو من تويتر",
    "تحميل فيديوهات انستقرام",
    "تحميل ريلز انستقرام",
    "تنزيل فيديو تويتر",
    "تحميل مقاطع تويتر",
    "حفظ فيديو انستقرام",
    "تنزيل ستوري انستقرام",
    "برنامج تحميل فيديو مجاني",
    "تحميل فيديو بدون علامة مائية",
    "تحميل فيديو تويتر 1080p",
    "تنزيل فيديو",
    "حفظ فيديو",
    "saveit video",
  ],
  alternates: {
    canonical: "/ar",
    languages: {
      en: "https://saveit.video/",
      fr: "https://saveit.video/fr",
      ar: "https://saveit.video/ar",
    },
  },
  openGraph: {
    title: "تحميل فيديو تويتر وإنستغرام (1080p MP4 و MP3) — SaveIt",
    description:
      "برنامج مجاني لتحميل مقاطع الفيديو وريلز من تويتر وإنستغرام بدقة 1080p Full HD وبصيغة MP3 مجاناً.",
    url: "https://saveit.video/ar",
    siteName: siteConfig.brandName,
    locale: "ar_AR",
    type: "website",
  },
};

export default function ArabicPage() {
  return <HomePage defaultLang="ar" />;
}
