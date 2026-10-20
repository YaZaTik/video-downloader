"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  Lock,
  SearchX,
  Timer,
  ServerCrash,
  Unlink,
} from "lucide-react";
import type { ApiErrorResponse } from "@/types";

// Map error codes to icons
function getErrorIcon(code?: string) {
  switch (code) {
    case "INVALID_URL":
      return <Unlink size={28} />;
    case "PRIVATE_CONTENT":
      return <Lock size={28} />;
    case "NOT_FOUND":
      return <SearchX size={28} />;
    case "RATE_LIMITED":
      return <Timer size={28} />;
    case "EXTRACTION_FAILED":
      return <ServerCrash size={28} />;
    default:
      return <AlertCircle size={28} />;
  }
}

function getErrorColor(code?: string) {
  switch (code) {
    case "PRIVATE_CONTENT":
      return "from-amber-600/20 to-orange-600/20 border-amber-700/40";
    case "RATE_LIMITED":
      return "from-yellow-600/20 to-amber-600/20 border-yellow-700/40";
    default:
      return "from-red-600/20 to-pink-600/20 border-red-700/40";
  }
}

interface ErrorDisplayProps {
  error: ApiErrorResponse;
  onRetry: () => void;
}

export function ErrorDisplay({ error, onRetry }: ErrorDisplayProps) {
  const icon = getErrorIcon(error.code);
  const colorClass = getErrorColor(error.code);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      className={`mx-auto mt-8 max-w-2xl rounded-2xl border bg-gradient-to-br p-6 ${colorClass}`}
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 text-red-400">{icon}</div>
        <div className="flex-1 space-y-2">
          <h4 className="text-sm font-semibold text-white">
            {error.code === "PRIVATE_CONTENT"
              ? "Private Content"
              : error.code === "NOT_FOUND"
              ? "Not Found"
              : error.code === "RATE_LIMITED"
              ? "Rate Limited"
              : error.code === "EXTRACTION_FAILED"
              ? "Extraction Failed"
              : "Something Went Wrong"}
          </h4>
          <p className="text-sm leading-relaxed text-zinc-300">{error.error}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          onClick={onRetry}
          className="rounded-lg border border-zinc-600 px-4 py-2 text-xs font-medium text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
        >
          Try Again
        </button>
      </div>
    </motion.div>
  );
}
