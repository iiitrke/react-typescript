import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { featuredcoursesCreator } from "../action-creators/featurecourse-action-creator";

export const useFeaturedCourseAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(featuredcoursesCreator, dispatch);
};
