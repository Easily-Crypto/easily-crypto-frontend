import { RegisterForm, InputRegisterForm } from "./style";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const RegisterFormComponent = () => {
  const formSchema = yup.object().shape({
    username: yup.string().required("Digite um nome de usuário"),
    first_name: yup.string().required("Digite seu primeiro nome"),
    last_name: yup.string().required("Digite seu sobrenome"),
    email: yup.string().required("Digite um email").email("Email Inválido"),
    birth_date: yup.string().required("Informe seu nascimento"),
    cpf: yup.string().required("Digite um CPF válido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(/(?=.*[a-z])/, "Deve conter pelo menos uma letra minuscula")
      .matches(/(?=.*[A-Z])/, "Deve conter pelo menos uma letra maiuscula")
      .matches(/(?=.*[0-9])/, "Deve conter pelo menos um numero")
      .matches(/(?=.*[!$*&@#])/, "Deve conter pelo menos um caracter especial")
      .min(8, "Deve ter no mínimo 8 caracteres"),
    passwordConfirmation: yup
      .string()
      .required("Confirme sua senha")
      .oneOf([yup.ref("password"), null], "As senhas não coincidem"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

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
