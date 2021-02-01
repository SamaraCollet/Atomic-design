import { Container } from "./styles";

const Button = ({ children, primary, color }) => {
  return (
    <Container primary={primary} color={color}>
      <span>{children}</span>
    </Container>
  );
};

export default Button;
