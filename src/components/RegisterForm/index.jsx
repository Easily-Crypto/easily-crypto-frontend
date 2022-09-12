import { RegisterForm, InputRegisterForm } from "./style";

const RegisterFormComponent = () => {
  return (
    <RegisterForm>
      <h3>Easily Crypto</h3>
      <label>Nome:</label>
      <InputRegisterForm />
      <label>Sobrenome:</label>
      <InputRegisterForm />
      <label>Nome de usuário:</label>
      <InputRegisterForm />
      <label>E-mail:</label>
      <InputRegisterForm />
      <label>Data de nascimento:</label>
      <InputRegisterForm />
      <label>CPF:</label>
      <InputRegisterForm />
      <label>Senha:</label>
      <InputRegisterForm type="password" />
      <label>Confirme sua senha:</label>
      <InputRegisterForm type="password" />
      <button>Registrar</button>
      <span>
        Já possui uma conta? <a href="#">Entrar</a>
      </span>
    </RegisterForm>
  );
};

export default RegisterFormComponent;
