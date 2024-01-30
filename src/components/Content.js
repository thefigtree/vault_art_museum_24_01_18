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
  width: 33.333%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-right: 2px solid gray;
`;

const Title = styled.h3`
  font-size: 25px;
  /* letter-spacing: -3px; */
  /* background-color: aqua; */
`;

const Desc = styled.p`
  margin-bottom: 100px;
  padding-top: 150px;
  /* background-color: aqua; */
  font-size: 18px;
  line-height: 26px;
  /* text-align: center; */
  /* line-height: 2em; */
`;

const Part = styled.h2`
  font-size: 300px;
  /* background-color: aqua; */
`;

export const Content = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div>
      <SContent
        style={{
          backgroundColor: isDark ? "black" : "white",
          color: isDark ? "white" : "black",
        }}
      >
        {contentsApi.map((con) => (
          <Con key={con.id}>
            <Title>{con.title}</Title>
            <Desc>{con.desc.slice(0, 40) + "..."}</Desc>
            <Part>{con.part}</Part>
          </Con>
        ))}
      </SContent>
    </div>
  );
};
