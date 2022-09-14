import { useState } from "react";
import { Container } from "./styles";
import AddressFormComponent from "../AddressForm";
import ProfileFormComponent from "../ProfileForm";
import CardInfo from "../CardInfo";
const MyInfos = () => {
  const [addAddress, setAddAddress] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [profile, setProfile] = useState(true);
  return (
    <Container>
      <h2>Edite seu perfil</h2>
      <section>
        <nav>
          <p
            onClick={() => {
              setAddAddress(false);
              setEditProfile(false);
              setProfile(true);
            }}
          >
            Ver meu perfil
          </p>
          <p
            onClick={() => {
              setAddAddress(false);
              setEditProfile(true);
              setProfile(false);
            }}
          >
            Editar meu perfil
          </p>
          <p
            onClick={() => {
              setAddAddress(true);
              setEditProfile(false);
              setProfile(false);
            }}
          >
            Editar meu endereço
          </p>
        </nav>
        {addAddress && (
          <AddressFormComponent token={localStorage.getItem("token")} />
        )}
        {editProfile && (
          <ProfileFormComponent
            user_id={localStorage.getItem("user_id")}
            user_token={localStorage.getItem("token")}
          />
        )}
        {profile && <CardInfo />}
      </section>
    </Container>
  );
};
export default MyInfos;
