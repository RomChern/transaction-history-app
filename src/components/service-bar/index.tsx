import { InviteManButton } from "./components/invite-man-button";
import { LogoutButton } from "./components/logout-button";
import { NotificationButton } from "./components/notification-button";
import { SettingsButton } from "./components/settings-button";
import styles from "./service-bar.module.css";

export function ServiceBar() {
  return (
    <div className={styles.serviceBar}>
      <NotificationButton />
      <InviteManButton />
      <SettingsButton />
      <LogoutButton />
    </div>
  );
}
