import { routes } from "models/routes";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { handleUserConfirm } from "utilities/alerts/userConfirm.util";
import { textForDonation } from "../utilities/donationSchema.util";

const { REACT_APP_URL_DONATION: URLDONATION } = process.env;

export const useBodyDonation = () => {
  const anchorRef = useRef();
  const navigate = useNavigate();

  const handleClickDonate = async () => {
    const actionConfirm = await handleUserConfirm(textForDonation.areYouSure);

    if (!actionConfirm) return;

    anchorRef.current.click();
    navigate(routes.THANKSDONATION, { replace: true });
  };

  return { anchorRef, URLDONATION, handleClickDonate };
};
