"use client";

import React from "react";
import { motion } from "framer-motion";

export function SkeletonLoader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      className="glass-card mx-auto mt-8 max-w-2xl overflow-hidden rounded-2xl"
    >
      {/* Thumbnail skeleton */}
      <div className="relative aspect-video w-full animate-pulse bg-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-700/30 to-transparent animate-[shimmer_2s_infinite]" />
        {/* Play button placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-14 w-14 rounded-full bg-zinc-700/50" />
        </div>
      </div>

      <div className="space-y-4 p-6">
        {/* Platform badge + title */}
        <div className="flex items-start gap-3">
          <div className="h-7 w-20 animate-pulse rounded-full bg-zinc-800" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-3/4 animate-pulse rounded bg-zinc-800" />
            <div className="h-3 w-1/2 animate-pulse rounded bg-zinc-800" />
          </div>
        </div>

        {/* Duration + uploader */}
        <div className="flex gap-4">
          <div className="h-3 w-16 animate-pulse rounded bg-zinc-800" />
          <div className="h-3 w-24 animate-pulse rounded bg-zinc-800" />
        </div>

        {/* Quality buttons */}
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-9 w-20 animate-pulse rounded-lg bg-zinc-800" />
          ))}
        </div>

        {/* Download button */}
        <div className="h-11 w-full animate-pulse rounded-xl bg-zinc-800" />
      </div>

      {/* Loading indicator text */}
      <div className="border-t border-zinc-800 px-6 py-3">
        <div className="flex items-center justify-center gap-2 text-xs text-zinc-500">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="h-3.5 w-3.5 rounded-full border-2 border-zinc-600 border-t-blue-500"
          />
          Fetching video details...
        </div>
      </div>
    </motion.div>
  );
}
