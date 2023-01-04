import swal from 'sweetalert';

export function cl(link) {
  return process.env.REACT_APP_API_ROOT + link;
}

const config = {
  headers: {
    authorization: `Bearer ` + localStorage.getItem('token-' + process.env.REACT_APP_NAME),
  },
};

export function showError() {
  return swal({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href="">Why do I have this issue?</a>',
  });
}

export { config };
