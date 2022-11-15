import { useEffect, useState } from "react";
import { api } from "Services/axiosService";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { MainContainer, CustomText } from "./about.styled";
import Alert from "../Private/BackOffice/components/Alert";

const About = () => {

  const [info, setInfo] = useState({
    longDescription: ''
  });

  useEffect(() => {
    api('/organization')
    .then(res => {
      const {data} = res.data;
      setInfo({
        longDescription: data.long_description,
      });
    })
    .catch(() => {
      Alert({ icon: 'error', title: 'Ha ocurrido un error'});;
    });
  }, []);
  
  return (
    <MainContainer>
      <CustomTitle
        title="Nosotros"
        wrapTitleClass="d-block h-auto"
        justify="center"   
        wrapTextClass="text-center" 
      />
      <CustomText className="mb-5">
        <p>{info.longDescription}</p>
      </CustomText>
    </MainContainer>
  )
}

export default About;