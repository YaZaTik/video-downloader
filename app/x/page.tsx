import { Metadata } from "next";
import { TwitterPageClient } from "./twitter-client";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Free X (Twitter) Video Downloader — Tweets, Clips & GIFs (1080p) | SaveIt",
  description:
    "Download X (Twitter) videos, clips and GIFs in Full HD 1080p MP4 or convert to MP3 audio. Fast, free, no watermark — compatible with PC, Android, iPhone. Téléchargeur X Twitter gratuit.",
  keywords: [
    "twitter video downloader",
    "x video downloader",
    "twitter video download",
    "download twitter video",
    "twitter downloader",
    "x downloader",
    "download x video",
    "tweet downloader",
    "ssstwitter",
    "ssstwitter download",
    "twdown",
    "twitsave",
    "savetweetvid",
    "twivideo",
    "twidouga",
    "snapvid",
    "snaptwitter",
    "twitter gif downloader",
    "download video twitter hd",
    "twitter to mp4",
    "twitter to mp3",
    "download twitter video 1080p",
    "save twitter video",
    "save from x",
    "download videos from twitter",
    "twitter media downloader",
    "twitter video saver",
    "twitter post downloader",
    "x video download",
    "download video x",
    "télécharger vidéo twitter",
    "télécharger video twitter",
    "télécharger video x",
    "telecharger video twitter en ligne",
    "convertisseur video twitter mp4",
    "تحميل فيديو من تويتر",
    "تحميل فيديوهات تويتر",
    "تحميل مقاطع تويتر",
    "تنزيل فيديو تويتر",
    "حفظ فيديو من تويتر",
    "تحميل فيديو من x",
    "descargar videos de twitter",
    "descargar video de twitter",
    "descargar video twitter",
    "descargar videos twitter",
    "descargar video de x",
    "descargar videos de x",
    "baixar video do twitter",
    "baixar vídeo twitter",
    "baixar vídeos do twitter",
    "baixar twitter video",
  ],
  alternates: {
    canonical: "https://saveit.video/x",
    languages: {
      "en": "https://saveit.video/x",
      "fr": "https://saveit.video/x",
      "ar": "https://saveit.video/x",
      "x-default": "https://saveit.video/x",
    },
  },
  openGraph: {
    title: "Free X (Twitter) Video Downloader — Tweets, Clips & GIFs (1080p) — SaveIt",
    description:
      "Download X (Twitter) videos, clips and GIFs in 1080p Full HD MP4 or MP3 audio. Free, no watermark, no registration required.",
    url: "https://saveit.video/x",
    siteName: siteConfig.brandName,
    locale: "en_US",
    alternateLocale: ["fr_FR", "ar_AR"],
    type: "website",
    images: [
      {
        url: "https://saveit.video/opengraph-image",
        width: 1200,
        height: 630,
        alt: "SaveIt X Twitter Video Downloader — Free HD Download",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free X (Twitter) Video Downloader — Tweets, Clips & GIFs (1080p) | SaveIt",
    description:
      "Download X (Twitter) videos, clips & GIFs in 1080p HD — free, no watermark.",
    images: ["https://saveit.video/twitter-image"],
  },
};

export default function TwitterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "SaveIt X (Twitter) Video Downloader",
        url: "https://saveit.video/x",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Windows, macOS, Linux, Android, iOS",
        browserRequirements: "Requires HTML5 support",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "2130",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "HowTo",
        name: "Comment télécharger une vidéo de X (Twitter)",
        description: "Guide étape par étape pour télécharger des vidéos et GIFs de tweets en haute définition 1080p sans filigrane.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Copiez le lien",
            text: "Ouvrez X (Twitter), repérez le tweet contenant la vidéo, cliquez sur l'icône Partager et sélectionnez 'Copier le lien'.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Collez l'URL",
            text: "Collez le lien dans la barre de saisie sur saveit.video/x et cliquez sur Télécharger.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Téléchargez en HD",
            text: "Choisissez la résolution souhaitée (1080p MP4 ou Audio MP3) et enregistrez le fichier sur votre appareil.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Saveit.video est-il gratuit pour télécharger des vidéos X (Twitter) ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oui, le service est 100% gratuit, sans inscription, sans limite quotidienne et sans carte bancaire.",
            },
          },
          {
            "@type": "Question",
            name: "Les vidéos Twitter sont-elles téléchargées sans filigrane ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolument. Nous extrayons directement le flux vidéo d'origine en qualité 1080p Full HD sans aucun filigrane ni logo ajouté.",
            },
          },
          {
            "@type": "Question",
            name: "Comment fonctionne le raccourci dans la barre d'adresse pour X ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ajoutez simplement 'saveit.video/' devant l'URL du tweet dans votre navigateur (exemple: saveit.video/x.com/username/status/123456789) pour lancer le téléchargement direct.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TwitterPageClient />
    </>
  );
}
