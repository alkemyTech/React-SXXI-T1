import { apiCall } from "Services/apiCall.service";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";
import { newsAdapter } from "../adapter/news.adapter";

export const getNews = async () => {
  try {
    const restUrl = "news";

    const getData = await apiCall({ restUrl });

    if (!getData || !getData.success)
      throw new Error(
        getData ? getData.message : requestMessagesSchema.problemExistTryLater
      );

    const dataAdapter = getData.data.map((item) => newsAdapter(item));

    return { success: getData.success, data: dataAdapter };
  } catch (error) {
    console.error("error interceptor getSlides", error.message);
    return { success: false, message: error.message };
  }
};
