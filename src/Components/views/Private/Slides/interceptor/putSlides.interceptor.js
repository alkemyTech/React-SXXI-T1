import { apiCall } from "Services/apiCall.service";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";

export const putSlides = async (data, idSlide) => {
  try {
    const restUrl = `slides/${idSlide}`;

    const putData = await apiCall({
      restUrl,
      body: { ...data, user_id: null },
      method: "put",
    });

    if (!putData || !putData.success)
      throw new Error(
        putData ? putData.message : requestMessagesSchema.problemExistTryLater
      );

    return {
      success: putData.success,
      message: requestMessagesSchema.successfullyOperation,
    };
  } catch (error) {
    console.error("error interceptor putSlides", error.message);
    return { success: false, message: error.message };
  }
};
