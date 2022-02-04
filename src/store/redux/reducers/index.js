import { combineReducers } from "redux";

//Sub-reducers
import { loginReducer } from "./loginReducer";
import { kanbanReducer } from "./kanbanReducer";
import { generalReducer } from "./generalReducer";

export default combineReducers({
  loginReducer,
  kanbanReducer,
  generalReducer,
});
