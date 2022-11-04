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
import {
  getMaxOrder,
  personalSlides,
  PERSONAL_ORDER,
} from "utilities/slides/slides.util";
import { postSlides } from "./interceptor/postSlides.interceptor ";

const SlidesForm = () => {
  // edit or create
  const { id: idSlide } = useParams();

  const [imageToSend, setImageToSend] = useState("null");

  // edit slide
  const [orderSlide, setOrderSlide] = useState([]);
  const [maxSlideOrder, setMaxSlideOrder] = useState(PERSONAL_ORDER);
  const orderFieldDisabled = useState(true);

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
      order: yup.number().when([], {
        is: () => !orderFieldDisabled,
        then: yup
          .number()
          .positive()
          .min(
            maxSlideOrder,
            validationMessages.order.fieldLength + maxSlideOrder
          )
          .test("noEdit", "No puedes modificar este campo", (value) => {
            // console.log({ allSlides });
            console.log(value);
          })
          .required(validationMessages.order.required),
        otherwise: yup
          .number()
          .min(
            maxSlideOrder,
            validationMessages.order.fieldLength + maxSlideOrder
          )
          .notRequired(),
      }),
      image: validationImage.yupFileValidation,
    });

    return validateFormFields;
  };

  const handleImageToSend = (value) => setImageToSend(value);

  const onSubmit = async () => {
    try {
      const dataSubmit = { ...formik.values, image: imageToSend };

      const sendData = await postSlides(dataSubmit);
      // console.log({ sendData });
    } catch (error) {
      console.error("error useSlidesForm onSubmit", error.message);
    } finally {
      // handleImageToSend('')
    }
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

        const filterSlides = personalSlides(getData.data);
        if (idSlide) {
          // editar
          console.log({ filterSlides });
          setOrderSlide(filterSlides);
        } else {
          console.log({ filterSlides });
          const max = getMaxOrder(filterSlides);
          setMaxSlideOrder(max);

          setFieldValue("order", max);
        }
      } catch (error) {
        console.error("error", error.message);
        console.error("show feedbak user - error");
      }
    };

    fetchAllSlides();
  }, [idSlide, setFieldValue]);

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
              disabled={orderFieldDisabled}
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

/**
 * el que vamos a editar
{
    "id": 1491,
    "name": "slide tittlec",
    "description": "<p>descriptionc</p>",
    "image": "http://ongapi.alkemy.org/storage/B5ezfO6q5Y.png",
    "order": 100000106,
    "user_id": null,
    "created_at": "2022-11-04T01:15:46.000000Z",
    "updated_at": "2022-11-04T01:15:46.000000Z",
    "deleted_at": null,
    "group_id": null
}
 */
