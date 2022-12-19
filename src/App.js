import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { privateRoutes, routes } from "./models/routes";
import { Animate } from "styled-components/animation.styled";
import { GlobalStyle } from "styled-components/GlobalStyle.styled";
import { windowSize } from "utilities/windowSize.util";
import { textForDonation } from "views/Donations/utilities/donationSchema.util";
import { RoutesNoMatch } from "./utilities/routesNoMatch.util";
import { WrapMainRoutes } from "styled-components/App.styled";
import { useApp } from "hooks/useApp";
import { SpinnerLoad } from "Components/Loading/SpinnerLoad/SpinnerLoad";
import { ErrorBoundary } from "utilities/errorBoundary/errorBoundary.util";
import { ImageBody } from "views/Donations/styled-components/BodyDonation.styled";
import internalError from "assets/error500.png";
import Home from "views/Home";
import Auth from "views/Auth/Auth";
import ComponentErrorView from "Components/ComponentErrorView/ComponentErrorView";

const ActivitiesForm = lazy(() => import("./views/Activities/ActivitiesForm"));
const ActivitiesList = lazy(() => import("views/Activities/ActivitiesList"));
const About = lazy(() => import("views/About/About"));
const AuthGuard = lazy(() => import("guard/auth.guard"));
const BackOfficeRoutes = lazy(() => import("views/Private/BackOfficeRoutes"));
const CategoriesForm = lazy(() => import("views/Categories/CategoriesForm"));
const Contact = lazy(() => import("views/Contact/Contact"));
const Detail = lazy(() => import("views/Activities/Detail/Detail"));
const Donations = lazy(() => import("views/Donations/Donations"));
const Footer = lazy(() => import("./Components/Footer/Footer"));
const Header = lazy(() => import("./Components/Header/Header"));
const MembersForm = lazy(() => import("./views/Members/MembersForm"));
const News = lazy(() => import("views/News/News"));
const NewsDetail = lazy(() => import("./views/News/Detail/NewsDetail"));
const ProjectsForm = lazy(() => import("./views/Projects/ProjectsForm"));
const Thanks = lazy(() => import("views/Donations/Thanks"));
const UserForm = lazy(() => import("./views/Users/UsersForm"));

function App() {
  const { type, returnToHome, setReturnToHome } = useApp();

  return (
    <>
      <GlobalStyle />
      <Animate className="col-with-animate">
        <Header windowSize={windowSize()} />
        <WrapMainRoutes className="wrap-main-routes" size={windowSize()}>
          <ErrorBoundary
            returnToHome={returnToHome}
            fallbackComponent={
              <ComponentErrorView
                setReturnToHome={setReturnToHome}
                text="Oops... Parece que algo salió mal! Comunicate con el administrador por favor. Serás redirigido a la pantalla principal"
                where="error-boundary">
                <ImageBody image={internalError} height="632px" borderRadius="8px" />
              </ComponentErrorView>
            }>
            <Suspense fallback={<SpinnerLoad />}>
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
            </Suspense>
          </ErrorBoundary>
        </WrapMainRoutes>
        {type !== "admin" && <Footer />}
      </Animate>
    </>
  );
}

export default App;
