import Swal from "sweetalert2";

const userConfirm = (text) => {
  return Swal.fire({
    title: text || "Confirmar acción",
    showCancelButton: true,
    cancelButtonColor: "#FF0000",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Confirmar",
    confirmButtonColor: "#0038FF",
    icon: "question",
  }).then((result) => {
    if (result.isConfirmed) return true;
  });
};

export const handleUserConfirm = async (text) => await userConfirm(text);
