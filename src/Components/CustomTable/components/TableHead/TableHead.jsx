import { SkeletonLoader } from "Components/Loading/SkeletonLoader/SkeletonLoader";

export const TableHead = ({ load, element }) => {
  return <th>{load ? <SkeletonLoader /> : element}</th>;
};
