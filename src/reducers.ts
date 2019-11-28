import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './pages/auth/authReducer';
import mainReducer from './pages/main/mainReducer';

export interface ReducersPool {
  mainReducer: object;
  authReducer: object;
}

export default combineReducers({
  form: formReducer,
  authReducer,
  mainReducer
});