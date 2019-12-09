import Action from "../../shared/interfaces/Action";
import { MainActionsTypes } from "../../pages/main/mainActionsTypes";

const MAIN_STATE = {
    title: 'Gaia',
    drawer: false,
    snackbar: {
        open: false,
    },
    user: {
        admin: true,
        email: 'test@email.cone',
        nome: 'Jorginho',
        user: 'string'
    },
}

export const mainReducerMock = (state = MAIN_STATE, action: Action) => {
    switch (action.type) {
        case MainActionsTypes.FETCH_USER:
            return { ...state, auth: true, user: action.value }
        default:
            return state;
    }
}
