import { useEffect } from "react"
import publicService from "Services/publicApiService";
import { URLs } from "Services/ServicesURLS";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { useComment } from "./hook/useComment";
import { MainContainer } from "./CommentStyle/CommentStyle";
import Card from "./Card/Card";
import { SkeletonLoader } from "Components/GlobalComponents/Loading/SkeletonLoader/SkeletonLoader";

export default function Comment({id}){
    const {comments, pages, setComments, textDivider, handleResize, loading, setLoading, handleScroll} = useComment(id);
    
    useEffect(()=>{
        setLoading(true);
        publicService.get(`${URLs.comment}?limit=${pages}`)
            .then(res => {
                if(res.success){
                    const info = res.data.map(el=>{
                        return{
                            id: el.id,
                            newId: el.new_id,
                            image: el.image,
                            text: el.text,
                            visible: el.visible,
                        }
                    });
                    setComments(info);
                    setLoading(false);
                }else feedbackUser('center', 'error', 'Ha ocurrido un error');
            })
            .catch(()=>feedbackUser('center', 'error', 'Ha ocurrido un error'));
    }, [setComments, pages, setLoading]);

    useEffect(()=>{
        handleResize();
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        }
    }, [handleResize, handleScroll]);

    return(
        <MainContainer>
        {
            comments.map(el => {
                const text = textDivider(el.text);
                return <Card
                    key={el.id}
                    image={el.image}
                    text={text}
                />})
        }
        { loading &&  <div style={{backgroundColor: '#028192', display: 'flex', flexDirection: 'column', padding: '0.5rem', gap: '0.5rem', borderRadius: '5px'}}>
                                        <SkeletonLoader xs={12}/>
                                        <SkeletonLoader xs={12}/>
                                    </div>}
        </MainContainer>
    )
}