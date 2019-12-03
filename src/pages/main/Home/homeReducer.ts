import { HomeAction, HomeActionsTypes } from "./homeActionsTypes";

export interface homeState {
    tabIndex: number;
    loading?: boolean;
}

const INITIAL_STATE: homeState = {
    tabIndex: 0
}

const homeReducer = (state = INITIAL_STATE, action: HomeAction) => {
    switch (action.type) {
        case HomeActionsTypes.COMPLETE:
            return { ...state, loading: false};

        case HomeActionsTypes.SENDING:
            return { ...state, loading: true };

        case HomeActionsTypes.SET_TAB:
            return { ...state, tabIndex: action.value };

        default:
            return state;
    }
}

export default homeReducer;