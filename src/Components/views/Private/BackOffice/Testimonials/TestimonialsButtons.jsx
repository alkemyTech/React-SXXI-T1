import { CustomButton } from "Components/GlobalComponents/CustomButton/CustomButton";
import { useTestimonialsForms } from "./hooks/useTestimonialsForms";

export default function TestimonialButtons() {
  const {handleClick } = useTestimonialsForms();

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