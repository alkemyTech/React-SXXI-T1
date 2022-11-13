import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
import {  projectsValidationSchema } from "../utilities/utilities";

import { api } from 'Services/axiosService';
import Alert from "../../components/Alert";
import { convertUrlToBase64 } from "utilities/convertURLtoBase64.util";


export const useUsersForm = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [ imageBase64, setImageBase64] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
    role_id: '',
    profile_image: ''
  });

  const initialValues = {
    name: '',
    email: '',
    role_id: '',
    profile_image: ''
  };

  useEffect(()=>{
      if(id) {
        api.get(`/users/${id}`)
        .then(res => {
          const { data } = res.data;
          setUser({
            name: data.name,
            email: data.email,
            role_id: data.role_id,
            profile_image: data.profile_image
          });
        })
        .catch(() => {
          Alert({ icon: 'error', title: 'Ha ocurrido un error'});
        });    
      }
  },[id]);

  const backURL =  '/backoffice';

  const onSubmit =async  () => {
    const { name, email, role_id } = values;
    const body = { name, email, role_id, image: imageBase64 };
    const alertWarning = await Alert(
      { 
        icon:'warning', 
        title:'¿Segura/o?', 
        cancelText: 'Cancelar' 
      }
    );

    if(id) {
      const bodyEdit = { 
        ...user, 
        ...body, 
        image: imageBase64 || await convertUrlToBase64(user.image)
      }
      if(alertWarning.isConfirmed) {
        setLoading(true);
        const apiResponse = await api.put(`/users/${id}`, bodyEdit)
        if(apiResponse.data.success) {
            setLoading(false);
            await Alert({ icon: 'success', title: 'Operación éxitosa'});
            navigate(backURL);
        } else {
            await Alert({ icon: 'error', title: 'Ha ocurrido un error'});
        }
      }
    } else {


      Alert({ icon:'warning', 
              title:'¿Estas segura/o de cancelar?', 
              cancelText: 'Cancelar' })
      .then((res) => {
        if (res.isConfirmed) {
          setLoading(true);
          api.post(`/users`, body)
          .then(()=> {
            Alert({ icon: 'success', title: 'Operación éxitosa'})
            .then(()=> navigate(backURL));
          })
          .catch(()=> {
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
      convertToBase64( image, setImageBase64 );
    } else {
      formik.setFieldValue('image', '');
    }
  }
  
  const formik = useFormik({initialValues, onSubmit, validationSchema});

  const {values, errors, handleBlur, handleSubmit, handleChange, touched} = formik;

  return {
    values, 
    errors, 
    handleBlur, 
    handleSubmit, 
    handleChange, 
    touched, 
    user, 
    loading, 
    formik, 
    handleImage, 
    cancel
  } 

}