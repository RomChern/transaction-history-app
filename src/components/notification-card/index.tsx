import { TNotification } from "../../types";
import { useIsMobile } from "../mobile-provider";
import { NotificationCardDesktop } from "./notification-card-desktop";
import { NotificationCardMobile } from "./notification-card-mobile";

type TProps = {
  transactionAct: TNotification;
};

export function NotificationCard({ transactionAct }: TProps) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <NotificationCardMobile transactionAct={transactionAct} />;
  }

  return <NotificationCardDesktop transactionAct={transactionAct} />;
}
