import { CustomCard } from "Components/GlobalComponents/CustomCard/CustomCard"
import { routes } from "models/routes"

export const NewsCard = ({ item }) => {
  return <CustomCard cardInfo={item} classNameCustomCard="mb-3" to={`${routes.NEWS}/${item.id}`} typeStyle="green" grid="oneColumn" />
}
