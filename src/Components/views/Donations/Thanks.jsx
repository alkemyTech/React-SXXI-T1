import { BackToHome } from "Components/GlobalComponents/BackToHome/BackToHome";
import { BodyThanks } from "./components/BodyInformation/BodyThanks";
import { HeadTitle } from "./components/HeadTitle/HeadTitle";
import { WrapSectionDonation } from "./styled-components/WrapSectionDonation.styled";
import { textForDonation } from "./utilities/donationSchema.util";

export const Thanks = () => {
  return (
    <WrapSectionDonation>
      <BackToHome wrapLink="my-4 col col-7 col-sm-5 col-lg-4 mt-5" />
      <HeadTitle title={textForDonation.ongText} />
      {/* <div className="col col-12 mt-3">
        <CustomTitle
          wrapTitleClass="col col-12 h-100 text-center"
          title={textForDonation.ongText}
        />
      </div> */}
      <div className="col col-12 my-3">
        <BodyThanks />
        {/* <div className="col col-12 d-flex flex-column align-items-center">
          <InputTexts className="col col-12 mb-3 text-center">
            {textForDonation.thanks}
          </InputTexts>
        </div> */}
      </div>
    </WrapSectionDonation>
  );
};
