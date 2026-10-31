"use client";

import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Sparkles, Smartphone } from "lucide-react";

interface VideoDemoCardProps {
  lang?: "en" | "fr" | "ar";
  className?: string;
}

export function VideoDemoCard({ lang = "fr", className = "" }: VideoDemoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const texts = {
    fr: {
      badge: "Démonstration Vidéo (10s)",
      title: "Regardez comment télécharger en 10 secondes",
      subtitle: "Découvrez en vidéo la simplicité et la rapidité pour enregistrer vos Reels et vidéos préférés sans filigrane.",
      play: "Lire la vidéo",
      pause: "Pause",
      unmute: "Activer le son",
      mute: "Couper le son",
      tip: "Astuce : Vidéo haute définition 1080p adaptée pour mobile et ordinateur.",
    },
    en: {
      badge: "Quick Video Demo (10s)",
      title: "Watch How It Works in 10 Seconds",
      subtitle: "See how fast and effortless it is to save your favorite Reels and videos in full 1080p without watermarks.",
      play: "Play video",
      pause: "Pause",
      unmute: "Unmute audio",
      mute: "Mute audio",
      tip: "Tip: High-definition 1080p video demonstration for mobile and desktop.",
    },
    ar: {
      badge: "عرض توضيحي بالفيديو (10 ثوانٍ)",
      title: "شاهد كيف يتم التحميل خلال 10 ثوانٍ",
      subtitle: "شاهد عملياً مدى سهولة وسرعة حفظ الفيديوهات وريلز إنستغرام بجودة أصلية وبدون علامة مائية.",
      play: "تشغيل الفيديو",
      pause: "إيقاف مؤقت",
      unmute: "تشغيل الصوت",
      mute: "كتم الصوت",
      tip: "ملاحظة: فيديو توضيحي عالي الدقة متوافق مع كافة الهواتف وأجهزة الكمبيوتر.",
    },
  };

  const t = texts[lang] || texts.fr;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      className={`rounded-3xl border border-zinc-800/80 bg-gradient-to-br from-zinc-900/70 via-zinc-950 to-zinc-900/60 p-6 sm:p-8 shadow-2xl relative overflow-hidden ${className}`}
    >
      {/* Decorative gradient glow */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-pink-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Explanatory Copy */}
        <div className="lg:col-span-7 space-y-4 text-center lg:text-left rtl:lg:text-right">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-xs font-semibold text-pink-400">
            <Sparkles size={13} />
            {t.badge}
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug">
            {t.title}
          </h3>

          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
            {t.subtitle}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-zinc-400">
            <button
              onClick={togglePlay}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-semibold px-4 py-2.5 shadow-lg shadow-pink-600/20 transition active:scale-95"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} className="fill-current" />}
              <span>{isPlaying ? t.pause : t.play}</span>
            </button>

            <button
              onClick={toggleMute}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 font-medium px-3.5 py-2.5 transition active:scale-95"
              title={isMuted ? t.unmute : t.mute}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              <span>{isMuted ? t.unmute : t.mute}</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-zinc-500 justify-center lg:justify-start pt-2">
            <Smartphone size={14} className="text-pink-400 shrink-0" />
            <span>{t.tip}</span>
          </div>
        </div>

        {/* Right Column: Smartphone Mockup Frame */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[260px] sm:max-w-[280px] rounded-[2.5rem] p-2 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 shadow-2xl shadow-purple-950/40 ring-1 ring-white/10">
            {/* Speaker & notch detail */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 h-1 w-12 rounded-full bg-zinc-600/80 z-20" />

            <div className="relative overflow-hidden rounded-[2.1rem] bg-black aspect-[9/16]">
              <video
                ref={videoRef}
                src="/videos/saveit-promo.mp4"
                playsInline
                loop
                muted={isMuted}
                controls
                preload="metadata"
                className="h-full w-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Play Overlay if paused */}
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  aria-label={t.play}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 backdrop-blur-[2px] transition group"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-xl shadow-pink-600/40 group-hover:scale-110 transition-transform">
                    <Play size={24} className="fill-current ml-1" />
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
