import { Header } from "./styled";
import { useNavigate, Link } from "react-router-dom";
import api from "../../api";
import { useContext } from "react";
import { UserContext } from "../../Providers/user";

const HeaderSection = () => {
  const navigate = useNavigate();
  const { getUserInfo } = useContext(UserContext);
  return (
    <Header>
      <div>
        <h1>Easily Crypto</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/market">Market</Link>
          <Link to="/wallets">Wallets</Link>
          <Link to="/profile" onClick={() => getUserInfo()}>
            Perfil
          </Link>
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
