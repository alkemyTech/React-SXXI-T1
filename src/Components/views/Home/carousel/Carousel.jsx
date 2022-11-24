import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { SlideTitle, SlideDescription, SlideImage } from './CarouselStyled/Carousel.Styled';
import { api } from "Services/axiosService";
import Swal from "sweetalert2";

export default function CarouselComponent({endPoint, content, hxl, hlg, hmd, hsm, hxs}){
    const [slides, setSlides] = useState([]);
    
    useEffect(() => {
        api(`/${endPoint}`).then(res => {
            const { data } = res.data;
            const slidesData = data.map(el => {
                return { id: el.id,
                         title: el.name,
                         image: el.image,
                         description: content === 'description' ? el.description : el.content};
            });
            setSlides(slidesData);
        })
        .catch(()=>{
            Swal.fire({
                title: 'Hubo un error',
                icon: 'error',
                confirmButtonColor: '#0038FF',
                confirmButtonText: 'Aceptar',
            })
        });
    }, [endPoint, content]);

    return(
        <Carousel variant="dark" className="shadow rounded">
            {
                slides?.slice(0, 5).map( slide => {
                    let sliceDes = slide.description;
                    if(slide.description.length > 75){
                        sliceDes = sliceDes.slice(0,48).concat('...');
                    }
                    return <Carousel.Item key={slide.id}>
                                <SlideImage
                                    hxl={hxl} hlg={hlg} hmd={hmd} hsm={hsm} hxs={hxs}
                                    className="d-block w-100 rounded"
                                    src={slide.image}
                                    alt={slide.title} />
                                <Carousel.Caption>
                                  <SlideTitle>{slide.title}</SlideTitle>
                                  <SlideDescription dangerouslySetInnerHTML={{__html: sliceDes}}/>
                                </Carousel.Caption>
                           </Carousel.Item>
                })
            }
        </Carousel>
    )
}