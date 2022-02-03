import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../store/redux/actions/loginAction";
import { routes } from "../../routes/routes";

export const Header = ({ logout }) => {
  return (
    <header>
      <nav>
        <NavLink to={routes.dashboard}>Kanban</NavLink>
        <NavLink to={routes.task}>Tareas</NavLink>
        <button onClick={logout}>Logout</button>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
