import styled from "styled-components";
import { Button } from "Components/CustomButton/styled-components/Button.styled";
import { themeColors } from "styled-components/Theme.styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
  gap: 1.2rem;
`;

export const Container1 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  background-color: #c0c0c021;
  padding: 1rem;
  @media screen and (min-width: 600px) {
    padding: 1.8rem;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 120px;
  height: 100px;
  border-radius: 10px;
  box-shadow: 0 0 12px #c0c0c0;
  @media screen and (min-width: 375px) {
    width: 230px;
    height: 170px;
  }
  @media screen and (min-width: 600px) {
    width: 330px;
    height: 220px;
  }
  @media screen and (min-width: 920px) {
    width: 400px;
    height: 260px;
  }
`;

export const ContainerEditInf = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  gap: 1rem;
`;

export const Paragraph = styled.p`
  font-size: 0.7rem;
  @media screen and (min-width: 375px) {
    font-size: 0.9rem;
  }
  @media screen and (min-width: 600px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 920px) {
    font-size: 1.2rem;
  }
`;

export const ButtonEdit = styled(Button)`
  background-color: ${themeColors.yellow};
  border: 1px solid ${themeColors.yellow};
  &:hover {
    background-color: ${themeColors.black};
    color: ${themeColors.yellow};
    border: 1px solid ${themeColors.yellow};
  }
`;
