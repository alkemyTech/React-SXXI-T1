import { apiCall } from "Services/apiCall.service";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";

export const postSlides = async (data) => {
  try {
    const restUrl = "slides";

    const headers = {
      "Content-Type": "application/json",
    };

    const postData = await apiCall({
      restUrl,
      body: { ...data, user_id: null },
      method: "post",
      headers,
    });

    if (!postData || !postData.success)
      throw new Error(
        postData ? postData.message : requestMessagesSchema.problemExistTryLater
      );

    return {
      success: postData.success,
      message: requestMessagesSchema.successfullyOperation,
    };
  } catch (error) {
    console.error("error interceptor postSlides", error.message);
    return { success: false, message: error.message };
  }
};
