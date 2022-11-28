import privateService from "Services/privateApiService";
import { URLs } from "Services/ServicesURLS";
import { handleUserConfirm as AlertWarning } from "utilities/alerts/userConfirm.util";
import { feedbackUser as Alert } from "utilities/alerts/feedbackUser.util";
import { validationSchema, convertToBase64 } from '../utilities/utilities';
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { privateRoutes } from "models/routes";
import { convertUrlToBase64 } from "utilities/convertURLtoBase64.util";

export const useCategory = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const schema = { name: '' };
    const [ category, setCategory ] = useState({
        name: '',
        image: '',
        description: ''
    });
    const [imageB64, setImageB64] = useState('');
    const initialValues = {
        name: '',
        image: '',
        description: ''
    };

    const createCategory = (body) => {
        AlertWarning('¿Estas Segura/o?')
            .then(confirm => {
                if(confirm){
                    privateService.post(URLs.category, body)
                        .then(res => {
                            if(res.success){
                                Alert('center', 'success', 'Operación éxitosa')
                                    .then(()=>{
                                        setFieldValue('name', '');
                                        setFieldValue('image', '');
                                        setFieldValue('description', '');
                                        setImageB64('');
                                        navigate(privateRoutes.BACKOFFICE+privateRoutes.CATEGORIES);
                                    });
                            }else Alert('center', 'error', 'Ha ocurrido un error');
                        })
                        .catch(() => Alert('center', 'error', 'Ha ocurrido un error'));
                }
            });
    }

    const editCategory = async (id, body) => {
        if(category.image && !imageB64) {
            console.log(await convertUrlToBase64(category.image));
            // AlertWarning('¿Estas Segura/o?')
            // .then(confirm => {
            //     if(confirm){
            //         privateService.put(URLs.category, id, body)
            //             .then(res => {
            //                 // console.log(res);
            //                 if(res.success){
            //                     Alert('center', 'success', 'Operación éxitosa')
            //                         .then(()=>{
            //                             setFieldValue('name', '');
            //                             setFieldValue('image', '');
            //                             setFieldValue('description', '');
            //                             setImageB64('');
            //                             navigate(privateRoutes.BACKOFFICE+privateRoutes.CATEGORIES);
            //                         });
            //                 }else Alert('center', 'error', 'Ha ocurrido un error 1');
            //             })
            //             .catch(() => Alert('center', 'error', 'Ha ocurrido un error 2'));
            //     }
            // });
        } else {
            console.log(false);
        }

        // AlertWarning('¿Estas Segura/o?')
        //     .then(confirm => {
        //         if(confirm){
        //             privateService.put(URLs.category, id, body)
        //                 .then(res => {
        //                     // console.log(res);
        //                     if(res.success){
        //                         Alert('center', 'success', 'Operación éxitosa')
        //                             .then(()=>{
        //                                 setFieldValue('name', '');
        //                                 setFieldValue('image', '');
        //                                 setFieldValue('description', '');
        //                                 setImageB64('');
        //                                 navigate(privateRoutes.BACKOFFICE+privateRoutes.CATEGORIES);
        //                             });
        //                     }else Alert('center', 'error', 'Ha ocurrido un error 1');
        //                 })
        //                 .catch(() => Alert('center', 'error', 'Ha ocurrido un error 2'));
        //         }
        //     });
    }

    const onSubmit = () => {
        const { name, description } = values;
        const body = { name, description, image: imageB64 };
        if(id) {
            editCategory(id, body);
        }else {
            createCategory(body);
        }
    }
    const formik = useFormik({ initialValues, onSubmit, validationSchema });
    const { handleChange, handleSubmit, values, errors, handleBlur, touched, setFieldValue } = formik;
    
    function handleImage(e){
        const image = e.target.files[0];
        if(image) {
            setFieldValue('image', image);
            convertToBase64( image, setImageB64 );
        }
        else setFieldValue('image', '');
    }

    return{
        handleChange,
        handleSubmit,
        values,
        errors,
        handleBlur,
        touched,
        setFieldValue,
        imageB64,
        setImageB64,
        id,
        handleImage,
        category,
        setCategory,
        schema
    }
}