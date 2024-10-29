import { Arrow } from "./components/arrow";
import styles from "./filter-bar.module.css";

export function FilterBar() {
  return (
    <div className={styles.filterBar}>
      <div className={styles.filterBarContainer}>
        <button>
          Тип операции <Arrow />
        </button>
        <button>
          Период <Arrow />
        </button>

        <button>
          Счет <Arrow />
        </button>

        <button>
          Карта <Arrow />
        </button>
      </div>
    </div>
  );
}
