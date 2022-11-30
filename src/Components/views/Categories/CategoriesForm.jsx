import React, { useEffect } from 'react';
import { Form } from "react-bootstrap";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Formulary, Input, Errors,
    ContainerInputError } from './CategoriesStyled/CategoriesStyled';
import { useCategory } from './CategoryHook/useCategory';
import privateService from 'Services/privateApiService';
import { URLs } from 'Services/ServicesURLS';
import { feedbackUser as AlertError } from 'utilities/alerts/feedbackUser.util';
import { CustomTitle } from 'Components/GlobalComponents/CustomTitle/CustomTitle';
import { CustomButton } from 'Components/GlobalComponents/CustomButton/CustomButton';
import { BackTo } from 'Components/GlobalComponents/BackTo/BackTo';
import { InputImage } from 'Components/GlobalComponents/FormInputsField/InputImage';

const CategoriesForm = () => {
    const { id, handleChange, handleBlur, handleSubmit, schema, formik, category,
       setImageB64 , setFieldValue, values, errors, touched, setCategory, loading } = useCategory();
    
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
    },[id, setFieldValue, setCategory]);
    
    return (
        <div style={{padding: '0'}}>
        <CustomTitle title={id ? 'Editar Categoría' : 'Crear Categoría'} height='none' wrapTextClass='text-center'/>
        <BackTo to='/backoffice/categories'/>
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
            <Form.Group>
                <InputImage
                    formik={formik}
                    schemas={schema}
                    setImageToSend={setImageB64}
                    setFieldValue={setFieldValue}
                    imageIsEdit={category}
                />
            </Form.Group>
                <CustomButton
                    buttonClass='col-7 col-lg-8 py-2 px-3 mx-auto'
                    text={loading ? 'Loading...' : 'Confirmar'}
                    color='success'
                    background='success'
                    type='submit'
                    disabled={loading}
                    />
        </Formulary>
        </div>
    );
}
 
export default CategoriesForm;