import { useEffect, useState } from "react"

import { feedbackUser } from "utilities/alerts/feedbackUser.util"
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util"
import { filterNews } from "../utilities/filterNews.util"
import { orderNewsByDateCreate } from "../utilities/orderNewsByDateCreate.util"
import { URLs } from "Services/ServicesURLS"
import publicService from "Services/publicApiService"
import { encodeQueryParams } from "utilities/queryParams"

export const useNews = () => {
  const [newsData, setNewsData] = useState([])
  const [loadingNews, setLoadingNews] = useState(true)

  const fetchNews = async (params = {}) => {
    try {
      setLoadingNews(true)
      const queryParams = encodeQueryParams(params)
      const queryUrl = `${URLs.news}?${queryParams}`
      const fetchingNews = await publicService.get(queryUrl)

      if (fetchingNews && !fetchingNews.success) throw new Error(fetchingNews.message)

      const filterSlides = filterNews(orderNewsByDateCreate(fetchingNews.data))

      setNewsData(filterSlides)
    } catch (error) {
      feedbackUser("center", "error", `${requestMessagesSchema.problemExistTryLater}`)
    } finally {
      setLoadingNews(false)
    }
  }

  useEffect(() => {
    fetchNews()
  }, [])

  return { loadingNews, newsData, fetchNews }
}
