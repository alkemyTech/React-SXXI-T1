import axios from "axios";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";

const privateApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const get = async (restURL) => {
  try {
    const { data } = await privateApi(restURL, {
      method: "get",
    });

    if (!data || !data.success) throw new Error(data.message || requestMessagesSchema.problemExistTryLater);

    const dataAdapter = data.data;

    return { success: data.success, data: dataAdapter };
  } catch (error) {
    console.error("error interceptor: ", error.message);
    if (axios.isCancel(error)) {
      return { message: "solicitud axios cancelada" };
    }
    return { success: false, message: error.message };
  }
};

const post = async (restURL, body) => {
  try {
    const { data } = await privateApi(restURL, {
      method: "post",
      data: body,
    });
    if (!data || !data.success) throw new Error(data.message || requestMessagesSchema.problemExistTryLater);

    const dataAdapter = data.data;

    return { success: data.success, data: dataAdapter };
  } catch (error) {
    console.error("error interceptor: ", error.message);
    if (axios.isCancel(error)) {
      return { message: "solicitud axios cancelada" };
    }
    return { success: false, message: error.message };
  }
};

const put = async (restURL, id, body) => {
  try {
    const { data } = await privateApi(`${restURL}/${id}`, {
      method: "put",
      data: body,
    });

    if (!data || !data.success || data.error) throw new Error(data.message || requestMessagesSchema.problemExistTryLater);

    const dataAdapter = data.data;

    return { success: data.success, data: dataAdapter };
  } catch (error) {
    console.error("error interceptor: ", error.message);
    if (axios.isCancel(error)) {
      return { success: false, message: "solicitud axios cancelada" };
    }
    return { success: false, message: error.message };
  }
};

const deleted = async (restURL, id) => {
  try {
    const { data } = await privateApi(`${restURL}/${id}`, {
      method: "delete",
    });
    if (!data || !data.success) throw new Error(data.message || requestMessagesSchema.problemExistTryLater);

    const dataAdapter = data.data;

    return { success: data.success, data: dataAdapter };
  } catch (error) {
    console.error("error interceptor: ", error.message);
    if (axios.isCancel(error)) {
      return { message: "solicitud axios cancelada" };
    }
    return { success: false, message: error.message };
  }
};

const privateService = { get, post, put, deleted };
export default privateService;
