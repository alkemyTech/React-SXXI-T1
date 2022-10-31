import { CustomFormError } from "./styled-components/SpanFormError.styled";

export const SpanFormError = ({ errors, touched, name }) => {
  return (
    <>
      {errors && errors[name] && touched[name] && (
        <CustomFormError>{errors.email}</CustomFormError>
      )}
    </>
  );
};
