import { CustomButton } from "Components/CustomButton/CustomButton";
import { Modal } from "react-bootstrap";
import { CustomImage, InputTexts, SubtitleText } from "styled-components/App.styled";
import { useModalSlide } from "../../hooks/useModalSlide";
import { RadioSlide } from "../../styled-components/ModalSlide.styled";
import { modalSchema } from "../../utilities/slidesSchema.util";
import { WrapSlide } from "./styled-components/ModalSlide.styled";

export const ModalSlide = ({ show, onHide, idSlide, orderSlide, setSlideToChangeSelected, slideToChangeSelected }) => {
  const { indexSlide, handleChangeRadio, handleClickChangeSlides, handleCancelChangesSlides } = useModalSlide(
    orderSlide,
    idSlide,
    setSlideToChangeSelected,
    slideToChangeSelected,
    onHide
  );

  return (
    <Modal show={show} onHide={handleCancelChangesSlides} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title>{modalSchema.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SubtitleText>{modalSchema.subTitle(indexSlide)}</SubtitleText>
        <InputTexts>{modalSchema.selectSlideText}</InputTexts>

        <InputTexts>{modalSchema.slidesText}:</InputTexts>
        <div className="d-flex flex-wrap justify-content-evenly">
          {orderSlide?.map(
            (slide, index) =>
              indexSlide !== index + 1 && (
                <WrapSlide key={index} className="col col-12 col-sm-4 col-md-3 col-xl-2  my-2">
                  <CustomImage name="slides" value={slide.id} image={slide.image} backgroundSize="cover" height="150px" width="90%" />
                  <div className="d-flex justify-content-center">
                    <RadioSlide type="radio" id="slides" name="slides" value={slide.id} onChange={handleChangeRadio} />
                    <label className="form-check-label" htmlFor="slides">
                      Slide: {index + 1}
                    </label>
                  </div>
                </WrapSlide>
              )
          )}
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <div className="col col-6">
          {slideToChangeSelected > 0 && (
            <div className="d-flex">
              <p className="text-center">{modalSchema.paragraphDetails(indexSlide, orderSlide, slideToChangeSelected)}</p>
            </div>
          )}
        </div>
        <div className="col col-5 d-flex justify-content-evenly">
          <CustomButton
            buttonClass="col col-5"
            text="Confirmar"
            color="success"
            background="success"
            onClick={handleClickChangeSlides}
            disabled={!slideToChangeSelected}
          />
          <CustomButton buttonClass="col col-5" text="Cancelar" onClick={handleCancelChangesSlides} />
        </div>
      </Modal.Footer>
    </Modal>
  );
};
