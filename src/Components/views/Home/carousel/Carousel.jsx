import { Carousel } from "react-bootstrap"

export default function Carousel(){
    const slides = [{image: '',title: 'Slide 1', description: '<p>Descripción numero 1.</p>'}, 
                    {image: '',title: 'Slide 2', description: '<p>Descripción numero 2.</p>'}, 
                    {image: '',title: 'Slide 3', description: '<p>Descripción numero 3.</p>'}];

    return(
        <Carousel>
            {
                slides?.map( slide => {
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slide.image}
                            alt={slide.title} />
                        <Carousel.Caption>
                          <h4>{slide.title}</h4>
                          <p dangerouslySetInnerHTML={{__html: slide.description}}/>
                        </Carousel.Caption>
                    </Carousel.Item>
                })
            }
        </Carousel>
    )
}