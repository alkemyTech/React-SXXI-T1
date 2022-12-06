import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postDetail } from "../interceptor/postDetail.interceptor";
import { feedbackUser as AlertWarning } from "utilities/alerts/feedbackUser.util";

export const useDetail = () => {
  const { id: idDetail } = useParams();

  const [dataDetail, setDataDetail] = useState(null);
  const [loadingDetail, setLoadingDetail] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const detailsData = await postDetail(idDetail);

        setDataDetail(detailsData);
      } catch (error) {
        AlertWarning("center", "error", "Ha ocurrido un error al buscar las actividades.");
      } finally {
        setLoadingDetail(false);
      }
    };

    fetchDetail();
  }, [idDetail]);

  return { dataDetail, loadingDetail };
};
