import { MainActionsTypes } from "./mainActionsTypes";
import { Dispatch } from "redux";

export const authenticate = (token: string) => ({
    type: MainActionsTypes.AUTHENTICATED,
    value: token
});

export const setTitle = (title: string) => (dispacth: Dispatch) => {
    document.title = `Gaia | ${title}`;
    dispacth({
        type: MainActionsTypes.SETTITLE,
        value: title
    });
}

export const fireSnack = (
    type: string,
    message: string,
    duration: number = 6000
) => ({
    type: MainActionsTypes.FIRE_SNACK,
    value: {
        open: true,
        type,
        message,
        duration
    }
});

export const closeSnack = () => ({
    type: MainActionsTypes.CLOSE_SNACK
});