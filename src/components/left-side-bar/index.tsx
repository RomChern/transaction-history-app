import styles from "./left-side-bar.module.css";

export function LeftSideBar() {
  return (
    <div className={styles.leftMenu}>
      <div className={styles.text}>Левое меню</div>
    </div>
  );
}
