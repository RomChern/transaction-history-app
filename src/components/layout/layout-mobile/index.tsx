import { Header } from "../../header";
import { HomeScreenMenu } from "../../home-screen-menu";
import { TapBar } from "../../mobile-tap-bar";
import { Timeline } from "../../timeline";
import styles from "./layout-mobile.module.css";

export function LayoutMobile() {
  return (
    <div className={styles.wrapper}>
      <HomeScreenMenu />
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.mainContent}>
        <Timeline />
      </div>
      <div className={styles.tapBar}>
        <TapBar />
      </div>
    </div>
  );
}
