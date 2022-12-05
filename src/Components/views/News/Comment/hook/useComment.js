import { useState } from "react"
import publicService from "Services/publicApiService"
import { URLs } from "Services/ServicesURLS"
import { feedbackUser } from "utilities/alerts/feedbackUser.util"

export const useComment = () => {
  const [comments, setComments] = useState([])
  const [minSize, setMinSize] = useState(false)
  const [maxSize, setMaxSize] = useState(false)
  const [medSize, setMedSize] = useState(false)
  const [loading, setLoading] = useState(false)
  const [pages, setPages] = useState(10)
  const [req, setReq] = useState(true)

  const textDivider = (text) => {
    let text1
    let text2
    const points = "..."
    if (text) {
      if (text.length > 55 && minSize) {
        text1 = text.slice(0, 42)
        text2 = text.slice(37)
        return { text1, text2, points }
      }
      if (text.length > 150 && medSize) {
        text1 = text.slice(0, 145)
        text2 = text.slice(145)
        return { text1, text2, points }
      }
      if (text.length > 250 && maxSize) {
        text1 = text.slice(0, 245)
        text2 = text.slice(245)
        return { text1, text2, points }
      }
    }
    return text
  }

  const handleResize = () => {
    if (window.innerWidth < 490) setMinSize(true)
    else setMinSize(false)
    if (window.innerWidth >= 490 && window.innerWidth < 750) setMedSize(true)
    else setMedSize(false)
    if (window.innerWidth >= 750) setMaxSize(true)
    else setMaxSize(false)
  }

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      setLoading(true)
      setPages((prev) => prev + 10)
    }
  }

  const getComments = () => {
    setLoading(true)
    if (req) {
      publicService
        .get(`${URLs.comment}?limit=${pages}`)
        .then((res) => {
          if (res.success) {
            if (res.data.length === comments.length) {
              setReq(false)
              setLoading(false)
            } else {
              const info = res.data.map((el) => {
                return {
                  id: el.id,
                  newId: el.new_id,
                  image: el.image,
                  text: el.text,
                  visible: el.visible,
                }
              })
              setComments(info)
              setLoading(false)
            }
          } else feedbackUser("center", "error", "Ha ocurrido un error")
        })
        .catch(() => feedbackUser("center", "error", "Ha ocurrido un error"))
    } else setLoading(false)
  }

  return {
    comments,
    setComments,
    textDivider,
    handleResize,
    loading,
    setLoading,
    handleScroll,
    pages,
    setReq,
    req,
    getComments,
  }
}