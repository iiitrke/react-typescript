import axios from "axios";
import { Dispatch } from "redux";
import { API_FEATURED_COURSES, API_INTRO } from "../../URLConstants";
import { FeaturedCoursesActionType } from "../action-types/featured-course-types";

import { FeaturedCourseAction } from "../actions/featured-courses-action";

export const featuredcoursesCre = () => {
  return async (dispatch: Dispatch<FeaturedCourseAction>) => {
    dispatch({ type: FeaturedCoursesActionType.FEATUREDCOURSE_FETCH_REPO });
    try {
      const { data } = await axios.get(API_FEATURED_COURSES);

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
