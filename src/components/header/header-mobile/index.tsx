import { ServiceBarMobile } from "../service-bar/service-bar-mobile";
import styles from "./header-mobile.module.css";

export function HeaderMobile() {
  return (
    <div className={styles.headerMobile}>
      <ServiceBarMobile />
    </div>
  );
}
