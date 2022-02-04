import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { connect } from "react-redux";
import { routes } from "./routes";

import Login from "../components/account/Login";
import Dashboard from "../components/board/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Task from "../components/board/Task";
import NotFoundPage from "../components/general/NotFoundPage";

export const history = createHistory();
export const AppRouter = ({ loggedIn }) => {
  return (
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
            path={routes.dashboard}
            component={Dashboard}
            exact
            loggedIn={loggedIn}
          />
          <PrivateRoute
            path={routes.task}
            component={Task}
            exact
            loggedIn={loggedIn}
          />
          <PrivateRoute component={NotFoundPage} loggedIn={loggedIn} />
        </Switch>
      )}
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.loginReducer.user.uid,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
