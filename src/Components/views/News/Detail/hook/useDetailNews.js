import { useState } from "react";
import { useParams } from "react-router-dom";

export const useDetailNews = () => {
    const { id } = useParams();
    const [ news, setNews ] = useState({
        name: '',
        content: '',
        image: ''
    });

    return{
        news,
        setNews,
        id
    }
}