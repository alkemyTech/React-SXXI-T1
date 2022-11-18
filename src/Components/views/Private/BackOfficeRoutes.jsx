import { privateRoutes } from "models/routes";
import { Route } from "react-router-dom";
import { RoutesNoMatch } from "utilities/routesNoMatch.util";

import ActivitiesForm from "./BackOffice/Acivities/ActivitiesForm";
import CategoriesForm from "../Categories/CategoriesForm";
import EditMembersForm from "./BackOffice/Members/EditForm";
import EditOrganizationForm from "./BackOffice/Organization/EditForm";
import NewsForm from "./BackOffice/News/NewsForm";
import ProjectsForm from "./BackOffice/Projects/ProjectsForm";
import PrivateHome from "./Home/PrivateHome";
import PrivateSlides from "./Slides/PrivateSlides";
import ActionsSlider from "./Slides/components/ActionsSlider/ActionsSlider";
import TestimonialsForm from "./BackOffice/Testimonials/TestimonialsForms";
import UsersForm from "./BackOffice/Users/UsersForm";
import Dashboard from "./AdminDashboard/Dashboard";

const BackOfficeRoutes = () => {
  return (
    <RoutesNoMatch>
      <Route path={privateRoutes.ACTIVITIESFORM} element={<ActivitiesForm />} />
      <Route
        path={privateRoutes.ACTIVITIESEDITFORM}
        element={<ActivitiesForm />}
      />
      <Route path={privateRoutes.BACKHOME} element={<PrivateHome />} />
      <Route path={privateRoutes.CREATECATEGORY} element={<CategoriesForm />} />
      <Route path={privateRoutes.CREATEPROJECT} element={<ProjectsForm />} />

      <Route path={privateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={privateRoutes.EDITCATEGORY} element={<CategoriesForm />} />
      <Route
        path={privateRoutes.EDITMEMBERSFORM}
        element={<EditMembersForm />}
      />
      <Route path={privateRoutes.EDITPROJECT} element={<ProjectsForm />} />
      <Route
        path={privateRoutes.EDITORGANIZATIONFORM}
        element={<EditOrganizationForm />}
      />
      <Route path={privateRoutes.NEWSFORM} element={<NewsForm />} />
      <Route path={privateRoutes.NEWSEDITFORM} element={<NewsForm />} />
      <Route path={privateRoutes.SLIDES} element={<PrivateSlides />} />
      <Route path={privateRoutes.SLIDESCREATE} element={<ActionsSlider />} />
      <Route
        path={privateRoutes.SLIDESEDITWITHID}
        element={<ActionsSlider />}
      />
      <Route
        path={privateRoutes.TESTIMONIALSFORM}
        element={<TestimonialsForm />}
      />
      <Route
        path={privateRoutes.TESTIMONIALSEDITFORM}
        element={<TestimonialsForm />}
      />
      <Route path={privateRoutes.USERSFORM} element={<UsersForm />} />
      <Route path={privateRoutes.USERSEDITFORM} element={<UsersForm />} />
    </RoutesNoMatch>
  );
};

export default BackOfficeRoutes;
