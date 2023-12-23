import { error } from "console";
import { ActionType } from "../action-types/user-actions-types";
import { Action } from "../actions/user-actions";
import { User } from "../models/User.type";

interface UserState {
  loading: boolean;
  error: string | null;
  users: User[];
}

const initialState: UserState = {
  loading: false,
  error: null,
  users: [],
};

const reducer = (
  state: UserState = initialState,
  action: Action
): UserState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITRIES: {
      return (state = { loading: true, error: null, users: [] });
    }
    case ActionType.SEARCH_REPOSITRIES_SUCCESS: {
      // console.log("In Succes");
      // console.log(action.payload);

      return {
        loading: false,
        error: null,
        users: action.payload,
      };
    }

    case ActionType.SEARCH_REPOSITRIES_ERROR:
      return { loading: false, error: action.payload, users: [] };
    default: {
      return state;
    }
  }
};

export default reducer;
