import { AnchorTagWithRef } from "Components/GlobalComponents/AnchorTag/AnchorTagWithRef";
import { CustomButton } from "Components/GlobalComponents/CustomButton/CustomButton";
import { InputTexts } from "styled-components/App.styled";
import { useBodyDonation } from "../../hooks/useBodyDonation";
import { WrapBodyDonation } from "../../styled-components/WrapSectionDonation.styled";
import { textForDonation } from "../../utilities/donationSchema.util";
import meliImage from "assets/meliImage.png";
import { ImageBody } from "../../styled-components/BodyDonation.styled";

export const BodyDonation = ({ text }) => {
  const { anchorRef, URLDONATION, handleClickDonate } = useBodyDonation();

  return (
    <WrapBodyDonation className="WrapBodyDonation m-0 my-md-3 col col-12 d-flex flex-column flex-sm-row justify-content-center align-items-center">
      <div className="WrapFirstCol col col-10 col-sm-6 col-xl-4 d-flex flex-column align-items-center justify-content-between my-3">
        <InputTexts className="InputTexts col col-12 p-0 p-sm-2 text-center mb-3 mb-sm-0">{text}</InputTexts>
        <CustomButton
          color="success"
          background="success"
          buttonClass="CustomButton col col-10 col-sm-9 col-md-9 col-lg-7 my-2"
          text={textForDonation.meliDonate}
          onClick={handleClickDonate}
        />
      </div>
      <div className="WrapImageSecondCol col col-10 col-sm-6 d-flex justify-content-center align-items-center my-3">
        <ImageBody
          className="ImageBody p-0 p-sm-2"
          image={meliImage}
          height="84px"
          heightTablet="89px"
          heightDesktop="103px"
          backgroundSize="contain"
          width="100%"
        />
      </div>
      {/* <WrapFirstCol className="WrapFirstCol col col-10 col-sm-6 col-xl-4 d-flex flex-column align-items-center justify-content-between">
        <InputTexts className="InputTexts col col-12 p-0 p-sm-2 text-center mb-3 mb-sm-0">{text}</InputTexts>
        <CustomButton
          color="success"
          background="success"
          buttonClass="CustomButton col col-10 col-sm-9 col-md-9 col-lg-7 mb-4 mb-sm-2"
          text={textForDonation.meliDonate}
          onClick={handleClickDonate}
        />
      </WrapFirstCol>
      <WrapImageSecondCol className="WrapImageSecondCol col col-10 col-sm-6 d-flex justify-content-center align-items-center">
        <ImageBody
          className="ImageBody p-0 p-sm-2"
          image={meliImage}
          height="135px"
          heightTablet="89px"
          heightDesktop="103px"
          backgroundSize="contain"
          width="100%"
        />
      </WrapImageSecondCol> */}

      <AnchorTagWithRef anchorClass="d-none" href={URLDONATION} ref={anchorRef} />
    </WrapBodyDonation>
  );
};
