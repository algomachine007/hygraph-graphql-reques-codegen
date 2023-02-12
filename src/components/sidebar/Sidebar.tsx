import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { SidebarsQuery } from "../../gql/graphql";
import useLocalStorage from "../../hook/useLocalStorage";
import styles from "./styles.module.css";
const Sidebar = ({ sidebars }: SidebarsQuery) => {
  const ref = useRef(null);

  const [storedValue, setValue] = useLocalStorage("resizedWidth", 600);

  const [isResizing, setIsResizing] = useState(false);

  const startResizing = useCallback((mouseDownEvent: MouseEvent) => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent: MouseEvent) => {
      if (isResizing) {
        setValue(
          mouseMoveEvent.clientX - ref.current.getBoundingClientRect().left,
        );
      }
    },
    [isResizing, setValue],
  );
  useEffect(() => {
    window.addEventListener("mousemove", resize);

    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <>
      <aside
        ref={ref}
        className={styles.sidebar}
        style={{ width: `${Number(storedValue)}px` }}
        onMouseDown={(e) => e.preventDefault()}
      >
        <div className={styles.control} onMouseDown={startResizing} />

        <ul className={styles.linkWrapper}>
          {sidebars?.map((sidebar) => (
            <Link href={sidebar.slug || ""} key={sidebar.slug}>
              <span>
                <Image
                  src={sidebar?.icon?.url.toString()}
                  alt="Picture of the author"
                  width={50}
                  height={50}
                  className={styles.image}
                />
                {sidebar.title}
              </span>
            </Link>
          ))}{" "}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
