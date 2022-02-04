import { combineReducers } from "redux";

//Sub-reducers
import { loginReducer } from "./loginReducer";
import { kanbanReducer } from "./kanbanReducer";

export default combineReducers({
  loginReducer,
  kanbanReducer,
});
