import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../api";

import { toast } from "react-toastify";

import { AddressFormStyle } from "./styles";

const AddressFormComponent = ({ token }) => {
  const formSchema = yup.object().shape({
    address: yup.string().required("Campo obrigatório"),
    number: yup.string().required("Campo obrigatório"),
    zip_code: yup.string().required("Campo obrigatório"),
    district: yup.string().required("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
    state: yup.string().required("Campo obrigatório"),
    country: yup.string().required("Campo obrigatório"),
    complement: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    api
      .post("address/", data, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((res) => toast.success("Endereço criado com sucesso"))
      .catch((err) => console.log(err));
  };

  return (
    <AddressFormStyle onSubmit={handleSubmit(onSubmit)}>
      {errors.address && <span>{errors.address.message}</span>}
      <input {...register("address")} placeholder="Logradouro" />

      {errors.number && <span>{errors.number.message}</span>}
      <input type="number" {...register("number")} placeholder="Número" />

      {errors.zip_code && <span>{errors.zip_code.message}</span>}
      <input {...register("zip_code")} placeholder="Cep" />

      {errors.district && <span>{errors.district.message}</span>}
      <input {...register("district")} placeholder="Destrito" />

      {errors.city && <span>{errors.city.message}</span>}
      <input {...register("city")} placeholder="Cidade" />

      {errors.state && <span>{errors.state.message}</span>}
      <input {...register("state")} placeholder="Estado" />

      {errors.country && <span>{errors.country.message}</span>}
      <input {...register("country")} placeholder="Pais" />

      {errors.complement && <span>{errors.complement.message}</span>}
      <input
        {...register("complement")}
        placeholder="Complemento (opicional)"
      />

      <button type="submit">Enviar</button>
    </AddressFormStyle>
  );
};
export default AddressFormComponent;
