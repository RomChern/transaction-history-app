import { NotificationButton } from "../../../service-bar/components/notification-button";
import { SettingsButton } from "../../../service-bar/components/settings-button";
import styles from "./service-bar-mobile.module.css";

export function ServiceBarMobile() {
  return (
    <div className={styles.serviceBarMobile}>
      <NotificationButton />
      <SettingsButton />
    </div>
  );
}
