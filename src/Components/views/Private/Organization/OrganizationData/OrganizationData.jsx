import { Container, Image, ContainerEditInf, EditButton, 
    ContainerImage } from './OrganizationDataStiled/OrganizationData.Styled';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function OrganizationData(){
    const navigate = useNavigate();
    const [organizationData, setOrganizationData] = useState({
        name: '',
        image: '',
        shortDescription: ''
    });

    useEffect(()=>{
        axios.get('https://ongapi.alkemy.org/api/organization')
                .then(res => {
                    const info = res.data.data;
                    setOrganizationData({
                        name: info.name,
                        image: info.logo,
                        shortDescription: info.short_description
                    });
                })
                .catch(()=>{
                    alert('Ha ocurrido un error...');
                });
    }, []);

    function handleClick(){
        navigate('/backoffice/organization/edit');
    }

    return(
        <Container>
            <ContainerEditInf>
                <h3>Datos de la Organización:</h3>
                <EditButton
                    background='success'
                    color='success'
                    type='button' 
                    onClick={handleClick}>Editar Información</EditButton>
            </ContainerEditInf>

            <h1 style={{textAlign: 'center'}}>{organizationData.name}</h1>
            <ContainerImage>
                <Image src={organizationData.image} alt={organizationData.name} />
            </ContainerImage>
            <div dangerouslySetInnerHTML={{__html: organizationData.shortDescription}}/>
        </Container>
    )
}