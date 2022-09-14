import HeaderSection from "../../components/Header";
import { Page } from "../../components/Page";
import MarketSection from "../../components/MarketSection";
import { useCrypto } from "../../Providers/cryptos";
import { useEffect } from "react";
import { useUser } from "../../Providers/user";
import { useNavigate } from "react-router-dom";

const Market = () => {
  const { cryptosInfos, cryptosIds, getCryptoInfo } = useCrypto();

  const { userInfo, isLoggedIn } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <Page>
      <HeaderSection></HeaderSection>
      <MarketSection></MarketSection>
    </Page>
  );
};

export default Market;
