import axios from "axios";
import { publicApi } from "./publicApiService";
import { privateApi } from "./privateApiService";
import { requestMessagesSchema } from 'utilities/requestMessagesSchema.util';

const url = 'members';

export const getMembers = async () => {
    try {
        const { data } = await publicApi(url, {
            method: 'get',
        });
        if (!data || !data.success)
          throw new Error(
            data ? data.message : requestMessagesSchema.problemExistTryLater
          );

        const dataAdapter = data.data;

        return { success: data.success, data: dataAdapter };
    } catch (error) {
        console.error("error interceptor: ", error.message);
        if (axios.isCancel(error)) {
          return { message: "solicitud axios cancelada" };
        }
        return { success: false, message: error.message };
    }
}

export const getMember = async (id) => {
    try {
        const { data } = await publicApi(`${url}/${id}`,{
            method: 'get'
        });
        if (!data || !data.success)
          throw new Error(
            data ? data.message : requestMessagesSchema.problemExistTryLater
          );

        const dataAdapter = data.data;

        return { success: data.success, data: dataAdapter };
    } catch (error) {
        console.error("error interceptor: ", error.message);
        if (axios.isCancel(error)) {
          return { message: "solicitud axios cancelada" };
        }
        return { success: false, message: error.message };
    }
}

export const postMember = async (body) => {
    try {
        const { data } = await privateApi(url, {
            method: 'post',
            body: body,
        });
        if (!data || !data.success)
          throw new Error(
            data ? data.message : requestMessagesSchema.problemExistTryLater
          );

        const dataAdapter = data.data;

        return { success: data.success, data: dataAdapter };
    } catch (error) {
        console.error("error interceptor: ", error.message);
        if (axios.isCancel(error)) {
          return { message: "solicitud axios cancelada" };
        }
        return { success: false, message: error.message };
    }
}

export const putMember = async (id, body) => {
    try {
        const { data } = await privateApi(`${url}/${id}`, {
            method: 'put',
            body: body,
        });
        if (!data || !data.success)
          throw new Error(
            data ? data.message : requestMessagesSchema.problemExistTryLater
          );

        const dataAdapter = data.data;

        return { success: data.success, data: dataAdapter };
    } catch (error) {
        console.error("error interceptor: ", error.message);
        if (axios.isCancel(error)) {
          return { message: "solicitud axios cancelada" };
        }
        return { success: false, message: error.message };
    }
}

export const deleteMember = async (id) => {
    try {
        const { data } = await privateApi(`${url}/${id}`, {
            method: 'delete',
        });
        if (!data || !data.success)
          throw new Error(
            data ? data.message : requestMessagesSchema.problemExistTryLater
          );

        const dataAdapter = data.data;

        return { success: data.success, data: dataAdapter };
    } catch (error) {
        console.error("error interceptor: ", error.message);
        if (axios.isCancel(error)) {
          return { message: "solicitud axios cancelada" };
        }
        return { success: false, message: error.message };
    }
}