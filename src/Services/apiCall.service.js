import axios from "axios";

const { REACT_APP_BASE_URL: BASEURL } = process.env;

const instance = axios.create({
  baseURL: BASEURL,
});

export const apiCall = async ({
  restUrl = "",
  body,
  headers,
  method = "get",
  abortController = undefined,
}) => {
  try {
    const controller = abortController || new AbortController();

    const request = await instance(restUrl, {
      method,
      signal: controller.signal,
      data: body,
      headers,
      timeout: 5000,
    });

    return request.data;
  } catch (error) {
    console.error("error", error.message);

    if (axios.isCancel(error)) {
      return "solicitud axios cancelada";
    }
    return { message: error.message };
  }
};
