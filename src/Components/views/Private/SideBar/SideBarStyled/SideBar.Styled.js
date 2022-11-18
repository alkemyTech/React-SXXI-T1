import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ContainerLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const NavLinkStyled = styled(NavLink)`
    display: flex;
    align-items: center;    
    color: black;
    gap: 1rem;
    &:hover {
        color: white;
    }
    &.active{
        color: blue;
    }
`;

export const IconAndLink = styled.div`
    display: flex;
    align-items: center;
    height: 2.5rem;
    padding-left: 1rem;
    &:hover {
        background: #2979ff;
    }
`;

export const Icon = styled.img`
    height: 25px;
    width: 25px;
`;