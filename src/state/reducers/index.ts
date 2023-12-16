import { combineReducers } from "redux";
import userReducer from "./userReducer";
import { default as introReducer } from "./introReducer";
import featuredCourseReducer from "./featuredCourseReducer";

const reducers = combineReducers({
  userRepository: userReducer,
  introRepository: introReducer,
  featuredCoursesRepository: featuredCourseReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
