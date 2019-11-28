import axios from 'axios';

import { Dispatch } from "redux";
import { AuthActionsTypes } from "./authActionsTypes";
import { api } from '../../enviroments/enviroments';
import fireError from '../../shared/utils/fireError';

export const logIn = (form: any) => async (dispatch: Dispatch) => {
  try {

    dispatch({ type: AuthActionsTypes.SENDED });

    const { data } = await axios.post(`${api.user}/${form.user}`, form);

    console.log(data);


  } catch (e) {
    fireError(e)
  } finally {
    dispatch({ type: AuthActionsTypes.ENDED });
  }
}