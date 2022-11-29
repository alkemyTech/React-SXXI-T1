import { SpinnerGrow } from "Components/GlobalComponents/Loading/SpinnerGrow/SpinnerGrow";

export const TableHead = ({ load, element }) => {
  return (
    <th>{load ? <SpinnerGrow animation="grow" variant="ligth" /> : element}</th>
  );
};
