import * as UserActionCreators from "./user";
import * as TodoActionCreators from "./todo";

//вовзращаем объект объединяющий все экшн креэйторы для туду и юзера
export default {
    ...UserActionCreators,
    ...TodoActionCreators,
};
