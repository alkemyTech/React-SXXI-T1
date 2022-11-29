import { feedbackUser as AlertError } from "utilities/alerts/feedbackUser.util";
import { useEffect, useState } from "react";
import publicService from "Services/publicApiService";
import { URLs } from "Services/ServicesURLS";

export const useMembers = () => {
  const [ membersData, setMembersData] = useState([]);
  const [ loadingMembers, setLoadingMembers ] = useState(true);

  const fetchMembers = async () => {
    try {
      setLoadingMembers(true);
      const fetchingMembersList = await publicService.get(URLs.member);

      if (fetchingMembersList && !fetchingMembersList.success)
        throw new Error(fetchingMembersList.message);

      const { data } = fetchingMembersList.data;
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
      setMembersData(membersList);
    } catch (error) {
      AlertError(
        'center', 
        'error', 
        'No hay miembros'
      );
    } finally {
      setLoadingMembers(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);


  return { membersData, loadingMembers, fetchMembers }
}