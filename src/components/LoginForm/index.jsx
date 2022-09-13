import { LoginForm, InputLoginForm } from "./styled";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../api";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginFormComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  const formSchema = yup.object().shape({
    username: yup.string().required("Digite seu usuário"),
    password: yup.string().required("Digite sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    api.post("login/", data).then((res) => {
      localStorage.setItem("token", res.data.token);

      api.defaults.headers.common = {
        Authorization: `Token ${res.data.token}`,
      };

      navigate("/");
    });
  };

  return (
    <LoginForm onSubmit={handleSubmit(onSubmit)}>
      <h3>Easily Crypto</h3>
      <label>Usuário:</label>
      <InputLoginForm {...register("username")} />
      <label>Senha:</label>
      <InputLoginForm type="password" {...register("password")} />
      <button type="submit">Login</button>
      <span>
        Não possui uma conta ainda? <Link to="/register">Registre-se</Link>
      </span>
    </LoginForm>
  );
};

export default LoginFormComponent;
