import { CgSmileSad } from 'react-icons/cg';
import { WalletContainer } from "../Wallet/style";
import { WalletEmptyContainer } from "./style";


const WalletEmpty = () => {
    
    return (
        <WalletContainer>
          <WalletEmptyContainer >
            <h3> Ops, tudo muito calmo por aqui... <CgSmileSad/></h3>
            <p> Vá até Market e compre seu primeiro criptoativo com até 50% OFF !!! </p>
          </WalletEmptyContainer>
        </WalletContainer>
    )
}

export default WalletEmpty;