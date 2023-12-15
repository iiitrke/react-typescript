import { useDispatch } from "react-redux";
import { introActionCreator } from "..";
import { bindActionCreators } from "redux";

export const useIntroAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(introActionCreator, dispatch);
};
