import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    transition: 0.5s;
`;

export const Icon = styled.img`
    height: 25px;
    width: 25px;
`;

export const Button = styled.button`
    transition: 1s;
    border-radius: 15%;
    padding: 5px;
    margin: 4px 1px;
    &:hover {
        background-color: #e0e0e0;
    }
`;