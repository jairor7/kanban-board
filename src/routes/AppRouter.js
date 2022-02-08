import React, { useState } from "react";
import { Router, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { connect } from "react-redux";
import { routes } from "./routes";
import { authInstance, onAuthStateChanged } from "../firebase/firebase";
import { setStateLogout } from "../store/redux/actions/loginAction";
import { getAllTask } from "../store/redux/actions/kanbanAction";

import Login from "../components/account/Login";
import Board from "../components/board/Board";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Tasks from "../components/board/Tasks";
import NotFoundPage from "../components/general/NotFoundPage";
import Loading from "../components/general/Loading";
import useDidMount from "use-did-mount";
import { setLoading } from "../store/redux/actions/generalAction";

export const history = createHistory();
export const AppRouter = ({ isLoading, getAllTask, setStateLogout }) => {
  const [loggedIn, setLoggedIn] = useState(undefined);
  useDidMount(() => {
    onAuthStateChanged(authInstance, (user) => {
      setLoggedIn(!!user);
      user ? getAllTask(user.uid, user) : setStateLogout();
    });
  });
  return isLoading ? (
    <Loading />
  ) : (
    loggedIn !== undefined && (
      <Router history={history}>
        <Switch>
          <PublicRoute
            path={routes.login}
            exact
            component={Login}
            loggedIn={loggedIn}
          />
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
          {loggedIn && (
            <PrivateRoute
              path={"*"}
              component={NotFoundPage}
              exact
              loggedIn={loggedIn}
            />
          )}
          {!loggedIn && (
            <PublicRoute
              path={"*"}
              component={NotFoundPage}
              loggedIn={loggedIn}
            />
          )}
        </Switch>
      </Router>
    )
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.generalReducer.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllTask: (uid, user) => dispatch(getAllTask(uid, user)),
  setStateLogout: () => dispatch(setStateLogout()),
  setLoading: (isLoading) => dispatch(setLoading(isLoading)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
