import axios from "axios"
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util"

export const publicApi = axios.create({
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
    console.error("error interceptor: ", error.message)
    if (axios.isCancel(error)) {
      return { message: "solicitud axios cancelada" }
    }
    return { success: false, message: error.message }
  }
}

const publicService = { get }
export default publicService
