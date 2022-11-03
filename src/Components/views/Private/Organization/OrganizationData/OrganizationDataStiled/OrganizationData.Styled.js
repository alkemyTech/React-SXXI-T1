import styled from "styled-components";
import { Button } from "Components/GlobalComponents/CustomButton/styled-components/Button.styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3rem 0;
    gap: 1.2rem;
`;
export const ContainerImage = styled.div`
    margin: 1rem 0;
    height: 300px;
    display: flex;
    justify-content: center;
`;
export const Image = styled.img`
    max-width: 400px;
    width: 100%;
    border-radius: 1rem;
    box-shadow: 0 0 8px 0 black;
`;

export const ContainerEditInf = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const EditButton = styled(Button)`
    &:hover {
        background-color: white;
    }
`;