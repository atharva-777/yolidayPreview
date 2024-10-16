import melisearchClient from "./meilisearch";

class ExperienceService {
  static async getItineraryById({ id }: { id: string }) {
    const index = melisearchClient.index("itinerary");
    const res = await index.search("", {
      attributesToRetrieve: [
        "experience.id",
        "experience.title",
        "experience.start_location",
        "experience.duration",
        "experience.description",
        "experience.creator",
        "experience.destination.name",
        "experience.images",
        "experience.medias",
        "experience.rating",
      ],
      filter: `experience.id = "${id}"`,
    });
    return res.hits[0];
  }

  static async getExperienceById({ id }: { id: string }) {
    const index = melisearchClient.index("experience");

    const res = await index.search("", {
      attributesToRetrieve: [
        "id",
        "title",
        "medias.uid",
        "medias.id",
        "description",
      ],
      filter: `id = "${id}"`,
      limit: 1, // Since we are looking for a specific ID
    });
    return res.hits[0];
  }
}

export default ExperienceService;
