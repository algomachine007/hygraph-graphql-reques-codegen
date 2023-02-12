import { GraphQLClient } from "graphql-request";
import { GetServerSideProps } from "next";
import { graphql } from "../gql/gql";
import { BlogPostsQuery } from "../gql/graphql";

type TBlogPosts = {
  blogPosts: BlogPostsQuery;
};

export default function Home({ blogPosts }: TBlogPosts) {
  return (
    <>
      {blogPosts.blogModels?.map((blogPost) => (
        <div key={blogPost.title}>
          <h1>{blogPost.title}</h1>
        </div>
      ))}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const client = new GraphQLClient(process.env.NEXT_URL_HYGRAPH_URL || "");

  const BLOGS = graphql(/* GraphQL */ `
    query blogPosts {
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
  `);

  // const BLOG_POSTS = gql`
  //   {
  //     blogPosts {
  //       createdAt
  //       id
  //       publishedAt
  //       slug
  //       subtitle
  //       title
  //       updatedAt
  //     }
  //   }
  // `;
  const data = await client.request(BLOGS);
  return {
    props: { blogPosts: data },
  };
};
