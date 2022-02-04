import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage({ loggedIn }) {
  return (
    <div>
      <p>Pagina no encontrada</p>
      <Link to={loggedIn ? "/dashboard" : "/"}>
        Ir a{loggedIn ? "l inicio" : " iniciar sesión"}
      </Link>
    </div>
  );
}

export default NotFoundPage;
