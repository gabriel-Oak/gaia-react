import axios from 'axios';
import types from './types';
import { User } from '../../../../shared/interfaces/User';
import { Dispatch } from 'redux';
import { HomeActionsTypes } from '../../Home/homeActionsTypes';
import resolveError from '../../../../shared/utils/resolveError';
import { getSession } from '../../../../shared/utils/auth';
import { api } from '../../../../enviroments/enviroments';
import { reset, initialize } from 'redux-form';

export const create = (user: User) => async (dispatch: Dispatch) => {
  dispatch({ type: types.CREATE_USER });
  try {
    const { token } = getSession();
    await axios.post(`${api.user}`, user, {
      headers: {
        Authorization: token,
      }
    });

    dispatch({
      type: HomeActionsTypes.FIRE_SNACK,
      value: {
        open: true,
        type: 'success',
        message: 'Usuário criado com sucesso!',
        duration: 6000
      }
    });

    dispatch(reset('user'));

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

export const getUser = (id: number) => async (dispatch: Dispatch) => {
  dispatch({ type: types.GET_USER });
  try {
    const { token } = getSession();
    const { data: { user } } = await axios.get(`${api.user}/${id}`, {
      headers: {
        Authorization: token,
      }
    });
    dispatch({ type: types.GET_USER_SUCCESS, user });
    dispatch(initialize('user', user));
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

export const update = (user: User, push: Function) => async (dispatch: Dispatch) => {
  dispatch({ type: types.UPDATE_USER });
  try {
    const { token } = getSession();
    await axios.put(`${api.user}/`, user, {
      headers: {
        Authorization: token,
      }
    });

    dispatch({
      type: HomeActionsTypes.FIRE_SNACK,
      value: {
        open: true,
        type: 'success',
        message: 'Usuário criado com sucesso!',
        duration: 6000
      }
    });

    push('/users');
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
