import { InputImage } from "Components/GlobalComponents/FormInputsField/InputImage"
import { SpinnerLoad } from "Components/GlobalComponents/Loading/SpinnerLoad/SpinnerLoad"
import { Form } from "react-bootstrap"
import { useSlidesForm } from "../../hooks/useSlidesForm"
import { formFieldsSchema } from "../../utilities/slidesSchema.util"
import { ButtonSlideForm } from "../ButtonSlideForm/ButtonSlideForm"
import { ModalSlide } from "../ModalSlide/ModalSlide"
import { FirstColForm } from "../SlidesFormFields/FirstColForm"
import { InputDescription } from "../SlidesFormFields/InputDescription"

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
  } = useSlidesForm(idSlide)

  return (
    <>
      <Form className="form-container col col-12 col-sm-10 my-3 p-0 p-sm-1" onSubmit={handleSubmit}>
        <Form.Group className="col col-12 d-flex flex-wrap justify-content-between">
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

        <Form.Group className="col col-12">
          <InputDescription formik={formik} schemas={formFieldsSchema.ckEditor} />
        </Form.Group>

        {loadSubmitSlides && (
          <div>
            <SpinnerLoad />
          </div>
        )}

        <Form.Group className="col col-12 d-flex flex-column align-items-center">
          <InputImage
            formik={formik}
            schemas={formFieldsSchema.image}
            setImageToSend={handleImageToSend}
            imageIsEdit={dataSliceToEdit}
            loading={loadOrderSlides}
          />
        </Form.Group>

        <ButtonSlideForm idSlide={idSlide} />
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
  )
}
