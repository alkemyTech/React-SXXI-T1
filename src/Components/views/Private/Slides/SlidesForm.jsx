import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { InputForm } from "styled-components/GlobalFormFields/InputForm.styled";
import { CustomButton } from "Components/GlobalComponents/CustomButton/CustomButton";
import { WrapButtonsForm } from "./styled-components/SlidesForm.styled";
import * as yup from "yup";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { BackToHome } from "Components/GlobalComponents/BackToHome/BackToHome";
import { SpanFormError } from "Components/GlobalComponents/SpanFormError/SpanFormError";
import { getSlides } from "./interceptor/getSlides.interceptor";
import { validationMessages } from "utilities/validationMessage.util";
import { FormImageField } from "Components/GlobalComponents/FormImageField/FormImageField";
import { FormCKEditorField } from "Components/GlobalComponents/FormCKEditorField/FormCKEditorField";
import { validationImage } from "Components/GlobalComponents/FormImageField/utilities/ImageFieldSchemas.util";

const SlidesForm = () => {
  // edit or create
  const { id: idSlide } = useParams();

  const [imageToSend, setImageToSend] = useState("null");

  const [orderSlides, setOrderSlides] = useState([]);

  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
    order: 0,
    image: "",
  });

  const validationSchema = () => {
    const validateFormFields = yup.object().shape({
      name: yup
        .string()
        .min(4, validationMessages.name.fieldLength)
        .required(validationMessages.name.required),
      description: yup
        .string()
        .required(validationMessages.description.required),
      order: yup
        .number()
        .positive()
        .min(1, validationMessages.order.fieldLength)
        .test("superior", "numero superior", (value) => {
          // console.log({ allSlides });
          // console.log(value);
        })
        .required(validationMessages.order.required),
      image: validationImage.yupFileValidation,
    });

    return validateFormFields;
  };

  const handleImageToSend = (value) => setImageToSend(value);

  const onSubmit = () => {
    console.log(formik.values);
    console.log({ imageToSend });
    // cambiar el valor de la iamgen al de base 64
    // handleImageToSend('')
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const {
    handleSubmit,
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    setFieldValue,
  } = formik;

  // modification
  useEffect(() => {
    const fetchdataSlide = async () => {
      // post info slide according to the id ...
      setInitialValues({
        name: "Luis",
        description: "una descripcion",
        order: 1,
      });
    };

    if (idSlide) {
      fetchdataSlide();
    }
  }, [idSlide]);

  useEffect(() => {
    const fetchAllSlides = async () => {
      try {
        const getData = await getSlides();

        if (getData && !getData.success) throw new Error(getData.message);

        // console.log(getData.data);

        // setOrderSlides(getData.data);
      } catch (error) {
        console.error("error", error.message);
        console.error("show feedbak user - error");
      }
    };

    fetchAllSlides();
  }, []);

  return (
    <>
      <BackToHome wrapLink="my-3 col col-7 col-sm-5 col-lg-4" />
      <Form className="form-container" onSubmit={handleSubmit}>
        <Form.Group className="col col-12 d-flex flex-wrap justify-content-between">
          <div className="col  col-12 col-sm-5">
            <InputForm
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Titulo de Slide"
            />
            <SpanFormError errors={errors} touched={touched} name="name" />
          </div>
          <div className="col col-12 col-sm-5 mt-3 mt-sm-0">
            <InputForm
              type="number"
              name="order"
              value={values.order}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Número de Orden"
            />
            <SpanFormError errors={errors} touched={touched} name="order" />
          </div>
        </Form.Group>

        <Form.Group className="col col-12">
          <FormCKEditorField
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
            name="description"
          />
        </Form.Group>

        <Form.Group className="col col-12 d-flex flex-column align-items-center">
          <FormImageField
            errors={errors}
            touched={touched}
            name="image"
            setFieldValue={setFieldValue}
            imageToSend={handleImageToSend}
          />
        </Form.Group>

        <WrapButtonsForm>
          <CustomButton
            type="submit"
            buttonClass="col col-10 col-sm-5"
            color="success"
            background="success"
            text={idSlide ? "Editar" : "Confirmar"}
          />
        </WrapButtonsForm>
      </Form>
    </>
  );
};

export default SlidesForm;
