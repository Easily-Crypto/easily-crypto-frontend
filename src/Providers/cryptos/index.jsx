import { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";

export const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
  const [cryptosIds, setCryptosIds] = useState([
    "bitcoin",
    "ethereum",
    "tether",
    "usd-coin",
    "binancecoin",
    "binance-peg-xrp",
    "binance-peg-cardano",
    "solana",
    "binance-peg-polkadot",
    "binance-peg-dogecoin",
  ]);

  const [cryptosInfos, setCryptoInfos] = useState([]);

  const getCryptoInfo = () => {
    axios.get(`https://api.coingecko.com/api/v3/coins`).then((res) => {
      setCryptoInfos([...res.data]);
    });
  };

  useEffect(() => {
    getCryptoInfo();
  }, []);

  //   cryptosIds.forEach((id) => getCryptoInfo(id));

  return (
    <CryptoContext.Provider
      value={{
        cryptosIds,
        setCryptosIds,
        cryptosInfos,
        setCryptoInfos,
        getCryptoInfo,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};

export const useCrypto = () => useContext(CryptoContext);
