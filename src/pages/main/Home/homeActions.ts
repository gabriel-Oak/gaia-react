import { HomeActionsTypes } from "./homeActionsTypes";

export const setTab = (index: number) => ({
    type: HomeActionsTypes.SET_TAB,
    value: index
});