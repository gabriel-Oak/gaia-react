import axios from 'axios';

import { Dispatch } from "redux";
import { AuthActionsTypes } from "./authActionsTypes";
import { api } from '../../enviroments/enviroments';
import resolveError from '../../shared/utils/resolveError';

export const logIn = (form: any) => async (dispatch: Dispatch) => {
  try {

    dispatch({ type: AuthActionsTypes.SENDED });

    const { data } = await axios.post(`${api.user}/${form.user}`, form);

    console.log(data);


  } catch (e) {
    dispatch({
      type: AuthActionsTypes.FIRE_SNACK,
      value: {
        open: true,
        type: 'error',
        message: resolveError(e).message,
        duration: 6000
      }
    })
  } finally {
    dispatch({ type: AuthActionsTypes.ENDED });
  }
}

export const closeSnack = () => ({
  type: AuthActionsTypes.CLOSE_SNACK
});