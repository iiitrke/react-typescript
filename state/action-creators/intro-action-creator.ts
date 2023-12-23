import { Dispatch } from "redux";
import { IntroAction } from "../actions/IntroAction";
import { IntroActionType } from "../action-types/intro-action-types";
import { API_INTRO } from "./../../constants/URLConstants";
import axios from "axios";

export const introRepository = () => {
  return async (dispatch: Dispatch<IntroAction>) => {
    dispatch({ type: IntroActionType.INTRO_FETCH_REPO });
    try {
      const { data } = await axios.get(API_INTRO);
      // console.log(data);
      dispatch({
        type: IntroActionType.INTRO_FETCH_REPO_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: IntroActionType.INTRO_FETCH_REPO_ERROR,
        payload: error.message,
      });
    }
  };
};
