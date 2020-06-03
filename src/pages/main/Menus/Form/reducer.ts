import types from './types';
import Action from '../../../../shared/interfaces/Action';

export interface MenuFormState {
  loading: boolean;
  menus: any[];
}

const INITIAL_STATE: MenuFormState = {
  loading: false,
  menus: [],
}

const form = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case types.GET_MENU:
    case types.UPDATE_MENU:
      return { ...state, loading: true };
    case types.COMPLETE:
      return { ...state, loading: false }
    case types.GET_MENU_SUCCESS:
      return { ...state, ...action.value }
    default:
      return state;
  }
}

export default form;