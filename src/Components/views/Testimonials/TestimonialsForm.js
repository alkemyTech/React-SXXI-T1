import { GlobalButton } from 'Components/GlobalComponents/GlobalButton/GlobalButton';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { GlobalInputStyled } from 'styled-components/GlobalFormStyled/GlobalInput.styled';
import '../FormStyles.css';

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
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(initialValues);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group 
                className="mb-3" 
                controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <GlobalInputStyled 
                    type="text"
                    name="name"
                    value={initialValues.name} 
                    onChange={handleChange}  
                    placeholder="Enter name" />
            </Form.Group>
            <Form.Group 
                className="mb-3" 
                controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <GlobalInputStyled 
                    type="text"
                    name="description"
                    value={initialValues.description} 
                    onChange={handleChange}  
                    placeholder="Testimonial description" />
            </Form.Group>
            <GlobalButton 
                type="submit"
                color="success" 
                backGround="light" 
                text="Send" />
        </Form>
    );
}
 
export default TestimonialsForm;