import { BackTo } from "Components/GlobalComponents/BackTo/BackTo";
import { routes } from "models/routes";
import { BodyThanks } from "./components/BodyInformation/BodyThanks";
import { HeadTitle } from "./components/HeadTitle/HeadTitle";
import { WrapSectionDonation } from "./styled-components/WrapSectionDonation.styled";
import { textForDonation } from "./utilities/donationSchema.util";

export const Thanks = () => {
  return (
    <WrapSectionDonation>
      <HeadTitle title={textForDonation.ongText} />
      <BackTo wrapLink="my-4" to={routes.HOME} text="Ir a inicio" />
      <div className="col col-12 my-3">
        <BodyThanks />
      </div>
    </WrapSectionDonation>
  );
};
