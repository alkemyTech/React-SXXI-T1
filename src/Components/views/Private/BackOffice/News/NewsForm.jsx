import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { InputForm } from 'styled-components/GlobalFormFields/InputForm.styled';
import { ButtonConfirm, ContainerInputError, Errors } from "./NewsForm.Styled";
import { useNewsForm } from './hooks/useNewsForm';
import { CustomTitle } from 'Components/GlobalComponents/CustomTitle/CustomTitle';
import { FormImageField } from 'Components/GlobalComponents/FormImageField/FormImageField';
import { FormCKEditorField } from 'Components/GlobalComponents/FormCKEditorField/FormCKEditorField';
import FormLabel from '../components/FormLabel';
import { BackTo } from 'Components/GlobalComponents/BackTo/BackTo';
import { privateRoutes } from 'models/routes';

const NewsForm = () => {
    const { 
        errors, 
        handleBlur, 
        handleSubmit, 
        handleChange, 
        touched, 
        news, 
        loading, 
        formik, 
        values,
        setImageBase64, 
        setFieldValue,
        categories 
    } = useNewsForm();
    
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
                title={id ? "Edita la novedad" : "Crea una novedad"} 
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
                    <FormLabel title="Titulo de la novedad:" />
                    <InputForm
                        type="text"
                        name="name"
                        value={ values.name }
                        onChange={ handleChange }
                        onBlur={ handleBlur } 
                        placeholder="Titulo" />
                    {errors.name && touched.name && <Errors>{errors.name}</Errors>}
                </ContainerInputError>
            </Form.Group>
            <Form.Group 
                className="mb-3" 
                controlId="formBasicCategoryId">
                <ContainerInputError>
                    <FormLabel title="Categoría de la novedad:" />
                    <Form.Select 
                        aria-label="Seleccionar la categoria"
                        name="category_id" 
                        onChange={ handleChange }
                        onBlur={ handleBlur } 
                        >
                        <option value="">Selecciona una categoria</option>
                        {categories.map(category => <option value={category.id} key={category.id}>{category.name}</option>)}
                    </Form.Select>
                    
                    {errors.category_id && touched.category_id && <Errors>{errors.category_id}</Errors>}
                </ContainerInputError>
            </Form.Group>
            <Form.Group 
                className="mb-3" 
                controlId="formBasicContent">
                <ContainerInputError>
                    <FormLabel title="Contenido de la novedad:" />
                    <FormCKEditorField 
                        setFieldValue={ setFieldValue }
                        errors={ errors }
                        touched= {touched }
                        name="content"
                        placeholder="Contenido de la novedad"
                        data = { news.content }
                    />
                </ContainerInputError>
            </Form.Group>
            <Form.Group 
                className="mb-5" 
                controlId="formBasicImage">
                <FormLabel title="Imagen de la actividad:" />
                <FormImageField 
                errors={ errors }
                touched={ touched }
                name="image"
                setFieldValue= { formik.setFieldValue }
                setImageToSend= { setImageBase64 }
                imageIsEdit= { news.image }
                    />
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

export default NewsForm;