import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  position: absolute;
  width: 100vw;
  bottom: 0;
  height: 45px;
  background-color: #111111;

  p {
    color: #636363;
    flex-direction: row;

    font-size: 1rem;
  }
`;

export default Container;
