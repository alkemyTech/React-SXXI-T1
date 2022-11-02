// import { useEffect } from "react";
import imageTest from 'assets/LOGO-SOMOS-MAS.png';
import { Container, Image, ContainerEditInf, EditButton } from './OrganizationDataStiled/OrganizationData.Styled';
import { CustomTitle } from 'Components/GlobalComponents/CustomTitle/CustomTitle';
import { useNavigate } from 'react-router-dom';

export default function OrganizationData(){
    const navigate = useNavigate();

    // useEffect(()=>{
    //     axios.get(URL datos de la organizacion);
    // }, []);

    function handleClick(){
        navigate('/backoffice/organization/edit');
    }

    return(
        <Container>
            <ContainerEditInf>
                <h3>Datos de la Organización:</h3>
                <EditButton type='button' onClick={handleClick}>Editar Información</EditButton>
            </ContainerEditInf>

                {/* name */}
            <CustomTitle title='Somos Más' />

            {/* image */}
            <Image src={imageTest} alt="imagen de prueba" />

            <p>
                {/* shortDescription */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dicta velit aspernatur repellendus dolorum quod rerum aut, 
                laudantium consequatur qui quidem. Consequuntur ullam 
                delectus quae harum vitae consectetur quaerat illo corrupti?
            </p>
        </Container>
    )
}