import moxios from "moxios";
import { setTab, fetchMenus } from "./homeActions";
import { HomeActionsTypes } from "./homeActionsTypes";

describe('Home Actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should set tab index to 3', () => {
    expect(setTab(3).value).toBe(3);
  });

  it('shold fetch menus', async () => {
    const dispatch = jest.fn();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [
          { pratoPrincipal: 'Teste assado' }
        ]
      });
    });

    await fetchMenus('yoolooooooooooooow')(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: HomeActionsTypes.FECTCH_MENUS,
      value: [
        { pratoPrincipal: 'Teste assado' }
      ]
    });
  });

  it('shold fail fetching menus', async () => {
    const dispatch = jest.fn();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWithTimeout()
    });

    await fetchMenus('yoolooooooooooooow')(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: HomeActionsTypes.FIRE_SNACK,
      value: {
        duration: 6000,
        message: 'Ocorreu algum erro interno',
        open: true,
        type: 'error',
      }
    });
  });
});