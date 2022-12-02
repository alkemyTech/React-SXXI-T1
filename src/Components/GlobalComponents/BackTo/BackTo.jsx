import { LinkReactRouter } from "../LinkReactRouter/LinkReactRouter";
import { backToHomeSchema } from "./utilities/backToHomeSchema.util";

export const BackTo = ({ wrapLink = "", text = "Volver", to, color = undefined, background = undefined, icon = undefined }) => {
  return (
    <LinkReactRouter
      wrapLink={"col col-7 col-sm-4 col-md-3 " + wrapLink}
      linkClass={backToHomeSchema.linkClass}
      color={color || backToHomeSchema.color}
      background={background || backToHomeSchema.background}
      text={text}
      icon={icon || backToHomeSchema.icon}
      to={to}
    />
  );
};
