import { BodyThanks } from "./components/BodyInformation/BodyThanks";
import { HeadTitle } from "./components/HeadTitle/HeadTitle";
import { WrapSectionDonation } from "./styled-components/WrapSectionDonation.styled";
import { textForDonation } from "./utilities/donationSchema.util";

const Thanks = () => {
  return (
    <WrapSectionDonation>
      <HeadTitle title={textForDonation.ongText} />
      <div className="col col-12 my-3">
        <BodyThanks />
      </div>
    </WrapSectionDonation>
  );
};

export default Thanks;
