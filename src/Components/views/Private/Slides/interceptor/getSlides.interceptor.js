import { apiCall } from "Services/apiCall.service";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";
import { slidesAdapter } from "../adapter/slides.adapter";

export const getSlides = async ({ id = null }) => {
  try {
    const restUrl = id ? "slides/" + id : "slides";

    const getData = await apiCall({ restUrl });

    if (!getData || !getData.success)
      throw new Error(
        getData ? getData.message : requestMessagesSchema.problemExistTryLater
      );

    const dataAdapter = id
      ? slidesAdapter(getData.data)
      : getData.data.map((slice) => slidesAdapter(slice));

    return { success: getData.success, data: dataAdapter };
  } catch (error) {
    console.error("error interceptor getSlides", error.message);
    return { success: false, message: error.message };
  }
};
