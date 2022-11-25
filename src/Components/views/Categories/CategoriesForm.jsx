import React, { useEffect, useState } from 'react';
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Formulary, Input, ButtonConfirm, Errors, PreviewImg,
        ContainerInputError, ButtonCancel } from './CategoriesStyled/CategoriesStyled';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
import { validationSchema, convertToBase64, Alert } from './utilities/utilities';
import { api } from 'Services/axiosService';

const CategoriesForm = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [imageB64, setImageB64] = useState('');
    const [loading, setLoading] = useState(false);
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
    const backURL = '/backoffice/categories';
    const onSubmit = () => {
        const { name, description } = values;
        const body = { name, description, image: imageB64 };
        if(id) {
            Alert({ icon:'warning', 
            title:'¿Estas segura/o?', 
            cancelText: 'Cancelar' })
            .then(res => {
                if(res.isConfirmed) {
                    setLoading(true);
                    api.put(`/categories/${id}`, body)
                    .then(() => {
                        setLoading(false);
                        Alert({ icon: 'success', title: 'Operación éxitosa'})
                        .then(() => navigate(backURL));
                    })
                    .catch(()=>{
                        Alert({ icon: 'error', title: 'Ha ocurrido un error'});
                    });
                }
            })
        }else {
            Alert({ icon:'warning', 
                    title:'¿Estas segura/o?', 
                    cancelText: 'Cancelar' })
            .then(res => {
                if(res.isConfirmed) {
                    setLoading(true);
                    api.post(`/categories`, body)
                    .then(() => {
                        setLoading(false);
                        Alert({ icon: 'success', title: 'Operación éxitosa'})
                        .then(() => navigate(backURL));
                    })
                    .catch(()=>{
                        Alert({ icon: 'error', title: 'Ha ocurrido un error'});
                    });
                }
            })
        }
    }
    function handleImage(e){
        const image = e.target.files[0];
        if(image) {
            formik.setFieldValue('image', image);
            convertToBase64( image, setImageB64 );
        }
        else formik.setFieldValue('image', '');
    }
    const formik = useFormik({ initialValues, onSubmit, validationSchema });
    const { handleChange, handleSubmit, values, errors, handleBlur, touched, setFieldValue } = formik;
    useEffect(()=>{
        if(id) {
            api.get(`/categories/${id}`)
            .then(res => {
                const { data } = res.data;
                setCategory({
                    name: data.name,
                    image: data.image,
                    description: data.description
                });
                setFieldValue('name', data.name);
                setFieldValue('image', data.image);
                setFieldValue('description', data.description);
            })
            .catch(()=>{
                Alert({ icon: 'error', title: 'Ha ocurrido un error'});
            });
        }
    },[id, setFieldValue]);
    
    const cancel = () => {
        navigate(backURL);
    }
    return (
        <>
        <Formulary className='my-5' onSubmit={ handleSubmit }>
        <h1>{ id ? 'Formulario de edición de categoría' : 'Formulario de creación de categoría'}</h1>
            <Form.Group className='col-sm-12 col-md-8'>
                <ContainerInputError>
                    <Form.Label>Nombre de la categoría:</Form.Label>
                    <Input type="text" name="name" placeholder='Nombre' onBlur={ handleBlur }
                        value={ values.name } onChange={ handleChange } />
                    { errors.name && touched.name && <Errors>{errors.name}</Errors> }
                </ContainerInputError>
            </Form.Group>
            <Form.Group className='col-sm-12 col-md-8'>
                <ContainerInputError>
                    <Form.Label>Selecciona una imagen:</Form.Label>
                    <Input accept="image/png,image/jpg" type='file' name="image"
                         onChange={ handleImage } onBlur={handleBlur}/>
                        { errors.image && touched.image && <Errors>{errors.image}</Errors> }
                </ContainerInputError>
                { imageB64 ? <PreviewImg src={imageB64}/> : <PreviewImg src={values.image}/>}
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
            <ButtonConfirm className='mt-2 col-sm-5 col-md-2' disabled={loading}
                background='success' color='success' type='submit'
            >
                Confirmar
            </ButtonConfirm>
            <ButtonCancel className='col-sm-5 col-md-2' disabled={loading}
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