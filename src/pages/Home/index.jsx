import { Container } from "./styles";
import Header from "../../components/Organisms/Header";
import ContentHome from "../../components/Organisms/ContentHome";
import Footer from "../../components/Organisms/Footer";

const Home = () => {
  return (
    <Container imgUrl={process.env.PUBLIC_URL + "/lunch-box-comp-min.jpg"}>
      <Header />
      <ContentHome />
      <Footer />
    </Container>
  );
};

export default Home;
