import { useState } from "react";
import api from "../../api";
import { useUser } from "../../Providers/user";
import { CryptoCardDiv } from "./styled";
import { toast } from "react-toastify";

const CryptoMarketCard = ({ crypto }) => {
  const [qtd, setQtd] = useState(0);
  const { userWallets, getUserWallets } = useUser();

  const buyCrypto = (e) => {
    const crypto_ticket = e.target.value;
    const crypto_name = e.target.name;

    const walletExist = userWallets.filter(
      (wal) => wal.asset_ticket == crypto_ticket.toUpperCase()
    );

    if (walletExist[0]) {
      api
        .post("transactions/", {
          wallets: walletExist[0].id,
          quantity: qtd,
          exchange: "buy",
        })
        .then((res) => {
          getUserWallets();
          toast.success(
            `Compra de ${walletExist[0].name} realizada com sucesso! QTD - ${res.data.quantity} TOTAL - R$ ${res.data.total_value}`
          );
        });
    } else {
      api
        .post("wallets/", {
          name: crypto_name,
          asset_ticket: crypto_ticket,
        })
        .then((res) => {
          api
            .post("transactions/", {
              wallets: res.data.id,
              quantity: qtd,
              exchange: "buy",
            })
            .then((res) => {
              getUserWallets();
              toast.success(
                `Compra de ${crypto_name} realizada com sucesso! QTD - ${res.data.quantity} TOTAL - R$ ${res.data.total_value}`
              );
            })
            .catch((_) => {
              toast.error(
                `Limite de requisição atingido, tente novamente em 1 minuto.`
              );
            });
        })
        .catch((_) => {
          toast.error(`Esta Crypto ainda não esta disponivel para negociação!`);
        });
    }

    setQtd(0);
  };

  return (
    <CryptoCardDiv>
      <div className="infoSec">
        <img src={crypto.image.small} alt={`${crypto.name} logo`} />
        <div className="textInfoSec">
          <h3>{crypto.name}</h3>
          <span>{crypto.symbol}</span>
        </div>
      </div>
      <div className="priceSec">
        <span>Preço: </span>
        <span className="priceSpan">
          {crypto.market_data.current_price.brl.toFixed(4)} BRL
        </span>
      </div>
      <div className="buySection">
        <label>Qtd: </label>
        <input
          value={qtd}
          type="number"
          min={0}
          onChange={(e) => setQtd(e.target.value)}
        />
        <button
          value={crypto.symbol}
          name={crypto.name}
          onClick={(e) => buyCrypto(e)}
        >
          Buy
        </button>
      </div>
    </CryptoCardDiv>
  );
};

export default CryptoMarketCard;
