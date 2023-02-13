import algoliasearch from "algoliasearch";

const client = algoliasearch(
  process.env.ALGOLIA_INDEX_NAME || "",
  "YourAdminAPIKey",
);

class AlgoliaService {
  items: any;
  constructor(items: any) {
    this.items = items;
  }

  createAlgoliaService() {
    const client = algoliasearch(
      process.env.ALGOLIA_ID!,
      process.env.ALGOLIA_ADMIN_KEY!,
    );
    const index = client.initIndex(process.env.ALGOLIA_INDEX_NAME!);

    return index;
  }
}
