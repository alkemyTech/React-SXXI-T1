import { useFormik } from "formik";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
import { useEffect, useState } from "react";
import { newsValidationSchema } from "../utilities/utilities";
import { api } from 'Services/axiosService';
import { convertUrlToBase64 } from "utilities/convertURLtoBase64.util";
import Alert from "../../components/Alert";

export const useNewsForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ imageBase64, setImageBase64] = useState("");
  const [ categories, setCategories ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ news, setNews ] = useState({
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

  useEffect(() => {
    api.get(`/categories`)
    .then(res => {
      const { data } = res.data;
      const categories = data.map(element => {
        return {
          id: element.id,
          name: element.name
        }
      })
      setCategories( categories);
    })
  }, []);

  const backURL = '/backoffice';

  const onSubmit = async () => {
    const { name, content, category_id } = values;
    const body = { name, content, category_id, image: imageBase64 }

    if(id) {
      const bodyEdit = { 
        ...news, 
        ...body, 
        image: imageBase64 || await convertUrlToBase64(news.image)
      }
      const alertWarning = await Alert({ icon:'warning', 
            title:'¿Estas segura/o de enviarlo?', 
            cancelText: 'Cancelar' })
      
      if (alertWarning.isConfirmed) {
        setLoading(true);
        const apiResponse = await api.put(`/news/${id}`, bodyEdit)
        if(apiResponse.data.success) {
          setLoading(false);
          await Alert({ icon: 'success', title: 'Operación éxitosa'})
          navigate(backURL)
        } else {
          await Alert({ icon: 'error', title: 'Ha ocurrido un error'});
        }
      }
    } else {
      const alertWarning = await Alert({ icon:'warning', 
                title:'¿Estas segura/o de enviarlo?', 
                cancelText: 'Cancelar' })

      if(alertWarning.isConfirmed) {
        setLoading(true);
        const apiResponse = await api.post(`/news`, body)
        if(apiResponse.data.success) {
          setLoading(false);
          await Alert({ icon: 'success', title: 'Operación éxitosa'})
          navigate(backURL)
        } else {
          await Alert({ icon: 'error', title: 'Ha ocurrido un error'});
        }
      }
    }
  }

  const validationSchema = newsValidationSchema(id);

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
    if (Object.keys(news).length > 0) {
      setFieldValue("name", news.name);
      setFieldValue("content", news.content);
      setFieldValue("image", news.image);
      setFieldValue("category_id", news.category_id);
    }
  }, [news, setFieldValue]);

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
    cancel,
    setImageBase64,
    setFieldValue,
    categories
  } 

}