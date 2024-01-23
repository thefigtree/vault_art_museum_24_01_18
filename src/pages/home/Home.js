import styled from "styled-components";
import { Content } from "../../components/Content";

import { Header } from "../../components/Header";

const SHome = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Home = () => {
  return (
    <div>
      <SHome>
        <Header></Header>
        <Content></Content>
      </SHome>
    </div>
  );
};
