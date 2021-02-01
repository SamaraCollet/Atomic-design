import { Container } from "./styles";

const ItemListCard = ({ children }) => {
  return (
    <Container>
      <li>{children}</li>
    </Container>
  );
};

export default ItemListCard;
