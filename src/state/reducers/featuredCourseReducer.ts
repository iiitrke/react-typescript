import { FeaturedCoursesActionType } from "../action-types/featured-course-types";
import { FeaturedCourseAction } from "../actions/featured-courses-action";
import { FeaturedCourseModel } from "../models/Featured-course.model";

interface FeaturedCourseState {
  cached: boolean;
  loading: boolean;
  error: string | null;
  data: FeaturedCourseModel[];
}

const initialState: FeaturedCourseState = {
  cached: false,
  loading: false,
  error: null,
  data: [],
};

const featuredCourseReducer = (
  state: FeaturedCourseState = initialState,
  action: FeaturedCourseAction
): FeaturedCourseState => {
  switch (action.type) {
    case FeaturedCoursesActionType.FEATUREDCOURSE_FETCH_REPO:
      return { cached: false, loading: true, error: null, data: [] };
    case FeaturedCoursesActionType.FEATUREDCOURSE_FETCH_REPO_SUCCESS:
      return {
        cached: true,
        loading: false,
        error: null,
        data: action.payload,
      };
    case FeaturedCoursesActionType.FEATUREDCOURSE_FETCH_REPO_ERROR:
      return {
        cached: false,
        loading: false,
        error: action.payload,
        data: [],
      };

    default:
      return state;
  }
};

export default featuredCourseReducer;
