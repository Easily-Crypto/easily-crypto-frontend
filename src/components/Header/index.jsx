import { Header } from "./styled";

const HeaderSection = () => {
  return (
    <Header>
      <div>
        <h1>Easily Crypto</h1>

        <nav>
          <a href="#">Market</a>
          <a href="#">Wallets</a>
          <a href="#">Perfil</a>
        </nav>
        <button>Log Out</button>
      </div>
    </Header>
  );
};

export default HeaderSection;
