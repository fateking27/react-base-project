import { legacy_createStore } from "redux";
import { Action2 } from "./action/Action2";
import { Action, Action_ } from "./action/Action";
import AllReducer from "./reducers";

//创建仓库对象
const store = legacy_createStore(AllReducer);

// store.dispatch(Action);
// console.log(store.getState());

export default store;
