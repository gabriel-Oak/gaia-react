const resolveError = (e: any) => {
  const { response } = e;

  if (response && response.status === 500) {
    e.message = 'Tivemos algum problema interno, tente de novo mais tarde';
  } else if (response && response.status === 503) {
    e.message = 'Estamos fora do ar, tente de novo mais tarde';
  } else if (response) {
    e.message = response.data.message
  }

  return e;
}

export default resolveError;