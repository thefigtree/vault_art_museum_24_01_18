import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const SHeader = styled.header`
  width: 100%;
  height: 80px;
  border-bottom: 2px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <SHeader
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>Vault Art Museun</h1>
    </SHeader>
  );
};
