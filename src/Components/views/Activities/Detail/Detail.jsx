import { SpinnerLoad } from "Components/GlobalComponents/SpinnerLoad/SpinnerLoad";
import { ShowDetailData } from "./components/ShowDetailData";
import { useDetail } from "./hooks/useDetail";
import { defaultDetailText } from "./utilities/detailSchema.util";

const Detail = () => {
  const { dataDetail, loadingDetail } = useDetail();

  if (loadingDetail)
    return (
      <div>
        <SpinnerLoad />
      </div>
    );

  return (
    <div className="my-5">
      {Object.keys(dataDetail).length > 0 ? (
        <ShowDetailData data={dataDetail} />
      ) : (
        <div>{defaultDetailText.errorLoadSection}</div>
      )}
    </div>
  );
};

export default Detail;
