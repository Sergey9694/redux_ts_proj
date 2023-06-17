//типизаци стейта
export interface TodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number; //текущая страница
    limit: number; // количество товарова на одной странице
}

//типизхация экшнов
export enum TodoActionsTypes {
    FETCH_TODOS = "FETCH_TODOS",
    FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
    FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
    SET_TODO_PAGE = "SET_TODO_PAGE",
}

//типизация каждого отдельного экшна

interface FetchTodoActions {
    type: TodoActionsTypes.FETCH_TODOS;
}
interface FetchTodoSuccessActions {
    type: TodoActionsTypes.FETCH_TODOS_SUCCESS;
    payload: any[];
}
interface FetchTodoErrorActions {
    type: TodoActionsTypes.FETCH_TODOS_ERROR;
    payload: string;
}
interface SetTodoPage {
    type: TodoActionsTypes.SET_TODO_PAGE;
    payload: number;
}

//отдельный тип связывающий все экшены

export type TodoActions =
    | FetchTodoActions
    | FetchTodoSuccessActions
    | FetchTodoErrorActions
    | SetTodoPage;
