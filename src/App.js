import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { privateRoutes, routes } from "./models/routes";
import { Animate } from "styled-components/animation.styled";
import { GlobalStyle } from "styled-components/GlobalStyle.styled";
import { windowSize } from "utilities/windowSize.util";
import { textForDonation } from "Components/views/Donations/utilities/donationSchema.util";
import { RoutesNoMatch } from "./utilities/routesNoMatch.util";
import { WrapMainRoutes } from "styled-components/App.styled";
import { useApp } from "hooks/useApp";
import { SpinnerLoad } from "Components/GlobalComponents/Loading/SpinnerLoad/SpinnerLoad";
import { ErrorBoundary } from "utilities/errorBoundary/errorBoundary.util";
import { ImageBody } from "Components/views/Donations/styled-components/BodyDonation.styled";
import internalError from "assets/error500.png";

const ActivitiesForm = lazy(() => import("./Components/views/Activities/ActivitiesForm"));
const ActivitiesList = lazy(() => import("Components/views/Activities/ActivitiesList"));
const About = lazy(() => import("Components/views/About/About"));
const Auth = lazy(() => import("Components/views/Auth/Auth"));
const AuthGuard = lazy(() => import("guard/auth.guard"));
const BackOfficeRoutes = lazy(() => import("Components/views/Private/BackOfficeRoutes"));
const CategoriesForm = lazy(() => import("Components/views/Categories/CategoriesForm"));
const Contact = lazy(() => import("Components/views/Contact/Contact"));
const Detail = lazy(() => import("Components/views/Activities/Detail/Detail"));
const Donations = lazy(() => import("Components/views/Donations/Donations"));
const Footer = lazy(() => import("./Components/GlobalComponents/Footer/Footer"));
const Header = lazy(() => import("./Components/GlobalComponents/Header/Header"));
const Home = lazy(() => import("./Components/views/Home/index"));
const MembersForm = lazy(() => import("./Components/views/Members/MembersForm"));
const News = lazy(() => import("Components/views/News/News"));
const NewsDetail = lazy(() => import("./Components/views/News/Detail/NewsDetail"));
const ProjectsForm = lazy(() => import("./Components/views/Projects/ProjectsForm"));
const Thanks = lazy(() => import("Components/views/Donations/Thanks"));
const UserForm = lazy(() => import("./Components/views/Users/UsersForm"));
const ComponentErrorView = lazy(() => import("Components/GlobalComponents/ComponentErrorView/ComponentErrorView"));

function App() {
  const { type, returnToHome, setReturnToHome } = useApp();

  return (
    <>
      <GlobalStyle />
      <Animate className="col-with-animate">
        <Header windowSize={windowSize()} />
        <WrapMainRoutes className="wrap-main-routes" size={windowSize()}>
          <Suspense fallback={<SpinnerLoad />}>
            <ErrorBoundary
              returnToHome={returnToHome}
              fallbackComponent={
                <ComponentErrorView
                  setReturnToHome={setReturnToHome}
                  text="Oops... Parece que algo salió mal! Comunicate con el administrador por favor. Serás redirigido a la pantalla principal"
                  where="error-boundary">
                  <ImageBody image={internalError} height="380px" borderRadius="8px" />
                </ComponentErrorView>
              }>
              <RoutesNoMatch>
                <Route path={routes.HOME} exact element={<Home />} />
                <Route path={routes.ABOUT} exact element={<About />} />
                <Route path={routes.ACTIVITIES} exact element={<ActivitiesList />} />
                <Route path={routes.ACTIVITIESFORM} element={<ActivitiesForm />} />
                <Route path={routes.AUTHLOGINFORM} element={<Auth />} />
                <Route path={routes.AUTHREGISTERFORM} element={<Auth />} />
                <Route path={routes.ACTIVITIESDETAIL} element={<Detail />} />
                <Route path={routes.CATEGORIESFORM} element={<CategoriesForm />} />
                <Route path={routes.NEWS} element={<News />} />
                <Route path={routes.NEWSDETAIL} element={<NewsDetail title="Título de novedad" />} />
                <Route path={routes.USERFORM} element={<UserForm />} />
                <Route path={routes.MEMBERSFORM} element={<MembersForm />} />
                <Route path={routes.PROJECTFORM} element={<ProjectsForm />} />
                <Route path={routes.CONTACT} element={<Contact />} />
                <Route path={routes.DONATION} element={<Donations text={textForDonation.text} />} />
                <Route path={routes.THANKSDONATION} element={<Thanks />} />
                <Route element={<AuthGuard />}>
                  <Route path={`${privateRoutes.BACKOFFICE}/*`} element={<BackOfficeRoutes />} />
                </Route>
              </RoutesNoMatch>
            </ErrorBoundary>
          </Suspense>
        </WrapMainRoutes>
        {type !== "admin" && <Footer />}
      </Animate>
    </>
  );
}

export default App;
