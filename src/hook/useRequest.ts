import { GraphQLClient } from "graphql-request";

const useRequest = (query: string) => {
  try {
    const client = new GraphQLClient(process.env.NEXT_URL_HYGRAPH_URL || "");
    return client.request(query);
  } catch (error) {
    console.log(error);
  }
};

export default useRequest;
