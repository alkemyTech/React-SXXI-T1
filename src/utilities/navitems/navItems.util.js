import { routes } from "models/routes";
// editar resto de rutas cuando existan
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
