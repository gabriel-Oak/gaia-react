import { MainActionsTypes } from "./mainActionsTypes";

export const authenticate = (token: string) => ({
    type: MainActionsTypes.AUTHENTICATED,
    value: token
});
