import { useEffect } from "react";
import { useState } from "react";
import { Container } from "./style";

const CardInfo = () => {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("user_info"))
  );
  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("user_info")));
  }, []);

  return (
    <Container>
      {userInfo && (
        <>
          <section className="key-section">
            <p>Primeiro nome:</p>
            <p>Ultimo nome:</p>
            <p>Nome de usuário:</p>
            <p>Email:</p>
            <p>Data de nascimento:</p>
          </section>
          <section className="value-section">
            <p>{userInfo.first_name}</p>
            <p>{userInfo.last_name}</p>
            <p>{userInfo.username}</p>
            <p>{userInfo.email}</p>
            <p>{userInfo.birth_date}</p>
          </section>
        </>
      )}
    </Container>
  );
};
export default CardInfo;
