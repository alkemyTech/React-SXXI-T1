import { privateRoutes } from "models/routes";
import { Route } from "react-router-dom";
import { RoutesNoMatch } from "utilities/routesNoMatch.util";

import EditOrganizationForm from "./BackOffice/Organization/EditForm";
import ActivitiesForm from "./BackOffice/Acivities/ActivitiesForm";
import SlidesForm from "./Slides/SlidesForm";

const BackOfficeRoutes = () => {
  return (
    <RoutesNoMatch>
      <Route path={privateRoutes.SLIDESFORM} element={<SlidesForm />} />
      <Route path={privateRoutes.EDITORGANIZATIONFORM} element={<EditOrganizationForm />} />
      <Route path={privateRoutes.SLIDESFORMWITHID} element={<SlidesForm />} />
      <Route path={privateRoutes.ACTIVITIYFORM} element={<ActivitiesForm />} />
      <Route path={privateRoutes.ACTIVITYEDITFORM } element={<ActivitiesForm />} />
    </RoutesNoMatch>
  );
};

export default BackOfficeRoutes;
