import Swal from 'sweetalert2';

const Alert = ({icon, title, cancelText})=>{
  return Swal.fire({
      title: title,
      icon: icon,
      iconColor: '#0038FF',
      showCancelButton: cancelText ? true : false,
      confirmButtonColor: '#0038FF',
      cancelButtonColor: cancelText ? '#FF0000' : false,
      confirmButtonText: 'Aceptar',
      cancelButtonText: cancelText ? 'Cancelar' : false
  });
}

  export default Alert;