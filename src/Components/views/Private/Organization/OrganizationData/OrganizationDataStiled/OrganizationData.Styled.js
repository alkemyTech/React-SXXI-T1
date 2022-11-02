import styled from "styled-components";
import { Button } from "Components/GlobalComponents/CustomButton/styled-components/Button.styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3rem 0;
    gap: 1.2rem;
`;
//#F9FE00
export const Image = styled.img`
    width: 500px;
    height: 500px;
`;

export const ContainerEditInf = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const EditButton = styled(Button)`
    background-color: #F9FE00;
    border: 1px solid #F9FE00;
    &:hover {
        background-color: white;
        border: 1px solid black;
    }
`;