import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const SContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export const Content = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <SContent
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <p>Vault Art Museum에 오신 걸 환영합니다.</p>
    </SContent>
  );
};
