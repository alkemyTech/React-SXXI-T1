import { privateRoutes, routes } from "models/routes";
import { LinkReactRouter } from "../LinkReactRouter/LinkReactRouter";
import { backToHomeSchema } from "./utilities/backToHomeSchema.util";

export const BackTo = ({ wrapLink = "", to }) => {
  const whereBack = to
    ? routes.HOME
    : "/" + privateRoutes.BACKOFFICE + "dashboard";

  const whatText = to
    ? backToHomeSchema.homeText
    : backToHomeSchema.dashboardText;

  return (
    <LinkReactRouter
      wrapLink={wrapLink}
      linkClass={backToHomeSchema.linkClass}
      color={backToHomeSchema.color}
      background={backToHomeSchema.background}
      text={whatText}
      icon={backToHomeSchema.icon}
      to={whereBack}
    />
  );
};
