import { CustomButton } from "Components/CustomButton/CustomButton";
import { WrapButtonsForm } from "../../styled-components/SlidesForm.styled";
import { privateSlidesSchema } from "../../utilities/slidesSchema.util";

export const ButtonSlideForm = ({ idSlide }) => {
  return (
    <WrapButtonsForm>
      <CustomButton
        type="submit"
        buttonClass="col col-10 col-sm-5 mb-3"
        color={idSlide ? privateSlidesSchema.buttons.edit.paint : privateSlidesSchema.buttons.confirm.paint}
        background={idSlide ? privateSlidesSchema.buttons.edit.paint : privateSlidesSchema.buttons.confirm.paint}
        text={idSlide ? privateSlidesSchema.buttons.edit.text : privateSlidesSchema.buttons.confirm.text}
      />
    </WrapButtonsForm>
  );
};
