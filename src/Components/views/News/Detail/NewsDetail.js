import Comment from "../Comment/Comment";
import { useDetailNews } from "./hook/useDetailNews";
import publicService from "Services/publicApiService";
import { URLs } from "Services/ServicesURLS";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { useEffect } from "react";
import { MainContent, NewsCard, NewsTitle, NewsImage, Container } from "./NewsDetailsStyle/NewsDetailsStyle";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";
import ContainerResponsive from "./components/ContainerResponsive";
import { TextLoader } from "Components/GlobalComponents/Loading/TextLoader/TextLoader";

const NewsDetail = ({ title }) => {
  const { news, setNews, id, handleResize, textDivider, loading, setLoading } = useDetailNews();
  
  useEffect(()=>{
    setLoading(true);
    publicService.get(`${URLs.news}/${id}`)
        .then(res => {
            const { data } = res;
            if(res.success){
                const NW = [{id: data.id,
                             name: data.name,
                             content: 'hola como estas todo bien  y yo que me alegro lola loala asldasl jdaow daiuh sdiawh djkhas udyaw udyasjghgda ukywg dhuasgduyawg dyuags kjhdgawukyd kashgd cristi n awijdasodja añbbornos',
                             image: data.image}];
                setNews(NW);
                setLoading(false);
            }else feedbackUser('center', 'error', requestMessagesSchema.problemExistTryLater);
        })
        .catch(()=> feedbackUser('center', 'error', requestMessagesSchema.problemExistTryLater));
  }, [setNews, id, setLoading]);

  useEffect(()=>{
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);
  
  return (
    <MainContent>
      { loading ? <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem', backgroundColor: '#028192', borderRadius: '5px'}}>
                    <TextLoader />
                    <TextLoader />
                    <TextLoader />
                    <TextLoader />
                    <TextLoader />
                  </div>
                : news?.map(el => {
                  const text = textDivider(el.content);
                  return (
                    <NewsCard key={el.id}>
                      <NewsImage src={el.image} alt={el.name}/>
                      <Container>
                        <NewsTitle>{el.name}</NewsTitle>
                        <ContainerResponsive text={text} />
                      </Container>
                    </NewsCard>
                  )
                  })
      }
      <div className="mt-2 mb-4">
        <h3>Comentarios: </h3>
        <Comment id={id}/>
      </div>
    </MainContent>
  );
};

export default NewsDetail;
