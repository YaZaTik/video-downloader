"use client";

import React from "react";
import Link from "next/link";
import { LanguageSwitcher } from "./language-switcher";
import { PwaInstallButton } from "./pwa-install";
import { useLanguage } from "./language-context";

export function Navbar() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        {/* Brand Logo */}
        <a
          href="/"
          className="flex items-center gap-2.5 font-bold tracking-tight text-white hover:opacity-90 transition"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-sm font-black shadow-md shadow-blue-600/30">
            S
          </span>
          <span className="text-sm sm:text-base">
            SaveIt<span className="text-blue-500">.video</span>
          </span>
        </a>

        {/* Navigation & Controls */}
        <div className="flex items-center gap-2 sm:gap-4">
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-4 text-xs font-medium text-zinc-400"
          >
            <a href="#how-it-works" className="hover:text-white transition">
              {t.howItWorks}
            </a>
            <Link href="/instagram" className="hover:text-pink-400 transition hidden sm:inline">
              Instagram
            </Link>
            <a href="#faq" className="hover:text-white transition">
              {t.faq}
            </a>
            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 text-[10px] font-semibold text-blue-400">
              {t.freeBadge}
            </span>
          </nav>

          {/* PWA Install Button */}
          <PwaInstallButton />

          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
