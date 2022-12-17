import { CustomFormError } from "./styled-components/SpanFormError.styled";

export const SpanFormError = ({ errors, touched, name }) => {
  return <>{errors && errors[name] && touched[name] && <CustomFormError className="CustomFormError mt-1">{errors[name]}</CustomFormError>}</>;
};
