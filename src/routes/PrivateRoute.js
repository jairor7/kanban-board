import React from "react";
import { Route, Redirect } from "react-router-dom";
import { routes } from "./routes";
import Header from "../components/general/Header";

export const PrivateRoute = ({ loggedIn, component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={() =>
        loggedIn ? (
          <div>
            <Header />
            <Component />
          </div>
        ) : (
          <Redirect to={{ pathname: routes.login }} />
        )
      }
    />
  );
};

export default PrivateRoute;
