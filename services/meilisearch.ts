import { MeiliSearch } from "meilisearch";

const melisearchClient = new MeiliSearch({
  host:
    process.env.NEXT_PUBLIC_MELISEARCH_URL || "https://search.dev.yoliday.in/",
  apiKey: process.env.NEXT_PUBLIC_MELISEARCH_KEY,
});

export default melisearchClient;
