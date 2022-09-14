import { WalletContainer } from "./style";

const Wallet = ({listWallets}) => {

    return (
        <WalletContainer>
        {listWallets.map(({id, asset_ticket, name, wallet_value, crypto_quantity}) => 

            <div key={id}>
                <h1>{name}</h1>
                <span>
                    <h3>{asset_ticket}</h3>
                    <p> Qtd: {Math.round(crypto_quantity)}</p>
                </span>
                <p>
                    Fundos: {parseInt(wallet_value).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    minimumFractionDigits: 2,
                  })}
                </p>
            </div>
      )}
        {/* <button onClick={listWallets}></button> */}
      </WalletContainer>
    )
}

export default Wallet;