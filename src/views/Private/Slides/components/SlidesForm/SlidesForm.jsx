import { InputImage } from "Components/FormInputsField/InputImage";
import { SkeletonLoader } from "Components/Loading/SkeletonLoader/SkeletonLoader";
import { SpinnerLoad } from "Components/Loading/SpinnerLoad/SpinnerLoad";
import { Form } from "react-bootstrap";
import { useSlidesForm } from "../../hooks/useSlidesForm";
import { formFieldsSchema } from "../../utilities/slidesSchema.util";
import { ButtonSlideForm } from "../ButtonSlideForm/ButtonSlideForm";
import { ModalSlide } from "../ModalSlide/ModalSlide";
import { FirstColForm } from "../SlidesFormFields/FirstColForm";
import { InputDescription } from "../SlidesFormFields/InputDescription";

export const SlidesForm = ({ idSlide }) => {
  const {
    formik: { handleSubmit },
    formik,
    orderFieldDisabled,
    loadSubmitSlides,
    handleImageToSend,
    loadOrderSlides,
    orderSlide,
    dataSliceToEdit,
    showSlideModal,
    handleSlideModal,
    setSlideToChangeSelected,
    slideToChangeSelected,
  } = useSlidesForm(idSlide);

  return (
    <>
      {loadSubmitSlides && (
        <div>
          <SpinnerLoad />
        </div>
      )}

      <Form className="form-container col col-12 col-sm-10 mt-3 mb-4 p-0 p-sm-1" onSubmit={handleSubmit}>
        <Form.Group className="col col-12 d-flex flex-wrap justify-content-between mt-2 mb-3">
          <FirstColForm
            formik={formik}
            schemas={formFieldsSchema}
            load={loadOrderSlides}
            disabled={orderFieldDisabled}
            onClick={handleSlideModal}
            idSlide={idSlide}
            orderSlide={orderSlide}
            slideToChangeSelected={slideToChangeSelected}
          />
        </Form.Group>

        <Form.Group className="col col-12 mb-3">
          <InputDescription formik={formik} schemas={formFieldsSchema.ckEditor} load={loadOrderSlides} />
        </Form.Group>

        <Form.Group className="col col-12 d-flex flex-column align-items-center mb-3">
          <InputImage
            formik={formik}
            schemas={formFieldsSchema.image}
            setImageToSend={handleImageToSend}
            imageIsEdit={dataSliceToEdit}
            loading={loadOrderSlides}
          />
        </Form.Group>
        {loadOrderSlides ? (
          <SkeletonLoader
            placeClass="placeClass col col-12 d-flex justify-content-center w-100 h-100 mb-3"
            spanClass="spanClass h-100 w-50"
            height="28px"
          />
        ) : (
          <ButtonSlideForm idSlide={idSlide} />
        )}
      </Form>
      <ModalSlide
        show={showSlideModal}
        onHide={handleSlideModal}
        idSlide={idSlide}
        orderSlide={orderSlide}
        setSlideToChangeSelected={setSlideToChangeSelected}
        slideToChangeSelected={slideToChangeSelected}
      />
    </>
  );
};
