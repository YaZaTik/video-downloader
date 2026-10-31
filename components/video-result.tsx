"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Copy,
  Check,
  Clock,
  User,
  ChevronDown,
  ExternalLink,
  Music,
  Loader2,
} from "lucide-react";
import type { VideoInfo, VideoFormat } from "@/types";

interface VideoResultProps {
  video: VideoInfo;
}

export function VideoResult({ video }: VideoResultProps) {
  const [selectedFormat, setSelectedFormat] = useState<VideoFormat>(video.formats[0]);
  const [showAllFormats, setShowAllFormats] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(selectedFormat.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: create temp textarea
      const ta = document.createElement("textarea");
      ta.value = selectedFormat.url;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    setIsDownloading(true);
    try {
      const cleanTitle = (video.title || "video")
        .slice(0, 60)
        .replace(/[^\w\s-]/g, "")
        .trim() || "video";
      const filename = `${cleanTitle}.${selectedFormat.extension}`;
      const downloadEndpoint = `/api/stream-download?url=${encodeURIComponent(
        selectedFormat.url
      )}&filename=${encodeURIComponent(filename)}`;

      // Use a hidden anchor to the same-origin stream endpoint
      // The endpoint returns Content-Disposition: attachment, triggering
      // an inline browser download dialog without opening any new tab or page.
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = downloadEndpoint;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
      }, 1000);
    } catch (err) {
      console.error("Failed to initiate download:", err);
    } finally {
      setTimeout(() => {
        setIsDownloading(false);
      }, 2500);
    }
  };

  const PlatformBadge = () => {
    if (video.platform === "twitter") {
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-200">
          <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          X (Twitter)
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-3 py-1 text-xs font-medium text-pink-300">
        <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
        Instagram
      </span>
    );
  };

  const visibleFormats = showAllFormats ? video.formats : video.formats.slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="glass-card mx-auto mt-8 max-w-2xl overflow-hidden rounded-2xl"
    >
      {/* Thumbnail */}
      {video.thumbnail && (
        <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={video.thumbnail}
            alt={video.title}
            className="h-full w-full object-cover"
          />
          {/* Duration overlay */}
          {video.duration && video.duration !== "0:00" && (
            <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-md bg-black/80 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
              <Clock size={11} />
              {video.duration}
            </div>
          )}
          {/* Platform badge overlay */}
          <div className="absolute left-3 top-3">
            <PlatformBadge />
          </div>
        </div>
      )}

      {/* Info Section */}
      <div className="space-y-5 p-6">
        {/* Title & Uploader */}
        <div>
          <h3 className="text-base font-semibold leading-snug text-white line-clamp-2">
            {video.title}
          </h3>
          {video.uploader && (
            <div className="mt-1.5 flex items-center gap-1.5 text-xs text-zinc-400">
              <User size={12} />
              {video.uploader}
            </div>
          )}
        </div>

        {/* Quality Selector */}
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
            Select Quality
          </p>
          <div className="flex flex-wrap gap-2">
            {visibleFormats.map((format, index) => {
              const isSelected = selectedFormat === format;
              const isAudio = format.quality === "Audio";
              return (
                <motion.button
                  key={`${format.quality}-${format.extension}-${index}`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedFormat(format)}
                  className={`flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium transition-all ${
                    isSelected
                      ? "border-blue-500/50 bg-blue-600/20 text-blue-300 shadow-sm shadow-blue-600/10"
                      : "border-zinc-700 bg-zinc-800/60 text-zinc-300 hover:border-zinc-600 hover:bg-zinc-800"
                  }`}
                >
                  {isAudio ? <Music size={12} /> : null}
                  <span>{format.formatNote || format.quality}</span>
                  <span className="text-zinc-500">.{format.extension}</span>
                </motion.button>
              );
            })}

            {video.formats.length > 4 && (
              <button
                onClick={() => setShowAllFormats(!showAllFormats)}
                className="flex items-center gap-1 rounded-lg border border-zinc-800 px-3 py-2 text-xs text-zinc-500 transition hover:border-zinc-700 hover:text-zinc-400"
              >
                {showAllFormats ? "Show Less" : `+${video.formats.length - 4} More`}
                <ChevronDown
                  size={12}
                  className={`transition-transform ${showAllFormats ? "rotate-180" : ""}`}
                />
              </button>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDownload}
            disabled={isDownloading}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 disabled:opacity-75"
          >
            {isDownloading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Downloading...</span>
              </>
            ) : (
              <>
                <Download size={16} />
                <span>Download {selectedFormat.quality === "Audio" ? "Audio" : "Video"}</span>
              </>
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopyLink}
            className="flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-600 hover:bg-zinc-800/80"
            title="Copy Download Link"
          >
            {copied ? (
              <>
                <Check size={16} className="text-green-400" />
                <span className="hidden sm:inline text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span className="hidden sm:inline">Copy Link</span>
              </>
            )}
          </motion.button>

          <motion.a
            href={selectedFormat.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center rounded-xl border border-zinc-700 px-3 py-3 text-zinc-400 transition hover:border-zinc-600 hover:bg-zinc-800/80 hover:text-zinc-300"
            title="Open in New Tab"
          >
            <ExternalLink size={16} />
          </motion.a>
        </div>

        {/* Viral Share Bar */}
        <div className="pt-3 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-zinc-400">
          <span className="text-[11px] font-medium text-zinc-400 flex items-center gap-1.5">
            <span>✨ Partager / Share SaveIt:</span>
          </span>
          <div className="flex items-center gap-2">
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                "🔥 Best tool to download Instagram Reels & X (Twitter) videos in 1080p Full HD without watermark: https://saveit.video"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1.5 text-[11px] font-semibold text-emerald-400 hover:bg-emerald-500/20 transition"
              title="Share on WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              WhatsApp
            </a>
            <a
              href={`https://t.me/share/url?url=https://saveit.video&text=${encodeURIComponent(
                "🔥 Fast, 100% free tool to download Instagram Reels & X (Twitter) videos in 1080p Full HD without watermark!"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg border border-sky-500/30 bg-sky-500/10 px-2.5 py-1.5 text-[11px] font-semibold text-sky-400 hover:bg-sky-500/20 transition"
              title="Share on Telegram"
            >
              <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.949z"/></svg>
              Telegram
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                "Check out @saveitvideo — download public X (Twitter) & Instagram videos in 1080p Full HD without watermark: https://saveit.video"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-800 px-2.5 py-1.5 text-[11px] font-semibold text-zinc-300 hover:text-white hover:bg-zinc-700 transition"
              title="Share on X"
            >
              <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              Post
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
