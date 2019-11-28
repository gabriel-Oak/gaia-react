import { MainActionsTypes } from "./mainActionsTypes";
import { Dispatch } from "redux";

export const authenticate = (token: string) => ({
    type: MainActionsTypes.AUTHENTICATED,
    value: token
});

export const setTitle = (title: string) => (dispacth: Dispatch)=> {
    document.title = `Gaia | ${title}`;
    dispacth({
        type: MainActionsTypes.SETTITLE,
        value: title
    })
}