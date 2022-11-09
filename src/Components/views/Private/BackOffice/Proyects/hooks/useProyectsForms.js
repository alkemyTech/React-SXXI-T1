import { useEffect, useState } from 'react';
import { useFormik } from "formik";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
import { validationSchema, convertToBase64, Alert } from './../utilities/utilities';
import { api } from 'Services/axiosService';

export const useProyectsForms = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [imageB64, setImageB64] = useState('');
    const [loading, setLoading] = useState(false);
    const [project, setProject] = useState({
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

    const onSubmit = () => {
        const { title, description } = values;
        const body = { title, description, imageB64 };
        
        if(id) {
            Alert({ icon:'warning', 
                    title:'¿Estas segura/o?', 
                    cancelText: 'Cancelar' })
            .then(res => {
                if(res.isConfirmed) {
                    setLoading(true);
                    api.put(`/projects/${id}`, body)
                    .then(() => {
                        Alert({ icon: 'success', title: 'Operación éxitosa'})
                        .then(() => navigate(backURL));
                    })
                    .catch(()=>{
                        Alert({ icon: 'error', title: 'Ha ocurrido un error'});
                    });
                }
            })
            setLoading(false);
        }else {
            Alert({ icon:'warning', 
                    title:'¿Estas segura/o?', 
                    cancelText: 'Cancelar' })
            .then(res => {
                if(res.isConfirmed) {
                    setLoading(true);
                    api.post(`/projects`, body)
                    .then(() => {
                        Alert({ icon: 'success', title: 'Operación éxitosa'})
                        .then(() => navigate(backURL));
                    })
                    .catch(()=>{
                        Alert({ icon: 'error', title: 'Ha ocurrido un error'});
                    });
                }
            })
            setLoading(false);
        }
    }

    function handleImage(e){
      const image = e.target.files[0];
      if(image) {
          formik.setFieldValue('image', image);
          convertToBase64( image, setImageB64 );
      }
      else formik.setFieldValue('image', '');
    }
 

    const formik = useFormik({initialValues, onSubmit, validationSchema});

    const {values, errors, handleBlur, handleSubmit, handleChange, touched} = formik;

    return {values, errors, handleBlur, handleSubmit, handleChange, handleImage, touched, cancel, loading, project, id, formik }

}