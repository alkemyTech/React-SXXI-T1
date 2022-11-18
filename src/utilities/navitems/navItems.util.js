import { routes } from "models/routes";
// editar resto de rutas cuando existan
const footerNavItems = [
  { text: "Inicio", to: routes.HOME },
  { text: "Nosotros", to: "/about" },
  { text: "Novedades", to: routes.NEWS },
  { text: "Testimonios", to: "/testimonios" },
  { text: "Contacto", to: routes.CONTACT },
  { text: "Contribuye", to: routes.DONATION },
];

export { footerNavItems };
