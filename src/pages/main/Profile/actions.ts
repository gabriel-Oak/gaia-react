import axios from 'axios';
import { Dispatch } from 'redux';
import { initialize } from 'redux-form';
import { User } from '../../../shared/interfaces/User';
import types from './types';
import { getSession } from '../../../shared/utils/auth';
import { api } from '../../../enviroments/enviroments';
import { HomeActionsTypes } from '../Home/homeActionsTypes';
import { history } from '../../../AppRouter';
import resolveError from '../../../shared/utils/resolveError';
import { fetchUser } from '../mainActions';
export const initializeForm = () => (dispatch: Dispatch, getState: Function) => {
  const { mainReducer: { user } } = getState();
  dispatch(initialize('user', {
    ...user,
    confirmPassword: user.password
  }));
}

export const update = (user: User) => async (dispatch: any) => {
  dispatch({ type: types.UPDATE });
  try {
    const { token } = getSession();
    await axios.put(`${api.user}`, user, {
      headers: {
        Authorization: token,
      }
    });

    dispatch({
      type: HomeActionsTypes.FIRE_SNACK,
      value: {
        open: true,
        type: 'success',
        message: 'Perfil atualizado com sucesso!',
        duration: 6000
      }
    });

    dispatch(fetchUser(token, history));
    history.push('/');

  } catch (e) {
    dispatch({
      type: HomeActionsTypes.FIRE_SNACK,
      value: {
        open: true,
        type: 'error',
        message: resolveError(e).message,
        duration: 6000
      }
    });
  } finally {
    dispatch({ type: types.COMPLETE });
  }
}