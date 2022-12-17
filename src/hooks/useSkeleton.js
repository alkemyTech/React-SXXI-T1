import { SkeletonLoader } from "Components/Loading/SkeletonLoader/SkeletonLoader";

export const useSkeleton = () => {
  const titleSkeleton = (
    <div>
      {" "}
      <SkeletonLoader />
    </div>
  );

  const textSkeleton = (
    <div>
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
    </div>
  );

  const cardSkeleton = ({ cardSkClass }) => (
    <div className={cardSkClass}>
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
    </div>
  );

  return { titleSkeleton, textSkeleton, cardSkeleton };
};
