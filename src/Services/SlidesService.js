import axios from "axios";
import { api } from "./axiosService";
import { requestMessagesSchema } from 'utilities/requestMessagesSchema.util'

const url = 'slides';

export const getSlides = async () => {
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

export const getSlide = async (id) => {
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

export const postSlide = async (body) => {
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

export const putSlide = async (id, body) => {
    try {
        const { data } = await api(`${url}/${id}`, {
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

export const deleteSlide = async (id) => {
    try {
        const { data } = await api(`${url}/${id}`, {
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