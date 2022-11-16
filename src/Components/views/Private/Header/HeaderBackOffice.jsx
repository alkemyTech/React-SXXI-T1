import MenuIcon from 'assets/menu.svg';
import { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import { Icon, Button, MainContainer } from './HeaderBackOfficeStyled/HeaderBackOffice.Styled';

export default function HeaderBackOffice(){
    const [show, setShow] = useState(false);
    
    const handleClick = () => setShow(true);
    const handleClose = () => setShow(false);
    
    return(
        <MainContainer>
            <Button onClick={handleClick}>
                <Icon src={MenuIcon} alt="icono menu"/>
            </Button>
            <h3>Somos Más</h3>
            <SideBar show={show} handleClose={handleClose}/>
        </MainContainer>
    )
}