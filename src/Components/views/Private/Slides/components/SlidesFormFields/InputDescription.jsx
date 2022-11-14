import { FormCKEditorField } from "Components/GlobalComponents/FormCKEditorField/FormCKEditorField";

export const InputDescription = (props) => {
  const {
    formik: { errors, touched, setFieldValue, values },
    schemas: { name },
  } = props;

  return (
    <FormCKEditorField
      setFieldValue={setFieldValue}
      errors={errors}
      touched={touched}
      name={name}
      data={values.description}
    />
  );
};
