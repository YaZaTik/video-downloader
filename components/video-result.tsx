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
      </div>
    </motion.div>
  );
}
