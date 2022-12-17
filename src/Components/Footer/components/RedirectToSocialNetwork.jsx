import { AnchorTag } from "Components/AnchorTag/AnchorTag";
import { OverlayToolTips } from "Components/OverlayToolTips/OverlayToolTips";

export const RedirectToSocialNetwork = ({ children }) => {
  const _children = children.map((socialNet, idx) => (
    <OverlayToolTips key={idx} strongTextToolTip={socialNet.text}>
      <AnchorTag anchorClass="me-1 me-sm-2" href={socialNet.href} text={socialNet.icon} />
    </OverlayToolTips>
  ));

  return _children;
};
