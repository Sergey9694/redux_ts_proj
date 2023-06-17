import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActionCreators from "../store/action-creator/user"; //импортируем сюда все экшн креэйторы из user

//связываем экш креэйторы с диспатчем (диспатч уже не понадобится, достаточно будет вызвать экшн креайтор и он сам прокинется в диспатч)
export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(UserActionCreators, dispatch); //первый параметр (все экшн креэйторы, второй - диспатч)
};
