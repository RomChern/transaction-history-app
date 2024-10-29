import { TNotification, TTransaction, TypeEvents } from "../../types";
import { NotificationCard } from "../notification-card";
import { TransactionCard } from "../transaction-card";

type TProps = {
  transactionAct: TTransaction | TNotification;
};

export function EventCard({ transactionAct }: TProps) {
  if (transactionAct.type === TypeEvents.Balance) {
    return <TransactionCard transactionAct={transactionAct} />;
  }

  return <NotificationCard transactionAct={transactionAct} />;
}
