import React from "react";
import { connect } from "react-redux";
import { login } from "../../store/redux/actions/loginAction";

export const Login = ({ login }) => {
  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
};
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(login()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
