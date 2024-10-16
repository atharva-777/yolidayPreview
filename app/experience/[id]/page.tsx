// "use client";
import React from "react";
import Head from "next/head";
import { Metadata } from "next";
import ExperienceService from "@/services/experience.service";

// Optional: You may also want to define the metadata separately
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const experience = await ExperienceService.getExperienceById({
    id,
  });

  return {
    title: experience.title,
    openGraph: {
      title: experience.title,
      description: experience.description,
      url: `https://app.yoliday.in/experience/${id}`,
      images: [
        {
          url: experience.medias[0]?.uid
            ? `${process.env.NEXT_PUBLIC_MEDIA_URL}/${experience.medias[0].uid}`
            : "",
          width: 720,
          height: 600,
          alt: "Experience Image",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: experience.title,
      description: experience.description,
      images: [
        {
          url: experience.medias[0]?.uid
            ? `${process.env.NEXT_PUBLIC_MEDIA_URL}/${experience.medias[0].uid}`
            : "",
        },
      ],
    },
  };
}

const ExperiencePage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const experience = await ExperienceService.getExperienceById({
    id,
  });

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <Head>
        <meta property="og:title" content={experience.title} />
        <meta property="og:description" content={experience.description} />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${experience.medias[0].uid}`}
        />
        <meta
          property="og:url"
          content={`https://app.yoliday.in/experience/${id}`}
        />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:card"
          content={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${experience.medias[0].uid}`}
        />
        <meta name="twitter:title" content={experience.title} />
        <meta name="twitter:description" content={experience.description} />
        <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${experience.medias[0].uid}`}
        />
        <title> Itinerary</title>
      </Head>
      <div>hello</div>
    </main>
  );
};

export default ExperiencePage;
