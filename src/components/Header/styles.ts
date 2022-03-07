import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--background);
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem 0 0.8rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderLogo = styled.img`
  transition: 0.2s;
  :hover {
    cursor: pointer;
    transform: scale(1.03);
  }
`;
