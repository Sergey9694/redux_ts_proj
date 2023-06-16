import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers";

//тот же самый useSelector только работающий с типами
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
