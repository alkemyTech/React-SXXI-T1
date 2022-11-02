import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { InputForm } from 'styled-components/GlobalFormFields/InputForm.styled';
import { ContainerInputError, Errors } from "./TestimonialForm.Styled";
import { useTestimonialsForms } from './hooks/useTestimonialsForms';
import  Title  from "./Title";
import CKEditorComponent from './CKEditor/CKEditorComponent';
import TestimonialButtons from './TestimonialsButtons';

const TestimonialsForm = () => {
    const {values, errors, handleBlur, handleSubmit, handleChange, touched} = useTestimonialsForms();
    const { id } = useParams();
    const [ description, setDescription ] = useState('');
    const [ descError, setDescError ] = useState('');

    return (
        <div className="container">
          <Title text={id?"Edita el testimonio":"Crea el testimonio"} />
          <Form 
            className="my-5"
            onSubmit={handleSubmit} >
            <Form.Group 
                className="mb-3" 
                controlId="formBasicName">
                <ContainerInputError>
                    <Form.Label className="mt-3">
                      Nombre del testimonio:
                    </Form.Label>
                    <InputForm
                        type="text"
                        name="name"
                        //value={id?"name":values.name} 
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
                    <Form.Label className="mt-3">Descripción del testimonio:</Form.Label>
                    <CKEditorComponent 
                      setDescription={setDescription}
                      setDescError={setDescError}
                    />
                    { descError && <Errors>{descError}</Errors>}
                </ContainerInputError>
            </Form.Group>
            <Form.Group 
                className="mb-5" 
                controlId="formBasicImage">
                <ContainerInputError>
                    <Form.Label className="mt-3">Selecciona una imagen:</Form.Label>
                    <InputForm 
                        accept="image/png, image/jpeg, image/jpg" 
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
            <TestimonialButtons />
          </Form>
        </div>
    );
}

export default TestimonialsForm;