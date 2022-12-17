import { useState } from "react"
import { feedbackUser } from "utilities/alerts/feedbackUser.util";

export const useIndexHook = () => {
    const [info, setInfo] = useState({
        welcomeText: "",
        organizationImage: "",
        shortDescription: "",
      });
    const [minSize, setMinSize] = useState(false);
    const [show, setShow] = useState(false);

    const handleResize = () => {
        if (window.innerWidth < 500) {
        setMinSize(true);
        } else {
        setMinSize(false);
        }
    };
    function handleClick(e){
        e.preventDefault();
        feedbackUser('center', 'info', '¡Esta sección estará habilitada pronto!');
    }
    function handleShow(e){
        e.preventDefault();
        setShow(!show);
    }
    return {
        info,
        setInfo,
        minSize,
        show,
        handleResize,
        handleClick,
        handleShow
    }
}