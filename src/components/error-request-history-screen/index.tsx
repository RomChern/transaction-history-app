import { useTransactionData } from "../transaction-data-provider";
import styles from "./error-request-history-screen.module.css";

export function ErrorRequestHistoryScreen() {
  const data = useTransactionData();

  return (
    <div className={styles.errorRequestHistoryScreen}>
      <div>
        Ничего не загрузилось...
        <br />
        Попробуйте перезагрузить экран
        <br />
        Всё получится.
      </div>

      <svg
        onClick={() => data?.uploadAdditionalData()}
        width="84"
        height="84"
        viewBox="0 0 84 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_48_2504)">
          <circle cx="42" cy="37" r="27" fill="white" />
          <path
            d="M49.9889 36.5747C49.7678 32.3541 46.2756 29 42 29C37.5817 29 34 32.5817 34 37C34 41.4183 37.5817 45 42 45C42.5523 45 43 45.4477 43 46C43 46.5523 42.5523 47 42 47C36.4772 47 32 42.5228 32 37C32 31.4772 36.4772 27 42 27C47.3868 27 51.7788 31.2593 51.9919 36.5939L52.2929 36.2929C52.6834 35.9024 53.3166 35.9024 53.7071 36.2929C54.0976 36.6834 54.0976 37.3166 53.7071 37.7071L51.7071 39.7071C51.3166 40.0976 50.6834 40.0976 50.2929 39.7071L48.2929 37.7071C47.9024 37.3166 47.9024 36.6834 48.2929 36.2929C48.6834 35.9024 49.3166 35.9024 49.7071 36.2929L49.9889 36.5747Z"
            fill="#835DE1"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_48_2504"
            x="0"
            y="0"
            width="84"
            height="84"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="5" />
            <feGaussianBlur stdDeviation="7.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_48_2504"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_48_2504"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
