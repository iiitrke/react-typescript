import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../reducers";

export const useTypedSeletor: TypedUseSelectorHook<RootState> = useSelector;
