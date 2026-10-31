"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Link2, Clipboard, ArrowRight, Loader2, X as XIcon } from "lucide-react";
import { isValidVideoUrl } from "@/lib/validators";
import { useLanguage } from "./language-context";

interface UrlInputProps {
  onSubmit: (url: string) => void;
  isLoading: boolean;
  initialValue?: string;
}

export function UrlInput({ onSubmit, isLoading, initialValue = "" }: UrlInputProps) {
  const { t } = useLanguage();
  const [url, setUrl] = useState(initialValue);

  React.useEffect(() => {
    if (initialValue) {
      setUrl(initialValue);
    }
  }, [initialValue]);
  const [activeTab, setActiveTab] = useState<"all" | "twitter" | "instagram">("all");
  const [validationError, setValidationError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const getPlaceholder = () => {
    switch (activeTab) {
      case "twitter":
        return "x.com/...";
      case "instagram":
        return "instagram.com/reel/...";
      default:
        return t.inputPlaceholder;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = url.trim();

    if (!trimmed) {
      setValidationError("Please paste a video URL.");
      return;
    }

    try {
      new URL(trimmed);
    } catch {
      setValidationError("That doesn't look like a valid URL.");
      return;
    }

    if (!isValidVideoUrl(trimmed)) {
      setValidationError(
        "Unsupported URL. Paste a public video link from X (twitter.com / x.com) or Instagram."
      );
      return;
    }

    setValidationError(null);
    onSubmit(trimmed);
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
      setValidationError(null);
      inputRef.current?.focus();
    } catch {
      setValidationError("Clipboard access denied. Please paste manually.");
    }
  };

  const handleClear = () => {
    setUrl("");
    setValidationError(null);
    inputRef.current?.focus();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-3"
    >
      {/* Quick Platform Selectors */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2">
        <button
          type="button"
          onClick={() => {
            setActiveTab("all");
            inputRef.current?.focus();
          }}
          className={`rounded-full px-3 py-1 text-xs font-medium transition ${
            activeTab === "all"
              ? "bg-zinc-700 text-white shadow-sm"
              : "bg-zinc-800/60 text-zinc-400 hover:text-zinc-200"
          }`}
        >
          Auto Detect
        </button>

        <button
          type="button"
          onClick={() => {
            setActiveTab("twitter");
            inputRef.current?.focus();
          }}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition ${
            activeTab === "twitter"
              ? "bg-blue-600/30 text-blue-300 border border-blue-500/40"
              : "bg-zinc-800/60 text-zinc-400 hover:text-zinc-200"
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          X (Twitter)
        </button>

        <Link
          href="/instagram"
          className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium bg-zinc-800/60 text-zinc-300 hover:text-white hover:bg-pink-600/30 hover:border-pink-500/40 border border-transparent transition"
          title="Instagram Downloader"
        >
          <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current text-pink-400"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          Instagram ↗
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Input Row */}
        <div className="input-glow flex items-center gap-2 rounded-2xl border border-zinc-700/60 bg-zinc-900/80 p-2 transition-all">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-800 text-zinc-400">
            <Link2 size={18} />
          </div>

          <input
            ref={inputRef}
            type="text"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              if (validationError) setValidationError(null);
            }}
            placeholder={getPlaceholder()}
            disabled={isLoading}
            suppressHydrationWarning
            className="flex-1 bg-transparent text-sm text-white placeholder-zinc-500 outline-none disabled:opacity-50"
            autoComplete="off"
            spellCheck={false}
          />

          {url && (
            <button
              type="button"
              onClick={handleClear}
              className="rounded-lg p-2 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300 transition"
              title="Clear"
            >
              <XIcon size={14} />
            </button>
          )}

          <button
            type="button"
            onClick={handlePaste}
            disabled={isLoading}
            className="flex items-center gap-1.5 rounded-xl border border-zinc-700 px-3 py-2 text-xs font-medium text-zinc-300 transition hover:bg-zinc-800 hover:text-white disabled:opacity-40"
            title={t.pasteBtn}
          >
            <Clipboard size={14} />
            <span className="hidden sm:inline">{t.pasteBtn}</span>
          </button>

          <button
            type="submit"
            disabled={isLoading || !url.trim()}
            className="flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 disabled:opacity-40 disabled:shadow-none"
          >
            {isLoading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span className="hidden sm:inline">{t.analyzingBtn}</span>
              </>
            ) : (
              <>
                <span className="hidden sm:inline">{t.downloadBtn}</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </div>

        {/* Validation Error */}
        {validationError && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="pl-2 text-xs text-red-400"
          >
            {validationError}
          </motion.p>
        )}
      </form>
    </motion.div>
  );
}
