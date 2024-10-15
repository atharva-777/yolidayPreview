import melisearchClient from "./meilisearch";

class ExperienceService {
  static async getExperienceById({ id }: { id: string }) {
    console.log("in request");
    const index = melisearchClient.index("experience");

    return index.search("", {
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
  }
}

export default ExperienceService;
