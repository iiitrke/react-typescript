import { FeaturedCoursesActionType } from "../action-types/featured-course-types";
import { FeaturedCourseModel } from "../models/Featured-course.model";

interface FeaturedCourseRepository {
  type: FeaturedCoursesActionType.FEATUREDCOURSE_FETCH_REPO;
}

interface FeaturedCourseRepositorySuccess {
  type: FeaturedCoursesActionType.FEATUREDCOURSE_FETCH_REPO_SUCCESS;
  payload: FeaturedCourseModel[];
}

interface FeaturedCourseRepositoryError {
  type: FeaturedCoursesActionType.FEATUREDCOURSE_FETCH_REPO_ERROR;
  payload: string;
}

export type FeaturedCourseAction =
  | FeaturedCourseRepository
  | FeaturedCourseRepositorySuccess
  | FeaturedCourseRepositoryError;
