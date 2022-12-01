import { useState } from "react";
import { useParams } from "react-router-dom";

export const useDetailNews = () => {
    const { id } = useParams();
    const [ show, setShow ] = useState(false);
    const [ news, setNews ] = useState([]);
    const [ smSize, setSmSize ] = useState(false);
    const [ mdSize, setMdSize ] = useState(false);
    const [ lgSize, setLgSize ] = useState(false);
    const [ xlSize, setXlSize ] = useState(false);
    const [ loading, setLoading ] = useState(false);

    const textDivider = (text) => {
        let text1;
        let text2;
        const points = '...';
        if(text.length > 130 && smSize){
            text1 = text.slice(0, 127);
            text2 = text.slice(127);
            return {text1, text2, points}
        }
        if(text.length > 184 && mdSize){
            text1 = text.slice(0, 181);
            text2 = text.slice(181);
            return {text1, text2, points}
        }
        if(text.length > 500 && lgSize){
            text1 = text.slice(0, 497);
            text2 = text.slice(497);
            return {text1, text2, points}
        }
        if(text.length > 1055 && xlSize){
            text1 = text.slice(0, 1047);
            text2 = text.slice(1047);
            return {text1, text2, points}
        }
        return text;
    }

    const handleResize = () => {
        if(window.innerWidth < 620) setSmSize(true);
        else setSmSize(false);
        if(window.innerWidth >= 620 && window.innerWidth < 830) setMdSize(true);
        else setMdSize(false);
        if(window.innerWidth >= 830 && window.innerWidth < 1100) setLgSize(true);
        else setLgSize(false);
        if(window.innerWidth >= 1100) setXlSize(true);
        else setXlSize(false);
    }

    return{
        news,
        setNews,
        id,
        handleResize,
        textDivider,
        show, setShow,
        loading,
        setLoading
    }
}