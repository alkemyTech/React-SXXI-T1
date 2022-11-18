import { routes } from "models/routes";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { handleUserConfirm } from "utilities/alerts/userConfirm.util";

const { REACT_APP_URL_DONATION: URLDONATION } = process.env;

export const useBodyDonation = () => {
  const anchorRef = useRef();
  const navigate = useNavigate();

  const handleClickDonate = async () => {
    const actionConfirm = await handleUserConfirm(
      "¿Seguro quieres hacer una donación?"
    );

    if (!actionConfirm) return;

    anchorRef.current.click();
    navigate(routes.THANKSDONATION, { replace: true });
  };

  return { anchorRef, URLDONATION, handleClickDonate };
};
