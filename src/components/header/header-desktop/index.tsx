import { MainLogo } from "./components/main-logo";
import { NavigationBar } from "./components/navigation-bar";
import { ServiceBarDesktop } from "../service-bar/service-bar-desktop";
import styles from "./header-desktop.module.css";

export function HeaderDesktop() {
  return (
    <div className={styles.headerDesktop}>
      <div className={styles.content}>
        <div className={styles.mainLogo}>
          <MainLogo />
        </div>
        <div className={styles.navBar}>
          <NavigationBar />
        </div>
        <div className={styles.serviceBar}>
          <ServiceBarDesktop />
        </div>
      </div>
    </div>
  );
}
