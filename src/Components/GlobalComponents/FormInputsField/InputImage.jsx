import { FormImageField } from "Components/GlobalComponents/FormImageField/FormImageField";
import { Spinner } from "react-bootstrap";

export const InputImage = (props) => {
  const {
    formik: { errors, touched, setFieldValue },
    schemas: { name },
    setImageToSend,
    imageIsEdit,
    loading,
    wrapInputClass,
    wrapAllFormImageField,
  } = props;

  return (
    <>
      {loading ? (
        <Spinner animation="grow" variant="primary" />
      ) : (
        <FormImageField
          errors={errors}
          touched={touched}
          name={name}
          setFieldValue={setFieldValue}
          setImageToSend={setImageToSend}
          imageIsEdit={imageIsEdit.image}
          wrapInputClass={wrapInputClass}
          wrapAllFormImageField={wrapAllFormImageField}
        />
      )}
    </>
  );
};
