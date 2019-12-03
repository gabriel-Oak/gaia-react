import axios from 'axios';

import { Dispatch } from "redux";
import { AuthActionsTypes, AuthAction } from "./authActionsTypes";
import { api } from '../../enviroments/enviroments';
import resolveError from '../../shared/utils/resolveError';
import { setSession } from '../../shared/utils/auth';
import { MainActionsTypes } from '../main/mainActionsTypes';

export const logIn = (form: any) => async (dispatch: Dispatch<AuthAction>) => {
  try {
    
    dispatch({ type: AuthActionsTypes.SENDED });

    const { data: { token, user } } = await axios.post(`${api.user}/${form.user}`, form);

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