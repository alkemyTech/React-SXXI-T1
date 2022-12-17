import axios from "axios";
import { api } from "Services/axiosService";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";
import { contactDataAdapter } from "../adapter/contactData.adapter";

export const getContactData = async () => {
  try {
    const restUrl = "organization";

    const { data } = await api(restUrl, {
      method: "get",
    });

    if (!data || !data.success) throw new Error(data ? data.message : requestMessagesSchema.problemExistTryLater);

    const dataAdapter = contactDataAdapter(data.data);

    return { success: data.success, data: dataAdapter };
  } catch (error) {
    console.error("error interceptor getContactData", error.message);
    if (axios.isCancel(error)) {
      return { message: "solicitud axios cancelada" };
    }
    return { success: false, message: error.message };
  }
};
