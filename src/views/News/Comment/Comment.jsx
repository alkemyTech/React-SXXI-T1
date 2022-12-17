import { useEffect } from "react";
import { useComment } from "./hook/useComment";
import { MainContainer, SkeletonContainer } from "./CommentStyle/CommentStyle";
import Card from "./Card/Card";
import { SkeletonLoader } from "Components/Loading/SkeletonLoader/SkeletonLoader";
import { CustomAlertMessage } from "Components/CustomAlertMessage/CustomAlertMessage";

export default function Comment({ id }) {
  const { getComments, comments, textDivider, handleResize, loading, handleScroll, cant } = useComment(id);

  useEffect(() => {
    getComments();
    // eslint-disable-next-line
  }, [cant]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleResize, handleScroll]);

  return (
    <MainContainer>
      {comments?.map((el) => {
        const text = textDivider(el.text);
        return <Card key={el.id} image={el.image} text={text} />;
      })}
      {!loading && comments.length < 1 && (
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
  );
}
