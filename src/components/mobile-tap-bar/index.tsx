import { ChatButton } from "./components/chat-button";
import { HistoryButton } from "./components/history-button";
import { HomeButton } from "./components/home-button";
import { PaymentButton } from "./components/payment-button";
import { ServiceButton } from "./components/service-button";
import styles from "./mobile-tap-bar.module.css";

export function TapBar() {
  return (
    <div className={styles.mobileTapWrapper}>
      <HomeButton />
      <HistoryButton />
      <PaymentButton />
      <ServiceButton />
      <ChatButton />
    </div>
  );
}
