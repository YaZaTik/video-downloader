"use client";

import React from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "./language-context";
import { Language } from "@/lib/translations";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "en", label: "EN", flag: "🇺🇸" },
    { code: "fr", label: "FR", flag: "🇫🇷" },
    { code: "ar", label: "AR", flag: "🇲🇦" },
  ];

  return (
    <div className={`flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-900/80 p-0.5 ${className}`}>
      {languages.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => setLang(item.code)}
          className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold transition ${
            lang === item.code
              ? "bg-blue-600 text-white shadow-sm"
              : "text-zinc-400 hover:text-zinc-200"
          }`}
          title={item.label}
        >
          <span>{item.flag}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
}
