import { LoginForm, InputLoginForm } from "./styled";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../api";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
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
    username: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  console.log(errors);
  const onSubmit = (data) => {
    api
      .post("login/", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.user_id);
        api.defaults.headers.common = {
          Authorization: `Token ${res.data.token}`,
        };
        toast.success("Login realizado com sucesso");
        navigate("/");
      })
      .catch((err) => toast.error("Usuário e/ou senha incorretos"));
  };

  return (
    <LoginForm onSubmit={handleSubmit(onSubmit)}>
      <h3>Easily Crypto</h3>
      <label>
        Usuário:{" "}
        {errors.username && (
          <span className="input-error">{errors.username.message}</span>
        )}
      </label>

      <InputLoginForm {...register("username")} />
      <label>
        Senha:{" "}
        {errors.password && (
          <span className="input-error">{errors.password.message}</span>
        )}
      </label>
      <InputLoginForm type="password" {...register("password")} />
      <button type="submit">Login</button>
      <span>
        Não possui uma conta ainda? <Link to="/register">Registre-se</Link>
      </span>
    </LoginForm>
  );
};

export default LoginFormComponent;
