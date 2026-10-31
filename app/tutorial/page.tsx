import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { VideoDemoCard } from "@/components/video-demo-card";
import { ArrowLeft, Sparkles, CheckCircle2, Zap, Shield, Play } from "lucide-react";

export const metadata: Metadata = {
  title: "Guide & Démonstration Vidéo — Comment Télécharger sur SaveIt (1080p)",
  description:
    "Regardez notre tutoriel vidéo de 10 secondes et apprenez à télécharger facilement vos vidéos et Reels préférés de X (Twitter) et Instagram en 1080p Full HD sans filigrane.",
  alternates: {
    canonical: "/tutorial",
  },
  openGraph: {
    title: "Guide & Démonstration Vidéo SaveIt (1080p)",
    description:
      "Tutoriel vidéo rapide : apprenez à enregistrer vos vidéos et Reels en haute définition sans filigrane.",
    url: "https://saveit.video/tutorial",
    siteName: siteConfig.brandName,
    locale: "fr_FR",
    type: "video.other",
    videos: [
      {
        url: "https://saveit.video/videos/saveit-promo.mp4",
        width: 720,
        height: 1280,
        type: "video/mp4",
      },
    ],
  },
};

export default function TutorialPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "SaveIt.video — Tutoriel & Démonstration de Téléchargement",
    description:
      "Démonstration vidéo montrant comment télécharger gratuitement des vidéos et Reels Instagram ou X (Twitter) en Full HD 1080p.",
    thumbnailUrl: ["https://saveit.video/og-image.png"],
    uploadDate: "2026-10-31T18:00:00+00:00",
    duration: "PT10S",
    contentUrl: "https://saveit.video/videos/saveit-promo.mp4",
    embedUrl: "https://saveit.video/tutorial",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-zinc-950 text-zinc-100 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Header Back Link */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span>Retour à l&apos;accueil</span>
            </Link>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-400">
              <Sparkles size={13} />
              Tutoriel Vidéo Officiel
            </span>
          </div>

          {/* Title Hero */}
          <div className="text-center space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Guide Vidéo :{" "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Télécharger en 10 Secondes
              </span>
            </h1>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Découvrez la marche à suivre pas à pas pour récupérer vos vidéos et Reels en qualité originale 1080p Full HD sans filigrane et sans installer de logiciel.
            </p>
          </div>

          {/* Interactive Video Demo Showcase */}
          <VideoDemoCard lang="fr" />

          {/* 3 Step Breakdown */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-600/20 text-pink-400 font-bold text-sm border border-pink-500/30">
                1
              </div>
              <h2 className="font-semibold text-white text-base">Copiez le lien</h2>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Sur Instagram ou X (Twitter), appuyez sur le bouton Partager sous la vidéo ou le Reel, puis sélectionnez &quot;Copier le lien&quot;.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600/20 text-purple-400 font-bold text-sm border border-purple-500/30">
                2
              </div>
              <h2 className="font-semibold text-white text-base">Collez dans SaveIt</h2>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Collez l&apos;URL dans la barre de recherche Saveit.video ou utilisez le raccourci magique dans votre barre d&apos;adresse.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 font-bold text-sm border border-blue-500/30">
                3
              </div>
              <h2 className="font-semibold text-white text-base">Téléchargez en 1080p</h2>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Choisissez la résolution MP4 1080p ou l&apos;audio MP3, puis cliquez sur Télécharger. Le fichier est instantanément enregistré sur votre appareil.
              </p>
            </div>
          </section>

          {/* Quick Action Hub */}
          <section className="rounded-3xl border border-zinc-800 bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-zinc-950 p-8 text-center space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Prêt à commencer votre premier téléchargement ?
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/instagram"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-semibold px-5 py-3 text-sm shadow-lg shadow-pink-600/25 transition active:scale-95"
              >
                <span>📸 Télécharger sur Instagram</span>
              </Link>
              <Link
                href="/x"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold px-5 py-3 text-sm transition active:scale-95"
              >
                <span>𝕏 Télécharger sur X (Twitter)</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
