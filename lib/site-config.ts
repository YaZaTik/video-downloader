/**
 * Global Site Configuration & SEO Constants
 * Configure your domain, site branding, and SEO defaults here.
 */

const getBaseUrl = (): string => {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
};

export const siteConfig = {
  name: "VideoDownloader",
  brandName: "Video Downloader",
  title: "X & Instagram Video Downloader — Fast, Free 1080p MP4 & MP3",
  shortTitle: "X & Instagram Video Downloader",
  description:
    "Free online video downloader for X (formerly Twitter) and Instagram. Download public videos, Reels, Stories, and clips in 1080p Full HD, 720p, 480p, or high-bitrate MP3 audio with no watermark or registration.",
  url: getBaseUrl(),
  author: "Video Downloader Team",
  creator: "Video Downloader",
  publisher: "Video Downloader",
  twitterHandle: "@videodownloader",
  themeColor: "#09090b",
  keywords: [
    "twitter video downloader",
    "x video downloader",
    "download twitter video 1080p",
    "instagram video downloader",
    "instagram reels downloader",
    "save twitter video",
    "save instagram reels",
    "download x video mp4",
    "twitter to mp4",
    "online video downloader free",
    "extract audio from twitter video",
    "insta video saver",
    "download video without watermark",
    "twitter to mp3 converter",
    "instagram story downloader",
    "fast video downloader online",
  ],
  features: [
    "Download public X (Twitter) videos in crisp 1080p Full HD",
    "Save Instagram Reels and video posts in MP4",
    "Extract audio-only tracks in MP3 / M4A",
    "Direct browser file download without intermediate redirects",
    "Zero registration, zero software installation, 100% free",
  ],
};
