import { NavLinkReactRouter } from "Components/NavLinkReactRouter/NavLinkReactRouter";

export const PublicNav = ({ item }) => {
  return <NavLinkReactRouter text={item.text} to={item.to} />;
};
