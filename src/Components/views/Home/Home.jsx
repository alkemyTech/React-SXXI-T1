import { privateRoutes, routes } from "models/routes";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      HOME
      <Link to={`${privateRoutes.BACKOFFICE}/${privateRoutes.SLIDES}/1491`}>
        EDITAR slide
      </Link>
      <br />
      <Link to={`${privateRoutes.BACKOFFICE}/${privateRoutes.SLIDES}/`}>
        CREAR slide
      </Link>
      <br />
      <Link to={routes.DONATION}>Hacer donación</Link>
      <br />
      <Link to={routes.NEWS}>Novedades</Link>
    </div>
  );
};

export default Home;
