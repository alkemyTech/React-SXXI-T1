import { useFormik } from "formik";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
import { useEffect, useState } from "react";
import { validationSchema, convertToBase64, Alert } from "./../utilities/utilities";
import { api } from 'Services/axiosService';

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

  const backURL = '/backoffice';

  const cancel = () => {
    navigate(backURL);
  }

  const onSubmit = () => {
    const { name, email, role_id } = values;
    const body = { name, email, role_id, imageBase64 }
    if(id) {
      Alert({ icon:'warning', 
            title:'¿Estas segura/o de cancelar?', 
            cancelText: 'Cancelar' })
      .then((res) => {
          if (res.isConfirmed) {
            setLoading(true);
            api.put(`/users/${id}`, body)
              .then(()=> {
                Alert({ icon: 'success', title: 'Operación éxitosa'})
                  .then(() => navigate(backURL));
            })
            .catch(() => {
              Alert({ icon: 'error', title: 'Ha ocurrido un error'});
            });
          }
        })
        setLoading(false);
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