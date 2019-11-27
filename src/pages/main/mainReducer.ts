import { MainAction, MainActionsTypes } from "./mainActionsTypes"

export interface mainState {
    token?: string;
}

const INITIAL_STATE: mainState = {

}

const mainReducer = (state = INITIAL_STATE, action: MainAction) => {
    switch (action.type) {
        case MainActionsTypes.AUTHENTICATED:
            return { ...state, auth: true, token: action.value }
        default:
            return state;
    }
}

export default mainReducer;