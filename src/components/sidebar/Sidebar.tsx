import { useCallback, useEffect, useRef, useState } from "react";
import useLocalStorage from "../../hook/useLocalStorage";
import styles from "./styles.module.css";
const Sidebar = () => {
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
        Sidebar
      </aside>
    </>
  );
};

export default Sidebar;
