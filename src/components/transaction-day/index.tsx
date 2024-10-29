import styles from "./transaction-data.module.css";

type TProps = {
  data: string;
};

const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

export function TransactionDay(props: TProps) {
  const date = new Date(props.data);
  const nowDate = new Date();
  const day = date.getDate();
  const month = months[date.getMonth()];
  const isToday = date.getDate() === new Date().getDate();
  const isYesterday =
    date.getDate() === nowDate.getDate() - 1 &&
    date.getMonth() === nowDate.getMonth();

  const text = isToday ? "Сегодня," : isYesterday ? "Вчера," : "";

  return (
    <div className={styles.transactionDay}>
      {text} {day} {month}
    </div>
  );
}
