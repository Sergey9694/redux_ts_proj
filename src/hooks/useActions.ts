import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from "../store/action-creator/index"; //импортируем сюда все экшн креэйторы из index.ts в action-creator

//связываем экш креэйторы с диспатчем (диспатч уже не понадобится, достаточно будет вызвать экшн креайтор и он сам прокинется в диспатч)
export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionCreators, dispatch); //первый параметр (все экшн креэйторы, второй - диспатч)
};
