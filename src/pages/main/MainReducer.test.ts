import mainReducer from './mainReducer';
import { MainActionsTypes } from './mainActionsTypes';

describe('Main Reducer', () => {
  it('Shold fire snackbar', () => {
    const result = mainReducer(undefined, {
      type: MainActionsTypes.FIRE_SNACK,
      value: { open: true }
    });

    expect(result.snackbar.open).toBe(true);
  });

  it('Shold close snackbar', () => {
    const result = mainReducer(undefined, { type: MainActionsTypes.CLOSE_SNACK });

    expect(result.snackbar.open).toBe(false);
  });

  it('Shold toggle the drawer', () => {
    const result = mainReducer(undefined, { type: MainActionsTypes.TOGGLE_DRAWER });

    expect(result.drawer).toBe(true);
  });

  it('Shold perform a redirect', () => {
    const result = mainReducer(undefined, {
      type: MainActionsTypes.REDIRECT,
      value: '/jest-is-fun'
    });

    expect(result.redirect).toBe('/jest-is-fun');
  });

  it('Shold fetch the user', () => {
    const user = {
      name: 'Gabriel',
      admin: true
    };

    const result = mainReducer(undefined, {
      type: MainActionsTypes.FETCH_USER,
      value: user
    });

    expect(result.user).toEqual(user);
  });
});