import { AuthAction, AuthActionsTypes } from './authActionsTypes';

export interface AuthState {
    loading: boolean;
    auth: boolean;
}

const INITIAL_STATE: AuthState = {
    loading: false,
    auth: false
}

const authReducer = (state = INITIAL_STATE, action: AuthAction) => {
    switch (action.type) {
        case AuthActionsTypes.SENDED:
            return {...state, loading: true}

        case AuthActionsTypes.ENDED:
            return{...state, loading: false}

        case AuthActionsTypes.SUCCESS:
            return {...state, auth: true}
        default:
            return state;
    }
}

export default authReducer;
