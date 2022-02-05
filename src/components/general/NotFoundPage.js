import React from "react";
import { Link } from "react-router-dom";
import { history } from "../../routes/AppRouter";
import { routes } from "../../routes/routes";

function NotFoundPage({ loggedIn }) {
  const isNotFound =
    history.location.pathname !== routes.task &&
    history.location.pathname !== routes.board;
  return (
    isNotFound && (
      <section className="main-container">
        <div className="header-board">
          <div className="title-board">
            <span className="subtitle">404</span>
            <h1 className="title">Pagina no encontrada</h1>
          </div>
        </div>
        Para ir a{loggedIn ? " la página principal" : " iniciar sesión"} haga
        click
        <Link to={loggedIn ? "/board" : "/"}> aquí</Link>
      </section>
    )
  );
}

export default NotFoundPage;
