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
        // <Navbar bg='primary' variant='dark'>
        //     {/* <Container> */}
        //     {/* <Navbar.Brand href="#home">
        //         <img
        //           alt="icono menu"
        //           src={MenuIcon}
        //           width="30"
        //           height="30"
        //           className="d-inline-block align-top"
        //         />{' '}
        //         React Bootstrap
        //     </Navbar.Brand> */}
        //         <Button onClick={handleClick}>
        //             <Icon src={MenuIcon} alt="icono menu"/>
        //         </Button>
        //         <h3 className='me-auto'>Somos Más</h3>
        //     {/* </Container> */}
        // </Navbar>
    )
}