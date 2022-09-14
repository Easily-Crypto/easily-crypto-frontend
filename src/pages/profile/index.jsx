import { useContext, useEffect } from "react";
import HeaderSection from "../../components/Header";
import MyInfos from "../../components/MyInfos";
import { Page } from "../../components/Page";
import { UserContext } from "../../Providers/user";

const Profile = () => {
  const { getUserInfoProfile } = useContext(UserContext);
  useEffect(() => {
    getUserInfoProfile();
  }, []);

  return (
    <Page>
      <HeaderSection></HeaderSection>
      <MyInfos />
    </Page>
  );
};

export default Profile;
