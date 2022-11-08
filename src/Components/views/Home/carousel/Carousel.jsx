import axios from "axios";
import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { SlideTitle, SlideDescription } from './CarouselStyled/Carousel.Styled';

export default function CarouselComponent(){
    const [slides, setSlides] = useState([]);
    
    useEffect(() => {
        axios('https://ongapi.alkemy.org/api/slides')
        .then(res => {
            const { data } = res.data;
            data.forEach(el => {
                const obj={ id: el.id,
                            title: el.name,
                            image: el.image,
                            description: el.description };
                setSlides(slides => [...slides, obj]);
            });
        });
    }, []);
    
    return(
        <Carousel>
            {
                slides?.slice(0, 4).map( slide => {
                    return <Carousel.Item key={slide.id}>
                                <img
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