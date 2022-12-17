import { FormImageField } from "Components/FormImageField/FormImageField";
import { SkeletonLoader } from "../Loading/SkeletonLoader/SkeletonLoader";

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
        <SkeletonLoader
          placeClass="placeClass col col-12 d-flex justify-content-center w-100 h-100"
          spanClass="spanClass h-100 w-50"
          height="250px"
        />
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
