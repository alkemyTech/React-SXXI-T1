import Placeholder from 'react-bootstrap/Placeholder';

export const TextLoader = ({ animation, variant, xs }) => {
  return (
    <Placeholder  
      className="d-flex flex-wrap justify-content-center" 
      as="p" animation={animation} variant={variant} >
      <Placeholder xs={xs} />
    </Placeholder>
  );
};