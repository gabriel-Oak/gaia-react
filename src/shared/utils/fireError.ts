import Swal from 'sweetalert2';

const fireError = (e: any) => {
  const { response } = e;

  if (response && response.status === 500) {
    e.message = 'Tivemos algum problema interno, tente de novo mais tarde';
  } else if (response) {
    e.message = response.data.message
  }

  Swal.fire(
    'Ocorreu um erro',
    e.message,
    'error'
  )
}

export default fireError;