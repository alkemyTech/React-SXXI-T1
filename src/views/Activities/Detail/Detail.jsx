import { SpinnerLoad } from "Components/Loading/SpinnerLoad/SpinnerLoad";
import { ShowDetailData } from "./components/ShowDetailData";
import { useDetail } from "./hooks/useDetail";
import { defaultDetailText } from "./utilities/detailSchema.util";

const Detail = () => {
  const { dataDetail, loadingDetail } = useDetail();

  if (loadingDetail) {
    return (
      <div>
        <SpinnerLoad />
      </div>
    );
  } else if (!dataDetail) {
    return <div>{defaultDetailText.errorLoadSection}</div>;
  }

  return (
    <div className="my-5">
      <ShowDetailData title={dataDetail.title} description={dataDetail.description} responsibles={dataDetail.responsibles} />
    </div>
  );
};

export default Detail;
