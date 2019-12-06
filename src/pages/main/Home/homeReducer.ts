import { HomeActionsTypes } from "./homeActionsTypes";
import Action from "../../../shared/interfaces/Action";
import Menu from "../../../shared/interfaces/Menu";

export interface homeState {
    tabIndex: number;
    loading?: boolean;
    menus: Menu[];
    initialFormValues?: any;
}

const INITIAL_STATE: homeState = {
    tabIndex: 0,
    menus: []
}

const homeReducer = (state = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case HomeActionsTypes.COMPLETE:
            return { ...state, loading: false };

        case HomeActionsTypes.FECTCH_MENUS:
            return { ...state, menus: action.value }

        case HomeActionsTypes.INIT_FORM:
            return { ...state, initialFormValues: action.value }

        case HomeActionsTypes.SENDING:
            return { ...state, loading: true };

        case HomeActionsTypes.SET_TAB:
            return { ...state, tabIndex: action.value };

        default:
            return state;
    }
}

export default homeReducer;