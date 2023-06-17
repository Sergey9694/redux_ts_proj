import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const TodoList: React.FC = () => {
    const { page, error, limit, loading, todos } = useTypedSelector(
        (state) => state.todos
    );

    const { fetchTodos } = useActions();

    useEffect(() => {
        fetchTodos(page, limit);
    }, []);

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
        </div>
    );
};

export default TodoList;
