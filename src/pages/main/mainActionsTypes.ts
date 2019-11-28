export interface MainAction {
    type: string;
    value?: any;
}

export const MainActionsTypes = {
    AUTHENTICATED: 'AUTHENTICATED',
    SETTITLE: 'SETTITLE',
    FIRE_SNACK: 'FIRE_SNACK',
    CLOSE_SNACK: 'CLOSE_SNACK'
}