import { Row } from "react-bootstrap"
import styled, { css } from "styled-components"
import { fadeIn } from "./animation.styled"
import { themeColors } from "./Theme.styled"

const tabletStartWidth = 600
const desktopStartWidth = 768

const responsiveDesign = {
  tablet: `@media (min-width: ${tabletStartWidth}px)`,
  desktop: `@media (min-width: ${desktopStartWidth}px)`,
}

const someOtherProperties = {
  globalRadius: "8px",
  globalShadowBoxCards: `0px 4px 4px ${themeColors.blackShadow}`,
}

const Hr = styled.hr`
  height: 2px !important;
  color: ${themeColors.gray};
`

const fontFamily = "'Rubik', sans-serif"

const typography = {
  mobileTitle: () => css`
    font: 700 40px/40px ${fontFamily};
  `,
  mobileSsubTitle: () => css`
    font: 400 16px/16px ${fontFamily};
  `,
  mobileInputText: () => css`
    font: 400 13px/14px ${fontFamily};
  `,
  mobileSmallText: () => css`
    font: 300 11px/20px ${fontFamily};
  `,
  title: () => css`
    font: 700 64px/76px ${fontFamily};
  `,
  subTitle: () => css`
    font: 400 20px/20px ${fontFamily};
  `,
  desktopInputText: () => css`
    font: 300 15px/19px ${fontFamily};
  `,
  desktopButtonText: () => css`
    font: 600 16px/19px ${fontFamily};
  `,
  desktopSmallText: () => css`
    font: 300 14px/20px ${fontFamily};
  `,
}

const titleCssStyle = css`
  color: ${themeColors.black};
  ${typography.mobileTitle()}

  ${responsiveDesign.desktop} {
    ${typography.title()}
  }
`

const subtitleCssStyle = css`
  color: ${themeColors.black};
  ${typography.mobileSsubTitle()}
  line-height: 30px !important;

  ${responsiveDesign.desktop} {
    ${typography.subTitle()}
  }
`

const inputTextCssStyle = css`
  color: ${themeColors.black};
  ${typography.mobileInputText()}

  ${responsiveDesign.desktop} {
    ${typography.desktopInputText()}
  }
`

const smallTextCssStyle = css`
  color: ${themeColors.black};
  ${typography.mobileSmallText()};

  ${responsiveDesign.desktop} {
    ${typography.desktopSmallText()};
  }
`

const TitleText = styled.h1`
  ${() =>
    css`
      ${titleCssStyle}
    `};
`

const SubtitleText = styled.h3`
  ${() =>
    css`
      ${subtitleCssStyle}
    `};
`

const InputTexts = styled.h6`
  ${() =>
    css`
      ${inputTextCssStyle}
    `};
`

const SmallTexts = styled.h6`
  ${() =>
    css`
      ${smallTextCssStyle};
    `};
`

const disabledCssStyle = css`
  background-color: ${themeColors.gray};
  color: ${themeColors.txtGray};
  border: 1px solid ${themeColors.txtGray} !important;

  ${typography.mobileTitle()}

  ${responsiveDesign.desktop} {
    ${typography.title()}
  }

  &:hover {
    background-color: ${themeColors.gray};
    color: ${themeColors.txtGray};
    filter: brightness(1.1) !important;
  }

  &:active {
    background-color: ${themeColors.gray} !important;
    color: ${themeColors.txtGray} !important;
    filter: brightness(1.25);
  }
`

const CustomImage = styled.div`
  background-image: url(${({ image }) => (image ? image : "not image")});
  background-repeat: no-repeat;
  background-size: ${({ backgroundSize }) => backgroundSize || "cover"};
  background-position: top center;
  height: ${({ height }) => height || "50px"};
  width: ${({ width }) => width || "100%"};
  border-radius: ${({ borderRadius }) => borderRadius || "none"};

  ${fadeIn}
`

const dropShadow = css`
  filter: drop-shadow(0px 4px 4px ${themeColors.blackShadow});
`

const WrapMainRoutes = styled(Row)`
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 95%;
  padding: ${({ size: { width } }) => (width < 400 ? "5px" : "5px 1.5rem")};
  min-height: calc(100vh - 296px);

  ${responsiveDesign.desktop} {
    max-width: 85%;
  }

  ${fadeIn}
`

const filterSaturate = css`
  filter: saturate(180%);
`

export {
  filterSaturate,
  someOtherProperties,
  responsiveDesign,
  Hr,
  typography,
  CustomImage,
  TitleText,
  SubtitleText,
  InputTexts,
  SmallTexts,
  smallTextCssStyle,
  titleCssStyle,
  subtitleCssStyle,
  inputTextCssStyle,
  disabledCssStyle,
  dropShadow,
  WrapMainRoutes,
}
