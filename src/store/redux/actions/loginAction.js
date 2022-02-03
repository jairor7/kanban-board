import {
  googleAuthProvider,
  auth,
  authInstance,
} from "../../../firebase/firebase";
import { loginTypes } from "../types";

export const setStateLogin = (user) => {
  return {
    type: loginTypes.LOGIN,
    uid: user.uid,
  };
};

export const login = () => {
  return () => {
    return auth.signInWithPopup(authInstance, googleAuthProvider);
  };
};

export const setStateLogout = () => {
  return {
    type: loginTypes.LOGOUT,
  };
};

export const logout = () => {
  return () => {
    return auth.signOut(authInstance, googleAuthProvider);
  };
};
