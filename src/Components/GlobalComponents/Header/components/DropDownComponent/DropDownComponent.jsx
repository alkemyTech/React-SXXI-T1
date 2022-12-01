import { logoutIcon, profileIcon } from "assets/images"
import userProfile from "assets/userProfile.svg"
import { elipsisString } from "Components/views/News/utilities/elipsisString.util"
import { Dropdown } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Hr } from "styled-components/App.styled"
import { DropdownItem, DropdownMenu, DropdownToggle, Image } from "../../styled-components/DropDownComponent.styled"
import { headerSchemas } from "../../utilities/headearSchemas.util"

export const DropDownComponent = ({ direction, typeRole }) => {
  const {
    user: { email },
  } = useSelector((store) => store.user)

  const handleLogout = () => console.log("click")

  return (
    <>
      <Dropdown className="d-flex justify-content-start  align-items-center ps-2 ps-md-3 ps-lg-0" drop={direction}>
        <DropdownToggle>
          <Image src={userProfile} alt="user icon" />
        </DropdownToggle>
        <DropdownMenu role={typeRole}>
          <DropdownItem className="mb-1 py-2" disabled>
            {email ? elipsisString({ str: email, len: 18 }).string : "Usuario"}
          </DropdownItem>
          <DropdownItem>
            {profileIcon} {headerSchemas.updateText}
          </DropdownItem>
          <Hr className="d-none d-md-flex " />
          <DropdownItem onClick={handleLogout}>
            {logoutIcon} {headerSchemas.logoutText}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Hr />
    </>
  )
}
