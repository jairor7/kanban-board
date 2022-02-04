import React from "react";
import { connect } from "react-redux";
import { login } from "../../store/redux/actions/loginAction";

export const Login = ({ login, loggedIn, ...props }) => {
  const startLogin = () => {
    login(props.history);
  };

  return (
    <section className="container-login">
      <div className="box-login">
        <h1 className="title-login">Login</h1>
        <span>Para ingresar inicia sesión con Google</span>
        <button className="btn btn-primary" onClick={startLogin}>
          Iniciar sesión con Google
        </button>
      </div>
    </section>
  );
};
const mapStateToProps = (state) => ({
  loggedIn: !!state.loginReducer.uid,
});

const mapDispatchToProps = (dispatch) => ({
  login: (history) => dispatch(login(history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
