import homeReducer from "./homeReducer";
import { HomeActionsTypes } from "./homeActionsTypes";

describe('Home Reducer', () => {
  it('should send request', () => {
    const result = homeReducer(undefined, { type: HomeActionsTypes.SENDING });

    expect(result.loading).toBe(true);
  });

  it('should complete request', () => {
    const result = homeReducer(undefined, { type: HomeActionsTypes.COMPLETE });

    expect(result.loading).toBe(false);
  });

  it('should fetch menus', () => {
    const result = homeReducer(undefined, {
      type: HomeActionsTypes.FECTCH_MENUS,
      value: 'menuzinho'
    });

    expect(result.menus).toBe('menuzinho');
  });

  it('should set tab index to 3', () => {
    const result = homeReducer(undefined, {
      type: HomeActionsTypes.SET_TAB,
      value: 3
    });

    expect(result.tabIndex).toBe(3);
  });

  it('should init form state', () => {
    const result = homeReducer(undefined, {
      type: HomeActionsTypes.INIT_FORM,
      value: { form: 'false' }
    });

    expect(result.initialFormValues.form).toBe('false');
  });
});