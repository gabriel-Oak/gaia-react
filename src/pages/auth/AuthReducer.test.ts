import authReducer from "./authReducer";
import { AuthActionsTypes } from "./authActionsTypes";

describe('Auth Reducer', () => {

  it('Shold send', () => {
    const result = authReducer(undefined, { type: AuthActionsTypes.SENDED });
    
    expect(result.loading).toBe(true);
  });

  it('Shold end', () => {
    const result = authReducer(undefined, { type: AuthActionsTypes.ENDED });

    expect(result.loading).toBe(false);
  });

  it('Shold success', () => {
    const result = authReducer(undefined, { type: AuthActionsTypes.SUCCESS });

    expect(result.auth).toBe(true);
  });

  it('Shold fire snack', () => {
    const result = authReducer(undefined, {
      type: AuthActionsTypes.FIRE_SNACK,
      value: { open: true }
    });

    expect(result.snackbar.open).toBe(true);
  });

  it('Shold close snack', () => {
    const result = authReducer(undefined, { type: AuthActionsTypes.CLOSE_SNACK });

    expect(result.snackbar.open).toBe(false);
  });
});