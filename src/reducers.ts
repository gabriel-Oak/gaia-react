import { combineReducers } from 'redux';

import authReducer from './pages/auth/authReducer';
import mainReducer from './pages/main/mainReducer';

export interface ReducersPool {
  mainReducer: object;
  authReducer: object;
}

export default combineReducers({
  authReducer,
  mainReducer
});