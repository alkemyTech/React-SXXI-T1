import { BackTo } from "Components/BackTo/BackTo";
import { CustomButton } from "Components/CustomButton/CustomButton";
import { InputField } from "Components/FormInputsField/InputField";
import { privateRoutes } from "models/routes";
import { Form } from "react-bootstrap";
import { Animate } from "styled-components/animation.styled";
import { HomeFormImageField } from "./components/HomeFormImageField/HomeFormImageField";
import { usePrivateHome } from "./hooks/usePrivateHome";
import { homeFormFieldsSchema } from "./utilities/homeFormFieldSchema.util";

const PrivateHome = () => {
  const { handleSubmit, formik, handleFirstImageToSend, homeState, handleSecondImageToSend, handleThirdImageToSend } = usePrivateHome();

  return (
    <Animate className="my-3">
      <BackTo wrapLink="my-4" to={"/" + privateRoutes.BACKOFFICE + "dashboard"} />
      <Form className="my-3" onSubmit={handleSubmit}>
        <Form.Group className="my-3">
          <InputField formik={formik} schemas={homeFormFieldsSchema.welcomeText} />
        </Form.Group>
        <Form.Group className="col col-12 d-flex flex-wrap justify-content-center">
          <HomeFormImageField formik={formik}>
            {[
              {
                schemas: homeFormFieldsSchema.firstImage,
                setImageToSend: handleFirstImageToSend,
                imageIsEdit: homeState.firstImageToEdit,
                schemaText: homeFormFieldsSchema.firstText,
              },
              {
                schemas: homeFormFieldsSchema.secondImage,
                setImageToSend: handleSecondImageToSend,
                imageIsEdit: homeState.secondImageToEdit,
                schemaText: homeFormFieldsSchema.secondText,
              },
              {
                schemas: homeFormFieldsSchema.thirdImage,
                setImageToSend: handleThirdImageToSend,
                imageIsEdit: homeState.thirdImageToEdit,
                schemaText: homeFormFieldsSchema.thirdText,
              },
            ]}
          </HomeFormImageField>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <CustomButton
            type={homeFormFieldsSchema.editBtn.type}
            buttonClass="col col-10 col-sm-5"
            color={homeFormFieldsSchema.editBtn.style}
            background={homeFormFieldsSchema.editBtn.style}
            text={homeFormFieldsSchema.editBtn.text}
          />
        </div>
      </Form>
    </Animate>
  );
};

export default PrivateHome;
