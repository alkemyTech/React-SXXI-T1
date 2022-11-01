import Form from 'react-bootstrap/Form';
import { InputForm } from 'styled-components/GlobalFormFields/InputForm.styled';
import { CustomButton } from 'Components/GlobalComponents/CustomButton/CustomButton';
import { ContainerInputError, Errors, TextArea } from "./ProyectsFormStyled";
import { useProyectsForms } from './hooks/useProyectsForms';
import  Title  from "./Title";

const ProyectsForm = () => {
    const {values, errors, handleBlur, handleSubmit, handleChange, touched} = useProyectsForms();

    return (
        <div className="container">
            <Title text="Proyectos" />
            <Form 
                className="mb-5"
                onSubmit={handleSubmit} >
            <Form.Group 
                className="mb-3" 
                controlId="formBasicName">
                <ContainerInputError>
                    <InputForm
                        type="text"
                        name="title"
                        value={values.title} 
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
                    <TextArea 
                        className="col col-12 d-flex justify-content-center"
                        as="textarea"
                        type="text"
                        name="description"
                        value={values.description} 
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        placeholder="Escribe la descripción" />
                    {errors.description && touched.description && <Errors>{errors.description}</Errors>}
                </ContainerInputError>
            </Form.Group>
            <Form.Group 
                className="mb-3" 
                controlId="formBasicImage">
                <ContainerInputError>
                    <Form.Label>Imagen del proyecto:</Form.Label>
                    <InputForm 
                        type="file"
                        name="image"
                        value={values.image} 
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        placeholder="Ingresa la imagen..." 
                        alt="testimonial form image"
                        />
                    {errors.image && touched.image && <Errors>{errors.image}</Errors>}
                </ContainerInputError>
            </Form.Group>
            <Form.Group 
                className="mb-3" 
                controlId="formBasicDate">
                <ContainerInputError>
                    <Form.Label>Selecciona la fecha de expiración:</Form.Label>
                    <InputForm
                        type="date"
                        name="date"
                        value={values.date} 
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        placeholder="Ingresa la fecha de expiracion" />
                    {errors.date && touched.date && <Errors>{errors.date}</Errors>}
                </ContainerInputError>
            </Form.Group>
            <CustomButton 
                type="submit"
                color="success" 
                background="success" 
                text="Send" />
        </Form>
        </div>
    );
}
 
export default ProyectsForm;