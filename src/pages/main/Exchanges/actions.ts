import { Dispatch } from 'redux';
import types from './types';
import { HomeActionsTypes } from '../Home/homeActionsTypes';
import resolveError from '../../../shared/utils/resolveError';
import axios from 'axios';
import { getSession } from '../../../shared/utils/auth';
import { api } from '../../../enviroments/enviroments';

export const getExchanges = () => async (dispatch: Dispatch) => {
  dispatch({ type: types.GET_MENUS });

  try {
    const { token } = getSession();
    const { data: resMenus } = await axios.get(api.cardapio, {
      headers: {
        authorization: token
      }
    });

    const { data: { rows } } = await axios.get(`${api.troca}`, {
      headers: {
        authorization: token
      },
      params: {
        page: 1,
        quantityPerPage: 99999999,
      }
    });

    const menus = resMenus.map((menu: any) => ({
      id: menu.id,
      date: menu.date,
      exchange1: {
        id: menu.dishes.filter((dish: any) => dish.type.id === 5)[0].id,
        name: menu.dishes.filter((dish: any) => dish.type.id === 5)[0].name,
        exchanges: rows.filter((row: any) => (
          row.menu.id === menu.id && row.dish.id === menu.dishes.filter(
            (dish: any) => dish.type.id === 5
          )[0].id
        )).map((row: any) => row.user),
      },
      exchange2: {
        id: menu.dishes.filter((dish: any) => dish.type.id === 5)[1].id,
        name: menu.dishes.filter((dish: any) => dish.type.id === 5)[1].name,
        exchanges: rows.filter((row: any) => (
          row.menu.id === menu.id && row.dish.id === menu.dishes.filter(
            (dish: any) => dish.type.id === 5
          )[1].id
        )).map((row: any) => row.user),
      },
      out: {
        id: 1,
        name: 'Almoçar fora',
        exchanges: rows.filter((row: any) => (
          row.menu.id === menu.id && row.dish.id === 1
        )).map((row: any) => row.user),
      }
    }));

    dispatch({ type: types.GET_MENUS_SUCCESS, value: { menus } });
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
