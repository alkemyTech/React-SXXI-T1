import Placeholder from "react-bootstrap/Placeholder";
import { Skeleton } from "./styled-components/SkeletonLoader.styled";

export const SkeletonLoader = ({
  placeClass = "d-flex flex-wrap justify-content-center mb-2 ",
  skeletonClass = "col col-12",
  size = "lg",
  as = "p",
  animation = "glow",
  xs = 10,
  spanClass = "",
  height = "auto",
}) => {
  return (
    <Skeleton className={skeletonClass} height={height}>
      <Placeholder className={placeClass} size={size} as={as} animation={animation}>
        <Placeholder xs={xs} className={spanClass} />
      </Placeholder>
    </Skeleton>
  );
};
