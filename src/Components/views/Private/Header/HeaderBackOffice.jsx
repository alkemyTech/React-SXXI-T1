import MenuIcon from 'assets/menu.svg';
import { useState } from 'react';
import { Icon, Button, MainContainer } from './HeaderBackOfficeStyled/HeaderBackOffice.Styled';

export default function HeaderBackOffice(){
    const [show, setShow] = useState(false);
    
    const handleClick = () => setShow(true);
    
    return(
        <MainContainer>
            <Button onClick={handleClick}>
                <Icon src={MenuIcon} alt="icono menu"/>
            </Button>
            <h3>Somos Más</h3>
        </MainContainer>
    )
}