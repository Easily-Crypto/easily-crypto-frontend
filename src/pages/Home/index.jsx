import Bars from "../../assets/bars.svg";
import Bitcoin from "../../assets/bitcoin.svg";
import Graphic from "../../assets/graphic.svg";
import Person from "../../assets/person.svg";
import Card from "../../components/Card";
import HeaderSection from "../../components/Header";
import { Page } from "../../components/Page";
import { useUser } from "../../Providers/user";
import { Content, DescriptionSection, ImageSection } from "./styled";

const Home = () => {
  const { userInfo } = useUser();

  return (
    <Page>
      <HeaderSection />
      <Content>
        <DescriptionSection>
          <p>Olá, {userInfo.username}!</p>
          <Card
            img={Person}
            title="Valorizamos a relação entre cliente e empresa"
            description="Somos comprometidos com nossos clientes, e colocamos a transparência em primeiro lugar"
          ></Card>
          <Card
            img={Bars}
            title="Gerencie suas carteiras de criptomoeda"
            description="Aqui na Easily Crypto, você pode criar e gerenciar carteiras de criptomoeda de uma forma acessível"
          ></Card>
          <Card
            img={Graphic}
            title="Faça seus investimentos valerem a pena"
            description="Coloque seus investimentos em prática, e administre transações de maneira rápida e fácil"
          ></Card>
        </DescriptionSection>
        <ImageSection>
          <img src={Bitcoin} alt="two people between a bitcoin" />
        </ImageSection>
      </Content>
    </Page>
  );
};

export default Home;
