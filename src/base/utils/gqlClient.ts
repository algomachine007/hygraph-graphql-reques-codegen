import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient(process.env.NEXT_URL_HYGRAPH_URL || "");
