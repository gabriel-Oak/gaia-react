const resolveError = (e: any) => {
  const { response } = e;

  e.message = 'Ocorreu algum erro interno';
  if (response && response.status === 503) {
    e.message = 'Estamos fora do ar, tente de novo mais tarde';
  } else if (response && response.data) {
    e.message = response.data.message || response.data.error || 'Ocorreu algum erro interno';
  }

  return e;
}

export default resolveError;