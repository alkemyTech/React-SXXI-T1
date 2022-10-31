import { useParams } from "react-router-dom";

export const useGetParams = (value) => {
  const params = useParams();
  const parameterValue = params[value];

  return { parameterValue };
};
