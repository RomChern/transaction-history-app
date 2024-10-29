import styles from "./navigation-bar.module.css";

export function NavigationBar() {
  return (
    <div className={styles.navigationBar}>
      <button>Главная</button>
      <button>Платежи</button>
      <button>Сервисы</button>
    </div>
  );
}
