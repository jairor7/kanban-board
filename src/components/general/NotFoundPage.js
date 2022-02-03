import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <p>Pagina no encontrada</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}

export default NotFoundPage;
