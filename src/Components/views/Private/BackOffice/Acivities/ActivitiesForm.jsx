import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { InputForm } from 'styled-components/GlobalFormFields/InputForm.styled';
import { ButtonCancel, ButtonConfirm, ContainerInputError, Errors  } from "./ActivitiesForm.Styled";
import { useActivitiesForm } from './hooks/useActivitiesForm';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CustomTitle } from 'Components/GlobalComponents/CustomTitle/CustomTitle';

const ActivitiesForm = () => {

    const {
        errors, 
        handleBlur, 
        handleSubmit, 
        handleChange, 
        touched, 
        activities, 
        loading, 
        formik , 
        handleImage, 
        cancel
    } = useActivitiesForm();

    const { id } = useParams();

    return (
        <div className="container my-5">
            <div 
                className="mb-3">
                <CustomTitle
                    title={id?"Edita la actividad" : "Crea la actividad"} 
                    justify="center"   
                    wrapTextClass="text-center" 
                    />
            </div>
            <Form 
                className="mb-5"
                onSubmit={handleSubmit} >
            <Form.Group 
                className="mb-3" 
                controlId="formBasicName">
                <ContainerInputError>
                    <Form.Label className="mt-3">
                      Nombre de la actividad:
                    </Form.Label>
                    <InputForm
                        type="text"
                        name="name"
                        defaultValue={id? activities.name : " "} 
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        placeholder="Nombre de la actividad" />
                    {errors.name && touched.name && <Errors>{errors.name}</Errors>}
                </ContainerInputError>
            </Form.Group>
            <Form.Group 
                className="mb-3" 
                controlId="formBasicDescription">
                <ContainerInputError>
                    <Form.Label className="mt-3">Descripción de la actividad:</Form.Label>
                    <CKEditor
                        name="description"
                        data={ activities.description ? activities.description : '' }
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
                    Cancelar
                </ButtonCancel>
            </div>
        </Form>
        </div>
    );
}
 
export default ActivitiesForm;