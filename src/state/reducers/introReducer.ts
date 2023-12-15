import { IntroActionType } from "../action-types/intro-action-types";
import { IntroAction } from "../actions/IntroAction";
import { IntroModel } from "../models/Intro-type";

interface IntroState {
  cached: boolean;
  loading: boolean;
  error: string | null;
  intros: IntroModel[];
}

const initialState: IntroState = {
  cached: false,
  loading: false,
  error: null,
  intros: [],
};

const introReducer = (
  state: IntroState = initialState,
  action: IntroAction
): IntroState => {
  switch (action.type) {
    case IntroActionType.INTRO_FETCH_REPO: {
      if (state.cached) {
        return state;
      }
      return { cached: false, loading: true, error: null, intros: [] };
    }
    case IntroActionType.INTRO_FETCH_REPO_SUCCESS: {
      return {
        cached: true,
        loading: true,
        error: null,
        intros: action.payload,
      };
    }

    case IntroActionType.INTRO_FETCH_REPO_ERROR:
      return {
        cached: false,
        loading: false,
        error: action.payload,
        intros: [],
      };
    default: {
      return state;
    }
  }
};

export default introReducer;
