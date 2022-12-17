import { useEffect, useState } from "react";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";
import { URLs } from "Services/ServicesURLS";
import privateService from "Services/privateApiService";
import { encodeQueryParams } from "utilities/queryParams";
import { handleUserConfirm as AlertWarning } from "utilities/alerts/userConfirm.util";
import { useNavigate } from "react-router-dom";

export const useTestimonials = () => {
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);
  const [loading, setLoading] = useState(false);
  const tHead = ["#", "Nombre", "Descripción", "Acciones"];
  const myTableData = { name: "name", description: "description" };
  const navigate = useNavigate();

  function removeTagsOfString(str) {
    return str.replace(/(<([^>]+)>)/gi, "");
  }

  const fetchTestimonials = async (params = {}) => {
    try {
      setLoadingTestimonials(true);
      const queryParams = encodeQueryParams(params);
      const queryUrl = `${URLs.testimonial}?${queryParams}`;
      const fetchingTestimonials = await privateService.get(queryUrl);

      if (fetchingTestimonials && !fetchingTestimonials.success) throw new Error(fetchingTestimonials.message);
      const info = fetchingTestimonials.data.map((el) => {
        return {
          id: el.id,
          name: el.name,
          description: removeTagsOfString(el.description),
        };
      });
      setTestimonialsData(info);
    } catch (error) {
      console.error("error testimonios", error.message);
      feedbackUser("top-end", "error", `${requestMessagesSchema.problemExistTryLater} ${requestMessagesSchema.contactAdmin}`);
    } finally {
      setLoadingTestimonials(false);
    }
  };

  const handleDelete = async (id) => {
    const find = testimonialsData.find((el) => id === el.id);
    if (find) {
      const confirm = await AlertWarning(`¿Estas segura/o que deseas eliminar "${find.name}"?`);
      if (confirm) {
        setLoading(true);
        const res = await privateService.deleted(URLs.testimonial, id);
        if (res.success) {
          feedbackUser("center", "success", "Operación éxitosa");
          fetchTestimonials();
        } else feedbackUser("center", "error", "Ha ocurrido un error");
      }
      setLoading(false);
    }
  };

  const toEdit = (id) => {
    navigate(`edit/${id}`);
  };

  useEffect(() => {
    fetchTestimonials();
    // eslint-disable-next-line
  }, []);

  return { loadingTestimonials, testimonialsData, fetchTestimonials, tHead, myTableData, toEdit, handleDelete, loading };
};
