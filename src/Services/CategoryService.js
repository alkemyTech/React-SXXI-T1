import axios from "axios";
import { api } from "./axiosService";
import { requestMessagesSchema } from 'utilities/requestMessagesSchema.util'

const url = 'categories';

export const getCategories = async () => {
    try {
        const { data } = await api(url, {
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

export const getCategory = async (id) => {
    try {
        const { data } = await api(`${url}/${id}`,{
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

export const postCategory = async (body) => {
    try {
        const { data } = await api(url, {
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

export const putCategory = async (id, body) => {
    try {
        const { data } = await api.get(`${url}/${id}`, {
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

export const deleteCategory = async (id) => {
    try {
        const { data } = await api.get(`${url}/${id}`, {
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