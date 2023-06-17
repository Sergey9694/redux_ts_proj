import { Dispatch } from "redux";
import axios from "axios";
import { TodoActions, TodoActionsTypes } from "../../types/todo";

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoActions>) => {
        try {
            dispatch({ type: TodoActionsTypes.FETCH_TODOS });
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/todos",
                { params: { _page: page, _limit: limit } } //параметры изменения страницы и количество позиций списка дел
            );
            setTimeout(() => {
                dispatch({
                    type: TodoActionsTypes.FETCH_TODOS_SUCCESS,
                    payload: response.data,
                });
            }, 500);
        } catch (error) {
            dispatch({
                // сюда передается экшн феч юзер еррор который показывает ошибку
                type: TodoActionsTypes.FETCH_TODOS_ERROR,
                payload: "Произошла ошибка при загрузке списка дел",
            });
        }
    };
};

//экшн креэйтор для изменения номера страницы

export function SetTodoPage(page: number): TodoActions {
    return { type: TodoActionsTypes.SET_TODO_PAGE, payload: page };
}
