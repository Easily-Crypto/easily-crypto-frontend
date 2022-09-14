import { Header } from "./styled";
import { useNavigate, Link } from "react-router-dom";
import api from "../../api";
import { useUser } from "../../Providers/user";

const HeaderSection = () => {
  const { setIsLoggedIn } = useUser();

  const navigate = useNavigate();

  return (
    <Header>
      <div>
        <h1>Easily Crypto</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/market">Market</Link>
          <Link to="/wallets">Wallets</Link>
          <Link to="/profile">Perfil</Link>
        </nav>
        <button
          onClick={() => {
            localStorage.clear();
            setIsLoggedIn(false);

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
