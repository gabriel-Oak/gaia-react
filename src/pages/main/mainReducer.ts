import { MainAction, MainActionsTypes } from "./mainActionsTypes"

export interface mainState {
    title: string;
    token?: string;
    snackbar: {
        open: boolean;
        message?: string;
        type?: 'success' | 'error' | 'info' | 'warning';
        duration?: number
    };
}

const INITIAL_STATE: mainState = {
    title: 'Gaia',
    snackbar: {
        open: false,
    }
}

const mainReducer = (state = INITIAL_STATE, action: MainAction) => {    
    switch (action.type) {
        case MainActionsTypes.AUTHENTICATED:
            return { ...state, auth: true, token: action.value }

        case MainActionsTypes.SETTITLE:
            return { ...state, title: action.value }

        case MainActionsTypes.FIRE_SNACK:
            return { ...state, snackbar: action.value }

        case MainActionsTypes.CLOSE_SNACK:
            return { ...state, snackbar: { open: false } }

        default:
            return state;
    }
}

export default mainReducer;