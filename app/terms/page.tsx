import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using SaveIt.video.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 space-y-8 text-zinc-300">
      <div className="space-y-2 border-b border-zinc-800 pb-6">
        <h1 className="text-3xl font-extrabold text-white">Terms of Service</h1>
        <p className="text-xs text-zinc-500">Last updated: October 2026</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">1. Acceptance of Terms</h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          By accessing and using SaveIt.video, you agree to comply with and be bound by these Terms of Service.
          If you do not agree to these terms, please do not use the service.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">2. Permitted Use &amp; Copyright</h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          SaveIt.video is designed solely for personal, non-commercial, and fair-use archiving of public media content.
          Users are strictly responsible for respecting the copyright and intellectual property rights of content creators.
          You must not download, distribute, or monetize copyrighted works without express authorization from the rights holder.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">3. Disclaimer of Warranties</h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          The service is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind.
          SaveIt.video does not host, store, or cache media files on its servers; all extraction is conducted in real-time
          via public stream endpoints.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">4. Limitation of Liability</h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          In no event shall SaveIt.video or its operators be liable for any direct, indirect, incidental, or consequential
          damages resulting from the use or inability to use the service.
        </p>
      </section>
    </div>
  );
}
