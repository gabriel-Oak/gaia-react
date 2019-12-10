import { isEmail, isNumber, required } from "./validators";

describe('Validators', () => {

  describe('Email Validator', () => {
    it('shold be an email', () => {
      expect(isEmail('test@jest.com')).toBe(undefined);
    });

    it('sholdn\'t be an email', () => {
      expect(isEmail('test_jest.com')).toBe('Esse campo deve ser do tipo e-mail');
    });
  });

  describe('Number Validator', () => {
    it('shold be a number like', () => {
      expect(isNumber('354')).toBe(undefined);
    });

    it('sholdn\'t be an number like', () => {
      expect(isNumber('3as5')).toBe('Esse campo deve ser do tipo número');
    });
  });

  describe('Required Validator', () => {
    it('shold be a value', () => {
      expect(required('354')).toBe(undefined);
    });

    it('sholdn\'t be a value', () => {
      expect(required(null)).toBe('Esse campo é obrigatorio');
    });
  });

});