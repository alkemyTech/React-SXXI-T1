import { FormCKEditorField } from "Components/FormCKEditorField/FormCKEditorField";

export const InputDescription = (props) => {
  const {
    formik: { errors, touched, setFieldValue, values },
    schemas: { name },
    load,
  } = props;

  return <FormCKEditorField setFieldValue={setFieldValue} errors={errors} touched={touched} name={name} data={values.description} load={load} />;
};
