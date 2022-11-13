export const homeInitialState = {
  loadingSubmit: false,
  firstImageToSend: "",
  secondImageToSend: "",
  thirdImageToSend: "",
  firstImageToEdit: "",
  secondImageToEdit: "",
  thirdImageToEdit: "",
};

export const TYPES = {
  LOADING: "LOADING",
  IMAGE_TO_SEND: "IMAGE_TO_SEND",
  IMAGE_TO_EDIT: "IMAGE_TO_EDIT",
  RESET_NOTIFICATION: "RESET_NOTIFICATION",
  RESETSTATE: "RESETSTATE",
};

let whatIs;
export function homeReducer(state, action) {
  switch (action.type) {
    case TYPES.LOADING:
      return { ...state, loadingSubmit: true };

    case TYPES.RESET_LOADING:
      return { ...state, loadingSubmit: false };

    case TYPES.IMAGE_TO_SEND:
      whatIs = action.payload.whatIs;
      return { ...state, [whatIs]: action.payload.value };

    case TYPES.IMAGE_TO_EDIT:
      whatIs = action.payload.whatIs;
      return { ...state, [whatIs]: { image: action.payload.image } };

    case TYPES.RESETSTATE:
      return { ...homeInitialState };

    default:
      return state;
  }
}
