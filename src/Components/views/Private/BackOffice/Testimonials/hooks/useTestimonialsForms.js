import { useFormik } from "formik";
import * as Yup from 'yup';
import { validationMessages } from 'utilities/validationMessage.util';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
// import { useDispatch } from 'react-redux';

export const useTestimonialsForms = () => {
  const {id} = useParams();
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const nameRegExp = /[a-z, A-Z]{4}/

    const validationSchema = Yup.object().shape({
        name : Yup.string()
          .min(4, validationMessages.name.fieldLength)
          .matches(nameRegExp, validationMessages.name.format)
          .required(validationMessages.name.required),
        image: Yup.string()
          .required(validationMessages.image.required)
          .oneOf(
            ["image/png", "image/jpeg", "image/jpg"],
            "El formato de la imagen tiene que ser jpg, 0 png"
          )
    });

    const initialValues = {
        name: '',
        image: ''
    };

    // useEffect(()=>{
    //     if(id) axios.get(`${URL}/${id}`);
    // },[id]);

    const onSubmit = () => {
        if(id) {
            // axios.put(`${URL}/${id}`, {});
            alert('cambios guardados');
            navigate('/backoffice/testimonials');
        }else {
            // axios.post(URL, {});
            alert('categoria creada');
            navigate('/backoffice/testimonials');
        }
        console.log(formik.values);
    }

    const handleClick = () => {
      navigate('/backoffice/testimonials');
    }
    const formik = useFormik({initialValues, onSubmit, validationSchema});

    const {values, errors, handleBlur, handleSubmit, handleChange, touched} = formik;

    return {values, errors, handleBlur, handleSubmit, handleChange, handleClick, touched}

}