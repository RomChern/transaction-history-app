import { TNotification } from "../../../types";
import styles from "./notification-card-desktop.module.css";

type TProps = {
  transactionAct: TNotification;
};

export function NotificationCardDesktop({ transactionAct }: TProps) {
  return (
    <div className={styles.notificationCard}>
      <div className={styles.service}>{transactionAct.service}</div>
      <div className={styles.wrapper}>
        <div className={styles.title}>{transactionAct.title}</div>
        <div className={styles.description}>{transactionAct.description}</div>
      </div>
      <div className={styles.logo}>
        <img src={transactionAct.icon} />
      </div>
    </div>
  );
}
