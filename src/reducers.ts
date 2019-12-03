import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './pages/auth/authReducer';
import homeReducer from './pages/main/Home/homeReducer';
import mainReducer from './pages/main/mainReducer';

export interface ReducersPool {
  authReducer: object;
  homeReducer: object;
  mainReducer: object;
}

export default combineReducers({
  form: formReducer,
  authReducer,
  homeReducer,
  mainReducer
});