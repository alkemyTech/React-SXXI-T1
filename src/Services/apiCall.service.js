import axios from "axios";

const { REACT_APP_BASE_URL: BASEURL } = process.env;

export const apiCall = async ({
  restUrl,
  body,
  headers,
  method = "get",
  personalController = undefined,
}) => {
  try {
    const url = restUrl ? `${BASEURL}/${restUrl}` : `${BASEURL}`;
    
    const instance = axios.create({
      url,
    });

    const controller = personalController || new AbortController();

    setTimeout(() => {
      controller.abort();
    }, 5000);

    const request = await instance[method](url, {
      signal: controller.signal,
      body,
      headers,
    });

    return request.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      return { success: false, message: "axios request cancelled" };
    }
    Promise.reject(new Error(error.message));
  }
};
