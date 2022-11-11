import { privateRoutes } from "models/routes";
import { Route } from "react-router-dom";
import { RoutesNoMatch } from "utilities/routesNoMatch.util";

import EditMembersForm from "./BackOffice/Members/EditForm";
import CategoriesForm from "../Categories/CategoriesForm";
import ActivitiesForm from "./BackOffice/Acivities/ActivitiesForm";
import EditOrganizationForm from "./BackOffice/Organization/EditForm";
import ProjectsForm from "./BackOffice/Projects/ProjectsForm";
import TestimonialsForm from "./BackOffice/Testimonials/TestimonialsForms";
import PrivateSlides from "./Slides/PrivateSlides";

const BackOfficeRoutes = () => {
  return (
    <RoutesNoMatch>
      <Route 
        path={privateRoutes.ACTIVITIESFORM} 
        element={<ActivitiesForm />} />
      <Route 
        path={privateRoutes.ACTIVITIESEDITFORM} 
        element={<ActivitiesForm />} />
      <Route 
        path={privateRoutes.CREATECATEGORY} 
        element={<CategoriesForm />} />
      <Route 
        path={privateRoutes.EDITCATEGORY} 
        element={<CategoriesForm />} />
      <Route
        path={privateRoutes.EDITMEMBERSFORM}
        element={<EditMembersForm />}
      />
      <Route
        path={privateRoutes.EDITORGANIZATIONFORM}
        element={<EditOrganizationForm />}
      />
      <Route 
        path={privateRoutes.CREATEPROJECT} 
        element={<ProjectsForm />} />
      <Route 
        path={privateRoutes.EDITPROJECT} 
        element={<ProjectsForm />} />
      <Route 
        path={privateRoutes.CREATECATEGORY} 
        element={<CategoriesForm />} />
      <Route 
        path={privateRoutes.EDITCATEGORY} 
        element={<CategoriesForm />} />
      <Route 
        path={privateRoutes.SLIDES} 
        element={<PrivateSlides />} />
      <Route 
        path={privateRoutes.SLIDESWITHID} 
        element={<PrivateSlides />} />
      <Route
        path={privateRoutes.TESTIMONIALSFORM}
        element={<TestimonialsForm />}
      />
      <Route
        path={privateRoutes.TESTIMONIALSEDITFORM}
        element={<TestimonialsForm />}
      />
    </RoutesNoMatch>
  );
};

export default BackOfficeRoutes;
