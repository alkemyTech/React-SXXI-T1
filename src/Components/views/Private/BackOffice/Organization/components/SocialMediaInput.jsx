import React from "react";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";

import { CustomButton } from "Components/GlobalComponents/CustomButton/CustomButton";
import { InputForm } from 'styled-components/GlobalFormFields/InputForm.styled';
import { LinkSchema } from "../utilities/schemas";

const SocialMediaInput = ({ onAddLink, onRemoveLink, links }) => {
  const formik = useFormik({
    initialValues: {
      socialMediaLink: "",
    },
    validationSchema: LinkSchema,
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

  return (
    <div>
      <Form.Group>
        <Form.Label>Social Media Link:</Form.Label>
        <div className="d-flex">
          <InputForm
            className="px-4 py-2"
            type="url"
            name="socialMediaLink"
            value={formik.values.socialMediaLink}
            onChange={formik.handleChange}
            placeholder="Enter a social media link"
          />
          <CustomButton
            background="success"
            color="success"
            text="Add"
            onClick={formik.submitForm}
          />
        </div>
        {formik.touched.socialMediaLink && formik.errors.socialMediaLink && (
          <Form.Text className="text-danger">
            {formik.errors.socialMediaLink}
          </Form.Text>
        )}
      </Form.Group>
      {links && links.map((link) => (
        <div key={link} className="d-flex justify-content-between pointer">
            <p>{link}</p>
            <p onClick={onRemoveLink.bind(this, link)} role="button">X</p>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaInput;
