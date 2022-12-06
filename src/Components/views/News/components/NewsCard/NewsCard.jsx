import { CustomCard } from "Components/GlobalComponents/CustomCard/CustomCard";
import { routes } from "models/routes";

export const NewsCard = ({ item }) => {
  return <CustomCard cardInfo={item} to={`${routes.NEWS}/${item.id}`} grid="oneColumn" />;
};
