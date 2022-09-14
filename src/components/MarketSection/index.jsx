import { MarketSectionArea } from "./styled";
import { useCrypto } from "../../Providers/cryptos";
import CryptoMarketCard from "../CryptoMarketCard";

const MarketSection = () => {
  const { cryptosInfos, cryptosIds, getCryptoInfo } = useCrypto();

  return (
    <MarketSectionArea>
      {cryptosInfos.map((crypto) => (
        <CryptoMarketCard key={crypto.symbol} crypto={crypto} />
      ))}
    </MarketSectionArea>
  );
};

export default MarketSection;
