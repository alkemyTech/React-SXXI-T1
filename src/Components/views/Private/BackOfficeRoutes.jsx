import { privateRoutes } from "models/routes";
import { Route } from "react-router-dom";
import { RoutesNoMatch } from "utilities/routesNoMatch.util";
import ActivitiesForm from "./BackOffice/Acivities/ActivitiesForm";
import ActivitiesList from "./BackOffice/Acivities/ActivitiesList";
import CategoriesForm from "../Categories/CategoriesForm";
import EditOrganizationForm from "./BackOffice/Organization/EditForm";
import MembersForm from "./BackOffice/Members/MembersForm";
import MembersList from "./BackOffice/Members/MembersList";
import NewsList from "./BackOffice/News/NewsList";
import NewsForm from "./BackOffice/News/NewsForm";
import ProjectsForm from "./BackOffice/Projects/ProjectsForm";
import PrivateHome from "./Home/PrivateHome";
import PrivateSlides from "./Slides/PrivateSlides";
import Dashboard from "./AdminDashboard/Dashboard";
import OrganizationData from "./Organization/OrganizationData/OrganizationData";
import ActionsSlider from "./Slides/components/ActionsSlider/ActionsSlider";
import TestimonialsForm from "./BackOffice/Testimonials/TestimonialsForms";
import UsersForm from "./BackOffice/Users/UsersForm";
import UsersList from "./BackOffice/Users/UsersList";
import CategoriesList from "./CategoriesList/CategoriesList";

const BackOfficeRoutes = () => {
  return (
    <RoutesNoMatch>
      <Route path={"/"} element={<Dashboard />} />
      <Route path={privateRoutes.BACKHOME} element={<PrivateHome />} />
      <Route path={privateRoutes.CATEGORIES} element={<CategoriesList />} />
      <Route
        path={privateRoutes.CATEGORIESCREATE}
        element={<CategoriesForm />}
      />
      <Route
        path={privateRoutes.CATEGORIESEDITWITHID}
        element={<CategoriesForm />}
      />
      <Route
        path={privateRoutes.ACTIVITIESCREATE}
        element={<ActivitiesForm />}
      />
      <Route
        path={privateRoutes.ACTIVITIESEDITSWITHID}
        element={<ActivitiesForm />}
      />
      <Route path={privateRoutes.ACTIVITIES} element={<ActivitiesList />} />
      <Route path={privateRoutes.BACKHOME} element={<PrivateHome />} />
      <Route path={privateRoutes.CREATEPROJECT} element={<ProjectsForm />} />
      <Route path={privateRoutes.EDITPROJECT} element={<ProjectsForm />} />
      <Route
        path={privateRoutes.EDITORGANIZATIONFORM}
        element={<EditOrganizationForm />}
      />
      <Route path={privateRoutes.MEMBERSLIST} element={<MembersList />} />
      <Route path={privateRoutes.MEMBERSCREATEFORM} element={<MembersForm />} />
      <Route
        path={privateRoutes.MEMBERSEDITFORMWITHID}
        element={<MembersForm />}
      />
      <Route path={privateRoutes.NEWSLIST} element={<NewsList />} />
      <Route path={privateRoutes.NEWSCREATEFORM} element={<NewsForm />} />
      <Route path={privateRoutes.NEWSEDITFORMWITHID} element={<NewsForm />} />
      <Route
        path={privateRoutes.ORGANIZATIONDATA}
        element={<OrganizationData />}
      />
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
      <Route path={privateRoutes.USERS} element={<UsersList />} />
      <Route path={privateRoutes.USERSCREATE} element={<UsersForm />} />
      <Route path={privateRoutes.USERSEDITWITHID} element={<UsersForm />} />
    </RoutesNoMatch>
  );
};

export default BackOfficeRoutes;
