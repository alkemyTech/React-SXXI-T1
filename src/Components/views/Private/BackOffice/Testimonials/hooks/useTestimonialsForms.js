import { useFormik } from "formik";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
import { useEffect, useState } from "react";
import axios from 'axios';
import { validationSchema, convertToBase64 } from "./../utilities/utilities";
import { apiCall } from "Services/apiCall.service";

export const useTestimonialsForms = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  
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
          axios.get(`https://ongapi.alkemy.org/api/testimonials/${id}`)
              .then(res => {
                  const {data} = res.data;
                  setTestimonial({
                      name: data.name,
                      image: data.image,
                      description: data.description
                  });
              })
              .catch(() => {
                alert('Ha ocurrido un error...');
              })
      }
      /*
      (async () => {
        const info = await apiCall({ restUrl: `testimonials/466` });
        setTestimonial(info)
      })()
      */
      },[id]);

  const URL = 'https://ongapi.alkemy.org/api/testimonials';

  const onSubmit = () => {
    if(id) {
      axios.put(URL+'/'+id, values)
      .then(() => {
          alert('Cambios guardados');
          navigate('/backoffice/testimonials');
      })
      .catch(()=>{
          alert('Ha ocurrido un error...');
      });
    } else {
      axios.post(URL, values)
      .then(()=>{
          alert('Testimonio creado');
          navigate('/backoffice/testimonials');
      })
      .catch(()=>{
          alert('Ha ocurrido un error...')
      });
    }
  }

  function handleImage(e){
    const image = e.target.files[0];
    convertToBase64(image, formik.setFieldValue);
  }
  const formik = useFormik({initialValues, onSubmit, validationSchema});

  const {values, errors, handleBlur, handleSubmit, handleChange, touched} = formik;

  const handleClick = () => {
    navigate('/backoffice/testimonials');
  }

  return {values, errors, handleBlur, handleSubmit, handleChange, handleClick, touched, testimonial, formik , handleImage}

}