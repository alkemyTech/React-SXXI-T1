import { SpanFormError } from "Components/GlobalComponents/SpanFormError/SpanFormError";
import { InputForm } from "styled-components/GlobalFormFields/InputForm.styled";

export const Inputs = (props) => {
  const {
    formik: { values, handleChange, handleBlur, errors, touched },
    schemas: { type, name, placeholder },
    disabled = false,
  } = props;

  return (
    <>
      <InputForm
        type={type}
        name={name}
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        disabled={disabled}
      />
      <SpanFormError errors={errors} touched={touched} name={name} />
    </>
  );
};
