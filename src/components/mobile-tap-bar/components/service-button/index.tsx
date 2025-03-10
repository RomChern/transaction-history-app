import styles from "./service-button.module.css";

export function ServiceButton() {
  return (
    <button className={styles.button}>
      <svg
        width="31"
        height="30"
        viewBox="0 0 31 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Filled/Widget">
          <g id="Icon">
            <path
              d="M7.5 4C5.84315 4 4.5 5.34315 4.5 7V14H13.5V4H7.5Z"
              fill="#C8C8C8"
            />
            <path
              d="M26.5 16H21.5V26H23.5C25.1569 26 26.5 24.6569 26.5 23V16Z"
              fill="#C8C8C8"
            />
            <path
              d="M15.5 4H23.5C25.1569 4 26.5 5.34315 26.5 7V14H15.5V4Z"
              fill="#C8C8C8"
            />
            <path
              d="M19.5 16H4.5V23C4.5 24.6569 5.84315 26 7.5 26H19.5V16Z"
              fill="#C8C8C8"
            />
          </g>
        </g>
      </svg>
      <div className={styles.label}>Сервисы</div>
    </button>
  );
}
