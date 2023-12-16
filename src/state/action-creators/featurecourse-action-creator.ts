import { Dispatch } from "redux";
import { IntroAction } from "../actions/IntroAction";
import {} from "../action-types/intro-action-types";
import { FeaturedCoursesActionType } from "../action-types/featured-course-types";
import { API_INTRO } from "../../URLConstants";
import axios from "axios";
import { FeaturedCourseAction } from "../actions/featured-courses-action";

export const featuredcoursesCre = () => {
  return async (dispatch: Dispatch<FeaturedCourseAction>) => {
    dispatch({ type: FeaturedCoursesActionType.FEATUREDCOURSE_FETCH_REPO });
    try {
      const { data } = await axios.get(API_INTRO);
      console.log(data);
      dispatch({
        type: FeaturedCoursesActionType.FEATUREDCOURSE_FETCH_REPO_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: FeaturedCoursesActionType.FEATUREDCOURSE_FETCH_REPO_ERROR,
        payload: error.message,
      });
    }
  };
};
