import { SkeletonLoader } from "Components/GlobalComponents/Loading/SkeletonLoader/SkeletonLoader";

export const TableHead = ({ load, element }) => {
<<<<<<< HEAD
  return <th>{load ? <SpinnerGrow animation="grow" variant="ligth" /> : element}</th>;
=======
  return <th>{load ? <SkeletonLoader /> : element}</th>;
>>>>>>> a0c340378ec6ffa4e3aa8bc120e652c3c8ff809c
};
