import { AuthAction } from './authActionsTypes';

export interface AuthState {

}

const INITIAL_STATE: AuthState = {

}

const authReducer = (state = INITIAL_STATE, action: AuthAction) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default authReducer;
