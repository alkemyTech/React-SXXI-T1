import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { InputForm } from 'styled-components/GlobalFormFields/InputForm.styled';
import { ButtonCancel, ButtonConfirm, ContainerInputError, Errors } from "./NewsForm.Styled";
import { useNewsForm } from './hooks/useNewsForm';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CustomTitle } from 'Components/GlobalComponents/CustomTitle/CustomTitle';
import FormLabel from './FormLabel';

const NewsForm = () => {
    const { 
        errors, 
        handleBlur, 
        handleSubmit, 
        handleChange, 
        touched, 
        news, 
        loading, 
        formik, 
        handleImage, 
        cancel 
    } = useNewsForm();
    
    const { id } = useParams();

  return(
    <div className="container my-5">
        <div>
            <CustomTitle
                title={id ? "Edita la novedad" : "Crea la novedad"} 
                justify="center"   
                wrapTextClass="text-center" 
                />
        </div>
          <Form 
            className="my-5"
            onSubmit={handleSubmit} >
            <Form.Group 
                className="mb-3" 
                controlId="formBasicName">
                <ContainerInputError>
                    <FormLabel title="Nombre de la novedad:" />
                    <InputForm
                        type="text"
                        name="name"
                        defaultValue={id? news.name : " "}
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        placeholder="Nombre" />
                    {errors.name && touched.name && <Errors>{errors.name}</Errors>}
                </ContainerInputError>
            </Form.Group>
            <Form.Group 
                className="mb-3" 
                controlId="formBasicCategoryId">
                <ContainerInputError>
                    <FormLabel title="Id de la novedad:" />
                    <InputForm
                        type="number"
                        min="0"
                        name="category_id"
                        defaultValue={id? news.category_id : " "}
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        placeholder="Id" />
                    {errors.name && touched.category_id && <Errors>{errors.category_id}</Errors>}
                </ContainerInputError>
            </Form.Group>
            <Form.Group 
                className="mb-3" 
                controlId="formBasicContent">
                <ContainerInputError>
                    <FormLabel title="Contenido de la novedad:" />
                    <CKEditor
                        name="contect"
                        data={ news.content ? news.content : '' }
                        editor={ ClassicEditor }
                        config={{ placeholder: 'Descripción' }}
                        onChange={ (event, editor) => { 
                            formik.setFieldValue('content', editor.getData());
                        }}
                    />
                    { errors.content && <Errors>{ errors.content }</Errors> }
                </ContainerInputError>
            </Form.Group>
            <Form.Group 
                className="mb-5" 
                controlId="formBasicImage">
                <ContainerInputError>
                    <FormLabel title="Selecciona una imagen:" />
                    <InputForm 
                        accept="image/png, image/jpeg, image/jpg" 
                        type="file"
                        name="image"
                        onChange={handleImage}
                        onBlur={handleBlur} 
                        placeholder="Ingresa la imagen..." 
                        alt="testimonial form image"
                        />
                    {errors.image && touched.image && <Errors>{errors.image}</Errors>}
                </ContainerInputError>
            </Form.Group>
            <div className="mb-5">
                <ButtonConfirm 
                    className='mt-2 col-sm-5 col-md-2 mx-2' 
                    disabled={loading}
                    background='success' 
                    color='success' 
                    type='submit'
                >
                    Confirmar
                </ButtonConfirm>
                <ButtonCancel 
                    className='col-sm-5 col-md-2 mx-2 mt-2' 
                    disabled={loading}
                    background='default' 
                    color='success' 
                    type='button'
                    onClick={ cancel }
                >
                    Volver
                </ButtonCancel>
            </div>
          </Form>
        </div>
  )
}

export default NewsForm;