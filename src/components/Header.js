import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const SHeader = styled.header`
  width: 100%;
  height: 80px;
  position: relative;
  border-bottom: 2px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    padding: 10px;
    /* margin-right: 30px; */
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
`;

const MenuBtn = styled.article``;

export const Header = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <SHeader
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <button onClick={toggleTheme}>Dark Mode</button>
      <h1>Vault Art Museum</h1>
      <MenuBtn></MenuBtn>
    </SHeader>
  );
};
