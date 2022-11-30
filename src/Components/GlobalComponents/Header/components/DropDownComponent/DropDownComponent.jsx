import { logoutIcon, profileIcon } from "assets/images"
import userProfile from "assets/userProfile.svg"
import { ROLE } from "MOCKAUTH"
import { Dropdown } from "react-bootstrap"
import { Hr } from "styled-components/App.styled"
import { DropdownItem, DropdownMenu, DropdownToggle, Image } from "../../styled-components/DropDownComponent.styled"

export const DropDownComponent = ({ direction }) => {
  const handleLogout = () => console.log("click")

  return (
    <>
      <Dropdown className="d-flex justify-content-start  align-items-center ps-2 ps-md-3 ps-lg-0" drop={direction}>
        <DropdownToggle>
          <Image src={userProfile} alt="user icon" />
        </DropdownToggle>
        <DropdownMenu role={ROLE}>
          <DropdownItem className="mb-1 py-2" disabled>
            Email
          </DropdownItem>
          <DropdownItem>{profileIcon}Editar perfil</DropdownItem>
          <Hr className="d-none d-md-flex " />
          <DropdownItem onClick={handleLogout}>{logoutIcon} Cerrar sesión</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Hr />
    </>
  )
}
