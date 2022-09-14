import { useEffect, useState } from "react";
import api from "../../api";
import HeaderSection from "../../components/Header";
import { Page } from "../../components/Page";
import Wallet from "../../components/Wallet";
import WalletEmpty from "../../components/WalletEmpty";

const Wallets = () => {
  
  const [wallets, setWallets] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const token = localStorage.getItem('token');
  
  const listWallets = () => {
    
    api.get('wallets/', {
      
      headers: {
        Authorization: `Token ${token}`,
      }
    })
    .then((response) => setWallets(response.data))
  }

  const seeAllTransactions = (id) => {
    
    api.get(`wallets/${id}/`, {
      
      headers: {
        Authorization: `Token ${token}`,
      }
    })
    .then((response) => setTransactions(response.data.transactions))
  }

  console.log(transactions)
  
  useEffect(() => {
    
    listWallets()

  }, [])
  
  return (
    <Page>
      <HeaderSection/>
      
      {wallets.length > 0 ? 
        
        <Wallet listWallets={wallets} seeAll={seeAllTransactions} modalShow={modalShow} setModalShow={setModalShow} />
    
      :
      
        <WalletEmpty/>
      }
      
    </Page>
  );
};

export default Wallets;
