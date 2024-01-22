import styled from "styled-components";

const SFooter = styled.footer`
  width: 100%;
  height: 80px;
  border-top: 2px solid gray;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  button {
    padding: 10px;
    margin-right: 30px;
  }
`;

export const Footer = ({ isDark, setIsDark }) => {
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <SFooter
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
      }}
    >
      <button onClick={toggleTheme}>Dark Mode</button>
    </SFooter>
  );
};
