import { useContext, useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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

const HiddenMenu = styled.nav`
  width: 100%;
  height: 100vh;
  background-color: black;
  position: absolute;
  top: 0;
  left: ${(props) => props.$isActive};
  transition: all 1.5s;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
`;

const Close = styled.div`
  width: 50px;
  height: 50px;
  /* background-color: rebeccapurple; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
  /* top: 0;
  right: 0; */
`;

export const Header = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const [active, setActive] = useState("100%");

  return (
    <div>
      <SHeader
        style={{
          backgroundColor: isDark ? "black" : "white",
          color: isDark ? "white" : "black",
        }}
      >
        <button onClick={toggleTheme}>Dark Mode</button>
        <h1>Vault Art Museum</h1>
        <MenuBtn onClick={() => setActive("0")}>
          <LongMenuBtn
            style={{ backgroundColor: isDark ? "white" : "black" }}
          ></LongMenuBtn>
          <ShortMenuBtn
            style={{ backgroundColor: isDark ? "white" : "black" }}
          ></ShortMenuBtn>
        </MenuBtn>

        <HiddenMenu $isActive={active}>
          <Close onClick={() => setActive("100%")}>
            <FontAwesomeIcon
              icon={faXmark}
              style={{ fontSize: "50px", color: "white" }}
            ></FontAwesomeIcon>
          </Close>
        </HiddenMenu>
      </SHeader>
    </div>
  );
};
