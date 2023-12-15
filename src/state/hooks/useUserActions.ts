import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "..";

export const useUserActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreator, dispatch);
};
