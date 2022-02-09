import {
  googleAuthProvider,
  auth,
  authInstance,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "../../../firebase/firebase";
import { routes } from "../../../routes/routes";
import { loginTypes, kanbanTypes } from "../types";
import { getAllTask } from "./kanbanAction";
import { setLoading } from "./generalAction";

export const setStateLogin = ({ uid, displayName, email, photoURL }) => {
  return (dispatch) => {
    dispatch({
      type: loginTypes.LOGIN,
      user: {
        uid,
        displayName,
        email,
        photoURL,
      },
    });
  };
};

export const setIsLogin = (isLogin) => {
  return {
    type: loginTypes.SET_IS_LOADING,
    isLogin,
  };
};

export const setErrorLogin = (error) => {
  return {
    type: loginTypes.LOGIN_ERROR,
    error,
  };
};

export const createUserWithEmail = ({ name, email, password, history }) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    return createUserWithEmailAndPassword(auth.getAuth(), email, password)
      .then((userCredential) => {
        updateProfile(auth.getAuth().currentUser, {
          displayName: name,
        })
          .then(() => {
            dispatch(setLoading(false));
            dispatch(setStateLogin(userCredential.user));
            dispatch(getAllTask(userCredential.user.uid));
            history.push(routes.board);
          })
          .catch((error) => {
            dispatch(setLoading(false));
            dispatch(setErrorLogin(error.message));
          });
      })
      .catch((error) => {
        dispatch(setLoading(false));
        dispatch(setErrorLogin(error.message));
      });
  };
};

export const loginWithEmail = ({ email, password, history }) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    return signInWithEmailAndPassword(auth.getAuth(), email, password)
      .then((userCredential) => {
        dispatch(setLoading(false));
        dispatch(setStateLogin(userCredential.user));
        dispatch(getAllTask(userCredential.user.uid));
        history.push(routes.board);
      })
      .catch((error) => {
        dispatch(setLoading(false));
        dispatch(setErrorLogin(error.message));
      });
  };
};

export const loginWithGoogle = (history) => {
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
