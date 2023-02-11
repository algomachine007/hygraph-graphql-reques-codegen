import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
const Sidebar = () => {
  const ref = useRef(null);

  const [width, setWidth] = useState(400);

  const [isResizing, setIsResizing] = useState(false);
  console.log(ref);

  const startResizing = useCallback((mouseDownEvent: any) => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent: any) => {
      if (isResizing) {
        setWidth(
          mouseMoveEvent.clientX - ref?.current.getBoundingClientRect().left,
        );
      }
    },
    [isResizing],
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
    <aside
      ref={ref}
      className={styles.sidebar}
      style={{ width: `${width}px` }}
      onMouseDown={(e) => e.preventDefault()}
    >
      <div id="resize" className={styles.control} onMouseDown={startResizing} />
      Sidebar
    </aside>
  );
};

export default Sidebar;
