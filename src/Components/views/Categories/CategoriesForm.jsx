import React, { useEffect, useState } from 'react';
import { Form } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import CKEditorComponent from 'Components/GlobalComponents/CKEditor/CKEditorComponent';
import { Formulary, Input, ButtonConfirm, Errors,
        ContainerInputError, ButtonCancel } from './CategoriesStyled/CategoriesStyled';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
// import { useDispatch } from 'react-redux';

const CategoriesForm = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const [description, setDescription] = useState('');
    const [descError, setDescError] = useState('');
    const initialValues = {
        name: '',
        image: ''
    };

    // useEffect(()=>{
    //     if(id) axios.get(`${URL}/${id}`);
    // },[id]);

    const onSubmit = () => {
        if(descError !== '' && description !== ''){
            if(id) {
                // axios.put(`${URL}/${id}`, {});
                alert('cambios guardados');
                navigate('/backoffice/categories');
            }else {
                // axios.post(URL, {});
                alert('categoria creada');
                navigate('/backoffice/categories');
            }
        }
    }
    const cancel = () => {
        navigate('/backoffice/categories');
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(4, 'El nombre debe contener almenos 4 caracteres').required('Campo obligatorio'),
        image: Yup.string().required('Campo obligatorio')
    });
    const formik = useFormik({ initialValues, onSubmit, validationSchema });
    const { handleChange, handleSubmit, values, errors, handleBlur, touched } = formik;
    return (
        <>
        <Formulary className='my-5' onSubmit={ handleSubmit }>
        <h1>{ id ? 'Formulario de edición de categoría' : 'Formulario de creación de categoría'}</h1>
            <Form.Group>
                <ContainerInputError>
                    <Form.Label>Nombre de la categoría:</Form.Label>
                    <Input type="text" name="name" placeholder='Nombre' onBlur={ handleBlur }
                        className={errors.name ? 'border-danger' : ''}
                        value={ id ? 'Categoría 1' : values.name } onChange={ handleChange } />
                    { errors.name && touched.name && <Errors>{errors.name}</Errors> }
                </ContainerInputError>
                <ContainerInputError>
                    <Form.Label>Selecciona una imagen:</Form.Label>
                    <Input accept="image/png,image/jpeg" type='file' name="image"
                        className={errors.image ? 'border-danger' : ''}
                        value={ values.image } onChange={ handleChange }/>
                        { errors.image && <Errors>{errors.image}</Errors> }
                </ContainerInputError>
                <ContainerInputError>
                    <Form.Label>Agrega una descripción:</Form.Label>
                    <CKEditorComponent id={ id } setDescription={ setDescription }
                                       setDescError={ setDescError } />
                    { descError && <Errors>{ descError }</Errors> }
                </ContainerInputError>
            </Form.Group>
            <ButtonConfirm className='mt-2 col-sm-5 col-md-2'
                background='success' color='success' type='submit'
            >
                Confirmar
            </ButtonConfirm>
            <ButtonCancel className='col-sm-5 col-md-2'
                background='default' color='success' type='button'
                onClick={ cancel }
            >
                Cancelar
            </ButtonCancel>
        </Formulary>
        </>
    );
}
 
export default CategoriesForm;