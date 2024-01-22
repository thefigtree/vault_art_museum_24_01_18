import styled from "styled-components";

const SContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export const Content = () => {
  return (
    <SContent>
      <p>Vault Art Museum에 오신 걸 환영합니다.</p>
    </SContent>
  );
};
