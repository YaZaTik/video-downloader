import React from "react";
import { siteConfig } from "@/lib/site-config";

export function JsonLd() {
  const baseUrl = siteConfig.url;

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.brandName,
    url: baseUrl,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/?url={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.brandName,
    url: baseUrl,
    logo: `${baseUrl}/icon.png`,
    sameAs: [
      "https://x.com/videodownloader",
      "https://github.com",
    ],
  };

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Twitter & X Video Downloader",
        item: `${baseUrl}/#twitter-downloader`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Instagram Reels Downloader",
        item: `${baseUrl}/#instagram-downloader`,
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: siteConfig.title,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Windows, macOS, Linux, Android, iOS",
    browserRequirements: "Requires JavaScript. Supports Chrome, Safari, Firefox, Edge, Opera.",
    url: baseUrl,
    description: siteConfig.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "18340",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: siteConfig.features,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I download high quality 1080p videos from X (Twitter)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Copy the link of the X/Twitter post containing the video, paste it into our Video Downloader box, click Download, select '1080p' from the available qualities list, and the video file will save directly to your device.",
        },
      },
      {
        "@type": "Question",
        name: "How to download Instagram Reels with audio in MP4?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Open Instagram, tap the Share icon on any public Reel or video post, copy the URL, paste it into the downloader field, and select the highest MP4 resolution. The audio and video tracks are fully preserved.",
        },
      },
      {
        "@type": "Question",
        name: "Is this video downloader completely free and safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, it is 100% free and unlimited. No user registration, credit cards, or browser extensions are required. We never store copies of your downloaded files on our servers.",
        },
      },
      {
        "@type": "Question",
        name: "Can I extract audio only (MP3 / M4A) from videos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our tool extracts audio-only streams (M4A / MP3) whenever available so you can save songs, speeches, or podcasts from videos.",
        },
      },
      {
        "@type": "Question",
        name: "Does it work on iPhone and Android mobile devices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, it works directly in any mobile web browser including Safari on iOS/iPadOS and Chrome on Android without needing third-party apps.",
        },
      },
      {
        "@type": "Question",
        name: "Can I download videos from private accounts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, out of privacy and security policies, our tool can only fetch publicly accessible videos from X and Instagram.",
        },
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Download Public Videos from X (Twitter) and Instagram",
    description: "A fast 3-step guide to download public videos and Reels in Full HD.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Copy the Video Link",
        text: "Open X (Twitter) or Instagram, navigate to the post with the video, click the Share icon and select 'Copy Link'.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Paste URL in the Downloader",
        text: "Paste the copied URL into the search box on our Video Downloader page or click the 'Paste' button.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Select Quality & Download",
        text: "Choose your desired resolution (1080p, 720p, 480p, or Audio) and click 'Download Video' to save the file directly to your device.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </>
  );
}
