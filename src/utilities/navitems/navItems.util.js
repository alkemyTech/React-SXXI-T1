import { routes } from "models/routes";
// editar resto de rutas cuando existan
const publicNavItems = [
  { text: "Inicio", to: routes.HOME },
  { text: "Nosotros", to: "/about" },
  { text: "Novedades", to: routes.NEWS },
  { text: "Testimonios", to: "/testimonios" },
  { text: "Contacto", to: routes.CONTACT },
  { text: "Contribuye", to: routes.DONATION },
];

const publicHeaderNavItems = [
  ...publicNavItems,
  { text: "Login", to: routes.AUTHLOGINFORM },
  { text: "Registrar", to: routes.AUTHREGISTERFORM },
];

export { publicNavItems, publicHeaderNavItems };