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
  adSenseClientId: "ca-pub-7298235222437919",
  adSensePublisherId: "pub-7298235222437919",
  themeColor: "#09090b",
  keywords: [
    "saveit",
    "saveit video",
    "twitter video downloader",
    "x video downloader",
    "download twitter video",
    "twitter downloader",
    "twitter video download",
    "ssstwitter",
    "twdown",
    "tweet downloader",
    "x downloader",
    "download video from twitter",
    "save twitter video",
    "download twitter video 1080p",
    "twitter to mp4",
    "twitter gif downloader",
    "x video download",
    "instagram video downloader",
    "instagram downloader",
    "download instagram video",
    "instagram reels download",
    "instagram reel downloader",
    "instagram story downloader",
    "snapinsta",
    "saveinsta",
    "instasave",
    "igram",
    "save instagram video",
    "ig video downloader",
    "insta video download",
    "reels downloader",
    "story saver",
    "instagram photo downloader",
    "online video downloader free",
    "download video without watermark",
    "fast video downloader online",
    "video downloader",
    "savefrom",
    "telecharger video instagram",
    "telecharger video twitter",
    "descargar videos de twitter",
    "descargar videos de instagram",
    "baixar video do instagram",
    "baixar video do twitter",
    "تحميل فيديوهات انستقرام",
    "تحميل فيديوهات تويتر",
    "extract audio from twitter video",
    "twitter to mp3 converter",
  ],
  features: [
    "Download public X (Twitter) videos in crisp 1080p Full HD",
    "Save Instagram Reels and video posts in MP4",
    "Extract audio-only tracks in MP3 / M4A",
    "Direct browser file download without intermediate redirects",
    "Zero registration, zero software installation, 100% free",
  ],
};
