import { cardStyles } from "Components/GlobalComponents/CustomCard/styled-components/SectionsCard.styled";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import { fadeIn } from "styled-components/animation.styled";
import { themeColors } from "styled-components/Theme.styled";

const DashCard = styled(Card)`
  border: 3px solid ${cardStyles.betweenBlueGreed};
  filter: drop-shadow(0px -5px 5px ${cardStyles.veryDarkBlue});
  background: ${cardStyles.betweenBlueGreed};
  color: ${themeColors.white};
  transition: 0.5s;
  ${fadeIn}

  &:hover {
    filter: drop-shadow(0px 6px 6px ${cardStyles.veryDarkBlue});
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export { DashCard };
