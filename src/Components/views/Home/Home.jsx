import { privateRoutes } from "models/routes";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      HOME
      <Link to={`${privateRoutes.BACKOFFICE}/${privateRoutes.SLIDESFORM}/20`}>
        EDITAR slide
      </Link>
      <br />
      <Link to={`${privateRoutes.BACKOFFICE}/${privateRoutes.SLIDESFORM}/`}>
        CREAR slide
      </Link>
    </div>
  );
};

export default Home;
