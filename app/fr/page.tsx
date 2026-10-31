import { Metadata } from "next";
import HomePage from "@/app/page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Téléchargeur Vidéo X & Instagram (1080p MP4 & MP3)",
  description:
    "Téléchargez gratuitement vos vidéos et Reels de X (Twitter) et Instagram en 1080p Full HD, 720p ou MP3 haute qualité. Sans filigrane, direct et rapide.",
  keywords: [
    "télécharger vidéo twitter",
    "télécharger video twitter",
    "télécharger vidéo instagram",
    "télécharger video instagram",
    "télécharger reel instagram",
    "télécharger story instagram",
    "télécharger video x",
    "telecharger video instagram en ligne",
    "télécharger photo instagram",
    "convertisseur twitter mp4",
    "telecharger video gratuit sans filigrane",
    "saveit video",
    "snapinsta fr",
    "ssstwitter fr",
  ],
  alternates: {
    canonical: "/fr",
    languages: {
      en: "https://saveit.video/",
      fr: "https://saveit.video/fr",
      ar: "https://saveit.video/ar",
    },
  },
  openGraph: {
    title: "Téléchargeur Vidéo X & Instagram (1080p MP4 & MP3) — SaveIt",
    description:
      "Téléchargez gratuitement vos vidéos et Reels de X (Twitter) et Instagram en 1080p Full HD et MP3.",
    url: "https://saveit.video/fr",
    siteName: siteConfig.brandName,
    locale: "fr_FR",
    type: "website",
  },
};

export default function FrenchPage() {
  return <HomePage defaultLang="fr" />;
}
