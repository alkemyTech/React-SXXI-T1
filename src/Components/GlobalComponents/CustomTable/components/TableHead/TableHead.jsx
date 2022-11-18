import { Spinner } from "react-bootstrap";

export const TableHead = ({ load, element }) => {
  return (
    <th>{load ? <Spinner animation="grow" variant="ligth" /> : element}</th>
  );
};