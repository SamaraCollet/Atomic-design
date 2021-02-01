import { Container } from "../../Molecules/PriceCard/styles";

import ItemListCard from "../../Atoms/ItemListCard";

const ItemsListCard = ({ first, second, third, fourth }) => {
  return (
    <Container>
      <ItemListCard>{first}</ItemListCard>
      <ItemListCard>{second}</ItemListCard>
      <ItemListCard>{third}</ItemListCard>
      <ItemListCard>{fourth}</ItemListCard>
    </Container>
  );
};

export default ItemsListCard;
