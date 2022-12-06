import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { SlideTitle, SlideDescription, SlideImage } from "./CarouselStyled/Carousel.Styled";
import { feedbackUser as AlertError } from "utilities/alerts/feedbackUser.util";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";
import publicService from "Services/publicApiService";
import { useSkeleton } from "hooks/useSkeleton";

export default function CarouselComponent({ endPoint, content, hdef, hxl, hlg, hmd, hsm, hxs, start = 0, end = 5 }) {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(false);
  const { textSkeleton } = useSkeleton();

  useEffect(() => {
    setLoading(true);
    publicService
      .get(endPoint)
      .then((res) => {
        const { data } = res;
        const slidesData = data.map((el) => {
          return { id: el.id, title: el.name, image: el.image, description: content === "description" ? el.description : el.content };
        });
        setSlides(slidesData);
        setLoading(false);
      })
      .catch(() => {
        AlertError("center", "error", requestMessagesSchema.problemExistTryLater);
      });
  }, [endPoint, content]);

  return (
    <>
      {loading ? (
        <>{textSkeleton} </>
      ) : (
        <Carousel variant="dark" className="shadow rounded">
          {slides?.slice(start, end).map((slide) => {
            let sliceDes = slide.description;
            if (slide.description.length > 75) {
              sliceDes = sliceDes.slice(0, 48).concat("...");
            }
            return (
              <Carousel.Item key={slide.id}>
                <SlideImage
                  hdef={hdef}
                  hxl={hxl}
                  hlg={hlg}
                  hmd={hmd}
                  hsm={hsm}
                  hxs={hxs}
                  className="d-block w-100 rounded"
                  src={slide.image}
                  alt={slide.title}
                />
                <Carousel.Caption>
                  <SlideTitle>{slide.title}</SlideTitle>
                  <SlideDescription dangerouslySetInnerHTML={{ __html: sliceDes }} />
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      )}
    </>
  );
}
