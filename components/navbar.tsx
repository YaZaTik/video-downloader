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
        <div className="flex items-center gap-2 sm:gap-3">
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-4 text-xs font-medium text-zinc-400"
          >
            <a href="#how-it-works" className="hover:text-white transition">
              {t.howItWorks}
            </a>
            <a href="#faq" className="hover:text-white transition">
              {t.faq}
            </a>
            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 text-[10px] font-semibold text-blue-400">
              {t.freeBadge}
            </span>
          </nav>

          {/* Dedicated Instagram Pill Link - Always Visible */}
          <Link
            href="/instagram"
            className="flex items-center gap-1.5 rounded-full border border-pink-500/40 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10 px-2.5 sm:px-3 py-1 text-xs font-semibold text-pink-300 hover:border-pink-500/70 hover:text-white hover:shadow-md hover:shadow-pink-500/20 transition"
            title="Téléchargeur Instagram / تحميل إنستغرام"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current text-pink-400">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>Instagram</span>
          </Link>

          {/* PWA Install Button */}
          <PwaInstallButton />

          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
