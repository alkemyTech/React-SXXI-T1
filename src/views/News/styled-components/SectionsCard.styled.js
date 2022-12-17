import { Card } from "react-bootstrap";
import styled from "styled-components";
import { fadeIn } from "styled-components/animation.styled";

const CardBody = styled(Card.Body)`
  transition: 0.5s;
  ${fadeIn}
`;

const CardFooter = styled(Card.Footer)`
  transition: 0.5s;
  ${fadeIn}
`;

export { CardBody, CardFooter };
