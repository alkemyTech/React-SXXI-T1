import axios from "axios";
import { api } from "Services/axiosService";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";

export const postSlides = async (dataToSend) => {
  try {
    const restUrl = "slides";

    const { data } = await api(restUrl, {
      method: "post",
      data: { ...dataToSend, user_id: null },
    });

    if (!data || !data.success)
      throw new Error(
        data ? data.message : requestMessagesSchema.problemExistTryLater
      );

    return {
      success: data.success,
      message: requestMessagesSchema.successfullyOperation,
    };
  } catch (error) {
    console.error("error interceptor postSlides", error.message);
    if (axios.isCancel(error)) {
      return { message: "solicitud axios cancelada" };
    }

    return { success: false, message: error.message };
  }
};
