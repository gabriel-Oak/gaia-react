import types from './types';
import Action from '../../../../shared/interfaces/Action';

export interface UserListState {
  loading: boolean;
  users: [];
}

const INITIAL_STATE: UserListState = {
  loading: false,
  users: [],
}

const list = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case types.GET_USERS:
    case types.DELETE_USER:
      return { ...state, loading: true };
    case types.GET_USERS_SUCCESS:
      return { ...state, users: action.value, }
    case types.COMPLETE:
      return { ...state, loading: false }
    default:
      return state;
  }
}

export default list;