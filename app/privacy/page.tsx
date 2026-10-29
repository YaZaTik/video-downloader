import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and cookie usage guidelines for Video Downloader.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 space-y-8 text-zinc-300">
      <div className="space-y-2 border-b border-zinc-800 pb-6">
        <h1 className="text-3xl font-extrabold text-white">Privacy Policy</h1>
        <p className="text-xs text-zinc-500">Last updated: October 2026</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">1. Information We Collect</h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          Video Downloader operates with a privacy-first approach. We do not require account registration,
          passwords, or personal contact information to use our service. When you submit a video URL, it is processed
          in real-time to extract media stream metadata and is never stored on our servers.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">2. Cookies and Advertising Partners</h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          We may partner with third-party advertising networks, such as Google AdSense, to display ads when you visit
          our website. These companies may use cookies, web beacons, and similar tracking technologies to serve ads based
          on your prior visits to this and other websites on the internet.
        </p>
        <p className="text-sm leading-relaxed text-zinc-400">
          You may opt out of personalized advertising by visiting{" "}
          <a
            href="https://www.aboutads.info/choices/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            AboutAds.info
          </a>{" "}
          or adjusting your Google Ad Settings.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">3. Log Files</h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          Like most web services, our servers automatically collect non-personally identifiable log information, including
          browser type, referring URL, timestamp, and anonymized IP addresses for security, rate-limiting, and abuse prevention.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">4. Changes to This Policy</h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          We reserve the right to update this policy at any time. Any changes will be posted on this page with an updated
          revision date.
        </p>
      </section>
    </div>
  );
}
