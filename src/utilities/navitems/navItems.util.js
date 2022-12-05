import { privateRoutes, routes } from "models/routes"
import { activityIcon, categoryIcon, memberIcon, newsIcon, organizationIcon, slideIcon, testimonialIcon, userIcon, homeIcon } from "assets/images"

const footerNavItems = [
  { text: "Inicio", to: routes.HOME },
  { text: "Nosotros", to: routes.ABOUT },
  { text: "Actividades", to: routes.ACTIVITIES},
  { text: "Novedades", to: routes.NEWS },
  { text: "Contacto", to: routes.CONTACT },
  { text: "Contribuye", to: routes.DONATION },
]

const publicNotAuthNavItems = [
  ...footerNavItems,
  { text: "Login", to: routes.AUTHLOGINFORM + "?auth=login" },
  { text: "Registrar", to: routes.AUTHREGISTERFORM + "?auth=register" },
]

const publicAuthNavItems = [
  ...footerNavItems,
  {
    text: "hr",
  },
]

export const privateLinks = [
  ...footerNavItems,
  {
    text: "hr",
  },
  { text: "Dashboard", icon: homeIcon, to: privateRoutes.BACKOFFICE },
  {
    text: "Actividades",
    icon: activityIcon,
    to: `${privateRoutes.BACKOFFICE}${privateRoutes.ACTIVITIES}`,
  },
  {
    text: "Categorias",
    icon: categoryIcon,
    to: `${privateRoutes.BACKOFFICE}${privateRoutes.CATEGORIES}`,
  },
  {
    text: "Miembros",
    icon: memberIcon,
    to: `${privateRoutes.BACKOFFICE}${privateRoutes.MEMBERSLIST}`,
  },
  {
    text: "Novedades",
    icon: newsIcon,
    to: `${privateRoutes.BACKOFFICE}${privateRoutes.NEWSLIST}`,
  },
  {
    text: "Organización",
    icon: organizationIcon,
    to: `${privateRoutes.BACKOFFICE}${privateRoutes.ORGANIZATIONDATA}`,
  },
  {
    text: "Slides",
    icon: slideIcon,
    to: `${privateRoutes.BACKOFFICE}${privateRoutes.SLIDES}`,
  },
  {
    text: "Testimonios",
    icon: testimonialIcon,
    to: `${privateRoutes.BACKOFFICE}${privateRoutes.TESTIMONIALS}`,
  },
  {
    text: "Usuarios",
    icon: userIcon,
    to: `${privateRoutes.BACKOFFICE}${privateRoutes.USERS}`,
  },
  {
    text: "hr",
  },
]

const typeNavItems = {
  admin: privateLinks,
  "Standard User": publicAuthNavItems,
  notAuth: publicNotAuthNavItems,
}

export { typeNavItems, footerNavItems }
