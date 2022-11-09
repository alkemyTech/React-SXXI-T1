import { AnchorTagWithRef } from "Components/GlobalComponents/AnchorTag/AnchorTagWithRef";
import { CustomButton } from "Components/GlobalComponents/CustomButton/CustomButton";
import { InputTexts } from "styled-components/App.styled";
import { useBodyDonation } from "../../hooks/useBodyDonation";
import { WrapBodyDonation } from "../../styled-components/WrapSectionDonation.styled";
import { textForDonation } from "../../utilities/donationSchema.util";

export const BodyDonation = ({ text }) => {
  const { anchorRef, URLDONATION, handleClickDonate } = useBodyDonation();

  return (
    <WrapBodyDonation className="col col-12 d-flex flex-column align-items-center">
      <InputTexts className="col col-12 mb-3">{text}</InputTexts>
      <CustomButton
        color="success"
        background="success"
        buttonClass="col col-6"
        text={textForDonation.meliDonate}
        onClick={handleClickDonate}
      />
      <AnchorTagWithRef
        anchorClass="d-none"
        href={URLDONATION}
        ref={anchorRef}
      />
    </WrapBodyDonation>
  );
};
