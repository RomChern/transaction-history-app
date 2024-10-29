import { EmptyHistoryScreen } from "../../../empty-history-screen";
import { ErrorRequestHistoryScreen } from "../../../error-request-history-screen";
import { EventCard } from "../../../event-card";
import { TimelineEnd } from "../../../timeline-end";
import { useTransactionData } from "../../../transaction-data-provider";
import { TransactionDay } from "../../../transaction-day";
import styles from "./transaction-list.module.css";

export function TransactionList() {
  const data = useTransactionData();

  if (data?.isError) {
    return <ErrorRequestHistoryScreen />;
  }

  if (data === null || data.transactionData.length === 0) {
    return <EmptyHistoryScreen />;
  }

  return (
    <ul className={styles.transactionList}>
      {data.transactionData.map((transactionAct, index, array) => {
        if (
          index === 0 ||
          new Date(transactionAct.date).getDate() !==
            new Date(array[index - 1]?.date).getDate()
        ) {
          return (
            <>
              <TransactionDay data={transactionAct.date} />
              <EventCard key={index} transactionAct={transactionAct} />
            </>
          );
        }
        return <EventCard key={index} transactionAct={transactionAct} />;
      })}
      <TimelineEnd />
    </ul>
  );
}
