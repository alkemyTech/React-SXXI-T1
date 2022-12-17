import { logoutIcon } from "assets/images";
import userProfile from "assets/userProfile.svg";
import { elipsisString } from "views/News/utilities/elipsisString.util";
import { Hr } from "styled-components/App.styled";
import { useDropDown } from "../../hooks/useDropDown";
import { DropDown, DropdownItem, DropdownMenu, DropdownToggle, Image } from "../../styled-components/DropDownComponent.styled";
import { headerSchemas } from "../../utilities/headearSchemas.util";

export const DropDownComponent = ({ typeRole }) => {
  const { email, image, handleLogout } = useDropDown();

  return (
    <DropDown className="d-flex justify-content-start  align-items-center ps-2 ps-md-3 ps-lg-0" drop="down" role={typeRole}>
      <DropdownToggle>
        <Image src={image || userProfile} alt="user icon" />
      </DropdownToggle>
      <DropdownMenu role={typeRole}>
        <DropdownItem className="mb-1 py-2" disabled>
          {email ? elipsisString({ str: email, len: 18 }).string : "Usuario"}
        </DropdownItem>
        <Hr className="d-none d-md-flex " />
        <DropdownItem onClick={handleLogout}>
          {logoutIcon} {headerSchemas.logoutText}
        </DropdownItem>
      </DropdownMenu>
    </DropDown>
  );
};
