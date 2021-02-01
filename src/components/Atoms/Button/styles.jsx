import styled from "styled-components";

export const Container = styled.button`
  width: 220px;
  height: 45px;
  color: #fff;
  transition: 0.2s;
  border: 0px;
  cursor: pointer;
  font-size: 1.4rem;
  border-radius: 30px;
  border: 1px solid #98fc69;
  background-color: #40ac0e;

  :hover {
    background-color: #378f0f;
  }

  :focus {
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  }
`;

export default Container;
