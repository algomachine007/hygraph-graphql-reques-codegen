import { GraphQLClient, gql } from "graphql-request";
import { GetServerSideProps } from "next";

export default function Home({ data }: any) {
  console.log(data);
  return (
    <>
      {data?.blogModels.map((e: any) => (
        <div key={e.title}>
          <h1>{e.title}</h1>
        </div>
      ))}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const client = new GraphQLClient(process.env.NEXT_URL_HYGRAPH_URL || "");
  const BLOG_POSTS = gql`
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
  const data = await client.request(BLOG_POSTS);
  return {
    props: { data: data },
  };
};
