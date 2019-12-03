import axios from 'axios';
import { HomeActionsTypes, HomeAction } from "./homeActionsTypes";
import { Dispatch } from "redux";
import { api } from '../../../enviroments/enviroments';
import resolveError from '../../../shared/utils/resolveError';

export const setTab = (index: number) => ({
  type: HomeActionsTypes.SET_TAB,
  value: index
});

export const fetchMenus = (token: string) => async (dispatch: Dispatch<HomeAction>) => {
  try {
    dispatch({ type: HomeActionsTypes.SENDING });

    const { data } = await axios.get(`${api.cardapio}`, {
      headers: {
        authorization: token
      }
    });

    console.log(data);
    
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