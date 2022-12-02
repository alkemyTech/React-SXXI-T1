import { useEffect, useState } from "react"

import { feedbackUser } from "utilities/alerts/feedbackUser.util"
import { URLs } from "Services/ServicesURLS"
import privateService from "Services/privateApiService"
import { errorMessages } from "../utilities/errorMessages"

export const useCategories = () => {
  const [categoriesData, setCategoriesData] = useState([])
  const [loadingCategories, setLoadingCategories] = useState(true)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoadingCategories(true)
        const queryUrl = URLs.category
        const fetchingCategories = await privateService.get(queryUrl)

        if (fetchingCategories && !fetchingCategories.success) throw new Error(fetchingCategories.message)

        setCategoriesData(fetchingCategories.data)
      } catch (error) {
        feedbackUser("center", "error", `${errorMessages.getCategories}`)
      } finally {
        setLoadingCategories(false)
      }
    }

    fetchCategories()
  }, [])

  return { loadingCategories, categoriesData }
}
