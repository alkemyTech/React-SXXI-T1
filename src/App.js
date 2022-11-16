import React from "react";
import { Route } from "react-router-dom";
import { privateRoutes, routes } from "./models/routes";
import { Row } from "react-bootstrap";
import { Animate } from "styled-components/animation.styled";
import { GlobalStyle } from "styled-components/GlobalStyle.styled";
import { windowSize } from "utilities/windowSize.util";
import { textForDonation } from "Components/views/Donations/utilities/donationSchema.util";
import { RoutesNoMatch } from "./utilities/routesNoMatch.util";
import Home from "./Components/views/Home/index";
import ActivitiesForm from "./Components/views/Activities/ActivitiesForm";
import LoginForm from "./Components/views/Auth/LoginForm";
import UserForm from "./Components/views/Users/UsersForm";
import MembersForm from "./Components/views/Members/MembersForm";
import NewsDetail from "./Components/views/News/Detail/NewsDetail";
import ProjectsForm from "./Components/views/Projects/ProjectsForm";
import RegisterForm from "./Components/views/Auth/RegisterForm";
import SchoolCampaign from "./Components/Campaigns/School/SchoolCampaign";
import ToysCampaign from "./Components/Campaigns/Toys/ToysCampaign";
import Footer from "./Components/GlobalComponents/Footer/Footer";
import Header from "./Components/GlobalComponents/Header/Header";
import Contact from "Components/views/Contact/Contact";
import Detail from "Components/views/Activities/Detail/Detail";
import OrganizationData from "Components/views/Private/Organization/OrganizationData/OrganizationData";
import AuthGuard from "guard/auth.guard";
import BackOfficeRoutes from "Components/views/Private/BackOfficeRoutes";
import ActivitiesList from "Components/views/Activities/ActivitiesList";
import { Donations } from "Components/views/Donations/Donations";
import { Thanks } from "Components/views/Donations/Thanks";
import News from "Components/views/News/News";
import CategoriesForm from "Components/views/Categories/CategoriesForm";

function App() {
  return (
    <>
      <GlobalStyle windowSize={windowSize()} />
      <Animate className="col-with-animate">
        <Header />
        <Row>
          <RoutesNoMatch>
            <Route path={routes.HOME} exact element={<Home />} />
            <Route
              path={routes.ACTIVITIES}
              exact
              element={<ActivitiesList />}
            />
            <Route path={routes.ACTIVITIESFORM} element={<ActivitiesForm />} />
            <Route path={routes.AUTHLOGINFORM} element={<LoginForm />} />
            <Route path={routes.AUTHREGISTERFORM} element={<RegisterForm />} />
            <Route path={routes.ACTIVITIESDETAIL} element={<Detail />} />
            <Route path={routes.CATEGORIESFORM} element={<CategoriesForm />} />
            <Route path={routes.NEWS} element={<News />} />
            <Route
              path={routes.NEWSDETAIL}
              element={<NewsDetail title="Título de novedad" />}
            />
            <Route path={routes.USERFORM} element={<UserForm />} />
            <Route path={routes.MEMBERSFORM} element={<MembersForm />} />
            <Route
              path={routes.ORGANIZATIONDATA}
              element={<OrganizationData />}
            />
            <Route path={routes.PROJECTFORM} element={<ProjectsForm />} />
            <Route path={routes.SCHOOLCAMPAIGN} element={<SchoolCampaign />} />
            <Route path={routes.TOYSCAMPAIGN} element={<ToysCampaign />} />
            <Route path={routes.CONTACT} element={<Contact />} />

            <Route
              path={routes.DONATION}
              element={<Donations text={textForDonation.text} />}
            />
            <Route path={routes.THANKSDONATION} element={<Thanks />} />
            <Route element={<AuthGuard />}>
              <Route
                path={`${privateRoutes.BACKOFFICE}/*`}
                element={<BackOfficeRoutes />}
              />
            </Route>
          </RoutesNoMatch>
        </Row>
        <Footer />
      </Animate>
    </>
  );
}

export default App;
