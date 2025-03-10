import styles from "./home-button.module.css";

export function HomeButton() {
  return (
    <button className={styles.button}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 31 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Filled/Home">
          <path
            id="Icon"
            d="M3.84655 12.9049L14.834 3.09464C15.2134 2.75589 15.7866 2.75589 16.166 3.09464L27.1535 12.9049C27.9756 13.6389 27.4564 15 26.3543 15H24.5V24C24.5 25.6568 23.1569 27 21.5 27H18.5V23C18.5 21.8954 17.6046 21 16.5 21H14.5C13.3954 21 12.5 21.8954 12.5 23V27H9.50001C7.84316 27 6.50001 25.6568 6.50001 24V15H4.64577C3.54366 15 3.02444 13.6389 3.84655 12.9049Z"
            fill="#C8C8C8"
          />
        </g>
      </svg>
      <div className={styles.label}>Главная</div>
    </button>
  );
}
