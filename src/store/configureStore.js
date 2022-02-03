import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
//Reducers combiner
import reducers from "./redux/reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
