import { InputTexts } from "styled-components/App.styled";
import { WrapBodyDonation } from "../../styled-components/WrapSectionDonation.styled";
import { textForDonation } from "../../utilities/donationSchema.util";

export const BodyThanks = () => {
  return (
    <WrapBodyDonation className="col col-12 d-flex flex-column align-items-center">
      <InputTexts className="col col-12 mb-3 text-center">
        {textForDonation.thanks}
      </InputTexts>
    </WrapBodyDonation>
  );
};
