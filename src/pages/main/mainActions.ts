import axios from 'axios';
import { MainActionsTypes } from "./mainActionsTypes";
import { Dispatch } from "redux";
import { api } from '../../enviroments/enviroments';
import { History } from 'history';
import { clearSession } from '../../shared/utils/auth';
import Action from '../../shared/interfaces/Action';

export const fetchUser = (token: string, history: History) => async (dispatch: Dispatch<Action>) => {
  try {

    const { data: { user } } = await axios.put(`${api.session}`, {}, {
      headers: {
        Authorization: `Baerer ${token}`
      }
    });

    dispatch({
      type: MainActionsTypes.FETCH_USER,
      value: user
    });

  } catch (e) {
    clearSession();

    await history.push('/login');

    dispatch({
      type: MainActionsTypes.FIRE_SNACK,
      value: {
        open: true,
        type: 'error',
        message: 'Não foi possivel autenticar, efetue login novamente!',
        duration: 6000
      }
    });
  }
}

export const setTitle = (title: string) => (dispacth: Dispatch<Action>) => {
  document.title = `Gaia | ${title}`;
  dispacth({
    type: MainActionsTypes.SETTITLE,
    value: title
  });
}

export const fireSnack = (
  type: string,
  message: string,
  duration: number = 6000
) => ({
  type: MainActionsTypes.FIRE_SNACK,
  value: {
    open: true,
    type,
    message,
    duration
  }
});

export const closeSnack = () => ({
  type: MainActionsTypes.CLOSE_SNACK
});

export const toggleDrawer = () => ({
  type: MainActionsTypes.TOGGLE_DRAWER
})

export const redirect_to = (url: string) => ({
  type: MainActionsTypes.REDIRECT,
  value: url
})