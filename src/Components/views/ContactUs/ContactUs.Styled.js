import styled from "styled-components";
import { Form } from "react-bootstrap";

export const ContainerContactStyled = styled.div({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
});

export const TitleContactStyled = styled.h1({
    display: 'flex',
});

export const ContactFormStyled = styled(Form)`
    diplay: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem
`;