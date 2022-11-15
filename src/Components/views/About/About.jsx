import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";

const About = ( title) => {

  title = "Nosotros";
  
  return (
    <>
      <div>
        <CustomTitle
          title={title}
          wrapTitleClass="d-block h-auto"
          justify="center"   
          wrapTextClass="text-center" 
        />
      </div>
    </>
  )
}

export default About;