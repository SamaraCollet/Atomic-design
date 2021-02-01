import { Container } from "./styles";
import { useHistory } from "react-router-dom";

const ItemMenu = ({ children, to }) => {
  const history = useHistory();

  const sendTo = (path) => () => history.push(path);
  return (
    <Container>
      <div onClick={sendTo(to)}>{children}</div>
    </Container>
  );
};

export default ItemMenu;
