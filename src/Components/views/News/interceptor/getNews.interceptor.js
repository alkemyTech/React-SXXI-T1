import axios from "axios";
import { api } from "Services/axiosService";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";
import { newsAdapter } from "../adapter/news.adapter";

export const getNews = async () => {
  try {
    const restUrl = "news";

    const { data } = await api(restUrl, {
      method: "get",
    });

    if (!data || !data.success)
      throw new Error(
        data ? data.message : requestMessagesSchema.problemExistTryLater
      );

    const dataAdapter = data.data.map((item) => newsAdapter(item));

    return { success: data.success, data: dataAdapter };
  } catch (error) {
    console.error("error interceptor getSlides", error.message);
    if (axios.isCancel(error)) {
      return { message: "solicitud axios cancelada" };
    }
    return { success: false, message: error.message };
  }
};
