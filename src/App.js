import React from "react"
import { Route } from "react-router-dom"
import { privateRoutes, routes } from "./models/routes"
import { Animate } from "styled-components/animation.styled"
import { GlobalStyle } from "styled-components/GlobalStyle.styled"
import { windowSize } from "utilities/windowSize.util"
import { textForDonation } from "Components/views/Donations/utilities/donationSchema.util"
import { RoutesNoMatch } from "./utilities/routesNoMatch.util"
import Home from "./Components/views/Home/index"
import ActivitiesForm from "./Components/views/Activities/ActivitiesForm"
import UserForm from "./Components/views/Users/UsersForm"
import MembersForm from "./Components/views/Members/MembersForm"
import NewsDetail from "./Components/views/News/Detail/NewsDetail"
import ProjectsForm from "./Components/views/Projects/ProjectsForm"
import SchoolCampaign from "./Components/Campaigns/School/SchoolCampaign"
import ToysCampaign from "./Components/Campaigns/Toys/ToysCampaign"
import Footer from "./Components/GlobalComponents/Footer/Footer"
import Header from "./Components/GlobalComponents/Header/Header"
import Contact from "Components/views/Contact/Contact"
import Detail from "Components/views/Activities/Detail/Detail"
import AuthGuard from "guard/auth.guard"
import BackOfficeRoutes from "Components/views/Private/BackOfficeRoutes"
import ActivitiesList from "Components/views/Activities/ActivitiesList"
import { Donations } from "Components/views/Donations/Donations"
import { Thanks } from "Components/views/Donations/Thanks"
import News from "Components/views/News/News"
import CategoriesForm from "Components/views/Categories/CategoriesForm"
import { WrapMainRoutes } from "styled-components/App.styled"
import About from "Components/views/About/About"
import { ROLE } from "./MOCKAUTH"
import { Auth } from "Components/views/Auth/Auth"
import { Provider } from "react-redux"
import store from "redux/store"

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Animate className="col-with-animate">
        <Header windowSize={windowSize()} />
        <WrapMainRoutes className="wrap-main-routes" size={windowSize()}>
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
            <Route path={routes.SCHOOLCAMPAIGN} element={<SchoolCampaign />} />
            <Route path={routes.TOYSCAMPAIGN} element={<ToysCampaign />} />
            <Route path={routes.CONTACT} element={<Contact />} />
            <Route path={routes.DONATION} element={<Donations text={textForDonation.text} />} />
            <Route path={routes.THANKSDONATION} element={<Thanks />} />
            <Route element={<AuthGuard />}>
              <Route path={`${privateRoutes.BACKOFFICE}/*`} element={<BackOfficeRoutes />} />
            </Route>
          </RoutesNoMatch>
        </WrapMainRoutes>
        {ROLE !== "admin" && <Footer />}
      </Animate>
    </Provider>
  )
}

export default App
