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
import { validationSchema, convertToBase64, Alert } from './utilities/utilities';
import { apiCall } from 'Services/apiCall.service';
// import Swal from 'sweetalert2';

const CategoriesForm = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [category, setCategory] = useState({
        name: '',
        image: '',
        description: ''
    });
    let image;
    const initialValues = {
        name: '',
        image: '',
        description: ''
    };
    
    useEffect(()=>{
        if(id) {
            (async ()=>{
                const response = await apiCall({restUrl:`categories/${id}`});
                console.log("respuesta: ", response)
                const {data} = response;
                setCategory({
                    name: data.name,
                    image: data.image,
                    description: data.description
                });
            })();
        }
    },[id]);
    
    const backURL = '/backoffice/categories';
    const onSubmit = () => {
        convertToBase64(image,formik.setFieldValue)
        console.log('Submit: ', values);
        // if(id) {
        //     Alert({ icon:'warning', 
        //             title:'¿Estas segura/o?', 
        //             cancelText: 'Cancelar' })
        //     .then(res => {
        //         if(res.isConfirmed) {
        //             (async ()=>{
        //                 const response = await apiCall({
        //                                     restUrl:`categories/${id}`,
        //                                     method: 'put',
        //                                     body: values });
        //                 if(response.success){
        //                     Alert({ icon: 'success', title: 'Operación éxitosa'})
        //                     .then(() => navigate(backURL))                            
        //                 }else{
        //                     Alert({ icon: 'error', title: 'Ha ocurrido un error'})
        //                 }
        //             })();
        //         }
        //     })
        // }else {
        //     Alert({ icon:'warning', 
        //             title:'¿Estas segura/o?', 
        //             cancelText: 'Cancelar' })
        //     .then(res => {
        //         if(res.isConfirmed) {
        //             (async ()=>{
        //                 const response = await apiCall({
        //                                     restUrl: 'categories',
        //                                     method: 'post',
        //                                     body: values });
        //                 if(response.success){
        //                     Alert({ icon: 'success', title: 'Operación éxitosa'})
        //                     .then(() => navigate(backURL))                            
        //                 }else{
        //                     Alert({ icon: 'error', title: 'Ha ocurrido un error'})
        //                 }
        //             })();
        //         }
        //     })
        // }
    }
    function handleImage(e){
        image = e.target.files[0];
        formik.setFieldValue('image',image);
        // convertToBase64(image, formik.setFieldValue)
        
        // if(image) formik.setFieldValue('image', image);
        // else formik.setFieldValue('image', '');
    }
    const formik = useFormik({ initialValues, onSubmit, validationSchema });
    const { handleChange, handleSubmit, values, errors, handleBlur, touched } = formik;
    
    const cancel = () => {
        navigate('/backoffice/categories');
    }
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