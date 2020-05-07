import types from './types';
import Action from '../../../../shared/interfaces/Action';

export interface UserFormState {
  loading: boolean;
}

const INITIAL_STATE: UserFormState = {
  loading: false,
}

const form = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case types.CREATE_USER:
    case types.GET_USER:
    case types.UPDATE_USER:
      return { ...state, loading: true };
    case types.COMPLETE:
      return { ...state, loading: false }
    default:
      return state;
  }
}

export default form;