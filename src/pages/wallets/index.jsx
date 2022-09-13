import { useEffect, useState } from "react";
import api from "../../api";
import HeaderSection from "../../components/Header";
import { Page } from "../../components/Page";
import Wallet from "../../components/Wallet";

const Wallets = () => {
  const [wallet, setWallet] = useState([]);

  // const token = localStorage.getItem('token');
  const token = 'f79e82320ad69e02c81da946ebfd2c5b56b1abf5'
  
  const listWallets = () => {
    
    api.get('wallets/', {
      
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    // .then((response) => console.log(response))
    .then((response) => setWallet(response.data))
  }
  console.log(wallet)

  useEffect(() => {
    
    listWallets()

  }, [wallet])
  
  return (
    <Page>
      <HeaderSection>
      </HeaderSection>
      {
        wallet.length > 0 ? 
        
        <Wallet listWallets={listWallets}/>

    
      :
      
        <div>
          <h3> Ops, tudo muito calmo por aqui...</h3>
          <button onClick={listWallets}></button>
        </div>
      }

    </Page>
  );
};

export default Wallets;
