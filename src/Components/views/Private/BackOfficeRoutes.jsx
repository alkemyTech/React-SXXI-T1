import { privateRoutes } from "models/routes";
import { Route } from "react-router-dom";
import { RoutesNoMatch } from "utilities/routesNoMatch.util";

import EditOrganizationForm from "./BackOffice/Organization/EditForm";
import ProyectsForm from "./BackOffice/Proyects/ProyectsForm";
import SlidesForm from "./Slides/SlidesForm";

const BackOfficeRoutes = () => {
  return (
    <RoutesNoMatch>
      <Route path={privateRoutes.SLIDESFORM} element={<SlidesForm />} />
      <Route path={privateRoutes.EDITORGANIZATIONFORM} element={<EditOrganizationForm />} />
      <Route path={privateRoutes.SLIDESFORMWITHID} element={<SlidesForm />} />
      <Route path={privateRoutes.CREATEPROJECT} element={<ProyectsForm />} />
      <Route path={privateRoutes.EDITPROJECTS} element={<ProyectsForm />} />
    </RoutesNoMatch>
  );
};

export default BackOfficeRoutes;
