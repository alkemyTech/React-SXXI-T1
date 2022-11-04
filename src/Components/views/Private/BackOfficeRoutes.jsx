import { privateRoutes } from "models/routes";
import { Route } from "react-router-dom";
import { RoutesNoMatch } from "utilities/routesNoMatch.util";
import TestimonialsForm from "./BackOffice/Testimonials/TestimonialsForms";
import SlidesForm from "./Slides/SlidesForm";

const BackOfficeRoutes = () => {
  return (
    <RoutesNoMatch>
      <Route path={privateRoutes.SLIDESFORM} element={<SlidesForm />} />
      <Route path={privateRoutes.SLIDESFORMWITHID} element={<SlidesForm />} />
      <Route path={privateRoutes.TESTIMONIALSFORM} element={<TestimonialsForm />}  />
      <Route  path={privateRoutes.TESTIMONIALSEDITFORM} element={<TestimonialsForm />}  />
    </RoutesNoMatch>
  );
};

export default BackOfficeRoutes;