import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { connect } from "react-redux";
import { routes } from "./routes";
import { authInstance, onAuthStateChanged } from "../firebase/firebase";
import {
  setStateLogin,
  setStateLogout,
} from "../store/redux/actions/loginAction";

import Login from "../components/account/Login";
import Board from "../components/board/Board";
import PrivateRoute from "./PrivateRoute";
import Tasks from "../components/board/Tasks";
import NotFoundPage from "../components/general/NotFoundPage";
import Loading from "../components/general/Loading";
import useDidMount from "use-did-mount";

export const history = createHistory();
export const AppRouter = ({
  loggedIn,
  isLoading,
  setStateLogin,
  setStateLogout,
}) => {
  useDidMount(() => {
    onAuthStateChanged(authInstance, (user) => {
      user ? setStateLogin(user) : setStateLogout();
    });
  });

  return isLoading ? (
    <Loading />
  ) : (
    <Router history={history}>
      {!loggedIn ? (
        <Switch>
          <Route
            path={routes.login}
            render={() => <Login history={history} />}
            exact
          />
          <Route render={() => <NotFoundPage />} />
        </Switch>
      ) : (
        <Switch>
          <PrivateRoute
            path={routes.board}
            component={Board}
            exact
            loggedIn={loggedIn}
          />
          <PrivateRoute
            path={routes.task}
            component={Tasks}
            exact
            loggedIn={loggedIn}
          />
          <PrivateRoute
            path="*"
            exact={true}
            component={NotFoundPage}
            loggedIn={loggedIn}
          />
        </Switch>
      )}
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.loginReducer.user.uid,
    isLoading: state.generalReducer.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setStateLogin: (user) => dispatch(setStateLogin(user)),
  setStateLogout: () => dispatch(setStateLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
