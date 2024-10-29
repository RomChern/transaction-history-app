import { MobileProvider } from "./components/mobile-provider";
import { Layout } from "./components/layout";
import { TransactionDataProvider } from "./components/transaction-data-provider";

function App() {
  return (
    <TransactionDataProvider>
      <MobileProvider>
        <Layout />
      </MobileProvider>
    </TransactionDataProvider>
  );
}
export default App;
