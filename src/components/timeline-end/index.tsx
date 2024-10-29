import { useEffect, useRef } from "react";
import styles from "./timeline-end.module.css";
import { useTransactionData } from "../transaction-data-provider";

export function TimelineEnd() {
  const uploadData = useTransactionData();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timelineElement = document.getElementById("timeline");

    const observer = new IntersectionObserver(
      (entry) => {
        if (entry[0].isIntersecting) {
          uploadData?.uploadAdditionalData();
        }
      },
      { root: timelineElement }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [uploadData]);

  return (
    <div ref={ref} className={styles.timelineEnd}>
      <div className={styles.timelineEndContent}>
        Это — конец истории.
        <br />
        Других событий не было.
      </div>
    </div>
  );
}
