import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components/Page";
import RegisterFormComponent from "../../components/RegisterForm/index.jsx";
import { useUser } from "../../Providers/user";

const Login = () => {
  const { getUserWallets, isLoggedIn, setIsLoggedIn } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    console.log(isLoggedIn);
    if (isLoggedIn) {
      navigate("/");
    }
  }, []);

  return (
    <Page>
      <RegisterFormComponent />
    </Page>
  );
};

export default Login;
