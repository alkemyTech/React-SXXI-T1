import { SpanFormError } from "Components/SpanFormError/SpanFormError";
import { InputForm } from "styled-components/GlobalFormFields/InputForm.styled";

export const InputField = (props) => {
  const {
    formik: { values, handleChange, handleBlur, errors, touched },
    schemas: { type, name, placeholder },
    disabled = false,
    as = "",
    inputClass = "",
    height = "auto",
  } = props;

  return (
    <>
      <InputForm
        className={inputClass}
        type={type}
        as={as}
        name={name}
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        disabled={disabled}
        height={height}
      />
      <SpanFormError errors={errors} touched={touched} name={name} />
    </>
  );
};
