import axios from "axios";
import { api } from "Services/axiosService";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";

export const putSlides = async (dataToSend, idSlide) => {
  try {
    const restUrl = `slides/${idSlide}`;

    const { data } = await api(restUrl, {
      method: "put",
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
    console.error("error interceptor putSlides", error.message);
    if (axios.isCancel(error)) {
      return { message: "solicitud axios cancelada" };
    }

    return { success: false, message: error.message };
  }
};
