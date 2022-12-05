import Swal from "sweetalert2";

export const feedbackUser = (position, icon, title) =>
  Swal.fire({
    position: position,
    icon: icon,
    title: title,
    showConfirmButton: false,
    timer: 2500,
  });
