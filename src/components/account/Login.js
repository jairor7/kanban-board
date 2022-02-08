import React from "react";
import { connect } from "react-redux";
import { login } from "../../store/redux/actions/loginAction";
import { history } from "../../routes/AppRouter";

export const Login = ({ login, loggedIn, errorMessage, ...props }) => {
  const startLogin = () => {
    login(history);
  };
  return (
    <section className="container-login">
      <div className="box-login">
        <h1 className="title-login">Login</h1>
        <span>Para ingresar, inicia sesión con Google</span>
        <span className="form-text-error">{errorMessage}</span>
        <button className="btn btn-primary" onClick={startLogin}>
          Iniciar sesión con Google
        </button>
      </div>
    </section>
  );
};
const mapStateToProps = (state) => ({
  loggedIn: !!state.loginReducer.uid,
  errorMessage: state.loginReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  login: (history) => dispatch(login(history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
