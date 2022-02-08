import React from "react";
import { Route, Redirect } from "react-router-dom";
import { routes } from "./routes";

export const PublicRoute = ({ loggedIn, component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={() =>
        loggedIn ? (
          <Redirect to={{ pathname: routes.board }} />
        ) : (
          <Component loggedIn={loggedIn} />
        )
      }
    />
  );
};

export default PublicRoute;
