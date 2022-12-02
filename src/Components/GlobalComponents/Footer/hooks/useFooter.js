import { useEffect, useState } from "react";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { getLocalStorage } from "utilities/localStorage.util";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";
import { getContactData } from "../interceptor/getContactData.interceptor";

export const useFooter = () => {
  const [contactData, setContactData] = useState(undefined);
  const [loadingData, setLoadingData] = useState(false);

  const [newsLetter, setNewsLetter] = useState(!!getLocalStorage("newsLetter"));

  const handleNewsLetter = (value) => setNewsLetter(value);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        setLoadingData(true);
        const fetchData = await getContactData();
        setContactData(fetchData);
      } catch (error) {
        console.error("error Footer - fetchContactData", error.message);
        feedbackUser("top-end", "error", requestMessagesSchema.problemExistTryLater);
      } finally {
        setLoadingData(false);
      }
    };

    fetchContactData();
  }, []);

  return { contactData, loadingData, handleNewsLetter, newsLetter };
};
