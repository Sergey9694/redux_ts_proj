import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const TodoList: React.FC = () => {
    const { page, error, limit, loading, todos } = useTypedSelector(
        (state) => state.todos
    );

    const { fetchTodos, SetTodoPage } = useActions();

    const pages = [1, 2, 3, 4, 5]; //для пагинации (5 страниц)

    useEffect(() => {
        fetchTodos(page, limit);
    }, [page]); //зависимость от страницы, чтобы при переходе на др. страницу подгружался контент

    if (loading) {
        return <h1>Идет загрузка...</h1>;
    }
    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    {todo.id} - {todo.title}
                </div>
            ))}
            <div style={{ display: "flex" }}>
                {pages.map((p) => (
                    <div
                        style={{
                            border:
                                p === page
                                    ? "2px solid green"
                                    : "1px solid gray",
                            padding: 10,
                        }}
                        onClick={() => SetTodoPage(p)}
                    >
                        {p}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;
