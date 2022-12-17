import Offcanvas from 'react-bootstrap/Offcanvas';
import { ContainerLinks, NavLinkStyled, IconAndLink,
    Icon } from './SideBarStyled/SideBar.Styled';
import { privateLinks } from './utilities/utilities';

export default function SideBar({show, handleClose}){

    return(
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Somos más</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ContainerLinks>
                    {
                        privateLinks?.map(el => 
                            <IconAndLink key={el.name}>
                                <button onClick={handleClose}>
                                    <NavLinkStyled end to={el.to} activeclassname='active'>
                                        <Icon src={el.icon} alt={el.alt}/> {el.name}
                                    </NavLinkStyled>
                                </button>
                            </IconAndLink>
                        )
                    }
                </ContainerLinks>
            </Offcanvas.Body>
        </Offcanvas>
    )
}