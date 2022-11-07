import { CustomButton } from "Components/GlobalComponents/CustomButton/CustomButton";
import { useNavigate } from 'react-router-dom/dist';

export default function TestimonialButtons() {
  const navigate = useNavigate();
  const backURL = '/backoffice/testimonials';

  const handleClick = () => {
    navigate(backURL);
  }

  return(
    <div className=" my-4 d-grid gap-3 d-md-flex justify-content-md-center">
        <CustomButton 
            type="submit"
            color="success" 
            background="success" 
            text="Confirmar" />
        <CustomButton 
            type="button"
            color="default" 
            background="default" 
            text="Cancelar" 
            onClick={handleClick}
            />
    </div>
  );
}