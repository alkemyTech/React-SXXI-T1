import Comment from "../Comment/Comment";
import { useDetailNews } from "./hook/useDetailNews";
import publicService from "Services/publicApiService";
import { URLs } from "Services/ServicesURLS";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { useEffect } from "react";
import { MainContent, NewsCard, NewsTitle, NewsImage, Container, CotainerSkeleton } from "./NewsDetailsStyle/NewsDetailsStyle";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";
import ContainerResponsive from "./components/ContainerResponsive";
import { SkeletonLoader } from "Components/Loading/SkeletonLoader/SkeletonLoader";

const NewsDetail = () => {
  const { news, setNews, id, handleResize, textDivider, loading, setLoading } = useDetailNews();

  useEffect(() => {
    setLoading(true);
    publicService
      .get(`${URLs.news}/${id}`)
      .then((res) => {
        const { data } = res;
        if (res.success) {
          const NW = [{ id: data.id, name: data.name, content: data.content, image: data.image }];
          setNews(NW);
          setLoading(false);
        } else feedbackUser("center", "error", requestMessagesSchema.problemExistTryLater);
      })
      .catch(() => feedbackUser("center", "error", requestMessagesSchema.problemExistTryLater));
  }, [setNews, id, setLoading]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <MainContent>
      {loading ? (
        <CotainerSkeleton>
          <SkeletonLoader xs={12} />
          <SkeletonLoader xs={12} />
          <SkeletonLoader xs={12} />
          <SkeletonLoader xs={12} />
          <SkeletonLoader xs={12} />
        </CotainerSkeleton>
      ) : (
        news?.map((el) => {
          const text = textDivider(el.content);
          return (
            <NewsCard key={el.id}>
              <NewsImage src={el.image} alt={el.name} />
              <Container>
                <NewsTitle>{el.name}</NewsTitle>
                <ContainerResponsive text={text} />
              </Container>
            </NewsCard>
          );
        })
      )}
      <div className="my-5">
        <h3>Comentarios: </h3>
        <Comment id={id} />
      </div>
    </MainContent>
  );
};

export default NewsDetail;
