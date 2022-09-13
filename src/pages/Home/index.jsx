import HeaderSection from '../../components/Header';
import { Page } from '../../components/Page';
import Bitcoin from '../../assets/bitcoin.svg';
import Bars from '../../assets/bars.svg';
import Graphic from '../../assets/graphic.svg';
import { DescriptionSection, Content, ImageSection } from './styled';
import { useUser } from '../../Providers/user';
import Card from '../../components/Card';

const Home = () => {
  // const {userInfo} = useUser()
  // console.log(userInfo)
  return (
    <Page>
      <HeaderSection />
      <Content>
        <DescriptionSection>
          <p>Olá, fulano!</p>
          <Card
            img={Bars}
            title='Gerencie suas carteiras de criptomoeda'
            description='Aqui na Easily Crypto, você pode criar e gerenciar carteiras de criptomoeda de maneira fácil e acessível'
          ></Card>
          <Card
            img={Graphic}
            title='Faça seu investimento valer a pena'
            description='Somos comprometidos com nossos clientes, e colocamos a transparência em primeiro lugar'
          ></Card>
        </DescriptionSection>
        <ImageSection>
          <img src={Bitcoin} alt='two people between a bitcoin' />
        </ImageSection>
      </Content>
    </Page>
  );
};

export default Home;
