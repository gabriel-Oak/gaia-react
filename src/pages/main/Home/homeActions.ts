import axios from 'axios';
import { HomeActionsTypes } from './homeActionsTypes';
import { Dispatch } from 'redux';
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

    const menus = data.map(({ id, date, dishes }: any) => ({
      id,
      date,
      'pratoPrincipal': (dishes.find(({ type }: any) => type.id === 1) || {}).name || '',
      'opcao1': (dishes.filter(({ type }: any) => type.id === 5)[0] || {}).name || '',
      'opcao2': (dishes.filter(({ type }: any) => type.id === 5)[1] || {}).name || '',
      'guarnicao1': (dishes.filter(({ type }: any) => type.id === 2)[0] || {}).name || '',
      'guarnicao2': (dishes.filter(({ type }: any) => type.id === 2)[1] || {}).name || '',
      'salada1': (dishes.filter(({ type }: any) => type.id === 3)[0] || {}).name || '',
      'salada2': (dishes.filter(({ type }: any) => type.id === 3)[1] || {}).name || '',
      'sobremesa': (dishes.find(({ type }: any) => type.id === 4) || {}).name || '',
    }));

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