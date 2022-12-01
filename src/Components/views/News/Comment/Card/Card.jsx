import { CommentCard, CommentImg, CommentText, Button } from "./CardStyle";
import avatarUser from "assets/avatar.svg";
import { useState } from "react";

export default function Card({image, text}) {
    const [ show, setShow ] = useState(false);
    return(
        <CommentCard>
            <div>
            <CommentImg src={image !=='string' ? image : avatarUser} alt={'imagen'}/>
            </div>
            {
                text?.text1 ?
                <>
                {
                    show ?  <CommentText>
                                {text.text1}{text.text2}
                                <Button onClick={()=>setShow(!show)}>menos</Button>
                            </CommentText>
                         :  <CommentText>
                                {text.text1}{text.points}
                                <Button onClick={()=>setShow(!show)}>más</Button>
                            </CommentText>
                }
                </>
                           :
                <CommentText>{text}</CommentText>
            }
        </CommentCard>
    )
}