import { feedbackUser as AlertError } from "utilities/alerts/feedbackUser.util";
import { useEffect, useState } from "react";
import { URLs } from "Services/ServicesURLS";
import publicService from "Services/publicApiService";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";

export const useAbout = () => {
  const [aboutData, setAboutData] = useState({
    longDescription: "",
  });

  const [loadingAbout, setLoadingAbout] = useState(true);

  const fetchAbout = async () => {
    try {
      setLoadingAbout(true);
      const fetchingAbout = await publicService.get(URLs.organization);

      if (fetchingAbout && !fetchingAbout.success) throw new Error(fetchingAbout.message);
      setAboutData({
        longDescription: fetchingAbout.data.long_description,
      });
    } catch (error) {
      AlertError("center", "error", requestMessagesSchema.problemExistTryLater);
    } finally {
      setLoadingAbout(false);
    }
  };

  useEffect(() => {
    fetchAbout();
  }, []);

  return { loadingAbout, aboutData, fetchAbout };
};
