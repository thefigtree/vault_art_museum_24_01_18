import styled from "styled-components";
import { Content } from "../../components/Content";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

const SHome = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Home = ({ isDark, setIsDark }) => {
  return (
    <div>
      <SHome>
        <Header isDark={isDark}></Header>
        <Content isDark={isDark}></Content>
        <Footer isDark={isDark} setIsDark={setIsDark}></Footer>
      </SHome>
    </div>
  );
};
