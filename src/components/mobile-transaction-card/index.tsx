import styles from "./mobile-transaction-card.module.css";

export function MobileTransactionCard() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={"Sberbank.svg"} alt="" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.sum}>+300.000 Р</div>
        <div className={styles.organization}>Сергеев С.С. ИП</div>
        <div className={styles.details}>
          По договору №8923 от 10 октября 2022 в т.ч. НДС 20%
        </div>
        <div className={styles.time}>№6884, 13:40</div>
      </div>
    </div>
  );
}
