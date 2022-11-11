import Form from 'react-bootstrap/Form';
import { InputForm } from 'styled-components/GlobalFormFields/InputForm.styled';
import  { ButtonCancel, ButtonConfirm, ContainerInputError, Errors } from "./ProjectForm.Styled";
import { useProjectsForms } from './hooks/useProjectsForms';
import { CustomTitle } from 'Components/GlobalComponents/CustomTitle/CustomTitle';
import { FormImageField } from 'Components/GlobalComponents/FormImageField/FormImageField';
import { FormCKEditorField } from 'Components/GlobalComponents/FormCKEditorField/FormCKEditorField';
import FormLabel from './FormLabel';

const ProjectsForm = () => {
    const {
        errors, 
        handleBlur, 
        handleSubmit, 
        handleChange, 
        touched, 
        cancel, 
        loading, 
        project,
        id,
        formik,
        values,
        setImageBase64,
        setFieldValue
    } = useProjectsForms();

    return (
        <div className="container my-5">
            <div>
                <CustomTitle
                    title={ id ? "Edita el Proyecto" : "Crea el proyecto" } 
                    justify="center"   
                    wrapTextClass="text-center" 
                    />
            </div>
            <Form 
                className="my-5"
                onSubmit={ handleSubmit } >
                <Form.Group 
                    className="mb-3" 
                    controlId="formBasicName">
                    <ContainerInputError>
                        <FormLabel title="Nombre del proyecto:" />
                        <InputForm
                            type="text"
                            name="title"
                            value={ values.title }
                            onChange={ handleChange }
                            onBlur={ handleBlur } 
                            placeholder="Titulo" />
                        {errors.title && touched.title && <Errors>{errors.title}</Errors>}
                    </ContainerInputError>
                </Form.Group>
                <Form.Group 
                    className="mb-3" 
                    controlId="formBasicDescription">
                    <ContainerInputError>
                        <FormLabel title="Descripcion del proyecto:" />
                        <FormCKEditorField 
                            setFieldValue={ setFieldValue }
                            errors={ errors}
                            touched= {touched}
                            name="description"
                            placeholder="Descripcion"
                            data = { project.description }
                        />
                    </ContainerInputError>
                </Form.Group>
                <Form.Group 
                    className="mb-3" 
                    controlId="formBasicImage">
                    <FormLabel title="Imagen del proyecto:" />
                    <FormImageField 
                        errors={errors}
                        touched={touched}
                        name="image"
                        setFieldValue= { formik.setFieldValue }
                        imageToSend= { setImageBase64 }
                        imageIsEdit= { project.image }
                    />
                </Form.Group>
                <Form.Group 
                    className="mb-3" 
                    controlId="formBasicDate">
                    <ContainerInputError>
                        <FormLabel title="Selecciona la fecha de expiración:" />
                        <InputForm
                            type="date"
                            name="due_date"
                            dafaultvalue={id ? project.due_date : " "} 
                            onChange={ handleChange }
                            onBlur={ handleBlur } 
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
 
export default ProjectsForm;