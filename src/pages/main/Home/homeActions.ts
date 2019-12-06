import axios from 'axios';
import { HomeActionsTypes } from "./homeActionsTypes";
import { Dispatch } from "redux";
import { api } from '../../../enviroments/enviroments';
import resolveError from '../../../shared/utils/resolveError';
import Action from '../../../shared/interfaces/Action';
import Menu from '../../../shared/interfaces/Menu';

export const setTab = (index: number) => ({
  type: HomeActionsTypes.SET_TAB,
  value: index
});

export const fetchMenus = (token: string) => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({ type: HomeActionsTypes.SENDING });

    const { data } = await axios.get(`${api.cardapio}`, {
      headers: {
        authorization: token
      }
    });

    const initialValues: any = {};

    data.forEach((menu: Menu, index: number) =>
      initialValues[`pratoPrincipal${index}`] = menu.pratoPrincipal
    );

    dispatch({
      type: HomeActionsTypes.INIT_FORM,
      value: initialValues
    });

    dispatch({
      type: HomeActionsTypes.FECTCH_MENUS,
      value: data
    });

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
    dispatch({ type: HomeActionsTypes.COMPLETE });
  }
}