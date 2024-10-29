import { TTransaction } from "../../../types";
import styles from "./transaction-card.module.css";

type TProps = {
  transactionAct: TTransaction;
};

export function TransactionCardDesktop({ transactionAct }: TProps) {
  return (
    <div className={styles.transactionCard}>
      <div className={styles.balance}>{transactionAct.balance}</div>
      <div className={styles.wrapper}>
        <div className={styles.organization}>{transactionAct.title}</div>
        <div className={styles.details}>{transactionAct.description}</div>
        <div className={styles.time}>{transactionAct.optionalDescription}</div>
      </div>
      <div className={styles.eventLogo}>
        <img src={transactionAct.icon} />
      </div>
    </div>
  );
}
