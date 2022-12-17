import { ImageBody } from "../../styled-components/BodyDonation.styled";
import { WrapBodyDonation } from "../../styled-components/WrapSectionDonation.styled";
import { textForDonation } from "../../utilities/donationSchema.util";
import heartHandsImage from "assets/heartHandsImage.svg";
import { ThanksText } from "../../styled-components/ThanksText.styled";

export const BodyThanks = () => {
  return (
    <WrapBodyDonation className="mt-2 mb-5 col col-12 d-flex flex-column flex-sm-row justify-content-center align-items-center">
      <ImageBody className="col col-12 p-0 d-flex align-items-end justify-content-center" image={heartHandsImage} height="450px">
        <ThanksText className="col col-12 py-3 px-0 text-center m-0" blur="10px">
          {textForDonation.thanks}
        </ThanksText>
      </ImageBody>
    </WrapBodyDonation>
  );
};
