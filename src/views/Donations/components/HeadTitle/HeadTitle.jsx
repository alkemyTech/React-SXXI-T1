import { CustomTitle } from "Components/CustomTitle/CustomTitle";

export const HeadTitle = ({ title }) => {
  return (
    <div className="col col-12 mt-3">
      <CustomTitle wrapTitleClass="col col-12 h-100 text-center" title={title} />
    </div>
  );
};
