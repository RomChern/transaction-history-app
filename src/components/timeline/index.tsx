import { TransactionContent } from "../transaction-content";
import { TimelineHeader } from "./components/header";
import styles from "./timeline.module.css";

export function Timeline() {
  return (
    <div id="timeline" className={styles.timeline}>
      <div className={styles.timelineContent}>
        <TimelineHeader />
        <TransactionContent />
      </div>
    </div>
  );
}
