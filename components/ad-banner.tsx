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
  slot = siteConfig.adSenseSlotId || "3732966991",
  format = "auto",
  responsive = true,
  className = "",
}: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const adsenseClientId =
    process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || siteConfig.adSenseClientId || "ca-pub-7298235222437919";

  useEffect(() => {
    // Only attempt to push adsbygoogle if in browser
    if (typeof window !== "undefined" && adsenseClientId && slot) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.warn("AdSense push error:", err);
      }
    }
  }, [adsenseClientId, slot]);

  // Clean container with proper responsive dimensions
  return (
    <div
      ref={adRef}
      className={`mx-auto my-6 flex w-full max-w-4xl flex-col items-center justify-center overflow-hidden text-center min-h-[90px] ${className}`}
    >
      <span className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
        Advertisement
      </span>
      <ins
        className="adsbygoogle"
        style={{ display: "block", minHeight: "90px" }}
        data-ad-client={adsenseClientId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}
