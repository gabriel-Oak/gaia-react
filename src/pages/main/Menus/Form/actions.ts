import { Dispatch } from "redux";
import types from "./types";
import axios from 'axios';
import { api } from "../../../../enviroments/enviroments";
import { getSession } from "../../../../shared/utils/auth";
import { HomeActionsTypes } from "../../Home/homeActionsTypes";
import resolveError from "../../../../shared/utils/resolveError";

export const getMenus = () => async (dispatch: Dispatch) => {
  dispatch({ type: types.GET_MENU });
  try {
    const { token } = getSession();
    const { data } = await axios.get(api.cardapio, {
      headers: {
        authorization: token
      }
    })
    dispatch({
      type: types.GET_MENU_SUCCESS,
      value: {
        menus: data
      }
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
    dispatch({ type: types.COMPLETE })
  }
} 