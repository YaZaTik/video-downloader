import { Metadata } from "next";
import { InstagramPageClient } from "./instagram-client";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Téléchargeur Instagram gratuit — Reels, Vidéos & Stories (1080p) | SaveIt",
  description:
    "Téléchargez gratuitement vos Reels, vidéos et Stories Instagram en haute définition 1080p Full HD et MP3 sans filigrane avec Saveit.video. Compatible PC, Android et iPhone.",
  keywords: [
    "instagram video downloader",
    "instagram reels downloader",
    "telecharger video instagram",
    "telecharger reel instagram",
    "تحميل ريلز انستقرام",
    "تحميل فيديو من الانستقرام",
    "save instagram video",
    "instagram story downloader",
    "instagram mp3 audio",
    "instagram to mp4 1080p",
    "instagram downloader no watermark",
  ],
  alternates: {
    canonical: "/instagram",
    languages: {
      en: "https://saveit.video/instagram",
      fr: "https://saveit.video/instagram",
      ar: "https://saveit.video/instagram",
    },
  },
  openGraph: {
    title: "Téléchargeur Instagram gratuit — Reels & Vidéos (1080p) — SaveIt",
    description:
      "Enregistrez facilement vos vidéos, Reels et Stories Instagram en haute résolution sans filigrane et sans inscription.",
    url: "https://saveit.video/instagram",
    siteName: siteConfig.brandName,
    locale: "fr_FR",
    type: "website",
  },
};

export default function InstagramPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "SaveIt Instagram Video Downloader",
        url: "https://saveit.video/instagram",
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
          ratingCount: "1840",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "HowTo",
        name: "Comment télécharger une vidéo ou Reel Instagram",
        description: "Guide étape par étape pour télécharger des vidéos et Reels Instagram en haute définition 1080p sans filigrane.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Copiez le lien",
            text: "Ouvrez Instagram, repérez la publication ou le Reel, cliquez sur l'icône de partage et sélectionnez 'Copier le lien'.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Collez l'URL",
            text: "Collez le lien dans la barre de saisie sur saveit.video/instagram et cliquez sur Télécharger.",
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
            name: "Saveit.video est-il gratuit pour télécharger sur Instagram ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oui, le service est 100% gratuit, sans inscription, sans limite quotidienne et sans carte bancaire.",
            },
          },
          {
            "@type": "Question",
            name: "Les vidéos Instagram sont-elles téléchargées sans filigrane ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolument. Nous extrayons directement le flux vidéo d'origine en qualité 1080p sans aucun filigrane ni logo ajouté.",
            },
          },
          {
            "@type": "Question",
            name: "Comment fonctionne le raccourci dans la barre d'adresse ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ajoutez simplement 'saveit.video/' devant l'URL Instagram dans votre navigateur (exemple: saveit.video/instagram.com/p/Bsyq4yVH8Mh/) pour lancer le téléchargement direct.",
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
      <InstagramPageClient />
    </>
  );
}
