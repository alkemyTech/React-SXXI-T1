import { useEffect, useState } from "react"

import { feedbackUser } from "utilities/alerts/feedbackUser.util"
import { filterNews } from "../utilities/utilities"
import { URLs } from "Services/ServicesURLS"
import privateService from "Services/privateApiService"
import { encodeQueryParams } from "utilities/queryParams"
import { errorMessages } from "../utilities/errorMessages"

export const useNews = () => {
  const [newsData, setNewsData] = useState([])
  const [loadingNews, setLoadingNews] = useState(true)

  const fetchNews = async (params = {}) => {
    try {
      setLoadingNews(true)
      const queryParams = encodeQueryParams(params)
      const queryUrl = `${URLs.news}?${queryParams}`
      const fetchingNews = await privateService.get(queryUrl)

      if (fetchingNews && !fetchingNews.success) {
        throw new Error(fetchingNews.message)
      }

      const filterSlides = filterNews(fetchingNews.data)

      setNewsData(filterSlides)
    } catch (error) {
      feedbackUser("center", "error", `${errorMessages.getNews}`)
    } finally {
      setLoadingNews(false)
    }
  }

  useEffect(() => {
    fetchNews()
  }, [])

  return { loadingNews, newsData, fetchNews }
}
