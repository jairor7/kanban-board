import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import AppRouter from "./routes/AppRouter";
import { authInstance, onAuthStateChanged } from "./firebase/firebase";
import { loginTypes } from "./store/redux/types";

onAuthStateChanged(authInstance, (user) => {
  if (user) {
    store.dispatch({ type: loginTypes.LOGIN, user: user });
  } else {
    store.dispatch({ type: loginTypes.LOGOUT });
  }
});

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById("root"));
