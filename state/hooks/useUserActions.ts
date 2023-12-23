import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { userActionCreator } from "../action-creators";

export const useUserActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(userActionCreator, dispatch);
};
