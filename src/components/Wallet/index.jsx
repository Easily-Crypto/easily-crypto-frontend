import { WalletContainer } from "./style";

const Wallet = ({listWallets}) => {

    return (
        <WalletContainer>
            {listWallets.map(({id, asset_ticket, name, wallet_value, crypto_quantity}) => 

                <li key={id}>
                    <span>
                        <h1>{name}</h1>
                        <h3>{asset_ticket}</h3>
                    </span>
                    <div>
                        <p> Qtd: {Math.round(crypto_quantity)}</p>
                        <p>
                            Fundos: {parseFloat(wallet_value).toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                                minimumFractionDigits: 2,
                            })}
                        </p>
                    </div>
                </li>
        )}
      </WalletContainer>
    )
}

export default Wallet;