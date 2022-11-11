import { privateRoutes } from "models/routes";
import { Route } from "react-router-dom";
import { RoutesNoMatch } from "utilities/routesNoMatch.util";

import EditMembersForm from "./BackOffice/Members/EditForm";
import CategoriesForm from "../Categories/CategoriesForm";
import EditOrganizationForm from "./BackOffice/Organization/EditForm";
import ProyectsForm from "./BackOffice/Proyects/ProyectsForm";
import TestimonialsForm from "./BackOffice/Testimonials/TestimonialsForms";
import PrivateSlides from "./Slides/PrivateSlides";

const BackOfficeRoutes = () => {
  return (
    <RoutesNoMatch>
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
        element={<ProyectsForm />} />
      <Route 
        path={privateRoutes.EDITPROJECT} 
        element={<ProyectsForm />} />
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
