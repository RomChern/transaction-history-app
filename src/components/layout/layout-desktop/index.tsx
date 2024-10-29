import { Header } from "../../header";
import { LeftSideBar } from "../../left-side-bar";
import { Timeline } from "../../timeline";
import { Widgets } from "../../widgets";
import styles from "./layout-desktop.module.css";

export function LayoutDesktop() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.container}>
        <div className={styles.leftSideBar}>
          <LeftSideBar />
        </div>
        <div className={styles.mainContent}>
          <Timeline />
        </div>
        <div className={styles.rightSideBar}>
          <Widgets />
        </div>
      </div>
    </div>
  );
}
