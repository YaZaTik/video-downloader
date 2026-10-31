"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Layers,
  Smartphone,
  Globe,
  Zap,
  CheckCircle2,
  Copy,
  MousePointerClick,
  DownloadCloud,
  Check,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { UrlInput } from "@/components/url-input";
import { VideoResult } from "@/components/video-result";
import { SkeletonLoader } from "@/components/skeleton-loader";
import { ErrorDisplay } from "@/components/error-display";
import { PwaInstallButton } from "@/components/pwa-install";
import type { AppState, VideoInfo, ApiErrorResponse, ApiResponse } from "@/types";

export function InstagramPageClient() {
  const [appState, setAppState] = useState<AppState>("idle");
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);
  const [error, setError] = useState<ApiErrorResponse | null>(null);
  const [lastUrl, setLastUrl] = useState<string>("");

  const handleSubmit = useCallback(async (url: string) => {
    setLastUrl(url);
    setAppState("loading");
    setVideoInfo(null);
    setError(null);

    try {
      const res = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data: ApiResponse = await res.json();

      if (data.success) {
        setVideoInfo(data.data);
        setAppState("success");
      } else {
        setError(data);
        setAppState("error");
      }
    } catch {
      setError({
        success: false,
        error: "Erreur de connexion. Veuillez vérifier votre réseau et réessayer.",
        code: "SERVER_ERROR",
      });
      setAppState("error");
    }
  }, []);

  return (
    <div className="flex-1">
      {/* ─── Hero Section ───────────────────────────────────────────── */}
      <section className="relative px-4 pb-6 pt-12 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-3.5 py-1 text-xs font-semibold text-pink-400"
          >
            <Sparkles size={13} />
            <span>Téléchargeur Instagram Officiel</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
          >
            Télécharger les vidéos et Reels <span className="gradient-text">Instagram en 1080p</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3.5 text-sm leading-relaxed text-zinc-400 sm:text-base max-w-2xl mx-auto"
          >
            Enregistrez instantanément vos Reels, vidéos et Stories préférés en haute résolution MP4 ou extrayez l'audio MP3. Sans filigrane, 100% gratuit et sans inscription.
          </motion.p>
        </div>
      </section>

      {/* ─── Input Bar ──────────────────────────────────────────────── */}
      <section aria-label="Input URL Instagram" className="px-4">
        <div className="mx-auto max-w-2xl">
          <UrlInput
            onSubmit={handleSubmit}
            isLoading={appState === "loading"}
            initialValue={lastUrl}
          />
        </div>
      </section>

      {/* ─── Shortcut Banner ────────────────────────────────────────── */}
      <section className="px-4 pt-3">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] text-zinc-500">
            <span className="font-semibold text-zinc-400">⚡ Astuce Pro :</span> Ajoutez{" "}
            <code className="rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-pink-400">saveit.video/</code>{" "}
            juste devant n'importe quel lien Instagram ! (ex :{" "}
            <span className="text-zinc-400">saveit.video/instagram.com/reel/...</span>)
          </p>
        </div>
      </section>

      {/* ─── Results Area ───────────────────────────────────────────── */}
      <section aria-label="Résultats" className="px-4 pb-8">
        <AnimatePresence mode="wait">
          {appState === "loading" && <SkeletonLoader key="skeleton" />}
          {appState === "success" && videoInfo && <VideoResult key="result" video={videoInfo} />}
          {appState === "error" && error && (
            <ErrorDisplay key="error" error={error} onRetry={() => lastUrl && handleSubmit(lastUrl)} />
          )}
        </AnimatePresence>
      </section>

      {/* ─── Rich Editorial Content (Adapted from User Spec) ───────── */}
      <div className="mx-auto max-w-4xl px-4 py-12 space-y-16">
        {/* Editorial Section 1: Intro */}
        <section className="rounded-3xl border border-zinc-800/80 bg-gradient-to-br from-zinc-900/60 via-zinc-900/30 to-zinc-950/60 p-8 sm:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 border border-pink-500/20 text-pink-400 shadow-md">
              <Layers size={24} />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Téléchargez facilement du contenu Instagram avec Saveit.video
              </h2>
              <p className="text-xs text-zinc-400">La solution rapide et sécurisée pour archiver vos médias</p>
            </div>
          </div>

          <p className="text-sm text-zinc-300 leading-relaxed">
            Vous cherchez un moyen rapide et efficace pour enregistrer vos contenus Instagram préférés ? Découvrez <strong>Saveit.video</strong>, la plateforme nouvelle génération qui simplifie tous vos téléchargements. Récupérez vos photos, Reels et vidéos en haute définition en un seul clic, directement dans la mémoire de votre appareil.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 space-y-2">
              <div className="flex items-center gap-2 text-pink-400 font-semibold text-sm">
                <Globe size={16} />
                <span>Compatibilité universelle</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Fonctionne sans aucune extension sur l'ensemble des navigateurs majeurs (<strong>Google Chrome, Mozilla Firefox, Opera, Safari, Microsoft Edge</strong>) et sur tous les systèmes d'exploitation (<strong>Windows, macOS, Linux, Android et iOS</strong>).
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                <ShieldCheck size={16} />
                <span>100% Sans Filigrane &amp; Sans Limite</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Le flux vidéo original est conservé dans son conteneur MP4 d'origine. Aucun logo, filigrane ou compression artificielle n'est ajouté au fichier téléchargé.
              </p>
            </div>
          </div>
        </section>

        {/* Editorial Section 2: Mobile App (PWA) */}
        <section className="rounded-3xl border border-blue-900/30 bg-gradient-to-br from-blue-950/20 via-zinc-900/40 to-zinc-950/60 p-8 sm:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shadow-md">
                <Smartphone size={24} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Téléchargez sur mobile avec l'application Saveit.video
                </h2>
                <p className="text-xs text-blue-300">Optimisée pour smartphones et tablettes Android &amp; iPhone</p>
              </div>
            </div>

            <div>
              <PwaInstallButton className="!px-4 !py-2 !text-xs !bg-blue-600 hover:!bg-blue-500 !text-white !border-transparent shadow-lg shadow-blue-600/20" />
            </div>
          </div>

          <p className="text-sm text-zinc-300 leading-relaxed">
            Grâce à notre technologie d'application web progressive (PWA), installez <strong>Saveit.video</strong> sur votre smartphone en un clic, sans passer par le Play Store ni l'App Store.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2 text-xs text-zinc-300">
            <div className="flex items-start gap-2.5 rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-4">
              <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">Téléchargement en un clic</strong>
                <span>Récupérez instantanément vos publications et vidéos Instagram Reels.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-4">
              <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">Visionnage hors-ligne</strong>
                <span>Profitez de vos vidéos enregistrées partout, même sans connexion Internet.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-4">
              <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">Enregistrement dans la Galerie</strong>
                <span>Les vidéos sont directement enregistrées dans vos Photos ou Fichiers.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Section 3: 3-Step Guide */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-xs font-semibold text-pink-400">
              <Sparkles size={13} />
              Guide Pratique
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Comment télécharger une vidéo Instagram ?
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto">
              Grâce à Saveit.video, enregistrer des photos, Reels ou Stories ne prend que quelques secondes :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-600/20 text-pink-400 font-bold text-sm border border-pink-500/30">
                1
              </div>
              <div className="flex items-center gap-2">
                <Copy size={16} className="text-pink-400" />
                <h3 className="font-semibold text-white text-base">Étape 1 : Copiez le lien</h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Rendez-vous sur Instagram et repérez le Reel ou la vidéo souhaitée. Cliquez sur les options de partage et sélectionnez <strong>« Copier le lien »</strong>.
              </p>
            </div>

            <div className="relative rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600/20 text-purple-400 font-bold text-sm border border-purple-500/30">
                2
              </div>
              <div className="flex items-center gap-2">
                <MousePointerClick size={16} className="text-purple-400" />
                <h3 className="font-semibold text-white text-base">Étape 2 : Collez l'URL</h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Accédez à <strong>Saveit.video</strong>, collez l'adresse URL dans la barre principale, puis cliquez sur le bouton <strong>Télécharger</strong>.
              </p>
            </div>

            <div className="relative rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 font-bold text-sm border border-blue-500/30">
                3
              </div>
              <div className="flex items-center gap-2">
                <DownloadCloud size={16} className="text-blue-400" />
                <h3 className="font-semibold text-white text-base">Étape 3 : Enregistrez le fichier</h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Le service détecte automatiquement la meilleure qualité. Choisissez votre résolution (1080p, 720p ou MP3) et cliquez pour lancer le téléchargement immédiat.
              </p>
            </div>
          </div>
        </section>

        {/* Editorial Section 4: Address Bar Shortcut */}
        <section className="rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-zinc-900/50 to-zinc-950/80 p-8 sm:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shadow-md">
              <Zap size={24} />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Astuce secrète : Enregistrez directement depuis la barre d'adresse
              </h2>
              <p className="text-xs text-amber-300">Gagnez du temps sans même ouvrir la page d'accueil</p>
            </div>
          </div>

          <p className="text-sm text-zinc-300 leading-relaxed">
            Pour télécharger encore plus rapidement sans passer par le formulaire, utilisez notre raccourci exclusif dans la barre d'adresse de votre navigateur :
          </p>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5 space-y-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-amber-400 font-bold">1.</span>
              <span>Positionnez-vous sur la publication Instagram de votre choix.</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-amber-400 font-bold">2.</span>
              <span>Ajoutez simplement <strong className="text-pink-400">saveit.video/</strong> juste devant l'URL :</span>
            </div>
            <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-3 text-pink-300 overflow-x-auto">
              https://saveit.video/<span className="text-white">instagram.com/p/Bsyq4yVH8Mh/</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-amber-400 font-bold">3.</span>
              <span>Appuyez sur <strong>Entrée</strong> : les options de téléchargement s'affichent automatiquement !</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
