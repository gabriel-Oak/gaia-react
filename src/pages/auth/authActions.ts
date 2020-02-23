import axios from 'axios';

import { Dispatch } from "redux";
import { AuthActionsTypes } from "./authActionsTypes";
import { api } from '../../enviroments/enviroments';
import resolveError from '../../shared/utils/resolveError';
import { setSession } from '../../shared/utils/auth';
import { MainActionsTypes } from '../main/mainActionsTypes';
import Action from '../../shared/interfaces/Action';

export const logIn = (form: any) => async (dispatch: Dispatch<Action>) => {
  try {
    
    dispatch({ type: AuthActionsTypes.SENDED });

    const { data: { token, user } } = await axios.post(api.session, form);

    setSession(token);

    dispatch({
      type: MainActionsTypes.FETCH_USER,
      value: user
    });

  } catch (e) {
    dispatch({
      type: AuthActionsTypes.FIRE_SNACK,
      value: {
        open: true,
        type: 'error',
        message: resolveError(e).message,
        duration: 6000
      }
    });
  } finally {
    dispatch({ type: AuthActionsTypes.ENDED });
  }
}

export const closeSnack = () => ({
  type: AuthActionsTypes.CLOSE_SNACK
});