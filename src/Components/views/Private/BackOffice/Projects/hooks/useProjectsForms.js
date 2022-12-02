import { useFormik } from "formik";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
import { useEffect, useState } from 'react';
import {  projectsValidationSchema } from "../utilities/utilities";
import { api } from 'Services/axiosService';
import Alert from "../../components/Alert";

export const useProjectsForms = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ imageBase64, setImageBase64 ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const [ project, setProject ] = useState({
        title: '',
        description: '',
        image: '',
        due_date:''
    });
  
    const initialValues = {
        title: '',
        description: '',
        image: '',
        due_date:''
    };

    useEffect(()=>{
    if(id) {
        api.get(`/projects/${id}`)
            .then(res => {
                const { data } = res.data;
                setProject({
                    title: data.title,
                    description: data.description,
                    image: data.image,
                    due_date: data.due_date
                });
            })
            .catch(()=>{
                Alert({ icon: 'error', title: 'Ha ocurrido un error'});
            });
        }
    },[id]);

    const backURL =  '/backoffice';

    const onSubmit = async () => {
        const { title, description, due_date } = values;
        const body = { title, description, due_date, image: imageBase64 };
        
        if(id) {
            const bodyEdit = { 
                ...project, 
                ...body, 
                image: imageBase64 || await (project.image)
            }
            const alertWarning = await Alert({ icon:'warning', 
                    title:'¿Estas segura/o?', 
                    cancelText: 'Cancelar' })

            if(alertWarning.isConfirmed) {
                setLoading(true);
                const apiResponse = await api.put(`/projects/${id}`, bodyEdit)
                if(apiResponse.data.success) {
                    setLoading(false);
                    await Alert({ icon: 'success', title: 'Operación éxitosa'});
                    navigate(backURL);
                } else {
                    await Alert({ icon: 'error', title: 'Ha ocurrido un error'});
                }
            }
        } else {
            console.log("body: ", body)
            console.log("imagen", body.image)
            const alertWarning = await Alert({ icon:'warning', 
                title:'¿Segura/o?', 
                cancelText: 'Cancelar' })
            if(alertWarning.isConfirmed) {
              setLoading(true);
              const apiResponse = await api.post(`/projects`, body);
              console.log(apiResponse)
              if(apiResponse.data.success) {
                setLoading(false);
                await Alert({ icon: 'success', title: 'Operación éxitosa'});
                navigate(backURL);
              } else {
                await Alert({ icon: 'error', title: 'Ha ocurrido un error'});
              }
            }
          }
      }
 
    const validationSchema = projectsValidationSchema(id);

    const formik = useFormik({initialValues, onSubmit, validationSchema});

    const {
        values, 
        errors, 
        handleBlur, 
        handleSubmit, 
        handleChange, 
        touched,
        setFieldValue
    } = formik;

    useEffect(() => {
        if (Object.keys(project).length > 0) {
          setFieldValue("title", project.title);
          setFieldValue("description", project.description);
          setFieldValue("image", project.image);
          setFieldValue("due_date", project.due_date);
        }
      }, [project, setFieldValue]);

    return {
        values, 
        errors, 
        handleBlur, 
        handleSubmit, 
        handleChange,
        touched, 
        project,
        loading, 
        formik,
        setImageBase64,  
        id, 
        setFieldValue 
    }

}