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
    const url = `${BASEURL}/${restUrl}`;
    const instance = axios.create({
      url: `${BASEURL}/${restUrl}`,
    });
    const controller = personalController || new AbortController();

    setTimeout(() => {
      controller.abort();
    }, 5000);

    let config = {
      signal: controller.signal,
      method,
      url,
      headers,
      data: body,
    };

    const request = await instance(config);
    return request.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      return { success: false, message: "axios request cancelled" };
    }
    Promise.reject(new Error(error.message));
  }
};
