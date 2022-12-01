import NavLinkReactRouter from "Components/GlobalComponents/NavLinkReactRouter/NavLinkReactRouter"
import { Nav } from "react-bootstrap"
import { Hr } from "styled-components/App.styled"

export const HeaderNav = ({ isPhone, handleCloseOffCanvas, itemsNav, typeRole }) => {
  const clickCloseOffcanvas = isPhone || typeRole === "admin" ? handleCloseOffCanvas : undefined

  const navLinkRender = (item) => (
    <NavLinkReactRouter text={item.text} to={item.to} navLinkClass="m-sm-1 m-lg-2" handleCloseToggle={clickCloseOffcanvas} icon={item.icon} />
  )

  return (
    <Nav className="justify-content-end flex-grow-1 pe-3">
      {itemsNav.map((item, index) => (
        <span key={index}> {item.text !== "hr" ? navLinkRender(item) : <Hr />}</span>
      ))}
    </Nav>
  )
}
