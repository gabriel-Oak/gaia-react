export interface MainAction {
    type: string;
    value?: any;
}

export const MainActionsTypes = {
    FETCH_USER: 'FETCH_USER',
    SETTITLE: 'SETTITLE',
    FIRE_SNACK: 'FIRE_SNACK',
    CLOSE_SNACK: 'CLOSE_SNACK'
}