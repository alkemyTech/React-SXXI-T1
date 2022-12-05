import { SkeletonLoader } from "Components/GlobalComponents/Loading/SkeletonLoader/SkeletonLoader";

export const TableHead = ({ load, element }) => {
  return <th>{load ? <SkeletonLoader /> : element}</th>;
};
