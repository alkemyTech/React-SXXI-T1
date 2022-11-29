import { useEffect, useState } from "react"

import { feedbackUser } from "utilities/alerts/feedbackUser.util"
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util"
import { URLs } from "Services/ServicesURLS"
import privateService from "Services/privateApiService"
import { encodeQueryParams } from "utilities/queryParams"

export const useUsers = () => {
  const [usersData, setUsersData] = useState([])
  const [loadingUsers, setLoadingUsers] = useState(true)

  const fetchUsers = async (params = {}) => {
    try {
      setLoadingUsers(true)
      const queryParams = encodeQueryParams(params)
      const queryUrl = `${URLs.users}?${queryParams}`
      const fetchingUsers = await privateService.get(queryUrl)

      if (fetchingUsers && !fetchingUsers.success) throw new Error(fetchingUsers.message)

      setUsersData(fetchingUsers.data)
    } catch (error) {
      console.error("error Users", error.message)
      feedbackUser("top-end", "error", `${requestMessagesSchema.problemExistTryLater} ${requestMessagesSchema.contactAdmin}`)
    } finally {
      setLoadingUsers(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return { loadingUsers, usersData, fetchUsers }
}
