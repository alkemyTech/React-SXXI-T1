import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { InputForm } from 'styled-components/GlobalFormFields/InputForm.styled';
import { ButtonCancel, ButtonConfirm, ContainerInputError, Errors} from "./ActivitiesForm.Styled";
import { useActivitiesForm } from "./hooks/useActivitiesForm";
import { CustomTitle } from 'Components/GlobalComponents/CustomTitle/CustomTitle';
import { FormImageField } from 'Components/GlobalComponents/FormImageField/FormImageField';
import { FormCKEditorField } from 'Components/GlobalComponents/FormCKEditorField/FormCKEditorField';

const ActivitiesForm = () => {
  const {errors, handleBlur, handleSubmit, handleChange, touched, activity, loading, formik,  values, cancel, setImageBase64, setFieldValue } = useActivitiesForm();
    
  const { id } = useParams();
  console.log(errors, values )

  return(
    <div className="container my-5">
        <div>
            <CustomTitle
                title={id ? "Edita la activdad" : "Crea la actividad"} 
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
                    <Form.Label 
                      className="mt-3">
                      Nombre de la actividad:
                    </Form.Label>
                    <InputForm
                        type="text"
                        name="name"
                        value={ values.name}
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
                    <Form.Label 
                        className="mt-3">
                        Descripción de la actividad:
                    </Form.Label>
                    <FormCKEditorField 
                        setFieldValue={ setFieldValue }
                        errors={ errors}
                        touched= {touched}
                        name="description"
                        placeholder="Descripcion"
                        data = { activity.description }
                    />
                </ContainerInputError>
            </Form.Group>
            <Form.Group
                className="mb-5" 
                controlId="formBasicImage"
                >
                <Form.Label 
                    className="mt-3">
                    Imagen de la actividad:
                </Form.Label>
                <FormImageField 
                    errors={errors.image}
                    touched={touched.image}
                    name="image"
                    setFieldValue= { formik.setFieldValue }
                    imageToSend= { setImageBase64 }
                    imageIsEdit= { activity.image }
                />
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
                    Volver
                </ButtonCancel>
            </div>
          </Form>
        </div>
  )
} 

export default ActivitiesForm;