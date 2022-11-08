import { privateRoutes } from "models/routes";
import { Route } from "react-router-dom";
import { RoutesNoMatch } from "utilities/routesNoMatch.util";
import EditOrganizationForm from "./BackOffice/Organization/EditForm";
import ProyectsForm from "./BackOffice/Proyects/ProyectsForm";
import TestimonialsForm from "./BackOffice/Testimonials/TestimonialsForms";
import PrivateSlides from "./Slides/PrivateSlides";

const BackOfficeRoutes = () => {
  return (
    <RoutesNoMatch>
      <Route
        path={privateRoutes.EDITORGANIZATIONFORM}
        element={<EditOrganizationForm />}
      />
      <Route path={privateRoutes.SLIDESFORM} element={<PrivateSlides />} />
      <Route path={privateRoutes.SLIDESFORMWITHID} element={<PrivateSlides />} />
      <Route path={privateRoutes.CREATEPROJECT} element={<ProyectsForm />} />
      <Route path={privateRoutes.EDITPROJECTS} element={<ProyectsForm />} />
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
