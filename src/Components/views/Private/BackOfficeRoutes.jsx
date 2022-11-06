import { privateRoutes } from "models/routes";
import { Route } from "react-router-dom";
import { RoutesNoMatch } from "utilities/routesNoMatch.util";

import EditMembersForm from "./BackOffice/Members/EditForm";
import EditOrganizationForm from "./BackOffice/Organization/EditForm";
import SlidesForm from "./Slides/SlidesForm";

const BackOfficeRoutes = () => {
  return (
    <RoutesNoMatch>
      <Route path={privateRoutes.SLIDESFORM} element={<SlidesForm />} />
      <Route path={privateRoutes.EDITMEMBERSFORM} element={<EditMembersForm />} />
      <Route path={privateRoutes.EDITORGANIZATIONFORM} element={<EditOrganizationForm />} />
      <Route path={privateRoutes.SLIDESFORMWITHID} element={<SlidesForm />} />
    </RoutesNoMatch>
  );
};

export default BackOfficeRoutes;
