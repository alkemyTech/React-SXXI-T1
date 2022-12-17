import { CustomButton } from "Components/CustomButton/CustomButton";
import { SpanFormError } from "Components/SpanFormError/SpanFormError";
import { useNewsLetter } from "../hooks/useNewsLetter";
import { FormGroup, FormNewsLetter, TextSubscribeNewsLetter } from "../styled-components/FormFooter.styled";
import { InputNewsLetter } from "../styled-components/InputNewsLetter.styled";
import { formSchema, textSubscribtion } from "../utilities/newsLetterSchemas.util";

export const NewsLetter = ({ handleNewsLetter }) => {
  const {
    formik: { handleSubmit, values, handleChange, handleBlur, errors, touched },
  } = useNewsLetter(handleNewsLetter);

  return (
    <FormNewsLetter className="col col-12" onSubmit={handleSubmit}>
      <TextSubscribeNewsLetter>{textSubscribtion.subNewsLetterText}</TextSubscribeNewsLetter>

      <FormGroup className="col col-12">
        <InputNewsLetter
          className="me-1 mb-1 col col-12"
          type={formSchema.inputNewsLetterAttr.type}
          placeholder={formSchema.inputNewsLetterAttr.placeholder}
          name={formSchema.inputNewsLetterAttr.name}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors.email}
          touched={touched.email ? "true" : "false"}
        />
        <SpanFormError errors={errors} touched={touched} name="email" />
      </FormGroup>
      <CustomButton
        buttonClass="col col-10 col-sm-5 mt-2 m-auto "
        type="submit"
        text={formSchema.submitButtonAttr.text}
        color="success"
        background="success"
      />
    </FormNewsLetter>
  );
};
