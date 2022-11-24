import React, { useEffect, useState } from 'react';
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Formulary, Input, Errors, PreviewImg,
        ContainerInputError } from './CategoriesStyled/CategoriesStyled';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
import { validationSchema, convertToBase64, Alert } from './utilities/utilities';
import { api } from 'Services/axiosService';
import { CustomButton } from 'Components/GlobalComponents/CustomButton/CustomButton';
import { CustomTitle } from 'Components/GlobalComponents/CustomTitle/CustomTitle';

const CategoriesForm = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [imageB64, setImageB64] = useState('');
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
                    api.put(`/categories/${id}`, body)
                    .then(() => {
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
                    api.post(`/categories`, body)
                    .then(() => {
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
    const { handleChange, handleSubmit, values, errors, handleBlur, touched } = formik;
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
                formik.setFieldValue('name', data.name);
                formik.setFieldValue('image', data.image);
                formik.setFieldValue('description', data.description);
            })
            .catch(()=>{
                Alert({ icon: 'error', title: 'Ha ocurrido un error'});
            });
        }
    },[id, formik]);
    return (
        <>
        <CustomTitle title={id ? 'Editar Categoría' : 'Crear Categoría'}/>
        <Formulary className='form-container col col-12 col-sm-10 col-xxl-8 my-3 p-0 p-sm-1' onSubmit={ handleSubmit }>
            <Form.Group>
                <ContainerInputError>
                    <Form.Label>Nombre de la categoría:</Form.Label>
                    <Input type="text" name="name" placeholder='Nombre' onBlur={ handleBlur }
                        value={ values.name } onChange={ handleChange } />
                    { errors.name && touched.name && <Errors>{errors.name}</Errors> }
                </ContainerInputError>
            </Form.Group>
            <Form.Group>
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
            <Form.Group>
                <ContainerInputError>
                    <Form.Label>Selecciona una imagen:</Form.Label>
                    <Input accept="image/png,image/jpg" type='file' name="image"
                         onChange={ handleImage } onBlur={handleBlur}/>
                        { errors.image && touched.image && <Errors>{errors.image}</Errors> }
                </ContainerInputError>
                { imageB64 ? <PreviewImg src={imageB64}/> : <PreviewImg src={values.image}/>}
            </Form.Group>
            <div className='d-flex justify-content-center'>
            <CustomButton
                buttonClass='col col-12 col-sm-6 col-md-4 col-lg-3'
                text='Confirmar'
                color='success'
                background='success'
                type='submit'
                />
            </div>
        </Formulary>
        </>
    );
}
 
export default CategoriesForm;