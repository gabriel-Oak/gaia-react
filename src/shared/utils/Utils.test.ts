import resolveError from "./resolveError";

describe('Utils', () => {

  describe('Resolve Error', () => {
    it('network error', () => {
      const error = {
        response: {
          status: 503
        }
      };

      expect(resolveError(error).message)
        .toBe('Estamos fora do ar, tente de novo mais tarde');
    });

    it('treated error', () => {
      const error = {
        response: {
          status: 400,
          data: { message: 'Faltou o email' }
        }
      };

      expect(resolveError(error).message)
        .toBe('Faltou o email');
    });

    it('unknow error', () => {
      const error = new Error();

      expect(resolveError(error).message)
        .toBe('Ocorreu algum erro interno');
    });
  });
  
});