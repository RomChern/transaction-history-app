import { useIsMobile } from "../../../mobile-provider";
import { EditButton } from "./components/edit-button";
import { SpecialButton } from "./components/special-button";
import styles from "./timeline-header.module.css";

export function TimelineHeader() {
  const isMobile = useIsMobile();

  return (
    <div className={styles.timeLineHeader}>
      <div className={styles.textContainer}>История</div>
      <div className={styles.button}>
        {isMobile ? <SpecialButton /> : <EditButton />}
      </div>
    </div>
  );
}
