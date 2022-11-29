import { useEffect, useState } from "react"

import { feedbackUser } from "utilities/alerts/feedbackUser.util"
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util"
import { URLs } from "Services/ServicesURLS"
import privateService from "Services/privateApiService"
import { encodeQueryParams } from "utilities/queryParams"

export const useMembers = () => {
  const [membersData, setMembersData] = useState([])
  const [loadingMembers, setLoadingMembers] = useState(true)

  const fetchMembers = async (params = {}) => {
    try {
      setLoadingMembers(true)
      const queryParams = encodeQueryParams(params)
      const queryUrl = `${URLs.member}?${queryParams}`
      const fetchingMembers = await privateService.get(queryUrl)

      if (fetchingMembers && !fetchingMembers.success) throw new Error(fetchingMembers.message)

      setMembersData(fetchingMembers.data)
    } catch (error) {
      console.error("error Members", error.message)
      feedbackUser("top-end", "error", `${requestMessagesSchema.problemExistTryLater} ${requestMessagesSchema.contactAdmin}`)
    } finally {
      setLoadingMembers(false)
    }
  }

  useEffect(() => {
    fetchMembers()
  }, [])

  return { loadingMembers, membersData, fetchMembers }
}
