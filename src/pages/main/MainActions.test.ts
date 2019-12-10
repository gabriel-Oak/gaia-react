import moxios from "moxios";
import { fireSnack, closeSnack, toggleDrawer, redirect_to, setTitle, fetchUser } from "./mainActions";
import { MainActionsTypes } from "./mainActionsTypes";
import { History, createMemoryHistory } from "history";

describe('Main Actions', () => {

  beforeEach(() => {
    moxios.install()
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should fire snackbar', () => {
    expect(fireSnack('error', 'deu erro', 8000)).toEqual({
      type: MainActionsTypes.FIRE_SNACK,
      value: {
        open: true,
        type: 'error',
        message: 'deu erro',
        duration: 8000
      }
    });
  });

  it('should close snackbar', () => {
    expect(closeSnack().type).toBe(MainActionsTypes.CLOSE_SNACK);
  });

  it('should toggle drawer', () => {
    expect(toggleDrawer().type).toBe(MainActionsTypes.TOGGLE_DRAWER);
  });

  it('should perform a redirect', () => {
    expect(redirect_to('/testing-jest')).toEqual({
      type: MainActionsTypes.REDIRECT,
      value: '/testing-jest'
    });
  });

  it('should set application title', () => {
    const dispatch = jest.fn();
    setTitle('Test with jest')(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: MainActionsTypes.SETTITLE,
      value: 'Test with jest'
    });
  });

  it('should fetch the user', async () => {
    const dispatch = jest.fn();
    const user = {
      name: 'Gabriel'
    };
    const history: History = createMemoryHistory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { user }
      });
    });

    await fetchUser('hsdihfisdhfi', history)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: MainActionsTypes.FETCH_USER,
      value: user
    });
  });

  it('should not fetch the user', async () => {
    const dispatch = jest.fn();
    const history: History = createMemoryHistory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWithTimeout();
    });

    await fetchUser('hsdihfisdhfi', history)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: MainActionsTypes.FIRE_SNACK,
      value: {
        open: true,
        type: 'error',
        message: 'Não foi possivel autenticar, efetue login novamente!',
        duration: 6000
      }
    });
  });
});