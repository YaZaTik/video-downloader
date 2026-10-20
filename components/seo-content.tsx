"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  Sparkles,
  Zap,
  ShieldCheck,
  Smartphone,
  Music,
  CheckCircle2,
  Copy,
  MousePointerClick,
  DownloadCloud,
  Check,
  X,
  FileVideo,
  Layers,
  HelpCircle,
  Film,
} from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "How do I download high quality 1080p videos from X (formerly Twitter)?",
    a: "Open X (Twitter), navigate to the post containing the video, click the Share icon, and select 'Copy link'. Then paste that link into the input field at the top of this page, hit Download, select '1080p' from the available qualities list, and the video file will save directly to your device without quality loss.",
  },
  {
    q: "Can I download Instagram Reels and video posts with sound?",
    a: "Yes! Our tool extracts the full video stream with synced high-fidelity audio for public Instagram Reels, feed video posts, and IGTV videos. Simply paste any standard Instagram URL (like https://www.instagram.com/reel/...) to fetch all available formats.",
  },
  {
    q: "Is this video downloader completely free and safe?",
    a: "Yes. Our video downloader is 100% free with unlimited downloads. You do not need to register an account, enter credit card details, or install third-party browser extensions. We never store copies of your downloaded files on our servers.",
  },
  {
    q: "Can I extract audio only (MP3 / M4A) from videos?",
    a: "Yes! Whenever an audio stream is available from the source, our downloader gives you an 'Audio' option so you can download background music, speeches, or podcasts without the video track.",
  },
  {
    q: "Does this work on mobile phones (iPhone & Android)?",
    a: "Yes, our web application is fully responsive and optimized for mobile devices. On iPhones and iPads, use Safari or Chrome to download directly to your 'Files' app or Camera Roll. On Android, it works seamlessly with Chrome, Samsung Internet, and Firefox.",
  },
  {
    q: "Can I download videos from private accounts?",
    a: "No. Out of respect for user privacy and platform security protocols, we cannot extract media from private accounts or age-restricted content that requires a personal login.",
  },
];

