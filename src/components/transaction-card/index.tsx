import { TTransaction } from "../../types";
import { useIsMobile } from "../mobile-provider";
import { TransactionCardDesktop } from "./transaction-card-desktop";
import { TransactionCardMobile } from "./transaction-card-mobile";

type TProps = {
  transactionAct: TTransaction;
};

export function TransactionCard({ transactionAct }: TProps) {
  const isMobile = useIsMobile();
  if (isMobile) {
    return <TransactionCardMobile transactionAct={transactionAct} />;
  }

  return <TransactionCardDesktop transactionAct={transactionAct} />;
}
