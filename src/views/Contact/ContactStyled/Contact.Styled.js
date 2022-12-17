import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0.5rem 0;
`;

export const Icon = styled.img`
  height: 20px;
  width: 20px;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(0 0 2px #808080);
  }
`;

export const ContainerIcon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 0.5rem;
  @media screen and (min-width: 576px) {
    width: 330px;
  }
`;

export const Paragraph1 = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;

  @media screen and (min-width: 420px) {
    font-size: 1.1rem;
  }
  @media screen and (min-width: 576px) {
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.4rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.8rem;
  }
`;
export const Paragraph2 = styled.p`
  font-size: 0.8rem;
  text-shadow: 1px 1px 2px grey;
  @media screen and (min-width: 420px) {
    font-size: 0.9rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.1rem;
  }
`;
