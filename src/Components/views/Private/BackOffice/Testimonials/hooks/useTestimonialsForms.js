import { useFormik } from "formik";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
import { useEffect, useState } from "react";
import axios from 'axios';
import { validationSchema, convertToBase64 } from "./../utilities/utilities";
import { apiCall } from "Services/apiCall.service";
import Swal from 'sweetalert2'

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
        try {
          (async () => {
            const info = await apiCall({ restUrl: `testimonials/${id}` });
            setTestimonial({
              name: info.data.name,
              image: info.data.image,
              description: info.data.description
          });
          })()
        } catch {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salio mal!',
          })
        } 
      }
      },[id]);

  const onSubmit = () => {
    const { name, description } = values;
    const obj = {
      name,
      description,
      imageBase64
    }
    if(id) {
        Swal.fire({
          title: 'Queres guardar los cambios?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Guardar',
          denyButtonText: `No guardar`,
        }).then((result) => {
          if (result.isConfirmed) {
            try {
              (async () => {
                await apiCall({ restUrl: `testimonials/${id}`, method: "put", body : obj });
              })()
              Swal.fire('Guardado!', '', 'success')
            } catch {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
              })
            }
          } else if (result.isDenied) {
            Swal.fire('Cambios no guardados', '', 'info')
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
          try {
            (async () => {
              await apiCall({ restUrl: `testimonials/`, method: "post", body: obj });
            })()
            Swal.fire('Creado!', '', 'success')
          } catch {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Algo salio mal!',
            })
          }
        } else if (result.isDenied) {
          Swal.fire('Cambios no guardados', '', 'info')
        }
      })
    }
  }

  function handleImage(e){
    const image = e.target.files[0];
    formik.setFieldValue("image", image)
    convertToBase64(image, setImageBase64)
  }
  const formik = useFormik({initialValues, onSubmit, validationSchema});

  const {values, errors, handleBlur, handleSubmit, handleChange, touched} = formik;

  const handleClick = () => {
    navigate('/backoffice/testimonials');
  }

  return {values, errors, handleBlur, handleSubmit, handleChange, handleClick, touched, testimonial, formik , handleImage}

}