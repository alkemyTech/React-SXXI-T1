import { Card } from "react-bootstrap";
import styled, { css } from "styled-components";
import { fadeIn } from "styled-components/animation.styled";
import { themeColors } from "styled-components/Theme.styled";
import { SubtitleText, InputTexts } from "styled-components/App.styled.js";

const cardStyles = {
  veryDarkBlue: "hsl(232, 19%, 15%)",
  darkDesaturatedBlue: "hsl(228, 28%, 20%)",
  blue: "hsl(208, 92%, 53%)",
  lightBlue: "hsl(203, 89%, 53%)",
  betweenBlueGreed: "hsla(187, 97%, 29%, 1)",
  LimeGreen: "hsl(163, 72%, 41%)",
  golden: "#CDA156",
  gray: "hsl(230, 22%, 74%)",
  lightGray: "hsl(216, 0%, 71%)",
};

const styles = {
  default: {
    background: themeColors.white,
    color: cardStyles.darkDesaturatedBlue,
    border: cardStyles.veryDarkBlue,
  },
  blue: {
    background: cardStyles.blue,
    color: themeColors.white,
    border: cardStyles.lightBlue,
  },
  gold: {
    background: cardStyles.golden,
    color: cardStyles.veryDarkBlue,
    border: cardStyles.darkDesaturatedBlue,
  },
  green: {
    background: cardStyles.betweenBlueGreed,
    color: themeColors.white,
    border: cardStyles.LimeGreen,
  },
};

const whatStyle = css`
  background: ${(props) => styles[props.type]["background"]};
  color: ${(props) => styles[props.type]["color"]} !important;
`;

const CustomCard = styled(Card)`
  ${whatStyle};
  border: 1px solid ${(props) => styles[props.type]["border"]};
  filter: drop-shadow(0px 5px 5px ${cardStyles.veryDarkBlue});
  transition: 5s;
  ${fadeIn}
`;

const CardBody = styled.div`
  transition: 5s;
  ${fadeIn}
`;

const CardFooter = styled.div`
  transition: 5s;
  ${fadeIn}
`;

const CardSubTitleText = styled(SubtitleText)`
  color: ${(props) => styles[props.type]["color"]};
`;

const CardText = styled(InputTexts)`
  color: ${(props) => styles[props.type]["color"]};
`;

export {
  CardBody,
  CardFooter,
  CustomCard,
  CardSubTitleText,
  CardText,
  whatStyle,
};
