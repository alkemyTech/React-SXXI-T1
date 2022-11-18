import { LinkReactRouter } from "Components/GlobalComponents/LinkReactRouter/LinkReactRouter";
import { OverlayToolTips } from "Components/GlobalComponents/OverlayToolTips/OverlayToolTips";

export const NavFooter = ({ children }) => {
  const _children = children.map((item, idx) => (
    <OverlayToolTips key={idx} strongTextToolTip={item.text}>
      <LinkReactRouter
        to={item.to}
        text={item.text}
        padding="5px 8px"
        wrapLink="wrap-link me-0 me-md-3 p-1 p-sm-2"
        background="none"
        border="none"
        color="light"
      />
    </OverlayToolTips>
  ));

  return _children;
};
