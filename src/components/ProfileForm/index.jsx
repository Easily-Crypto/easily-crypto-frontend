import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { ProfileFormStyle } from "./style";
import api from "../../api";
import { toast } from "react-toastify";

const ProfileFormComponent = ({ user_id, user_token }) => {
  const formSchema = yup.object().shape({
    username: yup.string(),
    first_name: yup.string(),
    last_name: yup.string(),
    email: yup.string().email("Email Inválido"),
    birth_date: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleRegister = (data) => {
    const new_data = {};
    if (data.first_name.trim() != "") {
      new_data.first_name = data.first_name.trim();
    }
    if (data.last_name.trim() != "") {
      new_data.last_name = data.last_name.trim();
    }
    if (data.username.trim() != "") {
      new_data.username = data.username.trim();
    }
    if (data.email.trim() != "") {
      new_data.email = data.email.trim();
    }
    if (data.birth_date.trim() != "") {
      new_data.birth_date = data.birth_date.trim();
    }
    if (Object.keys(new_data).length == 0) {
      console.log(new_data);
      return toast.info("Você deve preencher algum campo");
    }
    api
      .patch(`users/${user_id}/`, new_data, {
        headers: { Authorization: `Token ${user_token}` },
      })
      .then((res) => {
        toast.success("Usuário atualizado com sucesso");
        localStorage.setItem("user_info", JSON.stringify(res.data));
      })
      .catch((err) => console.log(err));
  };
  return (
    <ProfileFormStyle onSubmit={handleSubmit(handleRegister)}>
      <input {...register("first_name")} placeholder="Primeiro nome" />

      <input {...register("last_name")} placeholder="Ultimo nome" />

      <input {...register("username")} placeholder="Nome de usuário" />

      <input {...register("email")} placeholder="E-mail" />

      <input {...register("birth_date")} placeholder="Data de nascimento" />

      <button type="submit">Editar perfil</button>
    </ProfileFormStyle>
  );
};

export default ProfileFormComponent;
