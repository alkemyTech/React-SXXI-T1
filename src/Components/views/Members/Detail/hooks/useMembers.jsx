import { feedbackUser as AlertWarning } from "utilities/alerts/feedbackUser.util";
import { useEffect, useState } from "react";
import { api } from "Services/axiosService";

export const useMembers = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    api('/members')
    .then(res => { 
      const { data } = res.data;
      const membersList = data.map( member=> {
        return {
          id: member.id,
          image: member.image,
          name: member.name,
          description: member.description,
          fecabookUrl: member.fecabookUrl,
          linkedinUrl: member.linkedinUrl,
        }
      })
      setInfo(membersList);
    })
    .catch(() => {
      AlertWarning("center", "error", "Ha ocurrido un error al buscar los miembros.");
    });
  }, []);

  return info
}