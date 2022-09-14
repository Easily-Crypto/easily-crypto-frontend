import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import HeaderSection from "../../components/Header";
import { Page } from "../../components/Page";
import Wallet from "../../components/Wallet";
import WalletEmpty from "../../components/WalletEmpty";
import { useUser } from "../../Providers/user";

const Wallets = () => {
  // const [wallets, setWallets] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const { userInfo, isLoggedIn } = useUser();

  const navigate = useNavigate();

  const { userWallets, setUserWallets, getUserWallets } = useUser();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
    getUserWallets();
  }, []);

  const token = localStorage.getItem("token");

  // const listWallets = () => {
  //   api
  //     .get("wallets/", {
  //       headers: {
  //         Authorization: `Token ${token}`,
  //       },
  //     })
  //     .then((response) => setWallets(response.data));
  // };

  const seeAll = (id) => {
    api
      .get(`wallets/${id}/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => setTransactions(response.data.transactions));
  };

  // console.log(wallet[1].transactions)
  console.log(transactions);

  return (
    <Page>
      <HeaderSection />

      {userWallets ? (
        <Wallet
          listWallets={userWallets}
          seeAll={seeAll}
          modalShow={modalShow}
          setModalShow={setModalShow}
        />
      ) : (
        <WalletEmpty />
      )}
    </Page>
  );
};

export default Wallets;
