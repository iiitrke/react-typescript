import { Dispatch } from "redux";
import { FeaturedCourseAction } from "../actions/featured-courses-action";
import { FeaturedCoursesActionType } from "../action-types/featured-course-types";
import axios from "axios";
import { API_FEATURED_COURSES } from "../../URLConstants";

export const featuredCoureseCreator = () => {
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
        type: FeaturedCoursesActionType.FEATUREDCOURSE_FETCH_REPO_SUCCESS,
        payload: error.message,
      });
    }
  };
};
