import React from "react";
import { Route } from "react-router-dom";
import { routes } from "./models/routes";
import Home from "./Components/views/Home/Home";
import ActivitiesForm from "./Components/views/Activities/ActivitiesForm";
import CategoriesForm from "./Components/views/Categories/CategoriesForm";
import NewsForm from "./Components/views/News/NewsForm";
import SlidesForm from "./Components/views/Slides/SlidesForm";
import TestimonialForm from "./Components/views/Testimonials/TestimonialsForm";
import UserForm from "./Components/views/Users/UsersForm";
import MembersForm from "./Components/views/Members/MembersForm";
import ProjectsForm from "./Components/views/Projects/ProjectsForm";
import SchoolCampaign from "./Components/Campaigns/School/SchoolCampaign";
import ToysCampaign from "./Components/Campaigns/Toys/ToysCampaign";
import { RoutesNoMatch } from "./utilities/routesNoMatch.util";
import Footer from "./Components/GlobalComponents/Footer/Footer";
import Header from "./Components/GlobalComponents/Header/Header";
import { Row } from "react-bootstrap";
import { Animate } from "styled-components/animation.styled";
import { GlobalStyle } from "styled-components/GlobalStyle.styled";
import { windowSize } from "utilities/windowSize.util";

function App() {
  return (
    <>
      <GlobalStyle windowSize={windowSize()} />
      <Animate className="ColStyledWithAnimate">
        <Header />
        <Row>
          <RoutesNoMatch>
            <Route path={routes.HOME} exact element={<Home />} />
            <Route path={routes.ACTIVITIESFORM} element={<ActivitiesForm />} />
            <Route path={routes.CATEGORIESFORM} element={<CategoriesForm />} />
            <Route path={routes.NEWSFORM} element={<NewsForm />} />
            <Route path={routes.SLIDERSFORM} element={<SlidesForm />} />
            <Route
              path={routes.TESTIMONIALSFORM}
              element={<TestimonialForm />}
            />
            <Route path={routes.USERFORM} element={<UserForm />} />
            <Route path={routes.MEMBERSFORM} element={<MembersForm />} />
            <Route path={routes.PROJECTFORM} element={<ProjectsForm />} />
            <Route path={routes.SCHOOLCAMPAIGN} element={<SchoolCampaign />} />
            <Route path={routes.TOYSCAMPAIGN} element={<ToysCampaign />} />
          </RoutesNoMatch>
        </Row>
        <Footer />
      </Animate>
    </>
  );
}

export default App;
