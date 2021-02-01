import styled from "styled-components";

export const Container = styled.a`
  height: 20px;
  color: #fff;
  flex-direction: row;
  margin: 22px 20px;
  padding-bottom: 2px;
  font-size: 1.2rem;
  cursor: pointer;

  :hover {
    border-bottom: 2px solid #187a0c;
  }

  :last-child {
    margin-right: 50px;
  }
`;

export default Container;
