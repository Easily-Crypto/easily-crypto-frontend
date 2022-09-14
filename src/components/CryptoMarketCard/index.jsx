import { CryptoCardDiv } from "./styled";

const CryptoMarketCard = ({ crypto }) => {
  return (
    <CryptoCardDiv>
      <div class="infoSec">
        <img src={crypto.image.small} alt={`${crypto.name} logo`} />
        <div class="textInfoSec">
          <h3>{crypto.name}</h3>
          <span>{crypto.symbol}</span>
        </div>
      </div>
      <div class="priceSec">
        <span>Preço: </span>
        <span class="priceSpan">
          {crypto.market_data.current_price.brl.toFixed(4)} BRL
        </span>
      </div>
      <div class="buySection">
        <label>Qtd: </label>
        <input type="number" min={0} />
        <button>Buy</button>
      </div>
    </CryptoCardDiv>
  );
};

export default CryptoMarketCard;
