import Swal from 'sweetalert2';

const Alert = ({icon, title, cancelText})=>{
  return Swal.fire({
      title: title,
      icon: icon,
      iconColor: '#0038FF',
      showCancelButton: cancelText ? true : false,
      cancelButtonColor: cancelText ? '#FF0000' : false,
      cancelButtonText: cancelText ? 'Cancelar' : false,
      confirmButtonColor: '#0038FF',
      confirmButtonText: 'Aceptar'
  });
}

export default Alert;