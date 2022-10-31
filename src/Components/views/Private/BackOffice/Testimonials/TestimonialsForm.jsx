import Form from 'react-bootstrap/Form';
import { InputForm } from 'styled-components/GlobalFormFields/InputForm.styled';
import { CustomButton } from 'Components/GlobalComponents/CustomButton/CustomButton';
import { ContainerInputError, Errors, TextArea } from "./TestimonialForm.Styled";
import { useTestimonialsForms } from './hooks/useTestimonialsForms';


const TestimonialsForm = () => {
    const {values, errors, handleBlur, handleSubmit, handleChange, touched} = useTestimonialsForms();

    return (
        <div className="container">
            <h2
                className="text-center my-5">
                Testimonios
            </h2>
            <Form 
                className="mb-5"
                onSubmit={handleSubmit} >
            <Form.Group 
                className="mb-3" 
                controlId="formBasicName">
                <ContainerInputError>
                    <InputForm
                        type="text"
                        name="name"
                        value={values.name} 
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        placeholder="Nombre" />
                    {errors.name && touched.name && <Errors>{errors.name}</Errors>}
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
                    <Form.Label>Imagen:</Form.Label>
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
            <CustomButton 
                type="submit"
                color="success" 
                background="success" 
                text="Send" />
        </Form>
        </div>
    );
}
 
export default TestimonialsForm;