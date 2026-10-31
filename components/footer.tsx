"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "./language-context";
import { seoTranslations } from "@/lib/seo-translations";

export function Footer() {
  const { lang } = useLanguage();
  const s = seoTranslations[lang] || seoTranslations.en;

  return (
    <footer className="mt-auto border-t border-zinc-800/60 bg-zinc-950/60 py-10">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-xs">
          <div>
            <h3 className="font-semibold text-zinc-200 uppercase tracking-wider text-[11px] mb-2.5">
              {s.footerAboutTitle}
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              {s.footerAboutDesc}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-200 uppercase tracking-wider text-[11px] mb-2.5">
              {s.footerPlatformsTitle}
            </h3>
            <ul className="space-y-1.5 text-zinc-400">
              <li>
                • <a href="#twitter-downloader" className="hover:text-white">{s.twitterPillarTitle}</a>
              </li>
              <li>
                • <Link href="/instagram" className="text-pink-400 hover:text-pink-300 font-medium transition">{s.instagramPillarTitle} (1080p / Reels)</Link>
              </li>
              <li>• MP4 / 1080p Full HD</li>
              <li>• MP3 &amp; M4A Audio Extraction</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-200 uppercase tracking-wider text-[11px] mb-2.5">
              {s.footerLegalTitle}
            </h3>
            <p className="text-zinc-500 leading-relaxed">
              {s.footerLegalDesc}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-900 pt-6 text-[11px] text-zinc-500">
          <p>&copy; 2026 SaveIt.video. {s.footerRights}</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-zinc-300 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-zinc-300 transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
