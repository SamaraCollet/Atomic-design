import { Container } from "./styles";
import TitleCard from "../../Atoms/TitleCard";
import ValueCard from "../../Atoms/ValueCard";
import TextPlan from "../../Atoms/TextPlanMealCard";

const PriceCard = ({ title, price, per, perMeal }) => {
  return (
    <Container>
      <TitleCard>{title}</TitleCard>
      <ValueCard>
        {price}
        <span>{per}</span>
      </ValueCard>
      <TextPlan>{perMeal}</TextPlan>
    </Container>
  );
};

export default PriceCard;
