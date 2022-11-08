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
      <div className="col col-12 my-3">
        <BodyThanks />
      </div>
    </WrapSectionDonation>
  );
};
