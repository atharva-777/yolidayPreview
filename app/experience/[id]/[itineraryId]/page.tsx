// "use client";
import React from "react";
import Head from "next/head";
import { Metadata } from "next";
import ExperienceService from "@/services/experience.service";

// Optional: You may also want to define the metadata separately
export async function generateMetadata({
  params,
}: {
  params: { id: string; itineraryId: string };
}): Promise<Metadata> {
  const { id, itineraryId } = params;
  const experience = await ExperienceService.getExperienceById({
    id,
  });

  return {
    title: experience.title,
    openGraph: {
      title: experience.title,
      description: experience.description,
      url: `${process.env.NEXT_PUBLIC_URL}/experience/${id}/${itineraryId}`,
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

const ItineraryPage = async ({
  params,
}: {
  params: { id: string; itineraryId: string };
}) => {
  const { id, itineraryId } = params;
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
          content={`${process.env.NEXT_PUBLIC_URL}/experience/${id}/${itineraryId}`}
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

export default ItineraryPage;
