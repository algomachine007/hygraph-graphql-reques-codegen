import { GraphQLClient } from "graphql-request";
import type { NextApiRequest, NextApiResponse } from "next";
import { graphql } from "../../gql/gql";
import { HeroQuery } from "../../gql/graphql";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HeroQuery | string>,
) {
  try {
    const HERO_DATA = graphql(`
      query Hero($title: String!) {
        heroes(where: { title: $title }) {
          title
          description {
            html
          }
          cta {
            text
            icon {
              id
            }
          }
        }
      }
    `);

    const HeroQueryVariables = {
      title: "Welcome To Home Page",
    };

    const client = new GraphQLClient(
      "https://api-us-west-2.hygraph.com/v2/cldyn51uj1iws01t2dvjb4rm3/master",
    );

    const heroData = await client.request(
      String(HERO_DATA),
      HeroQueryVariables,
    );
    res.status(200).json(heroData);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }
}
