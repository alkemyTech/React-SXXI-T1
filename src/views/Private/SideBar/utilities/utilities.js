import ActivityIcon from 'assets/actvity-icon.svg';
import CategoryIcon from 'assets/category-icon.svg';
import NewsIcon from 'assets/news-icon.svg';
import OrgIcon from 'assets/organization.svg';
import SlideIcon from 'assets/slide-icon.svg';
import TestimonialsIcon from 'assets/testimonials-icon.svg';
import UsersIcon from 'assets/users-icon.svg';
import MembersIcon from 'assets/members-icon.svg';
import HomeIcon from 'assets/home-icon.svg';

export const privateLinks = [
    { name: 'Inicio', alt: 'icono inicio', icon: HomeIcon, to: '/'},
    { name: 'Dashboard', alt: 'icono inicio', icon: HomeIcon, to: '/backoffice'},
    { name: 'Actividades', alt: 'icono actividades', icon: ActivityIcon, to: '/backoffice/activities'},
    { name: 'Categorias', alt: 'icono categorias', icon: CategoryIcon, to: '/backoffice/categories'},
    { name: 'Miembros', alt: 'icono miembros', icon: MembersIcon, to: '/backoffice/members'},
    { name: 'Novedades', alt: 'icono novedades', icon: NewsIcon, to: '/backoffice/news'},
    { name: 'Organización', alt: 'icono organizacion', icon: OrgIcon, to: '/backoffice/organization'},
    { name: 'Slides', alt: 'icono slides', icon: SlideIcon, to: '/backoffice/slides'},
    { name: 'Testimonios', alt: 'icono testimonios', icon: TestimonialsIcon, to: '/backoffice/testimonials'},
    { name: 'Usuarios', alt: 'icono usuarios', icon: UsersIcon, to: '/backoffice/users'}
];