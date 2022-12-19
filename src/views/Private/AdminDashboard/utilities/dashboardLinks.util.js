import activityImage from "assets/actvityIcon.svg";
import categoryImage from "assets/categoryIcon.svg";
import membersImage from "assets/membersIcon.svg";
import testimonialsImage from "assets/testimonialsIcon.svg";
import organizationImage from "assets/usersIcon.svg";
import slideImage from "assets/slideIcon.svg";
import newsImage from "assets/newsIcon.svg";
import usersImage from "assets/organizationIcon.svg";
import { privateRoutes } from "models/routes";

export const dashboardLinks = [
  {
    text: "Actividades",
    icon: activityImage,
    to: `/${privateRoutes.BACKOFFICE}${privateRoutes.ACTIVITIES}`,
  },
  {
    text: "Categorias",
    icon: categoryImage,
    to: `/${privateRoutes.BACKOFFICE}${privateRoutes.CATEGORIES}`,
  },
  {
    text: "Miembros",
    icon: membersImage,
    to: `/${privateRoutes.BACKOFFICE}${privateRoutes.MEMBERSLIST}`,
  },
  {
    text: "Novedades",
    icon: newsImage,
    to: `/${privateRoutes.BACKOFFICE}${privateRoutes.NEWSLIST}`,
  },
  {
    text: "Organización",
    icon: organizationImage,
    to: `/${privateRoutes.BACKOFFICE}${privateRoutes.ORGANIZATIONDATA}`,
  },
  {
    text: "Slides",
    icon: slideImage,
    to: `/${privateRoutes.BACKOFFICE}${privateRoutes.SLIDES}`,
  },
  {
    text: "Testimonios",
    icon: testimonialsImage,
    to: `/${privateRoutes.BACKOFFICE}${privateRoutes.TESTIMONIALS}`,
  },
  {
    text: "Usuarios",
    icon: usersImage,
    to: `/${privateRoutes.BACKOFFICE}${privateRoutes.USERS}`,
  },
];
