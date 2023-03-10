import { client } from "@/base/utils/gqlClient";
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
  const BLOGS = graphql(`
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

  const data = await client.request(BLOGS);
  return {
    props: { blogPosts: data },
  };
};
