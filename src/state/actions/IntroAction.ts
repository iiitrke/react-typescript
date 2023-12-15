import { IntroActionType } from "../action-types/intro-action-types";
import { IntroModel } from "../models/Intro-type";
import { User } from "../models/User.type";

interface IntroFetchRepositriesAction {
  type: IntroActionType.INTRO_FETCH_REPO;
}

interface IntroFetchRepositriesSuccessAction {
  type: IntroActionType.INTRO_FETCH_REPO_SUCCESS;
  payload: IntroModel[];
}

interface IntroFetchRepositriesErrorAction {
  type: IntroActionType.INTRO_FETCH_REPO_ERROR;
  payload: string;
}

export type IntroAction =
  | IntroFetchRepositriesAction
  | IntroFetchRepositriesSuccessAction
  | IntroFetchRepositriesErrorAction;
