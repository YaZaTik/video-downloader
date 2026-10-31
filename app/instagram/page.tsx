import { Metadata } from "next";
import { InstagramPageClient } from "./instagram-client";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Téléchargeur Instagram gratuit — Reels, Vidéos & Stories (1080p) | SaveIt",
  description:
    "Téléchargez gratuitement vos Reels, vidéos et Stories Instagram en haute définition 1080p Full HD et MP3 sans filigrane avec Saveit.video. Compatible PC, Android et iPhone.",
  alternates: {
    canonical: "/instagram",
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
  return <InstagramPageClient />;
}
