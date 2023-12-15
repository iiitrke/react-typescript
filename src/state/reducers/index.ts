import { combineReducers } from "redux";
import userReducer from "./userReducer";
import { default as introReducer } from "./introReducer";

const reducers = combineReducers({
  userRepository: userReducer,
  introRepository: introReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
