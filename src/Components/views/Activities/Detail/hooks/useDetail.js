import { useGetParams } from "hooks/useGetParams";
import { useEffect, useState } from "react";
import { postDetail } from "../interceptor/postDetail.interceptor";

export const useDetail = () => {
  const { parameterValue: idDetail } = useGetParams("id");

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
  }, []);

  return { dataDetail, loadingDetail };
};
