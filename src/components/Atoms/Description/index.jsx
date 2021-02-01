import { Container } from "./styles";

const Description = ({ children }) => {
  return (
    <Container>
      <p>{children}</p>
    </Container>
  );
};

export default Description;
