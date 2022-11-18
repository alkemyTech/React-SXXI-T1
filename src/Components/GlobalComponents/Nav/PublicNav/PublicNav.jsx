import { NavLinkReactRouter } from "Components/GlobalComponents/NavLinkReactRouter/NavLinkReactRouter";

export const PublicNav = ({ item }) => {
  return <NavLinkReactRouter text={item.text} to={item.to} />;
};
