import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../store/redux/actions/loginAction";
import { routes } from "../../routes/routes";
import { history } from "../../routes/AppRouter";

export const Header = ({ logout }) => {
  const handleLogout = () => {
    logout(history);
  };
  return (
    <header>
      <nav>
        <NavLink to={routes.dashboard}>Kanban</NavLink>
        <NavLink to={routes.task}>Tareas</NavLink>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  logout: (history) => dispatch(logout(history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
