import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import MembersList from "../Members/MembersList";

const About = () => {
  return (
    <>
      <div>
        <CustomTitle
          title="Nosotros"
          justify="center"   
          wrapTextClass="text-center"
          wrapTitleClass="h-auto" 
        />
      </div>
      <MembersList />
    </>
  )
}

export default About;