import { FilterBar } from "../filter-bar";
import { TransactionList } from "../timeline/components/transaction-list";
import styles from "./transaction-content.module.css";

export function TransactionContent() {
  return (
    <div className={styles.transactionContent}>
      <FilterBar />
      <TransactionList />
    </div>
  );
}
