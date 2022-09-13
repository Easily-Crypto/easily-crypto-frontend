import { Header } from "./styled";
import { useNavigate } from "react-router-dom";
import api from "../../api";

const HeaderSection = () => {
  const navigate = useNavigate();

  return (
    <Header>
      <div>
        <h1>Easily Crypto</h1>

        <nav>
          <a href="#">Market</a>
          <a href="#">Wallets</a>
          <a href="#">Perfil</a>
        </nav>
        <button
          onClick={() => {
            localStorage.removeItem("token");

            api.defaults.headers.common = {
              Authorization: ``,
            };

            navigate("/login");
          }}
        >
          Log Out
        </button>
      </div>
    </Header>
  );
};

export default HeaderSection;
