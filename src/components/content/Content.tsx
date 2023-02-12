import { Hero } from "@/gql/graphql";
import styles from "./styles.module.css";

const Content = ({ hero }: { hero: Hero }) => {
  return (
    <div className={styles.content}>
      <h1>{hero.title}</h1>

      <div
        dangerouslySetInnerHTML={{
          __html: hero.description?.html,
        }}
      />
    </div>
  );
};

export default Content;
