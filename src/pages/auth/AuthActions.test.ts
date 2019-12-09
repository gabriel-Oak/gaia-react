import moxios from 'moxios';

import { closeSnack, logIn } from "./authActions";
import { AuthActionsTypes } from "./authActionsTypes";
import { MainActionsTypes } from '../main/mainActionsTypes';


describe('Auth Actions', () => {

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });


  it('close snack', () => {
    expect(closeSnack().type).toBe(AuthActionsTypes.CLOSE_SNACK);
  });

  it('shold fail logIn', async () => {
    const dispatch = jest.fn();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({status: 400});
    });

    await logIn({ user: 'test', password: 'yolooo' })(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: AuthActionsTypes.FIRE_SNACK,
      value: {
        duration: 6000,
        message: 'Ocorreu algum erro interno',
        open: true,
        type: 'error'
      }
    });
  });

  it('shold succes logIn', async () => {

    const dispatch = jest.fn();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          token: 'tygegsdfugisdfg324gu23y4g',
          user: { name: 'Joãozinho' }
        }
      });
    });
    
    await logIn({ user: 'test2', password: 'yolooo' })(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: MainActionsTypes.FETCH_USER,
      value: { name: 'Joãozinho' }
    });
  });
});