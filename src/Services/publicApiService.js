import axios from "axios"
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util"

const publicApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 5000,
})

const get = async (restURL) => {
  try {
    const { data } = await publicApi(restURL, {
      method: "get",
    })
    if (!data || !data.success) throw new Error(data ? data.message : requestMessagesSchema.problemExistTryLater)

    const dataAdapter = data.data

    return { success: data.success, data: dataAdapter }
  } catch (error) {
    console.error("error public get: ", error.message)
    if (axios.isCancel(error)) {
      return { message: "solicitud axios cancelada" }
    }
    return { success: false, message: error.message }
  }
}

const post = async (url, body) => {
  try {
    const { data } = await publicApi(url, {
      method: "post",
      data: body,
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!data || !data.success) throw new Error(data ? data.message || data.error : requestMessagesSchema.problemExistTryLater)

    const dataAdapter = data.data

    return { success: data.success, data: dataAdapter, message: requestMessagesSchema.successfullyOperation }
  } catch (error) {
    console.error("error public post: ", error.message)
    if (axios.isCancel(error)) {
      return { message: "solicitud axios cancelada" }
    }
    return { success: false, message: error.message }
  }
}

const publicService = { get, post }
export default publicService
