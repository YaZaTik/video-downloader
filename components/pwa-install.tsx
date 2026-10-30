"use client";

import React, { useState, useEffect } from "react";
import { Download, Smartphone, X } from "lucide-react";
import { useLanguage } from "./language-context";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function PwaInstallButton({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIos, setIsIos] = useState(false);
  const [showIosTip, setShowIosTip] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
      return;
    }

    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIos(isIosDevice);

    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);
    return () => window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === "accepted") {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else if (isIos) {
      setShowIosTip(true);
    }
  };

  if (isInstalled) return null;

  return (
    <>
      <button
        type="button"
        onClick={handleInstallClick}
        className={`flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-800/80 px-2.5 py-1 text-[11px] font-medium text-zinc-300 transition hover:bg-zinc-700 hover:text-white ${className}`}
        title="Install SaveIt on your device"
      >
        <Smartphone size={13} className="text-blue-400" />
        <span>{t.installApp}</span>
      </button>

      {/* iOS Safari instructions tooltip */}
      {showIosTip && (
        <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-sm rounded-2xl border border-blue-500/30 bg-zinc-900/95 p-4 shadow-2xl backdrop-blur-md">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Smartphone size={16} className="text-blue-400" />
              <span>Install SaveIt</span>
            </div>
            <button
              onClick={() => setShowIosTip(false)}
              className="rounded-lg p-1 text-zinc-400 hover:text-white"
            >
              <X size={14} />
            </button>
          </div>
          <p className="mt-2 text-xs text-zinc-300 leading-relaxed">
            {t.installAppIos}
          </p>
        </div>
      )}
    </>
  );
}
