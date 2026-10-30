/**
 * Global Site Configuration & SEO Constants
 * Configured for saveit.video
 */

const getBaseUrl = (): string => {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "https://saveit.video";
};

export const siteConfig = {
  name: "SaveIt",
  brandName: "SaveIt.video",
  title: "SaveIt — X & Instagram Video Downloader (1080p MP4 & MP3)",
  shortTitle: "SaveIt Video Downloader",
  description:
    "Free online video downloader for X (formerly Twitter) and Instagram. Download public videos, Reels, Stories, and clips in 1080p Full HD, 720p, 480p, or high-bitrate MP3 audio with no watermark or registration.",
  url: getBaseUrl(),
  author: "SaveIt Team",
  creator: "SaveIt",
  publisher: "SaveIt.video",
  twitterHandle: "@saveitvideo",
  googleAnalyticsId: "G-SSM44R0LQP",
  themeColor: "#09090b",
  keywords: [
    "saveit",
    "saveit video",
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
