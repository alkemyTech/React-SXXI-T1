import Comment from "../Comment/Comment";
import { useDetailNews } from "./hook/useDetailNews";
import publicService from "Services/publicApiService";
import { URLs } from "Services/ServicesURLS";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { useEffect } from "react";
import { MainContent, NewsCard, NewsTitle, NewsImage, Container,
  Paragraph, } from "./NewsDetailsStyle/NewsDetailsStyle";

const NewsDetail = ({ title }) => {
  const {news, setNews, id} = useDetailNews();

  useEffect(()=>{
    publicService.get(`${URLs.news}/${id}`)
        .then(res => {
            const { data } = res;
            if(res.success){
                setNews({
                    name: data.name,
                    content: data.content,
                    image: data.image
                })
            }else feedbackUser('center', 'error', 'Ha ocurrido un error');
        })
        .catch(()=> feedbackUser('center', 'error', 'Ha ocurrido un error'));
}, [setNews, id]);

  return (
    <MainContent className="h-100">
      <NewsCard>
        <NewsImage src={news?.image} alt={news?.name}/>
        <Container>
          <NewsTitle>{news?.name}</NewsTitle>
          <Paragraph dangerouslySetInnerHTML={{__html: news?.content}}/>
        </Container>
      </NewsCard>
      <div className="mt-2 mb-4">
        <Comment id={id}/>
      </div>
    </MainContent>
  );
};

export default NewsDetail;
