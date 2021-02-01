import { Container } from "./styles";

import PriceCard from "../../Molecules/PriceCard";
import ItemsListCard from "../../Molecules/ItemsListCard";
import Button from "../../Atoms/Button";

const Card = ({
  title,
  price,
  per,
  perMeal,
  firstItem,
  secondItem,
  thirdItem,
  fourthItem,
}) => {
  return (
    <Container>
      <PriceCard title={title} price={price} per={per} perMeal={perMeal} />
      <ItemsListCard
        first={firstItem}
        second={secondItem}
        third={thirdItem}
        fourth={fourthItem}
      ></ItemsListCard>

      <div>
        <Button>Assinar</Button>
      </div>
    </Container>
  );
};

export default Card;
