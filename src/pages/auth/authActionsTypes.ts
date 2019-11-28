export interface AuthAction {
    type: string;
    value?: any;
}

export const AuthActionsTypes = {
    FAIL: 'FAIL',
    SENDED: 'SENDED',
    ENDED: 'ENDED',
    SUCCESS: 'SUCCESS'
}
