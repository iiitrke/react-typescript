import { combineReducers } from "redux";
import userReducer from "./userReducer";
import introReducer from "./introReducer";

const reducers = combineReducers({
  userReducer: userReducer,
  introReducer: introReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
