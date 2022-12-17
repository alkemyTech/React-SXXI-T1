import React from "react";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";

import { CustomButton } from "Components/CustomButton/CustomButton";
import { InputForm } from "styled-components/GlobalFormFields/InputForm.styled";
import { SocialMediaLinkSchema } from "../utilities/schemas";
import { Stack } from "react-bootstrap";

const SocialMediaInput = ({ onAddLink, onRemoveLink, links, isTouched, error }) => {
  const formik = useFormik({
    initialValues: {
      socialMediaLink: "",
    },
    validationSchema: SocialMediaLinkSchema,
    onSubmit: (values, { resetForm, setFieldError }) => {
      const linkExists = links.some((link) => link === values.socialMediaLink);
      if (linkExists) {
        setFieldError("socialMediaLink", "El link ingresado ya existe");
      } else {
        onAddLink(values.socialMediaLink);
        resetForm();
      }
    },
  });

  let errorMessage;
  if (formik.touched.socialMediaLink && formik.errors.socialMediaLink) {
    errorMessage = <Form.Text className="text-danger">{formik.errors.socialMediaLink}</Form.Text>;
  } else if (isTouched && error) {
    errorMessage = <Form.Text className="text-danger">{error}</Form.Text>;
  }

  return (
    <div>
      <Form.Group>
        <Form.Label>Social Media Links:</Form.Label>
        <div className="d-flex">
          <InputForm
            className="px-4 py-2"
            type="url"
            name="socialMediaLink"
            value={formik.values.socialMediaLink}
            onChange={formik.handleChange}
            placeholder="Enter a social media link"
          />
          <CustomButton buttonClass="ms-2" background="success" color="success" text="Add" onClick={formik.submitForm} />
        </div>
        {errorMessage}
      </Form.Group>
      <Stack className="mt-2" gap={2}>
        {links &&
          links.map((link) => (
            <div key={link} className="d-flex justify-content-between pointer">
              <p>{link}</p>
              <p onClick={onRemoveLink.bind(this, link)} role="button">
                X
              </p>
            </div>
          ))}
      </Stack>
    </div>
  );
};

export default SocialMediaInput;
