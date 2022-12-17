import { forwardRef } from "react";
import { Anchor } from "react-bootstrap";

export const AnchorTagWithRef = forwardRef(({ anchorClass = "", href, text }, ref) => (
  <Anchor className={anchorClass} href={href} rel="noopener noreferrer" target="_blank" ref={ref}>
    {text}
  </Anchor>
));
