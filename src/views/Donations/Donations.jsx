import { BodyDonation } from "./components/BodyInformation/BodyDonation";
import { HeadTitle } from "./components/HeadTitle/HeadTitle";
import { WrapBodyDonation, WrapSectionDonation } from "./styled-components/WrapSectionDonation.styled";
import { textForDonation } from "./utilities/donationSchema.util";

const Donations = ({ text }) => {
  return (
    <WrapSectionDonation>
      <HeadTitle title={textForDonation.title} />
      <WrapBodyDonation className="col col-12 col-xl-10 m-auto my-3 d-flex justify-content-center align-items-center">
        <BodyDonation text={text} />
      </WrapBodyDonation>
    </WrapSectionDonation>
  );
};

export default Donations;
