import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer, { AuthState } from './pages/auth/authReducer';
import homeReducer, { homeState } from './pages/main/Home/homeReducer';
import mainReducer, { mainState } from './pages/main/mainReducer';

export interface ReducersPool {
  authReducer: AuthState;
  homeReducer: homeState;
  mainReducer: mainState;
}

export default combineReducers({
  form: formReducer,
  authReducer,
  homeReducer,
  mainReducer
});