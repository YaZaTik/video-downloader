"use client";

import React, { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Sparkles } from "lucide-react";
import { UrlInput } from "@/components/url-input";
import { VideoResult } from "@/components/video-result";
import { SkeletonLoader } from "@/components/skeleton-loader";
import { ErrorDisplay } from "@/components/error-display";
import { SeoContent } from "@/components/seo-content";
import { useLanguage } from "@/components/language-context";
import type { Language } from "@/lib/translations";
import type { AppState, VideoInfo, ApiErrorResponse, ApiResponse } from "@/types";

interface HomePageProps {
  initialUrl?: string;
  defaultLang?: Language;
}

export default function HomePage({ initialUrl, defaultLang }: HomePageProps) {
  const { t, setLang } = useLanguage();
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

      {/* Dynamic Result Area */}
      <section aria-label="Download Results" className="px-4 pb-8">
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

      {/* SEO-Rich Content (How-To Guide, Feature Matrix, FAQ Accordion) */}
      <SeoContent />
    </div>
  );
}
