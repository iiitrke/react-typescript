import axios from "axios";
import { ActionType } from "../action-types/user-actions-types";
import { API_USERS } from "../../URLConstants";
import { Dispatch } from "redux";
import { Action } from "../actions/user-actions";
export const searchRepositories = () => {
  return async (dispatch: Dispatch<Action>) => {
    console.log("ACTION CREATER");
    dispatch({ type: ActionType.SEARCH_REPOSITRIES });
    try {
      const { data } = await axios.get(API_USERS);
      console.log(data);
      dispatch({ type: ActionType.SEARCH_REPOSITRIES_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: ActionType.SEARCH_REPOSITRIES_ERROR,
        payload: error.message,
      });
    }
  };
};
