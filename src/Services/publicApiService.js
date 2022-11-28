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

/**
var axios = require('axios');
var data = JSON.stringify({
  "name": "pedro",
  "email": "pedro3@gmail.com",
  "password": "123qwe!"
});

var config = {
  method: 'post',
  url: 'https://ongapi.alkemy.org/api/register',
  headers: { 
    'Content-Type': 'application/json', 
    'Cookie': 'XSRF-TOKEN=eyJpdiI6IndrNHVsMUd2QTZ0M0NvUlpKMUZhbFE9PSIsInZhbHVlIjoiaUNvR0ZxaWMyZXVmOGJUY29iUWNFQmpYMzVVSk41V3p5WnhUOHNiNVZrUEI0NTNHcHdQU042cmFPQmt3OXZOQjNJTmtuZjN3R21rdDNkTVEwdnZOOUl3RUR4b3VpMTB4UGFZenBCQnFHcVZWWHhQTGcrS0VQZ3VjSEhoMTNzcXgiLCJtYWMiOiI0NTk2OTFlMTU1OGQzY2UxNDE2ZGIzYzEyYmEzOTFjMWM3YWFhOWJkYjNmNzA3ZDFmYmFiNzAyMGVjZDM0MzgzIn0%3D; ong_api_session=eyJpdiI6Ill3M3NDeFRPamt1S0lTVG9paEN6OGc9PSIsInZhbHVlIjoicENZTmpjYTJZMWtMVS9LOHBzaFNleTZtQzhTa0VReWcweXdFUmVhTy9xV2lnYUxCdGZxTmJZeWdELzJpRHVuaURCYVRSQU0zQ2hPbjNDSXJ5bFdmdkZvV20zenR4OGJkK2NBR3p3WXpqdlQrNldxdGdaRVo4UmVDNDNoOUlIMTMiLCJtYWMiOiI1NjNkM2IzZTc0YzJjMDFiZThlZDBlNmIxNzk1MmYxNDE4OWMzNmJkYjMwMjRjMWJjYjUwMTY3ZjdkMDU4MWY5In0%3D'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
 */
