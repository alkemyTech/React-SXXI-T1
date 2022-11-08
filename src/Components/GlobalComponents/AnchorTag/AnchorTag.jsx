import { Anchor } from "react-bootstrap";

export const AnchorTag = ({ anchorClass = "", href, text }) => {
  console.log(text);
  return (
    <Anchor
      className={anchorClass}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {text}
    </Anchor>
  );
};
