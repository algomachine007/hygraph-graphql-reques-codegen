import { AlgoliaService } from "@/base/services/algolia/algoliaService";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  try {
    if (req.method === "POST") {
      const algoliaService = new AlgoliaService(req.body);

      const data = await algoliaService.createObjectsInAlgolia();

      res.status(200).json(`Successfully created in algolia ✅`);

      return data;
    }
  } catch (error) {
    console.log(error);
    res.status(390).send("Error");
  }
}
