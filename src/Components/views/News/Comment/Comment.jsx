import { useEffect } from "react"
import { useComment } from "./hook/useComment"
import { MainContainer, SkeletonContainer } from "./CommentStyle/CommentStyle"
import Card from "./Card/Card"
import { SkeletonLoader } from "Components/GlobalComponents/Loading/SkeletonLoader/SkeletonLoader"
import { CustomAlertMessage } from "Components/GlobalComponents/CustomAlertMessage/CustomAlertMessage"

export default function Comment({ id }) {
  const { getComments, comments, textDivider, handleResize, loading, handleScroll } = useComment(id)

  useEffect(() => {
    getComments()
  }, [getComments])

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleResize, handleScroll])

  return (
    <MainContainer>
      {comments ? (
        comments.map((el) => {
          const text = textDivider(el.text)
          return <Card key={el.id} image={el.image} text={text} />
        })
      ) : (
        <div className="col col-12 d-flex justify-content-center">
          <CustomAlertMessage alertClass="col col-10" text="No hay comentarios" />
        </div>
      )}
      {loading && (
        <SkeletonContainer>
          <SkeletonLoader xs={12} />
          <SkeletonLoader xs={12} />
        </SkeletonContainer>
      )}
    </MainContainer>
  )
}
