import { TTransaction } from "../../../types";
import styles from "./transaction-card-mobile.module.css";

type TProps = {
  transactionAct: TTransaction;
};

export function TransactionCardMobile({ transactionAct }: TProps) {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={transactionAct.icon} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.balance}>{transactionAct.balance}</div>
        <div className={styles.organization}>{transactionAct.title}</div>
        <div className={styles.details}>{transactionAct.description}</div>
        <div className={styles.time}>{transactionAct.optionalDescription}</div>
      </div>
    </div>
  );
}
