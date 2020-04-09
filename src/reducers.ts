import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer, { AuthState } from './pages/auth/authReducer';
import homeReducer, { homeState } from './pages/main/Home/homeReducer';
import mainReducer, { mainState } from './pages/main/mainReducer';
import user, { userState } from './pages/main/Users/reducer';
import profile, { profileState } from './pages/main/Profile/reducer';

export interface ReducersPool {
  authReducer: AuthState;
  homeReducer: homeState;
  mainReducer: mainState;
  profile: profileState;
  user: userState;
  form: Object;
}

export default combineReducers({
  form: formReducer,
  authReducer,
  homeReducer,
  mainReducer,
  profile,
  user,
});