export function SeoContent() {
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
          All Platforms
        </button>
        <button
          onClick={() => setActivePillar("twitter")}
          className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition ${
            activePillar === "twitter"
              ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
              : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700"
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          X (Twitter)
        </button>
        <button
          onClick={() => setActivePillar("instagram")}
          className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition ${
            activePillar === "instagram"
              ? "bg-pink-600 text-white shadow-md shadow-pink-600/30"
              : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700"
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          Instagram Reels
        </button>
      </div>

      {/* ─── How It Works (HowTo Section for Google Rich Snippets) ── */}
      <section id="how-it-works" className="space-y-8 scroll-mt-20">
        <div className="text-center space-y-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
            <Sparkles size={13} />
            Quick 3-Step Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How to Download Videos from X and Instagram
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            Save any public video or Reel in high resolution directly to your computer or smartphone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 font-bold text-sm border border-blue-500/30">
              1
            </div>
            <div className="flex items-center gap-2">
              <Copy size={16} className="text-blue-400" />
              <h3 className="font-semibold text-white text-base">Copy Video Link</h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Open the video post on X (Twitter) or Instagram, click or tap the Share icon, and select <strong>Copy Link</strong>.
            </p>
          </div>

          <div className="relative rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600/20 text-purple-400 font-bold text-sm border border-purple-500/30">
              2
            </div>
            <div className="flex items-center gap-2">
              <MousePointerClick size={16} className="text-purple-400" />
              <h3 className="font-semibold text-white text-base">Paste &amp; Analyze</h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Paste the link in the search bar above. Our engine instantly analyzes and fetches all available resolutions.
            </p>
          </div>

          <div className="relative rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-600/20 text-pink-400 font-bold text-sm border border-pink-500/30">
              3
            </div>
            <div className="flex items-center gap-2">
              <DownloadCloud size={16} className="text-pink-400" />
              <h3 className="font-semibold text-white text-base">Download Instantly</h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Choose your preferred format (1080p, 720p, or Audio MP3) and click Download for an immediate file save.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Platform Specific SEO Pillars ─────────────────────────── */}
      {(activePillar === "all" || activePillar === "twitter") && (
        <section id="twitter-downloader" className="scroll-mt-20 rounded-2xl border border-blue-900/40 bg-gradient-to-br from-blue-950/30 via-zinc-900/40 to-zinc-900/40 p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Film size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">X (Twitter) Video Downloader</h3>
              <p className="text-xs text-blue-300">Fast MP4 download for tweets, video clips, and GIFs</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-zinc-300 leading-relaxed">
            <div className="space-y-2">
              <h4 className="font-semibold text-white text-sm">Download High-Definition Tweets</h4>
              <p>
                X (Twitter) is the global town square for breaking news, podcasts, viral memes, and sports highlights.
                Our tool parses the raw progressive MP4 streams embedded in tweets so you can archive videos in full 1080p without quality degradation.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-white text-sm">Convert Twitter Videos to MP3</h4>
              <p>
                Need just the speech, interview, or commentary track? Use the audio selector to download a lightweight M4A / MP3 file,
                ideal for listening on headphones while driving or working offline.
              </p>
            </div>
          </div>
        </section>
      )}

      {(activePillar === "all" || activePillar === "instagram") && (
        <section id="instagram-downloader" className="scroll-mt-20 rounded-2xl border border-pink-900/40 bg-gradient-to-br from-pink-950/30 via-zinc-900/40 to-zinc-900/40 p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-600/20 text-pink-400 border border-pink-500/30">
              <Layers size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Instagram Reels &amp; Video Saver</h3>
              <p className="text-xs text-pink-300">Preserve vertical Reels, Feed Videos, and IGTV clips in original quality</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-zinc-300 leading-relaxed">
            <div className="space-y-2">
              <h4 className="font-semibold text-white text-sm">Watermark-Free Instagram Saves</h4>
              <p>
                Unlike recording your phone screen, our tool extracts the pristine direct source video file. Your downloaded
                Reels remain crystal clear without screen icons, UI buttons, or compression artifacts.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-white text-sm">Full Audio Sync Preservation</h4>
              <p>
                Trending Instagram audio, original background voiceovers, and music tracks are preserved in full stereo fidelity
                inside the MP4 container.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ─── Quality & Resolution Matrix ──────────────────────────── */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Available Video Formats &amp; Resolutions
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            Choose the right resolution for your screen size and storage bandwidth.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/30">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-zinc-800 bg-zinc-900/60 text-zinc-300">
              <tr>
                <th className="p-4 font-semibold">Resolution</th>
                <th className="p-4 font-semibold">Container</th>
                <th className="p-4 font-semibold">Best For</th>
                <th className="p-4 font-semibold">File Size</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 text-zinc-400">
              <tr>
                <td className="p-4 font-semibold text-white">1080p Full HD</td>
                <td className="p-4">MP4 (H.264)</td>
                <td className="p-4">Desktop monitors, 4K TVs, video editors</td>
                <td className="p-4 text-blue-400">~15MB - 80MB</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-white">720p HD</td>
                <td className="p-4">MP4 (H.264)</td>
                <td className="p-4">Tablets, laptops, general archiving</td>
                <td className="p-4 text-purple-400">~8MB - 40MB</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-white">480p SD</td>
                <td className="p-4">MP4</td>
                <td className="p-4">Mobile phones, saving cellular data</td>
                <td className="p-4 text-amber-400">~3MB - 15MB</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-white">Audio Only</td>
                <td className="p-4">MP3 / M4A (AAC)</td>
                <td className="p-4">Podcasts, speeches, background music</td>
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
            Why Use Our Web Downloader?
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            See how our solution compares to browser extensions and screen recording apps.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/30">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-zinc-800 bg-zinc-900/60 text-zinc-300">
              <tr>
                <th className="p-4 font-semibold">Features</th>
                <th className="p-4 font-semibold text-blue-400">Our Online Tool</th>
                <th className="p-4 font-semibold text-zinc-500">Browser Extensions</th>
                <th className="p-4 font-semibold text-zinc-500">Screen Recording</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 text-zinc-400">
              <tr>
                <td className="p-4 font-medium text-white">Software Installation</td>
                <td className="p-4 text-emerald-400 font-semibold"><span className="inline-flex items-center gap-1.5"><Check size={14} /> Zero install</span></td>
                <td className="p-4 text-red-400"><span className="inline-flex items-center gap-1.5"><X size={14} /> Requires extension</span></td>
                <td className="p-4 text-red-400"><span className="inline-flex items-center gap-1.5"><X size={14} /> Requires software</span></td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Full 1080p Quality</td>
                <td className="p-4 text-emerald-400 font-semibold"><span className="inline-flex items-center gap-1.5"><Check size={14} /> Original direct stream</span></td>
                <td className="p-4 text-yellow-400"><span className="inline-flex items-center gap-1.5"><Check size={14} /> Sometimes capped</span></td>
                <td className="p-4 text-red-400"><span className="inline-flex items-center gap-1.5"><X size={14} /> Degraded bitrate</span></td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">No Watermarks</td>
                <td className="p-4 text-emerald-400 font-semibold"><span className="inline-flex items-center gap-1.5"><Check size={14} /> 100% Clean</span></td>
                <td className="p-4 text-emerald-400"><span className="inline-flex items-center gap-1.5"><Check size={14} /> Clean</span></td>
                <td className="p-4 text-red-400"><span className="inline-flex items-center gap-1.5"><X size={14} /> UI buttons visible</span></td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Audio Extractor (MP3)</td>
                <td className="p-4 text-emerald-400 font-semibold"><span className="inline-flex items-center gap-1.5"><Check size={14} /> Built-in</span></td>
                <td className="p-4 text-red-400"><span className="inline-flex items-center gap-1.5"><X size={14} /> Rarely available</span></td>
                <td className="p-4 text-red-400"><span className="inline-flex items-center gap-1.5"><X size={14} /> Manual split needed</span></td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Mobile Device Support</td>
                <td className="p-4 text-emerald-400 font-semibold"><span className="inline-flex items-center gap-1.5"><Check size={14} /> iOS &amp; Android</span></td>
                <td className="p-4 text-red-400"><span className="inline-flex items-center gap-1.5"><X size={14} /> Desktop only</span></td>
                <td className="p-4 text-yellow-400"><span className="inline-flex items-center gap-1.5"><Check size={14} /> Clunky on mobile</span></td>
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
            <span>Answers to Common Inquiries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            Everything you need to know about downloading videos from X (Twitter) and Instagram.
          </p>
        </div>

        <div className="divide-y divide-zinc-800/80 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 overflow-hidden">
          {FAQ_ITEMS.map((item, idx) => {
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
