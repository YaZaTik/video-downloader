"use client";

import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Sparkles } from "lucide-react";
import { UrlInput } from "@/components/url-input";
import { VideoResult } from "@/components/video-result";
import { SkeletonLoader } from "@/components/skeleton-loader";
import { ErrorDisplay } from "@/components/error-display";
import { SeoContent } from "@/components/seo-content";
import { AdBanner } from "@/components/ad-banner";
import { useLanguage } from "@/components/language-context";
import type { Language } from "@/lib/translations";
import type { AppState, VideoInfo, ApiErrorResponse, ApiResponse } from "@/types";

interface HomePageProps {
  initialUrl?: string;
  defaultLang?: Language;
}

export default function HomePage({ initialUrl, defaultLang }: HomePageProps) {
  const { t, lang, setLang } = useLanguage();
  const [appState, setAppState] = useState<AppState>("idle");
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);
  const [error, setError] = useState<ApiErrorResponse | null>(null);
  const [lastUrl, setLastUrl] = useState<string>(initialUrl || "");

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
    } catch (err: any) {
      setError({
        success: false,
        error: "Network error. Please check your connection and try again.",
        code: "SERVER_ERROR",
      });
      setAppState("error");
    }
  }, []);

  // Set default language if passed from route (/fr, /ar)
  useEffect(() => {
    if (defaultLang) {
      setLang(defaultLang);
    }
  }, [defaultLang, setLang]);

  // Auto-fetch if initialUrl prop or ?url= query parameter is passed
  useEffect(() => {
    let target = initialUrl;
    if (!target && typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const queryUrl = params.get("url");
      if (queryUrl) target = queryUrl;
    }
    if (target) {
      setLastUrl(target);
      handleSubmit(target);
    }
  }, [initialUrl, handleSubmit]);

  const handleRetry = useCallback(() => {
    if (lastUrl) {
      handleSubmit(lastUrl);
    } else {
      setAppState("idle");
      setError(null);
    }
  }, [lastUrl, handleSubmit]);

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative px-4 pb-6 pt-12 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-400"
          >
            <Sparkles size={13} />
            <span>{t.badge}</span>
          </motion.div>

          {/* Title (H1 for Main SEO Target) */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
          >
            <span className="gradient-text">
              {t.title} {t.titleHighlight}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-3.5 text-sm leading-relaxed text-zinc-400 sm:text-base max-w-2xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Input Section */}
      <section aria-label="Video URL Input" className="px-4">
        <div className="mx-auto max-w-2xl">
          <UrlInput
            onSubmit={handleSubmit}
            isLoading={appState === "loading"}
            initialValue={lastUrl || initialUrl || ""}
          />
        </div>
      </section>

      {/* Quick Prefix Shortcut Tip */}
      <section className="px-4 pt-3">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] text-zinc-500">
            <span className="font-semibold text-zinc-400">{t.shortcutTip}</span> Put{" "}
            <code className="rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-blue-400">
              {t.shortcutCode}
            </code>{" "}
            {t.shortcutExample}
          </p>
        </div>
      </section>

      {/* ─── Dedicated Platform Hub Cards ───────────────────────────── */}
      <section className="px-4 pt-5 pb-1">
        <div className="mx-auto max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* X (Twitter) Card */}
          <Link
            href="/x"
            className="group flex items-center justify-between rounded-2xl border border-zinc-800/80 bg-gradient-to-r from-zinc-900/90 via-zinc-900/60 to-zinc-950 p-4 hover:border-blue-500/50 hover:bg-zinc-800/50 transition shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-800 border border-zinc-700 text-white group-hover:scale-105 group-hover:border-blue-500/40 transition shrink-0">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition">
                  {lang === "ar" ? "تحميل فيديوهات تويتر (X)" : lang === "fr" ? "Téléchargeur X (Twitter)" : "X (Twitter) Downloader"}
                </h3>
                <p className="text-[11px] text-zinc-400">
                  {lang === "ar" ? "دقة 1080p MP4 وصوت MP3" : lang === "fr" ? "1080p Full HD MP4 & Audio" : "1080p MP4 & MP3 Audio"}
                </p>
              </div>
            </div>
            <span className="text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition text-sm">
              →
            </span>
          </Link>

          {/* Instagram Card */}
          <Link
            href="/instagram"
            className="group flex items-center justify-between rounded-2xl border border-zinc-800/80 bg-gradient-to-r from-zinc-900/90 via-zinc-900/60 to-zinc-950 p-4 hover:border-pink-500/50 hover:bg-zinc-800/50 transition shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 border border-pink-500/30 text-pink-400 group-hover:scale-105 group-hover:border-pink-500/50 transition shrink-0">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white group-hover:text-pink-400 transition">
                  {lang === "ar" ? "تحميل ريلز إنستغرام" : lang === "fr" ? "Téléchargeur Instagram Reels" : "Instagram Downloader"}
                </h3>
                <p className="text-[11px] text-zinc-400">
                  {lang === "ar" ? "ريلز، قصص وصوت MP3" : lang === "fr" ? "Reels, Stories & Audio" : "Reels, Stories & Audio"}
                </p>
              </div>
            </div>
            <span className="text-zinc-500 group-hover:text-pink-400 group-hover:translate-x-0.5 transition text-sm">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* Dynamic Result Area */}
      <section aria-label="Download Results" className="px-4 pb-4">
        <AnimatePresence mode="wait">
          {appState === "loading" && <SkeletonLoader key="skeleton" />}

          {appState === "success" && videoInfo && (
            <VideoResult key="result" video={videoInfo} />
          )}

          {appState === "error" && error && (
            <ErrorDisplay key="error" error={error} onRetry={handleRetry} />
          )}
        </AnimatePresence>
      </section>

      {/* Primary Ad Placement */}
      <section aria-label="Advertisement" className="px-4">
        <AdBanner slot="3732966991" className="my-6 max-w-3xl" />
      </section>

      {/* SEO-Rich Content (How-To Guide, Feature Matrix, FAQ Accordion) */}
      <SeoContent />
    </div>
  );
}
