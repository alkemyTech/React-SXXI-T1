import axios from "axios";
import { api } from "Services/axiosService";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";
import { slidesAdapter } from "../adapter/slides.adapter";

export const getSlides = async ({ id = null }) => {
  try {
    const restUrl = id ? "slides/" + id : "slides";

    const { data } = await api(restUrl, {
      method: "get",
    });

    if (!data || !data.success)
      throw new Error(
        data ? data.message : requestMessagesSchema.problemExistTryLater
      );

    const dataAdapter = id
      ? slidesAdapter(data.data)
      : data.data.map((slice) => slidesAdapter(slice));

    return { success: data.success, data: dataAdapter };
  } catch (error) {
    console.error("error interceptor getSlides", error.message);
    if (axios.isCancel(error)) {
      return { message: "solicitud axios cancelada" };
    }
    return { success: false, message: error.message };
  }
};
