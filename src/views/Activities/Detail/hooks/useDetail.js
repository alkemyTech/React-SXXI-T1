import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { URLs } from "Services/ServicesURLS";
import publicService from "Services/publicApiService";

export const useDetail = () => {
  const { id: idDetail } = useParams();

  const [dataDetail, setDataDetail] = useState(null);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [loadingCategory, setLoadingCategory] = useState(false);
  const [category, setCategory] = useState(null);

  const getDetail = () => {
    setLoadingDetail(true);
    publicService
      .get(`${URLs.activity}/${idDetail}`)
      .then((res) => {
        if (res.success) {
          setDataDetail({
            title: res.data.name,
            description: res.data.description,
            image: res.data.image,
            category_id: res.data.category_id,
          });
        } else feedbackUser("center", "error", "Ha ocurrido un error al cargar el detalle");
      })
      .catch(() => feedbackUser("center", "error", "Ha ocurrido un error al cargar el detalle"))
      .finally(() => setLoadingDetail(false));
  };

  const getCategory = () => {
    if (dataDetail) {
      if (dataDetail.category_id !== null || dataDetail.category_id !== undefined || dataDetail.category_id > 1) {
        setLoadingCategory(true);
        publicService
          .get(`${URLs.category}/${idDetail}`)
          .then((res) => {
            if (res.success) {
              setCategory({
                name: res.data.name,
                description: res.data.description,
                image: res.data.image,
              });
            } else feedbackUser("center", "error", "Ha ocurrido un error al cargar la categoría");
          })
          .catch(() => feedbackUser("center", "error", "Ha ocurrido un error al cargar la categoría"))
          .finally(() => setLoadingCategory(false));
      }
    }
  };

  useEffect(() => {
    getDetail();
    // eslint-disable-next-line
  }, [idDetail]);

  useEffect(() => {
    getCategory();
    // eslint-disable-next-line
  }, []);

  return { dataDetail, loadingDetail, category, loadingCategory };
};
