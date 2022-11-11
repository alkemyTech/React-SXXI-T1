import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import CarouselComponent from "./carousel/Carousel";

const Home = () => {
  return (
    <div>
      <CustomTitle title='Hola, bienvenida/o' height="5rem"/>
      <CarouselComponent />
    </div>
  );
};

export default Home;
