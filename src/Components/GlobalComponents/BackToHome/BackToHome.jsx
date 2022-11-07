import { LinkReactRouter } from "../LinkReactRouter/LinkReactRouter";
import { backToHomeSchema } from "./utilities/backToHomeSchema.util";

export const BackToHome = ({ wrapLink = "" }) => {
  return (
    <LinkReactRouter
      wrapLink={wrapLink}
      linkClass={backToHomeSchema.linkClass}
      color={backToHomeSchema.color}
      background={backToHomeSchema.background}
      text={backToHomeSchema.text}
      icon={backToHomeSchema.icon}
      to={backToHomeSchema.to}
    />
  );
};
