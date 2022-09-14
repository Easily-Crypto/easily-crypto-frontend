import HeaderSection from "../../components/Header";
import { Page } from "../../components/Page";
import MarketSection from "../../components/MarketSection";
import { useCrypto } from "../../Providers/cryptos";
import { useEffect } from "react";

const Market = () => {
  const { cryptosInfos, cryptosIds, getCryptoInfo } = useCrypto();

  return (
    <Page>
      <HeaderSection></HeaderSection>
      <MarketSection></MarketSection>
    </Page>
  );
};

export default Market;
