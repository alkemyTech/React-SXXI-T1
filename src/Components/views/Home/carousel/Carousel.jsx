import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { SlideTitle, SlideDescription, SlideImage } from './CarouselStyled/Carousel.Styled';
import { api } from "Services/axiosService";

export default function CarouselComponent(){
    const [slides, setSlides] = useState([]);
    
    useEffect(() => {
        api('/slides').then(res => {
            const { data } = res.data;
            const slidesData = data.map(el => {
                return { id: el.id,
                         title: el.name,
                         image: el.image,
                         description: el.description };
            });
            setSlides(slidesData);
        })
    }, []);
    
    return(
        <Carousel>
            {
                slides?.slice(0, 5).map( slide => {
                    return <Carousel.Item key={slide.id}>
                                <SlideImage
                                    className="d-block w-100"
                                    src={slide.image}
                                    alt={slide.title} />
                                <Carousel.Caption>
                                  <SlideTitle>{slide.title}</SlideTitle>
                                  <SlideDescription dangerouslySetInnerHTML={{__html: slide.description}}/>
                                </Carousel.Caption>
                           </Carousel.Item>
                })
            }
        </Carousel>
    )
}