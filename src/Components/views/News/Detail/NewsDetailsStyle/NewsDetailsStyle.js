import styled from "styled-components";

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem 0;
`;

export const NewsCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f8f9fa;
  border-radius: 5px;
  box-shadow: 2px 2px 8px black;
  transition: 1s;
  @media screen and (min-width: 650px) {
    flex-direction: row;
    gap: 1rem;
  }
  @media screen and (min-width: 910px) {
    gap: 2.5rem;
  }
  &:hover {
    background-color: #028192;
    color: #f8f9fa;
  }
`;

export const NewsImage = styled.img`
  width: 100%;
  border-radius: 5px;
  @media screen and (min-width: 650px) {
    height: 280px;
    width: 350px;
  }
  @media screen and (min-width: 1000px) {
    height: 320px;
    width: 420px;
  }
  @media screen and (min-width: 1300px) {
    height: 380px;
    width: 520px;
  }
  @media screen and (min-width: 1400px) {
    height: 400px;
    width: 650px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  padding: 1.5rem 1rem;
  gap: 1rem;
  width: 100%;
  @media screen and (min-width: 650px) {
    height: 100%;
  }
`;

export const NewsTitle = styled.h3`
  font-size: 1.1rem;
  @media screen and (min-width: 375px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 800px) {
    font-size: 1.4rem;
  }
  @media screen and (min-width: 1100px) {
    font-size: 1.6rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 0.9rem;
  @media screen and (min-width: 375px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 800px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 1100px) {
    font-size: 1.4rem;
  }
`;

export const ContainerP = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const CotainerSkeleton = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem
    padding: 1rem
    background-color: #028192;
    border-radius: 5px; 
`;
