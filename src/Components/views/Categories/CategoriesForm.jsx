import React, { useEffect, useState } from 'react';
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Formulary, Input, ButtonConfirm, Errors,
        ContainerInputError, ButtonCancel } from './CategoriesStyled/CategoriesStyled';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
import axios from 'axios';
import { validationSchema, convertToBase64 } from './utilities/utilities';

const CategoriesForm = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [category, setCategory] = useState({
        name: '',
        image: '',
        description: ''
    });

    const initialValues = {
        name: '',
        image: '',
        description: ''
    };
    
    const URL = 'https://ongapi.alkemy.org/api/categories';
    useEffect(()=>{
        if(id) {
            axios.get(URL+"/"+id)
                .then(res => {
                    const {data} = res.data;
                    setCategory({
                        name: data.name,
                        image: data.image,
                        description: data.description
                    });
                })
                .catch(() => {
                    alert('Ha ocurrido un error...');
                })
        }
    },[id]);
    
    const onSubmit = () => {
        if(id) {
            axios.put(URL+'/'+id, values)
            .then(() => {
                alert('cambios guardados');
                navigate('/backoffice/categories');
            })
            .catch(()=>{
                alert('Ha ocurrido un error...');
            });
        }else {
            axios.post(URL, values)
            .then(()=>{
                alert('categoria creada');
                navigate('/backoffice/categories');
            })
            .catch(()=>{
                alert('Ha ocurrido un error...')
            });
        }
    }
    function handleImage(e){
        const image = e.target.files[0];
        if(image) formik.setFieldValue('image', image);
        else formik.setFieldValue('image', '');
    }
    const formik = useFormik({ initialValues, onSubmit, validationSchema });
    const { handleChange, handleSubmit, values, errors, handleBlur, touched } = formik;
    
    const cancel = () => {
        navigate('/backoffice/categories');
    }
    console.log('Errores: ', errors);
    return (
        <>
        <Formulary className='my-5' onSubmit={ handleSubmit }>
        <h1>{ id ? 'Formulario de edición de categoría' : 'Formulario de creación de categoría'}</h1>
            <Form.Group className='col-sm-12 col-md-8'>
                <ContainerInputError>
                    <Form.Label>Nombre de la categoría:</Form.Label>
                    <Input type="text" name="name" placeholder='Nombre' onBlur={ handleBlur }
                        defaultValue={ id ? category.name : '' } onChange={ handleChange } />
                    { errors.name && touched.name && <Errors>{errors.name}</Errors> }
                </ContainerInputError>
            </Form.Group>
            <Form.Group className='col-sm-12 col-md-8'>
                <ContainerInputError>
                    <Form.Label>Selecciona una imagen:</Form.Label>
                    <Input accept="image/png,image/jpg" type='file' name="image"
                         onChange={ handleImage }/>
                        { errors.image && touched.image && <Errors>{errors.image}</Errors> }
                </ContainerInputError>
            </Form.Group>
            <Form.Group className='col-sm-12 col-md-8'>
                <ContainerInputError>
                    <Form.Label>Agrega una descripción:</Form.Label>
                    <CKEditor
                          name="description"
                          data={ category.description ? category.description : '' }
                          editor={ ClassicEditor }
                          config={{ placeholder: 'Descripción' }}
                          onChange={ (event, editor) => { 
                            formik.setFieldValue('description', editor.getData());
                           } }
                        />
                    { errors.description && <Errors>{ errors.description }</Errors> }
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