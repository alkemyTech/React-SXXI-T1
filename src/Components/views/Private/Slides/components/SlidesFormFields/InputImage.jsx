import { FormImageField } from "Components/GlobalComponents/FormImageField/FormImageField";
import { Spinner } from "react-bootstrap";

export const InputImage = (props) => {
  const {
    formik: { errors, touched, setFieldValue },
    schemas: { name },
    imageToSend,
    imageIsEdit,
    loading,
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
          imageToSend={imageToSend}
          imageIsEdit={imageIsEdit?.image}
        />
      )}
    </>
  );
};
