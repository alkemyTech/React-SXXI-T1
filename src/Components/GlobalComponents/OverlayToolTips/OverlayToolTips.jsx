import { OverlayTrigger, Tooltip } from "react-bootstrap";

export const OverlayToolTips = ({
  children,
  initialTextToolTIp = "Ir a ",
  strongTextToolTip = "",
  direction = "top",
}) => {
  return (
    <OverlayTrigger
      placement={direction}
      overlay={
        <Tooltip>
          {initialTextToolTIp} <strong>{strongTextToolTip}</strong>
        </Tooltip>
      }
    >
      <div>{children}</div>
    </OverlayTrigger>
  );
};
