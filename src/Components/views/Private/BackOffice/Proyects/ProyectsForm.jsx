import Form from 'react-bootstrap/Form';
import { InputForm } from 'styled-components/GlobalFormFields/InputForm.styled';
import  { ButtonCancel, ButtonConfirm, ContainerInputError, Errors } from "./ProyectForm.Styled";
import { useProyectsForms } from './hooks/useProyectsForms';
import { CustomTitle } from 'Components/GlobalComponents/CustomTitle/CustomTitle';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const ProyectsForm = () => {
    const {
        errors, 
        handleBlur, 
        handleSubmit, 
        handleChange, 
        handleImage, 
        touched, 
        cancel, 
        loading, 
        project,
        id,
        formik
    } = useProyectsForms();

    return (
        <div className="container my-5">
            <div>
            <CustomTitle
                title={id ? "Edita el Proyecto" : "Crea el proyecto"} 
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
                    <Form.Label className="mt-3">
                        Nombre del proyecto:
                    </Form.Label>
                    <InputForm
                        type="text"
                        name="title"
                        dafaultValue={id ? project.title : " "} 
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        placeholder="Titulo" />
                    {errors.title && touched.title && <Errors>{errors.title}</Errors>}
                </ContainerInputError>
            </Form.Group>
            <Form.Group 
                className="mb-3" 
                controlId="formBasicDescription">
                <ContainerInputError>
                    <Form.Label className="mt-3">Descripción del testimonio:</Form.Label>
                    <CKEditor
                        name="description"
                        data={ project.description ? project.description : '' }
                        editor={ ClassicEditor }
                        config={{ placeholder: 'Descripción' }}
                        onChange={ (event, editor) => { 
                            formik.setFieldValue('description', editor.getData());
                        }}
                    />
                    { errors.description && <Errors>{ errors.description }</Errors> }
                </ContainerInputError>
            </Form.Group>
            <Form.Group 
                className="mb-3" 
                controlId="formBasicImage">
                <ContainerInputError>
                    <Form.Label>Imagen del proyecto:</Form.Label>
                    <InputForm 
                        accept="image/png,image/jpg" 
                        type='file' 
                        name="image"
                        onChange={ handleImage } 
                        onBlur={handleBlur}
                        placeholder="Ingresa la imagen..." 
                        alt="imagen del proyecto"    
                        />
                    { errors.image && touched.image && <Errors>{errors.image}</Errors> }
                </ContainerInputError>
            </Form.Group>
            <Form.Group 
                className="mb-3" 
                controlId="formBasicDate">
                <ContainerInputError>
                    <Form.Label>Selecciona la fecha de expiración:</Form.Label>
                    <InputForm
                        type="date"
                        name="due_date"
                        dafaultValue={id ? project.due_date : " "} 
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        placeholder="Ingresa la fecha de expiracion" />
                    {errors.due_date && touched.due_date && <Errors>{errors.due_date}</Errors>}
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
                    Atrás
                </ButtonCancel>
            </div>
        </Form>
        </div>
    );
}
 
export default ProyectsForm;