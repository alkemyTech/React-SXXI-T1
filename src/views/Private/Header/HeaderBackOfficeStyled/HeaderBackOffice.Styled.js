import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    height: 4rem;
    gap: 2rem;
    background-color: #0D6EFD;
    transition: 0.5s;
`;

export const Icon = styled.img`
    height: 30px;
    width: 30px;
`;

export const Button = styled.button`
    transition: 1s;
    border-radius: 50%;
    padding: 5px;
    margin: 4px 1px;
    &:hover {
        background-color: #0091ea;
    }
`;