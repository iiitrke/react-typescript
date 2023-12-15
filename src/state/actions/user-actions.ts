import { ActionType } from "../action-types/user-actions-types";
import { User } from "../models/User.type";

interface RepositriesAction {
  type: ActionType.SEARCH_REPOSITRIES;
}

interface RepositriesSuccessAction {
  type: ActionType.SEARCH_REPOSITRIES_SUCCESS;
  payload: User[];
}

interface RepositriesErrorAction {
  type: ActionType.SEARCH_REPOSITRIES_ERROR;
  payload: string;
}
export type Action =
  | RepositriesAction
  | RepositriesSuccessAction
  | RepositriesErrorAction;
