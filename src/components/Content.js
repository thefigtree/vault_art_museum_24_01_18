import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { contentsApi } from "../contentsApi";

const SContent = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  /* background-color: red; */
  position: relative;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`;

const Con = styled.div`
  width: 25%;
  /* flex-direction: column; */
  /* justify-content: space-between; */
`;

const Title = styled.h3``;

const Desc = styled.p``;

const Part = styled.h2``;

export const Content = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div>
      <SContent
        style={{
          backgroundColor: isDark ? "black" : "white",
        }}
      >
        {contentsApi.map((con) => (
          <Con key={con.id}>
            <Title>{con.title}</Title>
            <Desc>{con.desc}</Desc>
            <Part>{con.part}</Part>
          </Con>
        ))}
      </SContent>
    </div>
  );
};
