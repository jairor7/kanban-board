import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../store/redux/actions/loginAction";
import { routes } from "../../routes/routes";
import { history } from "../../routes/AppRouter";
import { ValidationModal } from "./ValidationModal";

export const Header = ({ logout }) => {
  const [activeModal, setActiveModal] = useState(false);
  const messageText = "¿Está seguro que desea cerrar sesión?";
  const titleText = "Cerrar sesión";
  const buttonText = "Cerrar sesión";

  const handleModal = () => {
    setActiveModal((activeModal) => !activeModal);
  };
  const actionModal = () => {
    logout(history);
  };

  return (
    <header>
      {activeModal && (
        <ValidationModal
          activeModal={activeModal}
          handleModal={handleModal}
          actionModal={actionModal}
          messageText={messageText}
          titleText={titleText}
          buttonText={buttonText}
        />
      )}
      <nav>
        <NavLink to={routes.board}>
          <div className="btn-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
              />
            </svg>
            <span className="content">Tablero</span>
          </div>
        </NavLink>
        <NavLink to={routes.task}>
          <div className="btn-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="content">Tareas</span>
          </div>
        </NavLink>
      </nav>
      <div>
        <div className="btn-content logout" onClick={handleModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  logout: (history) => dispatch(logout(history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
