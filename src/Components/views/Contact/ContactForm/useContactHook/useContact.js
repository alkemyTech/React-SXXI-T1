import privateService from "Services/privateApiService";
import { URLs } from "Services/ServicesURLS";
import { handleUserConfirm as AlertConfirm } from "utilities/alerts/userConfirm.util";
import { feedbackUser as Alert } from "utilities/alerts/feedbackUser.util";
import { useFormik } from "formik";
import { validationSchema, setValueAndTouch } from "../utilities/utilities";
export const useContact = () => {
    const initialValues = {
        fullname: '',
        email: '',
        phone: '',
        message: ''
    };
    const sendMessage = async (body) => {
        const confirm = await AlertConfirm('¿Estas segura/o?');
        if(confirm){
            const res = await privateService.post(URLs.contact, body);
            console.log(res);
            if(res.success) {
                Alert('center', 'success', 'Mensaje enviado');
                setValueAndTouch(setFieldValue, setTouched);
            }else Alert('center', 'error', 'Ha ocurrido un error, intentelo más tarde');
        }
    }

    const onSubmit = () => {
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
    }
}