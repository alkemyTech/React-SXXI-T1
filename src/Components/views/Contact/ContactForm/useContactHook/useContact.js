import publicService from "Services/publicApiService";
import { URLs } from "Services/ServicesURLS";
import { handleUserConfirm as AlertConfirm } from "utilities/alerts/userConfirm.util";
import { feedbackUser as Alert } from "utilities/alerts/feedbackUser.util";
import { useFormik } from "formik";
import { validationSchema, setValueAndTouch } from "../utilities/utilities";
import { useState } from "react";

export const useContact = () => {
    const [ loading, setLoading ] = useState(false);
    const initialValues = {
        fullname: '',
        email: '',
        phone: '',
        message: ''
    };
    
    const sendMessage = async (body) => {
        const confirm = await AlertConfirm('¿Estas segura/o?');
        if(confirm){
            const res = await publicService.post(URLs.contact, body);
            if(res.success) {
                setLoading(false);
                Alert('center', 'success', 'Mensaje enviado');
                setValueAndTouch(setFieldValue, setTouched);
            }else Alert('center', 'error', 'Ha ocurrido un error, intentelo más tarde');
        }
        setLoading(false);
    }

    const onSubmit = () => {
        setLoading(true);
        sendMessage(values);
    }

    const formik = useFormik({ initialValues, onSubmit, validationSchema });
    const { handleChange, handleSubmit, values, errors, handleBlur, 
        touched, setFieldValue, setTouched } = formik;

    return {
        handleChange,
        handleSubmit,
        handleBlur,
        values,
        errors,
        touched,
        loading
    }
}