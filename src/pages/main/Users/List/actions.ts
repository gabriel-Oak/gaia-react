import axios from 'axios';
import { Dispatch } from 'redux';
import types from './types';
import { getSession } from '../../../../shared/utils/auth';
import { HomeActionsTypes } from '../../Home/homeActionsTypes';
import resolveError from '../../../../shared/utils/resolveError';
import { api } from '../../../../enviroments/enviroments';

export const getUsers = () => async (dispatch: Dispatch) => {
  dispatch({ type: types.GET_USERS });
  try {
    const { token } = getSession();
    const { data: { users } } = await axios.get(`${api.user}`, {
      headers: {
        Authorization: token,
      }
    });

    dispatch({
      type: types.GET_USERS_SUCCESS,
      value: users,
    })
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

export const destroy = (id: number) => async (dispatch: Dispatch) => {
  dispatch({ type: types.DELETE_USER });
  try {
    const { token } = getSession();
    await axios.delete(`${api.user}/${id}`, {
      headers: {
        Authorization: token,
      }
    });
    getUsers()(dispatch);
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