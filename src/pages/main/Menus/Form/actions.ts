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
    });

    const menus = data.map(({ id, date, dishes }: any) => ({
      id,
      date,
      '1-pratoPrincipal': (dishes.find(({ type }: any) => type.id === 1) || {}).name || '',
      '5-opcao1': (dishes.filter(({ type }: any) => type.id === 5)[0] || {}).name || '',
      '5-opcao2': (dishes.filter(({ type }: any) => type.id === 5)[1] || {}).name || '',
      '2-guarnicao1': (dishes.filter(({ type }: any) => type.id === 2)[0] || {}).name || '',
      '2-guarnicao2': (dishes.filter(({ type }: any) => type.id === 2)[1] || {}).name || '',
      '3-salada1': (dishes.filter(({ type }: any) => type.id === 3)[0] || {}).name || '',
      '3-salada2': (dishes.filter(({ type }: any) => type.id === 3)[1] || {}).name || '',
      '4-sobremesa': (dishes.find(({ type }: any) => type.id === 4) || {}).name || '',
    }));

    dispatch({
      type: types.GET_MENU_SUCCESS,
      value: {
        menus
      }
    });
  } catch (e) {
    console.log(e);

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

export const getDishes = () => async (dispatch: Dispatch) => {
  dispatch({ type: types.GET_DISHES });
  try {
    const { token } = getSession();
    const { data: { rows } } = await axios.get(api.dishes, {
      headers: {
        authorization: token
      },
      params: {
        page: 1,
        quantityPerPage: 100
      }
    })
    dispatch({
      type: types.GET_DISHES_SUCCESS,
      value: {
        dishes: rows
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
    dispatch({ type: types.COMPLETE });
  }
}

export const saveMenu = (menu: any) => async (dispatch: any) => {
  dispatch({ type: types.UPDATE_MENU });
  try {
    const { token } = getSession();
    await axios.post(api.cardapio, menu, {
      headers: {
        authorization: token
      }
    });
    dispatch({ type: types.UPDATE_MENU_SUCCESS })
    dispatch(getMenus());
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