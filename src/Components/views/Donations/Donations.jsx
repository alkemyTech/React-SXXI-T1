import { BodyDonation } from "./components/BodyInformation/BodyDonation"
import { HeadTitle } from "./components/HeadTitle/HeadTitle"
import { WrapBodyDonation, WrapSectionDonation } from "./styled-components/WrapSectionDonation.styled"
import { textForDonation } from "./utilities/donationSchema.util"

export const Donations = ({ text }) => {
  return (
    <WrapSectionDonation>
      <HeadTitle title={textForDonation.title} />
      <WrapBodyDonation className="col col-12 my-3">
        <BodyDonation text={text} />
      </WrapBodyDonation>
    </WrapSectionDonation>
  )
}
