import { CustomImage, InputTexts } from "styled-components/App.styled";

export const FooterLogo = ({ logo, name }) => {
  return (
    <>
      <CustomImage image={logo} backgroundSize="contain" height="70px" />
      <InputTexts className="p-1"> {name}</InputTexts>
    </>
  );
};
