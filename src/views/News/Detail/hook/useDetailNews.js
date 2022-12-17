import { useState } from "react";
import { useParams } from "react-router-dom";

export const useDetailNews = () => {
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [news, setNews] = useState([]);
  const [descriptionSize, setDescriptionSize] = useState("");
  const [loading, setLoading] = useState(false);

  const textDivider = (text) => {
    let text1;
    let text2;
    const points = "...";

    if (text.length > 130 && descriptionSize === "sm") {
      text1 = text.slice(0, 127);
      text2 = text.slice(127);
      return { text1, text2, points };
    }

    if (text.length > 184 && descriptionSize === "md") {
      text1 = text.slice(0, 181);
      text2 = text.slice(181);
      return { text1, text2, points };
    }

    if (text.length > 500 && descriptionSize === "lg") {
      text1 = text.slice(0, 497);
      text2 = text.slice(497);
      return { text1, text2, points };
    }

    if (text.length > 1055 && descriptionSize === "xl") {
      text1 = text.slice(0, 1047);
      text2 = text.slice(1047);
      return { text1, text2, points };
    }

    if (text === undefined || text === null) return "";

    return text;
  };

  const handleResize = () => {
    if (window.innerWidth < 620) setDescriptionSize("sm");
    if (window.innerWidth >= 620 && window.innerWidth < 830) setDescriptionSize("md");
    if (window.innerWidth >= 830 && window.innerWidth < 1100) setDescriptionSize("lg");
    if (window.innerWidth >= 1100) setDescriptionSize("xl");
  };

  return {
    news,
    setNews,
    id,
    handleResize,
    textDivider,
    show,
    setShow,
    loading,
    setLoading,
  };
};
