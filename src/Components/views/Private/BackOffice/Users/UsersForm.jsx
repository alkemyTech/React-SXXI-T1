import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { InputForm } from 'styled-components/GlobalFormFields/InputForm.styled';
import { ButtonConfirm, ContainerInputError, Errors } from "./UsersForm.Styled";
import { useUsersForm } from './hooks/useUsersForm';
import { CustomTitle } from 'Components/GlobalComponents/CustomTitle/CustomTitle';
import { FormImageField } from 'Components/GlobalComponents/FormImageField/FormImageField';
import FormLabel from '../components/FormLabel';
import { BackTo } from 'Components/GlobalComponents/BackTo/BackTo';
import { privateRoutes } from 'models/routes';

const UsersForm = () => {
  const { 
    errors, 
    handleBlur, 
    handleSubmit, 
    handleChange, 
    touched, 
    user, 
    loading, 
    formik, 
    values,
    setImageBase64, 
    setFieldValue,
    roles
  } = useUsersForm();

  const { id } = useParams();

  return(
    <div className="container my-5">
        <div className="my-5">
            <BackTo
                wrapLink="my-4"
                to={"/" + privateRoutes.BACKOFFICE + "dashboard"}
            />
        </div>
        <div>
            <CustomTitle
                title={id ? "Edita el usuario" : "Crea el usuario"} 
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
                    <FormLabel title="Nombre del usuario:" />
                    <InputForm
                        type="text"
                        name="name"
                        value={ values.name }
                        onChange={ handleChange }
                        onBlur={ handleBlur } 
                        placeholder="Nombre" />
                    {errors.name && touched.name && <Errors>{errors.name}</Errors>}
                </ContainerInputError>
            </Form.Group>
            <Form.Group 
                className="mb-3" 
                controlId="formBasicRoleId">
                <ContainerInputError>
                    <FormLabel title="Rol del usuario:" />
                    <Form.Select 
                        aria-label="Seleccionar un rol"
                        name="role_id" 
                        onChange={ handleChange }
                        onBlur={ handleBlur } 
                        >
                        <option value="">Selecciona un rol</option>
                        {roles.map(rol => <option value={rol.id} key={rol.id}>{rol.name}</option>)}
                    </Form.Select>
                    {errors.role_id && touched.role_id && <Errors>{errors.role_id}</Errors>}
                </ContainerInputError>
            </Form.Group>
            <Form.Group 
                className="mb-5" 
                controlId="formBasicImage">
                <FormLabel title="Imagen del usuario:" />
                <FormImageField 
                  errors={ errors }
                  touched={ touched }
                  name="profile_image"
                  setFieldValue= { formik.setFieldValue }
                  setImageToSend= { setImageBase64 }
                  imageIsEdit= { user.profile_image }
                />
            </Form.Group>
            <Form.Group 
                className="mb-3" 
                controlId="formBasicPassword">
                <ContainerInputError>
                    <FormLabel title="Email del usuario:" />
                    <InputForm
                        type="text"
                        name="email"
                        value={ values.email }
                        onChange={ handleChange }
                        onBlur={ handleBlur } 
                        placeholder="Email" />
                    {errors.email && touched.email && <Errors>{errors.email}</Errors>}
                </ContainerInputError>
            </Form.Group>
            <div className="mb-5 d-grid gap-2 d-md-block mx-auto">
                <ButtonConfirm 
                    className='mt-2 col-sm-5 col-md-3 mx-2' 
                    disabled={loading}
                    background='success' 
                    color='success' 
                    type='submit'
                >
                    Confirmar
                </ButtonConfirm>
            </div>
          </Form>
    </div>
  )
}

export default UsersForm;