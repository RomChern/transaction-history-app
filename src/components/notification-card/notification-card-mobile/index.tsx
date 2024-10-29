import { TNotification } from "../../../types";
import styles from "./notification-card-mobile.module.css";
type TProps = {
  transactionAct: TNotification;
};
export function NotificationCardMobile({ transactionAct }: TProps) {
  return (
    <div className={styles.notificationCard}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img src={transactionAct.icon} />
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.service}>{transactionAct.service}</div>
          <div className={styles.title}>{transactionAct.title}</div>
          <div className={styles.description}>{transactionAct.description}</div>
        </div>
      </div>
    </div>
  );
}
