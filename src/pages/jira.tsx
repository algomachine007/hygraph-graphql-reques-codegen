import { client } from "@/base/utils/gqlClient";
import Content from "@/components/content/Content";
import Main from "@/components/layout/Main";
import Sidebar from "@/components/sidebar/Sidebar";
import { graphql } from "../gql/gql";
import { HeroQuery, SidebarsQuery } from "../gql/graphql";

type TSidebarData = {
  data: SidebarsQuery;
  hero: HeroQuery;
};

const Jira = ({ data, hero }: TSidebarData) => {
  return (
    <Main>
      <Sidebar sidebars={data.sidebars} />
      <Content hero={hero.heroes[0]} />
    </Main>
  );
};

export default Jira;

export const getServerSideProps = async () => {
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

  const sidebarData = await client.request(SIDEBAR_DATA);
  const heroData = await client.request(HERO_DATA, HeroQueryVariables);

  const getData = await fetch("http://localhost:3000/api/hero");

  console.log("HERO DATA SERVERLESS", getData);

  return {
    props: {
      data: sidebarData,
      hero: heroData,
    },
  };
};
