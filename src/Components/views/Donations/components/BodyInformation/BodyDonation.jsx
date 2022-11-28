import { AnchorTagWithRef } from "Components/GlobalComponents/AnchorTag/AnchorTagWithRef"
import { CustomButton } from "Components/GlobalComponents/CustomButton/CustomButton"
import { InputTexts } from "styled-components/App.styled"
import { useBodyDonation } from "../../hooks/useBodyDonation"
import { WrapBodyDonation } from "../../styled-components/WrapSectionDonation.styled"
import { textForDonation } from "../../utilities/donationSchema.util"
import meliImage from "assets/meliImage.jpg"
import { ImageBodyDontation } from "../../styled-components/BodyDonation.styled"

export const BodyDonation = ({ text }) => {
  const { anchorRef, URLDONATION, handleClickDonate } = useBodyDonation()

  return (
    <WrapBodyDonation className="mt-3 mb-5 col col-12 d-flex flex-column flex-sm-row justify-content-center align-items-center">
      <div className="col col-10 col-sm-6 d-flex flex-column align-items-center justify-content-between">
        <InputTexts className="col col-12 p-0 p-sm-2 text-center mb-3 mb-sm-0">{text}</InputTexts>
        <CustomButton
          color="success"
          background="success"
          buttonClass="col col-10 col-sm-9 col-md-9 col-lg-7 mb-4 mb-sm-2"
          text={textForDonation.meliDonate}
          onClick={handleClickDonate}
        />
      </div>
      <div className="col col-10 col-sm-6">
        <ImageBodyDontation className="p-0 p-sm-2" image={meliImage} height="208px" />
      </div>

      <AnchorTagWithRef anchorClass="d-none" href={URLDONATION} ref={anchorRef} />
    </WrapBodyDonation>
  )
}
