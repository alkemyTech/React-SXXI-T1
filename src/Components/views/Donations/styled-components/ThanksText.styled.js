import styled from "styled-components";
import { fadeIn } from "styled-components/animation.styled";
import { SubtitleText } from "styled-components/App.styled";
import { themeColors } from "styled-components/Theme.styled";

export const ThanksText = styled(SubtitleText)`
  color: ${themeColors.white};
  backdrop-filter: blur(10px);
  padding: 5px;
  font-weight: 900;
  border-radius: 8px;
  ${fadeIn}
`;
