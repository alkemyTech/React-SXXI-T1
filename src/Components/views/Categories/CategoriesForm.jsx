import React, { useEffect } from 'react';
import { Form } from "react-bootstrap";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Formulary, Input, ButtonConfirm, Errors, PreviewImg,
        ContainerInputError } from './CategoriesStyled/CategoriesStyled';
import { useCategory } from './CategoryHook/useCategory';
import privateService from 'Services/privateApiService';
import { URLs } from 'Services/ServicesURLS';
import { feedbackUser as AlertError } from 'utilities/alerts/feedbackUser.util';
import { convertUrlToBase64 } from 'utilities/convertURLtoBase64.util';
import axios from 'axios';
import { CustomTitle } from 'Components/GlobalComponents/CustomTitle/CustomTitle';

const CategoriesForm = () => {
    const { handleImage, id, imageB64, handleChange, handleBlur, handleSubmit,
        setFieldValue, values, errors, touched, setImageB64, setCategory } = useCategory();

    useEffect(()=>{
        if(id) {
            privateService.get(`${URLs.category}/${id}`)
            .then(res => {
                if(res.success){
                    const { data } = res;
                    setFieldValue('name', data.name);
                    setFieldValue('image', data.image);
                    setFieldValue('description', data.description);
                    setCategory({
                        name: data.name,
                        image: data.image,
                        description: data.description
                    })
                }else{
                    AlertError('center', 'error', 'Ha ocurrido un error');
                }
            })
            .catch(()=> AlertError('center', 'error', 'Ha ocurrido un error'));
        }
    },[id, setFieldValue, setImageB64]);
    
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
            <Form.Group className='col-sm-12 col-md-8'>
                <ContainerInputError>
                    <Form.Label>Selecciona una imagen:</Form.Label>
                    <Input accept="image/png,image/jpg,image/jpeg" type='file' name="image"
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
                          data={ values.description }
                          editor={ ClassicEditor }
                          config={{ placeholder: 'Descripción' }}
                          onChange={ (event, editor) => { 
                            setFieldValue('description', editor.getData());
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
        </Formulary>
        </>
    );
}
 
export default CategoriesForm;