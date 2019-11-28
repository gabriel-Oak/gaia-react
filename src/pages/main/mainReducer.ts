import { MainAction, MainActionsTypes } from "./mainActionsTypes"

export interface mainState {
    title: string;
    token?: string;
}

const INITIAL_STATE: mainState = {
    title: 'Gaia'
}

const mainReducer = (state = INITIAL_STATE, action: MainAction) => {
    switch (action.type) {
        case MainActionsTypes.AUTHENTICATED:
            return { ...state, auth: true, token: action.value }

        case MainActionsTypes.SETTITLE:
            return { ...state, title: action.value }

        default:
            return state;
    }
}

export default mainReducer;