import { GraphQLClient, gql } from "graphql-request";
import { GetServerSideProps } from "next";

export default function Home({ data }: any) {
  console.log(data);
  return <>Ok</>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const client = new GraphQLClient(process.env.NEXT_URL_HYGRAPH_URL || "");
  const query = gql`
    {
      blogModels {
        createdAt
        id
        publishedAt
        slug
        subtitle
        title
        updatedAt
      }
    }
  `;
  const data = await client.request(query);
  return {
    props: { data: data },
  };
};
