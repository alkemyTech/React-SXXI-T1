import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { feedbackUser } from "utilities/alerts/feedbackUser.util"
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util"
import { postDetail } from "../interceptor/postDetail.interceptor"

export const useDetail = () => {
  const { id: idDetail } = useParams()

  const [dataDetail, setDataDetail] = useState(null)
  const [loadingDetail, setLoadingDetail] = useState(true)

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const detailsData = await postDetail(idDetail)

        setDataDetail(detailsData)
      } catch (error) {
        feedbackUser("center", "error", `${requestMessagesSchema.problemExistTryLater}`)
      } finally {
        setLoadingDetail(false)
      }
    }

    fetchDetail()
  }, [idDetail])

  return { dataDetail, loadingDetail }
}
