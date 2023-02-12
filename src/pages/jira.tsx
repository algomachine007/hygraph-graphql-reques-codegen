import Content from "@/components/content/Content";
import Main from "@/components/layout/Main";
import Sidebar from "@/components/sidebar/Sidebar";
import { GraphQLClient } from "graphql-request";
import { graphql } from "../gql/gql";
import { SidebarsQuery } from "../gql/graphql";

const Jira = ({ data }: { data: SidebarsQuery }) => {
  console.log(data);

  return (
    <Main>
      <Sidebar sidebars={data.sidebars} />
      <Content />
    </Main>
  );
};

export default Jira;

export const getServerSideProps = async () => {
  const client = new GraphQLClient(process.env.NEXT_URL_HYGRAPH_URL || "");
  const SIDEBAR_DATA = graphql(`
    query Sidebars {
      sidebars {
        title
        slug
        icon {
          url
        }
      }
    }
  `);

  const sidebarData = await client.request(SIDEBAR_DATA);

  return {
    props: {
      data: sidebarData,
    },
  };
};
