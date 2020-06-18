import axios from 'axios';
import { HomeActionsTypes } from './homeActionsTypes';
import { Dispatch } from 'redux';
import { api } from '../../../enviroments/enviroments';
import resolveError from '../../../shared/utils/resolveError';
import Action from '../../../shared/interfaces/Action';
import { getSession } from '../../../shared/utils/auth';

export const setTab = (index: number) => ({
  type: HomeActionsTypes.SET_TAB,
  value: index
});

export const fetchMenus = (token: string | null) => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({ type: HomeActionsTypes.SENDING });

    const { data } = await axios.get(`${api.cardapio}`, {
      headers: {
        authorization: token
      }
    });

    const menus = data.map(({ id, date, dishes }: any) => ({
      id,
      date,
      'pratoPrincipal': dishes.find(({ type }: any) => type.id === 1) || {},
      'opcao1': dishes.filter(({ type }: any) => type.id === 5)[0] || {},
      'opcao2': dishes.filter(({ type }: any) => type.id === 5)[1] || {},
      'guarnicao1': dishes.filter(({ type }: any) => type.id === 2)[0] || {},
      'guarnicao2': dishes.filter(({ type }: any) => type.id === 2)[1] || {},
      'salada1': dishes.filter(({ type }: any) => type.id === 3)[0] || {},
      'salada2': dishes.filter(({ type }: any) => type.id === 3)[1] || {},
      'sobremesa': dishes.find(({ type }: any) => type.id === 4) || {},
    }));

    await Promise.all([...menus.map(async (menu: any) => {
      const { data } = await axios.get(`${api.troca}/${menu.id}`, {
        headers: {
          authorization: token
        }
      });
      if (data) menu.exchange = data.dish.id;
      return data
    })]);

    dispatch({
      type: HomeActionsTypes.FECTCH_MENUS,
      value: menus
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

export const exchangeDish = (body: any) => async (dispatch: any) => {
  dispatch({ type: HomeActionsTypes.SENDING });
  try {
    const { token } = getSession();
    await axios.post(api.troca, body, {
      headers: {
        authorization: token
      }
    });
    dispatch({
      type: HomeActionsTypes.FIRE_SNACK,
      value: {
        open: true,
        type: 'success',
        message: 'Troca realizada com sucesso!',
        duration: 6000
      }
    });

    dispatch({ type: HomeActionsTypes.COMPLETE })
    dispatch(fetchMenus(token));
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
    dispatch({ type: HomeActionsTypes.COMPLETE })
  }
}