import { reconstructUrlFromSlug } from "@/lib/validators";
import HomePage from "@/app/page";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const targetUrl = reconstructUrlFromSlug(slug);

  if (targetUrl) {
    return {
      title: `Download Video — ${siteConfig.brandName}`,
      description: `Downloading video from ${targetUrl} via SaveIt.video`,
    };
  }

  return {
    title: siteConfig.title,
  };
}

export default async function CatchAllSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const targetUrl = reconstructUrlFromSlug(slug);

  if (!targetUrl) {
    // If not a recognized media URL path, show 404
    notFound();
  }

  return <HomePage initialUrl={targetUrl} />;
}
