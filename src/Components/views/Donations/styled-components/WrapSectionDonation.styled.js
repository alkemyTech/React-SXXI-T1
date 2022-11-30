import styled from "styled-components"
import { fadeIn } from "styled-components/animation.styled"
import { responsiveDesign } from "styled-components/App.styled"

export const WrapSectionDonation = styled.div`
  ${fadeIn}
`

export const WrapBodyDonation = styled.div`
  height: 50%;

  ${responsiveDesign.tablet} {
    height: 65%;
  }

  ${responsiveDesign.desktop} {
    height: 50%;
  }

  ${responsiveDesign.extraLarge} {
    height: 75%;
  }

  ${fadeIn}
`
