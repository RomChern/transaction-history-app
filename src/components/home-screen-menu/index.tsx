import styles from "./home-screen-menu.module.css";

export function HomeScreenMenu() {
  return (
    <div className={styles.homeScreenMenu}>
      <svg
        width="54"
        height="54"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27 0C45.4091 0 54 8.59091 54 27C54 45.4091 45.4091 54 27 54C8.59091 54 0 45.4091 0 27C0 8.59091 8.59091 0 27 0Z"
          fill="#191919"
        />
        <path
          d="M27 29.5129L28.6698 18.4382C28.8767 17.0664 26.9312 16.434 26.2055 17.6372L20.1767 27.6331C19.6715 28.4707 20.3099 29.5129 21.3281 29.5129H27Z"
          fill="white"
        />
        <path
          d="M27 24.4871L25.3302 35.5618C25.1233 36.9336 27.0688 37.566 27.7945 36.3628L33.8233 26.3669C34.3285 25.5293 33.6901 24.4871 32.6719 24.4871H27Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
