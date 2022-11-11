import { privateRoutes } from "models/routes";
import { Route } from "react-router-dom";
import { RoutesNoMatch } from "utilities/routesNoMatch.util";

import EditMembersForm from "./BackOffice/Members/EditForm";
import CategoriesForm from "../Categories/CategoriesForm";
import ActivitiesForm from "./BackOffice/Acivities/ActivitiesForm";
import EditOrganizationForm from "./BackOffice/Organization/EditForm";
import TestimonialsForm from "./BackOffice/Testimonials/TestimonialsForms";
import PrivateHome from "./Home/PrivateHome";
import PrivateSlides from "./Slides/PrivateSlides";

const BackOfficeRoutes = () => {
  return (
    <RoutesNoMatch>
      <Route path={privateRoutes.BACKHOME} element={<PrivateHome />} />
      <Route path={privateRoutes.CREATECATEGORY} element={<CategoriesForm />} />
      <Route path={privateRoutes.EDITCATEGORY} element={<CategoriesForm />} />
<<<<<<< HEAD
      <Route path={privateRoutes.ACTIVITIESFORM} element={<ActivitiesForm />} />
      <Route
        path={privateRoutes.ACTIVITIESEDITFORM}
        element={<ActivitiesForm />}
      />
=======
>>>>>>> 8828d402fdc8663a18b44d1ec59ed6796e96bdbb
      <Route
        path={privateRoutes.EDITMEMBERSFORM}
        element={<EditMembersForm />}
      />
      <Route
        path={privateRoutes.EDITORGANIZATIONFORM}
        element={<EditOrganizationForm />}
      />
      <Route path={privateRoutes.SLIDES} element={<PrivateSlides />} />
      <Route path={privateRoutes.SLIDESWITHID} element={<PrivateSlides />} />
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
