import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  height: 80px;
  border-bottom: 2px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = ({ isDark }) => {
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
