import { combineReducers } from "redux";

//Sub-reducers
import loginReducer from "./loginReducer";

export default combineReducers({
  loginReducer,
});
