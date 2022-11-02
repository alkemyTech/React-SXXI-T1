import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postDetail } from "../interceptor/postDetail.interceptor";

export const useDetail = () => {
  const { id: idDetail } = useParams();

  const [dataDetail, setDataDetail] = useState({});
  const [loadingDetail, setLoadingDetail] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const detailsData = await postDetail(idDetail);

        setDataDetail(detailsData);
      } catch (error) {
        console.error("error Detail - fetchDetail", error.message);
      } finally {
        setLoadingDetail(false);
      }
    };

    fetchDetail();
  }, [idDetail]);

  return { dataDetail, loadingDetail };
};
