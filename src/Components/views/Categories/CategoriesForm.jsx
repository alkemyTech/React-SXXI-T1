import React, { useEffect, useState } from 'react';
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Formulary, Input, Errors,
        ContainerInputError } from './CategoriesStyled/CategoriesStyled';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
import { validationSchema, Alert } from './utilities/utilities';
import { api } from 'Services/axiosService';
import { CustomButton } from 'Components/GlobalComponents/CustomButton/CustomButton';
import { CustomTitle } from 'Components/GlobalComponents/CustomTitle/CustomTitle';
import { BackTo } from 'Components/GlobalComponents/BackTo/BackTo';
import { InputImage } from 'Components/GlobalComponents/FormInputsField/InputImage';
import { privateRoutes } from 'models/routes';

const schemas = { name: 'image' }

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

    return (
        <div className="container my-5">
            <div className="my-5">
            <CustomTitle 
                title={id ? 'Editar Categoría' : 'Crear Categoría'} 
                justify="center"   
                wrapTextClass="text-center" 
                wrapTitleClass="d-block h-auto"/>
            </div>
            <div className="my-5">
                <BackTo 
                    wrapLink="my-4"
                    to={"/" + privateRoutes.BACKOFFICE + privateRoutes.CATEGORIES}
                />
            </div>
        <Formulary className='my-5 col-sm-10 col-lg-6 mx-auto' onSubmit={ handleSubmit }>
            <Form.Group
                className="mb-3">
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
                <InputImage
                    formik={formik}
                    schemas={schemas}
                    setImageToSend={setImageB64}
                    setFieldValue={setFieldValue}
                    imageIsEdit={category}
                />
            </Form.Group>
            <div className='my-5 d-flex justify-content-center'>
            <CustomButton
                buttonClass='col-7 col-lg-8 py-2 px-3 mx-auto'
                text='Confirmar'
                color='success'
                background='success'
                type='submit'
                />
            </div>
        </Formulary>
        </div>
    );
}
 
export default CategoriesForm;