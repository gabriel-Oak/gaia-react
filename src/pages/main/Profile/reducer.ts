import types from './types';
import Action from '../../../shared/interfaces/Action';

export interface profileState {
  loading: boolean;
}

const INITIAL_STATE: profileState = {
  loading: false,
}

const profile = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case types.UPDATE:
      return { ...state, loading: true };
    case types.COMPLETE:
      return { ...state, loading: false }
    default:
      return state;
  }
}

export default profile;