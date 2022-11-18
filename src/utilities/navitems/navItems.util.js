import { privateRoutes, routes } from "models/routes";
import { activityIcon, categoryIcon, memberIcon,
newsIcon, organizationIcon, slideIcon, testimonialIcon,
userIcon, homeIcon } from 'assets/images';

const footerNavItems = [
  { text: "Inicio", to: routes.HOME },
  { text: "Nosotros", to: routes.ABOUT },
  { text: "Novedades", to: routes.NEWS },
  { text: "Testimonios", to: routes.TESTIMONIALS },
  { text: "Contacto", to: routes.CONTACT },
  { text: "Contribuye", to: routes.DONATION },
];

const publicHeaderNavItems = [
  ...footerNavItems,
  { text: "Login", to: routes.AUTHLOGINFORM },
  { text: "Registrar", to: routes.AUTHREGISTERFORM },
];

export { footerNavItems, publicHeaderNavItems };

export const privateLinks = [
    { text: 'Dashboard', icon: homeIcon, to: privateRoutes.BACKOFFICE},
    { text: 'Actividades', icon: activityIcon, to: `${privateRoutes.BACKOFFICE}/${privateRoutes.ACTIVITIESLIST}`},
    { text: 'Categorias', icon: categoryIcon, to: `${privateRoutes.BACKOFFICE}/${privateRoutes.CATEGORIESLIST}`},
    { text: 'Miembros', icon: memberIcon, to: `${privateRoutes.BACKOFFICE}/${privateRoutes.MEMBERSLIST}`},
    { text: 'Novedades', icon: newsIcon, to: `${privateRoutes.BACKOFFICE}/${privateRoutes.NEWSLIST}`},
    { text: 'Organización', icon: organizationIcon, to: `${privateRoutes.BACKOFFICE}/${privateRoutes.ORGANIAZTIONDATA}`},
    { text: 'Slides', icon: slideIcon, to: `${privateRoutes.BACKOFFICE}/${privateRoutes.SLIDESLIST}`},
    { text: 'Testimonios', icon: testimonialIcon, to: `${privateRoutes.BACKOFFICE}/${privateRoutes.TESTIMONIALSLIST}`},
    { text: 'Usuarios', icon: userIcon, to: `${privateRoutes.BACKOFFICE}/${privateRoutes.USERSLIST}`}
];