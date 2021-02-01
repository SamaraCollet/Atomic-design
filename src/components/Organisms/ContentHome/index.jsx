import { Container } from "./styles";
import Button from "../../Atoms/Button";
import TextHome from "../../Molecules/TextHome";

const ContentHome = () => {
  return (
    <Container>
      <TextHome />
      <Button>Peça a sua!</Button>
    </Container>
  );
};

export default ContentHome;
