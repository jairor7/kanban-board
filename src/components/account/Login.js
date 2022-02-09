import React, { useState } from "react";
import { connect } from "react-redux";
import {
  loginWithGoogle,
  loginWithEmail,
  createUserWithEmail,
  setIsLogin,
  setErrorLogin,
} from "../../store/redux/actions/loginAction";
import { history } from "../../routes/AppRouter";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

export const Login = ({
  loginWithGoogle,
  loggedIn,
  errorMessage,
  loginWithEmail,
  createUserWithEmail,
  isLogin,
  setIsLogin,
  setErrorLogin,
  ...props
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeConfirmationPassword = (e) => {
    setConfirmationPassword(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const startLoginWithEmail = (e) => {
    e.preventDefault();
    loginWithEmail(email, password, history);
  };

  const startLoginWhitGoogle = () => {
    loginWithGoogle(history);
  };

  const createAccount = (e) => {
    e.preventDefault();
    if (password !== confirmationPassword) {
      setErrorLogin("Las contraseñas no coinciden");
      return;
    }
    createUserWithEmail(name, email, password, history);
  };

  const onChangeIsLogin = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
    setConfirmationPassword("");
    setName("");
  };

  return (
    <section className="container-login">
      <div className="box-login">
        <h1 className="title-login">
          {isLogin ? "Inicia sesión" : "Crear cuenta"}
        </h1>
        <div className="box-login-form">
          {isLogin ? (
            <LoginForm
              startLoginWithEmail={startLoginWithEmail}
              onChangePassword={onChangePassword}
              onChangeEmail={onChangeEmail}
              email={email}
              password={password}
            />
          ) : (
            <SignUpForm
              createAccount={createAccount}
              onChangeEmail={onChangeEmail}
              onChangePassword={onChangePassword}
              onChangeName={onChangeName}
              onChangeConfirmationPassword={onChangeConfirmationPassword}
              name={name}
              email={email}
              password={password}
              confirmationPassword={confirmationPassword}
            />
          )}
        </div>
        <div className="box-login-options">
          {isLogin ? "Eres nuevo? " : "Ya tienes cuenta? "}
          <span className="btn-login-options" onClick={onChangeIsLogin}>
            {isLogin ? "Crea una cuenta" : "Inicia sesión"}
          </span>
        </div>
        <hr className="hr-text" />
        <span>Inicia sesión con Google</span>
        <button className="btn btn-primary" onClick={startLoginWhitGoogle}>
          Iniciar sesión con Google
        </button>
        {errorMessage && (
          <span className="form-text-error">{errorMessage}</span>
        )}
      </div>
    </section>
  );
};
const mapStateToProps = (state) => ({
  loggedIn: !!state.loginReducer.uid,
  errorMessage: state.loginReducer.error,
  isLogin: state.loginReducer.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
  loginWithGoogle: (history) => dispatch(loginWithGoogle(history)),
  loginWithEmail: (email, password, history) =>
    dispatch(loginWithEmail({ email, password, history })),
  createUserWithEmail: (name, email, password, history) =>
    dispatch(createUserWithEmail({ name, email, password, history })),
  setIsLogin: (isLogin) => dispatch(setIsLogin(isLogin)),
  setErrorLogin: (error) => dispatch(setErrorLogin(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
