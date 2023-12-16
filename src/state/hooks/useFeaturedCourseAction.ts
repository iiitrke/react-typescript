import { useDispatch } from "react-redux";
import { featuredCoureseCreator } from "../action-creators";
import { bindActionCreators } from "redux";

export const useFeaturedCourseAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(featuredCoureseCreator, dispatch);
};
