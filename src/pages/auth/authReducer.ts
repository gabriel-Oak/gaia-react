import { AuthActionsTypes } from './authActionsTypes';
import Action from '../../shared/interfaces/Action';
import Snackbar from '../../shared/interfaces/Snackbar';

export interface AuthState {
    loading: boolean;
    auth: boolean;
    snackbar: Snackbar
}

const INITIAL_STATE: AuthState = {
    loading: false,
    auth: false,
    snackbar: {
        open: false
    }
}

const authReducer = (state = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case AuthActionsTypes.SENDED:
            return { ...state, loading: true }

        case AuthActionsTypes.ENDED:
            return { ...state, loading: false }

        case AuthActionsTypes.SUCCESS:
            return { ...state, auth: true }

        case AuthActionsTypes.FIRE_SNACK:
            return { ...state, snackbar: action.value }

        case AuthActionsTypes.CLOSE_SNACK:
            return { ...state, snackbar: { open: false } }

        default:
            return state;
    }
}

export default authReducer;
