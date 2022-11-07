import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { InputForm } from 'styled-components/GlobalFormFields/InputForm.styled';
import { ContainerInputError, Errors } from "./TestimonialForm.Styled";
import { useTestimonialsForms } from './hooks/useTestimonialsForms';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import TestimonialButtons from './TestimonialsButtons';
import { CustomTitle } from 'Components/GlobalComponents/CustomTitle/CustomTitle';

const TestimonialsForm = () => {
    const {errors, handleBlur, handleSubmit, handleChange, touched, testimonial, formik, handleImage } = useTestimonialsForms();
    const { id } = useParams();

    return (
        <div className="container my-5">
        <div>
            <CustomTitle
                title={id?"Edita el testimonio":"Crea el testimonio"} 
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
                      Nombre del testimonio:
                    </Form.Label>
                    <InputForm
                        type="text"
                        name="name"
                        defaultValue={id? testimonial.name : " "}
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
                    <CKEditor
                        name="description"
                        data={ testimonial.description ? testimonial.description : '' }
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
                className="mb-5" 
                controlId="formBasicImage">
                <ContainerInputError>
                    <Form.Label className="mt-3">Selecciona una imagen:</Form.Label>
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
            <TestimonialButtons />
          </Form>
        </div>
    );
}

export default TestimonialsForm;