import {
  googleAuthProvider,
  auth,
  authInstance,
} from "../../../firebase/firebase";
import { routes } from "../../../routes/routes";
import { loginTypes } from "../types";

export const setStateLogin = ({ uid, displayName, email, photoURL }) => {
  return {
    type: loginTypes.LOGIN,
    user: {
      uid,
      displayName,
      email,
      photoURL,
    },
  };
};

const setErrorLogin = (error) => {
  return {
    type: loginTypes.LOGIN_ERROR,
    error,
  };
};

export const login = (history) => {
  return (dispatch) => {
    return auth
      .signInWithPopup(authInstance, googleAuthProvider)
      .then((result) => {
        dispatch(setStateLogin(result.user));
        history.push(routes.dashboard);
      })
      .catch((error) => {
        let errorMessage = "No se pudo iniciar sesión con Google";
        if (error.message !== "Firebase: Error (auth/popup-closed-by-user).") {
          errorMessage = error.message;
        }
        dispatch(setErrorLogin(errorMessage));
      });
  };
};

export const setStateLogout = () => {
  return {
    type: loginTypes.LOGOUT,
  };
};

export const logout = (history) => {
  return (dispatch) => {
    return auth.signOut(authInstance, googleAuthProvider).then(() => {
      dispatch(setStateLogout());
      history.push(routes.login);
    });
  };
};
