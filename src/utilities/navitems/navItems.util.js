import { routes } from "models/routes";
// editar resto de rutas cuando existan
const publicNavItems = [
  { text: "Inicio", to: routes.HOME },
  { text: "Nosotros", to: routes.HOME },
  { text: "Novedades", to: routes.NEWS },
  { text: "Testimonios", to: routes.HOME },
  { text: "Contacto", to: routes.CONTACT },
  { text: "Contribuye", to: routes.HOME },
];

export { publicNavItems };
