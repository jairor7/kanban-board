import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage({ loggedIn }) {
  return (
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
  );
}

export default NotFoundPage;
