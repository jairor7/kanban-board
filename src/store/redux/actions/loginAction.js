import {
  googleAuthProvider,
  auth,
  authInstance,
} from "../../../firebase/firebase";
import { routes } from "../../../routes/routes";
import { loginTypes, kanbanTypes } from "../types";
import { getAllTask } from "./kanbanAction";
import { setLoading } from "./generalAction";

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
    dispatch(setLoading(true));
    return auth
      .signInWithPopup(authInstance, googleAuthProvider)
      .then((result) => {
        dispatch(setLoading(false));
        dispatch(setStateLogin(result.user));
        dispatch(getAllTask(result.user.uid));
        history.push(routes.board);
      })
      .catch((error) => {
        dispatch(setLoading(false));
        let errorMessage =
          "No se pudo iniciar sesión con Google, intentalo de nuevo";
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
    dispatch(setLoading(true));
    return auth.signOut(authInstance, googleAuthProvider).then(() => {
      dispatch(setLoading(false));
      dispatch(setStateLogout());
      dispatch({
        type: kanbanTypes.SET_KANBAN_DATA,
        tasks: [],
      });
      history.push(routes.login);
    });
  };
};
