import { useFormik } from "formik";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
import { useEffect, useState } from "react";
import { convertToBase64, Alert, activityValidationSchema } from "../utilities/utilities";
import { api } from 'Services/axiosService';
import { convertUrlToBase64 } from "utilities/convertURLtoBase64.util";

export const useActivitiesForm = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [ imageBase64, setImageBase64 ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ activity, setActivity ] = useState({
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
        api.get(`/activities/${id}`)
        .then(res => {
          const { data } = res.data;
          setActivity({
            name: data.name,
            image: data.image,
            description: data.description
          });
        })
        .catch(() => {
          Alert({ icon: 'error', title: 'Ha ocurrido un error'});
        });    
      }
    },[id]);

  const backURL = '/backoffice';

  const onSubmit = async () => {
    const { name, description } = values
    const body = { name, description, image: imageBase64 }
    if(id) {
      const bodyEdit = { ...activity, ...body, image: imageBase64 || await convertUrlToBase64(activity.image)}
      Alert({ icon:'warning', 
            title:'¿Seguro/a?', 
            cancelText: 'Cancelar' })
      .then((res) => {
          if (res.isConfirmed) {
            setLoading(true);
            api.put(`/activities/${id}`, bodyEdit)
              .then((response)=> {
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
                title:'¿Segura/o?', 
                cancelText: 'Cancelar' })
        .then((res) => {
          if (res.isConfirmed) {
            setLoading(true);
            api.post(`/activities`, body)
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
  
  const validationSchema = activityValidationSchema(id);

  const formik = useFormik({initialValues, onSubmit, validationSchema});

  const {values, errors, handleBlur, handleSubmit, handleChange, touched,  setFieldValue } = formik;

  useEffect(() => {
    if (Object.keys(activity).length > 0) {
      setFieldValue("name", activity.name);
      setFieldValue("description", activity.description);
      setFieldValue("image", activity.image);
    }
  }, [activity, setFieldValue]);


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
    activity, 
    loading, 
    formik, 
    handleImage, 
    cancel,
    setImageBase64,
    setFieldValue
  } 

}