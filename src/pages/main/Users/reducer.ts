import { combineReducers } from 'redux';
import form, { UserFormState } from './Form/reducer';

export interface userState {
  form: UserFormState;
}

const user = combineReducers({ form });

export default user;
