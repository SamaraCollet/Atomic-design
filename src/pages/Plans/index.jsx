import { Container } from "./styles";
import Title from "../../components/Atoms/TitlePlans";
import Header from "../../components/Organisms/Header";
import Footer from "../../components/Organisms/Footer";
import Card from "../../components/Organisms/Card";

const Plans = () => {
  return (
    <Container>
      <Header />
      <Title title="Comece a comer saudável hoje" />
      <div className="section-plans">
        <Card
          title="Premio"
          price="R$399"
          per="/ mês"
          perMeal="Apenas R$13,30 por refeição"
          firstItem="1 refeição todo dia"
          secondItem="Pedidos 24h"
          thirdItem="Direito a todas as novas variedades"
          fourthItem="Entrega grátis"
        />
        <Card
          title="Pro"
          price="R$149"
          per="/ mês"
          perMeal="Apenas R$14.90 por refeição"
          firstItem="1 refeição 10 dias/mês"
          secondItem="Pedidos 24h"
          thirdItem="Direito a todas as novas variedades"
          fourthItem="Entrega grátis"
        />
        <Card
          title="Iniciante"
          price="R$19"
          per="/ refeição"
          perMeal="&nbsp;"
          firstItem="1 refeição"
          secondItem="Pedidos das 08h as 12h"
          thirdItem="&nbsp;"
          fourthItem="Entrega grátis"
        />
      </div>
      <Footer />
    </Container>
  );
};

export default Plans;
