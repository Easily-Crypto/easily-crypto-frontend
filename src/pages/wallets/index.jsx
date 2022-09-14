import { useEffect, useState } from "react";
import api from "../../api";
import HeaderSection from "../../components/Header";
import { Page } from "../../components/Page";
import Wallet from "../../components/Wallet";

const Wallets = () => {
  const [wallet, setWallet] = useState([]);

  const token = localStorage.getItem('token');
  
  const listWallets = () => {
    
    api.get('wallets/', {
      
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // }
    })
    .then((response) => setWallet(response.data))
  }

  useEffect(() => {
    
    listWallets()

  }, [])
  
  return (
    <Page>
      <HeaderSection>
      </HeaderSection>
      {
        wallet.length > 0 ? 
        
        
        <Wallet listWallets={wallet}/>
    
      :
      
        <div>
          <h3> Ops, tudo muito calmo por aqui...</h3>
          <p> Vá até Market e compre seu primeiro criptoativo com 50%OFF !!! </p>
        </div>
      }

    </Page>
  );
};

export default Wallets;
