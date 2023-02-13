import algoliasearch from "algoliasearch";

export class AlgoliaService {
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

  async createObjectsInAlgolia() {
    const objects = this.items;

    const dataToAlgolia = objects.map(
      (elem: Record<string, string | { id: string }>, index: number) => ({
        objectID: index,
        ...elem,
      }),
    );

    try {
      const data = await this.createAlgoliaService().saveObjects(dataToAlgolia);

      if (data.objectIDs && data.taskIDs) {
        console.log(data, "Sent successfully 🔥");
      }

      return data;
    } catch (error) {
      console.error("Error", error);
    }
  }
}
