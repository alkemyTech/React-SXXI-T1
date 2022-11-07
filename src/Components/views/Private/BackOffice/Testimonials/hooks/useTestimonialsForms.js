import { useFormik } from "formik";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
import { useEffect, useState } from "react";
import { validationSchema, convertToBase64 } from "./../utilities/utilities";
import Swal from 'sweetalert2';
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
          const { data }= res.data;
          setTestimonial({
            name: data.name,
            image: data.image,
            description: data.description
          });
          
        })
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salio mal!',
          });
        })    
      }
    },[id]);

  const backURL = '/backoffice/testimonials';

  const onSubmit = () => {
    const { name, description } = values;
    const obj = { name, description, imageBase64 }
    if(id) {
        Swal.fire({
          title: 'Queres guardar los cambios?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Guardar',
          denyButtonText: `No guardar`,
        }).then((result) => {
          if (result.isConfirmed) {
            api.put(`testimonials/${id}`)
              .then(()=> {
                Swal.fire('Guardado!', '', 'success')
                .then(()=> navigate(backURL))
            })
            .catch(() => {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
              })
            });
          }
        })
      } else {
        Swal.fire({
          title: 'Queres crear un testimonio?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Crear',
          denyButtonText: `No crear`,
        }).then((result) => {
          if (result.isConfirmed) {
            api.post(`testimonials/`, obj)
            .then(()=> {
              Swal.fire('Creado!', '', 'success')
              .then(()=> navigate(backURL))
            })
            .catch(()=> {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
              })
            })
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

  const handleClick = () => {
    navigate(backURL);
  }

  return {values, errors, handleBlur, handleSubmit, handleChange, handleClick, touched, testimonial, formik , handleImage}

}