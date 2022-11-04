import { privateRoutes } from "models/routes";
import { Route } from "react-router-dom";
import { RoutesNoMatch } from "utilities/routesNoMatch.util";
import CategoriesForm from "../Categories/CategoriesForm";
import SlidesForm from "./Slides/SlidesForm";

const BackOfficeRoutes = () => {
  return (
    <RoutesNoMatch>
      <Route path={privateRoutes.SLIDESFORM} element={<SlidesForm />} />
      <Route path={privateRoutes.SLIDESFORMWITHID} element={<SlidesForm />} />
      <Route path={privateRoutes.CREATECATEGORY} element={<CategoriesForm />} />
      <Route path={privateRoutes.EDITCATEGORY} element={<CategoriesForm />} />
    </RoutesNoMatch>
  );
};

export default BackOfficeRoutes;
