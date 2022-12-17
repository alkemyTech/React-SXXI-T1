import { InputField } from "Components/FormInputsField/InputField";
import { InputImage } from "Components/FormInputsField/InputImage";
import { WrapImageField } from "../../styled-components/WrapImageField.styled";

export const HomeFormImageField = ({ children, formik }) => {
  return (
    <>
      {children.map((element, idx) => (
        <WrapImageField key={idx} className="col col-12 p-2 d-flex flex-column flex-sm-row align-items-start">
          <InputImage
            formik={formik}
            schemas={element.schemas}
            setImageToSend={element.setImageToSend}
            imageIsEdit={element.imageIsEdit}
            wrapInputClass="col col-11 d-flex flex-column"
            wrapAllFormImageField="d-flex flex-column col col-12 col-sm-8"
          />
          <div className="col col-12 col-sm-4">
            <InputField as="textarea" formik={formik} schemas={element.schemaText} inputClass="form-control w-100 " height="171px" />
          </div>
        </WrapImageField>
      ))}
    </>
  );
};
