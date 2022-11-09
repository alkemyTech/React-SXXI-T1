import { CustomButton } from "Components/GlobalComponents/CustomButton/CustomButton";
import { WrapButtonsForm } from "../../styled-components/SlidesForm.styled";
import { buttonSchema } from "../../utilities/slidesSchema.util";

export const ButtonSlideForm = ({ idSlide }) => {
  return (
    <WrapButtonsForm>
      <CustomButton
        type="submit"
        buttonClass="col col-10 col-sm-5"
        color={idSlide ? buttonSchema.edit.paint : buttonSchema.confirm.paint}
        background={
          idSlide ? buttonSchema.edit.paint : buttonSchema.confirm.paint
        }
        text={idSlide ? buttonSchema.edit.text : buttonSchema.confirm.text}
      />
    </WrapButtonsForm>
  );
};
