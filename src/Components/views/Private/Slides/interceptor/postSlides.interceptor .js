import { apiCall } from "Services/apiCall.service";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";

export const postSlides = async (datae) => {
  try {
    const restUrl = "slides";

    const headers = {
      "Content-Type": "application/json",
    };

    // me falta el id del usuario
    // const body = { ...data, user_id: 1 };

    console.log(datae);

    const postData = await apiCall({
      restUrl,
      body: { ...datae, user_id: null },
      method: "post",
      headers,
    });

    console.log({ postData });

    // if (!postData || !postData.success)
    //   throw new Error(
    //     postData ? postData.message : requestMessagesSchema.problemExistTryLater
    //   );

    // return { success: postData.success, data: dataAdapter };
  } catch (error) {
    console.error("error interceptor postSlides", error.message);
    return { success: false, message: error.message };
  }
};
