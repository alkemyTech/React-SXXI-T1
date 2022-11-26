import { privateRoutes, routes } from "models/routes"
import { activityIcon, categoryIcon, memberIcon, newsIcon, organizationIcon, slideIcon, testimonialIcon, userIcon, homeIcon } from "assets/images"

const footerNavItems = [
  { text: "Inicio", to: routes.HOME },
  { text: "Nosotros", to: routes.ABOUT },
  { text: "Novedades", to: routes.NEWS },
  { text: "Contacto", to: routes.CONTACT },
  { text: "Contribuye", to: routes.DONATION },
]

const publicHeaderNavItems = [...footerNavItems, { text: "Login", to: routes.AUTHLOGINFORM }, { text: "Registrar", to: routes.AUTHREGISTERFORM }]

export { footerNavItems, publicHeaderNavItems }

export const privateLinks = [
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
    to: `${privateRoutes.BACKOFFICE}${privateRoutes.MEMBERS}`,
  },
  {
    text: "Novedades",
    icon: newsIcon,
    to: `${privateRoutes.BACKOFFICE}${privateRoutes.NEWS}`,
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
]
