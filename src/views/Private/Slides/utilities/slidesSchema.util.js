const { getIndexSlide } = require("./getIndexSlide.util");

const modalSchema = {
  title: "Editar Orden de Slides",
  subTitle: (indexSlide) => `Slide ${indexSlide} seleccionado.`,
  selectSlideText: " Selecciona el slide con el que quieras cambiar el orden.",
  slidesText: "Slides",
  paragraphDetails: (indexSlide, orderSlide, slideToChangeSelected) => ` El slide "${indexSlide}" pasará a estar en la posición: "
    ${getIndexSlide(orderSlide, slideToChangeSelected) + 1}"`,
};

const formFieldsSchema = {
  name: {
    type: "text",
    name: "name",
    placeholder: "Titulo de Slide",
  },
  order: {
    type: "number",
    name: "order",
    placeholder: "Número de Orden",
  },
  ckEditor: {
    name: "description",
  },
  image: {
    name: "image",
  },
};

const privateSlidesSchema = {
  buttons: {
    confirm: {
      text: "Confirmar",
      paint: "success",
    },
    edit: {
      text: "Editar",
      paint: "yellow",
    },
  },
  title: {
    confirm: "Crear Slide",
    edit: "Editar Slide",
  },
  noSlides: "Sin slides para mostrar",
  confirmDeleteSlides: "Estás por eliminar: ",
  deleteSuccessfully: "Eliminación exitosa",
};

const tableHead = ["#", "Título", "Imagen", "Orden", "Acciones"];
const myTableData = { name: "name", image: "image", order: "order" };

export { modalSchema, formFieldsSchema, privateSlidesSchema, tableHead, myTableData };
