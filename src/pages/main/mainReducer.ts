import { MainAction, MainActionsTypes } from "./mainActionsTypes"
import { User } from "../../shared/interfaces/user"

export interface mainState {
    title: string;
    user?: User;
    drawer: boolean;
    redirect?: string | null;
    snackbar: {
        open: boolean;
        message?: string;
        type?: 'success' | 'error' | 'info' | 'warning';
        duration?: number
    };
}

const INITIAL_STATE: mainState = {
    title: 'Gaia',
    drawer: false,
    snackbar: {
        open: false,
    }
}

const mainReducer = (state = INITIAL_STATE, action: MainAction) => {
    switch (action.type) {
        case MainActionsTypes.FETCH_USER:
            return { ...state, auth: true, user: action.value }

        case MainActionsTypes.TOGGLE_DRAWER:
            return { ...state, drawer: !state.drawer }

        case MainActionsTypes.SETTITLE:
            return { ...state, title: action.value }

        case MainActionsTypes.FIRE_SNACK:
            return { ...state, snackbar: action.value }

        case MainActionsTypes.CLOSE_SNACK:
            return { ...state, snackbar: { open: false } }

        case MainActionsTypes.REDIRECT:
            return { ...state, redirect: action.value }

        default:
            return state;
    }
}

export default mainReducer;