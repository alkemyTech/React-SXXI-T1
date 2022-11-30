import { useEffect } from "react"
import publicService from "Services/publicApiService";
import { URLs } from "Services/ServicesURLS";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { useComment } from "./hook/useComment";
import { MainContainer } from "./CommentStyle/CommentStyle";
import Card from "./Card/Card";
import { SpinnerLoad } from "Components/GlobalComponents/Loading/SpinnerLoad/SpinnerLoad";

export default function Comment({id}){
    const {comments, setComments, textDivider, handleResize} = useComment(id);
    
    useEffect(()=>{
        publicService.get(URLs.comment)
            .then(res => {
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
            })
            .catch(()=>feedbackUser('center', 'error', 'Ha ocurrido un error'));
    }, [setComments]);

    useEffect(()=>{
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);

    return(
        <MainContainer>
        { comments.length>0 ?
            comments.map(el => {
                const text = textDivider(el.text);
                return <Card
                    key={el.id}
                    image={el.image}
                    text={text}
                />})
                :
            <SpinnerLoad/> }
        </MainContainer>
    )
}