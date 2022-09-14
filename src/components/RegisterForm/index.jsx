import { RegisterForm, InputRegisterForm } from "./style";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api";
import { toast } from "react-toastify";
import { useUser } from "../../Providers/user";
import { useEffect } from "react";

const RegisterFormComponent = () => {
  const navigator = useNavigate();

  const { getUserWallets, isLoggedIn, setIsLoggedIn } = useUser();

  useEffect(() => {
    console.log(isLoggedIn);
    if (isLoggedIn) {
      navigator("/");
    }
  }, []);

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
      .matches(/(?=.*[a-z])/, "Requer uma letra minuscula")
      .matches(/(?=.*[A-Z])/, "Requer uma letra maiuscula")
      .matches(/(?=.*[0-9])/, "Requer um numero")
      .matches(/(?=.*[!$*&@#])/, "Requer um caracter especial")
      .min(8, "Requer mínimo de 8 caracteres"),
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

  const handleRegister = (data) => {
    api
      .post("users/register/", data)
      .then((res) => {
        toast.success("Cadastro realizdo com sucesso");
        return navigator("/login");
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.username) {
          toast.error("Nome de usuário indisponível");
        } else if (err.response.data.email) {
          toast.error("Email já utilizado");
        }
      });
  };
  return (
    <RegisterForm onSubmit={handleSubmit(handleRegister)}>
      <h3>Easily Crypto</h3>
      <label>
        Nome:{" "}
        {errors.first_name && (
          <span className="input-error">{errors.first_name.message}</span>
        )}
      </label>
      <InputRegisterForm {...register("first_name")} />
      <label>
        Sobrenome:{" "}
        {errors.last_name && (
          <span className="input-error">{errors.last_name.message}</span>
        )}
      </label>
      <InputRegisterForm {...register("last_name")} />
      <label>
        Nome de usuário:{" "}
        {errors.username && (
          <span className="input-error">{errors.username.message}</span>
        )}
      </label>
      <InputRegisterForm {...register("username")} />
      <label>
        E-mail:{" "}
        {errors.email && (
          <span className="input-error">{errors.email.message}</span>
        )}
      </label>
      <InputRegisterForm {...register("email")} />
      <label>
        Data de nascimento:{" "}
        {errors.birth_date && (
          <span className="input-error">{errors.birth_date.message}</span>
        )}
      </label>
      <InputRegisterForm {...register("birth_date")} />
      <label>
        CPF:{" "}
        {errors.cpf && (
          <span className="input-error">{errors.cpf.message}</span>
        )}
      </label>
      <InputRegisterForm {...register("cpf")} />
      <label>
        Senha:{" "}
        {errors.password && (
          <span className="input-error">{errors.password.message}</span>
        )}
      </label>
      <InputRegisterForm type="password" {...register("password")} />
      <label>
        Confirme sua senha:{" "}
        {errors.passwordConfirmation && (
          <span className="input-error">
            {errors.passwordConfirmation.message}
          </span>
        )}
      </label>
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
