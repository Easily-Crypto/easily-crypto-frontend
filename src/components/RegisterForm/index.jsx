import { RegisterForm, InputRegisterForm } from "./style";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api";

const RegisterFormComponent = () => {
  const navigator = useNavigate();
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
  console.log(errors);
  const handleRegister = (data) => {
    api
      .post("users/register/", data)
      .then((res) => {
        console.log("oi");
        return navigator("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <RegisterForm onSubmit={handleSubmit(handleRegister)}>
      <h3>Easily Crypto</h3>
      <label>Nome:</label>
      <InputRegisterForm {...register("first_name")} />
      <label>Sobrenome:</label>
      <InputRegisterForm {...register("last_name")} />
      <label>Nome de usuário:</label>
      <InputRegisterForm {...register("username")} />
      <label>E-mail:</label>
      <InputRegisterForm {...register("email")} />
      <label>Data de nascimento:</label>
      <InputRegisterForm {...register("birth_date")} />
      <label>CPF:</label>
      <InputRegisterForm {...register("cpf")} />
      <label>Senha:</label>
      <InputRegisterForm type="password" {...register("password")} />
      <label>Confirme sua senha:</label>
      <InputRegisterForm
        type="password"
        {...register("passwordConfirmation")}
      />
      <button type="submit">Registrar</button>
      <span>
        Já possui uma conta? <Link to="/login">Entrar</Link>
      </span>
    </RegisterForm>
  );
};

export default RegisterFormComponent;
