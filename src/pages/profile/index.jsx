import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderSection from "../../components/Header";
import MyInfos from "../../components/MyInfos";
import { Page } from "../../components/Page";
import { UserContext, useUser } from "../../Providers/user";

const Profile = () => {
  const { userInfo, isLoggedIn } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <Page>
      <HeaderSection></HeaderSection>
      <MyInfos />
    </Page>
  );
};

export default Profile;
