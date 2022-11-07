import { useFormik } from "formik";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
import { useEffect, useState } from "react";
import { validationSchema, convertToBase64, Alert } from "./../utilities/utilities";
import { api } from 'Services/axiosService';

export const useTestimonialsForms = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [ imageBase64, setImageBase64] = useState("")
  const [testimonial, setTestimonial] = useState({
        name: '',
        image: '',
        description: ''
    });
  const initialValues = {
      name: '',
      image: '',
      description: ''
  };

  useEffect(()=>{
      if(id) {
        api.get(`testimonials/${id}`)
        .then(res => {
          const { data } = res.data;
          setTestimonial({
            name: data.name,
            image: data.image,
            description: data.description
          });
        })
        .catch(() => {
          Alert({ icon: 'error', title: 'Ha ocurrido un error'});
        })    
      }
    },[id]);

  const backURL = '/backoffice/testimonials';

  const onSubmit = () => {
    const { name, description } = values;
    const body = { name, description, imageBase64 }
    if(id) {
      Alert({ icon:'warning', 
            title:'¿Estas segura/o?', 
            cancelText: 'Cancelar' })
      .then((res) => {
          if (res.isConfirmed) {
            api.put(`testimonials/${id}`, body)
              .then(()=> {
                Alert({ icon: 'success', title: 'Operación éxitosa'})
                  .then(() => navigate(backURL));
            })
            .catch(() => {
              Alert({ icon: 'error', title: 'Ha ocurrido un error'});
            });
          }
        })
      } else {
        Alert({ icon:'warning', 
                title:'¿Estas segura/o?', 
                cancelText: 'Cancelar' })
        .then((res) => {
          if (res.isConfirmed) {
            api.post(`testimonials/`, body)
            .then(()=> {
              Alert({ icon: 'success', title: 'Operación éxitosa'})
              .then(()=> navigate(backURL));
            })
            .catch(()=> {
              Alert({ icon: 'error', title: 'Ha ocurrido un error'});
            });
          } 
        })
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

  return {values, errors, handleBlur, handleSubmit, handleChange, touched, testimonial, formik , handleImage} 

}