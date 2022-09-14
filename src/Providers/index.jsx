import { UserProvider } from "./user";
import { CryptoProvider } from "./cryptos";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <CryptoProvider>{children}</CryptoProvider>
    </UserProvider>
  );
};

export default Providers;
