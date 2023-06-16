import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useEffect } from "react";
import { fetchUsers } from "../store/action-creator/user";

const UserList: React.FC = () => {
    // Достаем данные из состояния
    const { error, loading, users } = useTypedSelector((state) => state.users);
    const dispatch = useDispatch();

    //используем экшн креэйтор fetchUsers
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    if (loading) {
        return <h1>Идет загрузка...</h1>;
    }
    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
};

export default UserList;
