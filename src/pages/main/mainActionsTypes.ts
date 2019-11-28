export interface MainAction {
    type: string;
    value?: any;
}

export const MainActionsTypes = {
    AUTHENTICATED: 'AUTHENTICATED',
    SETTITLE: 'SETTITLE'
}