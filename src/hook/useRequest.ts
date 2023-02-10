import { GraphQLClient } from "graphql-request";

const useRequest = (query: string) => {
  const client = new GraphQLClient(process.env.NEXT_URL_HYGRAPH_URL || "");
  return client.request(query);
};

export default useRequest;
