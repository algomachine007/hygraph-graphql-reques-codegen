import React from "react";
import styles from "./style.module.css";
// draggable sidebar that expands and reduces the content of the sidebar
// make the drag button in the center
// put an animation on it

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <header>
      <>
        <nav className={styles.navigation}>
          <h1>Navbar</h1>
        </nav>

        <div className={styles.wrapper}>{children}</div>
      </>
    </header>
  );
};

export default Main;
