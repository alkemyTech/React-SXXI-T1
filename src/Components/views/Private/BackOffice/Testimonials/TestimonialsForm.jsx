import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { InputForm } from 'styled-components/GlobalFormFields/InputForm.styled';
import { CustomButton } from 'Components/GlobalComponents/CustomButton/CustomButton';
import { ContainerInputError, Errors, TextArea } from "./TestimonialForm.Styled";

const TestimonialsForm = () => {
    const [initialValues, setInitialValues] = useState({
       name: '',
       description: '',
       image: '' 
    });

    function onSubmit(){
        values.name = '';
        values.description = '';
        values.image = ''
    }

    const required = 'Campo obligatorio';

    const nameRegExp = /[a-z, A-Z]{4}/

    const validationSchema = Yup.object().shape({
        name : Yup.string().min(4,'Debe contener al menos 4 digitos')
            .matches(nameRegExp, 'Deben ser letras')
            .required(required),
        description: Yup.string().required(required),
        image: Yup.string().required(required)
    });

    const formik = useFormik({initialValues, onSubmit, validationSchema});

    const {values, errors, handleBlur, touched} = formik;

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
        } if(e.target.name === 'description'){
            setInitialValues({...initialValues, description: e.target.value})
        } if(e.target.name === 'image'){
            setInitialValues({...initialValues, description: e.target.value})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(initialValues);
    }

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
                        value={initialValues.name} 
                        onBlur={handleBlur} 
                        onChange={handleChange}  
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
                        value={initialValues.description} 
                        onBlur={handleBlur} 
                        onChange={handleChange}  
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
                        value={initialValues.image} 
                        onBlur={handleBlur} 
                        onChange={handleChange}  
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