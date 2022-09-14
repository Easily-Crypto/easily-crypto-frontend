import { useEffect, useState } from "react";
import api from "../../api";
import HeaderSection from "../../components/Header";
import { Page } from "../../components/Page";
import Wallet from "../../components/Wallet";
import WalletEmpty from "../../components/WalletEmpty";

const Wallets = () => {
  const [wallet, setWallet] = useState([]);

  const token = localStorage.getItem('token');
  
  const listWallets = () => {
    
    api.get('wallets/', {
      
      headers: {
        Authorization: `Token ${token}`,
      }
    })
    .then((response) => setWallet(response.data))
  }

  useEffect(() => {
    
    listWallets()

  }, [])
  
  return (
    <Page>
      <HeaderSection/>
      
      {wallet.length > 0 ? 
        
        <Wallet listWallets={wallet}/>
    
      :
      
        <WalletEmpty/>
      }
      
    </Page>
  );
};

export default Wallets;
