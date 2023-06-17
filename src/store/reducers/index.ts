import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { todoReducer } from "./todoReducer";

// комбайн для объединения редьюсеров
export const rootReducer = combineReducers({
    users: userReducer,
    todos: todoReducer,
});

//Получили тип Редьюсера
export type RootState = ReturnType<typeof rootReducer>;
