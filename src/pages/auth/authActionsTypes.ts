export interface AuthAction {
    type: string;
    value?: any;
}

export const AuthActionsTypes = {
    FAIL: 'FAIL',
    SENDED: 'SENDED',
    ENDED: 'ENDED',
    SUCCESS: 'SUCCESS',
    FIRE_SNACK: 'FIRE_SNACK',
    CLOSE_SNACK: 'CLOSE_SNACK'
}
