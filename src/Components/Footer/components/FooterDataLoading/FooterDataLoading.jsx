import { Spinner } from "react-bootstrap";

export const FooterDataLoading = ({ children, loading }) => {
  return <>{loading ? <Spinner animation="grow" variant="primary" /> : children}</>;
};
