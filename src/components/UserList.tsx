import { useTypedSelector } from "../hooks/useTypedSelector";

const UserList: React.FC = () => {
    // Достаем данные из состояния
    const { error, loading, users } = useTypedSelector((state) => state.users);
    return <div></div>;
};

export default UserList;
