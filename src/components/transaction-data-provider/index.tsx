import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { TNotification, TTransaction } from "../../types";

type TProps = {
  children: React.ReactNode;
};

const TransactionsContext = createContext<{
  transactionData: (TTransaction | TNotification)[];
  uploadAdditionalData: () => void;
  isError: boolean;
} | null>(null);

export function useTransactionData() {
  return useContext(TransactionsContext);
}

export function TransactionDataProvider(props: TProps) {
  const [transactionData, setTransactionData] = useState<
    (TTransaction | TNotification)[]
  >([]);
  const [isError, setError] = useState(false);

  const uploadAdditionalData = useCallback(() => {
    fetch("/api/events")
      .then((response) => response.json())
      .then(({ data }: { data: (TTransaction | TNotification)[] }) => {
        setTransactionData((prevData) => [...prevData, ...data]);
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  const value = {
    transactionData,
    uploadAdditionalData,
    isError,
  };

  useEffect(() => {
    uploadAdditionalData();
  }, [uploadAdditionalData]);

  return (
    <TransactionsContext.Provider value={value}>
      {props.children}
    </TransactionsContext.Provider>
  );
}
