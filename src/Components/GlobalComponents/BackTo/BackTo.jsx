import { LinkReactRouter } from "../LinkReactRouter/LinkReactRouter";
import { backToHomeSchema } from "./utilities/backToHomeSchema.util";

export const BackTo = ({ wrapLink = "", text = "Volver", to }) => {
  return (
    <LinkReactRouter
      wrapLink={"col col-7 col-sm-4 col-md-3 " + wrapLink}
      linkClass={backToHomeSchema.linkClass}
      color={backToHomeSchema.color}
      background={backToHomeSchema.background}
      text={text}
      icon={backToHomeSchema.icon}
      to={to}
    />
  );
};
