import Placeholder from 'react-bootstrap/Placeholder';

export const SkeletonLoader = ({ placeClass="d-flex flex-wrap justify-content-center mb-2", size ="lg", as = "p", animation="glow",xs=10  }) => {
  return (
    <Placeholder  
      className={placeClass}
      size= {size}
      as={as} 
      animation={animation} >
      <Placeholder xs={xs} />
    </Placeholder>
  );
};