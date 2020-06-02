import { combineReducers } from 'redux';
import form, { MenuFormState } from './Form/reducer';

export interface menuState {
  form: MenuFormState;
}

const menu = combineReducers({
  form,
});

export default menu;
