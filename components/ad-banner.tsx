"use client";

import React, { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/site-config";

interface AdBannerProps {
  slot?: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  responsive?: boolean;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

export function AdBanner({
  slot,
  format = "auto",
  responsive = true,
  className = "",
}: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const adsenseClientId =
    process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || siteConfig.adSenseClientId;

  useEffect(() => {
    // Only attempt to push adsbygoogle if a real AdSense client ID and slot exist
    if (adsenseClientId && slot) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.warn("AdSense push error:", err);
      }
    }
  }, [adsenseClientId, slot]);

  // If no AdSense ID or slot is provided, render a clean placeholder for preview
  if (!adsenseClientId || !slot) {
    return (
      <div
        className={`mx-auto my-6 flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-800 bg-zinc-950/40 p-4 text-center transition ${className}`}
      >
        <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
          Advertisement
        </span>
        <div className="mt-2 text-xs text-zinc-400">
          {slot ? `Ad Slot: ${slot}` : "Ad placement ready (Set NEXT_PUBLIC_ADSENSE_CLIENT_ID)"}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={adRef}
      className={`mx-auto my-6 flex flex-col items-center justify-center overflow-hidden text-center ${className}`}
    >
      <span className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
        Advertisement
      </span>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={adsenseClientId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}
