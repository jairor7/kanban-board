import React from "react";
import { connect } from "react-redux";
import { login } from "../../store/redux/actions/loginAction";

export const Login = ({ login, loggedIn, ...props }) => {
  const startLogin = () => {
    login(props.history);
  };

  return (
    <div>
      <button onClick={startLogin}>Login</button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  loggedIn: !!state.loginReducer.uid,
});

const mapDispatchToProps = (dispatch) => ({
  login: (history) => dispatch(login(history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
