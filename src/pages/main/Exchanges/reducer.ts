import types from './types';
import Action from '../../../shared/interfaces/Action';

export interface ExchangesState {
  loading: boolean;
  menus: any[];
}

const INITIAL_STATE: ExchangesState = {
  loading: false,
  menus: [],
}

const exchanges = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case types.GET_MENUS:
      return { ...state, loading: true };
    case types.COMPLETE:
      return { ...state, loading: false }
    case types.GET_MENUS_SUCCESS:
      return { ...state, ...action.value }
    default:
      return state;
  }
}

export default exchanges;