import { Container, Image, ContainerEditInf, EditButton, 
    ContainerImage } from './OrganizationDataStiled/OrganizationData.Styled';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from 'Services/axiosService';
import Swal from 'sweetalert2';

export default function OrganizationData(){
    const navigate = useNavigate();
    const [organizationData, setOrganizationData] = useState({
        name: '',
        image: '',
        shortDescription: ''
    });
    const urlNavigate = '/backoffice/organization/edit';

    useEffect(()=>{
        api.get('/organization')
        .then(res => {
            const { data } = res.data;
            setOrganizationData({
                name: data.name,
                image: data.logo,
                shortDescription: data.short_description
            })
        })
        .catch(()=>{
            Swal.fire({
                title: 'Hubo un error',
                icon: 'error',
                confirmButtonColor: '#0038FF',
                confirmButtonText: 'Aceptar',
            })
            .then(()=>{
                navigate('/backoffice');
            });
        });
    }, [navigate]);
    
    function handleClick(){
        navigate(urlNavigate);
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