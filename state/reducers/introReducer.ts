import { IntroActionType } from "../action-types/intro-action-types";
import { IntroAction } from "../actions/IntroAction";
import { IntroModel } from "../models/Intro-type";

export interface IntroState {
  cached: boolean;
  loading: boolean;
  error: string | null;
  data: IntroModel[];
}

const initialState: IntroState = {
  cached: false,
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: IntroState = initialState,
  action: IntroAction
): IntroState => {
  switch (action.type) {
    case IntroActionType.INTRO_FETCH_REPO: {
      // if (state.cached) {
      //   return state;
      // }
      return { cached: false, loading: true, error: null, data: [] };
    }
    case IntroActionType.INTRO_FETCH_REPO_SUCCESS: {
      // console.log("in intro scuccess");
      return {
        cached: true,
        loading: false,
        error: null,
        data: action.payload,
      };
    }

    case IntroActionType.INTRO_FETCH_REPO_ERROR:
      return {
        cached: false,
        loading: false,
        error: action.payload,
        data: [],
      };
    default: {
      return state;
    }
  }
};

export default reducer;
