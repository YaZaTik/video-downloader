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
  X,
  ShieldCheck,
  Music,
  Film,
  Camera,
  FolderDown,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import { UrlInput } from "@/components/url-input";
import { VideoResult } from "@/components/video-result";
import { SkeletonLoader } from "@/components/skeleton-loader";
import { ErrorDisplay } from "@/components/error-display";
import { PwaInstallButton } from "@/components/pwa-install";
import { VideoDemoCard } from "@/components/video-demo-card";
import { useLanguage } from "@/components/language-context";
import { instagramTranslations } from "@/lib/instagram-translations";
import type { AppState, VideoInfo, ApiErrorResponse, ApiResponse } from "@/types";

export function InstagramPageClient() {
  const { lang } = useLanguage();
  const t = instagramTranslations[lang] || instagramTranslations.en;
  const isRtl = lang === "ar";

  const [appState, setAppState] = useState<AppState>("idle");
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);
  const [error, setError] = useState<ApiErrorResponse | null>(null);
  const [lastUrl, setLastUrl] = useState<string>("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

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
        error: isRtl
          ? "حدث خطأ في الاتصال. يرجى التحقق من اتصالك بالإنترنت والمحاولة مجدداً."
          : "Network error. Please check your connection and try again.",
        code: "SERVER_ERROR",
      });
      setAppState("error");
    }
  }, [isRtl]);

  return (
    <div className={`flex-1 ${isRtl ? "text-right" : "text-left"}`} dir={isRtl ? "rtl" : "ltr"}>
      {/* ─── Hero Section ───────────────────────────────────────────── */}
      <section className="relative px-4 pb-6 pt-12 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-3.5 py-1 text-xs font-semibold text-pink-400"
          >
            <Sparkles size={13} />
            <span>{t.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
          >
            {t.heroTitle}{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              {t.heroTitleHighlight}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3.5 text-sm leading-relaxed text-zinc-400 sm:text-base max-w-2xl mx-auto"
          >
            {t.heroSubtitle}
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
            <span className="font-semibold text-zinc-400">{t.shortcutTip}</span>{" "}
            {t.shortcutDesc}
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

      {/* ─── Rich Editorial Content (Adapted from Spec) ─────────────── */}
      <div className="mx-auto max-w-4xl px-4 py-12 space-y-16">
        {/* Editorial Section 1: Intro */}
        <section className="rounded-3xl border border-zinc-800/80 bg-gradient-to-br from-zinc-900/60 via-zinc-900/30 to-zinc-950/60 p-8 sm:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 border border-pink-500/20 text-pink-400 shadow-md shrink-0">
              <Layers size={24} />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {t.introTitle}
              </h2>
              <p className="text-xs text-zinc-400">{t.introSubtitle}</p>
            </div>
          </div>

          <p className="text-sm text-zinc-300 leading-relaxed">
            {t.introText}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 space-y-2">
              <div className="flex items-center gap-2 text-pink-400 font-semibold text-sm">
                <Globe size={16} />
                <span>{t.compatTitle}</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {t.compatDesc}
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                <ShieldCheck size={16} />
                <span>{t.watermarkTitle}</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {t.watermarkDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities Section: Supported Instagram Media Types */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-400">
              <Film size={13} />
              {t.capabilitiesTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.capabilitiesTitle}
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto">
              {t.capabilitiesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5 space-y-2.5 hover:border-pink-500/40 transition">
              <div className="flex items-center gap-2 text-pink-400 font-bold text-sm">
                <Film size={18} />
                <span>{t.capabilities.reelsTitle}</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {t.capabilities.reelsDesc}
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5 space-y-2.5 hover:border-purple-500/40 transition">
              <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                <Camera size={18} />
                <span>{t.capabilities.storiesTitle}</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {t.capabilities.storiesDesc}
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5 space-y-2.5 hover:border-blue-500/40 transition">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                <Music size={18} />
                <span>{t.capabilities.audioTitle}</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {t.capabilities.audioDesc}
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5 space-y-2.5 hover:border-amber-500/40 transition">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Layers size={18} />
                <span>{t.capabilities.carouselTitle}</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {t.capabilities.carouselDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Website Exclusive Advantages */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
              <Sparkles size={13} />
              Saveit.video
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.advantagesTitle}
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto">
              {t.advantagesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.advantages.map((adv, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-5 space-y-2.5 hover:border-zinc-700 transition"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold text-blue-400 border border-blue-500/20">
                    {adv.badge}
                  </span>
                  <CheckCircle2 size={16} className="text-blue-400" />
                </div>
                <h3 className="font-semibold text-white text-sm">{adv.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial Section 2: Mobile App (PWA) */}
        <section className="rounded-3xl border border-blue-900/30 bg-gradient-to-br from-blue-950/20 via-zinc-900/40 to-zinc-950/60 p-8 sm:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shadow-md shrink-0">
                <Smartphone size={24} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {t.pwaTitle}
                </h2>
                <p className="text-xs text-blue-300">{t.pwaSubtitle}</p>
              </div>
            </div>

            <div>
              <PwaInstallButton className="!px-4 !py-2 !text-xs !bg-blue-600 hover:!bg-blue-500 !text-white !border-transparent shadow-lg shadow-blue-600/20" />
            </div>
          </div>

          <p className="text-sm text-zinc-300 leading-relaxed">
            {t.pwaText}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2 text-xs text-zinc-300">
            <div className="flex items-start gap-2.5 rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-4">
              <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">{t.pwaF1Title}</strong>
                <span>{t.pwaF1Desc}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-4">
              <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">{t.pwaF2Title}</strong>
                <span>{t.pwaF2Desc}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-4">
              <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">{t.pwaF3Title}</strong>
                <span>{t.pwaF3Desc}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Section 3: 3-Step Guide */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-xs font-semibold text-pink-400">
              <Sparkles size={13} />
              {t.guideBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.guideTitle}
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto">
              {t.guideSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-600/20 text-pink-400 font-bold text-sm border border-pink-500/30">
                1
              </div>
              <div className="flex items-center gap-2">
                <Copy size={16} className="text-pink-400" />
                <h3 className="font-semibold text-white text-base">{t.step1Title}</h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {t.step1Desc}
              </p>
            </div>

            <div className="relative rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600/20 text-purple-400 font-bold text-sm border border-purple-500/30">
                2
              </div>
              <div className="flex items-center gap-2">
                <MousePointerClick size={16} className="text-purple-400" />
                <h3 className="font-semibold text-white text-base">{t.step2Title}</h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {t.step2Desc}
              </p>
            </div>

            <div className="relative rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 font-bold text-sm border border-blue-500/30">
                3
              </div>
              <div className="flex items-center gap-2">
                <DownloadCloud size={16} className="text-blue-400" />
                <h3 className="font-semibold text-white text-base">{t.step3Title}</h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {t.step3Desc}
              </p>
            </div>
          </div>

          {/* Interactive Video Demonstration */}
          <VideoDemoCard lang={lang} className="mt-8" />
        </section>

        {/* Editorial Section 4: Address Bar Shortcut */}
        <section className="rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-zinc-900/50 to-zinc-950/80 p-8 sm:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shadow-md shrink-0">
              <Zap size={24} />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {t.shortcutBoxTitle}
              </h2>
              <p className="text-xs text-amber-300">{t.shortcutBoxSubtitle}</p>
            </div>
          </div>

          <p className="text-sm text-zinc-300 leading-relaxed">
            {t.shortcutBoxText}
          </p>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5 space-y-3 text-xs">
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-amber-400 font-bold">1.</span>
              <span>{t.shortcutStep1}</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-amber-400 font-bold">2.</span>
              <span>{t.shortcutStep2}</span>
            </div>
            <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-3 font-mono text-pink-300 overflow-x-auto text-left" dir="ltr">
              https://saveit.video/<span className="text-white">instagram.com/p/Bsyq4yVH8Mh/</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-amber-400 font-bold">3.</span>
              <span>{t.shortcutStep3}</span>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-semibold text-zinc-300">
              <Layers size={13} />
              {t.comparisonTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.comparisonTitle}
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto">
              {t.comparisonSubtitle}
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/30">
            <table className="w-full text-left text-xs text-zinc-300">
              <thead className="border-b border-zinc-800 bg-zinc-900/80 text-zinc-400 font-semibold">
                <tr>
                  <th className="p-4">{t.thFeature}</th>
                  <th className="p-4 text-pink-400 font-bold">{t.thSaveIt}</th>
                  <th className="p-4">{t.thOthers}</th>
                  <th className="p-4">{t.thScreenRecord}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                {t.compRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-800/30 transition">
                    <td className="p-4 font-semibold text-white">{row.feature}</td>
                    <td className="p-4 text-emerald-400 font-semibold flex items-center gap-1.5">
                      <Check size={14} className="shrink-0" />
                      <span>{row.saveit}</span>
                    </td>
                    <td className="p-4 text-zinc-400">{row.others}</td>
                    <td className="p-4 text-zinc-500">{row.screenRecord}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Interactive FAQ Section */}
        <section id="faq" className="space-y-6 scroll-mt-20">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
              <HelpCircle size={13} />
              {t.faqBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.faqTitle}
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto">
              {t.faqSubtitle}
            </p>
          </div>

          <div className="space-y-3">
            {t.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 overflow-hidden transition"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-semibold text-white hover:text-pink-300 transition"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-zinc-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-pink-400" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-5 pb-5 text-xs text-zinc-400 leading-relaxed border-t border-zinc-800/40 pt-3"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
