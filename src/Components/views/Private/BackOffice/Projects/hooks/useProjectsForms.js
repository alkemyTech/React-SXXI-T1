import { useFormik } from "formik";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
import { useEffect, useState } from 'react';
import { convertToBase64, Alert, activityValidationSchema } from "../utilities/utilities";
import { api } from 'Services/axiosService';
import { convertUrlToBase64 } from "utilities/convertURLtoBase64.util";

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

    const cancel = () => {
        navigate(backURL);
    }

    const onSubmit = async () => {
        const { title, description, due_date } = values;
        const body = { title, description, due_date, image: imageBase64 };
        
        if(id) {
            const bodyEdit = { 
                ...project, 
                ...body, 
                image: imageBase64 || await convertUrlToBase64(project.image)
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
            const alertWarning = await Alert({ icon:'warning', 
                title:'¿Segura/o?', 
                cancelText: 'Cancelar' })
            if(alertWarning.isConfirmed) {
              setLoading(true);
              const apiResponse = await api.post(`/projects`, body);
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

    function handleImage(e){
      const image = e.target.files[0];
      if(image) {
          formik.setFieldValue('image', image);
          convertToBase64( image, setImageBase64 );
      } else {
        formik.setFieldValue('image', '');
      } 
    }
 
    const validationSchema = activityValidationSchema(id);

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
        handleImage,  
        cancel,
        setImageBase64,  
        id, 
        setFieldValue 
    }

}