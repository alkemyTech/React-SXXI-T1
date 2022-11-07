import { privateRoutes } from "models/routes";
import { Route } from "react-router-dom";
import { RoutesNoMatch } from "utilities/routesNoMatch.util";
import SlidesForm from "./Slides/PrivateSlides";

const BackOfficeRoutes = () => {
  return (
    <RoutesNoMatch>
      <Route path={privateRoutes.SLIDESFORM} element={<SlidesForm />} />
      <Route path={privateRoutes.SLIDESFORMWITHID} element={<SlidesForm />} />
    </RoutesNoMatch>
  );
};

export default BackOfficeRoutes;
