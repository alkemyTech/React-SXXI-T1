import { Button } from "../../Comment/Card/CardStyle";
import { useDetailNews } from "../hook/useDetailNews"
import { Paragraph } from "../NewsDetailsStyle/NewsDetailsStyle";

export default function ContainerResponsive({text}){
    const { show, setShow } = useDetailNews();
    
    return(
        <>
          { text?.text1 ? <>
                            { show ? <>
                                      <Paragraph dangerouslySetInnerHTML={{__html: text.text1 + text.text2}}/>
                                      <Button onClick={()=>setShow(!show)}>menos</Button>
                                     </>
                                   : <>
                                      <Paragraph dangerouslySetInnerHTML={{__html: text.text1 + text.points}}/>
                                      <Button onClick={()=>setShow(!show)}>más</Button>
                                     </>
                            }
                          </>
                        : <Paragraph dangerouslySetInnerHTML={{__html: text}}/>
          }
        </>
    )
}