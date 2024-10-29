import styles from "./history-button.module.css";

export function HistoryButton() {
  return (
    <button className={styles.button}>
      <svg
        width="35"
        height="34"
        viewBox="0 0 35 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.5 31C22.1274 31 27.5 25.6274 27.5 19C27.5 12.3726 22.1274 7 15.5 7C8.87258 7 3.5 12.3726 3.5 19C3.5 25.6274 8.87258 31 15.5 31ZM16.5 14C16.5 13.4477 16.0523 13 15.5 13C14.9477 13 14.5 13.4477 14.5 14V19C14.5 19.2652 14.6054 19.5196 14.7929 19.7071L19.2929 24.2071C19.6834 24.5976 20.3166 24.5976 20.7071 24.2071C21.0976 23.8166 21.0976 23.1834 20.7071 22.7929L16.5 18.5858V14Z"
          fill="#835DE1"
        />
        <g clip-path="url(#clip0_0_1)">
          <rect x="26.5" width="8" height="8" rx="4" fill="#D84D4D" />
        </g>
        <defs>
          <clipPath id="clip0_0_1">
            <rect
              width="8"
              height="8"
              fill="white"
              transform="translate(26.5)"
            />
          </clipPath>
        </defs>
      </svg>
      <div className={styles.label}>История</div>
    </button>
  );
}
