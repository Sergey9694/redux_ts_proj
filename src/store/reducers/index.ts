import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

// комбайн для объединения редьюсеров
export const rootReducer = combineReducers({
    users: userReducer,
});
