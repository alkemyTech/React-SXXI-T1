import { BackTo } from "Components/GlobalComponents/BackTo/BackTo";
import { BodyDonation } from "./components/BodyInformation/BodyDonation";
import { HeadTitle } from "./components/HeadTitle/HeadTitle";
import { WrapSectionDonation } from "./styled-components/WrapSectionDonation.styled";
import { textForDonation } from "./utilities/donationSchema.util";

export const Donations = ({ text }) => {
  return (
    <WrapSectionDonation>
      <HeadTitle title={textForDonation.title} />
      <BackTo wrapLink="my-4" to="home" />
      <div className="col col-12 my-3">
        <BodyDonation text={text} />
      </div>
    </WrapSectionDonation>
  );
};
