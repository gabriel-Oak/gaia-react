import { combineReducers } from 'redux';
import form, { UserFormState } from './Form/reducer';
import list, { UserListState } from './List/reducer';

export interface userState {
  form: UserFormState;
  list: UserListState;
}

const user = combineReducers({
  form,
  list,
});

export default user;
