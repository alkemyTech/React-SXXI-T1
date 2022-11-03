import { arrowLeftIcon } from "assets/images";
import { routes } from "models/routes";

export const backToHomeSchema = {
  linkClass: "btn w-100",
  color: "default",
  background: "default",
  text: "Volver a inicio",
  icon: arrowLeftIcon,
  to: routes.HOME,
};
