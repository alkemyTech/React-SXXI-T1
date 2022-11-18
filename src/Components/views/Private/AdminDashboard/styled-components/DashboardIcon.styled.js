import { activityIcon } from "assets/images";
import styled from "styled-components";

export const DashboardIcon = styled.div`
  background-image: url(${({ image }) => (image ? image : "not image")});
  background-size: ${({ backgroundSize }) => backgroundSize || "cover"};
  height: ${({ height }) => height || "50px"};
  width: ${({ width }) => width || "100%"};
`;
