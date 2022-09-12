import { LoginForm, InputLoginForm } from "./styled";

const LoginFormComponent = () => {
  return (
    <LoginForm>
      <h3>Easily Crypto</h3>
      <label>Usuário:</label>
      <InputLoginForm />
      <label>Senha:</label>
      <InputLoginForm type="password" />
      <button>Login</button>
      <span>
        Não possui uma conta ainda? <a href="#">Registre-se</a>
      </span>
    </LoginForm>
  );
};

export default LoginFormComponent;
