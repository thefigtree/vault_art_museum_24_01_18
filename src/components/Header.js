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
    left: 50px;
  }
`;

const MenuBtn = styled.article`
  width: 50px;
  height: 50px;
  /* background-color: red; */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const LongMenuBtn = styled.div`
  width: 100%;
  height: 5%;
  background-color: black;
  margin-bottom: 7px;
  border-radius: 2px 0px 0px 2px;
`;

const ShortMenuBtn = styled.div`
  width: 55%;
  height: 5%;
  background-color: black;
  position: absolute;
  right: 0;
  margin-top: 7px;
  border-radius: 2px 0px 0px 2px;
`;

export const Header = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <SHeader
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <button onClick={toggleTheme}>Dark Mode</button>
      <h1>Vault Art Museum</h1>
      <MenuBtn>
        <LongMenuBtn
          style={{ backgroundColor: isDark ? "white" : "black" }}
        ></LongMenuBtn>
        <ShortMenuBtn
          style={{ backgroundColor: isDark ? "white" : "black" }}
        ></ShortMenuBtn>
      </MenuBtn>
    </SHeader>
  );
};
