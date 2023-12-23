import { useDispatch } from "react-redux";
import { featuredCourseCreator } from "../action-creators";
import { bindActionCreators } from "redux";

export const useFeaturedCourseAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(featuredCourseCreator, dispatch);
};
