export function cl(link) {
  return process.env.REACT_APP_API_ROOT + link;
}

const config = {
  headers: {
    authorization: `Bearer ` + localStorage.getItem('token-' + process.env.REACT_APP_NAME),
  },
};

export { config };
