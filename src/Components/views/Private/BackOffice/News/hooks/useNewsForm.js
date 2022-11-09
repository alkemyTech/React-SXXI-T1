import { useFormik } from "formik";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
import { useEffect, useState } from "react";
import { validationSchema, convertToBase64, Alert } from "./../utilities/utilities";
import { api } from 'Services/axiosService';

export const useNewsForm = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [ imageBase64, setImageBase64] = useState("");
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState({
      name: '',
      category_id: '',
      content: '',
      image: ''
  });
  const initialValues = {
      name: '',
      category_id: '',
      content: '',
      image: ''
  };

  useEffect(()=>{
      if(id) {
        api.get(`/news/${id}`)
        .then(res => {
          const { data } = res.data;
          setNews({
            name: data.name,
            category_id: data.category_id,
            content: data.content,
            image: data.image
          });
        })
        .catch(() => {
          Alert({ icon: 'error', title: 'Ha ocurrido un error'});
        });    
      }
    },[id]);

  const backURL = '/backoffice/news';

  const onSubmit = () => {
    const { name, content, category_id } = values;
    const body = { name, content, category_id, imageBase64 }
    if(id) {
      Alert({ icon:'warning', 
            title:'¿Estas segura/o de cancelar?', 
            cancelText: 'Cancelar' })
      .then((res) => {
          if (res.isConfirmed) {
            setLoading(true);
            api.put(`/news/${id}`, body)
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
                title:'¿Estas segura/o de enviarlo?', 
                cancelText: 'Cancelar' })
        .then((res) => {
          if (res.isConfirmed) {
            setLoading(true);
            api.post(`/news`, body)
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
  
  const formik = useFormik(
    {
      initialValues, 
      onSubmit, 
      validationSchema
    });

  const {
    values, 
    errors, 
    handleBlur, 
    handleSubmit, 
    handleChange, 
    touched
  } = formik;

  const cancel = () => {
    navigate(backURL);
}

  return {
    values, 
    errors, 
    handleBlur, 
    handleSubmit, 
    handleChange, 
    touched, 
    news, 
    loading, 
    formik, 
    handleImage, 
    cancel
  } 

}