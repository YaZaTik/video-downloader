"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Sparkles,
  Copy,
  MousePointerClick,
  DownloadCloud,
  Check,
  X,
  Layers,
  HelpCircle,
  Film,
} from "lucide-react";
import { useLanguage } from "./language-context";
import { seoTranslations } from "@/lib/seo-translations";

export function SeoContent() {
  const { lang } = useLanguage();
  const s = seoTranslations[lang] || seoTranslations.en;
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activePillar, setActivePillar] = useState<"all" | "twitter" | "instagram">("all");

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 space-y-24">
      {/* ─── Platform Pillar Filter Buttons ───────────────────────── */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => setActivePillar("all")}
          className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
            activePillar === "all"
              ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
              : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700"
          }`}
        >
          {s.filterAll}
        </button>
        <button
          onClick={() => setActivePillar("twitter")}
          className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition ${
            activePillar === "twitter"
              ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
              : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700"
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          {s.filterTwitter}
        </button>
        <Link
          href="/instagram"
          className="flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold border border-pink-500/40 bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 hover:bg-pink-600 hover:text-white transition shadow-sm"
        >
          <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          {s.filterInstagram}
        </Link>
      </div>

      {/* ─── How It Works (HowTo Section for Google Rich Snippets) ── */}
      <section id="how-it-works" className="space-y-8 scroll-mt-20">
        <div className="text-center space-y-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
            <Sparkles size={13} />
            {s.howItWorksBadge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {s.howItWorksTitle}
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            {s.howItWorksSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 font-bold text-sm border border-blue-500/30">
              1
            </div>
            <div className="flex items-center gap-2">
              <Copy size={16} className="text-blue-400" />
              <h3 className="font-semibold text-white text-base">{s.step1Title}</h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {s.step1Desc}
            </p>
          </div>

          <div className="relative rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600/20 text-purple-400 font-bold text-sm border border-purple-500/30">
              2
            </div>
            <div className="flex items-center gap-2">
              <MousePointerClick size={16} className="text-purple-400" />
              <h3 className="font-semibold text-white text-base">{s.step2Title}</h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {s.step2Desc}
            </p>
          </div>

          <div className="relative rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-600/20 text-pink-400 font-bold text-sm border border-pink-500/30">
              3
            </div>
            <div className="flex items-center gap-2">
              <DownloadCloud size={16} className="text-pink-400" />
              <h3 className="font-semibold text-white text-base">{s.step3Title}</h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {s.step3Desc}
            </p>
          </div>
        </div>
      </section>

      {/* ─── Platform Specific SEO Pillars ─────────────────────────── */}
      {(activePillar === "all" || activePillar === "twitter") && (
        <section
          id="twitter-downloader"
          className="scroll-mt-20 rounded-2xl border border-blue-900/40 bg-gradient-to-br from-blue-950/30 via-zinc-900/40 to-zinc-900/40 p-8 space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Film size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{s.twitterPillarTitle}</h3>
              <p className="text-xs text-blue-300">{s.twitterPillarSubtitle}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-zinc-300 leading-relaxed">
            <div className="space-y-2">
              <h4 className="font-semibold text-white text-sm">{s.twitterPillarF1Title}</h4>
              <p>{s.twitterPillarF1Desc}</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-white text-sm">{s.twitterPillarF2Title}</h4>
              <p>{s.twitterPillarF2Desc}</p>
            </div>
          </div>
        </section>
      )}

      {(activePillar === "all" || activePillar === "instagram") && (
        <section
          id="instagram-downloader"
          className="scroll-mt-20 rounded-2xl border border-pink-900/40 bg-gradient-to-br from-pink-950/30 via-zinc-900/40 to-zinc-900/40 p-8 space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-600/20 text-pink-400 border border-pink-500/30">
              <Layers size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{s.instagramPillarTitle}</h3>
              <p className="text-xs text-pink-300">{s.instagramPillarSubtitle}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-zinc-300 leading-relaxed">
            <div className="space-y-2">
              <h4 className="font-semibold text-white text-sm">{s.instagramPillarF1Title}</h4>
              <p>{s.instagramPillarF1Desc}</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-white text-sm">{s.instagramPillarF2Title}</h4>
              <p>{s.instagramPillarF2Desc}</p>
            </div>
          </div>
          <div className="pt-2 flex justify-start">
            <Link
              href="/instagram"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-pink-600/20 hover:scale-[1.02] hover:shadow-pink-600/40 transition"
            >
              <span>{lang === "ar" ? "افتح صفحة تحميل إنستغرام المخصصة مع الدليل الكامل" : lang === "fr" ? "Accéder à la page dédiée Instagram & Guide complet" : "Open Dedicated Instagram Downloader & Full Guide"}</span>
              <span className="text-sm">→</span>
            </Link>
          </div>
        </section>
      )}

      {/* ─── Quality & Resolution Matrix ──────────────────────────── */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {s.table1Title}
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            {s.table1Subtitle}
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/30">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-zinc-800 bg-zinc-900/60 text-zinc-300">
              <tr>
                <th className="p-4 font-semibold">{s.thResolution}</th>
                <th className="p-4 font-semibold">{s.thContainer}</th>
                <th className="p-4 font-semibold">{s.thBestFor}</th>
                <th className="p-4 font-semibold">{s.thFileSize}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 text-zinc-400">
              <tr>
                <td className="p-4 font-semibold text-white">1080p Full HD</td>
                <td className="p-4">MP4 (H.264)</td>
                <td className="p-4">{s.row1Best}</td>
                <td className="p-4 text-blue-400">~15MB - 80MB</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-white">720p HD</td>
                <td className="p-4">MP4 (H.264)</td>
                <td className="p-4">{s.row2Best}</td>
                <td className="p-4 text-purple-400">~8MB - 40MB</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-white">480p SD</td>
                <td className="p-4">MP4</td>
                <td className="p-4">{s.row3Best}</td>
                <td className="p-4 text-amber-400">~3MB - 15MB</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-white">Audio Only</td>
                <td className="p-4">MP3 / M4A (AAC)</td>
                <td className="p-4">{s.row4Best}</td>
                <td className="p-4 text-pink-400">~1MB - 8MB</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── Comparison Matrix: Web Tool vs Extensions ────────────── */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {s.table2Title}
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            {s.table2Subtitle}
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/30">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-zinc-800 bg-zinc-900/60 text-zinc-300">
              <tr>
                <th className="p-4 font-semibold">{s.thFeatures}</th>
                <th className="p-4 font-semibold text-blue-400">{s.thOurTool}</th>
                <th className="p-4 font-semibold text-zinc-500">{s.thExtensions}</th>
                <th className="p-4 font-semibold text-zinc-500">{s.thScreenRecord}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 text-zinc-400">
              <tr>
                <td className="p-4 font-medium text-white">{s.rowFeat1}</td>
                <td className="p-4 text-emerald-400 font-semibold">
                  <span className="inline-flex items-center gap-1.5">
                    <Check size={14} /> {s.rowFeat1Val1}
                  </span>
                </td>
                <td className="p-4 text-red-400">
                  <span className="inline-flex items-center gap-1.5">
                    <X size={14} /> {s.rowFeat1Val2}
                  </span>
                </td>
                <td className="p-4 text-red-400">
                  <span className="inline-flex items-center gap-1.5">
                    <X size={14} /> {s.rowFeat1Val3}
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">{s.rowFeat2}</td>
                <td className="p-4 text-emerald-400 font-semibold">
                  <span className="inline-flex items-center gap-1.5">
                    <Check size={14} /> {s.rowFeat2Val1}
                  </span>
                </td>
                <td className="p-4 text-yellow-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Check size={14} /> {s.rowFeat2Val2}
                  </span>
                </td>
                <td className="p-4 text-red-400">
                  <span className="inline-flex items-center gap-1.5">
                    <X size={14} /> {s.rowFeat2Val3}
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">{s.rowFeat3}</td>
                <td className="p-4 text-emerald-400 font-semibold">
                  <span className="inline-flex items-center gap-1.5">
                    <Check size={14} /> {s.rowFeat3Val1}
                  </span>
                </td>
                <td className="p-4 text-emerald-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Check size={14} /> {s.rowFeat3Val2}
                  </span>
                </td>
                <td className="p-4 text-red-400">
                  <span className="inline-flex items-center gap-1.5">
                    <X size={14} /> {s.rowFeat3Val3}
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">{s.rowFeat4}</td>
                <td className="p-4 text-emerald-400 font-semibold">
                  <span className="inline-flex items-center gap-1.5">
                    <Check size={14} /> {s.rowFeat4Val1}
                  </span>
                </td>
                <td className="p-4 text-red-400">
                  <span className="inline-flex items-center gap-1.5">
                    <X size={14} /> {s.rowFeat4Val2}
                  </span>
                </td>
                <td className="p-4 text-red-400">
                  <span className="inline-flex items-center gap-1.5">
                    <X size={14} /> {s.rowFeat4Val3}
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">{s.rowFeat5}</td>
                <td className="p-4 text-emerald-400 font-semibold">
                  <span className="inline-flex items-center gap-1.5">
                    <Check size={14} /> {s.rowFeat5Val1}
                  </span>
                </td>
                <td className="p-4 text-red-400">
                  <span className="inline-flex items-center gap-1.5">
                    <X size={14} /> {s.rowFeat5Val2}
                  </span>
                </td>
                <td className="p-4 text-yellow-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Check size={14} /> {s.rowFeat5Val3}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── Frequently Asked Questions (FAQ Section) ──────────────── */}
      <section id="faq" className="space-y-6 scroll-mt-20">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs text-blue-400 font-semibold">
            <HelpCircle size={14} />
            <span>{s.faqBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {s.faqTitle}
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            {s.faqSubtitle}
          </p>
        </div>

        <div className="divide-y divide-zinc-800/80 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 overflow-hidden">
          {s.faqs.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="transition">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm font-semibold text-zinc-200 hover:text-white transition"
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    size={16}
                    className={`shrink-0 text-zinc-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-400" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-zinc-400 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
