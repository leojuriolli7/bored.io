import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;

  background-color: var(--background);
  text-align: center;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  display: flex;
  width: clamp(16rem, 26vw, 30.9rem);
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ActivityName = styled.h3`
  color: var(--green);
  font-size: 2rem;
  line-height: 40px;
`;

export const Description = styled.div`
  margin-top: 2rem;
`;

export const TypeText = styled.h4`
  color: var(--text);
`;

export const ParticipantsText = styled.p`
  color: var(--text);
`;

export const LearnMoreLink = styled.a`
  color: var(--green);
  &:hover {
    filter: brightness(1.2);
  }
`;

export const Button = styled.button`
  margin-top: 3rem;
  padding: 1.1rem 2.1rem;
  background-color: var(--green);
  border: 0;
  font-size: 20px;
  border-radius: 10px;
  transition: filter 0.15s;
  transition: transform 0.3s;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.1);
  }
`;
