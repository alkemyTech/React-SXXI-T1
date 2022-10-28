import { GlobalButton } from 'Components/GlobalComponents/GlobalButton/GlobalButton';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { GlobalInputStyled } from 'styled-components/GlobalFormStyled/GlobalInput.styled';

const TestimonialsForm = () => {
    const [initialValues, setInitialValues] = useState({
       name: '',
       description: '' 
    });

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
        <Form onSubmit={handleSubmit} className="mb-5" >
            <Form.Group 
                className="mb-3" 
                controlId="formBasicName">
                <Form.Label>Nombre:</Form.Label>
                <GlobalInputStyled 
                    type="text"
                    name="name"
                    value={initialValues.name} 
                    onChange={handleChange}  
                    placeholder="Nombre" />
            </Form.Group>
            <Form.Group 
                className="mb-3" 
                controlId="formBasicDescription">
                <Form.Label>Descripción:</Form.Label>
                <GlobalInputStyled 
                    as="textarea"
                    type="text"
                    name="description"
                    value={initialValues.description} 
                    onChange={handleChange}  
                    placeholder="Escribe la descripción..." />
            </Form.Group>
            <Form.Group 
                className="mb-3" 
                controlId="formBasicImage">
                <Form.Label>Imagen:</Form.Label>
                <GlobalInputStyled 
                    type="image"
                    name="description"
                    value={initialValues.image} 
                    onChange={handleChange}  
                    placeholder="Ingresa la imagen..." />
            </Form.Group>
            <GlobalButton 
                type="submit"
                color="success" 
                backGround="success" 
                text="Send" />
        </Form>
    );
}
 
export default TestimonialsForm;